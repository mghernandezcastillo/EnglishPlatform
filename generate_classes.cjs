const fs = require('fs');

const class1 = {
  id: "c-adults-basic-1-1",
  title: "Clase 1: Present Simple (I, You, We, They)",
  duration: "60 minutos",
  objective: "Aprender a hablar de rutinas y verdades generales.",
  sections: [
    {
      id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Activar conocimientos.",
      slides: [
        { id: "slide-1", title: "Welcome to Basic 1! 🚀", description: "Let's start!", content: ["Welcome to a new level!", "Today we talk about everyday life."], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-2", title: "Icebreaker! 🧊", description: "Spin the wheel", type: "spinning-wheel", wheelItems: [{label: "Coffee or Tea?", color: "#EF4444"}, {label: "Morning or Night?", color: "#3B82F6"}, {label: "Books or Movies?", color: "#10B981"}, {label: "Dogs or Cats?", color: "#F59E0B"}, {label: "City or Nature?", color: "#8B5CF6"}], content: ["Spin and answer!"], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500", imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-3", title: "Objectives 🎯", description: "Today we will...", content: ["✔️ Learn Present Simple.", "✔️ Talk about regular activities.", "✔️ Use I, You, We, They."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" }
      ], action: "Interactuar"
    },
    {
      id: "s2", title: "2. Grammar / Vocabulary", duration: "15 minutos", objective: "Explicar la gramática.",
      slides: [
        { id: "slide-4", title: "Present Simple 🕒", description: "Habits and routines", type: "standard", content: ["We use Present Simple for routines.", "Example: I work every day.", "Example: We live in Mexico."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-5", title: "Common Verbs 🏃", description: "Actions", type: "standard", content: ["Work = Trabajar", "Live = Vivir", "Study = Estudiar", "Play = Jugar / Tocar"], bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-6", title: "Pronouns 👥", description: "I, You, We, They", type: "standard", content: ["I work = Yo trabajo", "You study = Tú estudias", "We play = Nosotros jugamos", "They live = Ellos viven"], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-7", title: "More Examples 🗣️", description: "Sentences", type: "standard", content: ["They speak English.", "We eat pizza on Fridays.", "I like music."], bgColor: "bg-gradient-to-br from-pink-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800" }
      ], action: "Tomar notas."
    },
    {
      id: "s3", title: "3. Practice & Concept Checking", duration: "15 minutos", objective: "Ejercicios guiados.",
      slides: [
        { id: "slide-8", title: "Context 📖", description: "Reading", content: ["A: Do you study English?", "B: Yes, we study English every day.", "A: They work in a hospital.", "B: Yes, they are doctors."], bgColor: "bg-gradient-to-br from-orange-400 to-red-500", imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-9", title: "Complete the sentence (1/3) ✍️", description: "Grammar", content: ["I ______ in an office."], options: ["works", "work", "working"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-red-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-10", title: "Complete the sentence (2/3) ✍️", description: "Grammar", content: ["They ______ Spanish at home."], options: ["speak", "speaks", "speaking"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-rose-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-11", title: "Complete the sentence (3/3) ✍️", description: "Grammar", content: ["We ______ pizza on weekends."], options: ["eats", "eating", "eat"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-12", title: "Emojis Locos 🤪", description: "Guess!", type: "emoji-game", content: ["👥 ➕ ⚽ ➕ 🏃"], options: ["They sleep all day.", "They play soccer.", "They cook dinner."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800" }
      ], action: "Resolver y verificar."
    },
    {
      id: "s4", title: "4. Production & Quiz", duration: "15 minutos", objective: "Producción oral.",
      slides: [
        { id: "slide-13", title: "Let's Talk! 🗣️", description: "Speaking", content: ["What do you do on weekends?", "Tell the class 3 activities you do."], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600", imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-14", title: "Fun Quiz! (1/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["I lives in Paris.", "I live in Paris.", "I living in Paris."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-15", title: "Fun Quiz! (2/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["We play guitar.", "We plays guitar.", "We playing guitar."], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-16", title: "Fun Quiz! (3/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["They is doctors.", "They works in a hospital.", "They work in a hospital."], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-17", title: "Roleplay 🎭", description: "Activity", content: ["Talk with your partner.", "List 3 things you have in common.", "Example: We both like pizza."], bgColor: "bg-gradient-to-br from-lime-500 to-green-600", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800" }
      ], action: "Evaluar."
    },
    {
      id: "s5", title: "5. Wrap-up & Homework", duration: "10 minutos", objective: "Cierre.",
      slides: [
        { id: "slide-18", title: "Class Complete! 🎉", description: "Great job!", content: ["You can now talk about routines!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-19", title: "Homework 📝", description: "Write sentences", type: "homework", content: ["Write 5 sentences about your daily routine.", "Use verbs like work, eat, sleep, study, play."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-20", title: "Video Homework 📹", description: "Listen to routines", type: "video", videoUrl: "https://www.youtube.com/embed/zRjw62p3Z4o", content: ["Watch the video.", "Write down 3 verbs you hear."], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" }
      ], action: "Despedida."
    }
  ]
};

const class2 = {
  id: "c-adults-basic-1-2",
  title: "Clase 2: Present Simple (He, She, It)",
  duration: "60 minutos",
  objective: "Aprender las reglas de la tercera persona singular ('s').",
  sections: [
    {
      id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Activar conocimientos.",
      slides: [
        { id: "slide-1", title: "Welcome Back! 🌟", description: "Let's review.", content: ["What do you do every day?", "Share one activity."], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-2", title: "Icebreaker! 🧊", description: "Third person", type: "spinning-wheel", wheelItems: [{label: "Your mother's job?", color: "#EF4444"}, {label: "Your father's hobby?", color: "#3B82F6"}, {label: "Your best friend?", color: "#10B981"}, {label: "Your brother?", color: "#F59E0B"}, {label: "Your sister?", color: "#8B5CF6"}], content: ["Spin and answer!"], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500", imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-3", title: "Objectives 🎯", description: "Today we will...", content: ["✔️ Learn He, She, It in Present Simple.", "✔️ Learn the 'S' rules.", "✔️ Talk about other people."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" }
      ], action: "Interactuar"
    },
    {
      id: "s2", title: "2. Grammar / Vocabulary", duration: "15 minutos", objective: "Explicar la gramática.",
      slides: [
        { id: "slide-4", title: "The 'S' Rule 📝", description: "He, She, It", type: "standard", content: ["For He, She, It, we add 's' to the verb.", "I work -> He works", "I play -> She plays"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-5", title: "Spelling Rules (-es) ✏️", description: "Verbs ending in o, ch, sh, ss, x", type: "standard", content: ["Go -> Goes", "Do -> Does", "Watch -> Watches", "Wash -> Washes"], bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-6", title: "Spelling Rules (-ies) 📖", description: "Consonant + Y", type: "standard", content: ["Study -> Studies", "Fly -> Flies", "Cry -> Cries", "(Play -> Plays because it is Vowel + Y)"], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-7", title: "Irregular Verbs ⚠️", description: "Have", type: "standard", content: ["I have a dog.", "He HAS a dog.", "She HAS a car."], bgColor: "bg-gradient-to-br from-pink-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800" }
      ], action: "Tomar notas."
    },
    {
      id: "s3", title: "3. Practice & Concept Checking", duration: "15 minutos", objective: "Ejercicios guiados.",
      slides: [
        { id: "slide-8", title: "Context 📖", description: "Reading", content: ["My brother is a student.", "He studies at the university.", "He has a lot of friends.", "He goes to class every morning."], bgColor: "bg-gradient-to-br from-orange-400 to-red-500", imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-9", title: "Complete the sentence (1/3) ✍️", description: "Grammar", content: ["She ______ English in the afternoon."], options: ["study", "studies", "studys"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-red-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-10", title: "Complete the sentence (2/3) ✍️", description: "Grammar", content: ["My father ______ TV at night."], options: ["watch", "watchs", "watches"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-rose-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-11", title: "Complete the sentence (3/3) ✍️", description: "Grammar", content: ["He ______ a new computer."], options: ["have", "has", "haves"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-12", title: "Emojis Locos 🤪", description: "Guess!", type: "emoji-game", content: ["👩 ➕ 📖 ➕ 🏫"], options: ["She works in a hospital.", "She studies at school.", "She plays sports."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800" }
      ], action: "Resolver y verificar."
    },
    {
      id: "s4", title: "4. Production & Quiz", duration: "15 minutos", objective: "Producción oral.",
      slides: [
        { id: "slide-13", title: "Let's Talk! 🗣️", description: "Speaking", content: ["Tell the class about a friend.", "What does he/she do?", "What does he/she like?"], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600", imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-14", title: "Fun Quiz! (1/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["My dog sleep all day.", "My dog sleeps all day.", "My dog sleeping all day."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-15", title: "Fun Quiz! (2/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["She go to the park.", "She goes to the park.", "She gos to the park."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-16", title: "Fun Quiz! (3/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["He have a car.", "He has a car.", "He haves a car."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-17", title: "Roleplay 🎭", description: "Activity", content: ["Describe a famous person.", "Your partner must guess who it is!", "Example: He sings. He lives in the US."], bgColor: "bg-gradient-to-br from-lime-500 to-green-600", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800" }
      ], action: "Evaluar."
    },
    {
      id: "s5", title: "5. Wrap-up & Homework", duration: "10 minutos", objective: "Cierre.",
      slides: [
        { id: "slide-18", title: "Class Complete! 🎉", description: "Great job!", content: ["You can now talk about other people!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-19", title: "Homework 📝", description: "Write sentences", type: "homework", content: ["Write 5 sentences about your best friend or a family member.", "Use verbs with 's' or 'es'."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-20", title: "Video Homework 📹", description: "Listen", type: "video", videoUrl: "https://www.youtube.com/embed/PzM0y6W8_uE", content: ["Watch the video about daily routines.", "Write down what the boy does in the morning."], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" }
      ], action: "Despedida."
    }
  ]
};

const class3 = {
  id: "c-adults-basic-1-3",
  title: "Clase 3: Present Simple (Negative & Interrogative)",
  duration: "60 minutos",
  objective: "Aprender a hacer preguntas y negar en presente simple usando Do/Does.",
  sections: [
    {
      id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Activar conocimientos.",
      slides: [
        { id: "slide-1", title: "Welcome! 🚀", description: "Let's review.", content: ["What does your best friend do?", "He/She works/studies..."], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-2", title: "Icebreaker! 🧊", description: "Yes or No?", type: "spinning-wheel", wheelItems: [{label: "Do you like pizza?", color: "#EF4444"}, {label: "Do you speak French?", color: "#3B82F6"}, {label: "Do you play tennis?", color: "#10B981"}, {label: "Do you watch anime?", color: "#F59E0B"}, {label: "Do you drink coffee?", color: "#8B5CF6"}], content: ["Spin and answer YES or NO!"], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500", imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-3", title: "Objectives 🎯", description: "Today we will...", content: ["✔️ Learn DO and DOES.", "✔️ Make negative sentences (don't / doesn't).", "✔️ Ask questions."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" }
      ], action: "Interactuar"
    },
    {
      id: "s2", title: "2. Grammar / Vocabulary", duration: "15 minutos", objective: "Explicar la gramática.",
      slides: [
        { id: "slide-4", title: "Negative Sentences 🚫", description: "Don't / Doesn't", type: "standard", content: ["I, You, We, They -> don't (do not)", "He, She, It -> doesn't (does not)", "Example: I don't like fish.", "Example: She doesn't eat meat."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-5", title: "Important Rule ⚠️", description: "No 's' in negative", type: "standard", content: ["When we use DOESN'T, the verb is NORMAL.", "WRONG: She doesn't plays.", "RIGHT: She doesn't play."], bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-6", title: "Questions ❓", description: "Do / Does", type: "standard", content: ["Do I/you/we/they + verb?", "Does he/she/it + verb?", "Do you like pizza?", "Does he play tennis?"], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-7", title: "Short Answers 👍👎", description: "Yes / No", type: "standard", content: ["Yes, I do. / No, I don't.", "Yes, he does. / No, he doesn't.", "Yes, they do. / No, they don't."], bgColor: "bg-gradient-to-br from-pink-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800" }
      ], action: "Tomar notas."
    },
    {
      id: "s3", title: "3. Practice & Concept Checking", duration: "15 minutos", objective: "Ejercicios guiados.",
      slides: [
        { id: "slide-8", title: "Context 📖", description: "Reading", content: ["A: Does she like coffee?", "B: No, she doesn't. She likes tea.", "A: Do you work here?", "B: Yes, I do."], bgColor: "bg-gradient-to-br from-orange-400 to-red-500", imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-9", title: "Complete the sentence (1/3) ✍️", description: "Negative", content: ["I ______ speak French."], options: ["doesn't", "don't", "not"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-red-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-10", title: "Complete the sentence (2/3) ✍️", description: "Negative", content: ["He ______ live in London."], options: ["don't", "doesn't", "isn't"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-rose-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-11", title: "Complete the sentence (3/3) ✍️", description: "Question", content: ["______ they play soccer?"], options: ["Does", "Do", "Are"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-12", title: "Emojis Locos 🤪", description: "Guess!", type: "emoji-game", content: ["🚫 ➕ 👨 ➕ 🚬"], options: ["He doesn't eat.", "He doesn't smoke.", "He doesn't run."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800" }
      ], action: "Resolver y verificar."
    },
    {
      id: "s4", title: "4. Production & Quiz", duration: "15 minutos", objective: "Producción oral.",
      slides: [
        { id: "slide-13", title: "Let's Talk! 🗣️", description: "Interview", content: ["Interview your partner:", "Do you like...?", "Do you play...?", "Do you watch...?"], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600", imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-14", title: "Fun Quiz! (1/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["She doesn't works here.", "She doesn't work here.", "She don't work here."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-15", title: "Fun Quiz! (2/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["Does you like pizza?", "Do you likes pizza?", "Do you like pizza?"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-16", title: "Fun Quiz! (3/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["No, he don't.", "No, he doesn't.", "No, he isn't."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-17", title: "Roleplay 🎭", description: "Activity", content: ["Play 20 questions!", "Think of an animal. The class asks Do/Does questions to guess.", "Example: Does it live in the jungle?"], bgColor: "bg-gradient-to-br from-lime-500 to-green-600", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800" }
      ], action: "Evaluar."
    },
    {
      id: "s5", title: "5. Wrap-up & Homework", duration: "10 minutos", objective: "Cierre.",
      slides: [
        { id: "slide-18", title: "Class Complete! 🎉", description: "Great job!", content: ["You can now ask questions!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-19", title: "Homework 📝", description: "Write sentences", type: "homework", content: ["Write 5 negative sentences about things you or your family don't do.", "Write 3 questions to ask the teacher next class."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-20", title: "Video Homework 📹", description: "Listen", type: "video", videoUrl: "https://www.youtube.com/embed/n4p8K0Jq6xI", content: ["Watch the video.", "Listen to how they use 'don't' and 'doesn't'."], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" }
      ], action: "Despedida."
    }
  ]
};

const class4 = {
  id: "c-adults-basic-1-4",
  title: "Clase 4: Profesiones y Lugares de Trabajo",
  duration: "60 minutos",
  objective: "Integrar el presente simple con vocabulario de trabajos y lugares.",
  sections: [
    {
      id: "s1", title: "1. Warm-up", duration: "10 minutos", objective: "Activar conocimientos.",
      slides: [
        { id: "slide-1", title: "Welcome! 🚀", description: "Let's review.", content: ["Do you work?", "Yes, I do. / No, I don't."], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-2", title: "Icebreaker! 🧊", description: "Jobs", type: "spinning-wheel", wheelItems: [{label: "Doctor", color: "#EF4444"}, {label: "Teacher", color: "#3B82F6"}, {label: "Engineer", color: "#10B981"}, {label: "Chef", color: "#F59E0B"}, {label: "Pilot", color: "#8B5CF6"}], content: ["Spin and mime the job!"], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500", imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-3", title: "Objectives 🎯", description: "Today we will...", content: ["✔️ Learn vocabulary for jobs.", "✔️ Learn workplaces.", "✔️ Describe what people do."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" }
      ], action: "Interactuar"
    },
    {
      id: "s2", title: "2. Grammar / Vocabulary", duration: "15 minutos", objective: "Explicar la gramática.",
      slides: [
        { id: "slide-4", title: "Jobs Vocabulary 👩‍⚕️", description: "Professions", type: "standard", content: ["Doctor, Nurse, Dentist", "Teacher, Student", "Engineer, Architect", "Chef, Waiter/Waitress"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-5", title: "Workplaces 🏥", description: "Where do they work?", type: "standard", content: ["Hospital / Clinic", "School / University", "Office / Company", "Restaurant / Café"], bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-6", title: "Asking about jobs ❓", description: "Questions", type: "standard", content: ["What do you do? = ¿A qué te dedicas?", "I am a teacher.", "What does he do?", "He is a doctor."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-7", title: "Describing jobs 🗣️", description: "Using present simple", type: "standard", content: ["A teacher works in a school.", "A doctor helps people.", "A chef cooks food."], bgColor: "bg-gradient-to-br from-pink-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800" }
      ], action: "Tomar notas."
    },
    {
      id: "s3", title: "3. Practice & Concept Checking", duration: "15 minutos", objective: "Ejercicios guiados.",
      slides: [
        { id: "slide-8", title: "Context 📖", description: "Reading", content: ["A: What does your sister do?", "B: She is a nurse. She works in a hospital.", "A: Does she like it?", "B: Yes, she loves it."], bgColor: "bg-gradient-to-br from-orange-400 to-red-500", imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-9", title: "Complete the sentence (1/3) ✍️", description: "Vocabulary", content: ["A ______ cooks food in a restaurant."], options: ["doctor", "teacher", "chef"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-red-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-10", title: "Complete the sentence (2/3) ✍️", description: "Vocabulary", content: ["A doctor works in a ______."], options: ["school", "hospital", "office"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-rose-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-11", title: "Complete the sentence (3/3) ✍️", description: "Grammar", content: ["What ______ you do?"], options: ["do", "does", "are"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-12", title: "Emojis Locos 🤪", description: "Guess!", type: "emoji-game", content: ["👩‍🏫 ➕ 🏫 ➕ 📚"], options: ["She is a doctor.", "She is a teacher.", "She is a pilot."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800" }
      ], action: "Resolver y verificar."
    },
    {
      id: "s4", title: "4. Production & Quiz", duration: "15 minutos", objective: "Producción oral.",
      slides: [
        { id: "slide-13", title: "Let's Talk! 🗣️", description: "Speaking", content: ["What do you do?", "Where do you work?", "Do you like your job?"], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600", imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-14", title: "Fun Quiz! (1/3) 🧠", description: "Review", content: ["Who works in an office?"], options: ["An engineer", "A pilot", "A chef"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-15", title: "Fun Quiz! (2/3) 🧠", description: "Review", content: ["How to ask about profession?"], options: ["What do you work?", "What are you doing?", "What do you do?"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-16", title: "Fun Quiz! (3/3) 🧠", description: "Review", content: ["Which is correct?"], options: ["He works in a hospital.", "He work in a hospital.", "He working in a hospital."], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-green-500 to-lime-500", imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-17", title: "Roleplay 🎭", description: "Activity", content: ["Job Interview!", "Student A: Boss. Student B: Applicant.", "Ask questions: What do you do? Where do you live?"], bgColor: "bg-gradient-to-br from-lime-500 to-green-600", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800" }
      ], action: "Evaluar."
    },
    {
      id: "s5", title: "5. Wrap-up & Homework", duration: "10 minutos", objective: "Cierre.",
      slides: [
        { id: "slide-18", title: "Class Complete! 🎉", description: "Great job!", content: ["You can now talk about jobs!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500", imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-19", title: "Homework 📝", description: "Write sentences", type: "homework", content: ["Write about the jobs of 3 people in your family.", "Where do they work? Do they like it?"], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800" },
        { id: "slide-20", title: "Video Homework 📹", description: "Listen", type: "video", videoUrl: "https://www.youtube.com/embed/5F6v314rXwA", content: ["Watch the video about jobs.", "Write down 2 new jobs you learn."], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" }
      ], action: "Despedida."
    }
  ]
};

const replacementStr = `          }
        ]
      }
    ],
    "writtenEvaluation": [
      {
        "id": "q-bz-1",
        "question": "¿Cómo dices 'Hola' de manera informal en inglés?",
        "options": ["Goodbye", "Hi / Hello", "See you", "Please"],
        "correctAnswer": "Hi / Hello",
        "type": "multiple-choice"
      },
      {
        "id": "q-bz-2",
        "question": "Completa la oración: '___ am a student.'",
        "options": ["He", "She", "I", "They"],
        "correctAnswer": "I",
        "type": "multiple-choice"
      },
      {
        "id": "q-bz-3",
        "question": "¿Cuál es la forma correcta?",
        "options": ["He are happy.", "He is happy.", "He am happy.", "He be happy."],
        "correctAnswer": "He is happy.",
        "type": "multiple-choice"
      },
      {
        "id": "q-bz-4",
        "question": "¿Cómo se dice '20' en inglés?",
        "options": ["Twelve", "Two", "Twenty", "Thirty"],
        "correctAnswer": "Twenty",
        "type": "multiple-choice"
      },
      {
        "id": "q-bz-5",
        "question": "Completa con el adjetivo posesivo correcto: 'She is my sister. ___ name is Maria.'",
        "options": ["His", "Her", "My", "Your"],
        "correctAnswer": "Her",
        "type": "multiple-choice"
      }
    ],
    "oralEvaluation": [
      {
        "topic": "INTRODUCTIONS",
        "question": "Please introduce yourself. What is your name, age, and nationality?"
      },
      {
        "topic": "FAMILY",
        "question": "Tell me about your family. Do you have brothers or sisters?"
      }
    ]
  },
  {
    "id": "basic-1",
    "title": "Basic 1",
    "duration": "1 mes",
    "objective": "Desarrollar fluidez básica en presente simple, rutinas, vocabulario de trabajos y expresiones de preferencias.",
    "mcfrEquivalent": "A1",
    "classes": [
      REPLACE_C1,
      REPLACE_C2,
      REPLACE_C3,
      REPLACE_C4,
      {
        "id": "c-adults-basic-1-5",`;

const path = 'src/data/curriculum.ts';
let content = fs.readFileSync(path, 'utf8');

// I am matching exactly the part where it fails right now in the file
// The file is currently broken at:
//       "mcfrEquivalent": "A1",
//       "classes": [
//         ${c1Str},
//         ${c2Str},
//         ${c3Str},
//         ${c4Str},
//         {
//           "id": "c-adults-basic-1-5",

const brokenRegex = /"mcfrEquivalent": "A1",\s*"classes": \[\s*\$\{c1Str\},\s*\$\{c2Str\},\s*\$\{c3Str\},\s*\$\{c4Str\},\s*\{\s*"id": "c-adults-basic-1-5",/;
const isBroken = content.match(brokenRegex);

if (isBroken) {
    console.log("Found broken code! Fixing it now.");
    let finalReplacement = replacementStr
        .replace('REPLACE_C1', JSON.stringify(class1, null, 2))
        .replace('REPLACE_C2', JSON.stringify(class2, null, 2))
        .replace('REPLACE_C3', JSON.stringify(class3, null, 2))
        .replace('REPLACE_C4', JSON.stringify(class4, null, 2));
    
    // We need to replace the whole block we broke
    // wait, the block we broke starts where? 
    // `}\s*\]\s*\}\s*,\s*\{\s*"id":\s*"c-adults-basic-1-5",` was replaced by my FIRST script.
    // So the file currently has basic-zero ended, then basic-1 started, then the broken strings.
    // Let's just fix the broken strings.
    const brokenStringsRegex = /\$\{c1Str\},\s*\$\{c2Str\},\s*\$\{c3Str\},\s*\$\{c4Str\},/;
    content = content.replace(brokenStringsRegex, 
        JSON.stringify(class1, null, 2) + ",\n" +
        JSON.stringify(class2, null, 2) + ",\n" +
        JSON.stringify(class3, null, 2) + ",\n" +
        JSON.stringify(class4, null, 2) + ","
    );
    fs.writeFileSync(path, content);
    console.log("Success! Fixed the broken literal strings.");
} else {
    console.log("Broken code not found.");
}
