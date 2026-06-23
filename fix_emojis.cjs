const fs = require('fs');

const file = 'src/data/curriculum.ts';
let content = fs.readFileSync(file, 'utf8');

const emojiSet = [
    { content: "💼 ➕ 🗣️ ➕ 🤝", options: ["I have a business meeting.", "Let's negotiate a deal.", "I am looking for a job."], correct: 1 },
    { content: "✈️ ➕ 🏨 ➕ 🌴", options: ["We are going on vacation.", "I need to book a flight.", "I am lost in the city."], correct: 0 },
    { content: "☕ ➕ 💻 ➕ 😩", options: ["I love drinking coffee.", "Working late makes me tired.", "My computer is broken."], correct: 1 },
    { content: "📅 ➕ ❌ ➕ 😢", options: ["The meeting is cancelled.", "I lost my calendar.", "I am late for my appointment."], correct: 0 },
    { content: "📈 ➕ 💰 ➕ 🎉", options: ["Sales are going up!", "I spent too much money.", "Let's have a party."], correct: 0 },
    { content: "🚗 ➕ 🚦 ➕ 😡", options: ["I got a speeding ticket.", "The traffic is terrible.", "My car broke down."], correct: 1 },
    { content: "🌧️ ➕ 🛋️ ➕ 📺", options: ["I will stay home and watch TV.", "It's raining outside.", "The TV is broken."], correct: 0 },
    { content: "🏋️ ➕ 🥗 ➕ 💪", options: ["I need to eat healthy.", "I am getting fit.", "I don't like vegetables."], correct: 1 },
    { content: "📱 ➕ 🔋 ➕ ☠️", options: ["My phone is dead.", "I need a new phone.", "I am playing a game."], correct: 0 },
    { content: "🗣️ ➕ 👂 ➕ 🤔", options: ["Can you repeat that?", "I don't understand.", "I am listening carefully."], correct: 2 },
    { content: "🏥 ➕ 🩺 ➕ 💊", options: ["I am feeling sick.", "I am a doctor.", "I need some medicine."], correct: 0 },
    { content: "🎓 ➕ 📚 ➕ 🧠", options: ["I am studying hard.", "I forgot my book.", "I graduated from university."], correct: 0 },
    { content: "🍕 ➕ 🍔 ➕ 🤤", options: ["I am very hungry.", "I like fast food.", "I am cooking dinner."], correct: 0 },
    { content: "🛒 ➕ 💳 ➕ 🛍️", options: ["I am going shopping.", "I lost my credit card.", "I bought a new shirt."], correct: 0 },
    { content: "⏰ ➕ 🏃 ➕ 🏃", options: ["I love running.", "I am late, hurry up!", "I need a new watch."], correct: 1 },
];

let currentIndex = 0;

content = content.replace(/content:\s*\['🤔 ➕ 💡 ➕ 🗣️'\][\s\S]*?correctOptionIndex:\s*1/g, (match) => {
    const sel = emojiSet[currentIndex % emojiSet.length];
    currentIndex++;
    return `content: ['${sel.content}'],
                                bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
                                options: ["${sel.options[0]}", "${sel.options[1]}", "${sel.options[2]}"],
                                correctOptionIndex: ${sel.correct}`;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed emojis in curriculum.ts');
