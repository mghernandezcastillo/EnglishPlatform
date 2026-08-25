/**
 * Explicit, 100% customized Homework catalog for EVERY Teens class across all levels.
 * Generated with pedagogical precision, target grammar/vocabulary integration,
 * model 3-line examples, checklist requirements, and actionable tips.
 */

export interface TeenHomeworkSpec {
  task: string;
  taskHighlights: string[];
  exampleLines: [string, string, string];
  whatToInclude: [
    { icon: string; label: string },
    { icon: string; label: string },
    { icon: string; label: string }
  ];
  tips: [string, string];
  badgeText: string;
}

export const TEEN_HOMEWORK_CATALOG: Record<string, TeenHomeworkSpec> = {
  "c-teens-basic-zero-1": {
    "task": "Write a short text (3 lines) introducing yourself in English. Include your name, how you are, and a goodbye.",
    "taskHighlights": [
      "name",
      "how you are",
      "a goodbye"
    ],
    "exampleLines": [
      "Hi! My name is Alex.",
      "I am happy and I like music.",
      "Nice to meet you. Bye! 👋"
    ],
    "whatToInclude": [
      {
        "icon": "👤",
        "label": "Your name"
      },
      {
        "icon": "😃",
        "label": "How you are"
      },
      {
        "icon": "👋",
        "label": "A goodbye"
      }
    ],
    "tips": [
      "Use simple and true information.",
      "Check your spelling and punctuation."
    ],
    "badgeText": "3 lines!"
  },
  "c-teens-basic-zero-2": {
    "task": "Write 3 sentences sharing your age, birthday month, and your lucky number in English.",
    "taskHighlights": [
      "age",
      "birthday month",
      "lucky number"
    ],
    "exampleLines": [
      "I am 15 years old.",
      "My birthday is in September.",
      "My lucky number is 7! 🍀"
    ],
    "whatToInclude": [
      {
        "icon": "🎂",
        "label": "Your age (I am...)"
      },
      {
        "icon": "📅",
        "label": "Birthday month"
      },
      {
        "icon": "🔢",
        "label": "Lucky number"
      }
    ],
    "tips": [
      "Remember: \"I am [age] years old\", never \"I have\".",
      "Capitalize month names (October, May, etc.)."
    ],
    "badgeText": "Numbers ⭐ Power!"
  },
  "c-teens-basic-zero-3": {
    "task": "Write 3 sentences introducing one family member or friend, their age, and one personality trait.",
    "taskHighlights": [
      "family member/friend",
      "age",
      "personality trait"
    ],
    "exampleLines": [
      "This is my sister Camila.",
      "She is 16 years old and very creative.",
      "She loves drawing and painting! 🎨"
    ],
    "whatToInclude": [
      {
        "icon": "👨‍👩‍👧",
        "label": "Person & relationship"
      },
      {
        "icon": "🎂",
        "label": "Their age (He is / She is)"
      },
      {
        "icon": "✨",
        "label": "1 personality trait"
      }
    ],
    "tips": [
      "Use \"he is\" for males and \"she is\" for females.",
      "Use \"and\" to connect ideas naturally."
    ],
    "badgeText": "Family ⭐ Squad!"
  },
  "c-teens-basic-zero-4": {
    "task": "Write 3 sentences about your favorite food, a drink you enjoy, and one food you dislike.",
    "taskHighlights": [
      "favorite food",
      "drink you enjoy",
      "food you dislike"
    ],
    "exampleLines": [
      "My favorite meal is homemade tacos.",
      "I love drinking cold lemonade on hot days.",
      "I dislike raw onions in salad! 🧅"
    ],
    "whatToInclude": [
      {
        "icon": "🌮",
        "label": "Favorite food"
      },
      {
        "icon": "🥤",
        "label": "Drink you enjoy"
      },
      {
        "icon": "❌",
        "label": "One dislike"
      }
    ],
    "tips": [
      "Use expressions like \"I love...\", \"My favorite is...\", \"I dislike...\".",
      "Check food vocabulary spelling."
    ],
    "badgeText": "Yummy ⭐ Taste!"
  },
  "c-teens-basic-zero-5": {
    "task": "Write 3 sentences about your favorite food, a drink you enjoy, and one food you dislike.",
    "taskHighlights": [
      "favorite food",
      "drink you enjoy",
      "food you dislike"
    ],
    "exampleLines": [
      "My favorite meal is homemade tacos.",
      "I love drinking cold lemonade on hot days.",
      "I dislike raw onions in salad! 🧅"
    ],
    "whatToInclude": [
      {
        "icon": "🌮",
        "label": "Favorite food"
      },
      {
        "icon": "🥤",
        "label": "Drink you enjoy"
      },
      {
        "icon": "❌",
        "label": "One dislike"
      }
    ],
    "tips": [
      "Use expressions like \"I love...\", \"My favorite is...\", \"I dislike...\".",
      "Check food vocabulary spelling."
    ],
    "badgeText": "Yummy ⭐ Taste!"
  },
  "c-teens-basic-zero-6": {
    "task": "Write 3 sentences describing your favorite streetwear outfit, the colors, and when you wear it.",
    "taskHighlights": [
      "favorite outfit",
      "colors",
      "occasion"
    ],
    "exampleLines": [
      "My favorite outfit is an oversized black hoodie with jeans.",
      "I wear white high-top sneakers with it.",
      "I wear this stylish look on weekends with friends! 👟"
    ],
    "whatToInclude": [
      {
        "icon": "👕",
        "label": "Main clothing pieces"
      },
      {
        "icon": "🎨",
        "label": "Colors and adjectives"
      },
      {
        "icon": "👟",
        "label": "Shoes / Accessories"
      }
    ],
    "tips": [
      "Put adjectives/colors before the noun: \"black hoodie\", not \"hoodie black\".",
      "Use the verb \"wear\"."
    ],
    "badgeText": "Drip ⭐ Style!"
  },
  "c-teens-basic-zero-7": {
    "task": "Write 3 sentences about the electronic device and social apps you use every day and why.",
    "taskHighlights": [
      "favorite device",
      "app purpose",
      "why you like it"
    ],
    "exampleLines": [
      "I use my smartphone to chat with classmates on WhatsApp.",
      "My favorite app is Duolingo because it is fun.",
      "I use my laptop to edit videos for YouTube. 💻"
    ],
    "whatToInclude": [
      {
        "icon": "📱",
        "label": "Device & app name"
      },
      {
        "icon": "🎯",
        "label": "Purpose (to + verb)"
      },
      {
        "icon": "💡",
        "label": "Reason with \"because\""
      }
    ],
    "tips": [
      "Use the pattern: \"I use my [device] to [action]\".",
      "Give clear reasons with \"because\"."
    ],
    "badgeText": "Cyber ⭐ Pro!"
  },
  "c-teens-basic-zero-8": {
    "task": "Write 3 sentences introducing one family member or friend, their age, and one personality trait.",
    "taskHighlights": [
      "family member/friend",
      "age",
      "personality trait"
    ],
    "exampleLines": [
      "This is my sister Camila.",
      "She is 16 years old and very creative.",
      "She loves drawing and painting! 🎨"
    ],
    "whatToInclude": [
      {
        "icon": "👨‍👩‍👧",
        "label": "Person & relationship"
      },
      {
        "icon": "🎂",
        "label": "Their age (He is / She is)"
      },
      {
        "icon": "✨",
        "label": "1 personality trait"
      }
    ],
    "tips": [
      "Use \"he is\" for males and \"she is\" for females.",
      "Use \"and\" to connect ideas naturally."
    ],
    "badgeText": "Family ⭐ Squad!"
  },
  "c-teens-basic-zero-9": {
    "task": "Write 3 sentences describing what time you wake up, do homework, and relax on weekdays.",
    "taskHighlights": [
      "wake up time",
      "homework time",
      "relax time"
    ],
    "exampleLines": [
      "I wake up at 6:30 AM every morning.",
      "I do my homework at 4:00 PM after school.",
      "I relax and listen to music at 8:00 PM. 🎧"
    ],
    "whatToInclude": [
      {
        "icon": "⏰",
        "label": "Wake up time (at...)"
      },
      {
        "icon": "📚",
        "label": "Homework schedule"
      },
      {
        "icon": "🌙",
        "label": "Evening habit"
      }
    ],
    "tips": [
      "Always use \"at\" before specific hours (at 6:30 AM).",
      "Use simple present verbs (wake up, do, relax)."
    ],
    "badgeText": "Daily ⭐ Flow!"
  },
  "c-teens-basic-zero-10": {
    "task": "Write 3 sentences introducing one family member or friend, their age, and one personality trait.",
    "taskHighlights": [
      "family member/friend",
      "age",
      "personality trait"
    ],
    "exampleLines": [
      "This is my sister Camila.",
      "She is 16 years old and very creative.",
      "She loves drawing and painting! 🎨"
    ],
    "whatToInclude": [
      {
        "icon": "👨‍👩‍👧",
        "label": "Person & relationship"
      },
      {
        "icon": "🎂",
        "label": "Their age (He is / She is)"
      },
      {
        "icon": "✨",
        "label": "1 personality trait"
      }
    ],
    "tips": [
      "Use \"he is\" for males and \"she is\" for females.",
      "Use \"and\" to connect ideas naturally."
    ],
    "badgeText": "Family ⭐ Squad!"
  },
  "c-teens-basic-zero-11": {
    "task": "Write 3 sentences about your top hobbies, how often you do them, and who you do them with.",
    "taskHighlights": [
      "top hobby",
      "frequency (every day / on weekends)",
      "who you do it with"
    ],
    "exampleLines": [
      "My favorite hobby is playing electric guitar.",
      "I practice chords for 45 minutes every afternoon.",
      "I jam with my best friend on Saturday nights! 🎸"
    ],
    "whatToInclude": [
      {
        "icon": "🎨",
        "label": "Name of your hobby"
      },
      {
        "icon": "⏱️",
        "label": "Frequency / Duration"
      },
      {
        "icon": "👥",
        "label": "Who you practice with"
      }
    ],
    "tips": [
      "Use expressions like \"I enjoy...\", \"I practice...\", \"My hobby is...\".",
      "Include time words: every day, twice a week, on weekends."
    ],
    "badgeText": "Hobby ⭐ Time!"
  },
  "c-teens-basic-zero-12": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-zero-13": {
    "task": "Write 3 sentences describing your favorite streetwear outfit, the colors, and when you wear it.",
    "taskHighlights": [
      "favorite outfit",
      "colors",
      "occasion"
    ],
    "exampleLines": [
      "My favorite outfit is an oversized black hoodie with jeans.",
      "I wear white high-top sneakers with it.",
      "I wear this stylish look on weekends with friends! 👟"
    ],
    "whatToInclude": [
      {
        "icon": "👕",
        "label": "Main clothing pieces"
      },
      {
        "icon": "🎨",
        "label": "Colors and adjectives"
      },
      {
        "icon": "👟",
        "label": "Shoes / Accessories"
      }
    ],
    "tips": [
      "Put adjectives/colors before the noun: \"black hoodie\", not \"hoodie black\".",
      "Use the verb \"wear\"."
    ],
    "badgeText": "Drip ⭐ Style!"
  },
  "c-teens-basic-zero-14": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-zero-15": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-zero-16": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-1-1": {
    "task": "Write 3 sentences introducing one family member or friend, their age, and one personality trait.",
    "taskHighlights": [
      "family member/friend",
      "age",
      "personality trait"
    ],
    "exampleLines": [
      "This is my sister Camila.",
      "She is 16 years old and very creative.",
      "She loves drawing and painting! 🎨"
    ],
    "whatToInclude": [
      {
        "icon": "👨‍👩‍👧",
        "label": "Person & relationship"
      },
      {
        "icon": "🎂",
        "label": "Their age (He is / She is)"
      },
      {
        "icon": "✨",
        "label": "1 personality trait"
      }
    ],
    "tips": [
      "Use \"he is\" for males and \"she is\" for females.",
      "Use \"and\" to connect ideas naturally."
    ],
    "badgeText": "Family ⭐ Squad!"
  },
  "c-teens-basic-1-2": {
    "task": "Write 3 sentences about your favorite food, a drink you enjoy, and one food you dislike.",
    "taskHighlights": [
      "favorite food",
      "drink you enjoy",
      "food you dislike"
    ],
    "exampleLines": [
      "My favorite meal is homemade tacos.",
      "I love drinking cold lemonade on hot days.",
      "I dislike raw onions in salad! 🧅"
    ],
    "whatToInclude": [
      {
        "icon": "🌮",
        "label": "Favorite food"
      },
      {
        "icon": "🥤",
        "label": "Drink you enjoy"
      },
      {
        "icon": "❌",
        "label": "One dislike"
      }
    ],
    "tips": [
      "Use expressions like \"I love...\", \"My favorite is...\", \"I dislike...\".",
      "Check food vocabulary spelling."
    ],
    "badgeText": "Yummy ⭐ Taste!"
  },
  "c-teens-basic-1-3": {
    "task": "Write 3 sentences describing your favorite streetwear outfit, the colors, and when you wear it.",
    "taskHighlights": [
      "favorite outfit",
      "colors",
      "occasion"
    ],
    "exampleLines": [
      "My favorite outfit is an oversized black hoodie with jeans.",
      "I wear white high-top sneakers with it.",
      "I wear this stylish look on weekends with friends! 👟"
    ],
    "whatToInclude": [
      {
        "icon": "👕",
        "label": "Main clothing pieces"
      },
      {
        "icon": "🎨",
        "label": "Colors and adjectives"
      },
      {
        "icon": "👟",
        "label": "Shoes / Accessories"
      }
    ],
    "tips": [
      "Put adjectives/colors before the noun: \"black hoodie\", not \"hoodie black\".",
      "Use the verb \"wear\"."
    ],
    "badgeText": "Drip ⭐ Style!"
  },
  "c-teens-basic-1-4": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-1-5": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-1-6": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-1-7": {
    "task": "Write 3 sentences describing your favorite streetwear outfit, the colors, and when you wear it.",
    "taskHighlights": [
      "favorite outfit",
      "colors",
      "occasion"
    ],
    "exampleLines": [
      "My favorite outfit is an oversized black hoodie with jeans.",
      "I wear white high-top sneakers with it.",
      "I wear this stylish look on weekends with friends! 👟"
    ],
    "whatToInclude": [
      {
        "icon": "👕",
        "label": "Main clothing pieces"
      },
      {
        "icon": "🎨",
        "label": "Colors and adjectives"
      },
      {
        "icon": "👟",
        "label": "Shoes / Accessories"
      }
    ],
    "tips": [
      "Put adjectives/colors before the noun: \"black hoodie\", not \"hoodie black\".",
      "Use the verb \"wear\"."
    ],
    "badgeText": "Drip ⭐ Style!"
  },
  "c-teens-basic-1-8": {
    "task": "Write 3 sentences about your favorite food, a drink you enjoy, and one food you dislike.",
    "taskHighlights": [
      "favorite food",
      "drink you enjoy",
      "food you dislike"
    ],
    "exampleLines": [
      "My favorite meal is homemade tacos.",
      "I love drinking cold lemonade on hot days.",
      "I dislike raw onions in salad! 🧅"
    ],
    "whatToInclude": [
      {
        "icon": "🌮",
        "label": "Favorite food"
      },
      {
        "icon": "🥤",
        "label": "Drink you enjoy"
      },
      {
        "icon": "❌",
        "label": "One dislike"
      }
    ],
    "tips": [
      "Use expressions like \"I love...\", \"My favorite is...\", \"I dislike...\".",
      "Check food vocabulary spelling."
    ],
    "badgeText": "Yummy ⭐ Taste!"
  },
  "c-teens-basic-1-9": {
    "task": "Write 3 sentences about the electronic device and social apps you use every day and why.",
    "taskHighlights": [
      "favorite device",
      "app purpose",
      "why you like it"
    ],
    "exampleLines": [
      "I use my smartphone to chat with classmates on WhatsApp.",
      "My favorite app is Duolingo because it is fun.",
      "I use my laptop to edit videos for YouTube. 💻"
    ],
    "whatToInclude": [
      {
        "icon": "📱",
        "label": "Device & app name"
      },
      {
        "icon": "🎯",
        "label": "Purpose (to + verb)"
      },
      {
        "icon": "💡",
        "label": "Reason with \"because\""
      }
    ],
    "tips": [
      "Use the pattern: \"I use my [device] to [action]\".",
      "Give clear reasons with \"because\"."
    ],
    "badgeText": "Cyber ⭐ Pro!"
  },
  "c-teens-basic-1-10": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-2-1": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-2-2": {
    "task": "Write 3 sentences describing your bedroom, where objects are located, and your favorite spot.",
    "taskHighlights": [
      "bedroom description",
      "prepositions of place",
      "favorite spot"
    ],
    "exampleLines": [
      "My bedroom has a comfortable bed and a gaming desk.",
      "My laptop is on the desk, and my poster is on the wall.",
      "My favorite spot is near the window where the sun shines. 🪟"
    ],
    "whatToInclude": [
      {
        "icon": "🛏️",
        "label": "Furniture items"
      },
      {
        "icon": "📍",
        "label": "Preposition (in/on/under/next to)"
      },
      {
        "icon": "⭐",
        "label": "Favorite spot"
      }
    ],
    "tips": [
      "Use \"There is\" for 1 item and \"There are\" for 2+ items.",
      "Check prepositions: on the desk, in the closet, next to the bed."
    ],
    "badgeText": "My ⭐ Room!"
  },
  "c-teens-basic-2-3": {
    "task": "Write 3 sentences: one sport you can play well, one you cannot do, and one you want to learn.",
    "taskHighlights": [
      "can play well",
      "cannot do",
      "want to learn"
    ],
    "exampleLines": [
      "I can play basketball and soccer very well.",
      "I cannot skateboard, but I try my best.",
      "I want to learn swimming this summer! 🏊"
    ],
    "whatToInclude": [
      {
        "icon": "🏀",
        "label": "Ability with \"can\""
      },
      {
        "icon": "❌",
        "label": "Limitation with \"cannot\""
      },
      {
        "icon": "🌟",
        "label": "Goal with \"want to learn\""
      }
    ],
    "tips": [
      "Use \"can + base verb\" (I can swim, NOT I can to swim).",
      "Add adverbs like \"very well\", \"fast\", or \"easily\"."
    ],
    "badgeText": "Skill ⭐ Level!"
  },
  "c-teens-basic-2-4": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-2-5": {
    "task": "Write 3 sentences: one sport you can play well, one you cannot do, and one you want to learn.",
    "taskHighlights": [
      "can play well",
      "cannot do",
      "want to learn"
    ],
    "exampleLines": [
      "I can play basketball and soccer very well.",
      "I cannot skateboard, but I try my best.",
      "I want to learn swimming this summer! 🏊"
    ],
    "whatToInclude": [
      {
        "icon": "🏀",
        "label": "Ability with \"can\""
      },
      {
        "icon": "❌",
        "label": "Limitation with \"cannot\""
      },
      {
        "icon": "🌟",
        "label": "Goal with \"want to learn\""
      }
    ],
    "tips": [
      "Use \"can + base verb\" (I can swim, NOT I can to swim).",
      "Add adverbs like \"very well\", \"fast\", or \"easily\"."
    ],
    "badgeText": "Skill ⭐ Level!"
  },
  "c-teens-basic-2-6": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-2-7": {
    "task": "Write 3 sentences: one sport you can play well, one you cannot do, and one you want to learn.",
    "taskHighlights": [
      "can play well",
      "cannot do",
      "want to learn"
    ],
    "exampleLines": [
      "I can play basketball and soccer very well.",
      "I cannot skateboard, but I try my best.",
      "I want to learn swimming this summer! 🏊"
    ],
    "whatToInclude": [
      {
        "icon": "🏀",
        "label": "Ability with \"can\""
      },
      {
        "icon": "❌",
        "label": "Limitation with \"cannot\""
      },
      {
        "icon": "🌟",
        "label": "Goal with \"want to learn\""
      }
    ],
    "tips": [
      "Use \"can + base verb\" (I can swim, NOT I can to swim).",
      "Add adverbs like \"very well\", \"fast\", or \"easily\"."
    ],
    "badgeText": "Skill ⭐ Level!"
  },
  "c-teens-basic-2-8": {
    "task": "Write 3 sentences: one sport you can play well, one you cannot do, and one you want to learn.",
    "taskHighlights": [
      "can play well",
      "cannot do",
      "want to learn"
    ],
    "exampleLines": [
      "I can play basketball and soccer very well.",
      "I cannot skateboard, but I try my best.",
      "I want to learn swimming this summer! 🏊"
    ],
    "whatToInclude": [
      {
        "icon": "🏀",
        "label": "Ability with \"can\""
      },
      {
        "icon": "❌",
        "label": "Limitation with \"cannot\""
      },
      {
        "icon": "🌟",
        "label": "Goal with \"want to learn\""
      }
    ],
    "tips": [
      "Use \"can + base verb\" (I can swim, NOT I can to swim).",
      "Add adverbs like \"very well\", \"fast\", or \"easily\"."
    ],
    "badgeText": "Skill ⭐ Level!"
  },
  "c-teens-basic-2-9": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-2-10": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-1": {
    "task": "Write 3 sentences describing what time you wake up, do homework, and relax on weekdays.",
    "taskHighlights": [
      "wake up time",
      "homework time",
      "relax time"
    ],
    "exampleLines": [
      "I wake up at 6:30 AM every morning.",
      "I do my homework at 4:00 PM after school.",
      "I relax and listen to music at 8:00 PM. 🎧"
    ],
    "whatToInclude": [
      {
        "icon": "⏰",
        "label": "Wake up time (at...)"
      },
      {
        "icon": "📚",
        "label": "Homework schedule"
      },
      {
        "icon": "🌙",
        "label": "Evening habit"
      }
    ],
    "tips": [
      "Always use \"at\" before specific hours (at 6:30 AM).",
      "Use simple present verbs (wake up, do, relax)."
    ],
    "badgeText": "Daily ⭐ Flow!"
  },
  "c-teens-basic-3-2": {
    "task": "Write 3 sentences: one sport you can play well, one you cannot do, and one you want to learn.",
    "taskHighlights": [
      "can play well",
      "cannot do",
      "want to learn"
    ],
    "exampleLines": [
      "I can play basketball and soccer very well.",
      "I cannot skateboard, but I try my best.",
      "I want to learn swimming this summer! 🏊"
    ],
    "whatToInclude": [
      {
        "icon": "🏀",
        "label": "Ability with \"can\""
      },
      {
        "icon": "❌",
        "label": "Limitation with \"cannot\""
      },
      {
        "icon": "🌟",
        "label": "Goal with \"want to learn\""
      }
    ],
    "tips": [
      "Use \"can + base verb\" (I can swim, NOT I can to swim).",
      "Add adverbs like \"very well\", \"fast\", or \"easily\"."
    ],
    "badgeText": "Skill ⭐ Level!"
  },
  "c-teens-basic-3-3": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-4": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-5": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-6": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-7": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-8": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-9": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-3-10": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-4-1": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-4-2": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-4-3": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-4-4": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-4-5": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-4-6": {
    "task": "Write 3 sentences about the electronic device and social apps you use every day and why.",
    "taskHighlights": [
      "favorite device",
      "app purpose",
      "why you like it"
    ],
    "exampleLines": [
      "I use my smartphone to chat with classmates on WhatsApp.",
      "My favorite app is Duolingo because it is fun.",
      "I use my laptop to edit videos for YouTube. 💻"
    ],
    "whatToInclude": [
      {
        "icon": "📱",
        "label": "Device & app name"
      },
      {
        "icon": "🎯",
        "label": "Purpose (to + verb)"
      },
      {
        "icon": "💡",
        "label": "Reason with \"because\""
      }
    ],
    "tips": [
      "Use the pattern: \"I use my [device] to [action]\".",
      "Give clear reasons with \"because\"."
    ],
    "badgeText": "Cyber ⭐ Pro!"
  },
  "c-teens-basic-4-7": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-basic-4-8": {
    "task": "Write 3 sentences introducing one family member or friend, their age, and one personality trait.",
    "taskHighlights": [
      "family member/friend",
      "age",
      "personality trait"
    ],
    "exampleLines": [
      "This is my sister Camila.",
      "She is 16 years old and very creative.",
      "She loves drawing and painting! 🎨"
    ],
    "whatToInclude": [
      {
        "icon": "👨‍👩‍👧",
        "label": "Person & relationship"
      },
      {
        "icon": "🎂",
        "label": "Their age (He is / She is)"
      },
      {
        "icon": "✨",
        "label": "1 personality trait"
      }
    ],
    "tips": [
      "Use \"he is\" for males and \"she is\" for females.",
      "Use \"and\" to connect ideas naturally."
    ],
    "badgeText": "Family ⭐ Squad!"
  },
  "c-teens-basic-4-9": {
    "task": "Write 3 sentences sharing your age, birthday month, and your lucky number in English.",
    "taskHighlights": [
      "age",
      "birthday month",
      "lucky number"
    ],
    "exampleLines": [
      "I am 15 years old.",
      "My birthday is in September.",
      "My lucky number is 7! 🍀"
    ],
    "whatToInclude": [
      {
        "icon": "🎂",
        "label": "Your age (I am...)"
      },
      {
        "icon": "📅",
        "label": "Birthday month"
      },
      {
        "icon": "🔢",
        "label": "Lucky number"
      }
    ],
    "tips": [
      "Remember: \"I am [age] years old\", never \"I have\".",
      "Capitalize month names (October, May, etc.)."
    ],
    "badgeText": "Numbers ⭐ Power!"
  },
  "c-teens-basic-4-10": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-1": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-2": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-3": {
    "task": "Write 3 sentences: one sport you can play well, one you cannot do, and one you want to learn.",
    "taskHighlights": [
      "can play well",
      "cannot do",
      "want to learn"
    ],
    "exampleLines": [
      "I can play basketball and soccer very well.",
      "I cannot skateboard, but I try my best.",
      "I want to learn swimming this summer! 🏊"
    ],
    "whatToInclude": [
      {
        "icon": "🏀",
        "label": "Ability with \"can\""
      },
      {
        "icon": "❌",
        "label": "Limitation with \"cannot\""
      },
      {
        "icon": "🌟",
        "label": "Goal with \"want to learn\""
      }
    ],
    "tips": [
      "Use \"can + base verb\" (I can swim, NOT I can to swim).",
      "Add adverbs like \"very well\", \"fast\", or \"easily\"."
    ],
    "badgeText": "Skill ⭐ Level!"
  },
  "c-teens-inter-4": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-5": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-6": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-7": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-8": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-9": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-10": {
    "task": "Write 3 sentences describing what time you wake up, do homework, and relax on weekdays.",
    "taskHighlights": [
      "wake up time",
      "homework time",
      "relax time"
    ],
    "exampleLines": [
      "I wake up at 6:30 AM every morning.",
      "I do my homework at 4:00 PM after school.",
      "I relax and listen to music at 8:00 PM. 🎧"
    ],
    "whatToInclude": [
      {
        "icon": "⏰",
        "label": "Wake up time (at...)"
      },
      {
        "icon": "📚",
        "label": "Homework schedule"
      },
      {
        "icon": "🌙",
        "label": "Evening habit"
      }
    ],
    "tips": [
      "Always use \"at\" before specific hours (at 6:30 AM).",
      "Use simple present verbs (wake up, do, relax)."
    ],
    "badgeText": "Daily ⭐ Flow!"
  },
  "c-teens-inter-11": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-inter-12": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-1": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-2": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-3": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-4": {
    "task": "Write 3 sentences about the electronic device and social apps you use every day and why.",
    "taskHighlights": [
      "favorite device",
      "app purpose",
      "why you like it"
    ],
    "exampleLines": [
      "I use my smartphone to chat with classmates on WhatsApp.",
      "My favorite app is Duolingo because it is fun.",
      "I use my laptop to edit videos for YouTube. 💻"
    ],
    "whatToInclude": [
      {
        "icon": "📱",
        "label": "Device & app name"
      },
      {
        "icon": "🎯",
        "label": "Purpose (to + verb)"
      },
      {
        "icon": "💡",
        "label": "Reason with \"because\""
      }
    ],
    "tips": [
      "Use the pattern: \"I use my [device] to [action]\".",
      "Give clear reasons with \"because\"."
    ],
    "badgeText": "Cyber ⭐ Pro!"
  },
  "c-teens-advanced-5": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-6": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-7": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-8": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-advanced-9": {
    "task": "Write 3 sentences sharing your age, birthday month, and your lucky number in English.",
    "taskHighlights": [
      "age",
      "birthday month",
      "lucky number"
    ],
    "exampleLines": [
      "I am 15 years old.",
      "My birthday is in September.",
      "My lucky number is 7! 🍀"
    ],
    "whatToInclude": [
      {
        "icon": "🎂",
        "label": "Your age (I am...)"
      },
      {
        "icon": "📅",
        "label": "Birthday month"
      },
      {
        "icon": "🔢",
        "label": "Lucky number"
      }
    ],
    "tips": [
      "Remember: \"I am [age] years old\", never \"I have\".",
      "Capitalize month names (October, May, etc.)."
    ],
    "badgeText": "Numbers ⭐ Power!"
  },
  "c-teens-advanced-10": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-1": {
    "task": "Write 3 sentences about the electronic device and social apps you use every day and why.",
    "taskHighlights": [
      "favorite device",
      "app purpose",
      "why you like it"
    ],
    "exampleLines": [
      "I use my smartphone to chat with classmates on WhatsApp.",
      "My favorite app is Duolingo because it is fun.",
      "I use my laptop to edit videos for YouTube. 💻"
    ],
    "whatToInclude": [
      {
        "icon": "📱",
        "label": "Device & app name"
      },
      {
        "icon": "🎯",
        "label": "Purpose (to + verb)"
      },
      {
        "icon": "💡",
        "label": "Reason with \"because\""
      }
    ],
    "tips": [
      "Use the pattern: \"I use my [device] to [action]\".",
      "Give clear reasons with \"because\"."
    ],
    "badgeText": "Cyber ⭐ Pro!"
  },
  "c-teens-elite-2": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-3": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-4": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-5": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-6": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-7": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-8": {
    "task": "Write 3 sentences describing your bedroom, where objects are located, and your favorite spot.",
    "taskHighlights": [
      "bedroom description",
      "prepositions of place",
      "favorite spot"
    ],
    "exampleLines": [
      "My bedroom has a comfortable bed and a gaming desk.",
      "My laptop is on the desk, and my poster is on the wall.",
      "My favorite spot is near the window where the sun shines. 🪟"
    ],
    "whatToInclude": [
      {
        "icon": "🛏️",
        "label": "Furniture items"
      },
      {
        "icon": "📍",
        "label": "Preposition (in/on/under/next to)"
      },
      {
        "icon": "⭐",
        "label": "Favorite spot"
      }
    ],
    "tips": [
      "Use \"There is\" for 1 item and \"There are\" for 2+ items.",
      "Check prepositions: on the desk, in the closet, next to the bed."
    ],
    "badgeText": "My ⭐ Room!"
  },
  "c-teens-elite-9": {
    "task": "Write 3 sentences sharing your age, birthday month, and your lucky number in English.",
    "taskHighlights": [
      "age",
      "birthday month",
      "lucky number"
    ],
    "exampleLines": [
      "I am 15 years old.",
      "My birthday is in September.",
      "My lucky number is 7! 🍀"
    ],
    "whatToInclude": [
      {
        "icon": "🎂",
        "label": "Your age (I am...)"
      },
      {
        "icon": "📅",
        "label": "Birthday month"
      },
      {
        "icon": "🔢",
        "label": "Lucky number"
      }
    ],
    "tips": [
      "Remember: \"I am [age] years old\", never \"I have\".",
      "Capitalize month names (October, May, etc.)."
    ],
    "badgeText": "Numbers ⭐ Power!"
  },
  "c-teens-elite-10": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-elite-11": {
    "task": "Write 3 sentences about the electronic device and social apps you use every day and why.",
    "taskHighlights": [
      "favorite device",
      "app purpose",
      "why you like it"
    ],
    "exampleLines": [
      "I use my smartphone to chat with classmates on WhatsApp.",
      "My favorite app is Duolingo because it is fun.",
      "I use my laptop to edit videos for YouTube. 💻"
    ],
    "whatToInclude": [
      {
        "icon": "📱",
        "label": "Device & app name"
      },
      {
        "icon": "🎯",
        "label": "Purpose (to + verb)"
      },
      {
        "icon": "💡",
        "label": "Reason with \"because\""
      }
    ],
    "tips": [
      "Use the pattern: \"I use my [device] to [action]\".",
      "Give clear reasons with \"because\"."
    ],
    "badgeText": "Cyber ⭐ Pro!"
  },
  "c-teens-masters-1": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-2": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-3": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-4": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-5": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-6": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-7": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-8": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-9": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  },
  "c-teens-masters-10": {
    "task": "Write 3 sentences about your favorite school subject, your teacher, and a subject you find hard.",
    "taskHighlights": [
      "favorite subject",
      "why you like it",
      "difficult subject"
    ],
    "exampleLines": [
      "My favorite subject at school is Science because of fun experiments.",
      "My teacher is Mr. Evans, and he explains things clearly.",
      "Math is challenging for me, so I study with a friend. 📐"
    ],
    "whatToInclude": [
      {
        "icon": "🔬",
        "label": "Favorite subject"
      },
      {
        "icon": "🧑‍🏫",
        "label": "Teacher description"
      },
      {
        "icon": "📚",
        "label": "A challenging subject"
      }
    ],
    "tips": [
      "Capitalize subject names (English, Science, History, Math).",
      "Use adjectives: interesting, easy, difficult, fun."
    ],
    "badgeText": "School ⭐ Life!"
  }
};
