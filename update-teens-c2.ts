import fs from 'fs';

const text = fs.readFileSync('src/data/curriculumTeens.ts', 'utf8');

const replacement = `[
        {
          id: "s1",
          title: "1. Warm-up",
          duration: "10 minutos",
          objective: "Romper el hielo y activar conocimientos previos.",
          slides: [
            { id: "slide-1", title: "Welcome to Class 2! 🎉", description: "Numbers & Ages", content: ["Let's talk about numbers!", "How old are you?", "When is your birthday?"], imageUrl: "/images/teens_birthday_party.jpg", bgColor: "bg-gradient-to-br from-purple-500 to-indigo-600" },
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
            { id: "slide-4", title: "Numbers 1-20 🔢", description: "Vocabulary", type: "normal", content: ["1-10: One, two, three, four, five, six, seven, eight, nine, ten.", "11-20: Eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty."], imageUrl: "/images/teens_cake_candles.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-5", title: "Numbers 20-100 🚀", description: "Vocabulary", type: "normal", content: ["Tens: Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.", "Example: 25 = Twenty-five.", "Example: 42 = Forty-two."], bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-6", title: "Asking for Age 🎂", description: "Grammar", type: "normal", content: ["Question: How old are you?", "Answer: I am 15 years old. / I'm 15."], imageUrl: "/images/teens_phone_chat_age.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
            { id: "slide-7", title: "Months of the Year 📅", description: "Vocabulary", type: "normal", content: ["Jan, Feb, Mar, Apr, May, Jun", "Jul, Aug, Sep, Oct, Nov, Dec", "Notice: Always use capital letters! (Enero = January)"], imageUrl: "/images/teens_calendar_months.jpg", bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600" },
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
            { id: "slide-9", title: "Read the Chat 📱", description: "Context", content: ["Alex: Hey! Is it your birthday today?", "Sam: No! My birthday is in August.", "Alex: Oh! How old are you?", "Sam: I am 16 years old.", "Alex: Cool, I am 15."], imageUrl: "/images/teens_phone_chat_age.jpg", bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600" },
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
            { id: "slide-18", title: "Roleplay: Birthday Party 🥳", description: "Production", content: ["Student A: It's your birthday! Tell your age.", "Student B: Ask when the birthday is and say Happy Birthday!", "Action: Use 'How old are you?' and 'When is your birthday?'"], imageUrl: "/images/teens_birthday_party.jpg", bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700" }
          ],
          action: "Conversar libremente."
        },
        {
          id: "s5",
          title: "5. Wrap-up & Homework",
          duration: "5 minutos",
          objective: "Cierre de clase.",
          slides: [
            { id: "slide-19", title: "Class Complete! 🏆", description: "Wrap-up", content: ["Awesome job today!", "You leveled up your English!"], imageUrl: "/images/teens_complete.jpg", bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            { id: "slide-20", title: "Homework 📝", description: "Homework", type: "homework", content: ["Write down the ages and birthdays of 3 friends or family members.", "Example: My mom is 40. Her birthday is in April."], bgColor: "bg-gradient-to-br from-violet-500 to-fuchsia-600" },
            { id: "slide-21", title: "Video Homework 📹", description: "Video", type: "video", videoUrl: "https://www.youtube.com/embed/Fw0rdSHzWFY", content: ["Watch this video about numbers and ages.", "Practice counting to 100!"], bgColor: "bg-gradient-to-br from-slate-800 to-indigo-900" }
          ],
          action: "Anotar la tarea."
        }
        ]`;

const regex = /(id: "c-teens-basic-zero-2"[\s\S]*?sections: )(\[[\s\S]*?\])(\s*\}\s*,\s*\{\s*id: "c-teens-basic-zero-3")/;

if (regex.test(text)) {
  const newText = text.replace(regex, (match, p1, p2, p3) => p1 + replacement + p3);
  fs.writeFileSync('src/data/curriculumTeens.ts', newText);
  console.log('Successfully updated the curriculumTeens.ts file (Class 2).');
} else {
  console.log('Could not match regex.');
}
