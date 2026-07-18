import { CurriculumLevel } from '../types';
import imgTeenAssessment from '../assets/images/teens_assessment_welcome_1782228127925.jpg';
import imgTeenGadget from '../assets/images/teens_ask_gadget_1783000210943.jpg';
import imgTeenApps from '../assets/images/teens_apps_1782770528421.jpg';
import imgTeenSports from '../assets/images/teens_actions_sports_1783000515177.jpg';
import imgTeenBirthday from '../assets/images/teens_birthday_party_1782771276209.jpg';
import imgTeenQuiz from '../assets/images/teens_c5_quiz1_1783004350357.jpg';

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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Hello", color: "#EF4444", prompt: "How do you greet a new person?", es: "Como saludas a alguien nuevo?" }, { label: "Today", color: "#F59E0B", prompt: "How are you feeling today?", es: "Como te sientes hoy?" }, { label: "Name", color: "#10B981", prompt: "What name do you like?", es: "Que nombre te gusta?" }, { label: "Goodbye", color: "#3B82F6", prompt: "How do you say goodbye to a friend?", es: "Como te despides de un amigo?" }, { label: "Formal", color: "#8B5CF6", prompt: "When do you say hello formally?", es: "Cuando saludas formalmente?" }, { label: "Friend", color: "#EC4899", prompt: "How do you greet your best friend?", es: "Como saludas a tu mejor amigo?" }], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Greeting people: decode the emoji story", type: "emoji-game", imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800", content: ["👋 + 😄 + 🤝"], options: ["I am hungry.", "Hi! Nice to meet you.", "See you tomorrow."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and practice with a partner!"], wheelItems: [{ label: "Say Hello formally", color: "#EF4444" }, { label: "Say Hi to a bro", color: "#3B82F6" }, { label: "Ask someone's name", color: "#10B981" }, { label: "Ask 'How are you?'", color: "#F59E0B" }, { label: "Say Goodbye to a friend", color: "#8B5CF6" }], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Today", color: "#EF4444", prompt: "What day is today?", es: "Que dia es hoy?" }, { label: "Month", color: "#F59E0B", prompt: "What month is your favorite?", es: "Cual es tu mes favorito?" }, { label: "Birthday", color: "#10B981", prompt: "When is your birthday?", es: "Cuando cumples anos?" }, { label: "Weekend", color: "#3B82F6", prompt: "What do you do on weekends?", es: "Que haces fines de semana?" }, { label: "Year", color: "#8B5CF6", prompt: "What year is it now?", es: "Que ano es ahora?" }, { label: "Holiday", color: "#EC4899", prompt: "What date do you like?", es: "Que fecha te gusta?" }], bgColor: "bg-gradient-to-br from-fuchsia-500 to-pink-600" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Dates and birthdays: decode the emoji story", type: "emoji-game", content: ["📅 + 🎂 + ⭐"], options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "How old are you?", color: "#EF4444" }, { label: "When is your birthday?", color: "#3B82F6" }, { label: "How old is your mom?", color: "#10B981" }, { label: "How old is your best friend?", color: "#F59E0B" }, { label: "What is your favorite number?", color: "#8B5CF6" }], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", imageUrl: "/images/teens_simon_says.jpg?v=3", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
                  wheelItems: [{ label: "Body", color: "#EF4444", prompt: "What body part do you use a lot?", es: "Que parte del cuerpo usas mucho?" }, { label: "Action", color: "#F59E0B", prompt: "What action can you do now?", es: "Que accion puedes hacer ahora?" }, { label: "Jump", color: "#10B981", prompt: "Can you jump high?", es: "Puedes saltar alto?" }, { label: "Sport", color: "#3B82F6", prompt: "What sport uses your legs?", es: "Que deporte usa tus piernas?" }, { label: "Hands", color: "#8B5CF6", prompt: "What can you do with your hands?", es: "Que puedes hacer con tus manos?" }, { label: "Move", color: "#EC4899", prompt: "Do you prefer running or walking?", es: "Prefieres correr o caminar?" }]
            },
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
              { id: "slide-13", title: "Emoji Mission", description: "Body and actions: decode the emoji story", type: "emoji-game", content: ["🏃 + 🦘 + 👍"], options: ["My birthday is today.", "I can run and jump.", "The office is open."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Can you swim?", color: "#EF4444" }, { label: "Can you dance?", color: "#3B82F6" }, { label: "Can you run fast?", color: "#10B981" }, { label: "Can you jump high?", color: "#F59E0B" }, { label: "Can you touch your toes?", color: "#8B5CF6" }], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Technology: decode the emoji story", type: "emoji-game", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", content: ["📱 + 💻 + 🎮"], options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Do you have a tablet?", color: "#EF4444" }, { label: "Do you have headphones?", color: "#3B82F6" }, { label: "Do you have a laptop?", color: "#10B981" }, { label: "Do you have a console?", color: "#F59E0B" }, { label: "Is your phone new?", color: "#8B5CF6" }], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Food", color: "#EF4444", prompt: "What food do you like?", es: "Que comida te gusta?" }, { label: "Drink", color: "#F59E0B", prompt: "What do you drink every day?", es: "Que tomas cada dia?" }, { label: "Snack", color: "#10B981", prompt: "What is your favorite snack?", es: "Cual es tu snack favorito?" }, { label: "Order", color: "#3B82F6", prompt: "What do you order at a restaurant?", es: "Que pides en un restaurante?" }, { label: "Taste", color: "#8B5CF6", prompt: "Do you prefer sweet or salty food?", es: "Prefieres dulce o salado?" }, { label: "Hungry", color: "#EC4899", prompt: "What do you eat when you are hungry?", es: "Que comes cuando tienes hambre?" }], bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Food and drinks: decode the emoji story", type: "emoji-game", imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", content: ["🍔 + 🍟 + 🥤"], options: ["I am from Canada.", "I want a burger and a drink.", "Open your book."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Do you like pizza?", color: "#EF4444" }, { label: "Do you like candy?", color: "#3B82F6" }, { label: "Do you like water?", color: "#10B981" }, { label: "Do you like spicy food?", color: "#F59E0B" }, { label: "What is your favorite food?", color: "#8B5CF6" }], bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Shape", color: "#EF4444", prompt: "What shape do you see?", es: "Que forma ves?" }, { label: "Find", color: "#F59E0B", prompt: "Where can you find a circle?", es: "Donde puedes encontrar un circulo?" }, { label: "Draw", color: "#10B981", prompt: "Can you draw a triangle?", es: "Puedes dibujar un triangulo?" }, { label: "Pattern", color: "#3B82F6", prompt: "Do you like stripes or dots?", es: "Te gustan rayas o puntos?" }, { label: "Color", color: "#8B5CF6", prompt: "What color is the shape?", es: "De que color es la forma?" }, { label: "Object", color: "#EC4899", prompt: "What object has this shape?", es: "Que objeto tiene esta forma?" }], imageUrl: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Shapes: decode the emoji story", type: "emoji-game", content: ["🔴 + ◻️ + 🎨"], options: ["I like chicken and fries.", "I see a red circle and a square.", "He can ride a bike."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "What are you wearing?", color: "#EF4444" }, { label: "Do you like stripes?", color: "#3B82F6" }, { label: "Do you like polka dots?", color: "#10B981" }, { label: "Find a square in the room!", color: "#F59E0B" }, { label: "Find a circle in the room!", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Subject", color: "#EF4444", prompt: "What subject do you like?", es: "Que materia te gusta?" }, { label: "English", color: "#F59E0B", prompt: "Why do you study English?", es: "Por que estudias ingles?" }, { label: "Bag", color: "#10B981", prompt: "What is in your school bag?", es: "Que hay en tu mochila?" }, { label: "Easy", color: "#3B82F6", prompt: "What class is easy for you?", es: "Que clase es facil para ti?" }, { label: "Hard", color: "#8B5CF6", prompt: "What class is hard for you?", es: "Que clase es dificil para ti?" }, { label: "Tool", color: "#EC4899", prompt: "Do you prefer pen or pencil?", es: "Prefieres lapiz o boligrafo?" }], imageUrl: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Classroom objects: decode the emoji story", type: "emoji-game", content: ["📖 + ✏️ + 🎒"], options: ["I want a burger.", "My pencil is in my bag.", "They are playing soccer."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Favorite subject?", color: "#EF4444" }, { label: "Do you like Math?", color: "#3B82F6" }, { label: "Is English easy or hard?", color: "#10B981" }, { label: "What's in your backpack?", color: "#F59E0B" }, { label: "Do you have a pen?", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Pet", color: "#EF4444", prompt: "Do you have a pet?", es: "Tienes mascota?" }, { label: "Animal", color: "#F59E0B", prompt: "What animal do you like?", es: "Que animal te gusta?" }, { label: "Cute", color: "#10B981", prompt: "What animal is cute?", es: "Que animal es tierno?" }, { label: "Wild", color: "#3B82F6", prompt: "What wild animal do you know?", es: "Que animal salvaje conoces?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal is fast?", es: "Que animal es rapido?" }, { label: "Home", color: "#EC4899", prompt: "What animal can live at home?", es: "Que animal puede vivir en casa?" }], imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Animals and pets: decode the emoji story", type: "emoji-game", content: ["🐶 + 🐱 + 🦜"], options: ["I wake up at seven.", "I have three pets.", "This email is formal."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Favorite animal?", color: "#EF4444" }, { label: "Do you have a dog?", color: "#3B82F6" }, { label: "Do you like cats?", color: "#10B981" }, { label: "What animal is scary?", color: "#F59E0B" }, { label: "What animal is cute?", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/rXidsSt9Ss0", content: ["Watch this video about animals.", "Write down 2 new animals you learned!"], imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Lucky", color: "#EF4444", prompt: "What is your lucky number?", es: "Cual es tu numero de suerte?" }, { label: "Age", color: "#F59E0B", prompt: "How old is someone in your family?", es: "Que edad tiene alguien de tu familia?" }, { label: "Time", color: "#10B981", prompt: "What time do you wake up?", es: "A que hora despiertas?" }, { label: "Phone", color: "#3B82F6", prompt: "What numbers are easy for you?", es: "Que numeros son faciles para ti?" }, { label: "Count", color: "#8B5CF6", prompt: "How many people are in class?", es: "Cuantas personas hay en clase?" }, { label: "Price", color: "#EC4899", prompt: "What price feels expensive?", es: "Que precio parece caro?" }], imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Numbers, dates and time: decode the emoji story", type: "emoji-game", content: ["🎂 + 📅 + 🕒"], options: ["I like blue shoes.", "My birthday is at three.", "The dog is sleeping."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Favorite hobby?", color: "#EF4444" }, { label: "Do you like reading?", color: "#3B82F6" }, { label: "Do you play sports?", color: "#10B981" }, { label: "What is fun?", color: "#F59E0B" }, { label: "Do you watch movies?", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Family", color: "#EF4444", prompt: "Who lives in your home?", es: "Quien vive en tu casa?" }, { label: "Funny", color: "#F59E0B", prompt: "Who is funny in your family?", es: "Quien es divertido en tu familia?" }, { label: "Talk", color: "#10B981", prompt: "Who do you talk to every day?", es: "Con quien hablas cada dia?" }, { label: "Size", color: "#3B82F6", prompt: "Is your family big or small?", es: "Tu familia es grande o pequena?" }, { label: "Pet", color: "#8B5CF6", prompt: "Who has a pet at home?", es: "Quien tiene mascota en casa?" }, { label: "Friend", color: "#EC4899", prompt: "Who is your best friend?", es: "Quien es tu mejor amigo?" }], imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Family and home: decode the emoji story", type: "emoji-game", content: ["👪 + 🏠 + ❤️"], options: ["The bus is late.", "I love my family at home.", "I eat fries every day."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Do you have siblings?", color: "#EF4444" }, { label: "Who is your best friend?", color: "#3B82F6" }, { label: "Is your dad tall?", color: "#10B981" }, { label: "Are you funny?", color: "#F59E0B" }, { label: "Describe your mom!", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Today", color: "#EF4444", prompt: "What day is today?", es: "Que dia es hoy?" }, { label: "Month", color: "#F59E0B", prompt: "What month is your favorite?", es: "Cual es tu mes favorito?" }, { label: "Birthday", color: "#10B981", prompt: "When is your birthday?", es: "Cuando cumples anos?" }, { label: "Weekend", color: "#3B82F6", prompt: "What do you do on weekends?", es: "Que haces fines de semana?" }, { label: "Year", color: "#8B5CF6", prompt: "What year is it now?", es: "Que ano es ahora?" }, { label: "Holiday", color: "#EC4899", prompt: "What date do you like?", es: "Que fecha te gusta?" }], imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Dates and birthdays: decode the emoji story", type: "emoji-game", content: ["📅 + 🎂 + ⭐"], options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Spell your name", color: "#EF4444" }, { label: "What's your username?", color: "#3B82F6" }, { label: "Spell 'ENGLISH'", color: "#10B981" }, { label: "Are you on TikTok?", color: "#F59E0B" }, { label: "Spell your last name", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }], imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Technology: decode the emoji story", type: "emoji-game", content: ["📱 + 💻 + 🎮"], options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and present!"], wheelItems: [{ label: "Name and Age", color: "#EF4444" }, { label: "City and Grade", color: "#3B82F6" }, { label: "Likes and Dislikes", color: "#10B981" }, { label: "Favorite subject", color: "#F59E0B" }, { label: "Full intro (3 sentences)", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Clothes", color: "#EF4444", prompt: "What are you wearing today?", es: "Que llevas puesto hoy?" }, { label: "Shoes", color: "#F59E0B", prompt: "What color are your shoes?", es: "De que color son tus zapatos?" }, { label: "Style", color: "#10B981", prompt: "What style do you like?", es: "Que estilo te gusta?" }, { label: "Weather", color: "#3B82F6", prompt: "What do you wear when it rains?", es: "Que usas cuando llueve?" }, { label: "Shop", color: "#8B5CF6", prompt: "What clothes do you like buying?", es: "Que ropa te gusta comprar?" }, { label: "Describe", color: "#EC4899", prompt: "How would you describe your style?", es: "Como describirias tu estilo?" }], imageUrl: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Clothes: decode the emoji story", type: "emoji-game", content: ["👕 + 👖 + 👟"], options: ["I have three brothers.", "I am wearing jeans and sneakers.", "The train is late."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "What are you wearing?", color: "#EF4444" }, { label: "Describe your hair", color: "#3B82F6" }, { label: "What is your teacher wearing?", color: "#10B981" }, { label: "Do you wear glasses?", color: "#F59E0B" }, { label: "Describe your best friend", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Subject", color: "#EF4444", prompt: "What subject do you like?", es: "Que materia te gusta?" }, { label: "English", color: "#F59E0B", prompt: "Why do you study English?", es: "Por que estudias ingles?" }, { label: "Bag", color: "#10B981", prompt: "What is in your school bag?", es: "Que hay en tu mochila?" }, { label: "Easy", color: "#3B82F6", prompt: "What class is easy for you?", es: "Que clase es facil para ti?" }, { label: "Hard", color: "#8B5CF6", prompt: "What class is hard for you?", es: "Que clase es dificil para ti?" }, { label: "Tool", color: "#EC4899", prompt: "Do you prefer pen or pencil?", es: "Prefieres lapiz o boligrafo?" }], imageUrl: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Classroom objects: decode the emoji story", type: "emoji-game", content: ["📖 + ✏️ + 🎒"], options: ["I want a burger.", "My pencil is in my bag.", "They are playing soccer."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "Where is your pen?", color: "#EF4444" }, { label: "Where is your backpack?", color: "#3B82F6" }, { label: "Favorite class?", color: "#10B981" }, { label: "What's on your desk?", color: "#F59E0B" }, { label: "Do you like Math?", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", type: "spinning-wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], wheelItems: [{ label: "Today", color: "#EF4444", prompt: "What day is today?", es: "Que dia es hoy?" }, { label: "Month", color: "#F59E0B", prompt: "What month is your favorite?", es: "Cual es tu mes favorito?" }, { label: "Birthday", color: "#10B981", prompt: "When is your birthday?", es: "Cuando cumples anos?" }, { label: "Weekend", color: "#3B82F6", prompt: "What do you do on weekends?", es: "Que haces fines de semana?" }, { label: "Year", color: "#8B5CF6", prompt: "What year is it now?", es: "Que ano es ahora?" }, { label: "Holiday", color: "#EC4899", prompt: "What date do you like?", es: "Que fecha te gusta?" }], imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500" },
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
              { id: "slide-13", title: "Emoji Mission", description: "Dates and birthdays: decode the emoji story", type: "emoji-game", content: ["📅 + 🎂 + ⭐"], options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje.",
            slides: [
              { id: "slide-14", title: "Let's Talk! 💬", description: "Production", type: "spinning-wheel", content: ["Spin the wheel and ask your partner!"], wheelItems: [{ label: "What time do you wake up?", color: "#EF4444" }, { label: "What time do you have lunch?", color: "#3B82F6" }, { label: "Do you take a shower in the morning?", color: "#10B981" }, { label: "What time do you go to bed?", color: "#F59E0B" }, { label: "Do you do homework at night?", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600" },
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
              { id: "slide-2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600", imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800", type: "spinning-wheel", wheelItems: [{ label: "Remember", color: "#EF4444", prompt: "What do you remember today?", es: "Que recuerdas hoy?" }, { label: "Easy", color: "#F59E0B", prompt: "What was easy for you?", es: "Que fue facil para ti?" }, { label: "Hard", color: "#10B981", prompt: "What was hard for you?", es: "Que fue dificil para ti?" }, { label: "Favorite", color: "#3B82F6", prompt: "What was your favorite part?", es: "Cual fue tu parte favorita?" }, { label: "Goal", color: "#8B5CF6", prompt: "What is your next goal?", es: "Cual es tu proxima meta?" }, { label: "Win", color: "#EC4899", prompt: "What is one win from class?", es: "Cual es un logro de clase?" }], content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."] },
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
              { id: "slide-13", title: "Emoji Mission", description: "Review: decode the emoji story", type: "emoji-game", content: ["🏆 + 📖 + ⭐"], options: ["The dog is hungry.", "I remember today?s lesson.", "I bought new shoes."], correctOptionIndex: 1, bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700", imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800" }
            ],
            action: "Completar los ejercicios."
          },
          {
            id: "s4",
            title: "4. Production & Quiz",
            duration: "15 minutos",
            objective: "Uso libre del lenguaje y consolidación.",
            slides: [
              { id: "slide-14", title: "Let's Talk!", description: "Answer the questions.", content: ["What is your favorite gadget?", "What snacks do you like?", "What is your favorite school subject?"], bgColor: "bg-gradient-to-br from-indigo-500 to-blue-600", type: "spinning-wheel", wheelItems: [{ label: "Age and Name", color: "#EF4444" }, { label: "Gadgets", color: "#3B82F6" }, { label: "Snacks", color: "#10B981" }, { label: "School subjects", color: "#F59E0B" }, { label: "Pets", color: "#8B5CF6" }], imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
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
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Introduce yourself with age, school, and favorite things."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Spell your name and ask a classmate to spell theirs."
      },
      {
        topic: "VOCABULARY",
        question: "Talk about three objects in your bag or classroom."
      },
      {
        topic: "INTERACTION",
        question: "Describe two friends using the verb be."
      },
      {
        topic: "FLUENCY",
        question: "Ask and answer basic personal information questions."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-basic-zero-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Basic Zero?",
        options: [
          "My name are Alex.",
          "My name is Alex.",
          "Me name is Alex."
        ],
        correctAnswer: "My name is Alex.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-zero-virtual-02",
        type: "multiple-choice",
        question: "What does \"classmate\" mean in Spanish?",
        options: [
          "antes",
          "classmate",
          "nunca"
        ],
        correctAnswer: "classmate",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-zero-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to introductions, classroom English, numbers, friends, and basic identity.",
        options: [
          "I no understand yesterday.",
          "I am sixteen years old.",
          "Beautiful quickly table."
        ],
        correctAnswer: "I am sixteen years old.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-zero-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "verb be and basic identity",
          "Chemical formulas"
        ],
        correctAnswer: "verb be and basic identity",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-zero-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "Alex is sixteen and likes music.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "Alex is sixteen and likes music.",
        audioText: "Hi, I am Alex. I am sixteen, I like music, and my favorite color is black.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-zero-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-basic-zero-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "introductions, classroom English, numbers, friends, and basic identity",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "introductions, classroom English, numbers, friends, and basic identity",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-zero-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-zero-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-zero-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "Hi, I am Alex. I am sixteen, I like music, and my favorite color is black.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-zero-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "Pre-A1 communication",
          "University literature only"
        ],
        correctAnswer: "Pre-A1 communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-zero-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Color", color: "#EF4444", prompt: "What color do you like today?", es: "Que color te gusta hoy?" }, { label: "Mood", color: "#F59E0B", prompt: "How do you feel right now?", es: "Como te sientes ahora?" }, { label: "Clothes", color: "#10B981", prompt: "What color are your clothes?", es: "De que color es tu ropa?" }, { label: "Happy", color: "#3B82F6", prompt: "What makes you feel happy?", es: "Que te hace feliz?" }, { label: "Emoji", color: "#8B5CF6", prompt: "What emoji shows your mood?", es: "Que emoji muestra tu animo?" }, { label: "Object", color: "#EC4899", prompt: "What color do you see near you?", es: "Que color ves cerca?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Colors and feelings: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎨 + 👕 + 😊"],
                    options: ["I have two dogs.", "My shirt is blue and I am happy.", "Turn left at the bank."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Food", color: "#EF4444", prompt: "What food do you like?", es: "Que comida te gusta?" }, { label: "Drink", color: "#F59E0B", prompt: "What do you drink every day?", es: "Que tomas cada dia?" }, { label: "Snack", color: "#10B981", prompt: "What is your favorite snack?", es: "Cual es tu snack favorito?" }, { label: "Order", color: "#3B82F6", prompt: "What do you order at a restaurant?", es: "Que pides en un restaurante?" }, { label: "Taste", color: "#8B5CF6", prompt: "Do you prefer sweet or salty food?", es: "Prefieres dulce o salado?" }, { label: "Hungry", color: "#EC4899", prompt: "What do you eat when you are hungry?", es: "Que comes cuando tienes hambre?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Food and drinks: decode the emoji story",
                    type: "emoji-game",
                    content: ["🍔 + 🍟 + 🥤"],
                    options: ["I am from Canada.", "I want a burger and a drink.", "Open your book."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Weather", color: "#EF4444", prompt: "How is the weather today?", es: "Como esta el clima hoy?" }, { label: "Season", color: "#F59E0B", prompt: "What season do you like?", es: "Que estacion te gusta?" }, { label: "Clothes", color: "#10B981", prompt: "What do you wear on cold days?", es: "Que usas en dias frios?" }, { label: "Temperature", color: "#3B82F6", prompt: "Do you prefer hot or cold weather?", es: "Prefieres calor o frio?" }, { label: "Rain", color: "#8B5CF6", prompt: "Do you like rainy days?", es: "Te gustan los dias lluviosos?" }, { label: "Sun", color: "#EC4899", prompt: "What do you do on sunny days?", es: "Que haces en dias soleados?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Weather: decode the emoji story",
                    type: "emoji-game",
                    content: ["🌧️ + 🧥 + 🌳"],
                    options: ["I can spell my name.", "It is rainy and cold outside.", "The client is angry."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Later", color: "#EF4444", prompt: "What will you do later?", es: "Que haras luego?" }, { label: "Plan", color: "#F59E0B", prompt: "What are your plans for tomorrow?", es: "Cuales son tus planes para manana?" }, { label: "Travel", color: "#10B981", prompt: "Where will you travel one day?", es: "A donde viajaras algun dia?" }, { label: "Soon", color: "#3B82F6", prompt: "What will happen soon?", es: "Que pasara pronto?" }, { label: "Study", color: "#8B5CF6", prompt: "Will you study tonight?", es: "Estudiaras esta noche?" }, { label: "Goal", color: "#EC4899", prompt: "What is one future goal?", es: "Cual es una meta futura?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Future plans: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔮 + 🚀 + 📅"],
                    options: ["The dog is under the chair.", "I will travel in the future.", "I ate cereal yesterday."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Later", color: "#EF4444", prompt: "What will you do later?", es: "Que haras luego?" }, { label: "Plan", color: "#F59E0B", prompt: "What are your plans for tomorrow?", es: "Cuales son tus planes para manana?" }, { label: "Travel", color: "#10B981", prompt: "Where will you travel one day?", es: "A donde viajaras algun dia?" }, { label: "Soon", color: "#3B82F6", prompt: "What will happen soon?", es: "Que pasara pronto?" }, { label: "Study", color: "#8B5CF6", prompt: "Will you study tonight?", es: "Estudiaras esta noche?" }, { label: "Goal", color: "#EC4899", prompt: "What is one future goal?", es: "Cual es una meta futura?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-6-emoji-mission",
                    title: "Emoji Mission",
                    description: "Future plans: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔮 + 🚀 + 📅"],
                    options: ["The dog is under the chair.", "I will travel in the future.", "I ate cereal yesterday."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Door", color: "#EF4444", prompt: "Where is the door?", es: "Donde esta la puerta?" }, { label: "Home", color: "#F59E0B", prompt: "What is near your home?", es: "Que hay cerca de tu casa?" }, { label: "Left", color: "#10B981", prompt: "What is on your left?", es: "Que hay a tu izquierda?" }, { label: "Right", color: "#3B82F6", prompt: "What is on your right?", es: "Que hay a tu derecha?" }, { label: "Travel", color: "#8B5CF6", prompt: "How do you move around town?", es: "Como te mueves por la ciudad?" }, { label: "Place", color: "#EC4899", prompt: "Where do people ask directions?", es: "Donde piden direcciones?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Directions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🗺️ + ⬅️ + 🚌"],
                    options: ["I love my family.", "Turn left at the bus stop.", "She can sing well."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Food", color: "#EF4444", prompt: "What food do you like?", es: "Que comida te gusta?" }, { label: "Drink", color: "#F59E0B", prompt: "What do you drink every day?", es: "Que tomas cada dia?" }, { label: "Snack", color: "#10B981", prompt: "What is your favorite snack?", es: "Cual es tu snack favorito?" }, { label: "Order", color: "#3B82F6", prompt: "What do you order at a restaurant?", es: "Que pides en un restaurante?" }, { label: "Taste", color: "#8B5CF6", prompt: "Do you prefer sweet or salty food?", es: "Prefieres dulce o salado?" }, { label: "Hungry", color: "#EC4899", prompt: "What do you eat when you are hungry?", es: "Que comes cuando tienes hambre?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Food and drinks: decode the emoji story",
                    type: "emoji-game",
                    content: ["🍔 + 🍟 + 🥤"],
                    options: ["I am from Canada.", "I want a burger and a drink.", "Open your book."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Remember", color: "#EF4444", prompt: "What do you remember today?", es: "Que recuerdas hoy?" }, { label: "Easy", color: "#F59E0B", prompt: "What was easy for you?", es: "Que fue facil para ti?" }, { label: "Hard", color: "#10B981", prompt: "What was hard for you?", es: "Que fue dificil para ti?" }, { label: "Favorite", color: "#3B82F6", prompt: "What was your favorite part?", es: "Cual fue tu parte favorita?" }, { label: "Goal", color: "#8B5CF6", prompt: "What is your next goal?", es: "Cual es tu proxima meta?" }, { label: "Win", color: "#EC4899", prompt: "What is one win from class?", es: "Cual es un logro de clase?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-1-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Review: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 📖 + ⭐"],
                    options: ["The dog is hungry.", "I remember today?s lesson.", "I bought new shoes."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Describe your school day from morning to night."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Talk about your favorite app, game, or social network."
      },
      {
        topic: "VOCABULARY",
        question: "Ask and answer questions about hobbies using do or does."
      },
      {
        topic: "INTERACTION",
        question: "Explain which school subject you like and why."
      },
      {
        topic: "FLUENCY",
        question: "Compare your routine on weekdays and weekends."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-basic-1-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Basic 1?",
        options: [
          "She play video games after school.",
          "She plays video games after school.",
          "She playing video games after school."
        ],
        correctAnswer: "She plays video games after school.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-1-virtual-02",
        type: "multiple-choice",
        question: "What does \"after school\" mean in Spanish?",
        options: [
          "antes",
          "after school",
          "nunca"
        ],
        correctAnswer: "after school",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-1-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to daily routines, school subjects, hobbies, likes, and technology.",
        options: [
          "I no understand yesterday.",
          "I check my messages after dinner.",
          "Beautiful quickly table."
        ],
        correctAnswer: "I check my messages after dinner.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-1-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "present simple",
          "Chemical formulas"
        ],
        correctAnswer: "present simple",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-1-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "Emma watches videos after dinner.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "Emma watches videos after dinner.",
        audioText: "Emma gets up at six, goes to school at seven, and watches videos after dinner.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-1-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-basic-1-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "daily routines, school subjects, hobbies, likes, and technology",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "daily routines, school subjects, hobbies, likes, and technology",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-1-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-1-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-1-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "Emma gets up at six, goes to school at seven, and watches videos after dinner.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-1-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "A1 communication",
          "University literature only"
        ],
        correctAnswer: "A1 communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-1-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Pet", color: "#EF4444", prompt: "Do you have a pet?", es: "Tienes mascota?" }, { label: "Animal", color: "#F59E0B", prompt: "What animal do you like?", es: "Que animal te gusta?" }, { label: "Cute", color: "#10B981", prompt: "What animal is cute?", es: "Que animal es tierno?" }, { label: "Wild", color: "#3B82F6", prompt: "What wild animal do you know?", es: "Que animal salvaje conoces?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal is fast?", es: "Que animal es rapido?" }, { label: "Home", color: "#EC4899", prompt: "What animal can live at home?", es: "Que animal puede vivir en casa?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Animals and pets: decode the emoji story",
                    type: "emoji-game",
                    content: ["🐶 + 🐱 + 🦜"],
                    options: ["I wake up at seven.", "I have three pets.", "This email is formal."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Bedroom", color: "#EF4444", prompt: "What is the best thing in your room?", es: "Que es lo mejor de tu cuarto?" }, { label: "Dream House", color: "#F59E0B", prompt: "Does your dream house have a pool?", es: "Tu casa sonada tiene piscina?" }, { label: "Wall", color: "#10B981", prompt: "What is on your wall?", es: "Que hay en tu pared?" }, { label: "Gaming", color: "#3B82F6", prompt: "Where do you play games at home?", es: "Donde juegas en casa?" }, { label: "Chill Zone", color: "#8B5CF6", prompt: "Where do you relax at home?", es: "Donde te relajas en casa?" }, { label: "Upgrade", color: "#EC4899", prompt: "What would you add to your room?", es: "Que agregarias a tu cuarto?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Rooms and places: decode the emoji story",
                    type: "emoji-game",
                    content: ["🛏️ + 🪑 + 🏠"],
                    options: ["I can swim fast.", "There is a chair in my room.", "She likes pizza."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Bus", color: "#EF4444", prompt: "Do you take the bus?", es: "Tomas el bus?" }, { label: "Ride", color: "#F59E0B", prompt: "What is your favorite way to travel?", es: "Cual es tu forma favorita de viajar?" }, { label: "City", color: "#10B981", prompt: "What place in the city do you like?", es: "Que lugar de la ciudad te gusta?" }, { label: "Weekend", color: "#3B82F6", prompt: "Where do you go on weekends?", es: "A donde vas los fines de semana?" }, { label: "Fast", color: "#8B5CF6", prompt: "What transport is fast?", es: "Que transporte es rapido?" }, { label: "Slow", color: "#EC4899", prompt: "What transport is slow but fun?", es: "Que transporte es lento pero divertido?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Rooms and places: decode the emoji story",
                    type: "emoji-game",
                    content: ["🛏️ + 🪑 + 🏠"],
                    options: ["I can swim fast.", "There is a chair in my room.", "She likes pizza."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Work", color: "#EF4444", prompt: "What makes work easier?", es: "Que facilita el trabajo?" }, { label: "Email", color: "#F59E0B", prompt: "What makes an email clear?", es: "Que hace claro un correo?" }, { label: "Client", color: "#10B981", prompt: "How do you greet a client?", es: "Como saludas a un cliente?" }, { label: "Problem", color: "#3B82F6", prompt: "What work problem is common?", es: "Que problema laboral es comun?" }, { label: "Meeting", color: "#8B5CF6", prompt: "Do you like short meetings?", es: "Te gustan las reuniones cortas?" }, { label: "Deal", color: "#EC4899", prompt: "What makes a good deal?", es: "Que hace bueno un trato?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Business English: decode the emoji story",
                    type: "emoji-game",
                    content: ["📧 + 💼 + 🧑‍💼"],
                    options: ["I have a green T-shirt.", "I sent a work email.", "We played soccer outside."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Can", color: "#EF4444", prompt: "What can you do well?", es: "Que puedes hacer bien?" }, { label: "Talent", color: "#F59E0B", prompt: "What talent do you have?", es: "Que talento tienes?" }, { label: "Sport", color: "#10B981", prompt: "Can you swim or run fast?", es: "Puedes nadar o correr rapido?" }, { label: "Music", color: "#3B82F6", prompt: "Can you sing or dance?", es: "Puedes cantar o bailar?" }, { label: "Learn", color: "#8B5CF6", prompt: "What skill do you want to learn?", es: "Que habilidad quieres aprender?" }, { label: "Challenge", color: "#EC4899", prompt: "What is hard but possible?", es: "Que es dificil pero posible?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Abilities: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 🏃 + 🎵"],
                    options: ["There are two chairs.", "I can run and sing.", "This is my passport."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Rule", color: "#EF4444", prompt: "What rule is important?", es: "Que regla es importante?" }, { label: "Students", color: "#F59E0B", prompt: "What must students do?", es: "Que deben hacer los estudiantes?" }, { label: "Advice", color: "#10B981", prompt: "What advice helps you study?", es: "Que consejo te ayuda a estudiar?" }, { label: "Permission", color: "#3B82F6", prompt: "When do you ask Can I...?", es: "Cuando preguntas Can I...?" }, { label: "Duty", color: "#8B5CF6", prompt: "What do you have to do today?", es: "Que tienes que hacer hoy?" }, { label: "School", color: "#EC4899", prompt: "What school rule is useful?", es: "Que regla escolar es util?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-6-emoji-mission",
                    title: "Emoji Mission",
                    description: "Rules and advice: decode the emoji story",
                    type: "emoji-game",
                    content: ["🛑 + 📖 + 🆘"],
                    options: ["I have already eaten.", "Students must follow rules.", "The app is cheaper."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Hangout", color: "#EF4444", prompt: "Where do you hang out with friends?", es: "Donde sales con amigos?" }, { label: "Transport", color: "#F59E0B", prompt: "How do you get around your city?", es: "Como te mueves por tu ciudad?" }, { label: "Food Place", color: "#10B981", prompt: "Where do you go for snacks?", es: "A donde vas por snacks?" }, { label: "Meeting Point", color: "#3B82F6", prompt: "Where do teens meet in your city?", es: "Donde se reunen los adolescentes en tu ciudad?" }, { label: "Safe Ride", color: "#8B5CF6", prompt: "What transport feels safest?", es: "Que transporte se siente mas seguro?" }, { label: "Plan", color: "#EC4899", prompt: "Where would you go after class?", es: "A donde irias despues de clase?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Rooms and places: decode the emoji story",
                    type: "emoji-game",
                    content: ["🛏️ + 🪑 + 🏠"],
                    options: ["I can swim fast.", "There is a chair in my room.", "She likes pizza."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Like", color: "#EF4444", prompt: "What activity do you like?", es: "Que actividad te gusta?" }, { label: "Love", color: "#F59E0B", prompt: "What do you love doing?", es: "Que amas hacer?" }, { label: "Dislike", color: "#10B981", prompt: "What food do you dislike?", es: "Que comida no te gusta?" }, { label: "Choice", color: "#3B82F6", prompt: "Do you prefer pizza or burgers?", es: "Prefieres pizza o hamburguesas?" }, { label: "Fun", color: "#8B5CF6", prompt: "What is fun for you?", es: "Que es divertido para ti?" }, { label: "Music", color: "#EC4899", prompt: "What music do you like?", es: "Que musica te gusta?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Likes and hobbies: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎵 + 🎮 + ❤️"],
                    options: ["Where is the station?", "I like music and video games.", "I have to clean my room."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Remember", color: "#EF4444", prompt: "What do you remember today?", es: "Que recuerdas hoy?" }, { label: "Easy", color: "#F59E0B", prompt: "What was easy for you?", es: "Que fue facil para ti?" }, { label: "Hard", color: "#10B981", prompt: "What was hard for you?", es: "Que fue dificil para ti?" }, { label: "Favorite", color: "#3B82F6", prompt: "What was your favorite part?", es: "Cual fue tu parte favorita?" }, { label: "Goal", color: "#8B5CF6", prompt: "What is your next goal?", es: "Cual es tu proxima meta?" }, { label: "Win", color: "#EC4899", prompt: "What is one win from class?", es: "Cual es un logro de clase?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-2-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Review: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 📖 + ⭐"],
                    options: ["The dog is hungry.", "I remember today?s lesson.", "I bought new shoes."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Tell the story of your last weekend."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Describe a birthday party or school event you remember."
      },
      {
        topic: "VOCABULARY",
        question: "Ask five past simple questions using did."
      },
      {
        topic: "INTERACTION",
        question: "Talk about a place you visited recently."
      },
      {
        topic: "FLUENCY",
        question: "Explain what you did before an important test."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-basic-2-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Basic 2?",
        options: [
          "They watch a movie last night.",
          "They watched a movie last night.",
          "They watched a movie tomorrow."
        ],
        correctAnswer: "They watched a movie last night.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-2-virtual-02",
        type: "multiple-choice",
        question: "What does \"last weekend\" mean in Spanish?",
        options: [
          "antes",
          "el fin de semana pasado",
          "nunca"
        ],
        correctAnswer: "el fin de semana pasado",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-2-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to past events, weekend activities, memories, places, and teen experiences.",
        options: [
          "I no understand yesterday.",
          "I studied for a test yesterday.",
          "Beautiful quickly table."
        ],
        correctAnswer: "I studied for a test yesterday.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-2-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "past simple",
          "Chemical formulas"
        ],
        correctAnswer: "past simple",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-2-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "Nina went to a birthday party last Saturday.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "Nina went to a birthday party last Saturday.",
        audioText: "Nina went to a birthday party last Saturday. She danced, ate pizza, and took photos.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-2-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-basic-2-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "past events, weekend activities, memories, places, and teen experiences",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "past events, weekend activities, memories, places, and teen experiences",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-2-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-2-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-2-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "Nina went to a birthday party last Saturday. She danced, ate pizza, and took photos.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-2-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "A2- communication",
          "University literature only"
        ],
        correctAnswer: "A2- communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-2-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Lucky", color: "#EF4444", prompt: "What is your lucky number?", es: "Cual es tu numero de suerte?" }, { label: "Age", color: "#F59E0B", prompt: "How old is someone in your family?", es: "Que edad tiene alguien de tu familia?" }, { label: "Time", color: "#10B981", prompt: "What time do you wake up?", es: "A que hora despiertas?" }, { label: "Phone", color: "#3B82F6", prompt: "What numbers are easy for you?", es: "Que numeros son faciles para ti?" }, { label: "Count", color: "#8B5CF6", prompt: "How many people are in class?", es: "Cuantas personas hay en clase?" }, { label: "Price", color: "#EC4899", prompt: "What price feels expensive?", es: "Que precio parece caro?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Numbers, dates and time: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎂 + 📅 + 🕒"],
                    options: ["I like blue shoes.", "My birthday is at three.", "The dog is sleeping."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Pet", color: "#EF4444", prompt: "Do you have a pet?", es: "Tienes mascota?" }, { label: "Animal", color: "#F59E0B", prompt: "What animal do you like?", es: "Que animal te gusta?" }, { label: "Cute", color: "#10B981", prompt: "What animal is cute?", es: "Que animal es tierno?" }, { label: "Wild", color: "#3B82F6", prompt: "What wild animal do you know?", es: "Que animal salvaje conoces?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal is fast?", es: "Que animal es rapido?" }, { label: "Home", color: "#EC4899", prompt: "What animal can live at home?", es: "Que animal puede vivir en casa?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Animals and pets: decode the emoji story",
                    type: "emoji-game",
                    content: ["🐶 + 🐱 + 🦜"],
                    options: ["I wake up at seven.", "I have three pets.", "This email is formal."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Holiday", color: "#EF4444", prompt: "What holiday do you like?", es: "Que fiesta te gusta?" }, { label: "Family", color: "#F59E0B", prompt: "Who do you see on holidays?", es: "A quien ves en fiestas?" }, { label: "Food", color: "#10B981", prompt: "What holiday food do you like?", es: "Que comida de fiesta te gusta?" }, { label: "Gift", color: "#3B82F6", prompt: "Do you like gifts?", es: "Te gustan los regalos?" }, { label: "Place", color: "#8B5CF6", prompt: "Where do you celebrate?", es: "Donde celebras?" }, { label: "Song", color: "#EC4899", prompt: "What holiday song do you know?", es: "Que cancion festiva conoces?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Holidays: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎅 + ⭐ + 🏠"],
                    options: ["The laptop is new.", "My holiday is at home.", "I was late yesterday."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Later", color: "#EF4444", prompt: "What will you do later?", es: "Que haras luego?" }, { label: "Plan", color: "#F59E0B", prompt: "What are your plans for tomorrow?", es: "Cuales son tus planes para manana?" }, { label: "Travel", color: "#10B981", prompt: "Where will you travel one day?", es: "A donde viajaras algun dia?" }, { label: "Soon", color: "#3B82F6", prompt: "What will happen soon?", es: "Que pasara pronto?" }, { label: "Study", color: "#8B5CF6", prompt: "Will you study tonight?", es: "Estudiaras esta noche?" }, { label: "Goal", color: "#EC4899", prompt: "What is one future goal?", es: "Cual es una meta futura?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Future plans: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔮 + 🚀 + 📅"],
                    options: ["The dog is under the chair.", "I will travel in the future.", "I ate cereal yesterday."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-6-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past trips: decode the emoji story",
                    type: "emoji-game",
                    content: ["✈️ + 🏖️ + 📅"],
                    options: ["I am studying right now.", "I went on vacation last year.", "Please spell your name."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Today", color: "#EF4444", prompt: "What day is today?", es: "Que dia es hoy?" }, { label: "Month", color: "#F59E0B", prompt: "What month is your favorite?", es: "Cual es tu mes favorito?" }, { label: "Birthday", color: "#10B981", prompt: "When is your birthday?", es: "Cuando cumples anos?" }, { label: "Weekend", color: "#3B82F6", prompt: "What do you do on weekends?", es: "Que haces fines de semana?" }, { label: "Year", color: "#8B5CF6", prompt: "What year is it now?", es: "Que ano es ahora?" }, { label: "Holiday", color: "#EC4899", prompt: "What date do you like?", es: "Que fecha te gusta?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Dates and birthdays: decode the emoji story",
                    type: "emoji-game",
                    content: ["📅 + 🎂 + ⭐"],
                    options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Remember", color: "#EF4444", prompt: "What do you remember today?", es: "Que recuerdas hoy?" }, { label: "Easy", color: "#F59E0B", prompt: "What was easy for you?", es: "Que fue facil para ti?" }, { label: "Hard", color: "#10B981", prompt: "What was hard for you?", es: "Que fue dificil para ti?" }, { label: "Favorite", color: "#3B82F6", prompt: "What was your favorite part?", es: "Cual fue tu parte favorita?" }, { label: "Goal", color: "#8B5CF6", prompt: "What is your next goal?", es: "Cual es tu proxima meta?" }, { label: "Win", color: "#EC4899", prompt: "What is one win from class?", es: "Cual es un logro de clase?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-3-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Review: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 📖 + ⭐"],
                    options: ["The dog is hungry.", "I remember today?s lesson.", "I bought new shoes."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Describe your plans for the next school break."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Compare two phones, games, songs, or stores."
      },
      {
        topic: "VOCABULARY",
        question: "Roleplay buying something in a store."
      },
      {
        topic: "INTERACTION",
        question: "Talk about a goal you are going to achieve this year."
      },
      {
        topic: "FLUENCY",
        question: "Recommend a movie, series, or song and explain why."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-basic-3-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Basic 3?",
        options: [
          "I going to buy new sneakers.",
          "I am going to buy new sneakers.",
          "I am going buy new sneakers."
        ],
        correctAnswer: "I am going to buy new sneakers.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-3-virtual-02",
        type: "multiple-choice",
        question: "What does \"more expensive\" mean in Spanish?",
        options: [
          "antes",
          "mas caro",
          "nunca"
        ],
        correctAnswer: "mas caro",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-3-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to future plans, comparisons, shopping, entertainment, and personal goals.",
        options: [
          "I no understand yesterday.",
          "This phone is cheaper than that one.",
          "Beautiful quickly table."
        ],
        correctAnswer: "This phone is cheaper than that one.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-3-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "going to and comparatives",
          "Chemical formulas"
        ],
        correctAnswer: "going to and comparatives",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-3-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "Tom is saving money for a better phone.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "Tom is saving money for a better phone.",
        audioText: "Tom is going to save money because he wants to buy a better phone next month.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-3-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-basic-3-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "future plans, comparisons, shopping, entertainment, and personal goals",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "future plans, comparisons, shopping, entertainment, and personal goals",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-3-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-3-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-3-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "Tom is going to save money because he wants to buy a better phone next month.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-3-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "A2 communication",
          "University literature only"
        ],
        correctAnswer: "A2 communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-3-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Opinion", color: "#EF4444", prompt: "What is your opinion?", es: "Cual es tu opinion?" }, { label: "Agree", color: "#F59E0B", prompt: "What topic do you agree with?", es: "Con que tema estas de acuerdo?" }, { label: "Tip", color: "#10B981", prompt: "What easy tip can you give?", es: "Que consejo facil puedes dar?" }, { label: "If", color: "#3B82F6", prompt: "If you had free time, what would you do?", es: "Si tuvieras tiempo, que harias?" }, { label: "Maybe", color: "#8B5CF6", prompt: "What might happen this week?", es: "Que podria pasar esta semana?" }, { label: "Solution", color: "#EC4899", prompt: "What solution sounds simple?", es: "Que solucion suena simple?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Opinions: decode the emoji story",
                    type: "emoji-game",
                    content: ["💡 + 👍 + 💬"],
                    options: ["She has a red backpack.", "I think it is a good idea.", "Turn right at the park."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Rule", color: "#EF4444", prompt: "What rule is important?", es: "Que regla es importante?" }, { label: "Students", color: "#F59E0B", prompt: "What must students do?", es: "Que deben hacer los estudiantes?" }, { label: "Advice", color: "#10B981", prompt: "What advice helps you study?", es: "Que consejo te ayuda a estudiar?" }, { label: "Permission", color: "#3B82F6", prompt: "When do you ask Can I...?", es: "Cuando preguntas Can I...?" }, { label: "Duty", color: "#8B5CF6", prompt: "What do you have to do today?", es: "Que tienes que hacer hoy?" }, { label: "School", color: "#EC4899", prompt: "What school rule is useful?", es: "Que regla escolar es util?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Rules and advice: decode the emoji story",
                    type: "emoji-game",
                    content: ["🛑 + 📖 + 🆘"],
                    options: ["I have already eaten.", "Students must follow rules.", "The app is cheaper."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Today", color: "#EF4444", prompt: "What day is today?", es: "Que dia es hoy?" }, { label: "Month", color: "#F59E0B", prompt: "What month is your favorite?", es: "Cual es tu mes favorito?" }, { label: "Birthday", color: "#10B981", prompt: "When is your birthday?", es: "Cuando cumples anos?" }, { label: "Weekend", color: "#3B82F6", prompt: "What do you do on weekends?", es: "Que haces fines de semana?" }, { label: "Year", color: "#8B5CF6", prompt: "What year is it now?", es: "Que ano es ahora?" }, { label: "Holiday", color: "#EC4899", prompt: "What date do you like?", es: "Que fecha te gusta?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Dates and birthdays: decode the emoji story",
                    type: "emoji-game",
                    content: ["📅 + 🎂 + ⭐"],
                    options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Later", color: "#EF4444", prompt: "What will you do later?", es: "Que haras luego?" }, { label: "Plan", color: "#F59E0B", prompt: "What are your plans for tomorrow?", es: "Cuales son tus planes para manana?" }, { label: "Travel", color: "#10B981", prompt: "Where will you travel one day?", es: "A donde viajaras algun dia?" }, { label: "Soon", color: "#3B82F6", prompt: "What will happen soon?", es: "Que pasara pronto?" }, { label: "Study", color: "#8B5CF6", prompt: "Will you study tonight?", es: "Estudiaras esta noche?" }, { label: "Goal", color: "#EC4899", prompt: "What is one future goal?", es: "Cual es una meta futura?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Future plans: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔮 + 🚀 + 📅"],
                    options: ["The dog is under the chair.", "I will travel in the future.", "I ate cereal yesterday."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."], imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  description: "Spin and answer one easy question.",
                  type: "spinning-wheel",
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 13", title: "Emoji Mission", type: "emoji-game", content: ["📱 + 💻 + 🎮"], options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."], correctOptionIndex: 1, imageUrl: "https://images.unsplash.com/photo-1580236021644-8d4822bc6d88?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700",
                  description: "Technology: decode the emoji story"
            }
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
              { id: "Diapositiva 21", title: "Video Homework 📹", type: "video", content: ["Watch this video about comparing smartphones.", "Write down 3 comparatives and 2 superlatives you hear in the video.", "Be ready to share them next class!"], videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw", imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800", bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Opinion", color: "#EF4444", prompt: "What is your opinion?", es: "Cual es tu opinion?" }, { label: "Agree", color: "#F59E0B", prompt: "What topic do you agree with?", es: "Con que tema estas de acuerdo?" }, { label: "Tip", color: "#10B981", prompt: "What easy tip can you give?", es: "Que consejo facil puedes dar?" }, { label: "If", color: "#3B82F6", prompt: "If you had free time, what would you do?", es: "Si tuvieras tiempo, que harias?" }, { label: "Maybe", color: "#8B5CF6", prompt: "What might happen this week?", es: "Que podria pasar esta semana?" }, { label: "Solution", color: "#EC4899", prompt: "What solution sounds simple?", es: "Que solucion suena simple?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Opinions: decode the emoji story",
                    type: "emoji-game",
                    content: ["💡 + 👍 + 💬"],
                    options: ["She has a red backpack.", "I think it is a good idea.", "Turn right at the park."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Family", color: "#EF4444", prompt: "Who lives in your home?", es: "Quien vive en tu casa?" }, { label: "Funny", color: "#F59E0B", prompt: "Who is funny in your family?", es: "Quien es divertido en tu familia?" }, { label: "Talk", color: "#10B981", prompt: "Who do you talk to every day?", es: "Con quien hablas cada dia?" }, { label: "Size", color: "#3B82F6", prompt: "Is your family big or small?", es: "Tu familia es grande o pequena?" }, { label: "Pet", color: "#8B5CF6", prompt: "Who has a pet at home?", es: "Quien tiene mascota en casa?" }, { label: "Friend", color: "#EC4899", prompt: "Who is your best friend?", es: "Quien es tu mejor amigo?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Family and home: decode the emoji story",
                    type: "emoji-game",
                    content: ["👪 + 🏠 + ❤️"],
                    options: ["The bus is late.", "I love my family at home.", "I eat fries every day."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Shape", color: "#EF4444", prompt: "What shape do you see?", es: "Que forma ves?" }, { label: "Find", color: "#F59E0B", prompt: "Where can you find a circle?", es: "Donde puedes encontrar un circulo?" }, { label: "Draw", color: "#10B981", prompt: "Can you draw a triangle?", es: "Puedes dibujar un triangulo?" }, { label: "Pattern", color: "#3B82F6", prompt: "Do you like stripes or dots?", es: "Te gustan rayas o puntos?" }, { label: "Color", color: "#8B5CF6", prompt: "What color is the shape?", es: "De que color es la forma?" }, { label: "Object", color: "#EC4899", prompt: "What object has this shape?", es: "Que objeto tiene esta forma?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Shapes: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔴 + ◻️ + 🎨"],
                    options: ["I like chicken and fries.", "I see a red circle and a square.", "He can ride a bike."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Work", color: "#EF4444", prompt: "What makes work easier?", es: "Que facilita el trabajo?" }, { label: "Email", color: "#F59E0B", prompt: "What makes an email clear?", es: "Que hace claro un correo?" }, { label: "Client", color: "#10B981", prompt: "How do you greet a client?", es: "Como saludas a un cliente?" }, { label: "Problem", color: "#3B82F6", prompt: "What work problem is common?", es: "Que problema laboral es comun?" }, { label: "Meeting", color: "#8B5CF6", prompt: "Do you like short meetings?", es: "Te gustan las reuniones cortas?" }, { label: "Deal", color: "#EC4899", prompt: "What makes a good deal?", es: "Que hace bueno un trato?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-basic-4-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Business English: decode the emoji story",
                    type: "emoji-game",
                    content: ["📧 + 💼 + 🧑‍💼"],
                    options: ["I have a green T-shirt.", "I sent a work email.", "We played soccer outside."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Give advice to a friend who is stressed about school."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Explain rules at school or at home using must and have to."
      },
      {
        topic: "VOCABULARY",
        question: "Talk about abilities you had when you were younger."
      },
      {
        topic: "INTERACTION",
        question: "Describe a recent experience that made you proud."
      },
      {
        topic: "FLUENCY",
        question: "Roleplay solving a conflict with a friend."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-basic-4-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Basic 4?",
        options: [
          "You should to talk to your teacher.",
          "You should talk to your teacher.",
          "You should talking to your teacher."
        ],
        correctAnswer: "You should talk to your teacher.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-4-virtual-02",
        type: "multiple-choice",
        question: "What does \"must\" mean in Spanish?",
        options: [
          "antes",
          "debe / tienes que",
          "nunca"
        ],
        correctAnswer: "debe / tienes que",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-4-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to advice, rules, health, abilities, experiences, and social situations.",
        options: [
          "I no understand yesterday.",
          "Students must arrive on time.",
          "Beautiful quickly table."
        ],
        correctAnswer: "Students must arrive on time.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-4-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "modals",
          "Chemical formulas"
        ],
        correctAnswer: "modals",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-4-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "Lia should sleep well and make a study plan.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "Lia should sleep well and make a study plan.",
        audioText: "Lia feels stressed about exams. Her friend says she should sleep well and make a study plan.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-4-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-basic-4-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "advice, rules, health, abilities, experiences, and social situations",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "advice, rules, health, abilities, experiences, and social situations",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-basic-4-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-basic-4-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-basic-4-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "Lia feels stressed about exams. Her friend says she should sleep well and make a study plan.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-basic-4-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "A2+ communication",
          "University literature only"
        ],
        correctAnswer: "A2+ communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-basic-4-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Try", color: "#EF4444", prompt: "What new food have you tried?", es: "Que comida nueva has probado?" }, { label: "Travel", color: "#F59E0B", prompt: "Have you traveled before?", es: "Has viajado antes?" }, { label: "Never", color: "#10B981", prompt: "What have you never done?", es: "Que nunca has hecho?" }, { label: "Today", color: "#3B82F6", prompt: "What have you done today?", es: "Que has hecho hoy?" }, { label: "Fun", color: "#8B5CF6", prompt: "What experience was fun?", es: "Que experiencia fue divertida?" }, { label: "Ask", color: "#EC4899", prompt: "What Have you ever question can you ask?", es: "Que pregunta con Have you ever puedes hacer?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Life experiences: decode the emoji story",
                    type: "emoji-game",
                    content: ["⭐ + ✈️ + "],
                    options: ["I will clean my room.", "I have tried new food abroad.", "This is a square."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Phrase", color: "#EF4444", prompt: "What English phrase do you know?", es: "Que frase en ingles conoces?" }, { label: "Strange", color: "#F59E0B", prompt: "What phrase sounds strange?", es: "Que frase suena rara?" }, { label: "Verb", color: "#10B981", prompt: "What action verb do you use often?", es: "Que verbo de accion usas seguido?" }, { label: "Meaning", color: "#3B82F6", prompt: "How do you guess a meaning?", es: "Como adivinas un significado?" }, { label: "Use", color: "#8B5CF6", prompt: "Where can you use this phrase?", es: "Donde puedes usar esta frase?" }, { label: "Fun", color: "#EC4899", prompt: "What fun phrase can you say?", es: "Que frase divertida puedes decir?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Expressions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔑 + 💬 + ⭐"],
                    options: ["I like rainy days.", "This is a useful expression.", "The cat can jump."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-6-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Now", color: "#EF4444", prompt: "What are you doing now?", es: "Que haces ahora?" }, { label: "Wear", color: "#F59E0B", prompt: "What is someone wearing now?", es: "Que lleva alguien ahora?" }, { label: "Listen", color: "#10B981", prompt: "What are you listening to today?", es: "Que escuchas hoy?" }, { label: "Around", color: "#3B82F6", prompt: "What is happening around you?", es: "Que pasa a tu alrededor?" }, { label: "Action", color: "#8B5CF6", prompt: "What action can you show?", es: "Que accion puedes mostrar?" }, { label: "Move", color: "#EC4899", prompt: "What is moving in this room?", es: "Que se mueve en este cuarto?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Actions now: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 🎵 + 😄"],
                    options: ["I visited my grandma.", "I am listening to music now.", "The email was sent."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Phrase", color: "#EF4444", prompt: "What English phrase do you know?", es: "Que frase en ingles conoces?" }, { label: "Strange", color: "#F59E0B", prompt: "What phrase sounds strange?", es: "Que frase suena rara?" }, { label: "Verb", color: "#10B981", prompt: "What action verb do you use often?", es: "Que verbo de accion usas seguido?" }, { label: "Meaning", color: "#3B82F6", prompt: "How do you guess a meaning?", es: "Como adivinas un significado?" }, { label: "Use", color: "#8B5CF6", prompt: "Where can you use this phrase?", es: "Donde puedes usar esta frase?" }, { label: "Fun", color: "#EC4899", prompt: "What fun phrase can you say?", es: "Que frase divertida puedes decir?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Expressions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔑 + 💬 + ⭐"],
                    options: ["I like rainy days.", "This is a useful expression.", "The cat can jump."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Can", color: "#EF4444", prompt: "What can you do well?", es: "Que puedes hacer bien?" }, { label: "Talent", color: "#F59E0B", prompt: "What talent do you have?", es: "Que talento tienes?" }, { label: "Sport", color: "#10B981", prompt: "Can you swim or run fast?", es: "Puedes nadar o correr rapido?" }, { label: "Music", color: "#3B82F6", prompt: "Can you sing or dance?", es: "Puedes cantar o bailar?" }, { label: "Learn", color: "#8B5CF6", prompt: "What skill do you want to learn?", es: "Que habilidad quieres aprender?" }, { label: "Challenge", color: "#EC4899", prompt: "What is hard but possible?", es: "Que es dificil pero posible?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Abilities: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 🏃 + 🎵"],
                    options: ["There are two chairs.", "I can run and sing.", "This is my passport."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Opinion", color: "#EF4444", prompt: "What is your opinion?", es: "Cual es tu opinion?" }, { label: "Agree", color: "#F59E0B", prompt: "What topic do you agree with?", es: "Con que tema estas de acuerdo?" }, { label: "Tip", color: "#10B981", prompt: "What easy tip can you give?", es: "Que consejo facil puedes dar?" }, { label: "If", color: "#3B82F6", prompt: "If you had free time, what would you do?", es: "Si tuvieras tiempo, que harias?" }, { label: "Maybe", color: "#8B5CF6", prompt: "What might happen this week?", es: "Que podria pasar esta semana?" }, { label: "Solution", color: "#EC4899", prompt: "What solution sounds simple?", es: "Que solucion suena simple?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Opinions: decode the emoji story",
                    type: "emoji-game",
                    content: ["💡 + 👍 + 💬"],
                    options: ["She has a red backpack.", "I think it is a good idea.", "Turn right at the park."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Pet", color: "#EF4444", prompt: "Do you have a pet?", es: "Tienes mascota?" }, { label: "Animal", color: "#F59E0B", prompt: "What animal do you like?", es: "Que animal te gusta?" }, { label: "Cute", color: "#10B981", prompt: "What animal is cute?", es: "Que animal es tierno?" }, { label: "Wild", color: "#3B82F6", prompt: "What wild animal do you know?", es: "Que animal salvaje conoces?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal is fast?", es: "Que animal es rapido?" }, { label: "Home", color: "#EC4899", prompt: "What animal can live at home?", es: "Que animal puede vivir en casa?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-11-emoji-mission",
                    title: "Emoji Mission",
                    description: "Animals and pets: decode the emoji story",
                    type: "emoji-game",
                    content: ["🐶 + 🐱 + 🦜"],
                    options: ["I wake up at seven.", "I have three pets.", "This email is formal."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Remember", color: "#EF4444", prompt: "What do you remember today?", es: "Que recuerdas hoy?" }, { label: "Easy", color: "#F59E0B", prompt: "What was easy for you?", es: "Que fue facil para ti?" }, { label: "Hard", color: "#10B981", prompt: "What was hard for you?", es: "Que fue dificil para ti?" }, { label: "Favorite", color: "#3B82F6", prompt: "What was your favorite part?", es: "Cual fue tu parte favorita?" }, { label: "Goal", color: "#8B5CF6", prompt: "What is your next goal?", es: "Cual es tu proxima meta?" }, { label: "Win", color: "#EC4899", prompt: "What is one win from class?", es: "Cual es un logro de clase?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-inter-12-emoji-mission",
                    title: "Emoji Mission",
                    description: "Review: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 📖 + ⭐"],
                    options: ["The dog is hungry.", "I remember today?s lesson.", "I bought new shoes."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Tell a detailed story about a challenge you overcame."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Debate the pros and cons of social media for teens."
      },
      {
        topic: "VOCABULARY",
        question: "Explain what you would do if you had a free year."
      },
      {
        topic: "INTERACTION",
        question: "Discuss friendship, teamwork, or peer pressure respectfully."
      },
      {
        topic: "FLUENCY",
        question: "Describe a movie or series and analyze its message."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-inter-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Intermediate?",
        options: [
          "If I have more free time, I would started a channel.",
          "If I had more free time, I would start a channel.",
          "If I had more free time, I will started a channel."
        ],
        correctAnswer: "If I had more free time, I would start a channel.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-inter-virtual-02",
        type: "multiple-choice",
        question: "What does \"although\" mean in Spanish?",
        options: [
          "antes",
          "aunque",
          "nunca"
        ],
        correctAnswer: "aunque",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-inter-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to opinions, stories, conditionals, media, relationships, and debate.",
        options: [
          "I no understand yesterday.",
          "I have been learning English since primary school.",
          "Beautiful quickly table."
        ],
        correctAnswer: "I have been learning English since primary school.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-inter-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "conditionals and present perfect",
          "Chemical formulas"
        ],
        correctAnswer: "conditionals and present perfect",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-inter-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "She likes social media but supports screen breaks.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "She likes social media but supports screen breaks.",
        audioText: "The speaker enjoys social media although she thinks teens should take breaks from their screens.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-inter-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-inter-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "opinions, stories, conditionals, media, relationships, and debate",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "opinions, stories, conditionals, media, relationships, and debate",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-inter-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-inter-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-inter-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "The speaker enjoys social media although she thinks teens should take breaks from their screens.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-inter-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "B1 communication",
          "University literature only"
        ],
        correctAnswer: "B1 communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-inter-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Phrase", color: "#EF4444", prompt: "What English phrase do you know?", es: "Que frase en ingles conoces?" }, { label: "Strange", color: "#F59E0B", prompt: "What phrase sounds strange?", es: "Que frase suena rara?" }, { label: "Verb", color: "#10B981", prompt: "What action verb do you use often?", es: "Que verbo de accion usas seguido?" }, { label: "Meaning", color: "#3B82F6", prompt: "How do you guess a meaning?", es: "Como adivinas un significado?" }, { label: "Use", color: "#8B5CF6", prompt: "Where can you use this phrase?", es: "Donde puedes usar esta frase?" }, { label: "Fun", color: "#EC4899", prompt: "What fun phrase can you say?", es: "Que frase divertida puedes decir?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Expressions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔑 + 💬 + ⭐"],
                    options: ["I like rainy days.", "This is a useful expression.", "The cat can jump."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Today", color: "#EF4444", prompt: "What day is today?", es: "Que dia es hoy?" }, { label: "Month", color: "#F59E0B", prompt: "What month is your favorite?", es: "Cual es tu mes favorito?" }, { label: "Birthday", color: "#10B981", prompt: "When is your birthday?", es: "Cuando cumples anos?" }, { label: "Weekend", color: "#3B82F6", prompt: "What do you do on weekends?", es: "Que haces fines de semana?" }, { label: "Year", color: "#8B5CF6", prompt: "What year is it now?", es: "Que ano es ahora?" }, { label: "Holiday", color: "#EC4899", prompt: "What date do you like?", es: "Que fecha te gusta?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Dates and birthdays: decode the emoji story",
                    type: "emoji-game",
                    content: ["📅 + 🎂 + ⭐"],
                    options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-6-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Phrase", color: "#EF4444", prompt: "What English phrase do you know?", es: "Que frase en ingles conoces?" }, { label: "Strange", color: "#F59E0B", prompt: "What phrase sounds strange?", es: "Que frase suena rara?" }, { label: "Verb", color: "#10B981", prompt: "What action verb do you use often?", es: "Que verbo de accion usas seguido?" }, { label: "Meaning", color: "#3B82F6", prompt: "How do you guess a meaning?", es: "Como adivinas un significado?" }, { label: "Use", color: "#8B5CF6", prompt: "Where can you use this phrase?", es: "Donde puedes usar esta frase?" }, { label: "Fun", color: "#EC4899", prompt: "What fun phrase can you say?", es: "Que frase divertida puedes decir?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Expressions: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔑 + 💬 + ⭐"],
                    options: ["I like rainy days.", "This is a useful expression.", "The cat can jump."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "App", color: "#EF4444", prompt: "What app do you use most?", es: "Que app usas mas?" }, { label: "Device", color: "#F59E0B", prompt: "Do you prefer a phone or laptop?", es: "Prefieres celular o laptop?" }, { label: "Games", color: "#10B981", prompt: "Do you play video games?", es: "Juegas videojuegos?" }, { label: "Gadget", color: "#3B82F6", prompt: "What gadget helps you daily?", es: "Que aparato te ayuda a diario?" }, { label: "Sound", color: "#8B5CF6", prompt: "Do you prefer headphones or speakers?", es: "Prefieres audifonos o parlantes?" }, { label: "Screen", color: "#EC4899", prompt: "How much screen time is okay?", es: "Cuanto tiempo de pantalla esta bien?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Technology: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 💻 + 🎮"],
                    options: ["I drink water at lunch.", "My favorite gadgets are here.", "My cousin is funny."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Work", color: "#EF4444", prompt: "What makes work easier?", es: "Que facilita el trabajo?" }, { label: "Email", color: "#F59E0B", prompt: "What makes an email clear?", es: "Que hace claro un correo?" }, { label: "Client", color: "#10B981", prompt: "How do you greet a client?", es: "Como saludas a un cliente?" }, { label: "Problem", color: "#3B82F6", prompt: "What work problem is common?", es: "Que problema laboral es comun?" }, { label: "Meeting", color: "#8B5CF6", prompt: "Do you like short meetings?", es: "Te gustan las reuniones cortas?" }, { label: "Deal", color: "#EC4899", prompt: "What makes a good deal?", es: "Que hace bueno un trato?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-advanced-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Business English: decode the emoji story",
                    type: "emoji-game",
                    content: ["📧 + 💼 + 🧑‍💼"],
                    options: ["I have a green T-shirt.", "I sent a work email.", "We played soccer outside."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Give a structured opinion about leadership at school."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Summarize a news story or article in your own words."
      },
      {
        topic: "VOCABULARY",
        question: "Use reported speech to explain what someone said."
      },
      {
        topic: "INTERACTION",
        question: "Present a proposal to improve your school or community."
      },
      {
        topic: "FLUENCY",
        question: "Respond to challenging follow-up questions politely."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-advanced-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Advanced?",
        options: [
          "The project designed by the students.",
          "The project was designed by the students.",
          "The project was design by the students."
        ],
        correctAnswer: "The project was designed by the students.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-advanced-virtual-02",
        type: "multiple-choice",
        question: "What does \"therefore\" mean in Spanish?",
        options: [
          "antes",
          "por lo tanto",
          "nunca"
        ],
        correctAnswer: "por lo tanto",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-advanced-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to argumentation, leadership, passive voice, reported speech, and academic discussion.",
        options: [
          "I no understand yesterday.",
          "The results were presented clearly.",
          "Beautiful quickly table."
        ],
        correctAnswer: "The results were presented clearly.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-advanced-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "passive voice and reporting",
          "Chemical formulas"
        ],
        correctAnswer: "passive voice and reporting",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-advanced-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "The campaign improved participation and should continue.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "The campaign improved participation and should continue.",
        audioText: "The student leader said the campaign had improved participation and therefore should continue.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-advanced-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-advanced-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "argumentation, leadership, passive voice, reported speech, and academic discussion",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "argumentation, leadership, passive voice, reported speech, and academic discussion",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-advanced-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-advanced-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-advanced-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "The student leader said the campaign had improved participation and therefore should continue.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-advanced-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "B2 communication",
          "University literature only"
        ],
        correctAnswer: "B2 communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-advanced-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Later", color: "#EF4444", prompt: "What will you do later?", es: "Que haras luego?" }, { label: "Plan", color: "#F59E0B", prompt: "What are your plans for tomorrow?", es: "Cuales son tus planes para manana?" }, { label: "Travel", color: "#10B981", prompt: "Where will you travel one day?", es: "A donde viajaras algun dia?" }, { label: "Soon", color: "#3B82F6", prompt: "What will happen soon?", es: "Que pasara pronto?" }, { label: "Study", color: "#8B5CF6", prompt: "Will you study tonight?", es: "Estudiaras esta noche?" }, { label: "Goal", color: "#EC4899", prompt: "What is one future goal?", es: "Cual es una meta futura?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Future plans: decode the emoji story",
                    type: "emoji-game",
                    content: ["🔮 + 🚀 + 📅"],
                    options: ["The dog is under the chair.", "I will travel in the future.", "I ate cereal yesterday."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Work", color: "#EF4444", prompt: "What makes work easier?", es: "Que facilita el trabajo?" }, { label: "Email", color: "#F59E0B", prompt: "What makes an email clear?", es: "Que hace claro un correo?" }, { label: "Client", color: "#10B981", prompt: "How do you greet a client?", es: "Como saludas a un cliente?" }, { label: "Problem", color: "#3B82F6", prompt: "What work problem is common?", es: "Que problema laboral es comun?" }, { label: "Meeting", color: "#8B5CF6", prompt: "Do you like short meetings?", es: "Te gustan las reuniones cortas?" }, { label: "Deal", color: "#EC4899", prompt: "What makes a good deal?", es: "Que hace bueno un trato?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Business English: decode the emoji story",
                    type: "emoji-game",
                    content: ["📧 + 💼 + 🧑‍💼"],
                    options: ["I have a green T-shirt.", "I sent a work email.", "We played soccer outside."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Now", color: "#EF4444", prompt: "What are you doing now?", es: "Que haces ahora?" }, { label: "Wear", color: "#F59E0B", prompt: "What is someone wearing now?", es: "Que lleva alguien ahora?" }, { label: "Listen", color: "#10B981", prompt: "What are you listening to today?", es: "Que escuchas hoy?" }, { label: "Around", color: "#3B82F6", prompt: "What is happening around you?", es: "Que pasa a tu alrededor?" }, { label: "Action", color: "#8B5CF6", prompt: "What action can you show?", es: "Que accion puedes mostrar?" }, { label: "Move", color: "#EC4899", prompt: "What is moving in this room?", es: "Que se mueve en este cuarto?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-6-emoji-mission",
                    title: "Emoji Mission",
                    description: "Actions now: decode the emoji story",
                    type: "emoji-game",
                    content: ["📱 + 🎵 + 😄"],
                    options: ["I visited my grandma.", "I am listening to music now.", "The email was sent."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Opinion", color: "#EF4444", prompt: "What is your opinion?", es: "Cual es tu opinion?" }, { label: "Agree", color: "#F59E0B", prompt: "What topic do you agree with?", es: "Con que tema estas de acuerdo?" }, { label: "Tip", color: "#10B981", prompt: "What easy tip can you give?", es: "Que consejo facil puedes dar?" }, { label: "If", color: "#3B82F6", prompt: "If you had free time, what would you do?", es: "Si tuvieras tiempo, que harias?" }, { label: "Maybe", color: "#8B5CF6", prompt: "What might happen this week?", es: "Que podria pasar esta semana?" }, { label: "Solution", color: "#EC4899", prompt: "What solution sounds simple?", es: "Que solucion suena simple?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Opinions: decode the emoji story",
                    type: "emoji-game",
                    content: ["💡 + 👍 + 💬"],
                    options: ["She has a red backpack.", "I think it is a good idea.", "Turn right at the park."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Opinion", color: "#EF4444", prompt: "What is your opinion?", es: "Cual es tu opinion?" }, { label: "Agree", color: "#F59E0B", prompt: "What topic do you agree with?", es: "Con que tema estas de acuerdo?" }, { label: "Tip", color: "#10B981", prompt: "What easy tip can you give?", es: "Que consejo facil puedes dar?" }, { label: "If", color: "#3B82F6", prompt: "If you had free time, what would you do?", es: "Si tuvieras tiempo, que harias?" }, { label: "Maybe", color: "#8B5CF6", prompt: "What might happen this week?", es: "Que podria pasar esta semana?" }, { label: "Solution", color: "#EC4899", prompt: "What solution sounds simple?", es: "Que solucion suena simple?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Opinions: decode the emoji story",
                    type: "emoji-game",
                    content: ["💡 + 👍 + 💬"],
                    options: ["She has a red backpack.", "I think it is a good idea.", "Turn right at the park."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Work", color: "#EF4444", prompt: "What makes work easier?", es: "Que facilita el trabajo?" }, { label: "Email", color: "#F59E0B", prompt: "What makes an email clear?", es: "Que hace claro un correo?" }, { label: "Client", color: "#10B981", prompt: "How do you greet a client?", es: "Como saludas a un cliente?" }, { label: "Problem", color: "#3B82F6", prompt: "What work problem is common?", es: "Que problema laboral es comun?" }, { label: "Meeting", color: "#8B5CF6", prompt: "Do you like short meetings?", es: "Te gustan las reuniones cortas?" }, { label: "Deal", color: "#EC4899", prompt: "What makes a good deal?", es: "Que hace bueno un trato?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Business English: decode the emoji story",
                    type: "emoji-game",
                    content: ["📧 + 💼 + 🧑‍💼"],
                    options: ["I have a green T-shirt.", "I sent a work email.", "We played soccer outside."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Remember", color: "#EF4444", prompt: "What do you remember today?", es: "Que recuerdas hoy?" }, { label: "Easy", color: "#F59E0B", prompt: "What was easy for you?", es: "Que fue facil para ti?" }, { label: "Hard", color: "#10B981", prompt: "What was hard for you?", es: "Que fue dificil para ti?" }, { label: "Favorite", color: "#3B82F6", prompt: "What was your favorite part?", es: "Cual fue tu parte favorita?" }, { label: "Goal", color: "#8B5CF6", prompt: "What is your next goal?", es: "Cual es tu proxima meta?" }, { label: "Win", color: "#EC4899", prompt: "What is one win from class?", es: "Cual es un logro de clase?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-elite-11-emoji-mission",
                    title: "Emoji Mission",
                    description: "Review: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 📖 + ⭐"],
                    options: ["The dog is hungry.", "I remember today?s lesson.", "I bought new shoes."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Analyze a controversial topic from two perspectives."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Persuade a group to support a project or campaign."
      },
      {
        topic: "VOCABULARY",
        question: "Explain a complex idea using examples and transitions."
      },
      {
        topic: "INTERACTION",
        question: "Challenge an opinion respectfully and offer evidence."
      },
      {
        topic: "FLUENCY",
        question: "Reflect on your personal learning process and future goals."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-elite-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Advanced Elite?",
        options: [
          "Despite of the risks, the idea is worth discuss.",
          "Despite the risks, the idea is worth discussing.",
          "Despite the risks, the idea worth discussed."
        ],
        correctAnswer: "Despite the risks, the idea is worth discussing.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-elite-virtual-02",
        type: "multiple-choice",
        question: "What does \"on the other hand\" mean in Spanish?",
        options: [
          "antes",
          "por otro lado",
          "nunca"
        ],
        correctAnswer: "por otro lado",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-elite-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to critical thinking, nuance, abstract topics, persuasion, and fluent interaction.",
        options: [
          "I no understand yesterday.",
          "The evidence suggests a more balanced approach.",
          "Beautiful quickly table."
        ],
        correctAnswer: "The evidence suggests a more balanced approach.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-elite-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "concession and argument flow",
          "Chemical formulas"
        ],
        correctAnswer: "concession and argument flow",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-elite-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "AI is useful, but students need independent thinking.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "AI is useful, but students need independent thinking.",
        audioText: "The speaker recognizes the benefits of artificial intelligence, but warns that students still need independent thinking.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-elite-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-elite-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "critical thinking, nuance, abstract topics, persuasion, and fluent interaction",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "critical thinking, nuance, abstract topics, persuasion, and fluent interaction",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-elite-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-elite-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-elite-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "The speaker recognizes the benefits of artificial intelligence, but warns that students still need independent thinking.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-elite-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "B2+ communication",
          "University literature only"
        ],
        correctAnswer: "B2+ communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-elite-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-1-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Today", color: "#EF4444", prompt: "What day is today?", es: "Que dia es hoy?" }, { label: "Month", color: "#F59E0B", prompt: "What month is your favorite?", es: "Cual es tu mes favorito?" }, { label: "Birthday", color: "#10B981", prompt: "When is your birthday?", es: "Cuando cumples anos?" }, { label: "Weekend", color: "#3B82F6", prompt: "What do you do on weekends?", es: "Que haces fines de semana?" }, { label: "Year", color: "#8B5CF6", prompt: "What year is it now?", es: "Que ano es ahora?" }, { label: "Holiday", color: "#EC4899", prompt: "What date do you like?", es: "Que fecha te gusta?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-2-emoji-mission",
                    title: "Emoji Mission",
                    description: "Dates and birthdays: decode the emoji story",
                    type: "emoji-game",
                    content: ["📅 + 🎂 + ⭐"],
                    options: ["The cat is under the table.", "My birthday is in July.", "I am wearing a jacket."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-3-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-4-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Pet", color: "#EF4444", prompt: "Do you have a pet?", es: "Tienes mascota?" }, { label: "Animal", color: "#F59E0B", prompt: "What animal do you like?", es: "Que animal te gusta?" }, { label: "Cute", color: "#10B981", prompt: "What animal is cute?", es: "Que animal es tierno?" }, { label: "Wild", color: "#3B82F6", prompt: "What wild animal do you know?", es: "Que animal salvaje conoces?" }, { label: "Fast", color: "#8B5CF6", prompt: "What animal is fast?", es: "Que animal es rapido?" }, { label: "Home", color: "#EC4899", prompt: "What animal can live at home?", es: "Que animal puede vivir en casa?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-5-emoji-mission",
                    title: "Emoji Mission",
                    description: "Animals and pets: decode the emoji story",
                    type: "emoji-game",
                    content: ["🐶 + 🐱 + 🦜"],
                    options: ["I wake up at seven.", "I have three pets.", "This email is formal."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Like", color: "#EF4444", prompt: "What activity do you like?", es: "Que actividad te gusta?" }, { label: "Love", color: "#F59E0B", prompt: "What do you love doing?", es: "Que amas hacer?" }, { label: "Dislike", color: "#10B981", prompt: "What food do you dislike?", es: "Que comida no te gusta?" }, { label: "Choice", color: "#3B82F6", prompt: "Do you prefer pizza or burgers?", es: "Prefieres pizza o hamburguesas?" }, { label: "Fun", color: "#8B5CF6", prompt: "What is fun for you?", es: "Que es divertido para ti?" }, { label: "Music", color: "#EC4899", prompt: "What music do you like?", es: "Que musica te gusta?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-6-emoji-mission",
                    title: "Emoji Mission",
                    description: "Likes and hobbies: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎵 + 🎮 + ❤️"],
                    options: ["Where is the station?", "I like music and video games.", "I have to clean my room."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Side", color: "#EF4444", prompt: "What side would you choose?", es: "Que lado elegirias?" }, { label: "News", color: "#F59E0B", prompt: "What news is interesting?", es: "Que noticia es interesante?" }, { label: "Media", color: "#10B981", prompt: "What media do you use?", es: "Que medio usas?" }, { label: "Popular", color: "#3B82F6", prompt: "What is popular now?", es: "Que es popular ahora?" }, { label: "Fair", color: "#8B5CF6", prompt: "What is fair or unfair?", es: "Que es justo o injusto?" }, { label: "Idea", color: "#EC4899", prompt: "What idea would you sell?", es: "Que idea venderias?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-7-emoji-mission",
                    title: "Emoji Mission",
                    description: "Discussion: decode the emoji story",
                    type: "emoji-game",
                    content: ["📰 + 📺 + 💬"],
                    options: ["I can count to ten.", "We are discussing the news.", "The pencil is yellow."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Yesterday", color: "#EF4444", prompt: "What did you do yesterday?", es: "Que hiciste ayer?" }, { label: "Childhood", color: "#F59E0B", prompt: "What did you like as a child?", es: "Que te gustaba de pequeno?" }, { label: "Memory", color: "#10B981", prompt: "What is a good memory?", es: "Cual es un buen recuerdo?" }, { label: "Trip", color: "#3B82F6", prompt: "Where did you go once?", es: "A donde fuiste una vez?" }, { label: "Story", color: "#8B5CF6", prompt: "What past story can you tell?", es: "Que historia pasada puedes contar?" }, { label: "Famous", color: "#EC4899", prompt: "Who was famous in the past?", es: "Quien fue famoso en el pasado?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-8-emoji-mission",
                    title: "Emoji Mission",
                    description: "Past and memories: decode the emoji story",
                    type: "emoji-game",
                    content: ["👶 + 👴 + 📖"],
                    options: ["I will call you later.", "I was a child before.", "This phone is expensive."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Lucky", color: "#EF4444", prompt: "What is your lucky number?", es: "Cual es tu numero de suerte?" }, { label: "Age", color: "#F59E0B", prompt: "How old is someone in your family?", es: "Que edad tiene alguien de tu familia?" }, { label: "Time", color: "#10B981", prompt: "What time do you wake up?", es: "A que hora despiertas?" }, { label: "Phone", color: "#3B82F6", prompt: "What numbers are easy for you?", es: "Que numeros son faciles para ti?" }, { label: "Count", color: "#8B5CF6", prompt: "How many people are in class?", es: "Cuantas personas hay en clase?" }, { label: "Price", color: "#EC4899", prompt: "What price feels expensive?", es: "Que precio parece caro?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-9-emoji-mission",
                    title: "Emoji Mission",
                    description: "Numbers, dates and time: decode the emoji story",
                    type: "emoji-game",
                    content: ["🎂 + 📅 + 🕒"],
                    options: ["I like blue shoes.", "My birthday is at three.", "The dog is sleeping."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
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
              { id: "Diapositiva 2", title: "Teen Warm-up Wheel", description: "Spin and answer one easy question.", bgColor: "bg-gradient-to-br from-purple-500 to-fuchsia-600",
                  type: "spinning-wheel",
                  content: ["Spin the wheel.", "Answer with one complete idea.", "Then ask one partner too."],
                  wheelItems: [{ label: "Remember", color: "#EF4444", prompt: "What do you remember today?", es: "Que recuerdas hoy?" }, { label: "Easy", color: "#F59E0B", prompt: "What was easy for you?", es: "Que fue facil para ti?" }, { label: "Hard", color: "#10B981", prompt: "What was hard for you?", es: "Que fue dificil para ti?" }, { label: "Favorite", color: "#3B82F6", prompt: "What was your favorite part?", es: "Cual fue tu parte favorita?" }, { label: "Goal", color: "#8B5CF6", prompt: "What is your next goal?", es: "Cual es tu proxima meta?" }, { label: "Win", color: "#EC4899", prompt: "What is one win from class?", es: "Cual es un logro de clase?" }]
            },
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
              { id: "Diapositiva 15", title: "Review", description: "Let's check the answers.", bgColor: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                {
                    id: "c-teens-masters-10-emoji-mission",
                    title: "Emoji Mission",
                    description: "Review: decode the emoji story",
                    type: "emoji-game",
                    content: ["🏆 + 📖 + ⭐"],
                    options: ["The dog is hungry.", "I remember today?s lesson.", "I bought new shoes."],
                    correctOptionIndex: 1,
                    bgColor: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700"
                  }
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
              { id: "Diapositiva 19", title: "Video Homework ??", description: "Complete the exercises on the platform.", type: "video", bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
                  videoUrl: "https://www.youtube.com/embed/DRl6tpsxchw",
                  content: ["Watch the video and write 5 useful words or phrases.", "Bring one example sentence to the next class."]
            }
            ],
            action: "Anotar la tarea."
          }
        ]
      }
    ],
    oralEvaluation: [
      {
        topic: "INTRODUCTION",
        question: "Deliver a persuasive presentation with a strong opening and conclusion."
      },
      {
        topic: "GRAMMAR IN USE",
        question: "Lead a debate and summarize both sides fairly."
      },
      {
        topic: "VOCABULARY",
        question: "Use idioms and advanced transitions in a personal story."
      },
      {
        topic: "INTERACTION",
        question: "Discuss how technology may shape your future career."
      },
      {
        topic: "FLUENCY",
        question: "Synthesize ideas from different topics into one clear argument."
      }
    ],
    virtualEvaluation: [
      {
        id: "teens-masters-virtual-01",
        type: "multiple-choice",
        question: "Which sentence is correct for Teen Masters?",
        options: [
          "Not only she won, but she also inspired the team.",
          "Not only did she win, but she also inspired the team.",
          "Not only did she won, but inspired also the team."
        ],
        correctAnswer: "Not only did she win, but she also inspired the team.",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-masters-virtual-02",
        type: "multiple-choice",
        question: "What does \"in the long run\" mean in Spanish?",
        options: [
          "antes",
          "a largo plazo",
          "nunca"
        ],
        correctAnswer: "a largo plazo",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-masters-virtual-03",
        type: "multiple-choice",
        question: "Choose the sentence connected to near-native fluency, idioms, synthesis, advanced debate, and presentation skills.",
        options: [
          "I no understand yesterday.",
          "The plan sounds ambitious, yet it is achievable.",
          "Beautiful quickly table."
        ],
        correctAnswer: "The plan sounds ambitious, yet it is achievable.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-masters-virtual-04",
        type: "multiple-choice",
        question: "Which grammar area is most important in this level?",
        options: [
          "Advanced legal writing",
          "inversion and advanced discourse",
          "Chemical formulas"
        ],
        correctAnswer: "inversion and advanced discourse",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-masters-virtual-05",
        type: "listening",
        question: "Listen and choose the best summary.",
        options: [
          "The speaker talks about food only.",
          "Creativity and discipline can strengthen each other.",
          "The speaker gives a phone number only."
        ],
        correctAnswer: "Creativity and discipline can strengthen each other.",
        audioText: "The presenter argued that creativity and discipline are not opposites; in fact, each one strengthens the other.",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-masters-virtual-06",
        type: "multiple-choice",
        question: "Which answer is complete and natural?",
        options: [
          "Yes, I do.",
          "Because yesterday.",
          "At the blue."
        ],
        correctAnswer: "Yes, I do.",
        imageUrl: imgTeenQuiz
      },
      {
        id: "teens-masters-virtual-07",
        type: "multiple-choice",
        question: "Which topic belongs in this exam?",
        options: [
          "Random math equations",
          "near-native fluency, idioms, synthesis, advanced debate, and presentation skills",
          "Only Spanish pronunciation"
        ],
        correctAnswer: "near-native fluency, idioms, synthesis, advanced debate, and presentation skills",
        imageUrl: imgTeenAssessment
      },
      {
        id: "teens-masters-virtual-08",
        type: "multiple-choice",
        question: "Choose the best question form.",
        options: [
          "Do you like English?",
          "You like English?",
          "Does you likes English?"
        ],
        correctAnswer: "Do you like English?",
        imageUrl: imgTeenGadget
      },
      {
        id: "teens-masters-virtual-09",
        type: "multiple-choice",
        question: "Choose the best negative sentence.",
        options: [
          "I do not understand the question.",
          "I not understand the question.",
          "I no understands the question."
        ],
        correctAnswer: "I do not understand the question.",
        imageUrl: imgTeenApps
      },
      {
        id: "teens-masters-virtual-10",
        type: "listening",
        question: "Listen and identify the main idea.",
        options: [
          "The speaker gives personal or practical information.",
          "The speaker says random words with no meaning.",
          "The speaker only counts numbers."
        ],
        correctAnswer: "The speaker gives personal or practical information.",
        audioText: "The presenter argued that creativity and discipline are not opposites; in fact, each one strengthens the other.",
        imageUrl: imgTeenSports
      },
      {
        id: "teens-masters-virtual-11",
        type: "multiple-choice",
        question: "What level of English does this exam review?",
        options: [
          "Only pronunciation with no grammar",
          "C1 communication",
          "University literature only"
        ],
        correctAnswer: "C1 communication",
        imageUrl: imgTeenBirthday
      },
      {
        id: "teens-masters-virtual-12",
        type: "multiple-choice",
        question: "Which response shows good communication?",
        options: [
          "Can you repeat that, please?",
          "Repeat now bad.",
          "No speaking never."
        ],
        correctAnswer: "Can you repeat that, please?",
        imageUrl: imgTeenQuiz
      }
    ]
  }
];
