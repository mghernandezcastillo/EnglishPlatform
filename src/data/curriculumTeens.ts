import { CurriculumLevel } from '../types';

const images = [
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
];
const getImg = (i: number) => images[i % images.length];

export const curriculumTeensLevels: CurriculumLevel[] = [
  {
    id: "teens-basic-zero",
    title: "Level 0 - Basic Zero (Teen Startup)",
    duration: "2 meses",
    objective: "Aprender lo más básico del inglés para adolescentes.",
    mcfrEquivalent: "Pre-A1",
    classes: [
      {
        id: "c-teens-basic-zero-1",
        title: "Clase 1: Hello & Introductions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Hello & Introductions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Teen Startup! 🚀", description: "Introductions", imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", content: ["Are you ready to level up your English?", "Today we learn how to introduce ourselves.", "Let's make some new friends!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker Roulette! 🎰", description: "Spin the wheel and answer!", type: "spinning-wheel", content: ["Spin the wheel and tell the class your answer!"], wheelItems: [{label: "Favorite App?", color: "#EF4444"}, {label: "Favorite Video Game?", color: "#3B82F6"}, {label: "Favorite Youtuber?", color: "#10B981"}, {label: "Favorite Singer?", color: "#F59E0B"}, {label: "TikTok or Instagram?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800", content: ["✔️ Say hello like a pro.", "✔️ Ask 'What's your name?'.", "✔️ Introduce yourself and your friends."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Saying Hello 👋", description: "Grammar", type: "normal", content: ["Formal: Hello! / Good morning! / Good afternoon!", "Informal (with friends): Hi! / Hey! / What's up?"], imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Asking for Names 🕵️", description: "Grammar", type: "normal", content: ["Question: What is your name?", "Answer: My name is [Name]. / I'm [Name]."], imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Asking How Someone Is 🤝", description: "Grammar", type: "normal", content: ["Question: How are you?", "Answers: I'm fine, thanks! / I'm great! / Not bad."], imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Saying Goodbye ✌️", description: "Grammar", type: "normal", content: ["Formal: Goodbye! / Have a good day!", "Informal: Bye! / See you later! / Catch you later!"], imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Useful Slang for Teens 😎", description: "Grammar", type: "normal", content: ["'Bro' or 'Dude' = Amigo", "'Cool' = Genial", "Example: What's up, bro? / That's cool!"], imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! What's up?", "Sam: Not much, just chilling. You?", "Alex: I'm great! Are you the new student?", "Sam: Yeah! I'm Sam. Nice to meet you.", "Alex: Nice to meet you too!"], imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", content: ["Alex: ______, I'm Alex. What's your name?"], options: ["Goodbye", "Hi", "Thank you"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1506869640319-fea1a2753c61?auto=format&fit=crop&q=80&w=800", content: ["Sarah: How are you today? \nMike: I'm ______, thanks!"], options: ["table", "great", "hello"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Complete the chat (3/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", content: ["Emma: See you later! \nJake: ______!"], options: ["Bye", "Hi", "What's up"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800", content: ["👋 ➕ 😃 ➕ 🤝"], options: ["I'm hungry, let's eat.", "Hi! Nice to meet you.", "Goodbye, see you later."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and practice with a partner!"], wheelItems: [{label: "Say Hello formally", color: "#EF4444"}, {label: "Say Hi to a bro", color: "#3B82F6"}, {label: "Ask someone's name", color: "#10B981"}, {label: "Ask 'How are you?'", color: "#F59E0B"}, {label: "Say Goodbye to a friend", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", content: ["Which one is INFORMAL? (Para amigos)"], options: ["Good morning", "What's up?", "Hello"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1506869640319-fea1a2753c61?auto=format&fit=crop&q=80&w=800", content: ["How do you answer: 'What is your name?'"], options: ["I'm 15.", "I'm great.", "My name is Leo."], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", content: ["Which one means 'Adiós'?"], options: ["See you later!", "How are you?", "Nice to meet you."], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: New Student 🎒", description: "Production", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", content: ["Student A: You are the new kid in school.", "Student B: You are a friendly classmate.", "Action: Say hi, ask names, and say 'Nice to meet you!'"], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write a short text (3 lines) introducing yourself in English.", "Include your name, how you are, and a goodbye."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about greetings in English.", "Write down 2 new ways to say hello!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-2",
        title: "Clase 2: Numbers, Ages & Birthdays",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Numbers, Ages & Birthdays.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 2! 🎉", description: "Numbers & Ages", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", content: ["Let's talk about numbers!", "How old are you?", "When is your birthday?"], bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer the question!"], wheelItems: [{label: "Favorite Number?", color: "#EF4444"}, {label: "Lucky Number?", color: "#3B82F6"}, {label: "Favorite month?", color: "#10B981"}, {label: "Your age?", color: "#F59E0B"}, {label: "Best age?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Count from 1 to 100.", "✔️ Ask and answer 'How old are you?'.", "✔️ Talk about your birthday and months."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Numbers 1-20 🔢", description: "Vocabulary", type: "normal", content: ["1-10: One, two, three, four, five, six, seven, eight, nine, ten.", "11-20: Eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Numbers 20-100 🚀", description: "Vocabulary", type: "normal", content: ["Tens: Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.", "Example: 25 = Twenty-five.", "Example: 42 = Forty-two."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Asking for Age 🎂", description: "Grammar", type: "normal", content: ["Question: How old are you?", "Answer: I am 15 years old. / I'm 15."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Months of the Year 📅", description: "Vocabulary", type: "normal", content: ["Jan, Feb, Mar, Apr, May, Jun", "Jul, Aug, Sep, Oct, Nov, Dec", "Notice: Always use capital letters! (Enero = January)"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "When is your birthday? 🎈", description: "Grammar", type: "normal", content: ["Question: When is your birthday?", "Answer: My birthday is IN May.", "Answer: It is IN October."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! Is it your birthday today?", "Sam: No! My birthday is in August.", "Alex: Oh! How old are you?", "Sam: I am 16 years old.", "Alex: Cool, I am 15."], bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Teacher: ______ old are you, Max?", "Max: I am 14 years old."], options: ["What", "How", "When"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Lucy: When is your birthday?", "Jake: My birthday is ______ July."], options: ["on", "in", "at"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Math time! (3/3)", description: "Quiz", content: ["What is 20 + 15?"], options: ["Thirty-five", "Twenty-five", "Forty-five"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["🎂 ➕ ❓ ➕ 📅"], options: ["I want cake.", "When is your birthday?", "How old are you?"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "How old are you?", color: "#EF4444"}, {label: "When is your birthday?", color: "#3B82F6"}, {label: "How old is your mom?", color: "#10B981"}, {label: "How old is your best friend?", color: "#F59E0B"}, {label: "What is your favorite number?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["What number is 'Eighty'?"], options: ["18", "80", "8"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["Which month comes after October?"], options: ["September", "December", "November"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["How do you say 'Tengo 15 años'?"], options: ["I have 15 years.", "I am 15 years old.", "I am 15 years."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: Birthday Party 🥳", description: "Production", content: ["Student A: It's your birthday! Tell your age.", "Student B: Ask when the birthday is and say Happy Birthday!", "Action: Use 'How old are you?' and 'When is your birthday?'"], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write down the ages and birthdays of 3 friends or family members.", "Example: My mom is 40. Her birthday is in April."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about numbers and ages.", "Practice counting to 100!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-3",
        title: "Clase 3: My Body & Actions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Body & Actions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 3! 💪", description: "My Body & Actions", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", content: ["Are you ready to move?", "Today we learn about the body.", "And what actions we can do!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Simon Says! 🏃‍♂️", description: "Warm-up Activity", type: "normal", imageUrl: "/images/teens_simon_says.jpg?v=3", content: ["Let's play Simon Says!", "Listen to the teacher and act it out.", "Example: 'Simon says touch your nose!'"], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name parts of the body.", "✔️ Talk about actions.", "✔️ Say 'I can' and 'I can't'."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "My Body (Face) 👦", description: "Vocabulary", type: "normal", imageUrl: "/images/teens_body_face.jpg?v=3", content: ["Head = Cabeza", "Eyes = Ojos", "Ears = Orejas", "Nose = Nariz", "Mouth = Boca"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "My Body (Limbs) 🦾", description: "Vocabulary", type: "normal", imageUrl: "/images/teens_body_limbs.jpg?v=3", content: ["Arms = Brazos", "Hands = Manos", "Legs = Piernas", "Feet = Pies (Foot = Pie)"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Action Verbs 🏃", description: "Vocabulary", type: "normal", imageUrl: "/images/teens_actions_sports.jpg?v=4", content: ["Run = Correr", "Jump = Saltar", "Walk = Caminar", "Swim = Nadar", "Dance = Bailar"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Can / Can't ✅", description: "Grammar", type: "normal", content: ["I CAN = Yo puedo", "I CAN'T = Yo no puedo", "Example: I can swim. I can't fly."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Grammar: Questions ❓", description: "Grammar", type: "normal", content: ["Question: Can you jump?", "Answer: Yes, I can. / No, I can't.", "Example: Can you dance? Yes, I can!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the text 📱", description: "Context", content: ["I am Leo. I am very active.", "I can run very fast and I can jump high.", "But I can't swim. It's too hard for me!"], bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the sentence (1/3)", description: "Quiz", content: ["Leo: I ______ swim. It's too hard!"], options: ["can", "can't", "am"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the sentence (2/3)", description: "Quiz", content: ["Teacher: ______ you jump high?", "Leo: Yes, I can!"], options: ["Do", "Are", "Can"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "What is this? (3/3)", description: "Quiz", content: ["You use them to see."], options: ["Eyes", "Ears", "Legs"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["👁️ ➕ 👃 ➕ 👄"], options: ["I can swim.", "Parts of the face.", "I can jump."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Can you swim?", color: "#EF4444"}, {label: "Can you dance?", color: "#3B82F6"}, {label: "Can you run fast?", color: "#10B981"}, {label: "Can you jump high?", color: "#F59E0B"}, {label: "Can you touch your toes?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["What is 'Head' in Spanish?"], options: ["Mano", "Cabeza", "Pie"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["I ____ run, but I ____ fly."], options: ["can / can", "can't / can't", "can / can't"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["You have two..."], options: ["Arms", "Heads", "Noses"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: The Robot 🤖", description: "Production", content: ["Student A: You are a robot. Say what you can and can't do.", "Student B: You are the creator. Ask the robot questions.", "Action: 'Can you dance?' 'Yes, I can.'"], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write 3 sentences about what you CAN do.", "Write 3 sentences about what you CAN'T do."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about action verbs.", "Write down 2 new actions you learned!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-4",
        title: "Clase 4: My Favorite Gadgets & Tech",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Favorite Gadgets & Tech.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 4! 📱", description: "My Favorite Gadgets", imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", content: ["Are you a tech lover?", "Today we talk about gadgets.", "And our favorite devices!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Smartphone or Laptop?", color: "#EF4444"}, {label: "Favorite App?", color: "#3B82F6"}, {label: "Do you like Video Games?", color: "#10B981"}, {label: "Headphones or Speakers?", color: "#F59E0B"}, {label: "Are you a gamer?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800", content: ["✔️ Name common tech gadgets.", "✔️ Use 'I have' and 'I don't have'.", "✔️ Ask 'Do you have...?'."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Tech Gadgets 🎧", description: "Vocabulary", type: "normal", imageUrl: "https://images.unsplash.com/photo-1550009158-9effb67484d4?auto=format&fit=crop&q=80&w=800", content: ["Smartphone = Teléfono inteligente", "Laptop = Computadora portátil", "Tablet = Tableta", "Headphones = Audífonos"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Gaming 🎮", description: "Vocabulary", type: "normal", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", content: ["Console = Consola", "Controller = Control", "Video games = Videojuegos", "Screen = Pantalla"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: Have / Don't have 🎒", description: "Grammar", type: "normal", imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800", content: ["I HAVE = Yo tengo", "I DON'T HAVE = Yo no tengo", "Example: I have a smartphone. I don't have a tablet."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Questions ❓", description: "Grammar", type: "normal", imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=800", content: ["Question: Do you have a laptop?", "Answer: Yes, I do. / No, I don't.", "Example: Do you have headphones? Yes, I do!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Adjectives for Tech ⚡", description: "Vocabulary", type: "normal", imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", content: ["New = Nuevo", "Old = Viejo", "Fast = Rápido", "Slow = Lento", "My phone is fast! = Mi teléfono es rápido."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", imageUrl: "https://images.unsplash.com/photo-1521931961826-bd48925d50a5?auto=format&fit=crop&q=80&w=800", content: ["Alex: Hey! Do you have a new console?", "Sam: Yes, I do! It is very fast.", "Alex: Cool! Do you have the new game?", "Sam: No, I don't. But I have headphones!"], bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1544228428-2b87fbe6089a?auto=format&fit=crop&q=80&w=800", content: ["Alex: ______ you have a tablet?"], options: ["Are", "Do", "Is"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", content: ["Sam: Yes, I ______!"], options: ["have", "am", "do"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", content: ["You use them to listen to music."], options: ["Console", "Headphones", "Screen"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", content: ["📱 ➕ 🎧 ➕ 🎮"], options: ["I have a laptop.", "My favorite gadgets.", "I don't have a phone."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Do you have a tablet?", color: "#EF4444"}, {label: "Do you have headphones?", color: "#3B82F6"}, {label: "Do you have a laptop?", color: "#10B981"}, {label: "Do you have a console?", color: "#F59E0B"}, {label: "Is your phone new?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", content: ["How do you say 'Yo no tengo'?"], options: ["I have not", "I don't have", "I am not have"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1531297180b77-287d25e016f4?auto=format&fit=crop&q=80&w=800", content: ["What is the opposite of 'New'?"], options: ["Fast", "Old", "Slow"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", content: ["How do you answer: 'Do you have a phone?'"], options: ["Yes, I have.", "Yes, I am.", "Yes, I do."], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: The Tech Store 🛍️", description: "Production", imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", content: ["Student A: You work in a tech store.", "Student B: You are a customer looking for a laptop.", "Action: 'Do you have a fast laptop?' 'Yes, I do!'"], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800", content: ["Make a list of 3 gadgets you have.", "Make a list of 3 gadgets you DON'T have."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about tech vocabulary.", "Write down 2 new words!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-5",
        title: "Clase 5: Yummy Snacks & Drinks",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Yummy Snacks & Drinks.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 5! 🍕", description: "Snacks & Drinks", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", content: ["Are you hungry?", "Today we talk about food.", "And our favorite snacks!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Pizza or Burgers?", color: "#EF4444"}, {label: "Favorite snack?", color: "#3B82F6"}, {label: "Do you like candy?", color: "#10B981"}, {label: "Favorite drink?", color: "#F59E0B"}, {label: "Sweet or Salty?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", imageUrl: "https://images.unsplash.com/photo-1544025162-811114cd8ce4?auto=format&fit=crop&q=80&w=800", content: ["✔️ Name common snacks and drinks.", "✔️ Use 'I like' and 'I don't like'.", "✔️ Ask 'Do you like...?'."], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Yummy Snacks 🍔", description: "Vocabulary", imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800", type: "normal", content: ["Pizza = Pizza", "Hamburger = Hamburguesa", "Fries = Papas fritas", "Candy = Dulces"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Cool Drinks 🥤", description: "Vocabulary", imageUrl: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800", type: "normal", content: ["Water = Agua", "Soda = Refresco", "Juice = Jugo", "Milkshake = Malteada"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: Like / Don't like 👍", description: "Grammar", imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800", type: "normal", content: ["I LIKE = Me gusta", "I DON'T LIKE = No me gusta", "Example: I like pizza. I don't like soda."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Questions ❓", description: "Grammar", imageUrl: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a8d?auto=format&fit=crop&q=80&w=800", type: "normal", content: ["Question: Do you like fries?", "Answer: Yes, I do. / No, I don't.", "Example: Do you like candy? Yes, I do!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Adjectives for Food 🌶️", description: "Vocabulary", imageUrl: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800", type: "normal", content: ["Sweet = Dulce", "Salty = Salado", "Spicy = Picante", "Delicious = Delicioso", "This pizza is delicious!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", imageUrl: "https://images.unsplash.com/photo-1521931961826-bd48925d50a5?auto=format&fit=crop&q=80&w=800", content: ["Alex: Hey! Let's get some food.", "Sam: Great! Do you like pizza?", "Alex: Yes, I do! But I don't like soda.", "Sam: No problem. I have water."], bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=800", content: ["Alex: ______ you like hamburgers?"], options: ["Are", "Do", "Is"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800", content: ["Sam: No, I ______!"], options: ["don't", "am not", "do"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&q=80&w=800", content: ["It is a cold, sweet drink."], options: ["Water", "Milkshake", "Fries"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", content: ["🍔 ➕ 🍟 ➕ 🥤"], options: ["I like vegetables.", "My favorite fast food.", "I don't like burgers."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Do you like pizza?", color: "#EF4444"}, {label: "Do you like candy?", color: "#3B82F6"}, {label: "Do you like water?", color: "#10B981"}, {label: "Do you like spicy food?", color: "#F59E0B"}, {label: "What is your favorite food?", color: "#8B5CF6"}], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", content: ["How do you say 'Me gusta'?"], options: ["I have", "I like", "I am like"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=800", content: ["What is 'Dulce' in English?"], options: ["Salty", "Spicy", "Sweet"], correctOptionIndex: 2, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800", content: ["How do you answer: 'Do you like fries?'"], options: ["Yes, I do.", "Yes, I like.", "Yes, I am."], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: At the Cafeteria 🏫", description: "Production", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", content: ["Student A: You are ordering lunch.", "Student B: You work in the cafeteria.", "Action: 'Do you like pizza?' 'Yes, I do!'"], bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1506869640319-fea1a2ab8e10?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800", content: ["Write a list of 3 foods you like.", "Write a list of 3 foods you DON'T like."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about food vocabulary.", "Write down 2 new foods you learned!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-6",
        title: "Clase 6: Shapes & Patterns",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Shapes & Patterns.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 6! 🔶", description: "Shapes & Patterns", imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", content: ["Are you ready to see shapes?", "Today we learn about colors and forms.", "Look around you!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Favorite shape?", color: "#EF4444"}, {label: "Favorite color?", color: "#3B82F6"}, {label: "Stripes or dots?", color: "#10B981"}, {label: "Square or Circle?", color: "#F59E0B"}, {label: "Find a triangle!", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name common shapes.", "✔️ Talk about patterns in clothes.", "✔️ Describe things around you."], imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Basic Shapes ⏺️", description: "Vocabulary", type: "normal", content: ["Circle = Círculo", "Square = Cuadrado", "Triangle = Triángulo", "Rectangle = Rectángulo"], imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Patterns 🦓", description: "Vocabulary", type: "normal", content: ["Stripes = Rayas", "Polka dots = Puntos / Lunares", "Plaid = Cuadros", "Plain = Liso (sin patrón)"], imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: It is a... 🖼️", description: "Grammar", type: "normal", content: ["IT IS A = Es un/una", "THEY ARE = Ellos son / Esos son", "Example: It is a blue circle. They are red squares."], imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Wearing 👕", description: "Grammar", type: "normal", content: ["I am wearing = Yo estoy usando (ropa)", "You are wearing = Tú estás usando", "Example: I am wearing a striped shirt."], imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Adjectives Order 📏", description: "Vocabulary", type: "normal", content: ["Size + Color + Shape", "Example: A big red circle.", "Example: A small blue square."], imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! Do you like my new shirt?", "Sam: Yes! Is it plain or striped?", "Alex: It has polka dots!", "Sam: Cool! I am wearing a plaid shirt."], imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: I am ______ a blue shirt."], options: ["wear", "wearing", "wears"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: ______ shirt is cool!"], options: ["You", "Yours", "Your"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["It has 3 sides."], options: ["Square", "Circle", "Triangle"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["🔴 ➕ 🔲 ➕ 🦓"], options: ["I like circles and squares.", "A red circle, a square, and stripes.", "I am wearing stripes."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "What are you wearing?", color: "#EF4444"}, {label: "Do you like stripes?", color: "#3B82F6"}, {label: "Do you like polka dots?", color: "#10B981"}, {label: "Find a square in the room!", color: "#F59E0B"}, {label: "Find a circle in the room!", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["What shape is a pizza?"], options: ["Square", "Circle", "Triangle"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["What is 'Rayas' in English?"], options: ["Plaid", "Stripes", "Polka dots"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["Correct order:"], options: ["A red big circle", "A circle red big", "A big red circle"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: At the store 👕", description: "Production", content: ["Student A: You want a striped shirt.", "Student B: You work at the store.", "Action: 'Do you have a striped shirt?' 'Yes!'"], imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Describe your favorite shirt.", "Write what color it is and if it has a pattern."], imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about shapes.", "Write down 2 new shapes you learned!"], imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-7",
        title: "Clase 7: School Subjects & Supplies",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of School Subjects & Supplies.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 7! 🎒", description: "School Subjects", imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", content: ["Do you like school?", "Today we talk about school supplies.", "And our favorite subjects!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Math or Science?", color: "#EF4444"}, {label: "Favorite subject?", color: "#3B82F6"}, {label: "Do you like English?", color: "#10B981"}, {label: "Art or Music?", color: "#F59E0B"}, {label: "What is in your backpack?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name school supplies.", "✔️ Name school subjects.", "✔️ Ask 'What is your favorite subject?'."], imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "School Supplies ✏️", description: "Vocabulary", type: "normal", content: ["Backpack = Mochila", "Notebook = Cuaderno", "Pen = Bolígrafo", "Pencil = Lápiz", "Eraser = Borrador"], imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "School Subjects 📚", description: "Vocabulary", type: "normal", content: ["Math = Matemáticas", "Science = Ciencias", "History = Historia", "English = Inglés", "P.E. = Educación Física"], imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: There is / There are 🎒", description: "Grammar", type: "normal", content: ["THERE IS = Hay (singular)", "THERE ARE = Hay (plural)", "Example: There is a pen. There are 2 notebooks."], imageUrl: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Favorite 🌟", description: "Grammar", type: "normal", content: ["Question: What is your favorite subject?", "Answer: My favorite subject is Math.", "Answer: I love Science!"], imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Adjectives for School 🤓", description: "Vocabulary", type: "normal", content: ["Easy = Fácil", "Hard = Difícil", "Boring = Aburrido", "Fun = Divertido", "Math is hard, but Art is fun!"], imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! Do you have a pen?", "Sam: Yes, I do. There is a pen in my backpack.", "Alex: Thanks! What is your next class?", "Sam: History. It is very interesting!"], imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: ______ there a notebook in your bag?"], options: ["Are", "Is", "Am"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: Yes, ______ are two notebooks!"], options: ["they", "their", "there"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["A class where you run and play sports."], options: ["Math", "P.E.", "History"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["🎒 ➕ 📓 ➕ ✏️"], options: ["I like Science.", "My school supplies.", "P.E. is fun."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Favorite subject?", color: "#EF4444"}, {label: "Do you like Math?", color: "#3B82F6"}, {label: "Is English easy or hard?", color: "#10B981"}, {label: "What's in your backpack?", color: "#F59E0B"}, {label: "Do you have a pen?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["How do you say 'Borrador'?"], options: ["Pen", "Eraser", "Notebook"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["What is the opposite of 'Hard'?"], options: ["Fun", "Easy", "Boring"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["How do you answer: 'What is your favorite subject?'"], options: ["My favorite is pen.", "My favorite subject is Art.", "I have an Art."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: First day of school 🏫", description: "Production", content: ["Student A: You are a new student.", "Student B: You are asking about their favorite subjects.", "Action: 'What is your favorite subject?' 'I love Science.'"], imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write a list of 5 things in your backpack.", "Write what your favorite subject is and why."], imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about school subjects.", "Write down 2 new subjects you learned!"], imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-8",
        title: "Clase 8: Pets & Animal Friends",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Pets & Animal Friends.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 8! 🐶", description: "Pets & Animals", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", content: ["Do you have a pet?", "Today we talk about our animal friends.", "Cats, dogs, and more!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Dogs or Cats?", color: "#EF4444"}, {label: "Favorite animal?", color: "#3B82F6"}, {label: "Do you have a pet?", color: "#10B981"}, {label: "Scary animal?", color: "#F59E0B"}, {label: "Cute animal?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name common pets and animals.", "✔️ Describe animals (big, small, cute).", "✔️ Talk about your pets."], imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Common Pets 🐈", description: "Vocabulary", type: "normal", content: ["Dog = Perro", "Cat = Gato", "Bird = Pájaro", "Fish = Pez", "Hamster = Hámster"], imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Other Animals 🦁", description: "Vocabulary", type: "normal", content: ["Lion = León", "Tiger = Tigre", "Elephant = Elefante", "Monkey = Mono"], imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: Have (Pets) 🐾", description: "Grammar", type: "normal", content: ["I have a dog. = Yo tengo un perro.", "She has a cat. = Ella tiene un gato.", "He has a bird. = Él tiene un pájaro."], imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Questions ❓", description: "Grammar", type: "normal", content: ["Question: Do you have a pet?", "Answer: Yes, I have a dog. / No, I don't.", "Question: What is your favorite animal?"], imageUrl: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Adjectives for Animals 🦊", description: "Vocabulary", type: "normal", content: ["Cute = Lindo", "Scary = Aterrador", "Big = Grande", "Small = Pequeño", "My dog is very cute!"], imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! Look at this picture of my cat.", "Sam: Aww, it is so cute! What is its name?", "Alex: His name is Leo. Do you have a pet?", "Sam: No, I don't. But I love dogs!"], imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: Look at my dog. He ______ very big!"], options: ["are", "is", "am"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: Do you ______ a cat?"], options: ["has", "having", "have"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["An animal that swims and lives in water."], options: ["Bird", "Fish", "Hamster"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["🐶 ➕ 🐈 ➕ 🦜"], options: ["My favorite food.", "I have many pets.", "School is fun."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Favorite animal?", color: "#EF4444"}, {label: "Do you have a dog?", color: "#3B82F6"}, {label: "Do you like cats?", color: "#10B981"}, {label: "What animal is scary?", color: "#F59E0B"}, {label: "What animal is cute?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["How do you say 'Pájaro'?"], options: ["Fish", "Bird", "Cat"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["What is the opposite of 'Big'?"], options: ["Scary", "Cute", "Small"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["Which one is a Wild Animal?"], options: ["Dog", "Lion", "Cat"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: The Pet Store 🐾", description: "Production", content: ["Student A: You want to buy a pet.", "Student B: You work at the pet store.", "Action: 'Do you have cute dogs?' 'Yes, we have a small dog.'"], imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write a short text about your favorite animal.", "Why do you like it? Is it big or small?"], imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about animals.", "Write down 2 new animals you learned!"], imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-9",
        title: "Clase 9: My Hobbies & Free Time",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Hobbies & Free Time.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 9! 🎸", description: "My Hobbies", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", content: ["What do you do in your free time?", "Today we talk about fun activities.", "And our favorite hobbies!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Music or Sports?", color: "#EF4444"}, {label: "Favorite hobby?", color: "#3B82F6"}, {label: "Do you play games?", color: "#10B981"}, {label: "Do you read?", color: "#F59E0B"}, {label: "Free time activity?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name common hobbies.", "✔️ Use 'I like playing / doing'.", "✔️ Ask 'What is your hobby?'."], imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Popular Hobbies 🎮", description: "Vocabulary", type: "normal", content: ["Playing video games", "Listening to music", "Watching movies", "Reading books"], imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Active Hobbies ⚽", description: "Vocabulary", type: "normal", content: ["Playing soccer/basketball", "Riding a bike", "Skateboarding", "Dancing"], imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: Like + ing 🎸", description: "Grammar", type: "normal", content: ["I like playING = Me gusta jugar", "I like listenING = Me gusta escuchar", "Example: I like playing video games."], imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Questions ❓", description: "Grammar", type: "normal", content: ["Question: What is your hobby?", "Answer: My hobby is reading.", "Question: Do you like playing sports?"], imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Frequency Adverbs 🕒", description: "Vocabulary", type: "normal", content: ["Always = Siempre", "Sometimes = A veces", "Never = Nunca", "Example: I always listen to music."], imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! What do you do in your free time?", "Sam: I like watching movies and reading.", "Alex: That's cool! I like playing soccer.", "Sam: Nice! I never play soccer. I am bad at it."], imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: I like ______ video games."], options: ["play", "playing", "plays"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: ______ you like reading?"], options: ["Are", "Is", "Do"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["You do this with a book."], options: ["Reading", "Listening", "Watching"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["🎧 ➕ 🎶 ➕ 🎸"], options: ["I like reading books.", "I like listening to music.", "I play soccer."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Favorite hobby?", color: "#EF4444"}, {label: "Do you like reading?", color: "#3B82F6"}, {label: "Do you play sports?", color: "#10B981"}, {label: "What is fun?", color: "#F59E0B"}, {label: "Do you watch movies?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["Which one is a sport?"], options: ["Reading", "Soccer", "Music"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["What does 'Always' mean?"], options: ["Nunca", "A veces", "Siempre"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["How do you answer: 'What is your hobby?'"], options: ["I like play.", "My hobby is reading.", "I am playing."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: Interview 🎤", description: "Production", content: ["Student A: You are a famous YouTuber.", "Student B: You are interviewing them about their hobbies.", "Action: 'What do you do in your free time?'"], imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write a paragraph (3-4 lines) about your free time.", "Include 2 things you like doing and 1 thing you never do."], imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about hobbies.", "Write down 2 new hobbies you learned!"], imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-10",
        title: "Clase 10: Family & Friends",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Family & Friends.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 10! 👨‍👩‍👧‍👦", description: "Family & Friends", imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800", content: ["Who is in your family?", "Today we talk about our loved ones.", "And our best friends!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Big or small family?", color: "#EF4444"}, {label: "Do you have siblings?", color: "#3B82F6"}, {label: "Who is your best friend?", color: "#10B981"}, {label: "Favorite cousin?", color: "#F59E0B"}, {label: "Grandparents?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name family members.", "✔️ Describe people.", "✔️ Talk about your friends."], imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Immediate Family 🏠", description: "Vocabulary", type: "normal", content: ["Mother / Mom = Madre / Mamá", "Father / Dad = Padre / Papá", "Brother = Hermano", "Sister = Hermana"], imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Extended Family 🏡", description: "Vocabulary", type: "normal", content: ["Grandmother / Grandma = Abuela", "Grandfather / Grandpa = Abuelo", "Cousin = Primo/a", "Uncle = Tío / Aunt = Tía"], imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: He / She is 👦👧", description: "Grammar", type: "normal", content: ["He is my brother. = Él es mi hermano.", "She is my sister. = Ella es mi hermana.", "Example: He is tall. She is funny."], imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Possessives 🔑", description: "Grammar", type: "normal", content: ["My = Mi/Mis", "His = Su (de él)", "Her = Su (de ella)", "Example: His name is Leo. Her name is Mia."], imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Adjectives for People 🌟", description: "Vocabulary", type: "normal", content: ["Tall = Alto / Short = Bajo", "Funny = Divertido", "Smart = Inteligente", "Friendly = Amistoso"], imageUrl: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! Who is that boy in the photo?", "Sam: That is my brother. His name is Tom.", "Alex: Is he funny?", "Sam: Yes! He is very funny and smart."], imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: What is ______ name? (de ella)"], options: ["his", "her", "my"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: ______ name is Mia."], options: ["Her", "His", "She"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["Your mother's brother is your..."], options: ["Cousin", "Uncle", "Grandpa"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["👦 ➕ 👧 ➕ 🏠"], options: ["My friends.", "My brother and sister.", "I am an only child."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Do you have siblings?", color: "#EF4444"}, {label: "Who is your best friend?", color: "#3B82F6"}, {label: "Is your dad tall?", color: "#10B981"}, {label: "Are you funny?", color: "#F59E0B"}, {label: "Describe your mom!", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["Which one is 'Abuela'?"], options: ["Aunt", "Grandma", "Sister"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["What is the opposite of 'Tall'?"], options: ["Smart", "Funny", "Short"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["How do you say: 'Su nombre (de él) es...'?"], options: ["He name is...", "Her name is...", "His name is..."], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: Family Album 📸", description: "Production", content: ["Student A: Show a 'photo' and describe your family.", "Student B: Ask questions. 'Who is he?' 'Is she tall?'", "Action: Use 'This is my...' and 'His/Her name is...'"], imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Draw your family tree or write about your best friend.", "Use 3 adjectives (tall, funny, smart, etc.)."], imageUrl: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about family.", "Write down 2 new family members you learned!"], imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-11",
        title: "Clase 11: Alfabeto, deletreo y usernames",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Alfabeto, deletreo y usernames.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 11! 🔤", description: "Alphabet & Usernames", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", content: ["Are you ready to spell?", "Today we learn the alphabet.", "And how to share our usernames!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "TikTok or Insta?", color: "#EF4444"}, {label: "Favorite letter?", color: "#3B82F6"}, {label: "Do you play online?", color: "#10B981"}, {label: "Hardest letter?", color: "#F59E0B"}, {label: "Spell your name!", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Say the English alphabet.", "✔️ Spell your name.", "✔️ Ask and say usernames."], imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "The Alphabet 🅰️", description: "Vocabulary", type: "normal", content: ["A B C D E F G H I J K L M", "N O P Q R S T U V W X Y Z"], imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Tricky Letters ⚠️", description: "Vocabulary", type: "normal", content: ["A (ei) vs E (i) vs I (ai)", "C (si) vs S (es) vs Z (zi)", "G (yi) vs J (yei)"], imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: Spelling 🗣️", description: "Grammar", type: "normal", content: ["Question: How do you spell your name?", "Answer: It's L-E-O.", "Example: A-L-E-X."], imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Usernames 📱", description: "Vocabulary", type: "normal", content: ["@ = at", "_ = underscore", ". = dot", "Example: @leo_cool.123 (at leo underscore cool dot one two three)"], imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Asking for Social Media 🌐", description: "Grammar", type: "normal", content: ["Question: What is your username?", "Answer: It is @alex_gamer.", "Question: Are you on TikTok?"], imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey Sam! What is your Insta username?", "Sam: It is @sam_music.dot", "Alex: How do you spell that?", "Sam: S-A-M underscore M-U-S-I-C dot"], imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: How do you ______ your name?"], options: ["spell", "spells", "spelling"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: It is @ (______) sam_cool"], options: ["dot", "at", "underscore"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["The letter 'E' sounds like..."], options: ["ei", "i", "ai"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["📱 ➕ 🔤 ➕ 🗣️"], options: ["My favorite food.", "I like to read.", "How do you spell your username?"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Spell your name", color: "#EF4444"}, {label: "What's your username?", color: "#3B82F6"}, {label: "Spell 'ENGLISH'", color: "#10B981"}, {label: "Are you on TikTok?", color: "#F59E0B"}, {label: "Spell your last name", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["How do you say '_' ?"], options: ["Dash", "Underscore", "Dot"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["How do you pronounce the letter 'A' ?"], options: ["ei", "ah", "ai"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["What does '@' mean?"], options: ["At", "Dot", "And"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: New Friends 🤝", description: "Production", content: ["Student A: Ask for their username to add them.", "Student B: Tell them your username and spell it.", "Action: '@cool_gamer. C-O-O-L underscore...'"], imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write down your favorite social media username.", "Write how to spell it (Example: L-E-O underscore C-O-O-L)."], imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about the alphabet.", "Sing the alphabet song!"], imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-12",
        title: "Clase 12: Presentarse: edad, curso, ciudad, gustos y redes sociales",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Presentarse: edad, curso, ciudad, gustos y redes sociales.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 12! 🙋‍♂️", description: "All About Me", imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800", content: ["Who are you?", "Today we learn how to introduce ourselves fully.", "Age, city, hobbies and more!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "How old are you?", color: "#EF4444"}, {label: "Where are you from?", color: "#3B82F6"}, {label: "What's your hobby?", color: "#10B981"}, {label: "Favorite food?", color: "#F59E0B"}, {label: "Do you have pets?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Talk about yourself.", "✔️ Say where you live.", "✔️ Combine all your knowledge."], imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Personal Info 🪪", description: "Grammar", type: "normal", content: ["Name: My name is... / I'm...", "Age: I am ... years old.", "City: I live in..."], imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Likes & Dislikes 👍👎", description: "Grammar", type: "normal", content: ["I like... (pizza, playing soccer).", "I don't like... (spiders, waking up early).", "My favorite... is..."], imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "School & Grade 🏫", description: "Vocabulary", type: "normal", content: ["I am in 8th grade. = Estoy en octavo grado.", "I go to [Name] High School.", "My favorite subject is..."], imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Connecting Ideas 🔗", description: "Grammar", type: "normal", content: ["And = Y", "But = Pero", "Example: I like pizza AND I like burgers.", "Example: I like dogs BUT I don't have one."], imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Full Introduction 🗣️", description: "Grammar", type: "normal", content: ["Hi! I'm Leo. I'm 15 years old. I live in Madrid.", "I like video games and my favorite subject is Math.", "Nice to meet you!"], imageUrl: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Profile 📱", description: "Context", content: ["Bio: Hi! I'm Sam. I'm 14 years old and I live in London.", "I am in 9th grade.", "I love music and I have a dog named Max.", "Follow me! @sam_cool"], imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the sentence (1/3)", description: "Quiz", content: ["Sam: I live ______ London."], options: ["on", "at", "in"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the sentence (2/3)", description: "Quiz", content: ["Leo: I like pizza ______ I don't like burgers."], options: ["and", "but", "or"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Complete the sentence (3/3)", description: "Quiz", content: ["I am ______ 8th grade."], options: ["in", "on", "at"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["👋 ➕ 👦 ➕ 🏙️"], options: ["I like pizza.", "Hi, I am Leo and I live in the city.", "I have a dog."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and present!"], wheelItems: [{label: "Name and Age", color: "#EF4444"}, {label: "City and Grade", color: "#3B82F6"}, {label: "Likes and Dislikes", color: "#10B981"}, {label: "Favorite subject", color: "#F59E0B"}, {label: "Full intro (3 sentences)", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["Which one is correct?"], options: ["I have 15 years.", "I am 15 years old.", "I am 15 years."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["What connects two similar ideas? (I like cats __ dogs)"], options: ["But", "And", "Or"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["How do you say 'Vivo en...'?"], options: ["I live in...", "I living in...", "I am live in..."], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: Meet and Greet 🤝", description: "Production", content: ["Student A: Introduce yourself completely.", "Student B: Listen and ask one question.", "Action: 'Hi, I'm... I'm... I like... What about you?'"], imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write your own 'Bio' for social media (3-4 sentences).", "Include your name, age, city, and one hobby."], imageUrl: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about introductions.", "Practice saying your bio aloud!"], imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-13",
        title: "Clase 13: Ropa, estilo personal y apariencia",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Ropa, estilo personal y apariencia.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 13! 👕", description: "Clothes & Style", imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", content: ["What are you wearing today?", "Today we talk about clothes.", "And personal style!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Sneakers or Boots?", color: "#EF4444"}, {label: "Jeans or Shorts?", color: "#3B82F6"}, {label: "Favorite color to wear?", color: "#10B981"}, {label: "Jacket or Hoodie?", color: "#F59E0B"}, {label: "Describe your shoes!", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name common clothes.", "✔️ Describe appearance.", "✔️ Say what you are wearing."], imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Clothes 👖", description: "Vocabulary", type: "normal", content: ["T-shirt = Camiseta", "Jeans = Pantalones de mezclilla", "Sneakers = Tenis", "Hoodie = Sudadera con capucha"], imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "More Clothes 👗", description: "Vocabulary", type: "normal", content: ["Dress = Vestido", "Jacket = Chamarra / Chaqueta", "Shorts = Pantalones cortos", "Shoes = Zapatos"], imageUrl: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Grammar: Wearing 🧥", description: "Grammar", type: "normal", content: ["I am wearing = Yo estoy usando", "He is wearing = Él está usando", "Example: I am wearing a black hoodie."], imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Appearance 💇", description: "Vocabulary", type: "normal", content: ["Hair = Cabello (Long, Short, Curly, Straight)", "Eyes = Ojos (Brown, Blue, Green)", "Glasses = Lentes", "Example: She has long hair and glasses."], imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Grammar: Has / Have 🌟", description: "Grammar", type: "normal", content: ["I have brown eyes.", "He has short hair.", "Remember: He/She HAS, I/You/We/They HAVE."], imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: I am at the mall. Where are you?", "Sam: I'm here! I am wearing a red hoodie and jeans.", "Alex: Oh, I see you! You have new sneakers!", "Sam: Yes! Thanks."], imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: I ______ wearing a blue T-shirt."], options: ["is", "are", "am"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: She ______ long hair."], options: ["have", "has", "is"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["You wear them on your feet when you play sports."], options: ["Jeans", "Sneakers", "Glasses"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["👕 ➕ 👖 ➕ 👟"], options: ["A dress and shoes.", "A T-shirt, jeans, and sneakers.", "I have short hair."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "What are you wearing?", color: "#EF4444"}, {label: "Describe your hair", color: "#3B82F6"}, {label: "What is your teacher wearing?", color: "#10B981"}, {label: "Do you wear glasses?", color: "#F59E0B"}, {label: "Describe your best friend", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["How do you say 'Sudadera'?"], options: ["Hoodie", "Jacket", "T-shirt"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["Which one is correct for 'Él tiene'?"], options: ["He have", "He is", "He has"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["What goes on your eyes to see better?"], options: ["Sneakers", "Glasses", "Shorts"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: Guess Who! 🤔", description: "Production", content: ["Student A: Describe a famous person or classmate.", "Student B: Guess who it is!", "Action: 'He has short hair and he is wearing glasses.'"], imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write a description of your favorite outfit.", "Mention 3 items of clothing and their colors."], imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about clothes.", "Write down 2 new words!"], imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-14",
        title: "Clase 14: Escuela, materias y objetos del salón",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Escuela, materias y objetos del salón.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 14! 🏫", description: "School & Subjects", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", content: ["Let's go to school!", "Today we review subjects and classroom items.", "Are you ready?"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Math or History?", color: "#EF4444"}, {label: "Favorite teacher?", color: "#3B82F6"}, {label: "What's in your bag?", color: "#10B981"}, {label: "Art or Science?", color: "#F59E0B"}, {label: "Do you like homework?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Name classroom items.", "✔️ Talk about school subjects.", "✔️ Say where things are (prepositions)."], imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Classroom Items 🪑", description: "Vocabulary", type: "normal", content: ["Desk = Escritorio / Pupitre", "Chair = Silla", "Whiteboard = Pizarrón", "Computer = Computadora"], imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "School Subjects Review 📚", description: "Vocabulary", type: "normal", content: ["Math, Science, History, English, P.E.", "Example: We have P.E. today!"], imageUrl: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Prepositions of Place 📍", description: "Grammar", type: "normal", content: ["In = Adentro", "On = Sobre", "Under = Debajo", "Example: The pen is IN the bag. The book is ON the desk."], imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Where is...? ❓", description: "Grammar", type: "normal", content: ["Question: Where is my phone?", "Answer: It is under the notebook.", "Question: Where are the pencils? (Plural)"], imageUrl: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "School Action Verbs ✍️", description: "Vocabulary", type: "normal", content: ["Write = Escribir", "Read = Leer", "Listen = Escuchar", "Example: We read books in English class."], imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Oh no! Where is my math book?", "Sam: Is it in your backpack?", "Alex: No... wait, it is on my desk!", "Sam: Haha, okay. Let's go to class."], imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: Where ______ my pencils?"], options: ["is", "are", "do"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: They are ______ the desk. (sobre)"], options: ["in", "on", "under"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["You sit on it in class."], options: ["Desk", "Chair", "Whiteboard"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["📖 ➕ ⬇️ ➕ 🪑"], options: ["The book is on the desk.", "The book is under the chair.", "I like reading books."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "Where is your pen?", color: "#EF4444"}, {label: "Where is your backpack?", color: "#3B82F6"}, {label: "Favorite class?", color: "#10B981"}, {label: "What's on your desk?", color: "#F59E0B"}, {label: "Do you like Math?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["Which word means 'Debajo'?"], options: ["In", "Under", "On"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["Where do you write your notes?"], options: ["Whiteboard", "Chair", "Notebook"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["How do you answer: 'Where is the phone?'"], options: ["It is on the desk.", "They are in the bag.", "I am on the chair."], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: Lost & Found 🔍", description: "Production", content: ["Student A: You lost something (a pen, a book).", "Student B: Tell them where it is using prepositions.", "Action: 'Where is my pen?' 'It is under your notebook.'"], imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write 3 sentences saying where things are in your room.", "Example: My shoes are under the bed."], imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about prepositions.", "Write down the prepositions you hear!"], imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-15",
        title: "Clase 15: Rutina diaria básica",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Rutina diaria básica.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 15! ⏰", description: "Daily Routine", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800", content: ["What time do you wake up?", "Today we talk about our routines.", "From morning to night!"], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-2", title: "Icebreaker! 🧊", description: "Warm-up Activity", type: "spinning-wheel", content: ["Spin the wheel and answer!"], wheelItems: [{label: "Early bird or Night owl?", color: "#EF4444"}, {label: "Favorite meal?", color: "#3B82F6"}, {label: "Do you take naps?", color: "#10B981"}, {label: "What time do you wake up?", color: "#F59E0B"}, {label: "What time do you sleep?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
            { id: "slide-3", title: "Today's Goals 🎯", description: "Objectives", content: ["✔️ Talk about daily activities.", "✔️ Say the time.", "✔️ Describe your routine."], imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "slide-4", title: "Morning Routine 🌅", description: "Vocabulary", type: "normal", content: ["Wake up = Despertar", "Get up = Levantarse", "Take a shower = Bañarse", "Have breakfast = Desayunar"], imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Afternoon & Night 🌇", description: "Vocabulary", type: "normal", content: ["Go to school = Ir a la escuela", "Have lunch = Comer (almuerzo)", "Do homework = Hacer tarea", "Go to sleep / Go to bed = Ir a dormir"], imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Telling the Time ⌚", description: "Vocabulary", type: "normal", content: ["7:00 = Seven o'clock", "8:30 = Eight thirty", "10:15 = Ten fifteen", "Example: I wake up at 7:00."], imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Grammar: Preposition 'At' 📍", description: "Grammar", type: "normal", content: ["Use AT for time.", "I have lunch AT two o'clock.", "I go to bed AT ten thirty."], imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-8", title: "Grammar: Questions ❓", description: "Grammar", type: "normal", content: ["Question: What time do you wake up?", "Answer: I wake up at 6 o'clock.", "Question: What time is it? (¿Qué hora es?)"], imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: I am so tired today.", "Sam: What time do you go to bed?", "Alex: I go to bed at 12 o'clock.", "Sam: That is too late! I sleep at 10:00."], imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "slide-10", title: "Complete the chat (1/3)", description: "Quiz", content: ["Alex: I wake ______ at 6:00."], options: ["in", "on", "up"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-11", title: "Complete the chat (2/3)", description: "Quiz", content: ["Sam: I have lunch ______ 1:30."], options: ["on", "at", "in"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-12", title: "Vocabulary check (3/3)", description: "Quiz", content: ["What do you do in the morning?"], options: ["Go to bed", "Have breakfast", "Do homework"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Emoji Game", type: "emoji-game", content: ["🌅 ➕ 🚿 ➕ 🍳"], options: ["I have dinner and go to sleep.", "I wake up, take a shower, and have breakfast.", "I go to school."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{label: "What time do you wake up?", color: "#EF4444"}, {label: "What time do you have lunch?", color: "#3B82F6"}, {label: "Do you take a shower in the morning?", color: "#10B981"}, {label: "What time do you go to bed?", color: "#F59E0B"}, {label: "Do you do homework at night?", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Quiz", content: ["How do you say 'Cenar'?"], options: ["Have breakfast", "Have lunch", "Have dinner"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Quiz", content: ["Which preposition is for time?"], options: ["In", "At", "On"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Quiz", content: ["How do you read 10:30?"], options: ["Ten thirty", "Ten o'clock", "Ten three zero"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
            { id: "slide-18", title: "Roleplay: Interview 🎤", description: "Production", content: ["Student A: Ask about your partner's routine.", "Student B: Answer the questions.", "Action: 'What time do you...?' 'I ... at ...'"], imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", imageUrl: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=800", content: ["Awesome job today!", "You leveled up your English!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write your daily routine in 4 sentences.", "Include wake up, breakfast, lunch, and sleep times."], imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about daily routines.", "Write down 2 new verbs you learned!"], imageUrl: "https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-zero-16",
        title: "Clase 16: Level 0 Review & Final Challenge 🏆",
        description: "Review of introductions, ages, body parts, gadgets, snacks, school subjects, and pets.",
        duration: "60 mins",
        objective: "Review and master all vocabulary and grammar from Level 0.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Break the ice and review greetings.",
          slides: [
            { id: "slide-1", title: "Welcome to the Final Review!", description: "Hello everyone! Are you ready for the final challenge?", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800", content: ["Are you ready to test your knowledge?", "Let's review everything we learned in Level 0!", "Have fun!"] },
            { id: "slide-2", title: "Warm-up Activity", description: "Let's chat! What was your favorite topic in Level 0?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800", type: "spinning-wheel", wheelItems: [{label: "Food", color: "#EF4444"}, {label: "Gadgets", color: "#3B82F6"}, {label: "School", color: "#10B981"}, {label: "Pets", color: "#F59E0B"}, {label: "Clothes", color: "#8B5CF6"}], content: ["Spin the wheel and talk about the topic!"] },
            { id: "slide-3", title: "Objectives", description: "Today we will...", content: ["✔️ Review greetings and introductions.", "✔️ Review body parts and gadgets.", "✔️ Play games and win the final challenge!"], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary Review",
          duration: "20 minutos",
          objective: "Review key grammar and vocabulary concepts.",
          slides: [
            { id: "slide-4", title: "Review: Introductions & Age", description: "Remember how to introduce yourself?", content: ["Hi, I'm Alex. I am 14 years old.", "Where are you from? I'm from Mexico.", "Nice to meet you!"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500", type: "normal", imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-5", title: "Review: The Verb 'To Be'", description: "I am, you are, he is...", content: ["I am a student.", "She is my friend.", "They are cool gadgets.", "We are in English class!"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500", type: "normal", imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-6", title: "Review: Body Parts & Colors", description: "Can you remember these?", content: ["I have brown eyes and black hair.", "He has long hair.", "My favorite color is blue."], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500", type: "normal", imageUrl: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-7", title: "Review: Have / Has", description: "Talking about possessions.", content: ["I have a new smartphone.", "She has a cute cat.", "Do you have a laptop? Yes, I do."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500", type: "normal", imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-8", title: "Review: Like & Don't Like", description: "Talking about hobbies and snacks.", content: ["I like pizza, but I don't like broccoli.", "She likes playing video games.", "Do you like math? No, I prefer art."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500", type: "normal", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice & Concept Checking",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "slide-9", title: "Context: The Big Party", description: "Read the text.", content: ["Alex is at a party.", "He is 15 years old.", "He has short hair and a green t-shirt.", "He likes pizza and playing video games."], bgColor: "bg-gradient-to-br from-orange-400 to-red-500", imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-10", title: "Challenge 1: Fill the blank (1/3)", description: "Select the correct option.", content: ["Alex _______ 15 years old."], options: ["are", "is", "am"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-red-500 to-rose-600", imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-11", title: "Challenge 2: Fill the blank (2/3)", description: "Select the correct option.", content: ["He _______ short hair."], options: ["has", "have", "is"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-rose-500 to-pink-600", imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-12", title: "Challenge 3: Fill the blank (3/3)", description: "Select the correct option.", content: ["He _______ playing video games."], options: ["like", "likes", "liking"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-13", title: "Emojis Locos 🤪", description: "Guess the concept!", type: "emoji-game", content: ["📱 ➕ 🎧 ➕ 💻"], options: ["Healthy snacks", "Cool gadgets", "School subjects"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600", imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production & Quiz",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje y consolidación.",
          slides: [
            { id: "slide-14", title: "Let's Talk!", description: "Answer the questions.", content: ["What is your favorite gadget?", "What snacks do you like?", "What is your favorite school subject?"], bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600", type: "spinning-wheel", wheelItems: [{label: "Age and Name", color: "#EF4444"}, {label: "Gadgets", color: "#3B82F6"}, {label: "Snacks", color: "#10B981"}, {label: "School subjects", color: "#F59E0B"}, {label: "Pets", color: "#8B5CF6"}], imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-15", title: "Fun Quiz! (1/3)", description: "Vocabulary check.", content: ["Which of these is a school subject?"], options: ["Dog", "Math", "Pizza"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600", imageUrl: "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-16", title: "Fun Quiz! (2/3)", description: "Vocabulary check.", content: ["Which of these is a body part?"], options: ["Shoulder", "Smartphone", "Science"], correctOptionIndex: 0, bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600", imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-17", title: "Fun Quiz! (3/3)", description: "Vocabulary check.", content: ["Which of these is a pet?"], options: ["Tablet", "Hamster", "Chips"], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-teal-500 to-emerald-600", imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-18", title: "Roleplay: Interview", description: "Interview your partner.", content: ["Student A: Ask about name, age, favorite colors, and pets.", "Student B: Answer the questions. Then swap!"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-600", imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Level 0 Complete! 🏆", description: "Congratulations!", content: ["You finished Level 0!", "You are awesome!"], bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500", imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-20", title: "Homework 📝", description: "End of level project.", type: "homework", content: ["Create a poster about yourself.", "Include your age, favorite hobbies, snacks, and pets.", "Use colors!"], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
            { id: "slide-21", title: "Video Homework 📹", description: "Listen and learn.", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch the final review video.", "Sing along and practice everything you learned!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-1",
    title: "Level 1 - Basic 1 (Teen Explorer)",
    duration: "2 meses",
    objective: "Ampliar vocabulario con familia, emociones, ropa, clima y tecnología.",
    mcfrEquivalent: "Pre-A1+",
    classes: [
      {
        id: "c-teens-basic-1-1",
        title: "Clase 1: Family Tree & Feelings",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Family Tree & Feelings.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Family & Pets.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Family Tree & Feelings.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Family & Pets", description: "Introduction to Family & Pets.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Brother, Sister, Dog, Cat", content: ["Brother", " Sister", " Dog", " Cat"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["This is my brother.", "I have a cute dog."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: This is my brother."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-2",
        title: "Clase 2: Fast Food & Healthy Choices",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Fast Food & Healthy Choices.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Food & Cooking.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Fast Food & Healthy Choices.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Food & Cooking", description: "Introduction to Food & Cooking.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Food, Cook, Eat, Delicious", content: ["Food", " Cook", " Eat", " Delicious"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I can cook pasta.", "This burger is delicious."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I can cook pasta."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-3",
        title: "Clase 3: Fashion, Clothes & Weather",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Fashion, Clothes & Weather.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Clothes & Style.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Fashion, Clothes & Weather.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Clothes & Style", description: "Introduction to Clothes & Style.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Hoodie, Shoes, Cool, Wear", content: ["Hoodie", " Shoes", " Cool", " Wear"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I am wearing a cool hoodie.", "Her shoes are new."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I am wearing a cool hoodie."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-4",
        title: "Clase 4: Nature, Parks & Outdoors",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Nature, Parks & Outdoors.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Nature & Environment.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Nature, Parks & Outdoors.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Nature & Environment", description: "Introduction to Nature & Environment.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Nature, Tree, Recycle, Earth", content: ["Nature", " Tree", " Recycle", " Earth"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["The forest is beautiful.", "We should recycle."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: The forest is beautiful."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-5",
        title: "Clase 5: Planes de fin de semana con will y going to",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Planes de fin de semana con will y going to.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Planes de fin de semana con will y going to.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-6",
        title: "Clase 6: Invitaciones, aceptar y rechazar planes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Invitaciones, aceptar y rechazar planes.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Invitaciones, aceptar y rechazar planes.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-7",
        title: "Clase 7: Compras, precios y ropa",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Compras, precios y ropa.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Compras, precios y ropa.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-8",
        title: "Clase 8: Comida, snacks y pedidos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Comida, snacks y pedidos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Snacks & Drinks.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Comida, snacks y pedidos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Snacks & Drinks", description: "Introduction to Snacks & Drinks.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Snack, Drink, Water, Chips", content: ["Snack", " Drink", " Water", " Chips"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I like chips and soda.", "Can I have some water?"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I like chips and soda."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-9",
        title: "Clase 9: Tecnología, aplicaciones y redes sociales",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Tecnología, aplicaciones y redes sociales.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Tecnología, aplicaciones y redes sociales.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-1-10",
        title: "Clase 10: Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-2",
    title: "Level 2 - Basic 2 (Teen Adventurer)",
    duration: "2 meses",
    objective: "Describir habilidades, reglas escolares, deportes, ciudad y entretenimiento.",
    mcfrEquivalent: "A1",
    classes: [
      {
        id: "c-teens-basic-2-1",
        title: "Clase 1: Animals & Habitats",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Animals & Habitats.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Animals & Habitats.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-2",
        title: "Clase 2: My Room & Dream House",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Room & Dream House.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Room & Dream House.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-3",
        title: "Clase 3: Vehicles, Transport & City",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Vehicles, Transport & City.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Vehicles, Transport & City.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-4",
        title: "Clase 4: Dream Jobs & Professions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Dream Jobs & Professions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Dream Jobs & Professions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-5",
        title: "Clase 5: Habilidades con can / can’t",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Habilidades con can / can’t.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Habilidades con can / can’t.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-6",
        title: "Clase 6: Reglas escolares con must, have to, should",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Reglas escolares con must, have to, should.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Reglas escolares con must, have to, should.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-7",
        title: "Clase 7: Deportes, salud y hábitos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Deportes, salud y hábitos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Deportes, salud y hábitos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-8",
        title: "Clase 8: Ciudad, transporte y lugares para salir",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Ciudad, transporte y lugares para salir.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Ciudad, transporte y lugares para salir.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-9",
        title: "Clase 9: Describir series, películas, juegos y música",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Describir series, películas, juegos y música.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Describir series, películas, juegos y música.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-2-10",
        title: "Clase 10: Conversación actual, rutinas y Repaso oral por retos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Conversación actual, rutinas y Repaso oral por retos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Conversación actual, rutinas y Repaso oral por retos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-3",
    title: "Level 3 - Basic 3 (Teen Champion)",
    duration: "2 meses",
    objective: "Hablar del pasado, recuerdos, vacaciones, biografías y anécdotas.",
    mcfrEquivalent: "A1+",
    classes: [
      {
        id: "c-teens-basic-3-1",
        title: "Clase 1: Daily Routine & Time",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Daily Routine & Time.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Daily Routine & Time.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-2",
        title: "Clase 2: Sports, Competitions & Teams",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Sports, Competitions & Teams.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Sports & Hobbies.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Sports, Competitions & Teams.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Sports & Hobbies", description: "Introduction to Sports & Hobbies.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Soccer, Draw, Play, Hobby", content: ["Soccer", " Draw", " Play", " Hobby"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I play soccer every day.", "She likes to draw."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I play soccer every day."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-3",
        title: "Clase 3: Holidays, Festivals & Traditions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Holidays, Festivals & Traditions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Holidays, Festivals & Traditions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-4",
        title: "Clase 4: Space, Science & Future",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Space, Science & Future.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Future Dreams.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Space, Science & Future.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Future Dreams", description: "Introduction to Future Dreams.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Future, Dream, Will, Want", content: ["Future", " Dream", " Will", " Want"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I will be a scientist."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-5",
        title: "Clase 5: Was/were y recuerdos de infancia",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Was/were y recuerdos de infancia.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Was/were y recuerdos de infancia.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-6",
        title: "Clase 6: Vacaciones, viajes y anécdotas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Vacaciones, viajes y anécdotas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Vacaciones, viajes y anécdotas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-7",
        title: "Clase 7: Biografías de artistas, deportistas o creadores",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Biografías de artistas, deportistas o creadores.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Biografías de artistas, deportistas o creadores.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-8",
        title: "Clase 8: Conectores para contar historias",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Conectores para contar historias.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Conectores para contar historias.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-9",
        title: "Clase 9: Problemas cotidianos y cómo explicarlos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Problemas cotidianos y cómo explicarlos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Problemas cotidianos y cómo explicarlos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-3-10",
        title: "Clase 10: Verbos irregulares y terminaciones -ed. Proyecto en video",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Verbos irregulares y terminaciones -ed. Proyecto en video.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Verbos irregulares y terminaciones -ed. Proyecto en video.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-basic-4",
    title: "Level 4 - Basic 4 (Teen Pro)",
    duration: "2 meses",
    objective: "Expresar opiniones, dar consejos, hablar de condiciones y mensajería.",
    mcfrEquivalent: "A2",
    classes: [
      {
        id: "c-teens-basic-4-1",
        title: "Clase 1: My Opinions & Perspectives",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Opinions & Perspectives.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Opinions & Perspectives.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-2",
        title: "Clase 2: Giving Good Advice",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Giving Good Advice.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Giving Good Advice.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-3",
        title: "Clase 3: Conditions & Outcomes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Conditions & Outcomes.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Conditions & Outcomes.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-4",
        title: "Clase 4: Messaging & Online Chats",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Messaging & Online Chats.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Messaging & Online Chats.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-5",
        title: "Clase 5: Primer condicional para planes y consecuencias",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Primer condicional para planes y consecuencias.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Primer condicional para planes y consecuencias.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-6",
        title: "Clase 6: Comparativos y superlativos: apps, celulares, películas y deportes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Comparativos y superlativos: apps, celulares, películas y deportes.",
        sections: [
          {
            id: "s1",
            title: "1. Warm-up",
            duration: "10 minutos",
            objective: "Romper el hielo y activar conocimientos previos.",
            slides: [
              { id: "Diapositiva 1", title: "Welcome!", content: ["Welcome to class!", "Today we are going to learn about Comparatives and Superlatives.", "Let's talk about apps, phones, movies and sports!"], imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
              { id: "Diapositiva 2", title: "Warm-up Activity", content: ["What is your favorite app on your phone?", "Is it better than Instagram or TikTok?", "Why do you like it?"], imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
              { id: "Diapositiva 3", title: "Objectives", content: ["- Learn to compare things using Comparatives.", "- Learn to say what is 'the most' or 'the best' using Superlatives.", "- Talk about technology, entertainment, and sports.", "- Have fun comparing our favorite things!"], imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
            ],
            action: "Participar en la discusión."
          },
          {
            id: "s2",
            title: "2. Grammar / Vocabulary",
            duration: "20 minutos",
            objective: "Presentar el tema principal.",
            slides: [
              { id: "Diapositiva 4", title: "Comparatives: Short Adjectives", type: "normal", content: ["To compare two things, we use comparative adjectives.", "For short adjectives (1 syllable), add '-er' + 'than'.", "Fast -> Faster than", "Old -> Older than", "My phone is older than yours."], imageUrl: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
              { id: "Diapositiva 5", title: "Comparatives: Long Adjectives", type: "normal", content: ["For long adjectives (2+ syllables), use 'more' + adjective + 'than'.", "Interesting -> More interesting than", "Expensive -> More expensive than", "This app is more expensive than that one."], imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
              { id: "Diapositiva 6", title: "Superlatives: Short Adjectives", type: "normal", content: ["To say something is the #1 in a group, use superlative adjectives.", "For short adjectives, add 'the' + adjective + '-est'.", "Fast -> The fastest", "Old -> The oldest", "He is the fastest player in the team."], imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
              { id: "Diapositiva 7", title: "Superlatives: Long Adjectives", type: "normal", content: ["For long adjectives, use 'the most' + adjective.", "Interesting -> The most interesting", "Popular -> The most popular", "TikTok is the most popular app in my class."], imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
              { id: "Diapositiva 8", title: "Irregular Adjectives", type: "normal", content: ["Some adjectives completely change their form!", "Good -> Better than -> The best", "Bad -> Worse than -> The worst", "Far -> Further than -> The furthest", "Messi is the best player in the world!"], imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-green-500 to-lime-500" }
            ],
            action: "Tomar notas y repetir pronunciación."
          },
          {
            id: "s3",
            title: "3. Practice & Concept Checking",
            duration: "15 minutos",
            objective: "Practicar de forma controlada.",
            slides: [
              { id: "Diapositiva 9", title: "Context", content: ["Mike: 'Hey! Did you see the new Avengers movie?'", "Sarah: 'Yes! It was better than the last one.'", "Mike: 'I agree. But I think Batman is the best superhero ever.'", "Sarah: 'No way! Iron Man\\'s suit is more expensive and cooler!'"], imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
              { id: "Diapositiva 10", title: "Complete the sentence (1/3)", content: ["My new laptop is _______ than my old one."], options: ["fastest", "faster", "more fast"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
              { id: "Diapositiva 11", title: "Complete the sentence (2/3)", content: ["I think soccer is the _______ sport in the world."], options: ["most popular", "more popular", "popularest"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
              { id: "Diapositiva 12", title: "Complete the sentence (3/3)", content: ["That was the _______ movie I have ever seen!"], options: ["bad", "worse", "worst"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
              { id: "Diapositiva 13", title: "Emojis Locos 🤪", type: "emoji-game", content: ["🥇 ➕ ⚽ ➕ 🏃‍♂️"], options: ["He is the worst soccer player.", "He is the best soccer player.", "Soccer is more popular."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1580236021644-8d4822bc6d88?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "Diapositiva 14", title: "Let's Talk!", content: ["Compare your phone with your classmate's phone.", "Which one is bigger?", "Which one is older?", "Which one has the best camera?"], imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
              { id: "Diapositiva 15", title: "Fun Quiz! 1/3", content: ["Which app is _______, WhatsApp or Telegram?"], options: ["better", "best", "gooder"], correctOptionIndex: 0, imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
              { id: "Diapositiva 16", title: "Fun Quiz! 2/3", content: ["Usain Bolt is the _______ man in history."], options: ["faster", "fastest", "most fast"], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-rose-500 to-red-600" },
              { id: "Diapositiva 17", title: "Fun Quiz! 3/3", content: ["I think Science Fiction movies are _______ than Romantic movies."], options: ["most interesting", "interesting", "more interesting"], correctOptionIndex: 2, imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-red-500 to-orange-600" },
              { id: "Diapositiva 18", title: "Roleplay/Share", content: ["With a partner, make a list of the top 3 best movies you both agree on.", "Then, list the top 3 worst apps.", "Share your lists with the class and explain why using superlatives!"], imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-orange-500 to-yellow-600" }
            ],
            action: "Conversar libremente."
          },
          {
            id: "s5",
            title: "5. Wrap-up & Homework",
            duration: "5 minutos",
            objective: "Cierre de clase.",
            slides: [
              { id: "Diapositiva 19", title: "Class Complete!", content: ["Excellent job today!", "You are the best students!", "Keep practicing comparing things around you."], imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
              { id: "Diapositiva 20", title: "Homework", type: "homework", content: ["Write 5 sentences using comparatives comparing two sports.", "Write 5 sentences using superlatives talking about your family (e.g. who is the tallest).", "Bring them to the next class!"], imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
              { id: "Diapositiva 21", title: "Video Homework 📹", type: "video", content: ["Watch this video about comparing smartphones.", "Write down 3 comparatives and 2 superlatives you hear in the video.", "Be ready to share them next class!"], videoUrl: "https://www.youtube.com/embed/ZqRhy29Q2wE", imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
            ],
            action: "Anotar la tarea."
          }
        ]
      },
      {
        id: "c-teens-basic-4-7",
        title: "Clase 7: Too / enough para problemas y soluciones",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Too / enough para problemas y soluciones.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Too / enough para problemas y soluciones.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-8",
        title: "Clase 8: Consejos entre amigos con should",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Consejos entre amigos con should.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Consejos entre amigos con should.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-9",
        title: "Clase 9: Mensajes, emails y chats informales/formales",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Mensajes, emails y chats informales/formales.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Mensajes, emails y chats informales/formales.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-basic-4-10",
        title: "Clase 10: Atención al cliente juvenil y evaluación de transición",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Atención al cliente juvenil y evaluación de transición.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Atención al cliente juvenil y evaluación de transición.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-inter",
    title: "Level 5, 6, 7 - Intermediate (Teen Sharks)",
    duration: "2 meses",
    objective: "Experiencias personales, phrasal verbs, condicionales y debates juveniles.",
    mcfrEquivalent: "B1",
    classes: [
      {
        id: "c-teens-inter-1",
        title: "Clase 1: My Life Experiences",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of My Life Experiences.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of My Life Experiences.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-2",
        title: "Clase 2: Teen Slang & Phrasal Verbs",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Teen Slang & Phrasal Verbs.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Teen Slang & Phrasal Verbs.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-3",
        title: "Clase 3: Possibilities & Deductions",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Possibilities & Deductions.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Possibilities & Deductions.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-4",
        title: "Clase 4: If I ruled the world (Conditionals)",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of If I ruled the world (Conditionals).",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of If I ruled the world (Conditionals).", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-5",
        title: "Clase 5: Agreeing & Disagreeing",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Agreeing & Disagreeing.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Agreeing & Disagreeing.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-6",
        title: "Clase 6: Podcast & Debate Basics",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Podcast & Debate Basics.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Podcast & Debate Basics.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-7",
        title: "Clase 7: Present Perfect con experiencias personales y Present Perfect Continuous",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Present Perfect con experiencias personales y Present Perfect Continuous.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Present Perfect con experiencias personales y Present Perfect Continuous.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-8",
        title: "Clase 8: Phrasal verbs frecuentes en conversaciones adolescentes",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Phrasal verbs frecuentes en conversaciones adolescentes.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Phrasal verbs frecuentes en conversaciones adolescentes.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-9",
        title: "Clase 9: Modales de posibilidad y deducción",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Modales de posibilidad y deducción.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Modales de posibilidad y deducción.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-10",
        title: "Clase 10: Primer y segundo condicional",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Primer y segundo condicional.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Primer y segundo condicional.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-11",
        title: "Clase 11: Opiniones, acuerdos y desacuerdos respetuosos",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Opiniones, acuerdos y desacuerdos respetuosos.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Opiniones, acuerdos y desacuerdos respetuosos.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-inter-12",
        title: "Clase 12: Proyecto podcast/debate y Simulación entrevista beca/empleo",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Proyecto podcast/debate y Simulación entrevista beca/empleo.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Proyecto podcast/debate y Simulación entrevista beca/empleo.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-advanced",
    title: "Level 8 - Advanced (Teen Leaders)",
    duration: "2 meses",
    objective: "Reported speech, relative clauses, voz pasiva y entrevistas.",
    mcfrEquivalent: "B2",
    classes: [
      {
        id: "c-teens-advanced-1",
        title: "Clase 1: Gossip & News (Reported Speech)",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Gossip & News (Reported Speech).",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Gossip & News (Reported Speech).", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-2",
        title: "Clase 2: Describing the Details (Relative Clauses)",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Describing the Details (Relative Clauses).",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Describing the Details (Relative Clauses).", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-3",
        title: "Clase 3: Tech & Passive Voice",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Tech & Passive Voice.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Gadgets & Tech.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Tech & Passive Voice.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Gadgets & Tech", description: "Introduction to Gadgets & Tech.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Phone, Tablet, Screen, Game", content: ["Phone", " Tablet", " Screen", " Game"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I love my new phone.", "He is playing a video game."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I love my new phone."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-4",
        title: "Clase 4: Real Idioms in Context",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Real Idioms in Context.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Real Idioms in Context.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-5",
        title: "Clase 5: Reported speech en chismes, noticias y conversaciones",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Reported speech en chismes, noticias y conversaciones.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Reported speech en chismes, noticias y conversaciones.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-6",
        title: "Clase 6: Relative clauses y descripción detallada de personas/cosas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Relative clauses y descripción detallada de personas/cosas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Relative clauses y descripción detallada de personas/cosas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-7",
        title: "Clase 7: Voz pasiva aplicada a noticias y tecnología",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Voz pasiva aplicada a noticias y tecnología.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Voz pasiva aplicada a noticias y tecnología.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-8",
        title: "Clase 8: Phrasal verbs e idioms de uso real",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Phrasal verbs e idioms de uso real.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Phrasal verbs e idioms de uso real.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-9",
        title: "Clase 9: Debates: IA, redes sociales, medioambiente y educación",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Debates: IA, redes sociales, medioambiente y educación.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Debates: IA, redes sociales, medioambiente y educación.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-advanced-10",
        title: "Clase 10: Entrevistas (trabajo/voluntariado) y resolución de problemas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Entrevistas (trabajo/voluntariado) y resolución de problemas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Entrevistas (trabajo/voluntariado) y resolución de problemas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-elite",
    title: "Level 9 - Advanced Elite",
    duration: "2 meses",
    objective: "Estructuras enfáticas, lenguaje diplomático, ensayos y proyectos.",
    mcfrEquivalent: "C1",
    classes: [
      {
        id: "c-teens-elite-1",
        title: "Clase 1: Future Goals & Plans",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Future Goals & Plans.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Weekend Plans.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Future Goals & Plans.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Weekend Plans", description: "Introduction to Weekend Plans.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Weekend, Plan, Go, Free", content: ["Weekend", " Plan", " Go", " Free"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I am going to the cinema.", "Are you free on Saturday?"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I am going to the cinema."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-2",
        title: "Clase 2: Past Decisions & Mixed Conditionals",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Past Decisions & Mixed Conditionals.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Past Memories.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Past Decisions & Mixed Conditionals.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Past Memories", description: "Introduction to Past Memories.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Past, Memory, Was, Went", content: ["Past", " Memory", " Was", " Went"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["When I was young...", "I went to a concert last year."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: When I was young..."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-3",
        title: "Clase 3: Diplomacy & Nuance",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Diplomacy & Nuance.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Diplomacy & Nuance.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-4",
        title: "Clase 4: Academic Writing & Essays",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Academic Writing & Essays.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Academic Writing & Essays.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-5",
        title: "Clase 5: Leadership & Teamwork",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Leadership & Teamwork.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Leadership & Teamwork.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-6",
        title: "Clase 6: Future Continuous, Future Perfect y planificación de metas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Future Continuous, Future Perfect y planificación de metas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Future Dreams.", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Future Continuous, Future Perfect y planificación de metas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Future Dreams", description: "Introduction to Future Dreams.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Future, Dream, Will, Want", content: ["Future", " Dream", " Will", " Want"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["I will be a scientist.", "I want to travel the world."], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: I will be a scientist."], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-7",
        title: "Clase 7: Condicionales mixtos y decisiones pasadas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Condicionales mixtos y decisiones pasadas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Condicionales mixtos y decisiones pasadas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-8",
        title: "Clase 8: Lenguaje diplomático, cleft sentences e inversiones",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Lenguaje diplomático, cleft sentences e inversiones.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Lenguaje diplomático, cleft sentences e inversiones.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-9",
        title: "Clase 9: Ensayos, opiniones y presentaciones académicas",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Ensayos, opiniones y presentaciones académicas.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Ensayos, opiniones y presentaciones académicas.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-10",
        title: "Clase 10: Reuniones, liderazgo y trabajo en equipo",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Reuniones, liderazgo y trabajo en equipo.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Reuniones, liderazgo y trabajo en equipo.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-elite-11",
        title: "Clase 11: Proyecto final: pitch de emprendimiento o conferencia",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Proyecto final: pitch de emprendimiento o conferencia.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1511632765486-a01c80cb8fa6?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Proyecto final: pitch de emprendimiento o conferencia.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  },
  {
    id: "teens-masters",
    title: "Level 10 - Masters of Fluency",
    duration: "2 meses",
    objective: "Debate competitivo, análisis cultural, inglés académico y global.",
    mcfrEquivalent: "C2",
    classes: [
      {
        id: "c-teens-masters-1",
        title: "Clase 1: Critical Thinking & Debate",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Critical Thinking & Debate.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Critical Thinking & Debate.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-2",
        title: "Clase 2: Pop Culture & Media Analysis",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Pop Culture & Media Analysis.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Pop Culture & Media Analysis.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-3",
        title: "Clase 3: University & Academic English",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of University & Academic English.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of University & Academic English.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-4",
        title: "Clase 4: Content Creation & TED Talks",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Content Creation & TED Talks.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Content Creation & TED Talks.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-5",
        title: "Clase 5: Debate competitivo y pensamiento crítico",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Debate competitivo y pensamiento crítico.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Debate competitivo y pensamiento crítico.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-6",
        title: "Clase 6: Análisis de películas, música, noticias y cultura digital",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Análisis de películas, música, noticias y cultura digital.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Análisis de películas, música, noticias y cultura digital.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-7",
        title: "Clase 7: Inglés académico para universidad e intercambios",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Inglés académico para universidad e intercambios.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Inglés académico para universidad e intercambios.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-8",
        title: "Clase 8: Creación de podcast, videoensayo o presentación TED",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Creación de podcast, videoensayo o presentación TED.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Creación de podcast, videoensayo o presentación TED.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-9",
        title: "Clase 9: Temas globales: tecnología, ética, clima y sociedad",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Temas globales: tecnología, ética, clima y sociedad.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Temas globales: tecnología, ética, clima y sociedad.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      },
      {
        id: "c-teens-masters-10",
        title: "Clase 10: Preparación de entrevistas C1 y Conversation Club",
        description: "A fun and interactive class for teens.",
        duration: "60 mins",
        objective: "Master the topic of Preparación de entrevistas C1 y Conversation Club.",
        sections: [
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "Diapositiva 1", title: "Welcome!", description: "Hello everyone! Let's get started with Important Topic.", imageUrl: "https://images.unsplash.com/photo-1493863487042-32a2491b4fa0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "Diapositiva 2", title: "Warm-up Activity", description: "Let's discuss: What do you know about today's topic?", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600" },
            { id: "Diapositiva 3", title: "Objectives", description: "Master the topic of Preparación de entrevistas C1 y Conversation Club.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" }
          ],
          action: "Participar en la discusión."
        },
        {
          id: "s2",
          title: "2. Grammar / Vocabulary",
          duration: "20 minutos",
          objective: "Presentar el tema principal.",
          slides: [
            { id: "Diapositiva 4", title: "Important Topic", description: "Introduction to Important Topic.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500" },
            { id: "Diapositiva 5", title: "Examples in Context", description: "Let's read these phrases.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-cyan-500 to-teal-500" },
            { id: "Diapositiva 6", title: "Vocabulary Words", description: "Word 1, Word 2, Word 3", content: ["Word 1", " Word 2", " Word 3"], bgColor: "bg-gradient-to-br from-teal-500 to-emerald-500" },
            { id: "Diapositiva 7", title: "Grammar Structure", description: "How to form sentences.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-emerald-500 to-green-500" },
            { id: "Diapositiva 8", title: "Practice Sentences", description: "Repeat after the teacher.", content: ["Example A", "Example B"], bgColor: "bg-gradient-to-br from-green-500 to-lime-500" },
            { id: "Diapositiva 9", title: "Pronunciation", description: "Listen carefully.", content: ["Repeat: Example A"], bgColor: "bg-gradient-to-br from-lime-500 to-yellow-500" },
            { id: "Diapositiva 10", title: "Quick Check", description: "Do you have any questions?", bgColor: "bg-gradient-to-br from-yellow-500 to-amber-500" }
          ],
          action: "Tomar notas y repetir pronunciación."
        },
        {
          id: "s3",
          title: "3. Practice",
          duration: "15 minutos",
          objective: "Practicar de forma controlada.",
          slides: [
            { id: "Diapositiva 11", title: "Exercise 1", description: "Fill in the blanks.", type: "grammar", bgColor: "bg-gradient-to-br from-orange-400 to-red-500" },
            { id: "Diapositiva 12", title: "Exercise 2", description: "Match the columns.", type: "matching-game", bgColor: "bg-gradient-to-br from-red-500 to-rose-600" },
            { id: "Diapositiva 13", title: "Exercise 3", description: "Choose the correct option.", type: "grammar", bgColor: "bg-gradient-to-br from-rose-500 to-pink-600" },
            { id: "Diapositiva 14", title: "Exercise 4", description: "Correct the mistakes.", type: "grammar", bgColor: "bg-gradient-to-br from-pink-500 to-fuchsia-600" },
            { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" }
          ],
          action: "Completar los ejercicios."
        },
        {
          id: "s4",
          title: "4. Production",
          duration: "15 minutos",
          objective: "Uso libre del lenguaje.",
          slides: [
            { id: "Diapositiva 16", title: "Speaking Time", description: "Talk with your partner.", type: "speaking", bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600" },
            { id: "Diapositiva 17", title: "Roleplay", description: "Act out a situation.", type: "roleplay", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
            { id: "Diapositiva 18", title: "Share", description: "Share with the class.", bgColor: "bg-gradient-to-br from-cyan-500 to-teal-600" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "Diapositiva 19", title: "Homework", description: "Complete the exercises on the platform.", type: "homework", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900" }
          ],
          action: "Anotar la tarea."
        }
        ]
      }
    ],
    oralEvaluation: [],
    virtualEvaluation: []
  }
];
