import { CurriculumLevel } from '../types';

export const curriculumLevels: CurriculumLevel[] = [
  {
    id: "basic-zero",
    title: "Basic Zero",
    duration: "1 mes",
    objective: "Para estudiantes sin experiencia previa. Sentaremos las bases del idioma desde cero.",
    mcfrEquivalent: "A1",
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
                bgColor: "bg-gradient-to-br from-blue-500 to-blue-700"
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
                bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-1",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Familia y Posesivos" + ")",
                                type: 'emoji-game',
                                content: ['💼 ➕ 🗣️ ➕ 🤝'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I have a business meeting.", "Let's negotiate a deal.", "I am looking for a job."],
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-2",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 5: There is / There are y Lugares" + ")",
                                type: 'emoji-game',
                                content: ['✈️ ➕ 🏨 ➕ 🌴'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["We are going on vacation.", "I need to book a flight.", "I am lost in the city."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-3",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 6: Meses, Días y Números Ordinales" + ")",
                                type: 'emoji-game',
                                content: ['☕ ➕ 💻 ➕ 😩'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I love drinking coffee.", "Working late makes me tired.", "My computer is broken."],
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-4",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 7: Artículos y Demostrativos" + ")",
                                type: 'emoji-game',
                                content: ['📅 ➕ ❌ ➕ 😢'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["The meeting is cancelled.", "I lost my calendar.", "I am late for my appointment."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-5",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 8: Partes del Cuerpo y Mascotas" + ")",
                                type: 'emoji-game',
                                content: ['📈 ➕ 💰 ➕ 🎉'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["Sales are going up!", "I spent too much money.", "Let's have a party."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-6",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 9: Comida y Necesidades Básicas" + ")",
                                type: 'emoji-game',
                                content: ['🚗 ➕ 🚦 ➕ 😡'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I got a speeding ticket.", "The traffic is terrible.", "My car broke down."],
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
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-7",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 10: Direcciones y Preposiciones de Lugar" + ")",
                                type: 'emoji-game',
                                content: ['🌧️ ➕ 🛋️ ➕ 📺'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I will stay home and watch TV.", "It's raining outside.", "The TV is broken."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
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
      },
    {
      id: "c-adults-basic-zero-11",
      title: "Clase 11: Saludos, despedidas y conversación de supervivencia",
      duration: "60 minutos",
      objective: "Aprender a saludar, despedirse y manejar frases de supervivencia en inglés.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Activar la atención e introducir el tema de forma natural.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! How do you say Hello?",
              description: "Let's talk about greetings.",
              content: ["What do you say when you meet someone?", "Do you know any greetings in English?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar a los alumnos qué saludos conocen y cómo saludan en su idioma nativo."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Aprender el vocabulario formal e informal para saludos y despedidas.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Greetings (Saludos)",
              description: "Formal vs Informal",
              content: ["Formal: Hello, Good morning, Good afternoon, Good evening.", "Informal: Hi, Hey, What's up?"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Farewells (Despedidas)",
              description: "Formal vs Informal",
              content: ["Formal: Goodbye, Have a nice day.", "Informal: Bye, See you later, See you tomorrow, Take care."],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600",
              imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 4",
              title: "Survival Phrases",
              description: "Frases de supervivencia",
              content: ["I don't understand (No entiendo)", "Can you repeat, please? (¿Puedes repetir, por favor?)", "How do you say [word] in English? (¿Cómo se dice [palabra] en inglés?)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "More Survival Phrases",
              description: "Preguntas útiles en clase",
              content: ["What does [word] mean? (¿Qué significa [palabra]?)", "Can you speak slower? (¿Puedes hablar más despacio?)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar la diferencia entre formal e informal, hacer repetir las frases para corregir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Fijar vocabulario identificando saludos y despedidas en contexto.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["John: Good morning, Ms. Smith.", "Ms. Smith: Hello, John. How are you?", "John: I am fine, thank you. And you?", "Ms. Smith: I am good. See you later!"],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Greetings",
              content: ["It is 9:00 AM. You say: ______ morning!"],
              options: ["Good", "Hello", "Bye"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Survival Phrases",
              content: ["I didn't hear you. Can you ______, please?"],
              options: ["say", "repeat", "understand"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Farewells",
              content: ["Class is over. ______ you tomorrow!"],
              options: ["Look", "See", "Watch"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. Good night, how are you? (Meeting someone)", "2. How do you say 'perro' on English?", "3. I not understand."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-11",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Clase 11: Saludos, despedidas)",
              type: 'emoji-game',
              content: ['👋 ➕ 🌅'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["Good morning.", "See you later.", "Good night."],
              correctOptionIndex: 0
            }
          ],
          action: "Corregir errores comunes, como usar 'Good night' para saludar en lugar de 'Good evening'."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Simular una conversación básica de encuentro y despedida.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: Meeting a Colleague",
              description: "Simulación",
              content: ["Person A: Greet your colleague formal/informal.", "Person B: Answer and ask how they are.", "Person A & B: Say goodbye."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Greetings",
              content: ["Which one is informal?"],
              options: ["Good morning", "What's up?", "Good evening"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Farewells",
              content: ["You leave a party at 11:00 PM. You say:"],
              options: ["Good night", "Good evening", "Good afternoon"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Survival Phrases",
              content: ["You want to know the English word for 'gato'. You ask:"],
              options: ["What means 'gato'?", "How do you say 'gato' in English?", "Can you repeat 'gato'?"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Survival Phrases",
              content: ["The teacher is talking too fast. You say:"],
              options: ["Can you speak slower?", "I don't know.", "Repeat me."],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Escuchar las interacciones de los alumnos y evaluar su fluidez con las frases."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso final y conclusión.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can greet people!", "You can survive in class!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write a short dialogue greeting a friend, asking how they are, and saying goodbye."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-11",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY",
              content: ["Identify 3 greetings used in the video.", "Write them down for the next class."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Animar a los alumnos a usar estas frases desde ya en su día a día."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-12",
      title: "Clase 12: El alfabeto y deletreo de nombres",
      duration: "60 minutos",
      objective: "Aprender el alfabeto en inglés y saber deletrear nombres y palabras clave.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Introducir el alfabeto y su importancia.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! A, B, C...",
              description: "Let's talk about the alphabet.",
              content: ["Do you know the alphabet in English?", "Why is spelling important?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar a los alumnos si saben deletrear su nombre."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Aprender la pronunciación correcta de cada letra.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "The Alphabet (A - M)",
              description: "Listen and repeat",
              content: ["A (ei), B (bi), C (si), D (di), E (i), F (ef), G (yi)", "H (eich), I (ai), J (yei), K (kei), L (el), M (em)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "The Alphabet (N - Z)",
              description: "Listen and repeat",
              content: ["N (en), O (ou), P (pi), Q (kiu), R (ar), S (es), T (ti)", "U (iu), V (vi), W (dobl-iu), X (ex), Y (uai), Z (zi)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Asking for Spelling",
              description: "Preguntas útiles",
              content: ["How do you spell your name? (¿Cómo deletreas tu nombre?)", "How do you spell [word]? (¿Cómo se deletrea [palabra]?)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Special Characters",
              description: "Email addresses",
              content: ["@ = at", ". = dot", "_ = underscore", "- = dash"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Repasar sonidos confusos como A/E/I y G/J."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Fijar la pronunciación mediante ejercicios de comprensión auditiva y lectura.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["A: What is your email address?", "B: It is john.smith@email.com", "A: Can you spell your last name?", "B: S-M-I-T-H."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Spelling",
              content: ["How do you ______ your name?"],
              options: ["say", "spell", "speak"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Special Characters",
              content: ["My email is maria ______ gmail.com"],
              options: ["at", "in", "on"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Letters",
              content: ["The letter E is pronounced as:"],
              options: ["/ei/", "/i/", "/ai/"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. How spell your name?", "2. My email is john(at)gmail(dot)com.", "3. C is pronounced /kei/."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-12",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Clase 12: Alfabeto)",
              type: 'emoji-game',
              content: ['📧 ➕ 📝'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["Spelling an email address.", "Reading a book.", "Playing a game."],
              correctOptionIndex: 0
            }
          ],
          action: "Dictar nombres y correos para que los alumnos los escriban."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Deletrear nombres y correos propios en parejas.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: At the Hotel",
              description: "Simulación",
              content: ["Person A (Receptionist): Ask for name and email, and ask to spell them.", "Person B (Guest): Answer and spell clearly."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Alphabet",
              content: ["Which letter sounds like 'you'?"],
              options: ["E", "U", "I"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Alphabet",
              content: ["Which letter sounds like 'why'?"],
              options: ["Y", "W", "I"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Special Characters",
              content: ["How do you say '-' in an email?"],
              options: ["Dot", "Underscore", "Dash"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Spelling",
              content: ["How do you spell 'CAT'?"],
              options: ["C-A-T", "S-A-T", "K-A-T"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar el Role Play, asegurando que pronuncian bien A/E/I."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso final.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can spell your name!", "You can give your email address."],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write down 5 names of your family members and practice spelling them out loud."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-12",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/75p-N9YKqNo",
              content: ["Listen to the song and try to sing along to practice the pronunciation of the letters."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Felicitar a la clase por el esfuerzo."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-13",
      title: "Clase 13: Países, nacionalidades y procedencia",
      duration: "60 minutos",
      objective: "Aprender a decir de dónde eres y hablar sobre diferentes nacionalidades.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Romper el hielo.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! Where are you from?",
              description: "Let's travel the world.",
              content: ["Where were you born?", "Have you visited other countries?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2fbf847c0c?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Hacer un sondeo rápido de los países de origen o que les gustaría visitar."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Presentar vocabulario de países y el verbo To Be para origen.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Countries & Nationalities (1)",
              description: "Países y Nacionalidades",
              content: ["Mexico -> Mexican", "The United States -> American", "Canada -> Canadian"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Countries & Nationalities (2)",
              description: "Países y Nacionalidades",
              content: ["Spain -> Spanish", "Japan -> Japanese", "Brazil -> Brazilian"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Verb To Be + From",
              description: "Origin",
              content: ["I am from Mexico. (Soy de México)", "She is from Spain. (Ella es de España)", "They are from Japan."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Asking for Origin",
              description: "Questions",
              content: ["Where are you from?", "Where is he/she from?", "What is your nationality?"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Hacer hincapié en que las nacionalidades en inglés siempre van con mayúscula."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Fijar estructuras mediante ejercicios.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["A: Where are you from?", "B: I am from Italy. I am Italian.", "A: Oh, nice! My friend is from Italy too."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Origin",
              content: ["I ______ from Canada."],
              options: ["is", "am", "are"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Nationalities",
              content: ["He is from Japan. He is ______."],
              options: ["Japan", "Japanese", "Japanian"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Questions",
              content: ["______ are you from?"],
              options: ["What", "How", "Where"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I am from mexican.", "2. Where you are from?", "3. she is spanish."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-13",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Clase 13)",
              type: 'emoji-game',
              content: ['👨 ➕ 🇯🇵'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["He is Japanese.", "He is from China.", "He likes sushi."],
              correctOptionIndex: 0
            }
          ],
          action: "Resolver los ejercicios y aclarar dudas sobre el verbo to be."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Aplicar lo aprendido en interacción real.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: International Conference",
              description: "Simulación",
              content: ["Person A: Ask Person B where they are from.", "Person B: Answer with a fake country and nationality.", "Swap roles."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Nationalities",
              content: ["If someone is from the US, they are:"],
              options: ["United Statesian", "American", "US citizen"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Verbs",
              content: ["They ______ from Brazil."],
              options: ["is", "am", "are"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Questions",
              content: ["______ is she from?"],
              options: ["Where", "What", "Who"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Capitalization",
              content: ["Which sentence is correct?"],
              options: ["I am from mexico.", "I am from Mexico.", "i am from Mexico."],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Fomentar que usen países que no hayan visto en la lista principal."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso final.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can talk about your origin!", "You know many nationalities."],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write 5 sentences about famous people and where they are from. Example: Lionel Messi is from Argentina."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-13",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/jZJCAoXvJro",
              content: ["Identify 3 countries mentioned in the video."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-14",
      title: "Clase 14: Profesiones y ocupaciones comunes",
      duration: "60 minutos",
      objective: "Aprender a preguntar y responder sobre profesiones.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Introducir el tema.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! What do you do?",
              description: "Let's talk about jobs.",
              content: ["What is your job?", "Do you like your job?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar a los alumnos a qué se dedican."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Aprender oficios comunes y el uso de a/an.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Professions (1)",
              description: "Jobs",
              content: ["Teacher, Doctor, Nurse, Engineer, Lawyer"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Professions (2)",
              description: "Jobs",
              content: ["Student, Waiter, Mechanic, Chef, Police officer"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "A vs An",
              description: "Grammar Rule",
              content: ["Use 'a' before consonant sounds: a doctor, a teacher.", "Use 'an' before vowel sounds: an engineer, an actor."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Asking about Jobs",
              description: "Questions",
              content: ["What do you do? (¿A qué te dedicas?)", "I am a teacher."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar que 'What do you do?' es más natural que 'What is your profession?'."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Fijar a/an y profesiones.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["A: What do you do?", "B: I am an engineer. And you?", "A: I am a student."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Articles",
              content: ["She is ______ doctor."],
              options: ["a", "an", "the"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Articles",
              content: ["He is ______ architect."],
              options: ["a", "an", "nothing"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Questions",
              content: ["______ do you do?"],
              options: ["What", "Where", "How"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I am doctor.", "2. What are you do?", "3. He is a engineer."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-14",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Clase 14)",
              type: 'emoji-game',
              content: ['👨‍🍳 ➕ 🍲'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["He is a chef.", "He is a mechanic.", "He is a teacher."],
              correctOptionIndex: 0
            }
          ],
          action: "Resolver los ejercicios y corregir errores comunes omitiendo el artículo 'a'."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Preguntar profesiones entre compañeros.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: Job Fair",
              description: "Simulación",
              content: ["Ask 3 partners: What do you do?", "Answer with your real job or a dream job."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Articles",
              content: ["I am ______ actor."],
              options: ["a", "an", "the"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Jobs",
              content: ["A person who works in a hospital is a:"],
              options: ["Teacher", "Doctor", "Chef"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Questions",
              content: ["How to ask someone's profession?"],
              options: ["What is your job?", "What do you do?", "Both are correct"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Grammar",
              content: ["She ______ a police officer."],
              options: ["am", "is", "are"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Monitorear la fluidez."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso final.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can talk about jobs!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write down the professions of 3 people in your family."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-14",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/ckKQvlIT9kc",
              content: ["Identify 3 jobs mentioned in the video."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-15",
      title: "Clase 15: Vocabulario de la familia y posesivos",
      duration: "60 minutos",
      objective: "Aprender los miembros de la familia y el adjetivo posesivo (my, your, his, her).",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Introducir el tema familiar.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! Family Trees",
              description: "Let's talk about family.",
              content: ["Is your family big or small?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar cuántos hermanos tienen."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Vocabulario familiar y posesivos.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Family Members (1)",
              description: "Core family",
              content: ["Mother, Father, Parents", "Brother, Sister, Siblings"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Family Members (2)",
              description: "Extended family",
              content: ["Grandmother, Grandfather, Grandparents", "Aunt, Uncle, Cousin"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Possessive Adjectives",
              description: "My, Your, His, Her",
              content: ["I -> My (Mi)", "You -> Your (Tu)", "He -> His (Su de él)", "She -> Her (Su de ella)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Examples",
              description: "In context",
              content: ["This is my mother.", "His name is John.", "Her brother is a doctor."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar la diferencia entre His y Her, un error muy común en hispanohablantes."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Fijar posesivos.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["This is my friend. His name is David. His sister is an engineer. Her name is Sarah."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Possessives",
              content: ["(He) ______ name is Mark."],
              options: ["He", "His", "Her"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Possessives",
              content: ["(She) ______ mother is a teacher."],
              options: ["She", "Her", "His"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Family",
              content: ["My mother's brother is my ______."],
              options: ["Father", "Uncle", "Cousin"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. She name is Anna.", "2. He is my brother. Her name is Tom.", "3. I live with mine parents."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-15",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Clase 15)",
              type: 'emoji-game',
              content: ['👨‍👩‍👧‍👦 ➕ 🏠'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["My family in our house.", "A party with friends.", "Going to school."],
              correctOptionIndex: 0
            }
          ],
          action: "Corregir his/her en los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Hablar sobre la familia.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: Tell me about your family",
              description: "Simulación",
              content: ["Person A: Tell Person B about 2 members of your family.", "Example: This is my brother. His name is... He is a..."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Possessives",
              content: ["______ father is a doctor. (She)"],
              options: ["She", "His", "Her"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Possessives",
              content: ["I love ______ dog."],
              options: ["me", "my", "I"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Family",
              content: ["My father's father is my ______."],
              options: ["Uncle", "Grandfather", "Cousin"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Family",
              content: ["My aunt's children are my ______."],
              options: ["Siblings", "Cousins", "Nephews"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Motivar a compartir detalles reales si se sienten cómodos."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso final.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can talk about your family!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Draw a small family tree and write 3 sentences describing your family using His and Her."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-15",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/FHaObkHEkHQ",
              content: ["Identify all the family members mentioned in the video."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    },
    {
      id: "c-adults-basic-zero-16",
      title: "Clase 16: Repaso General de Basic Zero",
      duration: "60 minutos",
      objective: "Repasar todos los temas vistos para prepararse para la evaluación.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Relajarse antes del repaso final.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome to the Final Review!",
              description: "You did it!",
              content: ["How do you feel about your English now?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Felicitar a los alumnos por llegar a la última clase del nivel."
        },
        {
          id: "s2",
          title: "2. Mega Review (Part 1)",
          duration: "15 minutos",
          objective: "Repasar saludos, abecedario, países y profesiones.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Greetings & Alphabet",
              description: "Review",
              content: ["Hello, Good morning, How are you?", "Can you spell your name?"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Countries & Jobs",
              description: "Review",
              content: ["Where are you from? I am from Canada.", "What do you do? I am an engineer."],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Family & Possessives",
              description: "Review",
              content: ["This is my mother. Her name is Mary."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Verb To Be",
              description: "Review",
              content: ["I am, You are, He is, She is, It is, We are, They are."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Hacer preguntas rápidas a cada alumno para verificar retención."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Evaluar comprensión global.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["Hello! My name is Alex. I am from Mexico. I am a student. My father is a doctor. His name is Carlos."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Mix",
              content: ["______ is your job?"],
              options: ["What", "Where", "How"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Mix",
              content: ["I am ______ teacher."],
              options: ["a", "an", "the"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Mix",
              content: ["They ______ from Spain."],
              options: ["is", "am", "are"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. She are my sister.", "2. What are you do?", "3. I from Mexico."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-16",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Clase 16)",
              type: 'emoji-game',
              content: ['🏆 ➕ 🎓'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["Level complete!", "Going to a party.", "Reading a book."],
              correctOptionIndex: 0
            }
          ],
          action: "Resolver los ejercicios aclarando las dudas finales."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Producción libre.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Final Role Play",
              description: "Simulación",
              content: ["Introduce yourself completely:", "Name, Country, Job, Family detail."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Mix",
              content: ["Which one is a greeting?"],
              options: ["Goodbye", "Hello", "See you"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Mix",
              content: ["How do you spell 'DOG'?"],
              options: ["D-O-G", "B-O-G", "D-A-G"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Mix",
              content: ["(He) ______ name is Peter."],
              options: ["His", "Her", "He"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Mix",
              content: ["She is ______ architect."],
              options: ["a", "an", "nothing"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Evaluar la capacidad de los alumnos para mantener la introducción."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre del nivel y motivación.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Basic Zero Complete!",
              description: "Congratulations!",
              content: ["You are ready for Basic 1!", "Great job!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Prepare for Evaluation",
              description: "Next class",
              content: ["Next time, we will have a short oral evaluation.", "Don't worry, just practice what we learned."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            }
          ],
          action: "Despedir el nivel y explicar cómo será la evaluación oral."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  },
  {
    id: "basic-1",
    title: "Basic 1",
    duration: "1 mes",
    objective: "Comienza a comunicarte. Aprenderás a hablar sobre tu vida diaria y entorno.",
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
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-8",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Future with Will vs Going to" + ")",
                                type: 'emoji-game',
                                content: ['🏋️ ➕ 🥗 ➕ 💪'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I need to eat healthy.", "I am getting fit.", "I don't like vegetables."],
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-9",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Preguntas Yes/No con Futuro y Contracciones" + ")",
                                type: 'emoji-game',
                                content: ['📱 ➕ 🔋 ➕ ☠️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["My phone is dead.", "I need a new phone.", "I am playing a game."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-10",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Preguntas WH con Futuro" + ")",
                                type: 'emoji-game',
                                content: ['🗣️ ➕ 👂 ➕ 🤔'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["Can you repeat that?", "I don't understand.", "I am listening carefully."],
                                correctOptionIndex: 2
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
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-11",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: How much, How many, What kind" + ")",
                                type: 'emoji-game',
                                content: ['🏥 ➕ 🩺 ➕ 💊'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I am feeling sick.", "I am a doctor.", "I need some medicine."],
                                correctOptionIndex: 0
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
      },
{
      id: "c-adults-basic-1-5",
      title: "Clase 5: Rutinas diarias y la hora",
      duration: "60 minutos",
      objective: "Aprender a describir la rutina diaria y decir la hora en inglés.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Activar vocabulario sobre el día a día.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! What time do you wake up?",
              description: "Let's talk about routines.",
              content: ["Are you a morning person?", "What is the first thing you do in the morning?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar a los alumnos a qué hora se despertaron hoy."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Conocer verbos de rutina y cómo decir la hora.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Daily Routine Verbs",
              description: "Acciones diarias",
              content: ["Wake up / Get up", "Take a shower / Get dressed", "Have breakfast / Go to work"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "More Verbs",
              description: "Tarde y Noche",
              content: ["Have lunch / Finish work", "Go home / Have dinner", "Watch TV / Go to sleep"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Telling the Time (1)",
              description: "Cómo decir la hora",
              content: ["It's seven o'clock (7:00)", "It's half past ten (10:30)", "It's a quarter to nine (8:45)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Telling the Time (2)",
              description: "Forma digital (Más fácil)",
              content: ["7:30 = Seven thirty", "8:15 = Eight fifteen", "9:45 = Nine forty-five"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar que la forma digital es muy común hoy en día, pero deben entender 'half past' y 'quarter to'."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Unir rutinas con horas específicas.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["I wake up at seven o'clock. I have breakfast at seven thirty. I go to work at eight fifteen."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Routines",
              content: ["I usually take a ______ in the morning."],
              options: ["shower", "breakfast", "sleep"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Time",
              content: ["10:30 is ______."],
              options: ["half past ten", "quarter to ten", "ten o'clock"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Prepositions",
              content: ["I have lunch ______ 1:00 PM."],
              options: ["in", "on", "at"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I wake up in 7 AM.", "2. He have breakfast.", "3. It's quarter past to nine."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-5",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Rutinas)",
              type: 'emoji-game',
              content: ['🥱 ➕ 🛏️ ➕ ☕'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I wake up and drink coffee.", "I go to sleep late.", "I watch TV in bed."],
              correctOptionIndex: 0
            }
          ],
          action: "Hacer énfasis en la preposición 'at' para las horas."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Describir la propia rutina diaria.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: My typical day",
              description: "Habla sobre tu rutina",
              content: ["Tell your partner 3 things you do in the morning and at what time.", "Example: I wake up at... Then I..."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Routines",
              content: ["The opposite of 'wake up' is:"],
              options: ["get up", "go to sleep", "have dinner"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Time",
              content: ["4:15 is:"],
              options: ["quarter past four", "half past four", "four thirty"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Prepositions",
              content: ["I go to the gym ______ 6:00 PM."],
              options: ["at", "in", "on"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Phrases",
              content: ["What time ______?"],
              options: ["is it", "it is", "does it"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar que digan la hora de forma fluida."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso final de rutinas y tareas.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can describe your day!", "You can tell the time!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write down your perfect daily routine. (e.g. I wake up at 10 AM, I have pizza for breakfast...)"],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-5",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/eUXkj6j6Ezw",
              content: ["Identify 3 actions from the video's routine."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase animándolos a decir la hora en inglés mentalmente durante el día."
        }
      ]
    },
{
      id: "c-adults-basic-1-6",
      title: "Clase 6: Adverbios de frecuencia (always, sometimes, never)",
      duration: "60 minutos",
      objective: "Aprender a expresar qué tan seguido realizamos una acción.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Conectar rutinas con frecuencia.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! How often...?",
              description: "Do you do this every day?",
              content: ["Do you drink coffee every morning?", "Do you exercise on Sundays?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Preguntar a los alumnos si hacen ciertas actividades todos los días o casi nunca."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Introducir los adverbios de frecuencia y su posición en la oración.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Adverbs of Frequency",
              description: "Qué tan seguido...",
              content: ["Always (100%)", "Usually / Often (70-80%)", "Sometimes (50%)", "Hardly ever / Rarely (10%)", "Never (0%)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Rule #1: Action Verbs",
              description: "Antes del verbo principal",
              content: ["Subject + Adverb + Verb", "I ALWAYS drink coffee.", "She NEVER eats meat."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 4",
              title: "Rule #2: Verb To Be",
              description: "Después del verbo To Be",
              content: ["Subject + Verb To Be + Adverb", "I am ALWAYS happy.", "They are NEVER late."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Asking Questions",
              description: "How often...?",
              content: ["How often do you go to the cinema?", "- I usually go once a month."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar bien la diferencia de posición entre verbos normales y el verbo To Be."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Practicar la posición correcta del adverbio.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["I usually wake up at 7 AM. I am never late for work. Sometimes, I have pizza for dinner."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Action Verbs",
              content: ["I ______ go to the gym on Mondays. (100%)"],
              options: ["sometimes", "never", "always"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Verb To Be",
              content: ["He ______ late for class. (0%)"],
              options: ["is never", "never is", "never does"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Questions",
              content: ["______ do you play soccer?"],
              options: ["How much", "How often", "What often"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I always am happy.", "2. She play sometimes tennis.", "3. How often you read?"],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-6",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Frecuencia)",
              type: 'emoji-game',
              content: ['❌ ➕ 🥦'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I never eat broccoli.", "I always eat broccoli.", "Broccoli is bad."],
              correctOptionIndex: 0
            }
          ],
          action: "Corregir activamente cuando pongan el adverbio después de un verbo de acción."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Hablar sobre hábitos y frecuencias.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: The Interview",
              description: "Habla sobre tus hábitos",
              content: ["Ask your partner: How often do you...?", "Cook, Read a book, Travel, Play video games."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Frequency",
              content: ["Which one means 0%?"],
              options: ["Always", "Sometimes", "Never"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Order",
              content: ["Which sentence is correct?"],
              options: ["She usually wakes up early.", "She wakes usually up early.", "She wakes up usually early."],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "To Be",
              content: ["I ______ tired on Fridays."],
              options: ["always am", "am always", "always"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Questions",
              content: ["______ do you go to the dentist?"],
              options: ["How often", "When often", "What time"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Fomentar que usen 'Hardly ever' o 'Rarely' en vez de solo sometimes/never."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Repaso de adverbios de frecuencia.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can talk about your habits!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write 3 things you ALWAYS do, and 3 things you NEVER do."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-6",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/59J6x7rX99s",
              content: ["Listen to how native speakers place the adverbs in their sentences."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    },
{
      id: "c-adults-basic-1-7",
      title: "Clase 7: Comidas, bebidas y vocabulario de restaurantes",
      duration: "60 minutos",
      objective: "Aprender vocabulario de comida y cómo pedir en un restaurante.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Hablar sobre comida favorita.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! Are you hungry?",
              description: "Let's talk about food.",
              content: ["What is your favorite food?", "Do you like cooking?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Animar a los alumnos a compartir su plato favorito en inglés."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Vocabulario de comidas y frases útiles en restaurantes.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Food & Drinks",
              description: "Vocabulario básico",
              content: ["Meat, Chicken, Fish, Salad", "Water, Coffee, Tea, Juice, Beer"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Meals of the Day",
              description: "Comidas del día",
              content: ["Breakfast (Desayuno)", "Lunch (Almuerzo)", "Dinner (Cena)", "Snack (Merienda/Bocadillo)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "At the Restaurant",
              description: "Cómo pedir",
              content: ["I would like... (Me gustaría...)", "Can I have...?, please? (¿Me puede dar...?, por favor?)", "The bill, please. (La cuenta, por favor)"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Waiters' phrases",
              description: "Lo que escucharás",
              content: ["Are you ready to order?", "Anything to drink?", "Here you go."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar que 'I want' suena rudo, 'I would like' o 'Can I have' es más educado."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Practicar interacciones en el restaurante.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["Waiter: Are you ready to order?", "Customer: Yes, I would like the chicken salad, please.", "Waiter: Anything to drink?", "Customer: Can I have a glass of water?"],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Ordering",
              content: ["I ______ like a coffee, please."],
              options: ["will", "would", "want"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Phrases",
              content: ["______ I have the bill, please?"],
              options: ["Do", "Am", "Can"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Meals",
              content: ["I eat ______ at 8:00 AM."],
              options: ["dinner", "breakfast", "lunch"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I want chicken now.", "2. Are you ready for order?", "3. The check please."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-7",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Comida)",
              type: 'emoji-game',
              content: ['🙋‍♂️ ➕ 🧾 ➕ 💵'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["The bill, please.", "I want money.", "Can I have a menu?"],
              correctOptionIndex: 0
            }
          ],
          action: "En 'Find the mistake', discutir las formas más educadas de pedir."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Simular pedir en un restaurante.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: The Restaurant",
              description: "Simulación",
              content: ["Person A: You are the waiter.", "Person B: You are the customer.", "Order food, drinks and ask for the bill."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Polite requests",
              content: ["Which is more polite?"],
              options: ["Give me water.", "I want water.", "Can I have some water?"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Meals",
              content: ["What do you eat in the middle of the day?"],
              options: ["Breakfast", "Lunch", "Dinner"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Vocab",
              content: ["What does 'bill' or 'check' mean?"],
              options: ["El menú", "La cuenta", "La mesa"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Waiters",
              content: ["Are you ready to ______?"],
              options: ["eat", "order", "buy"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar el Role Play e intercambiar roles."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre y repaso de comida.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can survive in a restaurant!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Look at a menu in English online and write down 5 new food words."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-7",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/GLi6K42GixQ",
              content: ["Listen to how they order food."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    },
{
      id: "c-adults-basic-1-8",
      title: "Clase 8: Sustantivos contables e incontables (some, any)",
      duration: "60 minutos",
      objective: "Diferenciar contables e incontables, usar some/any correctamente.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Explorar cantidades básicas.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! Let's count!",
              description: "Can you count water?",
              content: ["Can you say 'one water, two waters'?", "What about apples?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Plantear la diferencia intuitiva entre contar manzanas vs contar agua/arroz."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Reglas de contables/incontables y some/any.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Countable Nouns",
              description: "Se pueden contar",
              content: ["Singular & Plural: an apple / two apples", "Examples: car, book, egg, tomato"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Uncountable Nouns",
              description: "No se cuentan (se miden)",
              content: ["Always singular: water, rice, sugar, money, time", "You can't say 'two waters' (you say 'two bottles of water')"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Some & Any (1)",
              description: "Cantidades indefinidas",
              content: ["SOME: Para oraciones positivas (+)", "I have SOME apples. I have SOME water."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Some & Any (2)",
              description: "Negativas y Preguntas",
              content: ["ANY: Para oraciones negativas (-) y preguntas (?)", "I don't have ANY apples. Do you have ANY water?"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Aclarar que SOME se usa en preguntas cuando ofrecemos algo ('Would you like some coffee?')."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Diferenciar some y any.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["We have some cheese in the fridge, but we don't have any bread. Do we have any tomatoes?"],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Positive",
              content: ["I need ______ sugar for the cake."],
              options: ["some", "any", "a"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Negative",
              content: ["We don't have ______ milk."],
              options: ["some", "any", "many"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Questions",
              content: ["Do you have ______ brothers or sisters?"],
              options: ["some", "any", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I have any money.", "2. She doesn't have some time.", "3. I drink two waters."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-8",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Sustantivos)",
              type: 'emoji-game',
              content: ['❌ ➕ 🍞'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I don't have any bread.", "I have some bread.", "Bread is bad."],
              correctOptionIndex: 0
            }
          ],
          action: "Resolver dudas puntuales sobre si el dinero o el tiempo son contables (no lo son)."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Hablar de lo que hay en la nevera.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: In the Kitchen",
              description: "Inventario",
              content: ["Tell your partner 3 things you have in your fridge (using SOME) and 3 things you don't have (using ANY)."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Uncountable",
              content: ["Which of these is UNCOUNTABLE?"],
              options: ["Car", "Water", "Apple"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Some/Any",
              content: ["I have ______ good friends."],
              options: ["some", "any", "much"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Questions",
              content: ["Are there ______ eggs in the fridge?"],
              options: ["some", "any", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Offers (Exception)",
              content: ["Would you like ______ coffee?"],
              options: ["any", "some", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Reforzar que 'Would you like some...?' es la excepción en preguntas."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre y repaso de Some/Any.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You understand quantities!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Open your fridge at home and write 5 sentences using SOME and ANY."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-8",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/g3Qo97Gj9b0",
              content: ["Listen to how they use SOME and ANY in real life."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    },
{
      id: "c-adults-basic-1-9",
      title: "Clase 9: Gustos y preferencias (like, love, hate + ing)",
      duration: "60 minutos",
      objective: "Expresar aficiones, gustos y desagrados usando el gerundio.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Hablar sobre hobbies.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome! What do you like?",
              description: "Hobbies & Interests",
              content: ["What do you do in your free time?", "Do you like sports?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Animar a que digan 1 o 2 cosas que les gusta hacer los fines de semana."
        },
        {
          id: "s2",
          title: "2. Vocabulary & Grammar",
          duration: "15 minutos",
          objective: "Aprender like, love, hate y la regla del ING.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Expressing Preferences",
              description: "Verbos de emoción",
              content: ["Love (Me encanta)", "Like (Me gusta)", "Don't like (No me gusta)", "Hate (Odio)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Rule: Verb + ING",
              description: "Cuando hablamos de actividades",
              content: ["I like + verb-ING", "I like reading. (Me gusta leer)", "She loves dancing. (A ella le encanta bailar)"],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Exceptions (Nouns)",
              description: "Con sustantivos no hay ING",
              content: ["I like pizza. (NO: I like pizzaing)", "He loves dogs."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Questions",
              description: "Do you like...?",
              content: ["Do you like swimming?", "- Yes, I love it! / No, I hate it."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Explicar que 'I like to read' también es correcto, pero 'I like reading' es más natural para hobbies."
        },
        {
          id: "s3",
          title: "3. Practice & Reading",
          duration: "15 minutos",
          objective: "Practicar la estructura ING.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Reading Practice",
              description: "Lee en voz alta:",
              content: ["I love listening to music. My brother hates cooking, but he likes eating. We both enjoy watching movies."],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Complete the sentence (1/3)",
              description: "Verbs",
              content: ["I like ______ tennis."],
              options: ["play", "playing", "plays"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Complete the sentence (2/3)",
              description: "Nouns vs Verbs",
              content: ["She loves ______ coffee."],
              options: ["drink", "drinking", "drinks"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Complete the sentence (3/3)",
              description: "Third Person",
              content: ["He ______ getting up early."],
              options: ["hate", "hates", "hating"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 10",
              title: "Find the mistake",
              description: "Can you fix these sentences?",
              content: ["1. I like play football.", "2. She love shopping.", "3. Do you likes cooking?"],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-9",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado de estos emojis (Gustos)",
              type: 'emoji-game',
              content: ['❤️ ➕ ✈️'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I love traveling.", "I hate planes.", "I like walking."],
              correctOptionIndex: 0
            }
          ],
          action: "Resolver las preguntas y corregir la tercera persona ('He hates')."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Expresar gustos personales de forma fluida.",
          slides: [
            {
              id: "Diapositiva 11",
              title: "Role Play: Hobbies",
              description: "Simulación",
              content: ["Interview your partner:", "Find 3 things they love doing, and 2 things they hate doing."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (1/4)",
              description: "Rules",
              content: ["After LIKE, LOVE or HATE, verbs end in..."],
              options: ["-ed", "-s", "-ing"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (2/4)",
              description: "Application",
              content: ["I love ______ movies."],
              options: ["watch", "watching", "watches"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (3/4)",
              description: "Negation",
              content: ["I ______ like running."],
              options: ["am not", "don't", "doesn't"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 15",
              title: "Fun Quiz! (4/4)",
              description: "Third Person",
              content: ["My mom ______ cleaning the house."],
              options: ["hates", "hate", "hating"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar el Role Play e insistir en el uso del gerundio (ING)."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre y repaso de gustos.",
          slides: [
            {
              id: "Diapositiva 16",
              title: "Class Complete!",
              description: "You are doing amazing!",
              content: ["You can talk about your hobbies!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 17",
              title: "Homework",
              description: "Assignment for next time",
              content: ["Write a short paragraph about what you love, like, and hate doing on weekends."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            },
            {
              id: "Diapositiva-Video-Homework-1-9",
              title: "Video Homework 📹",
              description: "Watch this short video and listen carefully.",
              type: 'video',
              videoUrl: "https://www.youtube.com/embed/5F6v314rXwA",
              content: ["Identify what activities the speakers like and dislike."],
              bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900"
            }
          ],
          action: "Despedir la clase."
        }
      ]
    },
{
      id: "c-adults-basic-1-10",
      title: "Clase 10: Repaso General de Basic 1",
      duration: "60 minutos",
      objective: "Repasar todos los temas de Basic 1 y preparar a los alumnos para su evaluación oral.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "5 minutos",
          objective: "Reflexión sobre el nivel.",
          slides: [
            {
              id: "Diapositiva 1",
              title: "Welcome to the Final Review!",
              description: "Basic 1 is complete!",
              content: ["How much have you learned?", "What was your favorite topic?"],
              bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            }
          ],
          action: "Felicitar a los alumnos por llegar hasta aquí."
        },
        {
          id: "s2",
          title: "2. Mega Review (Part 1)",
          duration: "15 minutos",
          objective: "Repaso de Rutinas, Adverbios y Present Simple.",
          slides: [
            {
              id: "Diapositiva 2",
              title: "Daily Routines & Time",
              description: "Review",
              content: ["I wake up at 7:00 AM.", "She has lunch at half past one."],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 3",
              title: "Frequency Adverbs",
              description: "Review",
              content: ["I always study.", "He is never late.", "We sometimes go out."],
              bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600"
            },
            {
              id: "Diapositiva 4",
              title: "Present Simple (Do/Does)",
              description: "Review",
              content: ["Do you like pizza? Yes, I do.", "Does she work here? No, she doesn't."],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            },
            {
              id: "Diapositiva 5",
              title: "Wh- Questions",
              description: "Review",
              content: ["Where do you live?", "What does he do?", "When do they study?"],
              bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
            }
          ],
          action: "Hacer preguntas rápidas orales para evaluar retención."
        },
        {
          id: "s3",
          title: "3. Mega Review (Part 2)",
          duration: "15 minutos",
          objective: "Repaso de Some/Any, Food y Gustos.",
          slides: [
            {
              id: "Diapositiva 6",
              title: "Food & Restaurants",
              description: "Review",
              content: ["I would like a salad, please.", "Can I have the bill?"],
              bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
            },
            {
              id: "Diapositiva 7",
              title: "Some & Any",
              description: "Review",
              content: ["We have some apples.", "We don't have any milk.", "Do you have any questions?"],
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 8",
              title: "Like / Love / Hate + ING",
              description: "Review",
              content: ["I love traveling.", "She hates cooking.", "They like watching TV."],
              bgColor: "bg-gradient-to-br from-orange-400 to-red-500"
            },
            {
              id: "Diapositiva 9",
              title: "Find the mistake",
              description: "Mixed concepts",
              content: ["1. I am always wake up early.", "2. Does you like pizza?", "3. I like play video games."],
              bgColor: "bg-gradient-to-br from-red-400 to-pink-500"
            },
            {
              id: "Diapositiva-Emoji-Auto-1-10",
              title: "Emojis Locos 🤪",
              description: "Interpreta el significado (Repaso)",
              type: 'emoji-game',
              content: ['🗣️ ➕ 🇬🇧 ➕ 💯'],
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
              options: ["I speak English 100%!", "I hate English.", "I don't know."],
              correctOptionIndex: 0
            }
          ],
          action: "Ayudar a corregir los errores en 'Find the mistake'."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Evaluación formativa.",
          slides: [
            {
              id: "Diapositiva 10",
              title: "Final Role Play",
              description: "Simulación Integrada",
              content: ["Talk about your routine, what you eat, and what you love doing in your free time."],
              bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600"
            },
            {
              id: "Diapositiva 11",
              title: "Fun Quiz! (1/4)",
              description: "Mix",
              content: ["She ______ a shower at 7 AM."],
              options: ["take", "takes", "taking"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 12",
              title: "Fun Quiz! (2/4)",
              description: "Mix",
              content: ["______ you have any brothers?"],
              options: ["Does", "Are", "Do"],
              correctOptionIndex: 2,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 13",
              title: "Fun Quiz! (3/4)",
              description: "Mix",
              content: ["He hates ______ early."],
              options: ["waking up", "wake up", "wakes up"],
              correctOptionIndex: 0,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            },
            {
              id: "Diapositiva 14",
              title: "Fun Quiz! (4/4)",
              description: "Mix",
              content: ["We don't have ______ water."],
              options: ["some", "any", "a"],
              correctOptionIndex: 1,
              bgColor: "bg-gradient-to-br from-pink-500 to-rose-600"
            }
          ],
          action: "Supervisar el Role Play, prestando atención a la 's' de tercera persona."
        },
        {
          id: "s5",
          title: "5. Wrap-up",
          duration: "10 minutos",
          objective: "Cierre del nivel.",
          slides: [
            {
              id: "Diapositiva 15",
              title: "Basic 1 Complete!",
              description: "Congratulations!",
              content: ["You are ready for Basic 2!", "Great job!"],
              bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
              imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
            },
            {
              id: "Diapositiva 16",
              title: "Prepare for Evaluation",
              description: "Next class",
              content: ["Next time, we will have a short oral evaluation.", "Don't worry, just practice what we learned."],
              bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
            }
          ],
          action: "Explicar la dinámica de la evaluación oral de la siguiente clase."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  },
  {
    id: "basic-2",
    title: "Basic 2",
    duration: "1 mes",
    objective: "Describe acciones en progreso y empieza a explorar el pasado.",
    mcfrEquivalent: "A1",
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
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-12",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 1: Rutinas y Present Simple" + ")",
                                type: 'emoji-game',
                                content: ['🎓 ➕ 📚 ➕ 🧠'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I am studying hard.", "I forgot my book.", "I graduated from university."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
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
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-13",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 2: Present Progressive" + ")",
                                type: 'emoji-game',
                                content: ['🍕 ➕ 🍔 ➕ 🤤'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I am very hungry.", "I like fast food.", "I am cooking dinner."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-14",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 3: Expresando Preferencias (Gustos)" + ")",
                                type: 'emoji-game',
                                content: ['🛒 ➕ 💳 ➕ 🛍️'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I am going shopping.", "I lost my credit card.", "I bought a new shirt."],
                                correctOptionIndex: 0
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
                bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600"
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
                bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600"
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
                bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600"
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
                                id: "Diapositiva-Emoji-Auto-fix-15",
                                title: "Emojis Locos 🤪",
                                description: "Interpreta el significado de estos emojis (" + "Clase 4: Comparación entre Tiempos Verbales" + ")",
                                type: 'emoji-game',
                                content: ['⏰ ➕ 🏃 ➕ 🏃'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["I love running.", "I am late, hurry up!", "I need a new watch."],
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
      },
{
      id: "c-adults-basic-2-5",
      title: "Clase 5: Verbos de estado vs. acción en presente continuo",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-2-6",
      title: "Clase 6: Clima y estaciones del año",
      duration: "60 minutos",
      objective: "Manejar correctamente Weather.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Weather.", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Weather.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Weather", description: "Introduction to Weather.", content: ["It is sunny today.", "It is raining."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["It is sunny today.", "It is raining."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Sunny, Rainy, Cold, Hot", content: ["Sunny", " Rainy", " Cold", " Hot"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["It is sunny today.", "It is raining."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: It is sunny today."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["It is sunny today.", "It is raining."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-2-7",
      title: "Clase 7: Imperativos para dar instrucciones",
      duration: "60 minutos",
      objective: "Manejar correctamente Imperatives.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Imperatives.", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Imperatives.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Imperatives", description: "Introduction to Imperatives.", content: ["Open the door, please.", "Don't turn left."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Open the door, please.", "Don't turn left."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Open, Close, Turn, Stop", content: ["Open", " Close", " Turn", " Stop"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Open the door, please.", "Don't turn left."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Open the door, please."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Open the door, please.", "Don't turn left."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-2-8",
      title: "Clase 8: Pedir y ofrecer direcciones en la calle",
      duration: "60 minutos",
      objective: "Manejar correctamente Polite Requests.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Polite Requests.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Polite Requests.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Polite Requests", description: "Introduction to Polite Requests.", content: ["Can I help you?", "Could you repeat that?"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Can I help you?", "Could you repeat that?"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Can, Could, May, Help", content: ["Can", " Could", " May", " Help"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Can I help you?", "Could you repeat that?"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Can I help you?"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Can I help you?", "Could you repeat that?"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-2-9",
      title: "Clase 9: Conversaciones telefónicas básicas",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-2-10",
      title: "Clase 10: Repaso de presente simple vs. continuo",
      duration: "60 minutos",
      objective: "Manejar correctamente Review & Practice.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Review & Practice.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Review & Practice.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Review & Practice", description: "Introduction to Review & Practice.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Review, Practice, Exercise, Test", content: ["Review", " Practice", " Exercise", " Test"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Let's review the main topics."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-2-11",
      title: "Clase 11: Proyecto Final de Nivel",
      duration: "60 minutos",
      objective: "Manejar correctamente Review & Practice.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Review & Practice.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Review & Practice.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Review & Practice", description: "Introduction to Review & Practice.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Review, Practice, Exercise, Test", content: ["Review", " Practice", " Exercise", " Test"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Let's review the main topics."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  },
  {
    id: "basic-3",
    title: "Basic 3",
    duration: "1 mes",
    objective: "Expresa habilidades, obligaciones y eventos pasados.",
    mcfrEquivalent: "A1",
    classes: [
{
      id: "c-adults-basic-3-1",
      title: "Clase 1: Habilidades y posibilidades (Can / Can't)",
      duration: "60 minutos",
      objective: "Manejar correctamente Can / Can't for Abilities.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Can / Can't for Abilities.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Can / Can't for Abilities.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Can / Can't for Abilities", description: "Introduction to Can / Can't for Abilities.", content: ["I can swim.", "I can't fly."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I can swim.", "I can't fly."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Can, Cannot, Ability, Permission", content: ["Can", " Cannot", " Ability", " Permission"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I can swim.", "I can't fly."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I can swim."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I can swim.", "I can't fly."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-2",
      title: "Clase 2: Permisos y peticiones (Can I...?, Could you...?)",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-3",
      title: "Clase 3: Obligaciones (Have to / Don't have to)",
      duration: "60 minutos",
      objective: "Manejar correctamente Obligations (Have to).",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Obligations (Have to).", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Obligations (Have to).", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Obligations (Have to)", description: "Introduction to Obligations (Have to).", content: ["I have to work today.", "You don't have to go."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I have to work today.", "You don't have to go."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Have to, Must, Obligation, Need", content: ["Have to", " Must", " Obligation", " Need"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I have to work today.", "You don't have to go."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I have to work today."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I have to work today.", "You don't have to go."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-4",
      title: "Clase 4: Ropa, colores y descripciones físicas",
      duration: "60 minutos",
      objective: "Manejar correctamente Clothes & Appearance.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Clothes & Appearance.", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Clothes & Appearance.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Clothes & Appearance", description: "Introduction to Clothes & Appearance.", content: ["She is wearing a red shirt.", "He is tall and slim."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["She is wearing a red shirt.", "He is tall and slim."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Shirt, Pants, Tall, Short", content: ["Shirt", " Pants", " Tall", " Short"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["She is wearing a red shirt.", "He is tall and slim."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: She is wearing a red shirt."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["She is wearing a red shirt.", "He is tall and slim."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-5",
      title: "Clase 5: Lugares en la ciudad y transporte",
      duration: "60 minutos",
      objective: "Manejar correctamente Places & Transport.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Places & Transport.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Places & Transport.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Places & Transport", description: "Introduction to Places & Transport.", content: ["The bank is next to the park.", "I go by bus."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["The bank is next to the park.", "I go by bus."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Bank, Park, Bus, Train", content: ["Bank", " Park", " Bus", " Train"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["The bank is next to the park.", "I go by bus."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: The bank is next to the park."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["The bank is next to the park.", "I go by bus."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-6",
      title: "Clase 6: Pasado del verbo To Be (was/were)",
      duration: "60 minutos",
      objective: "Manejar correctamente Past of To Be (Was/Were).",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Past of To Be (Was/Were).", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Past of To Be (Was/Were).", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Past of To Be (Was/Were)", description: "Introduction to Past of To Be (Was/Were).", content: ["I was at home.", "They were happy."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I was at home.", "They were happy."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Was, Were, Yesterday, Last night", content: ["Was", " Were", " Yesterday", " Last night"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I was at home.", "They were happy."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I was at home."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I was at home.", "They were happy."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-7",
      title: "Clase 7: Hablando de tu infancia y recuerdos",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-8",
      title: "Clase 8: Biografías de personas famosas",
      duration: "60 minutos",
      objective: "Manejar correctamente Biographies.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Biographies.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Biographies.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Biographies", description: "Introduction to Biographies.", content: ["He was born in 1990.", "She studied science."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["He was born in 1990.", "She studied science."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Born, Study, Work, Live", content: ["Born", " Study", " Work", " Live"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["He was born in 1990.", "She studied science."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: He was born in 1990."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["He was born in 1990.", "She studied science."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-9",
      title: "Clase 9: Fechas, años y meses",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-3-10",
      title: "Clase 10: Repaso General de Basic 3",
      duration: "60 minutos",
      objective: "Manejar correctamente Review & Practice.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Review & Practice.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Review & Practice.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Review & Practice", description: "Introduction to Review & Practice.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Review, Practice, Exercise, Test", content: ["Review", " Practice", " Exercise", " Test"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Let's review the main topics."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  },
  {
    id: "basic-4",
    title: "Basic 4",
    duration: "1 mes",
    objective: "Manejo completo del pasado y planificación del futuro.",
    mcfrEquivalent: "A1",
    classes: [
{
      id: "c-adults-basic-4-1",
      title: "Clase 1: Pasado Simple - Verbos Regulares",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-2",
      title: "Clase 2: Pasado Simple - Verbos Irregulares",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-3",
      title: "Clase 3: Formando preguntas y negaciones en pasado",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-4",
      title: "Clase 4: Vocabulario de viajes y vacaciones",
      duration: "60 minutos",
      objective: "Manejar correctamente Travel & Vacations.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Travel & Vacations.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Travel & Vacations.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Travel & Vacations", description: "Introduction to Travel & Vacations.", content: ["I went to Paris.", "We visited the museum."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I went to Paris.", "We visited the museum."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Travel, Visit, Go, Vacation", content: ["Travel", " Visit", " Go", " Vacation"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I went to Paris.", "We visited the museum."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I went to Paris."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I went to Paris.", "We visited the museum."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-5",
      title: "Clase 5: Contando anécdotas usando conectores (first, then, finally)",
      duration: "60 minutos",
      objective: "Manejar correctamente Connectors.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Connectors.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Connectors.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Connectors", description: "Introduction to Connectors.", content: ["First, I woke up.", "Then, I had breakfast."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["First, I woke up.", "Then, I had breakfast."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "First, Then, After that, Finally", content: ["First", " Then", " After that", " Finally"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["First, I woke up.", "Then, I had breakfast."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: First, I woke up."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["First, I woke up.", "Then, I had breakfast."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-6",
      title: "Clase 6: Expresando planes futuros con Going to",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-7",
      title: "Clase 7: Predicciones y decisiones rápidas con Will",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-8",
      title: "Clase 8: Diferencias entre Will y Going to",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-9",
      title: "Clase 9: Dando opiniones y mostrando acuerdo/desacuerdo",
      duration: "60 minutos",
      objective: "Manejar correctamente Giving Opinions.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Giving Opinions.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Giving Opinions.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Giving Opinions", description: "Introduction to Giving Opinions.", content: ["I think it is great.", "In my opinion, it is bad."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I think it is great.", "In my opinion, it is bad."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Think, Believe, Opinion, Idea", content: ["Think", " Believe", " Opinion", " Idea"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I think it is great.", "In my opinion, it is bad."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I think it is great."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I think it is great.", "In my opinion, it is bad."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-basic-4-10",
      title: "Clase 10: Preparación para Nivel Intermedio",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  },
  {
    id: "inter",
    title: "Intermediate",
    duration: "1 mes",
    objective: "Fluidez para conversaciones más complejas y vida profesional.",
    mcfrEquivalent: "A1",
    classes: [
{
      id: "c-adults-inter-1",
      title: "Clase 1: Repaso de tiempos verbales básicos",
      duration: "60 minutos",
      objective: "Manejar correctamente Review & Practice.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Review & Practice.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Review & Practice.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Review & Practice", description: "Introduction to Review & Practice.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Review, Practice, Exercise, Test", content: ["Review", " Practice", " Exercise", " Test"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Let's review the main topics."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-2",
      title: "Clase 2: Primer Condicional (situaciones reales)",
      duration: "60 minutos",
      objective: "Manejar correctamente First Conditional.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with First Conditional.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente First Conditional.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "First Conditional", description: "Introduction to First Conditional.", content: ["If it rains, I will stay home.", "If I study, I will pass."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["If it rains, I will stay home.", "If I study, I will pass."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "If, Will, Rain, Study", content: ["If", " Will", " Rain", " Study"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["If it rains, I will stay home.", "If I study, I will pass."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: If it rains, I will stay home."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["If it rains, I will stay home.", "If I study, I will pass."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-3",
      title: "Clase 3: Verbos modales de consejo (Should / Ought to)",
      duration: "60 minutos",
      objective: "Manejar correctamente Modal Verbs.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Modal Verbs.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Modal Verbs.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Modal Verbs", description: "Introduction to Modal Verbs.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Should, Must, May, Might", content: ["Should", " Must", " May", " Might"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: You should study more."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-4",
      title: "Clase 4: Verbos modales de posibilidad (May / Might / Could)",
      duration: "60 minutos",
      objective: "Manejar correctamente Modal Verbs.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Modal Verbs.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Modal Verbs.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Modal Verbs", description: "Introduction to Modal Verbs.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Should, Must, May, Might", content: ["Should", " Must", " May", " Might"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: You should study more."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["You should study more.", "May I come in?"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-5",
      title: "Clase 5: Comparativos y superlativos",
      duration: "60 minutos",
      objective: "Manejar correctamente Comparatives & Superlatives.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Comparatives & Superlatives.", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Comparatives & Superlatives.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Comparatives & Superlatives", description: "Introduction to Comparatives & Superlatives.", content: ["This car is faster.", "It is the best book."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["This car is faster.", "It is the best book."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Better, Worse, Faster, Biggest", content: ["Better", " Worse", " Faster", " Biggest"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["This car is faster.", "It is the best book."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: This car is faster."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["This car is faster.", "It is the best book."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-6",
      title: "Clase 6: Describiendo exceso y suficiencia (too / enough)",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-7",
      title: "Clase 7: Vocabulario de trabajo y oficina",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-8",
      title: "Clase 8: Redactando correos electrónicos formales",
      duration: "60 minutos",
      objective: "Manejar correctamente Emails & Messages.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Emails & Messages.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Emails & Messages.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Emails & Messages", description: "Introduction to Emails & Messages.", content: ["Dear Mr. Smith,", "Best regards,"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Dear Mr. Smith,", "Best regards,"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Email, Send, Receive, Attach", content: ["Email", " Send", " Receive", " Attach"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Dear Mr. Smith,", "Best regards,"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Dear Mr. Smith,"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Dear Mr. Smith,", "Best regards,"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-9",
      title: "Clase 9: Present Perfect para experiencias de vida",
      duration: "60 minutos",
      objective: "Manejar correctamente Present Perfect.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Present Perfect.", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Present Perfect.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Present Perfect", description: "Introduction to Present Perfect.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Have, Has, Already, Yet", content: ["Have", " Has", " Already", " Yet"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I have already eaten."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-10",
      title: "Clase 10: Diferencias entre Pasado Simple y Present Perfect",
      duration: "60 minutos",
      objective: "Manejar correctamente Present Perfect.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Present Perfect.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Present Perfect.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Present Perfect", description: "Introduction to Present Perfect.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Have, Has, Already, Yet", content: ["Have", " Has", " Already", " Yet"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I have already eaten."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I have already eaten.", "Have you ever been to Rome?"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-11",
      title: "Clase 11: Gerundios e infinitivos después de verbos",
      duration: "60 minutos",
      objective: "Manejar correctamente Gerunds & Infinitives.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Gerunds & Infinitives.", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Gerunds & Infinitives.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Gerunds & Infinitives", description: "Introduction to Gerunds & Infinitives.", content: ["I want to go.", "I enjoy reading."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I want to go.", "I enjoy reading."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Want, Need, Enjoy, Like", content: ["Want", " Need", " Enjoy", " Like"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I want to go.", "I enjoy reading."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I want to go."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I want to go.", "I enjoy reading."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-inter-12",
      title: "Clase 12: Introducción a los Phrasal Verbs más usados",
      duration: "60 minutos",
      objective: "Manejar correctamente Phrasal Verbs.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Phrasal Verbs.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Phrasal Verbs.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Phrasal Verbs", description: "Introduction to Phrasal Verbs.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Turn on, Turn off, Give up, Look for", content: ["Turn on", " Turn off", " Give up", " Look for"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Turn on the light."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  },
  {
    id: "advanced",
    title: "Advanced",
    duration: "1 mes",
    objective: "Perfecciona tu gramática y amplía tu vocabulario para expresarte como nativo.",
    mcfrEquivalent: "A1",
    classes: [
{
      id: "c-adults-advanced-1",
      title: "Clase 1: Pronunciación: Connected speech y entonación",
      duration: "60 minutos",
      objective: "Manejar correctamente Pronunciation.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Pronunciation.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Pronunciation.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Pronunciation", description: "Introduction to Pronunciation.", content: ["Intonation", "Connected Speech"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Intonation", "Connected Speech"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Listen, Speak, Intonation, Rhythm", content: ["Listen", " Speak", " Intonation", " Rhythm"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Intonation", "Connected Speech"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Intonation"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Intonation", "Connected Speech"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-2",
      title: "Clase 2: Segundo Condicional (situaciones hipotéticas)",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-3",
      title: "Clase 3: Tercer Condicional (arrepentimientos del pasado)",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-4",
      title: "Clase 4: Reported Speech (estilo indirecto)",
      duration: "60 minutos",
      objective: "Manejar correctamente Reported Speech.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Reported Speech.", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Reported Speech.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Reported Speech", description: "Introduction to Reported Speech.", content: ["She said that she was happy.", "He asked me what time it was."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["She said that she was happy.", "He asked me what time it was."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Say, Tell, Ask, Report", content: ["Say", " Tell", " Ask", " Report"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["She said that she was happy.", "He asked me what time it was."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: She said that she was happy."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["She said that she was happy.", "He asked me what time it was."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-5",
      title: "Clase 5: Relative Clauses (who, which, that, where)",
      duration: "60 minutos",
      objective: "Manejar correctamente Relative Clauses.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Relative Clauses.", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Relative Clauses.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Relative Clauses", description: "Introduction to Relative Clauses.", content: ["The man who called you is here.", "The book which I bought."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["The man who called you is here.", "The book which I bought."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Who, Which, That, Where", content: ["Who", " Which", " That", " Where"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["The man who called you is here.", "The book which I bought."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: The man who called you is here."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["The man who called you is here.", "The book which I bought."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-6",
      title: "Clase 6: Vocabulario avanzado de negocios y negociación",
      duration: "60 minutos",
      objective: "Manejar correctamente Negotiation.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Negotiation.", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Negotiation.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Negotiation", description: "Introduction to Negotiation.", content: ["Can you offer a discount?", "We have a deal."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Can you offer a discount?", "We have a deal."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Deal, Offer, Price, Terms", content: ["Deal", " Offer", " Price", " Terms"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Can you offer a discount?", "We have a deal."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Can you offer a discount?"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Can you offer a discount?", "We have a deal."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-7",
      title: "Clase 7: Resolviendo problemas y quejas de clientes",
      duration: "60 minutos",
      objective: "Manejar correctamente Complaints & Solutions.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Complaints & Solutions.", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Complaints & Solutions.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Complaints & Solutions", description: "Introduction to Complaints & Solutions.", content: ["I have a problem with my order.", "Let me fix that for you."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I have a problem with my order.", "Let me fix that for you."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Problem, Solution, Order, Fix", content: ["Problem", " Solution", " Order", " Fix"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I have a problem with my order.", "Let me fix that for you."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I have a problem with my order."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I have a problem with my order.", "Let me fix that for you."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-8",
      title: "Clase 8: Future Continuous y Future Perfect",
      duration: "60 minutos",
      objective: "Manejar correctamente Future Continuous & Perfect.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Future Continuous & Perfect.", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Future Continuous & Perfect.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Future Continuous & Perfect", description: "Introduction to Future Continuous & Perfect.", content: ["I will be working at 5 PM.", "I will have finished by tomorrow."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I will be working at 5 PM.", "I will have finished by tomorrow."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Will be, Will have, Future, Time", content: ["Will be", " Will have", " Future", " Time"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I will be working at 5 PM.", "I will have finished by tomorrow."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I will be working at 5 PM."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I will be working at 5 PM.", "I will have finished by tomorrow."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-9",
      title: "Clase 9: Phrasal verbs avanzados en contexto",
      duration: "60 minutos",
      objective: "Manejar correctamente Phrasal Verbs.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Phrasal Verbs.", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Phrasal Verbs.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Phrasal Verbs", description: "Introduction to Phrasal Verbs.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Turn on, Turn off, Give up, Look for", content: ["Turn on", " Turn off", " Give up", " Look for"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Turn on the light."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Turn on the light.", "Give up smoking."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-advanced-10",
      title: "Clase 10: Repaso avanzado",
      duration: "60 minutos",
      objective: "Manejar correctamente Review & Practice.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Review & Practice.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Review & Practice.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Review & Practice", description: "Introduction to Review & Practice.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Review, Practice, Exercise, Test", content: ["Review", " Practice", " Exercise", " Test"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Let's review the main topics."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  },
  {
    id: "masters",
    title: "Masters",
    duration: "1 mes",
    objective: "El nivel máximo de fluidez. Dominio total del idioma en cualquier situación.",
    mcfrEquivalent: "A1",
    classes: [
{
      id: "c-adults-masters-1",
      title: "Clase 1: Idioms y expresiones idiomáticas",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-2",
      title: "Clase 2: Inversiones para énfasis formal",
      duration: "60 minutos",
      objective: "Manejar correctamente Inversions.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Inversions.", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Inversions.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Inversions", description: "Introduction to Inversions.", content: ["Never have I seen such a thing.", "Rarely do we go out."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Never have I seen such a thing.", "Rarely do we go out."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Never, Rarely, Seldom, Little", content: ["Never", " Rarely", " Seldom", " Little"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Never have I seen such a thing.", "Rarely do we go out."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Never have I seen such a thing."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Never have I seen such a thing.", "Rarely do we go out."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-3",
      title: "Clase 3: Cleft sentences para resaltar información",
      duration: "60 minutos",
      objective: "Manejar correctamente Cleft Sentences.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Cleft Sentences.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Cleft Sentences.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Cleft Sentences", description: "Introduction to Cleft Sentences.", content: ["What I mean is...", "It was John who called."], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["What I mean is...", "It was John who called."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "What, It, Focus, Emphasis", content: ["What", " It", " Focus", " Emphasis"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["What I mean is...", "It was John who called."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: What I mean is..."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["What I mean is...", "It was John who called."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-4",
      title: "Clase 4: Lenguaje diplomático y atenuadores (Hedging)",
      duration: "60 minutos",
      objective: "Manejar correctamente Diplomatic Language.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Diplomatic Language.", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Diplomatic Language.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Diplomatic Language", description: "Introduction to Diplomatic Language.", content: ["It seems that there is a problem.", "I would suggest calling them."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["It seems that there is a problem.", "I would suggest calling them."], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Seem, Appear, Suggest, Perhaps", content: ["Seem", " Appear", " Suggest", " Perhaps"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["It seems that there is a problem.", "I would suggest calling them."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: It seems that there is a problem."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["It seems that there is a problem.", "I would suggest calling them."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-5",
      title: "Clase 5: Preparando presentaciones de alto impacto",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-6",
      title: "Clase 6: Discurso persuasivo y argumentación",
      duration: "60 minutos",
      objective: "Manejar correctamente Persuasive Speech.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Persuasive Speech.", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Persuasive Speech.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Persuasive Speech", description: "Introduction to Persuasive Speech.", content: ["I strongly believe that...", "We must act now."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I strongly believe that...", "We must act now."], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Persuade, Believe, Act, Future", content: ["Persuade", " Believe", " Act", " Future"], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I strongly believe that...", "We must act now."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I strongly believe that..."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I strongly believe that...", "We must act now."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-7",
      title: "Clase 7: Debates sobre temas complejos",
      duration: "60 minutos",
      objective: "Manejar correctamente Debate & Arguments.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Debate & Arguments.", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Debate & Arguments.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Debate & Arguments", description: "Introduction to Debate & Arguments.", content: ["On the other hand...", "I completely disagree."], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["On the other hand...", "I completely disagree."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Agree, Disagree, Point, Argument", content: ["Agree", " Disagree", " Point", " Argument"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["On the other hand...", "I completely disagree."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: On the other hand..."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["On the other hand...", "I completely disagree."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-8",
      title: "Clase 8: Storytelling en entornos profesionales",
      duration: "60 minutos",
      objective: "Manejar correctamente Storytelling.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Storytelling.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Storytelling.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Storytelling", description: "Introduction to Storytelling.", content: ["Once upon a time...", "Suddenly, the lights went out."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Once upon a time...", "Suddenly, the lights went out."], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Story, Tell, Suddenly, End", content: ["Story", " Tell", " Suddenly", " End"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Once upon a time...", "Suddenly, the lights went out."], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Once upon a time..."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Once upon a time...", "Suddenly, the lights went out."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-9",
      title: "Clase 9: Analizando artículos de opinión y noticias",
      duration: "60 minutos",
      objective: "Manejar correctamente Important Topic.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Important Topic.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    },
{
      id: "c-adults-masters-10",
      title: "Clase 10: Proyecto Final Masters",
      duration: "60 minutos",
      objective: "Manejar correctamente Review & Practice.",
      sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Review & Practice.", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-700" },
            { id: "Diapositiva 3", title: "Objectives", description: "Manejar correctamente Review & Practice.", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Review & Practice", description: "Introduction to Review & Practice.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-400 to-teal-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Review, Practice, Exercise, Test", content: ["Review", " Practice", " Exercise", " Test"], imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-600 to-teal-700" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-700 to-teal-800" },
            { id: "Diapositiva 8", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Let's review the main topics."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600" }
          ],
          action: "Explicar la regla y mostrar ejemplos."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Fijar la estructura con precisión.",
          slides: [
            { id: "Diapositiva 9", title: "Fill in the blanks", description: "Let's practice together.", bgColor: "bg-gradient-to-br from-violet-500 to-purple-600" },
            { id: "Diapositiva 10", title: "Find the mistake", description: "Can you fix these sentences?", bgColor: "bg-gradient-to-br from-violet-600 to-purple-700" },
            { id: "Diapositiva 11", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Let's review the main topics.", "Practice what we learned."], imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-violet-600" },
            { id: "Diapositiva 12", title: "Q&A", description: "Ask your partner a question.", bgColor: "bg-gradient-to-br from-purple-600 to-violet-700" },
            { id: "Diapositiva 13", title: "Translation", description: "Translate these phrases to English.", bgColor: "bg-gradient-to-br from-violet-700 to-purple-800" }
          ],
          action: "Corregir pronunciación y estructura."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "10 minutos",
          objective: "Desarrollar la fluidez real.",
          slides: [
            { id: "Diapositiva 14", title: "Create a story", description: "Use your imagination.", bgColor: "bg-gradient-to-br from-rose-400 to-pink-500" },
            { id: "Diapositiva 15", title: "Describe the picture", description: "What do you see?", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-pink-600 to-rose-700" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
      ]
    }
    ],
    oralEvaluation: [
      { question: "Evaluación Oral", topic: "Evaluación del nivel." }
    ]
  }
];
