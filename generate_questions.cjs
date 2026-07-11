const fs = require('fs');

const topics = [
  {
    topic: "basic",
    vocab: ["I am...", "I'm from...", "Currently", "I work as a...", "Student", "Hometown", "Born in", "Live in"],
    questions: [
      "What is your name?", "Where are you from?", "Where do you live currently?", "Do you work or study?",
      "What do you do for a living?", "What are you studying right now?", "Can you describe your hometown?",
      "What do you like most about your hometown?", "Is there anything you dislike about where you live?",
      "How long have you lived in your current city?", "How do you spell your name?", "What's your phone number?",
      "What is your email address?", "When is your birthday?", "Where were you born?", "What's your favorite color?"
    ]
  },
  {
    topic: "family",
    vocab: ["Siblings", "Only child", "Close-knit", "Get along well", "Hang out", "Supportive", "Relatives", "Parents"],
    questions: [
      "Do you have a large or small family?", "Who are you closest to in your family?",
      "Do you spend a lot of time with your family?", "What do you usually do with your friends?",
      "How often do you see your friends?", "What is your best friend like?",
      "Do you prefer spending time with family or friends?", "What is a typical family weekend like for you?",
      "Do you have any brothers or sisters?", "What do your parents do?", "Do you look like anyone in your family?",
      "How often do you visit your grandparents?", "Are you married?", "Do you have any children?"
    ]
  },
  {
    topic: "hobbies",
    vocab: ["In my free time", "I enjoy", "I'm interested in", "Passionate about", "Fascinating", "Relaxing", "Outdoor", "Indoor"],
    questions: [
      "What do you like to do in your free time?", "Do you have any unusual hobbies?",
      "What did you like to do when you were a child?", "Is there a new hobby you would like to start?",
      "Do you prefer indoor or outdoor activities?", "Do you play any musical instruments?",
      "Do you like to play sports or watch them?", "What kind of music do you enjoy listening to?",
      "What are your favorite book genres?", "Do you enjoy painting or drawing?", "How often do you go to the cinema?",
      "Do you like playing video games?", "What is the most popular hobby in your country?"
    ]
  },
  {
    topic: "daily",
    vocab: ["Usually", "Normally", "Wake up", "Routine", "Productive", "Commute", "Take a nap", "Go to bed"],
    questions: [
      "What time do you usually wake up?", "What is the first thing you do in the morning?",
      "Describe your typical morning routine.", "When are you most productive during the day?",
      "What do you usually have for breakfast?", "How do you travel to work or school?",
      "What is your favorite part of the day?", "Do you go to bed late or early?",
      "What do you do in the evening?", "How many hours do you sleep?", "Do you ever take naps?",
      "What is the last thing you do before going to sleep?"
    ]
  },
  {
    topic: "travel",
    vocab: ["Destination", "Sightseeing", "Spontaneous", "Luggage", "Explore", "Memorable", "Relaxing", "Landscape"],
    questions: [
      "Where did you go for your last holiday?", "What was your favorite vacation ever?",
      "Do you prefer relaxing holidays or active holidays?", "Which country would you like to visit in the future?",
      "Have you ever traveled alone?", "What do you think is the best way to travel?",
      "What items do you always take with you when you travel?", "Do you like to plan your holidays or be spontaneous?",
      "Have you ever missed a flight?", "Do you prefer traveling in summer or winter?",
      "What is the most beautiful place you have ever been to?", "Do you like camping?",
      "Do you buy souvenirs when you travel?"
    ]
  },
  {
    topic: "food",
    vocab: ["Delicious", "Spicy", "Vegetarian", "Signature dish", "Traditional", "Sweet", "Salty", "Healthy"],
    questions: [
      "What is your favorite food?", "Are there any foods that you dislike?",
      "Do you know how to cook?", "What is your signature dish?",
      "Do you prefer eating at home or eating out?", "What is traditional food like in your country?",
      "How often do you eat fast food?", "What is your typical breakfast?",
      "What is the strangest food you have ever eaten?", "Are you a vegetarian or vegan?",
      "What is your favorite restaurant in your city?", "Do you drink a lot of coffee?",
      "What do you usually drink with your meals?"
    ]
  },
  {
    topic: "weather",
    vocab: ["Sunny", "Freezing", "Humid", "Breeze", "Climate", "Season", "Extreme weather", "Refreshing"],
    questions: [
      "What is your favorite season?", "Do you prefer hot or cold weather?",
      "Does the weather affect your mood?", "What kind of weather do you enjoy the most?",
      "What is the climate like in your country?", "Have you ever experienced extreme weather?",
      "Do you like walking in the rain?", "Have you ever seen snow?",
      "What activities do you like to do in summer?", "Do you prefer the beach or the mountains in winter?"
    ]
  },
  {
    topic: "work",
    vocab: ["Colleagues", "Teamwork", "Challenging", "Rewarding", "Work-life balance", "Commute", "Salary", "Promotion"],
    questions: [
      "What is your dream job?", "Do you prefer working alone or as part of a team?",
      "What are the most challenging aspects of your job?", "What do you enjoy most about your work/studies?",
      "Where do you see yourself in five years?", "Is money the most important factor in choosing a job?",
      "How important is work-life balance to you?", "Have you ever worked from home?",
      "What is the most interesting job you can think of?", "Would you like to start your own business?"
    ]
  },
  {
    topic: "media",
    vocab: ["Entertaining", "Plot", "Characters", "Binge-watch", "Informative", "Social media", "Screen time", "Documentary"],
    questions: [
      "What was the last movie you saw?", "Do you prefer watching movies at home or in the cinema?",
      "Who is your favorite actor or actress?", "What kind of TV shows do you like?",
      "How much time do you spend on social media?", "Do you read the news every day?",
      "What is your favorite book?", "Do you listen to podcasts?",
      "What was the last TV series you binge-watched?", "Do you prefer Netflix, YouTube, or regular TV?"
    ]
  },
  {
    topic: "future",
    vocab: ["Goal", "Achieve", "Hopefully", "In the future", "Plan", "Improve", "Look forward to", "Next year"],
    questions: [
      "What are your plans for this weekend?", "What do you hope to achieve this year?",
      "Will you travel anytime soon?", "Do you plan to learn another language after English?",
      "What is one big goal you have for your life?", "Where do you want to live in the future?",
      "Do you think life will be better in 10 years?", "What are you going to do after this English class?"
    ]
  },
  {
    topic: "technology",
    vocab: ["Gadget", "Useful", "Distracting", "Convenient", "Screen", "Device", "Internet", "Artificial Intelligence"],
    questions: [
      "How often do you use your smartphone?", "What are your favorite apps?",
      "Do you think technology makes life better or more complicated?", "Which gadget could you not live without?",
      "Do you prefer reading physical books or e-books?", "How has the internet changed the way we study/work?",
      "Do you ever turn off your phone for a whole day?", "Do you use AI tools like ChatGPT?",
      "Is social media good or bad for society?"
    ]
  },
  {
    topic: "health",
    vocab: ["Exercise", "Diet", "Workout", "Stressful", "Relax", "Meditation", "Fit", "Energy"],
    questions: [
      "How often do you exercise?", "What is your favorite way to stay fit?",
      "Do you have a healthy diet?", "How important is sleep to you?",
      "What do you do to relax and reduce stress?", "Have you ever played in a sports team?",
      "Do you prefer going to the gym or running outside?", "Have you ever tried meditation?",
      "How do you cure a bad cold?"
    ]
  },
  {
    topic: "shopping",
    vocab: ["Expensive", "Affordable", "Bargain", "Discount", "Window shopping", "Brands", "Quality", "Customer service"],
    questions: [
      "Do you enjoy shopping?", "Do you prefer shopping online or in stores?",
      "What do you spend the most money on?", "Are you a bargain hunter?",
      "Have you ever bought something you never used?", "What is your favorite store?",
      "Do you care about fashion and brands?", "Do you like buying gifts for others?"
    ]
  },
  {
    topic: "education",
    vocab: ["Learn", "Degree", "Subject", "Teacher", "Classmate", "Study abroad", "Knowledge", "Skill"],
    questions: [
      "What was your favorite subject in school?", "Do you think university education is important?",
      "Who was your favorite teacher and why?", "Do you prefer learning independently or with a teacher?",
      "What is the best way to learn English?", "Did you like high school?",
      "Have you ever cheated on a test?", "Would you like to study abroad?"
    ]
  },
  {
    topic: "environment",
    vocab: ["Pollution", "Recycle", "Climate change", "Eco-friendly", "Nature", "Protect", "Waste", "Sustainable"],
    questions: [
      "How do you try to help the environment?", "What is the biggest environmental problem in your city?",
      "Do you recycle regularly?", "How can individuals reduce pollution?",
      "Do you use reusable bags when shopping?", "Would you buy an electric car?",
      "Are you worried about climate change?"
    ]
  },
  {
    topic: "childhood",
    vocab: ["Memories", "Grow up", "Nostalgic", "Playful", "Innocent", "Imagination", "Friends", "Toys"],
    questions: [
      "What is your earliest childhood memory?", "Who was your childhood hero?",
      "What games did you play when you were a kid?", "Did you have any pets growing up?",
      "What did you want to be when you grew up?", "Were you a quiet or a noisy child?",
      "Did you have a treehouse or a secret hideout?", "What was your favorite cartoon?"
    ]
  },
  {
    topic: "abstract",
    vocab: ["Imagine", "Fascinating", "Advice", "Fear", "Happiness", "Meaningful", "Unbelievable", "Mystery"],
    questions: [
      "If you could have one superpower, what would it be?", "If you won the lottery tomorrow, what is the first thing you would buy?",
      "If you could meet any historical figure, who would it be?", "If you could only eat one food for the rest of your life, what would it be?",
      "What is the best piece of advice you've ever been given?", "If you could time travel, would you go to the past or the future?",
      "If you could teleport anywhere right now, where would you go?", "What is your biggest fear?",
      "What makes you really happy?", "If you were an animal, what would you be?"
    ]
  },
  {
    topic: "random",
    vocab: ["Weird", "Funny", "Interesting", "Actually", "To be honest", "Well...", "Let me think...", "It depends"],
    questions: [
      "Do you have a nickname?", "What is your favorite animal?", "Are you a morning person or a night owl?",
      "Do you believe in aliens?", "What is the weirdest dream you have ever had?",
      "Have you ever met a famous person?", "Can you juggle?", "Can you whistle?",
      "Do you sing in the shower?", "What's the best concert you've ever been to?",
      "What is your favorite festival or celebration?", "Do you prefer cats or dogs?",
      "What's your favorite board game?", "Have you ever been on TV?",
      "What is the scariest movie you've ever seen?", "What's the funniest joke you know?",
      "Do you collect anything?", "What is the most beautiful word in English?",
      "If you had a boat, what would you name it?", "Would you rather explore space or the deep ocean?"
    ]
  }
];

const allQuestions = [];
for (const group of topics) {
  for (const q of group.questions) {
    allQuestions.push({
      question: q,
      vocab: group.vocab,
      topic: group.topic
    });
  }
}

const uniqueQuestions = [];
const seen = new Set();
for (const q of allQuestions) {
  if (!seen.has(q.question)) {
    seen.add(q.question);
    uniqueQuestions.push(q);
  }
}

fs.writeFileSync('src/data/speakingQuestions.ts', `export type SpeakingQuestion = { question: string; vocab: string[]; topic: string; };\n\nexport const speakingQuestions: SpeakingQuestion[] = ${JSON.stringify(uniqueQuestions, null, 2)};\n`);
console.log('Done generating ' + uniqueQuestions.length + ' questions.');
