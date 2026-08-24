// Master customized Speaking Boss Battle map for all 220 classes across Kids, Adults, and Teens tracks.
// Generated with 100% pedagogical alignment to each individual class syllabus and communicative speaking goals.

export interface CustomSpeakingBossMission {
  bossName: string;
  bossTitle: string;
  bossAvatar: string;
  mission: string;
  starterPhrase: string;
  powerWords: string[];
  targetGrammar: string;
  checklist: string[];
  rounds: {
    remember: string[];
    use: string[];
    speak: string[];
  };
}

export const CLASS_SPEAKING_BOSS_MAP: Record<string, CustomSpeakingBossMission> = {
  "kids:c-bz-1": {
    "bossName": "Captain Greeting",
    "bossTitle": "Greetings & Introductions Quest",
    "bossAvatar": "👋",
    "mission": "Introduce yourself with a big smile! Say your name, how you are feeling, and greet your teacher politely.",
    "starterPhrase": "Hello teacher, my name is...",
    "powerWords": [
      "Good morning",
      "Nice to meet you",
      "Happy"
    ],
    "targetGrammar": "Verb To Be (I am / My name is)",
    "checklist": [
      "Say hello politely",
      "Tell your full name",
      "Say how you feel today"
    ],
    "rounds": {
      "remember": [
        "Say 3 greeting words and your favorite English word!"
      ],
      "use": [
        "Say one \"I am...\" sentence and ask \"What is your name?\""
      ],
      "speak": [
        "Speak for 20 seconds: Introduce yourself, say your age, and ask the teacher a question!"
      ]
    }
  },
  "kids:c-bz-2": {
    "bossName": "Number Wizard",
    "bossTitle": "Numbers, Colors & Age Challenge",
    "bossAvatar": "🔢",
    "mission": "Show off your numbers! Tell how old you are, your favorite number, and your favorite color.",
    "starterPhrase": "I am... years old, and my favorite color is...",
    "powerWords": [
      "Seven",
      "Blue",
      "Birthday"
    ],
    "targetGrammar": "I am + number / My favorite is...",
    "checklist": [
      "Tell your age",
      "Say your favorite number",
      "Name two bright colors you like"
    ],
    "rounds": {
      "remember": [
        "Count from 1 to 10 in English super fast!"
      ],
      "use": [
        "Make a sentence with your age and a sentence with your favorite color."
      ],
      "speak": [
        "Speak for 20 seconds: Describe your birthday cake colors and how many candles are on it!"
      ]
    }
  },
  "kids:c-bz-3": {
    "bossName": "Sunny Smiles",
    "bossTitle": "Feelings & Emotions Adventure",
    "bossAvatar": "😊",
    "mission": "Express your feelings! Describe how you feel in the morning, when you play games, and when you are sleepy.",
    "starterPhrase": "Today I feel very happy because...",
    "powerWords": [
      "Excited",
      "Tired",
      "Ready to play"
    ],
    "targetGrammar": "I feel + emotion / I am + adjective",
    "checklist": [
      "Say how you feel right now",
      "Say what makes you smile",
      "Say what you do when you are tired"
    ],
    "rounds": {
      "remember": [
        "Name 3 emotions: happy, excited, sleepy!"
      ],
      "use": [
        "Make one \"I am happy when...\" and one \"I am tired when...\" sentence."
      ],
      "speak": [
        "Speak for 20 seconds: Act out and describe your happiest day of the week!"
      ]
    }
  },
  "kids:c-bz-4": {
    "bossName": "Family Guardian",
    "bossTitle": "My Family & Home Tree",
    "bossAvatar": "👨‍👩‍👧",
    "mission": "Introduce your lovely family! Mention who lives with you at home and one fun thing you do together.",
    "starterPhrase": "In my home, I live with my...",
    "powerWords": [
      "Brother",
      "Sister",
      "Love"
    ],
    "targetGrammar": "This is my... / I have...",
    "checklist": [
      "Name 2 or 3 family members",
      "Say where you live",
      "Share what you do together"
    ],
    "rounds": {
      "remember": [
        "Say 3 family words: mother, father, brother/sister."
      ],
      "use": [
        "Make one sentence with \"This is my...\" and one with \"I love my...\""
      ],
      "speak": [
        "Speak for 20 seconds: Describe your family members and what you like playing together!"
      ]
    }
  },
  "kids:c-bz-5": {
    "bossName": "Magic Backpack",
    "bossTitle": "Classroom Objects & School Tools",
    "bossAvatar": "🎒",
    "mission": "Show what is inside your magic school bag! Name 3 items you use for class and what colors they are.",
    "starterPhrase": "Inside my backpack, I have a...",
    "powerWords": [
      "Pencil",
      "Notebook",
      "Eraser"
    ],
    "targetGrammar": "I have a + color + noun",
    "checklist": [
      "Name 3 classroom objects",
      "Mention their colors",
      "Say what you use them for"
    ],
    "rounds": {
      "remember": [
        "Name 3 school items: pencil, book, ruler!"
      ],
      "use": [
        "Make a sentence with \"I have a blue pencil\" and \"I write with my...\""
      ],
      "speak": [
        "Speak for 20 seconds: Describe your favorite school supplies and your drawing book!"
      ]
    }
  },
  "kids:c-bz-6": {
    "bossName": "Paws & Whiskers",
    "bossTitle": "Pets & Playful Animals",
    "bossAvatar": "🐶",
    "mission": "Talk about your dream pet! Describe its name, color, and what funny tricks it can do.",
    "starterPhrase": "My favorite pet is a playful...",
    "powerWords": [
      "Puppy",
      "Cute kitten",
      "Run and jump"
    ],
    "targetGrammar": "It is + adjective / It has + features",
    "checklist": [
      "Name the animal",
      "Describe its color and size",
      "Tell one funny thing it loves doing"
    ],
    "rounds": {
      "remember": [
        "Make 3 animal sounds and say their English names!"
      ],
      "use": [
        "Say \"My pet is...\" and \"My pet can run fast!\""
      ],
      "speak": [
        "Speak for 20 seconds: Describe an awesome pet animal and why you love it!"
      ]
    }
  },
  "kids:c-bz-7": {
    "bossName": "Robot Body",
    "bossTitle": "Body Parts & Super Actions",
    "bossAvatar": "🤖",
    "mission": "Command your robot body! Point to and name 3 body parts and tell what super actions you can do.",
    "starterPhrase": "With my eyes I can see, and with my legs I can...",
    "powerWords": [
      "Hands",
      "Legs",
      "Jump high"
    ],
    "targetGrammar": "I have two... / I can + action verb",
    "checklist": [
      "Name 3 body parts",
      "Say what each part does",
      "Show one superpower movement"
    ],
    "rounds": {
      "remember": [
        "Touch your nose, ears, and shoulders while naming them!"
      ],
      "use": [
        "Make one \"I have two hands\" and one \"I can jump high\" sentence."
      ],
      "speak": [
        "Speak for 20 seconds: Describe a superhero robot and all its body powers!"
      ]
    }
  },
  "kids:c-bz-8": {
    "bossName": "Crown Master",
    "bossTitle": "Basic Zero Graduation Quest",
    "bossAvatar": "👑",
    "mission": "Celebrate your victory! Introduce yourself, count your favorite things, and tell the teacher your favorite English topic.",
    "starterPhrase": "Hello! I am a proud English learner and today I...",
    "powerWords": [
      "Champion",
      "Star student",
      "Speak English"
    ],
    "targetGrammar": "Full Basic Zero synthesis (To Be + Colors + Family + Animals)",
    "checklist": [
      "Introduce yourself with energy",
      "Name 3 things you learned in Basic Zero",
      "Say thank you to your teacher"
    ],
    "rounds": {
      "remember": [
        "Say 5 English words you learned in Basic Zero!"
      ],
      "use": [
        "Make two complete sentences about yourself and your favorites."
      ],
      "speak": [
        "Speak for 30 seconds: Present your grand English introduction to win the Champion crown!"
      ]
    }
  },
  "kids:c-be-1": {
    "bossName": "School Captain",
    "bossTitle": "My School & Classroom Adventures",
    "bossAvatar": "🏫",
    "mission": "Give a tour of your school! Describe your favorite classroom subject, your teacher, and who you sit with.",
    "starterPhrase": "At my school, my favorite class is...",
    "powerWords": [
      "Classroom",
      "Friendly teacher",
      "Best friend"
    ],
    "targetGrammar": "There is / There are / In my school...",
    "checklist": [
      "Name your favorite subject",
      "Describe your classroom",
      "Tell who your best school friend is"
    ],
    "rounds": {
      "remember": [
        "Name 3 school places: classroom, playground, cafeteria!"
      ],
      "use": [
        "Make one \"There is a...\" and one \"There are many...\" sentence about your school."
      ],
      "speak": [
        "Speak for 30 seconds: Describe the best part of your school day!"
      ]
    }
  },
  "kids:c-be-2": {
    "bossName": "Chef Yummy",
    "bossTitle": "Healthy Foods, Fruits & Snacks",
    "bossAvatar": "🍎",
    "mission": "Create a delicious fruit salad menu! Name 3 sweet fruits and describe what you like eating for breakfast.",
    "starterPhrase": "For a healthy breakfast, I love eating...",
    "powerWords": [
      "Sweet bananas",
      "Juicy apples",
      "Fresh juice"
    ],
    "targetGrammar": "I like / I do not like / Some + fruit",
    "checklist": [
      "Name 3 fruits or foods you love",
      "Name 1 food you dislike",
      "Describe your favorite morning drink"
    ],
    "rounds": {
      "remember": [
        "Say 3 fruits: apple, banana, strawberry!"
      ],
      "use": [
        "Make one sentence with \"I like...\" and one with \"I don't like...\""
      ],
      "speak": [
        "Speak for 30 seconds: Describe your dream breakfast plate with colorful fruits!"
      ]
    }
  },
  "kids:c-be-3": {
    "bossName": "Toy Maker",
    "bossTitle": "Toys, Games & Playtime Fun",
    "bossAvatar": "🧸",
    "mission": "Show your toy collection! Describe your favorite toy, what color it is, and how you share it with friends.",
    "starterPhrase": "My favorite toy in the world is my...",
    "powerWords": [
      "Teddy bear",
      "Toy car",
      "Play together"
    ],
    "targetGrammar": "It has... / I play with...",
    "checklist": [
      "Name your favorite toy",
      "Describe its color and features",
      "Explain why it is fun to play with"
    ],
    "rounds": {
      "remember": [
        "Say 3 toy words: ball, puzzle, doll/car!"
      ],
      "use": [
        "Make one sentence with \"This toy is...\" and \"I play with my friends.\""
      ],
      "speak": [
        "Speak for 30 seconds: Tell the story of your favorite toy and how you play!"
      ]
    }
  },
  "kids:c-be-4": {
    "bossName": "Weather Wizard",
    "bossTitle": "Clothes for Sunny & Rainy Days",
    "bossAvatar": "🧥",
    "mission": "Give the daily weather and outfit report! Tell what the weather is like and what clothes you are wearing today.",
    "starterPhrase": "Today the weather is... so I am wearing...",
    "powerWords": [
      "Sunny day",
      "Raincoat",
      "Warm sneakers"
    ],
    "targetGrammar": "Present Continuous (I am wearing...) / It is + weather",
    "checklist": [
      "State today's weather",
      "Describe your outfit with colors",
      "Tell what you wear on rainy days"
    ],
    "rounds": {
      "remember": [
        "Say 3 weather words and 3 clothing items!"
      ],
      "use": [
        "Make one \"When it rains, I wear...\" and one \"On sunny days, I wear...\" sentence."
      ],
      "speak": [
        "Speak for 30 seconds: Be the TV weather kid and give outfit advice for the day!"
      ]
    }
  },
  "kids:c-be-5": {
    "bossName": "Cozy House",
    "bossTitle": "Rooms of the House & Furniture",
    "bossAvatar": "🏡",
    "mission": "Give a guided tour of your home! Describe your bedroom, the kitchen, and your favorite cozy spot.",
    "starterPhrase": "Welcome to my house! My favorite room is...",
    "powerWords": [
      "Living room",
      "Cozy bedroom",
      "Modern kitchen"
    ],
    "targetGrammar": "There is a... in the... / Prepositions of place (in, on, under)",
    "checklist": [
      "Name 2 rooms in your house",
      "Describe 1 piece of furniture",
      "Say where you like to relax"
    ],
    "rounds": {
      "remember": [
        "Name 3 rooms: kitchen, bedroom, living room!"
      ],
      "use": [
        "Make a sentence with \"There is a bed in my room\" and \"The TV is in the living room.\""
      ],
      "speak": [
        "Speak for 30 seconds: Describe your dream bedroom with all your favorite decorations!"
      ]
    }
  },
  "kids:c-be-6": {
    "bossName": "Super Kid",
    "bossTitle": "Action Verbs & Super Talents",
    "bossAvatar": "🦸‍♂️",
    "mission": "Demonstrate your superpowers! List 3 amazing activities you can do and 1 challenge you are learning.",
    "starterPhrase": "I have awesome superpowers! I can...",
    "powerWords": [
      "Run super fast",
      "Swim like a fish",
      "Draw pictures"
    ],
    "targetGrammar": "Can / Cannot (I can + verb)",
    "checklist": [
      "Say 2 things you can do well",
      "Say 1 thing you cannot do yet",
      "Demonstrate a fun superhero talent"
    ],
    "rounds": {
      "remember": [
        "Name 3 action verbs: run, jump, sing!"
      ],
      "use": [
        "Say \"I can swim fast\" and \"I cannot fly like a bird.\""
      ],
      "speak": [
        "Speak for 30 seconds: Present yourself as a superhero and explain your powers!"
      ]
    }
  },
  "kids:c-be-7": {
    "bossName": "City Explorer",
    "bossTitle": "Places in Town & Neighborhood Map",
    "bossAvatar": "🌳",
    "mission": "Show a map of your neighborhood! Tell where the park, the bakery, and the toy store are located.",
    "starterPhrase": "In my lovely neighborhood, there is a...",
    "powerWords": [
      "Green park",
      "Sweet bakery",
      "Next to"
    ],
    "targetGrammar": "There is a... next to / across from the...",
    "checklist": [
      "Name 3 neighborhood places",
      "Use 1 location word (next to, near)",
      "Tell where you like to visit on Saturdays"
    ],
    "rounds": {
      "remember": [
        "Name 3 town places: park, supermarket, school!"
      ],
      "use": [
        "Make a sentence with \"The park is next to the school.\""
      ],
      "speak": [
        "Speak for 30 seconds: Guide the class through your favorite places in town!"
      ]
    }
  },
  "kids:c-be-8": {
    "bossName": "Explorer Champion",
    "bossTitle": "Explorer Level Grand Trophy",
    "bossAvatar": "🏆",
    "mission": "Complete your Explorer graduation! Tell a story about what you learned, your favorite words, and your English superpower.",
    "starterPhrase": "I am an adventurous Explorer and today I...",
    "powerWords": [
      "Adventure",
      "Discovery",
      "Speak with confidence"
    ],
    "targetGrammar": "Level synthesis (Actions + Weather + House + Town)",
    "checklist": [
      "State your name and explorer title",
      "Share your 3 favorite English words",
      "Describe a fun day in your town"
    ],
    "rounds": {
      "remember": [
        "Say 5 Explorer vocabulary words from memory!"
      ],
      "use": [
        "Make two complete sentences connecting places and actions."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Explorer graduation speech!"
      ]
    }
  },
  "kids:c-ba-1": {
    "bossName": "Safari Ranger",
    "bossTitle": "Wild Safari Animals & Nature",
    "bossAvatar": "🦁",
    "mission": "Take the class on a wild safari! Describe lions, elephants, and tall giraffes, and where they live.",
    "starterPhrase": "Welcome to the wild safari! Look, there is a giant...",
    "powerWords": [
      "Fierce lion",
      "Tall giraffe",
      "Savanna habitat"
    ],
    "targetGrammar": "Comparative adjectives (taller than, bigger than)",
    "checklist": [
      "Name 3 wild animals",
      "Compare 2 animals (The elephant is bigger than the lion)",
      "Describe what they eat"
    ],
    "rounds": {
      "remember": [
        "Name 3 safari animals: lion, zebra, elephant!"
      ],
      "use": [
        "Make one comparative sentence with \"-er than\" about animals."
      ],
      "speak": [
        "Speak for 30 seconds: Guide a safari tour and describe the animals around you!"
      ]
    }
  },
  "kids:c-ba-2": {
    "bossName": "Clock Master",
    "bossTitle": "Daily Routines from Dawn to Dusk",
    "bossAvatar": "⏰",
    "mission": "Describe your daily routine clock! Explain what time you wake up, what you do after school, and your bedtime habit.",
    "starterPhrase": "My day begins early at seven o'clock when I...",
    "powerWords": [
      "Wake up",
      "Do my homework",
      "Go to sleep"
    ],
    "targetGrammar": "Present Simple + Time expressions (at 7:00 AM, in the evening)",
    "checklist": [
      "Mention your morning routine",
      "Mention your afternoon activity",
      "Say what time you go to sleep"
    ],
    "rounds": {
      "remember": [
        "Name 3 routine verbs: brush teeth, eat lunch, do homework!"
      ],
      "use": [
        "Say \"I wake up at...\" and \"I play with friends after school.\""
      ],
      "speak": [
        "Speak for 30 seconds: Walk through your entire favorite day of the week!"
      ]
    }
  },
  "kids:c-ba-3": {
    "bossName": "Season Sorcerer",
    "bossTitle": "Four Seasons & Weather Holidays",
    "bossAvatar": "⛄",
    "mission": "Travel through the four seasons! Describe what you do in snowy winter, sunny summer, blooming spring, and windy autumn.",
    "starterPhrase": "My absolute favorite season is... because I can...",
    "powerWords": [
      "Snowy winter",
      "Sunny beach",
      "Build a snowman"
    ],
    "targetGrammar": "In + season / When it is + weather, I + verb",
    "checklist": [
      "Name your favorite season",
      "Describe the weather in that season",
      "Tell 2 fun outdoor activities you do"
    ],
    "rounds": {
      "remember": [
        "Say the 4 seasons: Spring, Summer, Autumn, Winter!"
      ],
      "use": [
        "Make a sentence with \"In summer, I go to...\" and \"In winter, I wear...\""
      ],
      "speak": [
        "Speak for 30 seconds: Describe your ultimate four-season vacation adventure!"
      ]
    }
  },
  "kids:c-ba-4": {
    "bossName": "Captain Speed",
    "bossTitle": "Transportation & Global Travel",
    "bossAvatar": "✈️",
    "mission": "Choose your vehicle and travel the world! Describe taking a bullet train, airplane, or cruise ship to an exciting destination.",
    "starterPhrase": "If I travel around the world, I take a fast...",
    "powerWords": [
      "Bullet train",
      "Airplane flight",
      "Exciting voyage"
    ],
    "targetGrammar": "By + transport (by train, by plane) / I want to travel to...",
    "checklist": [
      "Name 2 fast vehicles",
      "Say where you want to travel",
      "Describe what you see out the window"
    ],
    "rounds": {
      "remember": [
        "Name 3 vehicles: airplane, train, helicopter!"
      ],
      "use": [
        "Say \"I travel by plane to...\" and \"The train is very fast.\""
      ],
      "speak": [
        "Speak for 30 seconds: Narrate an around-the-world trip in your favorite vehicle!"
      ]
    }
  },
  "kids:c-ba-5": {
    "bossName": "Hero Commander",
    "bossTitle": "Community Helpers & Dream Jobs",
    "bossAvatar": "👩‍🚒",
    "mission": "Interview a community hero! Describe what firefighters, doctors, or police officers do to help our city.",
    "starterPhrase": "Community helpers are heroes because they...",
    "powerWords": [
      "Brave firefighter",
      "Helpful doctor",
      "Save people"
    ],
    "targetGrammar": "Third person Present Simple (He works at... / She helps...)",
    "checklist": [
      "Name 2 community helpers",
      "Describe where they work",
      "Tell what job you want to do when you grow up"
    ],
    "rounds": {
      "remember": [
        "Name 3 professions: doctor, firefighter, teacher!"
      ],
      "use": [
        "Say \"A doctor works in a hospital\" and \"Firefighters help people.\""
      ],
      "speak": [
        "Speak for 30 seconds: Describe your dream future career and how you will help people!"
      ]
    }
  },
  "kids:c-ba-6": {
    "bossName": "Forest Ranger",
    "bossTitle": "Nature, Forests & Camping Campfire",
    "bossAvatar": "🌲",
    "mission": "Tell a campfire story in the forest! Describe camping under the stars, setting up a tent, and spotting forest animals.",
    "starterPhrase": "Tonight we are camping in the forest, and I see...",
    "powerWords": [
      "Campfire",
      "Flashlight",
      "Under the stars"
    ],
    "targetGrammar": "Prepositions of place + There is / There are in nature",
    "checklist": [
      "Describe your campsite",
      "Name 2 things in your camping bag",
      "Mention a forest animal you hear at night"
    ],
    "rounds": {
      "remember": [
        "Name 3 camping items: tent, campfire, backpack!"
      ],
      "use": [
        "Make a sentence with \"We sit around the campfire\" and \"There are birds in the trees.\""
      ],
      "speak": [
        "Speak for 30 seconds: Tell an exciting forest camping adventure!"
      ]
    }
  },
  "kids:c-ba-7": {
    "bossName": "Hobby Champion",
    "bossTitle": "Passions, Sports & Creative Arts",
    "bossAvatar": "🎨",
    "mission": "Showcase your greatest hobbies! Explain why you love drawing, playing an instrument, or practicing sports.",
    "starterPhrase": "In my free time, I am passionate about...",
    "powerWords": [
      "Play soccer",
      "Paint pictures",
      "Practice every week"
    ],
    "targetGrammar": "Enjoy + verb-ing / Good at + verb-ing",
    "checklist": [
      "Name 2 hobbies you love",
      "Say how often you practice them",
      "Describe what makes you feel proud"
    ],
    "rounds": {
      "remember": [
        "Name 3 hobbies: painting, playing guitar, soccer!"
      ],
      "use": [
        "Say \"I enjoy painting pictures\" and \"I practice sports on weekends.\""
      ],
      "speak": [
        "Speak for 30 seconds: Inspire the class to try your favorite creative hobby!"
      ]
    }
  },
  "kids:c-ba-8": {
    "bossName": "Adventurer Legend",
    "bossTitle": "Adventurer Capstone Expedition",
    "bossAvatar": "🗺️",
    "mission": "Present your completed Adventurer map! Summarize your wild safari, camping journey, and dream career goals.",
    "starterPhrase": "I have finished my expedition as an Adventurer, and today I...",
    "powerWords": [
      "Expedition",
      "Map and compass",
      "Great achievement"
    ],
    "targetGrammar": "Level synthesis (Comparatives + Routines + Careers + Nature)",
    "checklist": [
      "Introduce your expedition mission",
      "Share your 2 biggest discoveries",
      "Give advice to new adventurers"
    ],
    "rounds": {
      "remember": [
        "Say 5 advanced Adventurer vocabulary words!"
      ],
      "use": [
        "Make two complex sentences comparing your favorite adventures."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your grand Adventurer expedition report!"
      ]
    }
  },
  "kids:c-bc-1": {
    "bossName": "Cosmic Commander",
    "bossTitle": "Mysteries of Outer Space & Galaxies",
    "bossAvatar": "🚀",
    "mission": "Mission Control to astronaut! Describe your rocket flight, landing on Mars, and observing shimmering rings of Saturn.",
    "starterPhrase": "Astronaut reporting to Earth: our spaceship is approaching...",
    "powerWords": [
      "Distant planet",
      "Shining galaxy",
      "Weightless gravity"
    ],
    "targetGrammar": "Future with will / Going to explore...",
    "checklist": [
      "Describe your space mission",
      "Name 2 celestial bodies (planet, asteroid, star)",
      "Explain what you will discover on Mars"
    ],
    "rounds": {
      "remember": [
        "Name 3 space objects: planet, rocket, astronaut!"
      ],
      "use": [
        "Say \"We will explore Mars\" and \"The spaceship is traveling fast.\""
      ],
      "speak": [
        "Speak for 30 seconds: Broadcast a live message from your spaceship to planet Earth!"
      ]
    }
  },
  "kids:c-bc-2": {
    "bossName": "Ocean Monarch",
    "bossTitle": "Deep Sea Creatures & Coral Reefs",
    "bossAvatar": "🐬",
    "mission": "Dive into the mysterious coral reefs! Describe swimming alongside playful dolphins, giant sea turtles, and colorful clownfish.",
    "starterPhrase": "Diving beneath the blue ocean waves, I discover...",
    "powerWords": [
      "Coral reef",
      "Friendly dolphin",
      "Protect the ocean"
    ],
    "targetGrammar": "Superlative adjectives (the deepest, the fastest, the most colorful)",
    "checklist": [
      "Name 3 ocean animals",
      "Use 1 superlative adjective",
      "Explain why we must protect coral reefs"
    ],
    "rounds": {
      "remember": [
        "Name 3 marine animals: dolphin, sea turtle, octopus!"
      ],
      "use": [
        "Say \"The blue whale is the biggest animal in the ocean.\""
      ],
      "speak": [
        "Speak for 30 seconds: Present an underwater documentary episode about reef life!"
      ]
    }
  },
  "kids:c-bc-3": {
    "bossName": "Dino King",
    "bossTitle": "Prehistoric Giants & Dinosaur World",
    "bossAvatar": "🦖",
    "mission": "Travel back in time to the Jurassic era! Describe encountering a towering Brachiosaurus and a mighty T-Rex near prehistoric volcanoes.",
    "starterPhrase": "Step back millions of years ago, when giant dinosaurs...",
    "powerWords": [
      "Towering T-Rex",
      "Prehistoric volcano",
      "Giant fossils"
    ],
    "targetGrammar": "Past Simple (lived, walked, roamed)",
    "checklist": [
      "Name 2 famous dinosaurs",
      "Describe how big and fast they were",
      "Tell what paleontologists find today"
    ],
    "rounds": {
      "remember": [
        "Say 3 dinosaur words: T-Rex, fossils, prehistoric!"
      ],
      "use": [
        "Say \"Dinosaurs lived millions of years ago\" and \"They were very big.\""
      ],
      "speak": [
        "Speak for 30 seconds: Guide the class through a live Jurassic dinosaur safari!"
      ]
    }
  },
  "kids:c-bc-4": {
    "bossName": "Tech Titan",
    "bossTitle": "Futuristic Inventions & Smart Robotics",
    "bossAvatar": "🤖",
    "mission": "Invent a futuristic smart gadget! Explain what your invention does, how it is powered, and how it solves a big world problem.",
    "starterPhrase": "I invented an incredible machine called the... which can...",
    "powerWords": [
      "Artificial intelligence",
      "Solar powered",
      "Solve problems"
    ],
    "targetGrammar": "Modal verbs (can, could, will help)",
    "checklist": [
      "Name your invention",
      "Explain how it works",
      "Describe how it makes life better for humanity"
    ],
    "rounds": {
      "remember": [
        "Name 3 tech words: robot, solar energy, invention!"
      ],
      "use": [
        "Say \"My robot can clean the oceans\" and \"It will help people every day.\""
      ],
      "speak": [
        "Speak for 30 seconds: Pitch your revolutionary invention to a panel of inventors!"
      ]
    }
  },
  "kids:c-bc-5": {
    "bossName": "Carnival Emperor",
    "bossTitle": "World Festivals, Fireworks & Parades",
    "bossAvatar": "🎆",
    "mission": "Host an international festival! Describe the colorful parades, traditional costumes, delicious street food, and musical beats.",
    "starterPhrase": "Welcome to our grand cultural festival, where people from all countries...",
    "powerWords": [
      "Colorful lanterns",
      "Dazzling fireworks",
      "Traditional music"
    ],
    "targetGrammar": "Descriptive adjectives + Present Simple celebrations",
    "checklist": [
      "Name the festival",
      "Describe what people wear and eat",
      "Explain how people dance and celebrate"
    ],
    "rounds": {
      "remember": [
        "Name 3 celebration words: fireworks, parade, costume!"
      ],
      "use": [
        "Say \"People celebrate with fireworks\" and \"We wear colorful traditional clothes.\""
      ],
      "speak": [
        "Speak for 30 seconds: Announce the opening ceremony of a spectacular world festival!"
      ]
    }
  },
  "kids:c-bc-6": {
    "bossName": "Planet Guardian",
    "bossTitle": "Eco-Heroes & Saving Planet Earth",
    "bossAvatar": "🌱",
    "mission": "Deliver an Eco-Hero pledge! Explain 3 actionable ways kids can protect nature by planting trees, saving clean water, and recycling.",
    "starterPhrase": "To protect our beautiful planet Earth, we must all...",
    "powerWords": [
      "Plant trees",
      "Recycle plastic",
      "Clean green energy"
    ],
    "targetGrammar": "Modals of obligation (We should / We must protect...)",
    "checklist": [
      "State 2 actions to save Earth",
      "Explain why nature is important",
      "Make a green pledge for your school"
    ],
    "rounds": {
      "remember": [
        "Name 3 eco words: recycling, save water, plant trees!"
      ],
      "use": [
        "Say \"We must recycle plastic bottles\" and \"We should plant more green trees.\""
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a powerful speech inspiring all kids to be Earth champions!"
      ]
    }
  },
  "kids:c-bc-7": {
    "bossName": "Grand Storyteller",
    "bossTitle": "Mythical Kingdoms & Magic Tales",
    "bossAvatar": "🏰",
    "mission": "Narrate a legendary fairytale! Tell how a brave young hero used cleverness and kindness to save the kingdom from a sleeping dragon.",
    "starterPhrase": "Once upon a time in a faraway kingdom, there lived a brave...",
    "powerWords": [
      "Enchanted castle",
      "Brave hero",
      "Magical adventure"
    ],
    "targetGrammar": "Past narrative sequence (Once upon a time, Then, Suddenly, In the end)",
    "checklist": [
      "Introduce the hero and setting",
      "Describe the magical challenge",
      "Conclude with a triumphant happy ending"
    ],
    "rounds": {
      "remember": [
        "Name 3 story words: castle, dragon, magic spell!"
      ],
      "use": [
        "Say \"Once upon a time, a hero traveled...\" and \"They saved the kingdom.\""
      ],
      "speak": [
        "Speak for 30 seconds: Tell your original magical fairytale from start to finish!"
      ]
    }
  },
  "kids:c-bc-8": {
    "bossName": "Supreme Champion",
    "bossTitle": "Kids English Champion Coronation",
    "bossAvatar": "👑",
    "mission": "Deliver your English Champion Coronation address! Celebrate your complete mastery of all grammar, vocabulary, and speaking skills.",
    "starterPhrase": "I am honored to stand before you as a crowned English Champion, because...",
    "powerWords": [
      "Fluency and confidence",
      "Crowned champion",
      "Bright future"
    ],
    "targetGrammar": "Grand Master synthesis (All tenses, adjectives, and expressive fluency)",
    "checklist": [
      "Reflect on your English journey",
      "Share your proudest achievement",
      "Declare your goal to speak English to the world"
    ],
    "rounds": {
      "remember": [
        "Say 5 champion words that describe your English superpower!"
      ],
      "use": [
        "Deliver two powerful sentences showing your fluent English mastery."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your grand graduation speech as the supreme English Champion!"
      ]
    }
  },
  "adults:c-bz-1": {
    "bossName": "Executive Host",
    "bossTitle": "Introduction & Personal Profile Boss",
    "bossAvatar": "👔",
    "mission": "Introduce yourself in a professional meeting! State your full name, your profession, your city, and greet the team warmly.",
    "starterPhrase": "Good morning everyone, my name is... and I am a...",
    "powerWords": [
      "Full name",
      "Profession",
      "Nice to meet you"
    ],
    "targetGrammar": "Present To Be (I am / My name is / I am from)",
    "checklist": [
      "Greet the room politely",
      "State name and job title",
      "Mention where you live"
    ],
    "rounds": {
      "remember": [
        "Say 3 introduction phrases: name, job title, and polite greeting."
      ],
      "use": [
        "Make 1 affirmative (I am...), 1 negative (I am not...), and 1 question (Are you...?)."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a clean, professional self-introduction to a new team."
      ]
    }
  },
  "adults:c-bz-2": {
    "bossName": "Scheduler Pro",
    "bossTitle": "Numbers, Schedules & Time Management Boss",
    "bossAvatar": "⏰",
    "mission": "Explain your typical working hours and meeting schedule! Mention what time you start work, when you take lunch, and when you finish.",
    "starterPhrase": "During the workweek, I usually begin my day at...",
    "powerWords": [
      "Eight thirty",
      "Lunch break",
      "Finish work"
    ],
    "targetGrammar": "Time expressions (at 8:30 AM, from... to...)",
    "checklist": [
      "State your start time",
      "Mention your lunch break",
      "State when you finish work"
    ],
    "rounds": {
      "remember": [
        "Say 3 time phrases: quarter past, half past, o'clock."
      ],
      "use": [
        "Make 1 affirmative time sentence, 1 negative, and 1 question asking for the time."
      ],
      "speak": [
        "Speak for 30 seconds: Walk through your daily workday schedule from morning to evening."
      ]
    }
  },
  "adults:c-bz-3": {
    "bossName": "Mood Navigator",
    "bossTitle": "Colors, Emotions & Professional Demeanor Boss",
    "bossAvatar": "🎨",
    "mission": "Describe your mood and work energy today! Explain how you feel about your current projects and what keeps you motivated.",
    "starterPhrase": "Today I feel very optimistic and focused because...",
    "powerWords": [
      "Confident",
      "Energetic",
      "Focused on targets"
    ],
    "targetGrammar": "Subject + To Be + Adjective of emotion",
    "checklist": [
      "State how you feel today",
      "Mention what projects motivate you",
      "Describe your preferred work outfit"
    ],
    "rounds": {
      "remember": [
        "Say 3 professional feeling adjectives: confident, enthusiastic, focused."
      ],
      "use": [
        "Make 1 sentence with \"I am feeling...\", 1 with \"I am not stressed\", and 1 question."
      ],
      "speak": [
        "Speak for 30 seconds: Share a positive status update on your mood and readiness for work."
      ]
    }
  },
  "adults:c-bz-4": {
    "bossName": "Family Liaison",
    "bossTitle": "Family & Possessive Relationships Boss",
    "bossAvatar": "👨‍👩‍👧",
    "mission": "Share your family background! Describe 2 or 3 family members, their professions, and where they live.",
    "starterPhrase": "In my family, my older brother works as a...",
    "powerWords": [
      "Older brother",
      "Spouse",
      "Proud of my family"
    ],
    "targetGrammar": "Possessives (my, his, her, their) + Family nouns",
    "checklist": [
      "Introduce 2 family members",
      "State their professions",
      "Mention where your family gathers"
    ],
    "rounds": {
      "remember": [
        "Say 3 family nouns and their possessive pronouns (my father, her sister)."
      ],
      "use": [
        "Make 1 sentence with \"My...\", 1 with \"His/Her...\", and 1 asking about someone's family."
      ],
      "speak": [
        "Speak for 30 seconds: Describe your family circle and what you enjoy doing together on holidays."
      ]
    }
  },
  "adults:c-bz-5": {
    "bossName": "City Planner",
    "bossTitle": "There Is / There Are & Urban Facilities Boss",
    "bossAvatar": "🏙️",
    "mission": "Describe the commercial facilities in your neighborhood or office district! Mention banks, coffee shops, and metro access.",
    "starterPhrase": "Around my office district, there is a modern...",
    "powerWords": [
      "There is a bank",
      "There are several restaurants",
      "Metro station"
    ],
    "targetGrammar": "There is (singular) / There are (plural)",
    "checklist": [
      "Name 2 singular facilities with \"There is\"",
      "Name plural facilities with \"There are\"",
      "Mention 1 missing service with \"There isn't\""
    ],
    "rounds": {
      "remember": [
        "Say 3 city locations: subway station, pharmacy, supermarket."
      ],
      "use": [
        "Make 1 \"There is...\", 1 \"There are...\", and 1 \"Is there a... nearby?\" question."
      ],
      "speak": [
        "Speak for 30 seconds: Give a guided overview of the best facilities and amenities near your office."
      ]
    }
  },
  "adults:c-bz-6": {
    "bossName": "Calendar Strategist",
    "bossTitle": "Months, Days & Ordinal Deadlines Boss",
    "bossAvatar": "🗓️",
    "mission": "State key milestone dates for the year! Mention your birthday, company anniversary, and upcoming project deadlines.",
    "starterPhrase": "Important calendar dates for our team include...",
    "powerWords": [
      "Fifteenth of August",
      "Quarterly deadline",
      "Annual review"
    ],
    "targetGrammar": "Preposition \"on\" + the + ordinal number + of + month",
    "checklist": [
      "State your birth date correctly",
      "Mention a work deadline with ordinal numbers",
      "Name your busiest month of the year"
    ],
    "rounds": {
      "remember": [
        "Say 3 ordinal numbers: first, fifteenth, thirty-first."
      ],
      "use": [
        "Make 1 sentence with \"My birthday is on...\", 1 with \"The deadline is on...\", and 1 date question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a fiscal calendar overview with three critical dates."
      ]
    }
  },
  "adults:c-bz-7": {
    "bossName": "Desk Organizer",
    "bossTitle": "Articles & Demonstratives (This, That, These, Those) Boss",
    "bossAvatar": "📄",
    "mission": "Demonstrate items on your workspace! Point out this laptop, that white board, and these important client contracts.",
    "starterPhrase": "On my workstation desk right here, this document is...",
    "powerWords": [
      "This report",
      "These contracts",
      "Those files over there"
    ],
    "targetGrammar": "Demonstratives (This / That / These / Those)",
    "checklist": [
      "Use \"this\" for a close singular item",
      "Use \"these\" for plural items",
      "Use \"that / those\" for distant items"
    ],
    "rounds": {
      "remember": [
        "Contrast this/these (near) vs that/those (far)."
      ],
      "use": [
        "Make 1 sentence with \"This is...\", 1 with \"These are...\", and 1 question with \"Is that...?\""
      ],
      "speak": [
        "Speak for 30 seconds: Give an inventory briefing of essential equipment and files on your desk."
      ]
    }
  },
  "adults:c-bz-8": {
    "bossName": "Wellness Advisor",
    "bossTitle": "Body Wellness & Domestic Pets Boss",
    "bossAvatar": "🐕",
    "mission": "Talk about physical wellness and pet companions! Describe how you maintain good posture, eye health, and relax with pets.",
    "starterPhrase": "To maintain my physical wellness at work, I protect my...",
    "powerWords": [
      "Back posture",
      "Eye strain",
      "Loyal companion"
    ],
    "targetGrammar": "Body vocabulary + Have/Has + To Be",
    "checklist": [
      "Mention 2 body care habits",
      "Describe your pet or favorite animal",
      "Tell how taking breaks helps your health"
    ],
    "rounds": {
      "remember": [
        "Say 3 health and body nouns: eyes, back, shoulders."
      ],
      "use": [
        "Make 1 sentence about body care, 1 about a pet, and 1 health question."
      ],
      "speak": [
        "Speak for 30 seconds: Share your personal routine for staying healthy and stress-free at work."
      ]
    }
  },
  "adults:c-bz-9": {
    "bossName": "Dining Concierge",
    "bossTitle": "Food, Hunger & Polite Requests Boss",
    "bossAvatar": "🍽️",
    "mission": "Place a polite order in a business dining setting! Request water, a healthy main course, and inquire about ingredients.",
    "starterPhrase": "Good afternoon, I would like to order a...",
    "powerWords": [
      "Would like",
      "Could I have",
      "The bill, please"
    ],
    "targetGrammar": "Polite modals (I would like + noun / Could I have + noun)",
    "checklist": [
      "Order a beverage politely",
      "Order a main dish with \"I would like\"",
      "Ask for the bill courteously"
    ],
    "rounds": {
      "remember": [
        "Say 3 polite restaurant phrases: I would like, could you please, the check please."
      ],
      "use": [
        "Make 1 affirmative request, 1 preference with \"I prefer...\", and 1 question to the server."
      ],
      "speak": [
        "Speak for 30 seconds: Roleplay placing a complete, sophisticated business lunch order."
      ]
    }
  },
  "adults:c-bz-10": {
    "bossName": "Location Guide",
    "bossTitle": "Office Directions & Prepositions of Place Boss",
    "bossAvatar": "🧭",
    "mission": "Direct a visitor to key spots in your building! Explain how to find the conference room, the cafeteria, and the elevators.",
    "starterPhrase": "To get to our executive conference room, you will find it...",
    "powerWords": [
      "Next to the elevators",
      "Across from reception",
      "On the third floor"
    ],
    "targetGrammar": "Prepositions of place (next to, between, across from, on the floor)",
    "checklist": [
      "Give 1 location using \"next to\"",
      "Give 1 location using \"across from\"",
      "State which floor a facility is on"
    ],
    "rounds": {
      "remember": [
        "Say 3 spatial prepositions: behind, in front of, next to."
      ],
      "use": [
        "Make 2 direction sentences and 1 question asking where the restroom or elevator is."
      ],
      "speak": [
        "Speak for 30 seconds: Provide clear building directions to a newly arrived client."
      ]
    }
  },
  "adults:c-adults-basic-zero-11": {
    "bossName": "Communication Coach",
    "bossTitle": "Classroom English & Communication Repair Boss",
    "bossAvatar": "🗣️",
    "mission": "Handle communication breakdowns diplomatically! Practice asking for repetition, spelling, clarification, and slower speech.",
    "starterPhrase": "Excuse me, could you please repeat that last point more...",
    "powerWords": [
      "Pardon me",
      "Could you clarify",
      "More slowly, please"
    ],
    "targetGrammar": "Polite clarification frames (Could you please... / What does ... mean?)",
    "checklist": [
      "Ask to repeat something slowly",
      "Ask what a specific term means",
      "Confirm you understood the final message"
    ],
    "rounds": {
      "remember": [
        "Say 3 repair phrases: Could you repeat that? What does that mean? How do you say...?"
      ],
      "use": [
        "Formulate 2 clarification requests and 1 acknowledgment (I understand now)."
      ],
      "speak": [
        "Speak for 30 seconds: Handle a simulated unclear phone call and clarify all critical details."
      ]
    }
  },
  "adults:c-adults-basic-zero-12": {
    "bossName": "Identity Registrar",
    "bossTitle": "Alphabet, Spelling & Official Credentials Boss",
    "bossAvatar": "🔤",
    "mission": "Spell out your contact details with precision! Spell your last name, company email address, and professional username.",
    "starterPhrase": "Certainly, my last name is spelled...",
    "powerWords": [
      "Spelled as",
      "At sign (@)",
      "Dot com (.com)"
    ],
    "targetGrammar": "Spelling with English alphabet / Email formatting",
    "checklist": [
      "Spell your surname letter by letter",
      "Pronounce email symbols (@, .)",
      "Confirm registration details clearly"
    ],
    "rounds": {
      "remember": [
        "Spell 3 common tricky letters: G vs J, E vs I, B vs V."
      ],
      "use": [
        "Make 1 sentence with \"My email is spelled...\", and 1 question \"How do you spell that?\""
      ],
      "speak": [
        "Speak for 30 seconds: Register your credentials over the phone with accurate alphabet spelling."
      ]
    }
  },
  "adults:c-adults-basic-zero-13": {
    "bossName": "Global Diplomat",
    "bossTitle": "Countries, Nationalities & International Origins Boss",
    "bossAvatar": "🌐",
    "mission": "Present an international team profile! State your country of origin, nationality, primary language, and current city of residence.",
    "starterPhrase": "I am originally from... so my nationality is... and I currently live in...",
    "powerWords": [
      "Country of origin",
      "Nationality",
      "Native language"
    ],
    "targetGrammar": "From + Country / To Be + Nationality adjective",
    "checklist": [
      "State country and nationality",
      "Mention languages you speak",
      "Describe another international colleague"
    ],
    "rounds": {
      "remember": [
        "Contrast 3 country/nationality pairs: Colombia/Colombian, Canada/Canadian, Japan/Japanese."
      ],
      "use": [
        "Make 1 sentence with \"I am from...\", 1 with \"She is [nationality]\", and 1 origin question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a global background summary for an international conference bio."
      ]
    }
  },
  "adults:c-adults-basic-zero-14": {
    "bossName": "Career Architect",
    "bossTitle": "Professions & Corporate Roles Boss",
    "bossAvatar": "💼",
    "mission": "Pitch your professional career profile! Describe what you do, your primary daily responsibilities, and your industry sector.",
    "starterPhrase": "As a professional in the... industry, my main responsibility is...",
    "powerWords": [
      "Software engineer",
      "Project manager",
      "Responsible for"
    ],
    "targetGrammar": "A / An + Profession + responsible for + noun",
    "checklist": [
      "State your exact professional title",
      "Use \"an / a\" correctly with vowels/consonants",
      "List 2 core responsibilities"
    ],
    "rounds": {
      "remember": [
        "Say 3 corporate professions: Financial Analyst, Operations Manager, Human Resources Director."
      ],
      "use": [
        "Make 1 sentence with \"I work as an...\", 1 with \"My role involves...\", and 1 career question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a compelling 30-second elevator pitch of your professional role."
      ]
    }
  },
  "adults:c-adults-basic-zero-15": {
    "bossName": "Emergency Coordinator",
    "bossTitle": "Family Profiles & Emergency Protocols Boss",
    "bossAvatar": "🆘",
    "mission": "Complete an emergency contact briefing! Designate your primary contact, state their relationship to you, their phone number and city.",
    "starterPhrase": "In case of an emergency, my primary contact person is...",
    "powerWords": [
      "Emergency contact",
      "Relationship",
      "Available at"
    ],
    "targetGrammar": "Possessives + Contact information structures",
    "checklist": [
      "Designate emergency contact by name",
      "State relation (spouse, brother, parent)",
      "Provide location and availability details"
    ],
    "rounds": {
      "remember": [
        "Say 3 emergency terms: emergency contact, phone number, relationship."
      ],
      "use": [
        "Make 1 sentence designating your contact, 1 stating their location, and 1 confirmation question."
      ],
      "speak": [
        "Speak for 30 seconds: Confirm all vital emergency contact data during employee onboarding."
      ]
    }
  },
  "adults:c-adults-basic-zero-16": {
    "bossName": "Grand Chancellor",
    "bossTitle": "Basic Zero Executive Capstone Boss",
    "bossAvatar": "🏆",
    "mission": "Synthesize all Basic Zero communication! Introduce yourself, state your profession, origin, emergency contact, and workplace schedule.",
    "starterPhrase": "Good day, I am pleased to present my complete personal and professional profile...",
    "powerWords": [
      "Professional profile",
      "Fluent introduction",
      "Ready for Basic 1"
    ],
    "targetGrammar": "Grand Basic Zero synthesis (To Be + Demonstratives + Time + Professions)",
    "checklist": [
      "Cover identity, origin and job",
      "State working schedule and location",
      "Close with confident enthusiasm"
    ],
    "rounds": {
      "remember": [
        "Say 5 essential expressions that summarize your Basic Zero progress!"
      ],
      "use": [
        "Formulate 2 complex sentences combining personal and corporate background."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your grand Basic Zero graduation speech!"
      ]
    }
  },
  "adults:c-adults-basic-1-1": {
    "bossName": "Workflow Strategist",
    "bossTitle": "Present Simple Team Habits (I, You, We, They) Boss",
    "bossAvatar": "👥",
    "mission": "Explain your department's weekly workflow habits! Describe what your team does on Mondays, how you collaborate, and shared goals.",
    "starterPhrase": "Every week, our team begins on Monday by...",
    "powerWords": [
      "Review deliverables",
      "Collaborate closely",
      "Meet deadlines"
    ],
    "targetGrammar": "Present Simple base verbs with plural subjects (We review, they manage)",
    "checklist": [
      "Describe Monday team routines",
      "State what you and your colleagues do together",
      "Mention one shared weekly deliverable"
    ],
    "rounds": {
      "remember": [
        "Say 3 team action verbs: analyze, coordinate, deliver."
      ],
      "use": [
        "Make 1 affirmative (We collaborate), 1 negative (We don't waste time), and 1 question."
      ],
      "speak": [
        "Speak for 30 seconds: Walk through your team's weekly operating rhythm and key habits."
      ]
    }
  },
  "adults:c-adults-basic-1-2": {
    "bossName": "Executive Supervisor",
    "bossTitle": "Present Simple 3rd Person (He, She, It) Boss",
    "bossAvatar": "👩‍💼",
    "mission": "Profile an outstanding colleague or manager! Describe what she oversees, how he manages projects, and why they excel.",
    "starterPhrase": "My manager oversees the international department and always...",
    "powerWords": [
      "Manages operations",
      "Coordinates clients",
      "Delivers results"
    ],
    "targetGrammar": "Third person singular verb endings (-s, -es, -ies)",
    "checklist": [
      "Describe manager's daily actions with -s",
      "State what she manages",
      "Mention one project he leads"
    ],
    "rounds": {
      "remember": [
        "Conjugate 3 verbs for 3rd person: manages, oversees, organizes."
      ],
      "use": [
        "Make 2 sentences with He/She + verb-s and 1 question with \"Does he/she...?\""
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a professional performance commendation for your colleague."
      ]
    }
  },
  "adults:c-adults-basic-1-3": {
    "bossName": "Compliance Auditor",
    "bossTitle": "Present Simple Negatives & Question Inquiries Boss",
    "bossAvatar": "🔍",
    "mission": "Conduct a workplace inquiry! Ask 2 critical questions about coworker schedules and clarify what your team does not do.",
    "starterPhrase": "To clarify project protocols, does your team currently...?",
    "powerWords": [
      "Does he work remotely",
      "We do not handle",
      "Do they approve"
    ],
    "targetGrammar": "Do / Does / Don't / Doesn't + base verb",
    "checklist": [
      "Ask 1 question with \"Do you...?\"",
      "Ask 1 question with \"Does he/she...?\"",
      "Make 1 negative statement with \"We don't...\""
    ],
    "rounds": {
      "remember": [
        "Say 3 auxiliary patterns: Do they? Does she? We don't."
      ],
      "use": [
        "Make 1 negative sentence with doesn't, 1 with don't, and 1 question with Does."
      ],
      "speak": [
        "Speak for 30 seconds: Audit a workflow and establish clear boundaries on what your team does and doesn't handle."
      ]
    }
  },
  "adults:c-adults-basic-1-4": {
    "bossName": "Operations Director",
    "bossTitle": "Jobs, Workplaces & Work Routines Boss",
    "bossAvatar": "🏭",
    "mission": "Describe different specialized roles in your organization! Contrast the engineering lab, the sales floor, and the executive suite.",
    "starterPhrase": "Across our organization, professionals work in different environments; for instance...",
    "powerWords": [
      "Engineering team",
      "Corporate office",
      "Analyze software"
    ],
    "targetGrammar": "Professions + action verbs + workplace prepositions (in the office, at the site)",
    "checklist": [
      "Describe role 1 in an office setting",
      "Describe role 2 on a technical site",
      "Explain how both roles interconnect"
    ],
    "rounds": {
      "remember": [
        "Say 3 workplace environments: open-plan office, laboratory, manufacturing plant."
      ],
      "use": [
        "Make 2 sentences connecting professions with locations and 1 job routine question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a comprehensive departmental overview of organizational roles."
      ]
    }
  },
  "adults:c-adults-basic-1-5": {
    "bossName": "Time Optimizer",
    "bossTitle": "Daily Schedules & Time Management Boss",
    "bossAvatar": "⏱️",
    "mission": "Present your ideal high-productivity workday schedule! Detail your morning focus block, afternoon meetings, and evening wind-down.",
    "starterPhrase": "To maximize my productivity, I structure my workday by starting at...",
    "powerWords": [
      "Deep focus block",
      "Prioritize emails",
      "Wrap up the day"
    ],
    "targetGrammar": "Time prepositions (before lunch, after 2:00 PM, by 5:00 PM)",
    "checklist": [
      "Describe morning routine with time markers",
      "Explain afternoon meeting structure",
      "State how you wrap up before leaving"
    ],
    "rounds": {
      "remember": [
        "Say 3 sequencing time phrases: before lunch, in the early afternoon, prior to leaving."
      ],
      "use": [
        "Make 1 sentence with \"before...\", 1 with \"after...\", and 1 question about schedule habits."
      ],
      "speak": [
        "Speak for 30 seconds: Share your master daily productivity blueprint with the team."
      ]
    }
  },
  "adults:c-adults-basic-1-6": {
    "bossName": "Frequency Maestro",
    "bossTitle": "Adverbs of Frequency (Always, Usually, Never) Boss",
    "bossAvatar": "📊",
    "mission": "Explain your quality control and risk habits! Tell what you always double-check, usually review, and never overlook.",
    "starterPhrase": "In our operational workflow, we always ensure that...",
    "powerWords": [
      "Always verify",
      "Usually schedule",
      "Never overlook errors"
    ],
    "targetGrammar": "Placement of adverbs of frequency before main verbs (always double-check)",
    "checklist": [
      "Use \"always\" with a quality habit",
      "Use \"usually\" with a standard routine",
      "Use \"never\" with a safety/error boundary"
    ],
    "rounds": {
      "remember": [
        "Say 4 frequency adverbs in order: always, usually, rarely, never."
      ],
      "use": [
        "Make 1 sentence with always, 1 with usually, and 1 with never before the verb."
      ],
      "speak": [
        "Speak for 30 seconds: Present your quality assurance rules and professional standards."
      ]
    }
  },
  "adults:c-adults-basic-1-7": {
    "bossName": "Executive Maitre",
    "bossTitle": "Restaurant Orders & Hospitality Etiquette Boss",
    "bossAvatar": "🍷",
    "mission": "Host a formal business dinner! Greet the server, order appetizers and main courses for the table, and request the bill politely.",
    "starterPhrase": "Good evening. To start our dinner, could we please have...",
    "powerWords": [
      "Sparkling water",
      "Chef's recommendation",
      "Separate the check"
    ],
    "targetGrammar": "Could we have / I would recommend / We would like to order",
    "checklist": [
      "Order appetizers for the table",
      "State main course preferences",
      "Request billing arrangements professionally"
    ],
    "rounds": {
      "remember": [
        "Say 3 hospitality phrases: Could we please see the menu? What do you recommend? May we have the bill?"
      ],
      "use": [
        "Make 2 polite request sentences and 1 inquiry regarding dietary options."
      ],
      "speak": [
        "Speak for 30 seconds: Lead a seamless, polished business dinner ordering experience."
      ]
    }
  },
  "adults:c-adults-basic-1-8": {
    "bossName": "Inventory Controller",
    "bossTitle": "Groceries, Quantities & Some/Any Supply Boss",
    "bossAvatar": "📦",
    "mission": "Audit your office kitchen or supply room inventory! State what supplies you have plenty of, what you need, and what is missing.",
    "starterPhrase": "Reviewing our office supply inventory, we have some...",
    "powerWords": [
      "Some fresh coffee",
      "Do not have any printer paper",
      "A few extra pens"
    ],
    "targetGrammar": "Some in affirmatives / Any in negatives and questions / Quantifiers",
    "checklist": [
      "Use \"some\" with available items",
      "Use \"any\" with exhausted supplies",
      "Formulate 1 question with \"Do we have any...?\""
    ],
    "rounds": {
      "remember": [
        "Contrast \"some\" (affirmative) vs \"any\" (negative/question)."
      ],
      "use": [
        "Make 1 sentence with some, 1 with not any, and 1 question with any."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an office supply replenishment report."
      ]
    }
  },
  "adults:c-adults-basic-1-9": {
    "bossName": "Work-Life Balance Coach",
    "bossTitle": "Hobbies & Preferences with Gerund (-ing) Boss",
    "bossAvatar": "🧘‍♂️",
    "mission": "Discuss how you disconnect and recharge outside of work! Describe practicing sports, reading industry books, or outdoor hobbies.",
    "starterPhrase": "Outside of my professional routine, I genuinely enjoy...",
    "powerWords": [
      "Enjoy practicing yoga",
      "Love reading non-fiction",
      "Prefer cooking at home"
    ],
    "targetGrammar": "Enjoy / Love / Prefer / Dislike + Gerund (-ing)",
    "checklist": [
      "Mention 1 hobby with \"enjoy + ing\"",
      "Mention 1 preference with \"prefer + ing\"",
      "Explain how this hobby boosts your focus"
    ],
    "rounds": {
      "remember": [
        "Say 3 gerund hobby phrases: cycling outdoors, practicing mindfulness, playing chess."
      ],
      "use": [
        "Make 1 sentence with \"I love...\", 1 with \"I avoid...\", and 1 hobby inquiry question."
      ],
      "speak": [
        "Speak for 30 seconds: Share your personal strategies for maintaining work-life harmony through active hobbies."
      ]
    }
  },
  "adults:c-adults-basic-1-10": {
    "bossName": "Level 1 Dean",
    "bossTitle": "Basic 1 Master Synthesis & Review Boss",
    "bossAvatar": "🎓",
    "mission": "Synthesize your complete Basic 1 fluency! Deliver a comprehensive presentation of your role, habits, frequencies, and hobbies.",
    "starterPhrase": "I am proud to present my comprehensive professional and personal profile...",
    "powerWords": [
      "Weekly operating rhythm",
      "Core responsibilities",
      "Balanced lifestyle"
    ],
    "targetGrammar": "Basic 1 synthesis (Present Simple + Adverbs + Quantifiers + Gerunds)",
    "checklist": [
      "Summarize your daily workplace habits",
      "State your quality assurance rules",
      "Close with your personal wellness balance"
    ],
    "rounds": {
      "remember": [
        "Say 5 advanced verbs and adverbs from Basic 1."
      ],
      "use": [
        "Formulate 2 complex sentences combining routines, frequencies, and preferences."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Basic 1 graduation speech with poise and fluency!"
      ]
    }
  },
  "adults:c-b2-1": {
    "bossName": "Productivity Architect",
    "bossTitle": "Workweek Habits & Operational Rhythm Boss",
    "bossAvatar": "📋",
    "mission": "Present your weekly professional agenda! Explain how you structure meetings, deep focus tasks, and client communications.",
    "starterPhrase": "Throughout my standard workweek, I prioritize tasks by...",
    "powerWords": [
      "Prioritize objectives",
      "Block deep focus time",
      "Track milestones"
    ],
    "targetGrammar": "Present Simple + Frequency modifiers (usually, every morning)",
    "checklist": [
      "Explain how you begin Monday",
      "Detail mid-week meeting flow",
      "State your end-of-week review method"
    ],
    "rounds": {
      "remember": [
        "Say 3 productivity phrases: prioritize tasks, schedule meetings, track deliverables."
      ],
      "use": [
        "Make 2 habit statements and 1 question regarding weekly project check-ins."
      ],
      "speak": [
        "Speak for 30 seconds: Present your optimized workweek management strategy."
      ]
    }
  },
  "adults:c-b2-2": {
    "bossName": "Agile Coordinator",
    "bossTitle": "Present Progressive for Live Operations Boss",
    "bossAvatar": "🔄",
    "mission": "Give a live standup status report! Describe exactly what tasks your team is executing right now and what is in progress.",
    "starterPhrase": "In our live standup update today, our engineering team is currently...",
    "powerWords": [
      "Currently developing",
      "Reviewing the draft",
      "Testing features"
    ],
    "targetGrammar": "Present Progressive (Subject + be + verb-ing + right now / currently)",
    "checklist": [
      "Describe your immediate task in progress",
      "Describe a colleague's live task",
      "State what the team is preparing for tomorrow"
    ],
    "rounds": {
      "remember": [
        "Say 3 active project verbs in -ing: developing, reviewing, coordinating."
      ],
      "use": [
        "Make 1 sentence with \"I am currently...\", 1 with \"We are not...\", and 1 status question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a live Agile sprint standup report on active deliverables."
      ]
    }
  },
  "adults:c-b2-3": {
    "bossName": "Networking Director",
    "bossTitle": "Professional Invitations & Future Networking Boss",
    "bossAvatar": "🤝",
    "mission": "Extend a formal business invitation! Invite a partner or client to a lunch briefing, product demo, or industry dinner.",
    "starterPhrase": "I would like to cordially invite your team to join us for...",
    "powerWords": [
      "Would you be interested in",
      "Cordially invite",
      "Discuss future synergy"
    ],
    "targetGrammar": "Would you like to + verb / How about + gerund / Let's meet...",
    "checklist": [
      "State the purpose of the meeting",
      "Propose a specific date and venue",
      "Close with a warm professional invitation"
    ],
    "rounds": {
      "remember": [
        "Say 3 formal invitation starters: Would you like to, We would be delighted if, Are you free to..."
      ],
      "use": [
        "Make 1 invitation, 1 follow-up detail with time, and 1 question asking about their availability."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a polished, persuasive business invitation to a strategic partner."
      ]
    }
  },
  "adults:c-b2-4": {
    "bossName": "Operations Controller",
    "bossTitle": "Present Simple vs Present Continuous Boss",
    "bossAvatar": "🏢",
    "mission": "Contrast your regular routines with current temporary projects! Explain what you normally do versus what you are handling this week.",
    "starterPhrase": "Normally, I manage client relations, but this week I am handling...",
    "powerWords": [
      "Usually supervise",
      "Temporarily leading",
      "This month we are transitioning"
    ],
    "targetGrammar": "Contrast Simple vs Continuous (I usually [verb], but today I am [verb-ing])",
    "checklist": [
      "State your usual habit with \"usually\"",
      "State your temporary project with \"this week I am...\"",
      "Explain why this change is occurring"
    ],
    "rounds": {
      "remember": [
        "Contrast permanent routine (Present Simple) vs temporary action (Present Continuous)."
      ],
      "use": [
        "Make 1 compound sentence with \"usually..., but today...\", and 1 contrast question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a clear operational breakdown of routine vs special project assignments."
      ]
    }
  },
  "adults:c-adults-basic-2-5": {
    "bossName": "Strategic Consultant",
    "bossTitle": "State Verbs vs Dynamic Action Verbs Boss",
    "bossAvatar": "💡",
    "mission": "Express strategic viewpoints using stative verbs! Explain what you believe, understand, and agree with regarding a project proposal.",
    "starterPhrase": "Having reviewed the commercial proposal, I understand the objectives and believe that...",
    "powerWords": [
      "Fully understand",
      "Agree with the approach",
      "Recognize the value"
    ],
    "targetGrammar": "Stative verbs in simple form (understand, believe, know, agree, prefer)",
    "checklist": [
      "Use \"understand\" with project scope",
      "Use \"agree with\" or \"prefer\" regarding terms",
      "Avoid using -ing with stative verbs"
    ],
    "rounds": {
      "remember": [
        "Say 4 common stative verbs: understand, believe, know, contain."
      ],
      "use": [
        "Make 2 sentences using stative verbs in simple present and 1 opinion inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an executive opinion on a business proposal using precise stative verbs."
      ]
    }
  },
  "adults:c-adults-basic-2-6": {
    "bossName": "Climate & Supply Analyst",
    "bossTitle": "Weather & Seasonal Business Operations Boss",
    "bossAvatar": "🌦️",
    "mission": "Analyze how seasonal weather patterns impact your industry! Describe how rain, summer heat, or winter holidays affect operations.",
    "starterPhrase": "In our business vertical, weather and seasonal shifts influence...",
    "powerWords": [
      "Seasonal fluctuations",
      "Peak summer demand",
      "Inclement weather delays"
    ],
    "targetGrammar": "In + season / When the weather is... / Operations increase or decrease",
    "checklist": [
      "Describe summer business trends",
      "Describe winter or rainy season logistics",
      "Provide 1 recommendation for seasonal planning"
    ],
    "rounds": {
      "remember": [
        "Say 3 weather adjectives: humid, freezing, scorching."
      ],
      "use": [
        "Make 1 sentence about seasonal impact, 1 about operational adjustments, and 1 climate question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a seasonal risk and opportunity analysis for your company."
      ]
    }
  },
  "adults:c-adults-basic-2-7": {
    "bossName": "Protocol Officer",
    "bossTitle": "Imperatives for Business Instructions Boss",
    "bossAvatar": "📢",
    "mission": "Deliver standard operating procedures (SOP)! Give clear, polite step-by-step instructions for security, data backup, and client onboarding.",
    "starterPhrase": "To ensure strict operational compliance, please follow these key steps: first...",
    "powerWords": [
      "Ensure data backup",
      "Do not disclose credentials",
      "Verify compliance"
    ],
    "targetGrammar": "Imperatives (Base verbs for orders / Please + verb / Do not + verb for warnings)",
    "checklist": [
      "Give 2 positive instructions with base verbs",
      "Give 1 critical negative warning with \"Do not\"",
      "Use polite framing with \"Please ensure\""
    ],
    "rounds": {
      "remember": [
        "Say 3 instructional action verbs: configure, verify, archive."
      ],
      "use": [
        "Make 2 affirmative imperative instructions and 1 negative security warning."
      ],
      "speak": [
        "Speak for 30 seconds: Lead a standard operating procedure (SOP) briefing for new employees."
      ]
    }
  },
  "adults:c-adults-basic-2-8": {
    "bossName": "Urban Navigator",
    "bossTitle": "Street Directions & Route Guidance Boss",
    "bossAvatar": "🗺️",
    "mission": "Provide detailed street navigation to your corporate headquarters! Guide a visiting client from the airport or central station to your door.",
    "starterPhrase": "When you exit the main metro terminal, turn right and walk...",
    "powerWords": [
      "Walk two blocks",
      "Take the exit toward",
      "Located on your left"
    ],
    "targetGrammar": "Directional imperatives + Sequential transitions (Turn left, go straight, cross the avenue)",
    "checklist": [
      "Give initial turn instruction",
      "Provide distance or landmark landmark reference",
      "Confirm final building entrance location"
    ],
    "rounds": {
      "remember": [
        "Say 3 navigational landmarks: intersection, roundabout, pedestrian crosswalk."
      ],
      "use": [
        "Make 2 sequential direction sentences and 1 confirmation question."
      ],
      "speak": [
        "Speak for 30 seconds: Give effortless, step-by-step route directions to an international executive."
      ]
    }
  },
  "adults:c-adults-basic-2-9": {
    "bossName": "Telecom Director",
    "bossTitle": "Professional Telephone Etiquette Boss",
    "bossAvatar": "📞",
    "mission": "Conduct a formal telephone exchange! Introduce your company, ask to be transferred to the right executive, and leave a detailed message.",
    "starterPhrase": "Good afternoon, this is [Name] calling on behalf of... May I please speak with...",
    "powerWords": [
      "Calling on behalf of",
      "May I leave a message",
      "Reach me at this extension"
    ],
    "targetGrammar": "Formal phone formulas (May I speak to / Could you put me through to / I am calling regarding)",
    "checklist": [
      "State your name and company clearly",
      "Request transfer to specific person/department",
      "Leave a clear callback number and purpose"
    ],
    "rounds": {
      "remember": [
        "Say 3 formal phone phrases: May I ask who is calling? Hold the line, please. I will pass the message."
      ],
      "use": [
        "Make 1 formal transfer request, 1 purpose statement, and 1 contact confirmation question."
      ],
      "speak": [
        "Speak for 30 seconds: Execute a high-stakes professional phone call and message briefing."
      ]
    }
  },
  "adults:c-adults-basic-2-10": {
    "bossName": "Review Master",
    "bossTitle": "Present Simple vs Continuous Mastery Boss",
    "bossAvatar": "🎯",
    "mission": "Synthesize your mastery of present tenses! Explain your annual business cycle, weekly routines, and the high-priority project you are leading today.",
    "starterPhrase": "Our company routinely provides services across the country, and currently we are...",
    "powerWords": [
      "Core business model",
      "Currently executing",
      "Strategic evolution"
    ],
    "targetGrammar": "Comprehensive Simple vs Progressive distinction",
    "checklist": [
      "Describe overall organizational routine",
      "Detail your current live sprint focus",
      "Explain upcoming strategic transitions"
    ],
    "rounds": {
      "remember": [
        "Identify 3 key differences between habits and in-progress actions."
      ],
      "use": [
        "Formulate 2 complex comparative sentences contrasting recurring vs current actions."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an executive operations overview contrasting regular vs live projects."
      ]
    }
  },
  "adults:c-adults-basic-2-11": {
    "bossName": "Enterprise Pioneer",
    "bossTitle": "Level 2 Capstone Business Launch Boss",
    "bossAvatar": "🚀",
    "mission": "Deliver your Level 2 Grand Business Launch presentation! Announce your new service offering, describe current team preparations, and invite client adoption.",
    "starterPhrase": "We are thrilled to officially announce that our enterprise is launching...",
    "powerWords": [
      "Innovative solution",
      "Currently onboarding clients",
      "Transformative value"
    ],
    "targetGrammar": "Level 2 synthesis (Present tenses + Imperatives + Invitations + Stative verbs)",
    "checklist": [
      "Announce the new product/service",
      "Explain what the team is doing right now to deploy it",
      "Invite clients to book an introductory briefing"
    ],
    "rounds": {
      "remember": [
        "Say 5 executive terms from Level 2."
      ],
      "use": [
        "Deliver 2 high-impact launch statements combining present simple and continuous."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your grand Level 2 Capstone launch pitch with authority!"
      ]
    }
  },
  "adults:c-adults-basic-3-1": {
    "bossName": "Talent Assessor",
    "bossTitle": "Can / Can't for Workplace Abilities Boss",
    "bossAvatar": "💪",
    "mission": "Pitch your professional skill matrix! Highlight 3 core competencies you can perform masterfully and 1 emerging skill you are developing.",
    "starterPhrase": "In terms of technical capabilities, I can efficiently manage...",
    "powerWords": [
      "Can analyze complex data",
      "Can lead cross-functional teams",
      "Cannot write backend code yet"
    ],
    "targetGrammar": "Can / Cannot + base verb",
    "checklist": [
      "Highlight 2 strong capabilities with \"can\"",
      "State 1 limitation honestly with \"cannot yet\"",
      "Explain how your skills drive business value"
    ],
    "rounds": {
      "remember": [
        "Say 3 advanced skill verbs: optimize, troubleshoot, negotiate."
      ],
      "use": [
        "Make 1 sentence with \"I can...\", 1 with \"I cannot...\", and 1 question assessing a colleague's skills."
      ],
      "speak": [
        "Speak for 30 seconds: Present a concise, compelling self-assessment of your professional capabilities."
      ]
    }
  },
  "adults:c-adults-basic-3-2": {
    "bossName": "Diplomatic Liaison",
    "bossTitle": "Permissions & Polite Requests with Could Boss",
    "bossAvatar": "📜",
    "mission": "Make diplomatic requests in a negotiation! Politely request document revisions, timeline extensions, and stakeholder access.",
    "starterPhrase": "To facilitate our mutual progress, could you please provide...",
    "powerWords": [
      "Could you grant access",
      "Would it be possible to",
      "I would appreciate your approval"
    ],
    "targetGrammar": "Could you please + base verb / Could I + base verb",
    "checklist": [
      "Make 1 formal request for information with \"Could you\"",
      "Make 1 request for permission with \"Could I\"",
      "Close with professional courtesy"
    ],
    "rounds": {
      "remember": [
        "Say 3 polite request formulas: Could you please, Would you mind, May I request."
      ],
      "use": [
        "Make 2 polite request sentences and 1 confirmation inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Lead a diplomatic negotiation session making refined corporate requests."
      ]
    }
  },
  "adults:c-adults-basic-3-3": {
    "bossName": "Compliance Officer",
    "bossTitle": "Obligations: Have to / Must / Don't have to Boss",
    "bossAvatar": "⚖️",
    "mission": "Explain organizational rules and statutory requirements! Detail what staff must do by law, what is optional, and strict project deadlines.",
    "starterPhrase": "According to our regulatory compliance framework, all employees have to...",
    "powerWords": [
      "Have to submit audits",
      "Must adhere to protocols",
      "Do not have to attend optionally"
    ],
    "targetGrammar": "Have to (external rule) / Must (urgent duty) / Don't have to (lack of obligation)",
    "checklist": [
      "State 1 mandatory rule with \"have to\"",
      "State 1 critical duty with \"must\"",
      "State 1 optional policy with \"don't have to\""
    ],
    "rounds": {
      "remember": [
        "Contrast \"have to\" (obligation) vs \"don't have to\" (optional)."
      ],
      "use": [
        "Make 1 sentence with have to, 1 with must not (prohibition), and 1 with don't have to."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a clear corporate compliance and policy briefing."
      ]
    }
  },
  "adults:c-adults-basic-3-4": {
    "bossName": "Executive Stylist",
    "bossTitle": "Workplace Attire & Professional Identification Boss",
    "bossAvatar": "👔",
    "mission": "Describe executive profiles and office dress codes! Identify colleagues in a boardroom by their attire and role.",
    "starterPhrase": "In our executive meetings, the director wearing the dark blazer is...",
    "powerWords": [
      "Business formal attire",
      "Wearing a navy suit",
      "Executive presence"
    ],
    "targetGrammar": "Participle identification (The person wearing... is...) / Dress code descriptions",
    "checklist": [
      "Describe appropriate office attire",
      "Identify a specific colleague by what they are wearing",
      "State the dress code policy for client meetings"
    ],
    "rounds": {
      "remember": [
        "Say 3 corporate attire terms: tailored blazer, business casual, formal dress code."
      ],
      "use": [
        "Make 1 sentence with \"The manager wearing...\", and 1 describing company dress standards."
      ],
      "speak": [
        "Speak for 30 seconds: Present professional image and dress guidelines for client-facing teams."
      ]
    }
  },
  "adults:c-adults-basic-3-5": {
    "bossName": "Urban Mobility Analyst",
    "bossTitle": "Commuting Options & Transit Choices Boss",
    "bossAvatar": "🚆",
    "mission": "Evaluate urban commuting strategies! Compare subway lines, ride-sharing, and cycling, and explain your choice to maximize punctuality.",
    "starterPhrase": "To ensure punctual arrival every morning, I choose to take...",
    "powerWords": [
      "Express transit route",
      "Avoid morning gridlock",
      "Eco-friendly commute"
    ],
    "targetGrammar": "Infinitive of purpose (I take the metro to avoid traffic) / By + transport",
    "checklist": [
      "State your chosen commute mode",
      "Explain the purpose using \"to + verb\"",
      "Compare your commute with driving a private vehicle"
    ],
    "rounds": {
      "remember": [
        "Say 3 transit verbs: commute, transfer lines, avoid traffic."
      ],
      "use": [
        "Make 2 sentences with purpose infinitives (to save time, to avoid delays) and 1 transit question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a corporate urban mobility analysis promoting efficient commuting."
      ]
    }
  },
  "adults:c-adults-basic-3-6": {
    "bossName": "Historian of Records",
    "bossTitle": "Past To Be: Was / Were at Key Events Boss",
    "bossAvatar": "🏛️",
    "mission": "Report past corporate conference attendance! State where key executives were last week, who attended the summit, and location details.",
    "starterPhrase": "Last Thursday, our executive delegation was present at...",
    "powerWords": [
      "Was in attendance",
      "Were pleased with results",
      "Was held in London"
    ],
    "targetGrammar": "Past To Be (I was, You were, He/She was, We were, They were)",
    "checklist": [
      "State where you were last week",
      "Mention where team members were",
      "Formulate 1 question with \"Were you at...?\""
    ],
    "rounds": {
      "remember": [
        "Conjugate past To Be for all pronouns (I was, they were, it was)."
      ],
      "use": [
        "Make 1 affirmative with was, 1 negative with weren't, and 1 question with Were you."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a retrospective report on executive attendance at industry events."
      ]
    }
  },
  "adults:c-adults-basic-3-7": {
    "bossName": "Memory Archivist",
    "bossTitle": "Childhood Memories & Formative Background Boss",
    "bossAvatar": "🏡",
    "mission": "Share your personal roots and early background! Describe where you grew up, early interests, and how they influenced your career path.",
    "starterPhrase": "When I was young, I lived in... where I first developed an interest in...",
    "powerWords": [
      "Formative years",
      "Grew up in",
      "Early passion for technology"
    ],
    "targetGrammar": "When I was... + Past Simple / Used to",
    "checklist": [
      "Mention your hometown when you were young",
      "Describe an early childhood interest",
      "Connect your early background to your present career"
    ],
    "rounds": {
      "remember": [
        "Say 3 childhood transition phrases: when I was young, during my school years, in my hometown."
      ],
      "use": [
        "Make 1 sentence with \"When I was...\", 1 with \"I lived in...\", and 1 childhood question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an engaging personal storytelling narrative about your formative background."
      ]
    }
  },
  "adults:c-adults-basic-3-8": {
    "bossName": "Biographical Narrator",
    "bossTitle": "Biographies of Visionary Pioneers Boss",
    "bossAvatar": "🔬",
    "mission": "Present the biography of an inspiring historical or industry figure! Outline their origin, key milestones, and enduring legacy.",
    "starterPhrase": "Today I want to honor the legacy of... who was a pioneering...",
    "powerWords": [
      "Pioneering visionary",
      "Was the first to discover",
      "Left an enduring legacy"
    ],
    "targetGrammar": "Past Simple biography structures (was born in, studied at, achieved, won)",
    "checklist": [
      "Introduce the pioneer's field and origin",
      "State 2 major historical accomplishments",
      "Summarize their global impact on modern industry"
    ],
    "rounds": {
      "remember": [
        "Say 3 biographical verbs in past: founded, discovered, revolutionized."
      ],
      "use": [
        "Make 2 past tense milestone statements and 1 legacy summary sentence."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a compelling biographical tribute to an inspiring visionary."
      ]
    }
  },
  "adults:c-adults-basic-3-9": {
    "bossName": "Career Timeline Auditor",
    "bossTitle": "Life Milestones & Past Timelines with Ago Boss",
    "bossAvatar": "⏳",
    "mission": "Chronicle your major career milestones! State when you graduated, when you joined your company, and when you earned your last promotion.",
    "starterPhrase": "Reflecting on my professional timeline, I graduated from university...",
    "powerWords": [
      "Five years ago",
      "Earned my promotion",
      "Transitioned roles"
    ],
    "targetGrammar": "Past Simple + Time expressions with \"ago\" (three years ago, six months ago)",
    "checklist": [
      "State a milestone with \"X years ago\"",
      "State a recent achievement with \"months ago\"",
      "Explain the progression of your professional growth"
    ],
    "rounds": {
      "remember": [
        "Contrast \"ago\" (past distance) vs \"in [year]\"."
      ],
      "use": [
        "Make 2 sentences with \"[Time span] ago\", and 1 timeline question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a coherent, chronological chronicle of your career milestones."
      ]
    }
  },
  "adults:c-adults-basic-3-10": {
    "bossName": "Level 3 Review Master",
    "bossTitle": "Basic 3 Comprehensive Review & Synthesis Boss",
    "bossAvatar": "🏆",
    "mission": "Synthesize Level 3 competencies! Present your capabilities, past travel obligations, milestones, and formative experiences.",
    "starterPhrase": "To summarize my professional readiness at this milestone...",
    "powerWords": [
      "Proven competencies",
      "Overcame past challenges",
      "Prepared for Basic 4"
    ],
    "targetGrammar": "Level 3 synthesis (Modals + Past To Be + Biographies + Timelines)",
    "checklist": [
      "Highlight skills with can/must",
      "Detail a past event with was/were",
      "Close with your milestone timeline"
    ],
    "rounds": {
      "remember": [
        "Say 5 key verbs and modals from Basic 3."
      ],
      "use": [
        "Deliver 2 complex sentences combining obligations, capabilities, and past experiences."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Basic 3 graduation defense with confidence!"
      ]
    }
  },
  "adults:c-adults-basic-4-1": {
    "bossName": "Campaign Director",
    "bossTitle": "Past Simple Regular Verbs in Project Launches Boss",
    "bossAvatar": "📢",
    "mission": "Deliver a project completion post-mortem! Report how your team planned, launched, and evaluated a successful marketing campaign.",
    "starterPhrase": "Last month, our department planned and successfully launched...",
    "powerWords": [
      "Launched the campaign",
      "Analyzed the metrics",
      "Delivered exceptional value"
    ],
    "targetGrammar": "Past Simple regular verbs with -ed pronunciation (/t/, /d/, /ɪd/)",
    "checklist": [
      "State when the project launched",
      "Use at least 2 regular past verbs (planned, completed, analyzed)",
      "Share final campaign outcomes"
    ],
    "rounds": {
      "remember": [
        "Say 3 regular past verbs with correct -ed sound: launched, audited, managed."
      ],
      "use": [
        "Make 1 affirmative with regular past, 1 negative with didn't, and 1 project question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a project launch report using accurate regular past verbs."
      ]
    }
  },
  "adults:c-adults-basic-4-2": {
    "bossName": "Executive Author",
    "bossTitle": "Past Simple Irregular Verbs in Corporate Decisions Boss",
    "bossAvatar": "✍️",
    "mission": "Report key corporate decisions from yesterday's board meeting! Describe who wrote the strategy, what deals were made, and outcomes.",
    "starterPhrase": "During yesterday's executive session, the board wrote the new strategy and...",
    "powerWords": [
      "Wrote the charter",
      "Took decisive action",
      "Met revenue targets"
    ],
    "targetGrammar": "Irregular past simple verbs (write->wrote, make->made, take->took, meet->met)",
    "checklist": [
      "Use \"wrote\" and \"made\" in context",
      "Use \"met\" or \"took\" for board decisions",
      "Summarize yesterday's executive consensus"
    ],
    "rounds": {
      "remember": [
        "Conjugate 4 irregular verbs to past: write, buy, make, choose."
      ],
      "use": [
        "Make 2 sentences with irregular past verbs and 1 past simple question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a board briefing summarizing yesterday's pivotal decisions."
      ]
    }
  },
  "adults:c-adults-basic-4-3": {
    "bossName": "Inquiry Inspector",
    "bossTitle": "Past Questions & Negative Verifications Boss",
    "bossAvatar": "❓",
    "mission": "Conduct a thorough transaction verification audit! Formulate precise past inquiries about contracts, payments, and deliverables.",
    "starterPhrase": "To verify the transaction history, did your department receive...?",
    "powerWords": [
      "Did you receive the invoice",
      "We did not authorize",
      "When did they sign"
    ],
    "targetGrammar": "Did + subject + base verb / Subject + didn't + base verb",
    "checklist": [
      "Ask 1 question with \"Did you receive...?\"",
      "Ask 1 Wh- question with \"When did...?\"",
      "Make 1 negative confirmation with \"didn't\""
    ],
    "rounds": {
      "remember": [
        "Verify auxiliary \"Did\" with base verb (Did you see, NOT Did you saw)."
      ],
      "use": [
        "Make 1 past negative with didn't and 2 past questions (Yes/No and Wh-)."
      ],
      "speak": [
        "Speak for 30 seconds: Lead a professional verification audit questioning project deliverables."
      ]
    }
  },
  "adults:c-adults-basic-4-4": {
    "bossName": "Corporate Travel Manager",
    "bossTitle": "Travel Planning & Advance Bookings Boss",
    "bossAvatar": "✈️",
    "mission": "Plan an international corporate roadshow! Detail flight bookings, hotel reservations, advance visa approvals, and itinerary details.",
    "starterPhrase": "For our upcoming executive trade mission, we booked our flight tickets...",
    "powerWords": [
      "Booked three weeks in advance",
      "Secured reservations",
      "Coordinated itineraries"
    ],
    "targetGrammar": "Past Simple bookings + In advance with time intervals",
    "checklist": [
      "State booking timeline with \"in advance\"",
      "Mention hotel and flight arrangements",
      "Describe airport transfer protocols"
    ],
    "rounds": {
      "remember": [
        "Say 3 travel phrases: book in advance, confirm reservations, arrange airport transfers."
      ],
      "use": [
        "Make 2 sentences about travel preparations and 1 inquiry about flight schedules."
      ],
      "speak": [
        "Speak for 30 seconds: Present a comprehensive travel briefing for an overseas executive trip."
      ]
    }
  },
  "adults:c-adults-basic-4-5": {
    "bossName": "Narrative Architect",
    "bossTitle": "Story Sequencing & Corporate Connectors Boss",
    "bossAvatar": "1️⃣",
    "mission": "Sequence a corporate turnaround story! Use transition connectors (First, Then, Next, After that, Finally) to structure the narrative.",
    "starterPhrase": "To resolve the operational crisis, first our team gathered the data; then...",
    "powerWords": [
      "First we identified the issue",
      "Then we optimized workflows",
      "Finally we delivered results"
    ],
    "targetGrammar": "Sequential transition connectors (First, Then, Next, After that, Finally)",
    "checklist": [
      "Use \"First\" to introduce the initial step",
      "Use \"Then / After that\" for middle actions",
      "Use \"Finally\" to conclude with results"
    ],
    "rounds": {
      "remember": [
        "Say 4 narrative sequence connectors in chronological order."
      ],
      "use": [
        "Link 2 past simple actions with \"First..., and then...\"."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a seamless chronological story of a successful business turnaround."
      ]
    }
  },
  "adults:c-adults-basic-4-6": {
    "bossName": "Future Growth Director",
    "bossTitle": "Future Plans & Expansions with Going To Boss",
    "bossAvatar": "🏗️",
    "mission": "Announce planned strategic expansions! Detail what new branches your company is going to open and which markets you are going to enter.",
    "starterPhrase": "Looking ahead to next year, our corporation is going to open...",
    "powerWords": [
      "Going to inaugurate",
      "Going to expand operations",
      "Going to recruit talent"
    ],
    "targetGrammar": "Future with Going To (Be + going to + base verb)",
    "checklist": [
      "State 2 planned expansions with \"going to\"",
      "Mention target opening dates (next quarter, next year)",
      "Describe the expected market impact"
    ],
    "rounds": {
      "remember": [
        "Conjugate \"going to\" for I, We, and Our company."
      ],
      "use": [
        "Make 1 affirmative with going to, 1 negative (is not going to), and 1 question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a future roadmap presentation on upcoming organizational expansions."
      ]
    }
  },
  "adults:c-adults-basic-4-7": {
    "bossName": "Rapid Response Director",
    "bossTitle": "Immediate Commitments & Promises with Will Boss",
    "bossAvatar": "⚡",
    "mission": "Deliver spontaneous client commitments! Promise immediate follow-ups, express delivery of quotations, and prompt problem resolutions.",
    "starterPhrase": "Thank you for bringing this to our attention. I will personally ensure that...",
    "powerWords": [
      "Will send right away",
      "Will investigate immediately",
      "Will follow up today"
    ],
    "targetGrammar": "Future with Will for spontaneous decisions and promises (I will + base verb)",
    "checklist": [
      "Make 1 immediate promise with \"I will send right away\"",
      "Make 1 commitment with \"We will investigate\"",
      "Reassure the client on response times"
    ],
    "rounds": {
      "remember": [
        "Contrast \"will\" (spontaneous commitment) vs \"going to\" (pre-planned)."
      ],
      "use": [
        "Make 2 commitment sentences with will and 1 question offering help with \"Will you...?\""
      ],
      "speak": [
        "Speak for 30 seconds: Reassure a key client with immediate, decisive commitments using will."
      ]
    }
  },
  "adults:c-adults-basic-4-8": {
    "bossName": "Strategic Duality Expert",
    "bossTitle": "Contrasting Will and Going To in Action Boss",
    "bossAvatar": "⚖️",
    "mission": "Balance pre-arranged project plans with agile real-time commitments! Explain what is scheduled and how you will adapt on the spot.",
    "starterPhrase": "We are going to meet the primary stakeholders, and during the session I will present...",
    "powerWords": [
      "Are going to host the summit",
      "Will facilitate the Q&A",
      "Are going to sign agreements"
    ],
    "targetGrammar": "Coordinated use of Going To (scheduled) and Will (spontaneous/roles)",
    "checklist": [
      "Use \"going to\" for scheduled agenda points",
      "Use \"will\" for personal facilitation roles",
      "Connect both with compound linking words"
    ],
    "rounds": {
      "remember": [
        "Distinguish planned agendas (going to) from assigned live roles (will)."
      ],
      "use": [
        "Make 1 compound sentence containing both \"going to\" and \"will\"."
      ],
      "speak": [
        "Speak for 30 seconds: Present a project event plan balancing structured agendas and live commitments."
      ]
    }
  },
  "adults:c-adults-basic-4-9": {
    "bossName": "Strategic Advisor",
    "bossTitle": "Expressing Opinions & Constructive Alignment Boss",
    "bossAvatar": "💭",
    "mission": "Voice a strategic recommendation in a boardroom discussion! Express agreement, constructive disagreement, and advise investments.",
    "starterPhrase": "In my professional opinion, our company should invest heavily in...",
    "powerWords": [
      "In my view",
      "Completely agree with",
      "Should consider investing"
    ],
    "targetGrammar": "Opinion formulas (In my opinion, I believe that, We should + verb)",
    "checklist": [
      "Open with \"In my opinion / From my perspective\"",
      "State a strong strategic proposal with \"we should\"",
      "Acknowledge opposing viewpoints diplomatically"
    ],
    "rounds": {
      "remember": [
        "Say 3 professional opinion starters: In my view, I strongly believe, From my perspective."
      ],
      "use": [
        "Make 1 opinion statement, 1 agreement sentence, and 1 respectful counter-proposal."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a persuasive boardroom opinion advocating for digital innovation."
      ]
    }
  },
  "adults:c-adults-basic-4-10": {
    "bossName": "Intermediate Bridge Dean",
    "bossTitle": "Basic 4 Capstone & Intermediate Readiness Boss",
    "bossAvatar": "🌉",
    "mission": "Defend your readiness for Intermediate English! Synthesize past accomplishments, future roadmaps, and strategic vision.",
    "starterPhrase": "Over the course of Basic 4, I have mastered communicating past events and future strategies...",
    "powerWords": [
      "Mastered complex timelines",
      "Articulate future vision",
      "Ready for Intermediate"
    ],
    "targetGrammar": "Full Basic 4 synthesis (Past Simple Regular/Irregular + Future Will/Going to + Opinions)",
    "checklist": [
      "Reflect on a past milestone achieved",
      "Declare your upcoming future objectives",
      "Express your confidence for Intermediate Level"
    ],
    "rounds": {
      "remember": [
        "Say 5 high-impact business verbs across past, present, and future."
      ],
      "use": [
        "Formulate 2 complex sentences linking past achievements to future ambitions."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Basic 4 Capstone defense and declare your Intermediate readiness!"
      ]
    }
  },
  "adults:c-adults-inter-1": {
    "bossName": "Incident Commander",
    "bossTitle": "Past Continuous & Past Simple Interruptions Boss",
    "bossAvatar": "⏳",
    "mission": "Report a critical business interruption! Describe what the team was executing when a major client approval or emergency occurred.",
    "starterPhrase": "While our engineering department was reviewing the quarterly budget, the client...",
    "powerWords": [
      "While we were conducting",
      "Suddenly approved",
      "Handled the transition"
    ],
    "targetGrammar": "While / When + Past Continuous + Past Simple interruption",
    "checklist": [
      "Set the ongoing context with past continuous",
      "State the interrupting event in past simple",
      "Explain how the team adapted smoothly"
    ],
    "rounds": {
      "remember": [
        "Say 3 complex past continuous verbs: was negotiating, were implementing, was auditing."
      ],
      "use": [
        "Make 1 sentence with \"While we were...\", 1 with \"When the manager called...\", and 1 past inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an incident post-mortem describing ongoing actions and unexpected interruptions."
      ]
    }
  },
  "adults:c-adults-inter-2": {
    "bossName": "Incentive Strategist",
    "bossTitle": "First Conditional for Business Incentives Boss",
    "bossAvatar": "🎯",
    "mission": "Pitch a performance bonus and revenue sharing model! Explain the exact conditional milestones required for the team to receive rewards.",
    "starterPhrase": "If our division surpasses its annual revenue benchmark, the executive board will...",
    "powerWords": [
      "If we exceed targets",
      "Will distribute bonuses",
      "Unless sales decline"
    ],
    "targetGrammar": "First Conditional (If + Present Simple, will / can + base verb)",
    "checklist": [
      "State the condition in Present Simple",
      "State the guaranteed outcome with \"will\"",
      "Include a cautionary clause with \"unless\""
    ],
    "rounds": {
      "remember": [
        "Say 3 business conditional verbs: achieve, surpass, disburse."
      ],
      "use": [
        "Make 1 sentence with \"If we meet...\", 1 with \"Unless we improve...\", and 1 conditional inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Present a high-impact corporate incentive proposal based on clear conditional milestones."
      ]
    }
  },
  "adults:c-adults-inter-3": {
    "bossName": "Technical Advisor",
    "bossTitle": "Modal Advice (Should / Ought to / Had better) Boss",
    "bossAvatar": "🛡️",
    "mission": "Provide strategic cybersecurity and technical advice! Recommend what protocols staff should upgrade before going live.",
    "starterPhrase": "To mitigate critical operational risks, your engineering team should optimize...",
    "powerWords": [
      "Should optimize protocols",
      "Ought to conduct audits",
      "Had better patch vulnerabilities"
    ],
    "targetGrammar": "Modals of advice (Should / Ought to / Had better + base verb)",
    "checklist": [
      "Give 1 strong recommendation with \"should\"",
      "Give 1 formal advice with \"ought to\"",
      "Provide 1 urgent warning with \"had better\""
    ],
    "rounds": {
      "remember": [
        "Say 3 modal advice terms: should recommend, ought to investigate, had better safeguard."
      ],
      "use": [
        "Make 2 advice sentences and 1 inquiry asking for expert guidance."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an authoritative technical advisory briefing on workflow optimization."
      ]
    }
  },
  "adults:c-adults-inter-4": {
    "bossName": "Risk Forecaster",
    "bossTitle": "Modals of Possibility & Deduction Boss",
    "bossAvatar": "📦",
    "mission": "Analyze international supply chain uncertainties! Explain what might be delayed, could occur with freight costs, and may resolve soon.",
    "starterPhrase": "Evaluating current logistics bottlenecks, international shipments might be...",
    "powerWords": [
      "Might experience delays",
      "Could inflate freight costs",
      "May stabilize next quarter"
    ],
    "targetGrammar": "Modals of possibility (May / Might / Could + base verb)",
    "checklist": [
      "State 1 potential risk with \"might\"",
      "State 1 financial possibility with \"could\"",
      "Provide 1 optimistic scenario with \"may\""
    ],
    "rounds": {
      "remember": [
        "Contrast \"might\" (remote possibility) vs \"could\" (theoretical ability) vs \"may\" (formal probability)."
      ],
      "use": [
        "Make 2 probability statements and 1 risk deduction question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a comprehensive supply chain contingency and risk assessment."
      ]
    }
  },
  "adults:c-adults-inter-5": {
    "bossName": "Benchmark Analyst",
    "bossTitle": "Comparatives & Superlatives in Tech Boss",
    "bossAvatar": "⚡",
    "mission": "Deliver a comparative technology benchmark! Compare cloud computing with legacy infrastructure across efficiency, cost, and security.",
    "starterPhrase": "Compared to traditional on-premise hardware, cloud architecture is significantly more...",
    "powerWords": [
      "Significantly more scalable",
      "By far the most cost-effective",
      "Substantially faster"
    ],
    "targetGrammar": "Modifiers + Comparatives (much more scalable than) / Superlatives (by far the best)",
    "checklist": [
      "Use \"much more [adjective] than\" for direct comparison",
      "Use \"by far the most [adjective]\" for the market leader",
      "Summarize ROI advantages"
    ],
    "rounds": {
      "remember": [
        "Say 3 comparative modifiers: significantly more, substantially faster, far more reliable."
      ],
      "use": [
        "Make 1 comparative sentence, 1 superlative sentence, and 1 benchmark question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a data-driven technology benchmarking presentation to executive stakeholders."
      ]
    }
  },
  "adults:c-adults-inter-6": {
    "bossName": "Capacity Planner",
    "bossTitle": "Describing Excess & Sufficiency (Too / Enough) Boss",
    "bossAvatar": "⚠️",
    "mission": "Assess infrastructure bottleneck limits! Explain why server bandwidth is not enough, why response times are too slow, and needed fixes.",
    "starterPhrase": "During peak traffic surges, our current server infrastructure is too...",
    "powerWords": [
      "Too overloaded",
      "Not enough bandwidth",
      "Sufficient capacity"
    ],
    "targetGrammar": "Too + adjective / Not + adjective + enough / Enough + noun",
    "checklist": [
      "Use \"too + adjective\" for a critical defect",
      "Use \"not enough + noun\" for a resource shortage",
      "Propose an investment to guarantee sufficient scale"
    ],
    "rounds": {
      "remember": [
        "Say 3 capacity expressions: too congested, not fast enough, enough memory."
      ],
      "use": [
        "Make 1 sentence with \"too...\", 1 with \"not enough...\", and 1 capacity inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a capacity expansion defense to leadership requesting upgraded resources."
      ]
    }
  },
  "adults:c-adults-inter-7": {
    "bossName": "HR Director",
    "bossTitle": "Corporate Workplace Operations & Appraisals Boss",
    "bossAvatar": "📑",
    "mission": "Lead a performance review and promotion committee! Summarize executive appraisal criteria, merit evaluations, and leadership traits.",
    "starterPhrase": "In conducting this annual performance appraisal, the committee notes that...",
    "powerWords": [
      "Performance appraisal",
      "Consistently exceeded expectations",
      "Demonstrated leadership acumen"
    ],
    "targetGrammar": "Professional appraisal collocations + Present/Past achievements",
    "checklist": [
      "Highlight a candidate's key achievements",
      "Identify 1 developmental growth area",
      "Conclude with a clear promotion endorsement"
    ],
    "rounds": {
      "remember": [
        "Say 3 appraisal phrases: exceed expectations, demonstrate leadership, achieve merit."
      ],
      "use": [
        "Make 2 formal evaluation statements and 1 promotional recommendation."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an executive talent appraisal and career progression endorsement."
      ]
    }
  },
  "adults:c-adults-inter-8": {
    "bossName": "Executive Scribe",
    "bossTitle": "Formal Email Inquiries & Business Correspondence Boss",
    "bossAvatar": "✉️",
    "mission": "Dictate a high-stakes formal business inquiry! Address a potential international vendor regarding contractual SLA terms and pricing tiers.",
    "starterPhrase": "Dear Mr. Reynolds, I am writing to formally inquire regarding the terms of your...",
    "powerWords": [
      "Writing to formally inquire",
      "Service level agreement",
      "Look forward to your prompt reply"
    ],
    "targetGrammar": "High-register correspondence formulas (I am writing to inquire, would you be so kind as to, look forward to)",
    "checklist": [
      "Open with formal purpose statement",
      "Formulate 2 precise commercial inquiries",
      "Close with a polished professional sign-off"
    ],
    "rounds": {
      "remember": [
        "Say 3 formal email transitions: with reference to, could you please clarify, sincerely yours."
      ],
      "use": [
        "Make 2 formal written inquiry sentences and 1 closing timeline request."
      ],
      "speak": [
        "Speak for 30 seconds: Dictate a flawless, high-stakes formal executive email inquiry."
      ]
    }
  },
  "adults:c-adults-inter-9": {
    "bossName": "Global Careerist",
    "bossTitle": "Present Perfect for Life & Career Experiences Boss",
    "bossAvatar": "🌐",
    "mission": "Showcase your global career portfolio! Highlight multinational projects you have led, countries you have worked with, and milestones achieved.",
    "starterPhrase": "Throughout my professional career, I have successfully collaborated with...",
    "powerWords": [
      "Have collaborated for five years",
      "Have spearheaded international rollouts",
      "Have never compromised quality"
    ],
    "targetGrammar": "Present Perfect with for / since / already / ever / never",
    "checklist": [
      "State an achievement with \"have spearheaded\"",
      "Mention career duration with \"for [X] years\"",
      "Mention an ongoing commitment with \"since\""
    ],
    "rounds": {
      "remember": [
        "Conjugate 3 irregular verbs in past participle: led, built, driven."
      ],
      "use": [
        "Make 1 sentence with \"I have worked...\", 1 with \"We have already...\", and 1 experience question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a compelling career portfolio highlight reel for a global executive interview."
      ]
    }
  },
  "adults:c-adults-inter-10": {
    "bossName": "Financial Historian",
    "bossTitle": "Contrasting Past Simple and Present Perfect Boss",
    "bossAvatar": "🏆",
    "mission": "Deliver a fiscal performance report! Contrast cumulative year-to-date milestones (Present Perfect) with specific closed events (Past Simple).",
    "starterPhrase": "Our division has already closed three enterprise accounts this quarter; however, yesterday we...",
    "powerWords": [
      "Has already secured",
      "Yesterday closed the agreement",
      "In 2023 established the branch"
    ],
    "targetGrammar": "Present Perfect (unfinished/impact now) vs Past Simple (finished specific time)",
    "checklist": [
      "State cumulative achievement with Present Perfect",
      "State specific past event with exact time marker (yesterday, last month)",
      "Contrast both with a clear connector (however, whereas)"
    ],
    "rounds": {
      "remember": [
        "Contrast unfinished experience (Present Perfect) vs finished past time (Past Simple)."
      ],
      "use": [
        "Make 1 compound sentence contrasting \"has achieved\" with \"yesterday lost/signed\"."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a quarterly fiscal review contrasting cumulative progress with specific past events."
      ]
    }
  },
  "adults:c-adults-inter-11": {
    "bossName": "Decision Strategist",
    "bossTitle": "Gerunds & Infinitives in Strategic Decisions Boss",
    "bossAvatar": "🛑",
    "mission": "Defend a critical executive decision! Explain why leadership decided to postpone a product rollout to avoid compliance risks.",
    "starterPhrase": "After comprehensive evaluation, the executive committee decided to postpone...",
    "powerWords": [
      "Decided to postpone",
      "Avoid taking unnecessary risks",
      "Plan to resume next quarter"
    ],
    "targetGrammar": "Verbs + Infinitives (decide, plan, agree to) vs Verbs + Gerunds (avoid, consider, delay + ing)",
    "checklist": [
      "Use \"decide + to infinitive\" for the strategic choice",
      "Use \"avoid / consider + gerund\" for risk management",
      "State future resumption plans"
    ],
    "rounds": {
      "remember": [
        "Classify: decide to do vs avoid doing."
      ],
      "use": [
        "Make 1 sentence with decide to, 1 with avoid + ing, and 1 decision inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Defend a complex strategic postponement decision to stakeholders with poise."
      ]
    }
  },
  "adults:c-adults-inter-12": {
    "bossName": "Phrasal Master",
    "bossTitle": "High-Frequency Phrasal Verbs in Context Boss",
    "bossAvatar": "🔍",
    "mission": "Coordinate an international contract rollout! Instruct your team to look up legal terms, carry out audits, and follow up with partners.",
    "starterPhrase": "Prior to executing this international agreement, we must thoroughly look up...",
    "powerWords": [
      "Look up regulatory terms",
      "Carry out full compliance audits",
      "Follow up with stakeholders"
    ],
    "targetGrammar": "Multi-word phrasal verbs in corporate contexts (look up, carry out, follow up on, scale up)",
    "checklist": [
      "Use \"look up\" in context of research",
      "Use \"carry out\" in context of audits",
      "Use \"follow up on\" for client relationship management"
    ],
    "rounds": {
      "remember": [
        "Say 3 corporate phrasal verbs and their formal equivalents: carry out (execute), look up (research), figure out (resolve)."
      ],
      "use": [
        "Make 2 sentences with corporate phrasal verbs and 1 action request."
      ],
      "speak": [
        "Speak for 30 seconds: Lead a pre-launch operational alignment briefing utilizing high-impact phrasal verbs."
      ]
    }
  },
  "adults:c-adults-advanced-1": {
    "bossName": "Connected Speech Orator",
    "bossTitle": "Connected Speech & Executive Flow Boss",
    "bossAvatar": "🗣️",
    "mission": "Deliver a fluid, seamless executive update! Use elision, linking, and embedded question structures to brief a board of directors.",
    "starterPhrase": "Could you let me know as soon as the executive audit results become available so that we can...",
    "powerWords": [
      "Embedded inquiry",
      "Seamless executive cadence",
      "Articulate without hesitation"
    ],
    "targetGrammar": "Embedded questions (Could you tell me where / when the results are...) + Connected speech",
    "checklist": [
      "Use 1 embedded question formula seamlessly",
      "Maintain natural rhythm and liaison",
      "Conclude with strategic next steps"
    ],
    "rounds": {
      "remember": [
        "Formulate an embedded question: \"Where is the report?\" -> \"Could you tell me where the report is?\""
      ],
      "use": [
        "Make 2 embedded inquiries and 1 fluid transition statement."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a seamless, rhythmically natural executive briefing using embedded inquiries."
      ]
    }
  },
  "adults:c-adults-advanced-2": {
    "bossName": "Hypothetical Strategist",
    "bossTitle": "Second Conditional in Corporate Ventures Boss",
    "bossAvatar": "💰",
    "mission": "Model an ambitious hypothetical venture! Propose what your enterprise would do if you had unlimited venture capital backing.",
    "starterPhrase": "If our enterprise possessed unlimited capital reserves, we would immediately expand into...",
    "powerWords": [
      "If we had greater capital",
      "We would establish global R&D",
      "Would dominate regional markets"
    ],
    "targetGrammar": "Second Conditional (If + Past Subjunctive / Simple, would + base verb)",
    "checklist": [
      "State hypothetical condition with \"If we had / If our firm were\"",
      "State bold strategic actions with \"we would\"",
      "Highlight transformative market impact"
    ],
    "rounds": {
      "remember": [
        "Formulate Second Conditional: If we were... we would..."
      ],
      "use": [
        "Make 2 hypothetical venture statements and 1 speculative boardroom question."
      ],
      "speak": [
        "Speak for 30 seconds: Present an inspiring blue-sky venture proposal assuming transformative funding."
      ]
    }
  },
  "adults:c-adults-advanced-3": {
    "bossName": "Post-Mortem Forecaster",
    "bossTitle": "Third Conditional & Past Regrets Boss",
    "bossAvatar": "⚠️",
    "mission": "Deliver an unsparing post-mortem on a past market disruption! Explain what leadership would have done if they had anticipated the crisis.",
    "starterPhrase": "If our executive committee had foreseen the supply chain disruption, we would have diversified...",
    "powerWords": [
      "If we had anticipated risks",
      "Would have diversified suppliers",
      "Would not have incurred losses"
    ],
    "targetGrammar": "Third Conditional (If + Past Perfect, would have + past participle)",
    "checklist": [
      "State past unreal condition with \"If we had foreseen\"",
      "State unreal past outcome with \"would have diversified\"",
      "Extract institutional lessons for future resilience"
    ],
    "rounds": {
      "remember": [
        "Structure Third Conditional: If + had + participle, would have + participle."
      ],
      "use": [
        "Make 2 past post-mortem statements and 1 historical risk question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a rigorous retrospective crisis analysis using Third Conditional structures."
      ]
    }
  },
  "adults:c-adults-advanced-4": {
    "bossName": "Diplomatic Spokesperson",
    "bossTitle": "Reported Speech in Boardroom Announcements Boss",
    "bossAvatar": "📢",
    "mission": "Brief the press on executive board resolutions! Shift direct CEO statements into polished, authoritative reported speech.",
    "starterPhrase": "During this morning's press conference, the Chief Executive stated that the corporation would...",
    "powerWords": [
      "Stated that the company would",
      "Announced that operations had achieved",
      "Reaffirmed commitment to sustainability"
    ],
    "targetGrammar": "Reported Speech tense shifts (will->would, is->was, has->had, can->could)",
    "checklist": [
      "Shift a future commitment with \"stated that they would\"",
      "Shift a past accomplishment with \"confirmed that they had achieved\"",
      "Maintain high-register spokesperson neutrality"
    ],
    "rounds": {
      "remember": [
        "Practice backshifting: \"We will launch\" -> \"He stated that they would launch.\""
      ],
      "use": [
        "Make 2 reported speech statements attributing quotes to leadership."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an authoritative corporate press briefing relaying executive board decisions."
      ]
    }
  },
  "adults:c-adults-advanced-5": {
    "bossName": "Governance Architect",
    "bossTitle": "Defining & Non-Defining Relative Clauses Boss",
    "bossAvatar": "🛡️",
    "mission": "Profile your external cybersecurity audit team! Embed defining and non-defining relative clauses to specify credentials and findings.",
    "starterPhrase": "The independent cybersecurity consultant who audited our architecture discovered critical vulnerabilities, which...",
    "powerWords": [
      "The consultant who audited",
      "Our proprietary infrastructure, which operates",
      "Identified vulnerabilities that require"
    ],
    "targetGrammar": "Relative clauses (who, which, that, where, whose) with accurate punctuation and non-defining pauses",
    "checklist": [
      "Use a defining \"who\" clause modifying the subject",
      "Use a non-defining \"which\" clause with parenthetical pause",
      "Explain remediation mandates"
    ],
    "rounds": {
      "remember": [
        "Distinguish defining (essential info) vs non-defining (extra info with comma)."
      ],
      "use": [
        "Make 2 sentences featuring integrated relative clauses describing personnel and systems."
      ],
      "speak": [
        "Speak for 30 seconds: Present a sophisticated governance briefing integrating seamless relative clauses."
      ]
    }
  },
  "adults:c-adults-advanced-6": {
    "bossName": "Chief Negotiator",
    "bossTitle": "Advanced Commercial Negotiation & Concessions Boss",
    "bossAvatar": "🤝",
    "mission": "Close a high-stakes bilateral contract negotiation! Articulate reciprocal concessions regarding payment terms, IP rights, and SLAs.",
    "starterPhrase": "To solidify this partnership, our party is prepared to agree on mutual concessions regarding...",
    "powerWords": [
      "Reciprocal concessions",
      "Deferred payment schedule",
      "Exclusivity provisions"
    ],
    "targetGrammar": "High-register negotiation vocabulary + Conditional compromises",
    "checklist": [
      "Propose 1 major commercial concession",
      "Request a corresponding reciprocal concession in return",
      "Confirm mutual alignment on binding terms"
    ],
    "rounds": {
      "remember": [
        "Say 3 negotiation collocations: reach consensus, yield concessions, mutual compromise."
      ],
      "use": [
        "Make 2 advanced negotiation proposals and 1 closing agreement statement."
      ],
      "speak": [
        "Speak for 30 seconds: Execute the closing argument of a bilateral corporate contract negotiation."
      ]
    }
  },
  "adults:c-adults-advanced-7": {
    "bossName": "Crisis Director",
    "bossTitle": "Executive Remediation & Client De-escalation Boss",
    "bossAvatar": "🙇‍♂️",
    "mission": "De-escalate an enterprise client crisis! Deliver a sincere executive apology, explain root causes without excuses, and offer immediate restitution.",
    "starterPhrase": "We sincerely apologize for the operational interruption and want to assure you that our team is taking...",
    "powerWords": [
      "Sincerest apologies for the disruption",
      "Immediate reimbursement credit",
      "Comprehensive remediation protocol"
    ],
    "targetGrammar": "Formal diplomatic apology frames + Immediate resolution commitments",
    "checklist": [
      "Offer an unreserved executive apology",
      "Explain the technical fix deployed",
      "Grant meaningful commercial restitution"
    ],
    "rounds": {
      "remember": [
        "Say 3 de-escalation formulas: apologize unreservedly, implement remediation, restore full trust."
      ],
      "use": [
        "Make 1 formal apology statement, 1 remediation commitment, and 1 assurance of future reliability."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a masterclass in executive client crisis de-escalation and remediation."
      ]
    }
  },
  "adults:c-adults-advanced-8": {
    "bossName": "Futurist Forecaster",
    "bossTitle": "Future Continuous & Future Perfect Milestones Boss",
    "bossAvatar": "⏳",
    "mission": "Forecast multi-year organizational milestones! Detail what your engineers will be doing next semester and what will have been completed by December.",
    "starterPhrase": "By next December, our engineering organization will have completed full system migration, while our AI team will be...",
    "powerWords": [
      "Will have completed the rollout",
      "Will be expanding into Europe",
      "By the end of the fiscal year"
    ],
    "targetGrammar": "Future Perfect (will have + past participle) & Future Continuous (will be + verb-ing)",
    "checklist": [
      "Use \"By [future date], we will have completed...\" for a finished milestone",
      "Use \"At that time, we will be expanding...\" for an ongoing action",
      "Link both in a strategic roadmap narrative"
    ],
    "rounds": {
      "remember": [
        "Contrast Future Perfect (deadline completion) vs Future Continuous (action in progress)."
      ],
      "use": [
        "Make 1 Future Perfect sentence and 1 Future Continuous sentence."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a visionary multi-year corporate milestone forecast."
      ]
    }
  },
  "adults:c-adults-advanced-9": {
    "bossName": "Enterprise Architect",
    "bossTitle": "Advanced Phrasal Verbs in Architecture Scaling Boss",
    "bossAvatar": "🧩",
    "mission": "Lead an engineering deep-dive on scaling microservices! Explain how to figure out bottlenecks, scale up databases, and phase out legacy code.",
    "starterPhrase": "As our user base expands exponentially, our team must figure out how to scale up our core infrastructure and...",
    "powerWords": [
      "Figure out bottlenecks",
      "Scale up distributed nodes",
      "Phase out monolithic debt"
    ],
    "targetGrammar": "Advanced multi-part phrasal verbs (figure out, scale up, phase out, zero in on)",
    "checklist": [
      "Use \"figure out\" for problem diagnosis",
      "Use \"scale up\" for capacity expansion",
      "Use \"phase out\" for technical debt retirement"
    ],
    "rounds": {
      "remember": [
        "Say 3 advanced technical phrasal verbs: branch out, scale up, phase out."
      ],
      "use": [
        "Make 2 sentences embedding corporate phrasal verbs into system architecture strategy."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an engineering roadmap for scaling cloud microservices seamlessly."
      ]
    }
  },
  "adults:c-adults-advanced-10": {
    "bossName": "Macro Strategist",
    "bossTitle": "Advanced Participial Clauses & Macro Trends Boss",
    "bossAvatar": "📊",
    "mission": "Synthesize macroeconomic trends using fronted participial clauses! Explain how analyzing global market forecasts enabled strategic pivots.",
    "starterPhrase": "Having thoroughly analyzed the macroeconomic forecast, our executive board adjusted our annual capital...",
    "powerWords": [
      "Having analyzed the data",
      "Recognizing emerging headwinds",
      "Executing proactive realignment"
    ],
    "targetGrammar": "Perfect and present participle clauses (Having analyzed..., Recognizing...)",
    "checklist": [
      "Front a perfect participle clause (Having [participle]...)",
      "Front a present participle clause (Recognizing...)",
      "Present decisive executive actions taken"
    ],
    "rounds": {
      "remember": [
        "Formulate a perfect participle clause: \"Having reviewed the audit, we approved the plan.\""
      ],
      "use": [
        "Make 2 sentences fronted with participial clauses."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an Advanced Level capstone strategic analysis with participial eloquence."
      ]
    }
  },
  "adults:c-adults-masters-1": {
    "bossName": "Executive Rhetorician",
    "bossTitle": "Idiomatic Mastery & Executive Metaphors Boss",
    "bossAvatar": "🎯",
    "mission": "Align an executive committee using sophisticated idiomatic expressions! Address touching base, staying on the same page, and moving the needle.",
    "starterPhrase": "Let us touch base next week to ensure our leadership teams remain on the same page and continue to...",
    "powerWords": [
      "Touch base",
      "On the same page",
      "Move the needle"
    ],
    "targetGrammar": "Natural deployment of high-level idiomatic and metaphorical business language",
    "checklist": [
      "Deploy 2 natural business idioms seamlessly",
      "Avoid cliché by grounding idioms in real metrics",
      "Drive consensus across leadership"
    ],
    "rounds": {
      "remember": [
        "Say 3 executive idioms: touch base, move the needle, think outside the box."
      ],
      "use": [
        "Make 2 sentences embedding idioms into strategic decisions."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an inspiring executive leadership alignment talk using natural idiomatic eloquence."
      ]
    }
  },
  "adults:c-adults-masters-2": {
    "bossName": "Master of Inversion",
    "bossTitle": "Formal Negative Adverb Inversion Boss",
    "bossAvatar": "⚡",
    "mission": "Deliver an emphatic macroeconomic address using formal negative inversion! Emphasize the rarity of market volatility and regulatory shifts.",
    "starterPhrase": "Rarely have we witnessed such acute market volatility within a single fiscal quarter, and seldom do enterprises...",
    "powerWords": [
      "Rarely have we seen",
      "Seldom do founders encounter",
      "Under no circumstances should we"
    ],
    "targetGrammar": "Formal negative inversion (Negative adverb + Auxiliary + Subject + Main Verb)",
    "checklist": [
      "Invert with \"Rarely have we [participle]\"",
      "Invert with \"Seldom do [subject] [verb]\"",
      "Maintain authoritative C2 formal register"
    ],
    "rounds": {
      "remember": [
        "Practice inversion: \"We rarely see\" -> \"Rarely do we see.\""
      ],
      "use": [
        "Formulate 2 emphatic inverted sentences."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an emphatic, gravitas-filled macroeconomic address using formal inversion."
      ]
    }
  },
  "adults:c-adults-masters-3": {
    "bossName": "Cleft Architect",
    "bossTitle": "Cleft Sentences for Organizational Focus Boss",
    "bossAvatar": "💎",
    "mission": "Articulate your organization's deepest core values using Wh- and It-cleft structures to spotlight ethical innovation.",
    "starterPhrase": "What our enterprise truly champions is unwavering transparency, and it is through relentless innovation that we...",
    "powerWords": [
      "What our organization truly values is",
      "It is through ethical leadership that",
      "What matters most is impact"
    ],
    "targetGrammar": "Wh-clefts (What we value is...) & It-clefts (It was our team that...)",
    "checklist": [
      "Use a Wh-cleft emphasizing core values",
      "Use an It-cleft highlighting competitive differentiators",
      "Elevate corporate vision to C2 eloquence"
    ],
    "rounds": {
      "remember": [
        "Convert standard to Wh-cleft: \"We value integrity\" -> \"What we value is integrity.\""
      ],
      "use": [
        "Make 1 Wh-cleft sentence and 1 It-cleft sentence."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a corporate manifesto utilizing cleft focus structures to captivate listeners."
      ]
    }
  },
  "adults:c-adults-masters-4": {
    "bossName": "Diplomatic Auditor",
    "bossTitle": "Diplomatic Hedging & Audit Softening Boss",
    "bossAvatar": "🧐",
    "mission": "Deliver a delicate audit critique to executive leadership using sophisticated hedging to maintain collaboration while stating uncomfortable truths.",
    "starterPhrase": "It appears that there might be a marginal discrepancy in the consolidated balance sheet, which would suggest that...",
    "powerWords": [
      "It appears that",
      "There might be a slight discrepancy",
      "One could reasonably argue that"
    ],
    "targetGrammar": "Epistemic hedging (appears to, might indicate, arguably, potentially, somewhat)",
    "checklist": [
      "Softens a critical audit finding with \"It appears that there might be...\"",
      "Use epistemic adverbs (potentially, reasonably)",
      "Propose collaborative remedial dialogue"
    ],
    "rounds": {
      "remember": [
        "Say 3 hedging verbs: appears to suggest, tends to indicate, might point toward."
      ],
      "use": [
        "Make 2 diplomatically hedged critique statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an unassailable, politically astute audit presentation to the executive board."
      ]
    }
  },
  "adults:c-adults-masters-5": {
    "bossName": "Keynote Virtuoso",
    "bossTitle": "High-Impact Keynote & Tripartite Oratory Boss",
    "bossAvatar": "🎤",
    "mission": "Deliver the opening 30 seconds of an international industry keynote! Unveil three transformative pillars shaping the future of global society.",
    "starterPhrase": "Today, I would like to articulate three transformative pillars that are decisively reshaping our global landscape...",
    "powerWords": [
      "Three transformative pillars",
      "Paradigm shift in human ingenuity",
      "Decisive imperative for our era"
    ],
    "targetGrammar": "Rhetorical framing, rule of three (tricolon), and cadence",
    "checklist": [
      "Hook the global audience with gravitas",
      "Present a tricolon of three transformative pillars",
      "Cast a visionary call to action"
    ],
    "rounds": {
      "remember": [
        "Structure a tricolon: rhythm, balance, crescendo."
      ],
      "use": [
        "Make 1 tripartite thesis statement."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a TED-level keynote opening address that commands the room."
      ]
    }
  },
  "adults:c-adults-masters-6": {
    "bossName": "Persuasion Master",
    "bossTitle": "Persuasive Rhetoric & Empirical Rigor Boss",
    "bossAvatar": "📊",
    "mission": "Convince an investor committee of your technological supremacy! Pair rigorous empirical evidence with irresistible persuasive rhetoric.",
    "starterPhrase": "The empirical evidence decisively demonstrates that our proprietary platform establishes an insurmountable competitive moat...",
    "powerWords": [
      "Empirical evidence decisively proves",
      "Insurmountable competitive moat",
      "Compelling financial asymmetry"
    ],
    "targetGrammar": "Persuasive rhetorical devices (antithesis, high-order collocations, conclusive assertions)",
    "checklist": [
      "Establish empirical supremacy with data collocations",
      "Contrast your solution against incumbent vulnerabilities",
      "Close with an inescapable logical conclusion"
    ],
    "rounds": {
      "remember": [
        "Say 3 high-register persuasion collocations: empirical rigor, decisive superiority, incontrovertible proof."
      ],
      "use": [
        "Make 2 persuasive thesis statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a masterclass in venture persuasion and empirical defense."
      ]
    }
  },
  "adults:c-adults-masters-7": {
    "bossName": "Dialectical Philosopher",
    "bossTitle": "Complex Debates & Concessive Balance Boss",
    "bossAvatar": "⚖️",
    "mission": "Tackle a multifaceted ethical dilemma in tech! Balance economic deregulation against consumer safeguards using nuanced concessive clauses.",
    "starterPhrase": "While market deregulation unquestionably stimulates rapid technological innovation, robust consumer safeguards remain indispensable...",
    "powerWords": [
      "While deregulation stimulates growth",
      "Safeguards remain indispensable",
      "Striking a delicate dialectical balance"
    ],
    "targetGrammar": "Concessive clauses (While, Although, Notwithstanding that, Albeit)",
    "checklist": [
      "Acknowledge the merit of the opposing thesis with \"While...\"",
      "Advance your counter-position with nuanced force",
      "Synthesize both into a balanced governance paradigm"
    ],
    "rounds": {
      "remember": [
        "Use \"Notwithstanding that\" and \"While\" to frame concessive arguments."
      ],
      "use": [
        "Make 2 balanced dialectical sentences."
      ],
      "speak": [
        "Speak for 30 seconds: Moderate a high-stakes ethical debate with dialectical nuance and poise."
      ]
    }
  },
  "adults:c-adults-masters-8": {
    "bossName": "Master Storyteller",
    "bossTitle": "Executive Storytelling & Institutional Resilience Boss",
    "bossAvatar": "💥",
    "mission": "Narrate a crisis-to-triumph leadership story! Explain how an initial catastrophic failure was transformed into an enduring organizational moat.",
    "starterPhrase": "Overcoming that initial operational crisis taught our leadership team how to construct truly resilient organizations...",
    "powerWords": [
      "Overcoming catastrophic failure",
      "Catalyst for organizational rebirth",
      "Constructed resilient foundations"
    ],
    "targetGrammar": "Gerund subject framing (Overcoming..., Transforming...) + Narrative arc",
    "checklist": [
      "Hook with the moment of crisis",
      "Articulate the turning point of institutional learning",
      "Conclude with the lasting cultural transformation"
    ],
    "rounds": {
      "remember": [
        "Frame a gerund subject: \"Overcoming adversity taught us resilience.\""
      ],
      "use": [
        "Make 2 sentences embedding narrative transformation."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a moving, authoritative leadership story that inspires an entire enterprise."
      ]
    }
  },
  "adults:c-adults-masters-9": {
    "bossName": "Critical Discourse Analyst",
    "bossTitle": "Critical Media Discourse & Macroeconomic Critique Boss",
    "bossAvatar": "📰",
    "mission": "Deliver a blistering academic critique of a prevailing macroeconomic editorial! Expose structural oversights and analytical blind spots.",
    "starterPhrase": "The prevailing editorial narrative completely fails to account for structural macroeconomic headwinds affecting emerging markets...",
    "powerWords": [
      "Fails to account for",
      "Underlying analytical blind spot",
      "Flawed foundational premise"
    ],
    "targetGrammar": "Academic critique collocations (fails to account for, predicated on false assumptions, conflates X with Y)",
    "checklist": [
      "Identify the core fallacy in the editorial",
      "Expose the missing macroeconomic variable",
      "Propose an analytically rigorous alternative model"
    ],
    "rounds": {
      "remember": [
        "Say 3 critique verbs: conflate, mischaracterize, fail to account for."
      ],
      "use": [
        "Make 2 rigorous critical discourse statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a sharp, intellectually formidable critique of global economic media narratives."
      ]
    }
  },
  "adults:c-adults-masters-10": {
    "bossName": "Supreme Chancellor",
    "bossTitle": "Masters Grand Capstone Defense Boss",
    "bossAvatar": "👑",
    "mission": "Deliver your C2 Masters Grand Capstone Defense! Synthesize strategic vision, institutional moats, and transformative leadership for the next decade.",
    "starterPhrase": "Members of the board, our multi-year strategic roadmap establishes defensible competitive moats across all global verticals, ensuring...",
    "powerWords": [
      "Defensible competitive moats",
      "Transformative societal impact",
      "Transcends conventional paradigms"
    ],
    "targetGrammar": "Complete C2 English Mastery (Rhetorical eloquence, inversion, clefts, tricolon, and authoritative cadence)",
    "checklist": [
      "Articulate long-term institutional vision",
      "Demonstrate defensible competitive moats",
      "Deliver a timeless closing call to transformative action"
    ],
    "rounds": {
      "remember": [
        "Say 5 C2 mastery terms that define supreme communicative leadership."
      ],
      "use": [
        "Deliver two transcendent sentences combining rhetorical power and analytical precision."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your grand Masters Capstone Defense and claim complete English mastery!"
      ]
    }
  },
  "teens:c-teens-basic-zero-1": {
    "bossName": "Campus Guide",
    "bossTitle": "Hello & Teen Introductions Challenge",
    "bossAvatar": "👋",
    "mission": "Introduce yourself to new classmates! State your name, age, city, and your favorite hobbies.",
    "starterPhrase": "Hey everyone, my name is... and I am super excited to...",
    "powerWords": [
      "Full name",
      "Fifteen years old",
      "Love skateboarding"
    ],
    "targetGrammar": "Present To Be (I am / My name is / I am into)",
    "checklist": [
      "Greet your classmates with energy",
      "Tell your age and grade",
      "Name your number one hobby"
    ],
    "rounds": {
      "remember": [
        "Say 3 cool introduction phrases: What's up, My name is, Nice to meet you."
      ],
      "use": [
        "Make 1 sentence with \"I am...\", 1 with \"I am not...\", and 1 asking \"What's your name?\""
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a friendly, confident self-introduction to your new high school class."
      ]
    }
  },
  "teens:c-teens-basic-zero-2": {
    "bossName": "Party Planner",
    "bossTitle": "Numbers, Ages & Birthdays Challenge",
    "bossAvatar": "🎂",
    "mission": "Describe your dream birthday party! State your age, when your birthday is, and how many friends are invited.",
    "starterPhrase": "My birthday is on... and for my party this year, I am inviting...",
    "powerWords": [
      "Turning sixteen",
      "Party playlist",
      "Celebrate with friends"
    ],
    "targetGrammar": "I am + age / My birthday is in/on + date",
    "checklist": [
      "State your exact age and birthday",
      "Tell how many friends are coming",
      "Describe your dream birthday cake and snacks"
    ],
    "rounds": {
      "remember": [
        "Count by tens in English from 10 to 100!"
      ],
      "use": [
        "Make 1 sentence with your age, 1 with your birthday month, and 1 age question."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch your ultimate birthday party concept with food, music, and guests!"
      ]
    }
  },
  "teens:c-teens-basic-zero-3": {
    "bossName": "Sports Captain",
    "bossTitle": "My Body & High-Energy Sports Challenge",
    "bossAvatar": "🏃‍♂️",
    "mission": "Showcase your athletic energy! Describe your body fitness, what sports you play, and how you score points.",
    "starterPhrase": "When I play sports on the court, I use my speed to...",
    "powerWords": [
      "Run fast",
      "Score points",
      "Team spirit"
    ],
    "targetGrammar": "I have + body parts / I can + action verbs (run, jump, score)",
    "checklist": [
      "Name 2 body parts used in your sport",
      "State 2 athletic moves you can do",
      "Explain why you love your team"
    ],
    "rounds": {
      "remember": [
        "Say 3 sports action verbs: sprint, kick, jump."
      ],
      "use": [
        "Make 1 sentence with \"I can run...\", 1 with \"My legs are strong\", and 1 sports question."
      ],
      "speak": [
        "Speak for 30 seconds: Give a play-by-play commentary of your winning sports moment!"
      ]
    }
  },
  "teens:c-teens-basic-zero-4": {
    "bossName": "Tech Streamer",
    "bossTitle": "Favorite Gadgets, Tech & Gaming Challenge",
    "bossAvatar": "🎮",
    "mission": "Give a tour of your digital battlestation! Describe your smartphone, gaming console, headset, and favorite apps.",
    "starterPhrase": "Welcome to my digital setup! My favorite gadget of all is my...",
    "powerWords": [
      "Wireless headset",
      "High-speed console",
      "Favorite gaming app"
    ],
    "targetGrammar": "This is my... / These are my... / It has...",
    "checklist": [
      "Name your top 2 tech gadgets",
      "Describe their specs and colors",
      "Explain what games or videos you create with them"
    ],
    "rounds": {
      "remember": [
        "Say 3 tech words: smartphone, console, headphones."
      ],
      "use": [
        "Make 1 sentence with \"This gadget is...\", 1 with \"These are my...\", and 1 tech question."
      ],
      "speak": [
        "Speak for 30 seconds: Present a tech review of your favorite device or gaming accessory!"
      ]
    }
  },
  "teens:c-teens-basic-zero-5": {
    "bossName": "Foodie Vlogger",
    "bossTitle": "Food Likes, Dislikes & Flavors Challenge",
    "bossAvatar": "🍕",
    "mission": "Host a teen food review vlog! Rate your favorite comfort foods, snacks, spicy cravings, and drinks.",
    "starterPhrase": "What's up foodies! Today I am reviewing my ultimate comfort snack, which is...",
    "powerWords": [
      "Cheesy pizza",
      "Iced boba tea",
      "Delicious and crispy"
    ],
    "targetGrammar": "I love / I like / I hate + food / Adjectives of taste (sweet, spicy, crunchy)",
    "checklist": [
      "Name your favorite snack and flavor",
      "Name 1 food you cannot stand",
      "Describe your dream fast food meal"
    ],
    "rounds": {
      "remember": [
        "Say 3 taste adjectives: sweet, spicy, savory."
      ],
      "use": [
        "Make 1 sentence with \"I love eating...\", 1 with \"I don't like...\", and 1 food preference question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an enthusiastic food review of your favorite street food spot!"
      ]
    }
  },
  "teens:c-teens-basic-zero-6": {
    "bossName": "Streetwear Stylist",
    "bossTitle": "Shapes, Colors & Streetwear Graphics Challenge",
    "bossAvatar": "🎨",
    "mission": "Design your own custom streetwear hoodie! Describe the geometric shapes, neon colors, and cool logo prints.",
    "starterPhrase": "My custom streetwear brand features an oversized hoodie with...",
    "powerWords": [
      "Purple geometric shapes",
      "Neon graphic print",
      "Oversized hoodie"
    ],
    "targetGrammar": "Colors + Shapes + Adjectives of design (circular, triangular, neon)",
    "checklist": [
      "Describe the base color and fit",
      "Name 2 geometric shapes on the graphic logo",
      "Explain where you would wear it"
    ],
    "rounds": {
      "remember": [
        "Say 3 geometric shapes and 3 vibrant colors in English."
      ],
      "use": [
        "Make 1 sentence describing an outfit with shapes and colors, and 1 style question."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch your original teen streetwear design concept to the class!"
      ]
    }
  },
  "teens:c-teens-basic-zero-7": {
    "bossName": "Pet Whisperer",
    "bossTitle": "My Family & Pet Animals Challenge",
    "bossAvatar": "🐱",
    "mission": "Introduce your family pets and squad! Describe what your pet does when you arrive home and how you take care of it.",
    "starterPhrase": "At home with my family, our pet is the funniest because it...",
    "powerWords": [
      "Playful cat",
      "Cuddle on the couch",
      "Part of our family"
    ],
    "targetGrammar": "Possessive 's + Animal actions (My dog's name is... / It sleeps on...)",
    "checklist": [
      "Name your pet or dream animal",
      "Describe its personality and fur color",
      "Share a funny story about it at home"
    ],
    "rounds": {
      "remember": [
        "Say 3 pet personality traits: playful, lazy, friendly."
      ],
      "use": [
        "Make 1 sentence with \"My pet is...\", 1 with \"It likes to...\", and 1 pet question."
      ],
      "speak": [
        "Speak for 30 seconds: Tell a heartwarming or hilarious story about your family pet!"
      ]
    }
  },
  "teens:c-teens-basic-zero-8": {
    "bossName": "Classroom DJ",
    "bossTitle": "Classroom & School Supplies Challenge",
    "bossAvatar": "🎒",
    "mission": "Organize your school gear before the first bell rings! Show what is inside your backpack and what you need for science class.",
    "starterPhrase": "Before high school starts every morning, I make sure my backpack has...",
    "powerWords": [
      "Essential supplies",
      "Spiral notebook",
      "Scientific calculator"
    ],
    "targetGrammar": "I need + noun / I have + plural school supplies",
    "checklist": [
      "Name 3 essential school supplies",
      "Explain what you use them for in class",
      "Describe your favorite subject folder"
    ],
    "rounds": {
      "remember": [
        "Name 3 high school tools: calculator, folder, highlighter."
      ],
      "use": [
        "Make 1 sentence with \"I have my...\", 1 with \"I need a...\", and 1 supply question."
      ],
      "speak": [
        "Speak for 30 seconds: Give a backpack essentials guide for surviving high school!"
      ]
    }
  },
  "teens:c-teens-basic-zero-9": {
    "bossName": "Vibe Creator",
    "bossTitle": "Daily Routine & After-School Vibes Challenge",
    "bossAvatar": "🛹",
    "mission": "Walk through your after-school routine! Explain what time the bell rings, where you hang out with friends, and your evening vibes.",
    "starterPhrase": "The moment the final school bell rings at three, I usually...",
    "powerWords": [
      "Hang out at the park",
      "Skate with friends",
      "Listen to chill music"
    ],
    "targetGrammar": "Present Simple routine verbs + Time prepositions (at 3:00 PM, after school)",
    "checklist": [
      "Describe your immediate after-school action",
      "Mention where you hang out with friends",
      "Tell what time you wind down at night"
    ],
    "rounds": {
      "remember": [
        "Say 3 after-school activities: skate, do homework, listen to music."
      ],
      "use": [
        "Make 1 sentence with \"After school I...\", 1 with \"I don't go straight home\", and 1 routine question."
      ],
      "speak": [
        "Speak for 30 seconds: Describe your ultimate Friday afternoon and evening routine!"
      ]
    }
  },
  "teens:c-teens-basic-zero-10": {
    "bossName": "Beats Curator",
    "bossTitle": "Favorite Music, Beats & Playlists Challenge",
    "bossAvatar": "🎸",
    "mission": "Share your ultimate Spotify playlist! Describe your top genre, favorite artist, and what song you play to get hyped.",
    "starterPhrase": "When I put on my headphones, my number one music genre is...",
    "powerWords": [
      "Hip-hop beats",
      "Indie rock artist",
      "Hype playlist"
    ],
    "targetGrammar": "I listen to... / My favorite band is... / It makes me feel...",
    "checklist": [
      "Name your favorite musical artist or genre",
      "Explain why you love their beats",
      "Describe what song you listen to before exams or sports"
    ],
    "rounds": {
      "remember": [
        "Say 3 music genres: hip-hop, indie pop, electronic."
      ],
      "use": [
        "Make 1 sentence with \"I listen to...\", 1 with \"My favorite track is...\", and 1 music question."
      ],
      "speak": [
        "Speak for 30 seconds: Recommend your top playlist to the class and describe the vibe!"
      ]
    }
  },
  "teens:c-teens-basic-zero-11": {
    "bossName": "Hangout Guide",
    "bossTitle": "Neighborhood Hangouts & Shopping Mall Challenge",
    "bossAvatar": "🏬",
    "mission": "Guide the crew to the best hangout spot in your city! Describe the shopping mall, the smoothie bar, and the skate park.",
    "starterPhrase": "If you are looking for the coolest hangout in town, you have to visit...",
    "powerWords": [
      "Shopping mall arcade",
      "Smoothie bar",
      "Skate park bowl"
    ],
    "targetGrammar": "There is a... / You can find... / Next to the...",
    "checklist": [
      "Name your favorite neighborhood spot",
      "Tell 2 things you and your friends do there",
      "Give location landmarks to find it"
    ],
    "rounds": {
      "remember": [
        "Say 3 hangout spots: skate park, shopping mall, coffee lounge."
      ],
      "use": [
        "Make 1 sentence with \"There is a cool...\", 1 with \"We can hang out at...\", and 1 hangout question."
      ],
      "speak": [
        "Speak for 30 seconds: Give a guided tour of the best teen hangout spot in your city!"
      ]
    }
  },
  "teens:c-teens-basic-zero-12": {
    "bossName": "Interview Host",
    "bossTitle": "Question Master with Verb To Be Challenge",
    "bossAvatar": "❓",
    "mission": "Host a rapid-fire celebrity teen interview! Ask 3 engaging personal questions using verb to be regarding age, hometown, and favorites.",
    "starterPhrase": "Welcome to our teen podcast! Today our first rapid question is...",
    "powerWords": [
      "How old are you",
      "Where are you from",
      "Who is your favorite"
    ],
    "targetGrammar": "Wh- questions with To Be (Who is / Where are / How old is)",
    "checklist": [
      "Ask 1 question about age",
      "Ask 1 question about origin/city",
      "Ask 1 question about favorite artists"
    ],
    "rounds": {
      "remember": [
        "Formulate 3 question starters: Who is? Where are? Why is?"
      ],
      "use": [
        "Make 2 questions with \"Are you...?\" and 1 with \"What is your...?\""
      ],
      "speak": [
        "Speak for 30 seconds: Conduct a lively, energetic rapid-fire interview with a guest."
      ]
    }
  },
  "teens:c-teens-basic-zero-13": {
    "bossName": "Beach Vibe Leader",
    "bossTitle": "Weather, Outfits & Weekend Hangouts Challenge",
    "bossAvatar": "☀️",
    "mission": "Plan a sunny weekend beach day with your friends! Describe the weather, what sunglasses and outfits to wear, and beach games.",
    "starterPhrase": "This Saturday the forecast is sunny and warm, so our crew is heading to...",
    "powerWords": [
      "Sunny forecast",
      "Cool sunglasses",
      "Beach volleyball"
    ],
    "targetGrammar": "It is + weather adjective / We are wearing...",
    "checklist": [
      "State the sunny weather forecast",
      "Describe your casual outfit with accessories",
      "List 2 beach games you are going to play"
    ],
    "rounds": {
      "remember": [
        "Say 3 sunny weather words: bright, warm, breezy."
      ],
      "use": [
        "Make 1 sentence with \"It is sunny so...\", 1 with \"I am wearing...\", and 1 weather question."
      ],
      "speak": [
        "Speak for 30 seconds: Organize and announce the ultimate sunny weekend beach hangout!"
      ]
    }
  },
  "teens:c-teens-basic-zero-14": {
    "bossName": "Arcade Champion",
    "bossTitle": "Action Verbs & Video Game Skills Challenge",
    "bossAvatar": "🕹️",
    "mission": "Explain how to win an action-packed multiplayer game! Give commands on when to run, jump, dodge obstacles, and grab power-ups.",
    "starterPhrase": "To defeat the final level boss in this game, your character must...",
    "powerWords": [
      "Dodge obstacles",
      "Collect power-ups",
      "Level up fast"
    ],
    "targetGrammar": "Action verbs in imperative and ability (run, jump, dodge, grab, unlock)",
    "checklist": [
      "Name 3 action movements needed in the game",
      "Explain how to defeat the enemy boss",
      "Share your secret pro-gamer trick"
    ],
    "rounds": {
      "remember": [
        "Say 3 gaming action verbs: unlock, dodge, trigger."
      ],
      "use": [
        "Make 2 action skill sentences and 1 gaming inquiry question."
      ],
      "speak": [
        "Speak for 30 seconds: Give a pro-gamer strategy guide for beating a challenging level!"
      ]
    }
  },
  "teens:c-teens-basic-zero-15": {
    "bossName": "Creative Lens",
    "bossTitle": "Passions, Digital Photography & Hobbies Challenge",
    "bossAvatar": "📸",
    "mission": "Showcase your photography or creative hobby portfolio! Describe what scenic spots you shoot and how you edit aesthetic photos.",
    "starterPhrase": "My biggest creative passion is photography because I love capturing...",
    "powerWords": [
      "Aesthetic photography",
      "Golden hour lighting",
      "Creative editing"
    ],
    "targetGrammar": "I love / I enjoy + gerund (-ing) / Adjectives of aesthetics",
    "checklist": [
      "Name your creative hobby",
      "Describe your favorite subject to photograph",
      "Explain what makes your creative style unique"
    ],
    "rounds": {
      "remember": [
        "Say 3 visual art terms: lighting, composition, aesthetic."
      ],
      "use": [
        "Make 1 sentence with \"I enjoy shooting...\", 1 with \"I love editing...\", and 1 hobby question."
      ],
      "speak": [
        "Speak for 30 seconds: Present your photography portfolio and inspire classmates to create art!"
      ]
    }
  },
  "teens:c-teens-basic-zero-16": {
    "bossName": "Teen Legend",
    "bossTitle": "Basic Zero Grand Capstone Celebration Challenge",
    "bossAvatar": "🌟",
    "mission": "Deliver your Basic Zero victory speech! Summarize your progress, your favorite slang, gadgets, hobbies, and readiness for Basic 1.",
    "starterPhrase": "We officially leveled up! Looking back on Basic Zero, I have learned how to...",
    "powerWords": [
      "Leveled up",
      "Speak with confidence",
      "Ready for Basic 1"
    ],
    "targetGrammar": "Complete Basic Zero synthesis (To Be + Hobbies + Routines + Tech + Sports)",
    "checklist": [
      "Celebrate your progress in English",
      "Highlight your favorite topic from the course",
      "Express your excitement for the next level"
    ],
    "rounds": {
      "remember": [
        "Say 5 English words that represent your teen identity!"
      ],
      "use": [
        "Formulate 2 complex sentences combining your lifestyle, hobbies, and goals."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your triumphant Basic Zero graduation victory speech!"
      ]
    }
  },
  "teens:c-teens-basic-1-1": {
    "bossName": "Morning Hustler",
    "bossTitle": "High School Morning Habits & Bus Routines Challenge",
    "bossAvatar": "🚌",
    "mission": "Walk through your morning race to high school! Explain how you get ready, pack your lunch, and catch the school bus on time.",
    "starterPhrase": "My morning routine starts at six thirty when the alarm goes off, and I...",
    "powerWords": [
      "Catch the school bus",
      "Grab a quick breakfast",
      "Never arrive late"
    ],
    "targetGrammar": "Present Simple routines + Time markers (every morning, at 7:15 AM)",
    "checklist": [
      "State your wake-up time",
      "Describe how you get ready in 15 minutes",
      "Tell what you do on the bus ride to school"
    ],
    "rounds": {
      "remember": [
        "Say 3 morning routine verbs: wake up, brush teeth, catch the bus."
      ],
      "use": [
        "Make 1 sentence with \"I usually wake up at...\", 1 with \"I don't skip breakfast\", and 1 routine question."
      ],
      "speak": [
        "Speak for 30 seconds: Describe your chaotic yet successful morning routine before the first bell!"
      ]
    }
  },
  "teens:c-teens-basic-1-2": {
    "bossName": "Content Creator",
    "bossTitle": "Favorite Creators & Social Media Habits Challenge",
    "bossAvatar": "📱",
    "mission": "Review your favorite digital creator or YouTuber! Explain what content they post, why their videos are engaging, and when you watch them.",
    "starterPhrase": "My favorite online content creator is... because they create awesome...",
    "powerWords": [
      "Engaging short tutorials",
      "Viral videos",
      "Stream weekly"
    ],
    "targetGrammar": "Third person Present Simple (He posts, She streams, They create)",
    "checklist": [
      "Name the content creator or channel",
      "Describe their style with 3rd person -s verbs",
      "Explain why their community is so active"
    ],
    "rounds": {
      "remember": [
        "Conjugate 3 verbs for 3rd person: creates, streams, uploads."
      ],
      "use": [
        "Make 2 sentences with He/She + verb-s and 1 question about social media habits."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch your favorite digital creator to the class and explain why they inspire you!"
      ]
    }
  },
  "teens:c-teens-basic-1-3": {
    "bossName": "Robotics Captain",
    "bossTitle": "Teen School Clubs & STEM Projects Challenge",
    "bossAvatar": "🤖",
    "mission": "Recruit new members to your high school robotics or creative club! Describe what projects you build, meetings, and competitions.",
    "starterPhrase": "Join our award-winning school robotics club! Every Wednesday after class, we...",
    "powerWords": [
      "Build smart robots",
      "Code custom scripts",
      "Compete in tournaments"
    ],
    "targetGrammar": "Present Simple with We / They (We build, we code, we test)",
    "checklist": [
      "Name your club and meeting day",
      "Describe 2 hands-on projects you work on",
      "Give a call to action inviting classmates to join"
    ],
    "rounds": {
      "remember": [
        "Say 3 STEM club terms: robotics, coding, tournament."
      ],
      "use": [
        "Make 1 sentence with \"Our club meets on...\", 1 with \"We build...\", and 1 invitation question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a high-energy recruitment pitch for your favorite school club!"
      ]
    }
  },
  "teens:c-teens-basic-1-4": {
    "bossName": "Eco Warrior",
    "bossTitle": "Nature, Parks & Eco-Friendly Teen Habits Challenge",
    "bossAvatar": "🌳",
    "mission": "Promote green eco-habits on campus! Explain how students can bike to school, reduce plastic waste, and keep community parks clean.",
    "starterPhrase": "To protect our local environment and parks, teenagers should always...",
    "powerWords": [
      "Recycle plastic bottles",
      "Bike to school",
      "Protect green spaces"
    ],
    "targetGrammar": "Present Simple eco-actions + Frequency adverbs (always recycle, never litter)",
    "checklist": [
      "State 2 positive green habits",
      "State 1 harmful habit to avoid (never litter)",
      "Describe a fun activity in your local park"
    ],
    "rounds": {
      "remember": [
        "Say 3 eco-action verbs: recycle, conserve, protect."
      ],
      "use": [
        "Make 1 sentence with \"We always recycle...\", 1 with \"We never litter...\", and 1 eco question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a passionate youth environmental pledge for your school!"
      ]
    }
  },
  "teens:c-teens-basic-1-5": {
    "bossName": "Cinema Critic",
    "bossTitle": "Weekend Movie Nights & Streaming Vibes Challenge",
    "bossAvatar": "🍿",
    "mission": "Organize a Friday night movie marathon with your squad! Recommend a sci-fi or anime series, snacks, and screen setup.",
    "starterPhrase": "For our Friday night streaming marathon, I recommend that we watch...",
    "powerWords": [
      "Sci-fi blockbuster",
      "Fresh butter popcorn",
      "Stream the latest season"
    ],
    "targetGrammar": "I recommend / We usually watch / It has an incredible plot",
    "checklist": [
      "Name the movie or anime series",
      "Describe the genre and storyline",
      "List the essential snacks and drinks for the marathon"
    ],
    "rounds": {
      "remember": [
        "Say 3 entertainment genres: sci-fi, comedy, animation."
      ],
      "use": [
        "Make 1 recommendation sentence, 1 snack sentence, and 1 movie preference question."
      ],
      "speak": [
        "Speak for 30 seconds: Present your ultimate weekend movie night plan to your friends!"
      ]
    }
  },
  "teens:c-teens-basic-1-6": {
    "bossName": "Squad Tactician",
    "bossTitle": "Gaming Tournaments & Strategy Callouts Challenge",
    "bossAvatar": "🎮",
    "mission": "Lead your esports squad in an intense multiplayer match! Give live strategic callouts on positioning, communication, and teamwork.",
    "starterPhrase": "Listen up squad! To win this tournament match, our strategy is to...",
    "powerWords": [
      "Coordinate voice chat",
      "Defend the objective",
      "Execute the game plan"
    ],
    "targetGrammar": "Imperatives & Present Simple teamwork (Rotate right, watch the flank, we hold this zone)",
    "checklist": [
      "Give 2 clear tactical commands",
      "Highlight the importance of voice communication",
      "Motivate the squad to secure the trophy"
    ],
    "rounds": {
      "remember": [
        "Say 3 tactical callout verbs: flank, defend, rotate."
      ],
      "use": [
        "Make 2 tactical strategy sentences and 1 team check-in question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an electrifying pre-match tactical speech to your esports team!"
      ]
    }
  },
  "teens:c-teens-basic-1-7": {
    "bossName": "Thrift Hunter",
    "bossTitle": "Fashion Styles & Thrift Store Finds Challenge",
    "bossAvatar": "🧥",
    "mission": "Showcase an amazing thrift store haul! Describe vintage denim jackets, oversized graphic tees, and styling on a budget.",
    "starterPhrase": "I found an incredible vintage streetwear look at the thrift shop, including a...",
    "powerWords": [
      "Vintage denim jacket",
      "Retro sneakers",
      "Sustainable fashion"
    ],
    "targetGrammar": "Descriptive adjectives + Present Simple shopping (I find, it costs, it looks)",
    "checklist": [
      "Describe 2 unique thrifted items with colors/materials",
      "Explain how you style them together",
      "Share tips for finding great budget fashion"
    ],
    "rounds": {
      "remember": [
        "Say 3 fashion terms: vintage, oversized, sustainable."
      ],
      "use": [
        "Make 1 sentence with \"I found a cool...\", 1 with \"It matches my...\", and 1 fashion question."
      ],
      "speak": [
        "Speak for 30 seconds: Present your stylish thrift store haul and give sustainable fashion advice!"
      ]
    }
  },
  "teens:c-teens-basic-1-8": {
    "bossName": "Street Food Critic",
    "bossTitle": "Favorite Street Snacks & Fast Food Challenge",
    "bossAvatar": "🌮",
    "mission": "Review your neighborhood's best food truck! Describe their signature spicy tacos, crispy fries, and refreshing iced fruit drinks.",
    "starterPhrase": "The best food truck near our school is famous for its delicious...",
    "powerWords": [
      "Spicy street tacos",
      "Crispy seasoned fries",
      "Refreshing smoothie"
    ],
    "targetGrammar": "Sensory adjectives (crispy, spicy, tender) + Simple Present reviews (They serve, it tastes)",
    "checklist": [
      "Name the food spot and dish",
      "Describe the texture and flavor with sensory adjectives",
      "Give your final rating out of 10"
    ],
    "rounds": {
      "remember": [
        "Say 3 sensory flavor words: spicy, tangy, savory."
      ],
      "use": [
        "Make 2 descriptive food review sentences and 1 recommendation question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a mouthwatering food review of your favorite street food spot!"
      ]
    }
  },
  "teens:c-teens-basic-1-9": {
    "bossName": "Visual Editor",
    "bossTitle": "Digital Photography & Aesthetic Editing Challenge",
    "bossAvatar": "📸",
    "mission": "Explain how to shoot and edit viral Instagram or TikTok photos! Detail framing, natural lighting, and color grading tips.",
    "starterPhrase": "To take stunning aesthetic photos on your phone, you should always...",
    "powerWords": [
      "Natural golden hour",
      "Rule of thirds",
      "Color grading preset"
    ],
    "targetGrammar": "Instructional steps (First capture..., then adjust..., always use...)",
    "checklist": [
      "Give 1 lighting tip (golden hour, natural light)",
      "Give 1 composition rule (angles, framing)",
      "Explain your editing process before posting"
    ],
    "rounds": {
      "remember": [
        "Say 3 photography words: contrast, saturation, composition."
      ],
      "use": [
        "Make 2 photo editing advice sentences and 1 camera inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a masterclass on shooting and editing aesthetic mobile photography!"
      ]
    }
  },
  "teens:c-teens-basic-1-10": {
    "bossName": "Showcase Dean",
    "bossTitle": "Basic 1 Teen Showcase & Review Challenge",
    "bossAvatar": "🏆",
    "mission": "Deliver your Basic 1 Showcase presentation! Reflect on your habits, school clubs, creative passions, and digital lifestyle.",
    "starterPhrase": "Welcome to my Basic 1 Showcase! Throughout this level, I have mastered speaking about...",
    "powerWords": [
      "Digital lifestyle",
      "High school passions",
      "Fluent storytelling"
    ],
    "targetGrammar": "Basic 1 synthesis (Present Simple routines + Clubs + Media + Hobbies)",
    "checklist": [
      "Summarize your daily school life",
      "Highlight your proudest club or creative project",
      "Declare your readiness to level up to Basic 2"
    ],
    "rounds": {
      "remember": [
        "Say 5 high-impact vocabulary words from Basic 1."
      ],
      "use": [
        "Formulate 2 complex sentences connecting routines and passions."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Basic 1 Showcase speech with energy and fluency!"
      ]
    }
  },
  "teens:c-teens-basic-2-1": {
    "bossName": "Studio Director",
    "bossTitle": "Digital Creators & Content Filming Challenge",
    "bossAvatar": "📹",
    "mission": "Give behind-the-scenes access to your content creation studio! Describe what you are filming today, camera angles, and ring lights.",
    "starterPhrase": "Welcome behind the scenes! Right now in our studio, we are filming...",
    "powerWords": [
      "Filming a vlog episode",
      "Adjusting the ring light",
      "Setting up the microphone"
    ],
    "targetGrammar": "Present Continuous (We are filming, I am adjusting)",
    "checklist": [
      "Describe what you are shooting right now",
      "Mention camera and audio gear in use",
      "State what video you will edit next"
    ],
    "rounds": {
      "remember": [
        "Say 3 studio production terms: microphone, tripod, ring light."
      ],
      "use": [
        "Make 1 sentence with \"I am filming...\", 1 with \"We are recording...\", and 1 status question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an energetic behind-the-scenes broadcast from your creator studio!"
      ]
    }
  },
  "teens:c-teens-basic-2-2": {
    "bossName": "Squad Leader",
    "bossTitle": "Online Gaming Squads in Real Time Challenge",
    "bossAvatar": "🎧",
    "mission": "Call out live action in a competitive online gaming lobby! Describe what each teammate is doing right now to defend the base.",
    "starterPhrase": "In our live match right now, Liam is holding the left flank while I am...",
    "powerWords": [
      "Defending the base",
      "Communicating on Discord",
      "Securing the objective"
    ],
    "targetGrammar": "Present Continuous in live sports/gaming commentary",
    "checklist": [
      "Describe your immediate in-game action",
      "Describe what your teammate is doing",
      "Give a call to action to secure victory"
    ],
    "rounds": {
      "remember": [
        "Say 3 live gaming actions in -ing: defending, rushing, flanking."
      ],
      "use": [
        "Make 2 live action sentences and 1 teammate check-in question."
      ],
      "speak": [
        "Speak for 30 seconds: Give a high-intensity live commentary of your gaming squad in action!"
      ]
    }
  },
  "teens:c-teens-basic-2-3": {
    "bossName": "Festival Promoter",
    "bossTitle": "Concert Plans & Weekend Events Challenge",
    "bossAvatar": "🎟️",
    "mission": "Invite your friends to an epic outdoor music festival! Describe the headline bands, ticket deals, and festival outfits.",
    "starterPhrase": "You cannot miss this! Would you like to come with our squad to the...",
    "powerWords": [
      "Indie music festival",
      "Headline performance",
      "General admission tickets"
    ],
    "targetGrammar": "Would you like to come to... / We are planning to...",
    "checklist": [
      "Name the music festival and dates",
      "Mention 2 bands performing live",
      "Invite your friend with \"Would you like to join us?\""
    ],
    "rounds": {
      "remember": [
        "Say 3 concert event terms: stage, headliner, festival pass."
      ],
      "use": [
        "Make 1 invitation with \"Would you like to...\", 1 with \"We are going to...\", and 1 planning question."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch an unmissable weekend concert trip to your friend group!"
      ]
    }
  },
  "teens:c-teens-basic-2-4": {
    "bossName": "Dual Streamer",
    "bossTitle": "Routines vs Live Streaming Actions Challenge",
    "bossAvatar": "📚",
    "mission": "Contrast your normal school routine with a special live-streaming event today! Explain what you usually do vs what you are doing right now.",
    "starterPhrase": "Normally on Tuesday afternoons I do homework, but today I am live-streaming my...",
    "powerWords": [
      "Usually study algebra",
      "Today I am live-streaming",
      "Exciting special event"
    ],
    "targetGrammar": "Contrast Simple (usually) vs Continuous (today I am -ing)",
    "checklist": [
      "State your usual habit with \"usually\"",
      "State your live stream with \"today I am...\"",
      "Explain why today is special"
    ],
    "rounds": {
      "remember": [
        "Contrast permanent habit vs live action."
      ],
      "use": [
        "Make 1 compound sentence contrasting \"usually...\" with \"but today I am...\"."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a vlog intro contrasting your normal schedule with today's live stream!"
      ]
    }
  },
  "teens:c-teens-basic-2-5": {
    "bossName": "Game Reviewer",
    "bossTitle": "Expressing Opinions on Video Games Challenge",
    "bossAvatar": "🎮",
    "mission": "Deliver an in-depth video game review! Share your honest opinion on graphics, storyline, combat mechanics, and replay value.",
    "starterPhrase": "In my honest gaming opinion, this new open-world adventure is...",
    "powerWords": [
      "Stunning visual graphics",
      "Immersive storyline",
      "Highly recommend it"
    ],
    "targetGrammar": "Opinion verbs + Stative verbs (I believe, I think, it features, it looks)",
    "checklist": [
      "State your overall opinion on the game",
      "Praise 1 specific feature (graphics, sound, lore)",
      "Give constructive advice for improvement"
    ],
    "rounds": {
      "remember": [
        "Say 3 gaming review terms: immersion, graphics, gameplay mechanics."
      ],
      "use": [
        "Make 1 sentence with \"I believe that...\", 1 with \"In my opinion...\", and 1 recommendation inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a professional, polished review of your favorite video game!"
      ]
    }
  },
  "teens:c-teens-basic-2-6": {
    "bossName": "Travel Vlogger",
    "bossTitle": "Travel Packing & Airport Boarding Challenge",
    "bossAvatar": "🧳",
    "mission": "Document your airport departure for an international school exchange! Describe packing your carry-on, boarding passes, and takeoff feelings.",
    "starterPhrase": "We are at the airport gate right now, and I am packing my carry-on with...",
    "powerWords": [
      "Passport and boarding pass",
      "Carry-on backpack",
      "Boarding at gate seven"
    ],
    "targetGrammar": "Present Continuous travel actions (packing, checking in, waiting at the gate)",
    "checklist": [
      "Describe 2 essential travel items in your bag",
      "State what gate you are boarding at",
      "Express your excitement for the destination"
    ],
    "rounds": {
      "remember": [
        "Say 3 airport terms: boarding pass, departure gate, security check."
      ],
      "use": [
        "Make 2 travel in-progress sentences and 1 flight inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Broadcast a live airport departure update before boarding your flight!"
      ]
    }
  },
  "teens:c-teens-basic-2-7": {
    "bossName": "Tech Troubleshooter",
    "bossTitle": "Tech Troubleshooting & Device Tips Challenge",
    "bossAvatar": "🔌",
    "mission": "Give step-by-step tech support to fix a laggy connection or frozen device! Give clear commands on restarting, clearing cache, and updating apps.",
    "starterPhrase": "If your gaming console is lagging or disconnected, follow these easy steps: first...",
    "powerWords": [
      "Restart the wifi router",
      "Clear application cache",
      "Update the firmware"
    ],
    "targetGrammar": "Imperatives for tech support (Restart, check, connect, update)",
    "checklist": [
      "Give 2 positive troubleshooting instructions",
      "Give 1 negative warning (Do not unplug while updating)",
      "Confirm how to test if it worked"
    ],
    "rounds": {
      "remember": [
        "Say 3 tech support commands: restart, disconnect, update."
      ],
      "use": [
        "Make 2 imperative instruction sentences and 1 troubleshooting question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a clear, helpful tech support tutorial for fixing internet lag!"
      ]
    }
  },
  "teens:c-teens-basic-2-8": {
    "bossName": "Skate Navigator",
    "bossTitle": "Skate Park Navigation & Directions Challenge",
    "bossAvatar": "🛹",
    "mission": "Guide a newcomer around the biggest skate park in town! Direct them to the beginner ramps, the bowl, and the pro half-pipe.",
    "starterPhrase": "Welcome to the skate park! To get to the best bowl, skate straight past the...",
    "powerWords": [
      "Skate past the fountain",
      "Turn right at the ramp",
      "Located near the half-pipe"
    ],
    "targetGrammar": "Directional imperatives + Spatial prepositions (past the, across from, on the right)",
    "checklist": [
      "Give directions to the bowl",
      "Give directions to the street course",
      "Warn about crowded areas"
    ],
    "rounds": {
      "remember": [
        "Say 3 directional terms: turn left, skate straight, cross over."
      ],
      "use": [
        "Make 2 navigation sentences and 1 location question."
      ],
      "speak": [
        "Speak for 30 seconds: Give effortless, step-by-step directions around your favorite skate park!"
      ]
    }
  },
  "teens:c-teens-basic-2-9": {
    "bossName": "Group Chat Mod",
    "bossTitle": "Voice Calls & Group Messaging Etiquette Challenge",
    "bossAvatar": "📱",
    "mission": "Manage a high school study group call on Discord! Keep everyone on track, share project links, and set clear speaking etiquette.",
    "starterPhrase": "Hey everyone, thanks for joining the group call. Could you please mute your mic when...",
    "powerWords": [
      "Mute your microphone",
      "Share the presentation link",
      "Keep the discussion focused"
    ],
    "targetGrammar": "Polite requests (Could you please... / Would you mind sharing...)",
    "checklist": [
      "Set 1 ground rule for call audio etiquette",
      "Request a link or document to be posted in chat",
      "Keep the study agenda organized"
    ],
    "rounds": {
      "remember": [
        "Say 3 online meeting phrases: mute your mic, share screen, post the link."
      ],
      "use": [
        "Make 2 polite request sentences and 1 group check-in question."
      ],
      "speak": [
        "Speak for 30 seconds: Moderate a smooth, productive online group study session!"
      ]
    }
  },
  "teens:c-teens-basic-2-10": {
    "bossName": "Lifestyle Coach",
    "bossTitle": "Action vs Habit Contrasts in Teen Life Challenge",
    "bossAvatar": "👟",
    "mission": "Contrast your usual after-school habits with a high-intensity sports training camp this week! Explain your daily balance.",
    "starterPhrase": "Under normal circumstances I relax after school, but this week our squad is training...",
    "powerWords": [
      "Usually take it easy",
      "Currently training intensely",
      "Pushing our limits"
    ],
    "targetGrammar": "Comprehensive Simple vs Continuous contrast",
    "checklist": [
      "Describe typical weekly habit",
      "Describe current temporary training intensity",
      "Explain the goal of this special week"
    ],
    "rounds": {
      "remember": [
        "Identify 3 differences between routine habits and temporary training."
      ],
      "use": [
        "Formulate 2 complex comparative sentences contrasting recurring vs current actions."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an inspiring lifestyle update on your sports camp experience!"
      ]
    }
  },
  "teens:c-teens-basic-3-1": {
    "bossName": "Beat Maker",
    "bossTitle": "Talents & Tech Abilities (Can / Can't) Challenge",
    "bossAvatar": "🎹",
    "mission": "Pitch your creative abilities! Explain what digital music or video editing software you can use and what skills you want to master next.",
    "starterPhrase": "When it comes to creative production, I can produce high-quality beats on...",
    "powerWords": [
      "Can produce electronic beats",
      "Can edit 4K video clips",
      "Cannot play piano yet"
    ],
    "targetGrammar": "Can / Cannot + base verb",
    "checklist": [
      "Highlight 2 creative skills with \"can\"",
      "Mention 1 skill you cannot do yet with \"cannot\"",
      "Express your goal to learn it soon"
    ],
    "rounds": {
      "remember": [
        "Say 3 creative talent verbs: produce, illustrate, animate."
      ],
      "use": [
        "Make 1 sentence with \"I can...\", 1 with \"I cannot...\", and 1 talent question."
      ],
      "speak": [
        "Speak for 30 seconds: Present an inspiring pitch about your creative talents and ambitions!"
      ]
    }
  },
  "teens:c-teens-basic-3-2": {
    "bossName": "Gear Captain",
    "bossTitle": "Asking Favors & Borrowing Gear (Could you) Challenge",
    "bossAvatar": "🎧",
    "mission": "Politely borrow specialized gear for a photography or sports project! Ask a friend for a portable charger, wide-angle lens, or skateboard tool.",
    "starterPhrase": "Hey, I am working on my media project today. Could you please lend me your...",
    "powerWords": [
      "Could you lend me",
      "Would you mind sharing",
      "I will return it after class"
    ],
    "targetGrammar": "Could you lend me... / Would you mind + gerund / I promise to return...",
    "checklist": [
      "Ask politely for the specific item with \"Could you lend me\"",
      "State why you need it",
      "Guarantee when you will return it in perfect shape"
    ],
    "rounds": {
      "remember": [
        "Say 3 polite borrowing expressions: Could you lend, May I borrow, I'll return it."
      ],
      "use": [
        "Make 2 polite borrowing sentences and 1 confirmation inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Roleplay politely asking a classmate to borrow valuable creative equipment."
      ]
    }
  },
  "teens:c-teens-basic-3-3": {
    "bossName": "Honor Council",
    "bossTitle": "School Rules & Strict Deadlines (Have to / Must) Challenge",
    "bossAvatar": "📝",
    "mission": "Review the high school code of conduct and major assignment deadlines! Detail what students must do, what is optional, and deadline rules.",
    "starterPhrase": "According to our academic honor code, all high school students have to...",
    "powerWords": [
      "Have to submit before 3:00 PM",
      "Must follow safety protocols",
      "Do not have to attend optionally"
    ],
    "targetGrammar": "Have to / Must / Don't have to",
    "checklist": [
      "State 1 mandatory deadline rule with \"have to\"",
      "State 1 important safety rule with \"must\"",
      "State 1 optional activity with \"don't have to\""
    ],
    "rounds": {
      "remember": [
        "Contrast \"have to\" (obligation) vs \"don't have to\" (optional)."
      ],
      "use": [
        "Make 1 sentence with have to, 1 with must not (prohibition), and 1 with don't have to."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a clear, helpful student council briefing on school rules and deadlines!"
      ]
    }
  },
  "teens:c-teens-basic-3-4": {
    "bossName": "Astro Pioneer",
    "bossTitle": "Space Exploration & Future Sci-Fi Challenge",
    "bossAvatar": "🚀",
    "mission": "Deliver a science exhibition talk on deep space exploration! Describe astronauts traveling to Mars, building moon bases, and searching for alien exoplanets.",
    "starterPhrase": "In the future of space exploration, humanity will establish permanent colonies on...",
    "powerWords": [
      "Deep space exploration",
      "Permanent lunar base",
      "Discover distant exoplanets"
    ],
    "targetGrammar": "Future with Will + Scientific predictions (Astronauts will travel, we will build)",
    "checklist": [
      "Make 1 bold prediction about human space travel with \"will\"",
      "Describe a future Martian or lunar colony",
      "Explain why exploring space is vital for Earth"
    ],
    "rounds": {
      "remember": [
        "Say 3 space science terms: exoplanet, lunar colony, propulsion."
      ],
      "use": [
        "Make 2 future space prediction sentences and 1 cosmic inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a captivating keynote on the next 50 years of human space exploration!"
      ]
    }
  },
  "teens:c-teens-basic-3-5": {
    "bossName": "Green Mobility Leader",
    "bossTitle": "Eco-Rides & Green Transportation Challenge",
    "bossAvatar": "🛴",
    "mission": "Pitch sustainable teen transportation! Compare riding electric scooters, bicycles, and public transit to cut carbon emissions.",
    "starterPhrase": "To make our daily commute green and fast, I choose to ride an electric scooter because...",
    "powerWords": [
      "Zero-emission commute",
      "Electric scooter transit",
      "Infinitive purpose to avoid traffic"
    ],
    "targetGrammar": "Infinitive of purpose (to save time, to reduce emissions) + By + vehicle",
    "checklist": [
      "Name your chosen green ride",
      "Explain the environmental purpose with \"to reduce/to avoid\"",
      "Compare it against driving gas cars"
    ],
    "rounds": {
      "remember": [
        "Say 3 green transit terms: electric scooter, zero emission, bike lane."
      ],
      "use": [
        "Make 2 purpose sentences (to save energy, to avoid traffic) and 1 eco question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a persuasive pitch encouraging all teens to adopt green transportation!"
      ]
    }
  },
  "teens:c-teens-basic-3-6": {
    "bossName": "Festival Archivist",
    "bossTitle": "Past Memories: Was / Were at the Concert Challenge",
    "bossAvatar": "🎤",
    "mission": "Recap an unforgettable weekend concert or sports championship! Tell where you and the squad were, how the crowd reacted, and the atmosphere.",
    "starterPhrase": "Last Saturday night, the entire squad was at the front row of the indie rock concert, and...",
    "powerWords": [
      "Was in the front row",
      "The crowd was electric",
      "Were completely amazed"
    ],
    "targetGrammar": "Past To Be (I was, we were, the band was, the fans were)",
    "checklist": [
      "State where you were last weekend",
      "Describe the energy with \"was / were + adjective\"",
      "Formulate 1 question asking where a friend was"
    ],
    "rounds": {
      "remember": [
        "Conjugate past To Be for all pronouns in positive and negative."
      ],
      "use": [
        "Make 1 affirmative with was/were, 1 negative with wasn't/weren't, and 1 question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an enthusiastic recap of an unforgettable concert or game night!"
      ]
    }
  },
  "teens:c-teens-basic-3-7": {
    "bossName": "Throwback Host",
    "bossTitle": "Childhood Hobbies & Throwback Memories Challenge",
    "bossAvatar": "🧒",
    "mission": "Share your favorite childhood throwback story! Describe what cartoons you watched, what games you played at age eight, and how you grew.",
    "starterPhrase": "Looking back at when I was eight years old, I used to spend all afternoon...",
    "powerWords": [
      "When I was young",
      "Rode my bike for hours",
      "Fond childhood memories"
    ],
    "targetGrammar": "When I was + age / Past Simple childhood actions (played, watched, collected)",
    "checklist": [
      "Mention your age in the memory",
      "Describe 2 favorite childhood activities",
      "Explain how that childhood passion shaped who you are today"
    ],
    "rounds": {
      "remember": [
        "Say 3 throwback time phrases: when I was little, back in elementary school, in my childhood."
      ],
      "use": [
        "Make 1 sentence with \"When I was eight...\", 1 with \"I loved playing...\", and 1 memory question."
      ],
      "speak": [
        "Speak for 30 seconds: Share a funny or heartwarming childhood throwback story!"
      ]
    }
  },
  "teens:c-teens-basic-3-8": {
    "bossName": "Youth Changemaker",
    "bossTitle": "Influential Teen Inventors & Changemakers Challenge",
    "bossAvatar": "💡",
    "mission": "Profile an inspiring teenage inventor or activist! Outline their age, the invention or campaign they launched, and global recognition received.",
    "starterPhrase": "Today I want to celebrate an inspiring youth changemaker who was only...",
    "powerWords": [
      "Youth changemaker",
      "Invented a solution",
      "Inspired millions globally"
    ],
    "targetGrammar": "Past Simple biographical structures (was, created, launched, won)",
    "checklist": [
      "Introduce the young innovator and their age",
      "Describe the global problem they tackled",
      "Summarize the impact of their achievement"
    ],
    "rounds": {
      "remember": [
        "Say 3 changemaker verbs: invented, spearheaded, mobilized."
      ],
      "use": [
        "Make 2 past tense biography sentences and 1 impact summary."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an inspiring biographical tribute to a youth changemaker!"
      ]
    }
  },
  "teens:c-teens-basic-3-9": {
    "bossName": "Band Chronicle",
    "bossTitle": "Timeline of Band Milestones with Ago Challenge",
    "bossAvatar": "🎸",
    "mission": "Chronicle your school band or esports team's rise to fame! State when you formed, when you recorded your first track, and recent tournament wins.",
    "starterPhrase": "Our school indie band formed two years ago in a garage, and six months ago we...",
    "powerWords": [
      "Two years ago",
      "Won our first championship",
      "Released our debut single"
    ],
    "targetGrammar": "Past Simple + Time intervals with \"ago\" (two years ago, three months ago)",
    "checklist": [
      "State when the group formed using \"years ago\"",
      "Mention a major milestone with \"months ago\"",
      "Explain what goals you are pursuing now"
    ],
    "rounds": {
      "remember": [
        "Use \"ago\" at the end of 3 different time intervals."
      ],
      "use": [
        "Make 2 sentences with \"[Time] ago\" and 1 timeline inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Present the inspiring chronological story of your team or band's rise!"
      ]
    }
  },
  "teens:c-teens-basic-3-10": {
    "bossName": "Level 3 Review Master",
    "bossTitle": "Basic 3 Teen Capstone Reflection Challenge",
    "bossAvatar": "🌟",
    "mission": "Synthesize your Basic 3 teen mastery! Present your creative talents, eco-mobility choices, concert memories, and milestone timelines.",
    "starterPhrase": "Reaching the conclusion of Basic 3, I am confident in expressing my skills and past experiences...",
    "powerWords": [
      "Creative capabilities",
      "Unforgettable milestones",
      "Ready for Basic 4"
    ],
    "targetGrammar": "Level 3 synthesis (Modals + Past To Be + Biographies + Timelines with Ago)",
    "checklist": [
      "Highlight skills with can/must",
      "Share a past event with was/were",
      "Close with your future aspirations for Basic 4"
    ],
    "rounds": {
      "remember": [
        "Say 5 high-impact verbs and adjectives from Basic 3."
      ],
      "use": [
        "Deliver 2 complex sentences combining capabilities, past events, and timelines."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Basic 3 Capstone reflection with confidence and flair!"
      ]
    }
  },
  "teens:c-teens-basic-4-1": {
    "bossName": "Release Manager",
    "bossTitle": "Past Regular Verbs in Gaming Launches Challenge",
    "bossAvatar": "🕹️",
    "mission": "Report the successful launch of a multiplayer video game update! Detail how the developers coded, tested, and released the update.",
    "starterPhrase": "Yesterday, our development studio finalized and officially launched the new...",
    "powerWords": [
      "Launched the update",
      "Tested all mechanics",
      "Delivered new multiplayer maps"
    ],
    "targetGrammar": "Past Simple regular verbs with -ed (/t/, /d/, /ɪd/)",
    "checklist": [
      "Use at least 2 regular past verbs (launched, tested, improved)",
      "State when the release happened (yesterday, last night)",
      "Describe the player community's excited reaction"
    ],
    "rounds": {
      "remember": [
        "Say 3 regular past verbs with correct -ed sound: launched, coded, updated."
      ],
      "use": [
        "Make 1 affirmative with regular past, 1 negative with didn't, and 1 release inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a gaming update launch report using precise regular past verbs!"
      ]
    }
  },
  "teens:c-teens-basic-4-2": {
    "bossName": "Viral Storyteller",
    "bossTitle": "Past Irregular Verbs in Storytelling Challenge",
    "bossAvatar": "📸",
    "mission": "Narrate how an ordinary photo went viral overnight! Use irregular past verbs to explain who took the shot, what happened, and who shared it.",
    "starterPhrase": "It all began when my friend took an incredible photo at sunset and wrote a caption that...",
    "powerWords": [
      "Took an amazing shot",
      "Wrote a clever caption",
      "Became a viral trend"
    ],
    "targetGrammar": "Irregular past verbs (take->took, write->wrote, become->became, see->saw)",
    "checklist": [
      "Use \"took\" and \"wrote\" in the story",
      "Use \"became\" or \"saw\" to describe the viral reach",
      "Conclude with how life changed after that post"
    ],
    "rounds": {
      "remember": [
        "Conjugate 4 irregular verbs: take, write, become, give."
      ],
      "use": [
        "Make 2 sentences with irregular past verbs and 1 storytelling question."
      ],
      "speak": [
        "Speak for 30 seconds: Tell the exciting story of how a photo went viral overnight!"
      ]
    }
  },
  "teens:c-teens-basic-4-3": {
    "bossName": "Detective Q",
    "bossTitle": "Past Inquiry & Lost Gadget Verification Challenge",
    "bossAvatar": "❓",
    "mission": "Investigate a mystery of missing headphones in the school library! Ask precise past questions to figure out who was there and who found them.",
    "starterPhrase": "To solve the mystery of the missing earbuds, did anyone see them in the...",
    "powerWords": [
      "Did you find them",
      "Where did you leave them",
      "Did not lose them intentionally"
    ],
    "targetGrammar": "Did + subject + base verb / Subject + didn't + base verb",
    "checklist": [
      "Ask 1 question with \"Did you see...?\"",
      "Ask 1 Wh- question with \"Where did you leave...?\"",
      "Make 1 negative confirmation with \"didn't\""
    ],
    "rounds": {
      "remember": [
        "Keep main verb in base form after \"Did\" (Did you leave, NOT Did you left)."
      ],
      "use": [
        "Make 1 past negative with didn't and 2 past inquiry questions."
      ],
      "speak": [
        "Speak for 30 seconds: Lead a detective interrogation to solve the mystery of the missing gadget!"
      ]
    }
  },
  "teens:c-teens-basic-4-4": {
    "bossName": "Camp Trailblazer",
    "bossTitle": "Summer Camp Road Trips & Packing Challenge",
    "bossAvatar": "🏕️",
    "mission": "Plan an epic summer road trip to an outdoor adventure camp! Detail packing tents, advance campfire permits, and trail itineraries.",
    "starterPhrase": "For our summer wilderness adventure, we booked our campsite two weeks in advance and...",
    "powerWords": [
      "Booked in advance",
      "Packed sleeping bags",
      "Planned hiking routes"
    ],
    "targetGrammar": "Past Simple bookings + In advance with time frames",
    "checklist": [
      "State booking timeline with \"in advance\"",
      "Describe 2 outdoor gear items packed",
      "Describe the first trail you plan to hike"
    ],
    "rounds": {
      "remember": [
        "Say 3 camping phrases: book in advance, pack gear, set up camp."
      ],
      "use": [
        "Make 2 travel preparation sentences and 1 itinerary inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Present a full adventure road trip itinerary to your camping squad!"
      ]
    }
  },
  "teens:c-teens-basic-4-5": {
    "bossName": "Lab Pioneer",
    "bossTitle": "Sequencing Science Experiments Challenge",
    "bossAvatar": "🧪",
    "mission": "Sequence an exciting chemistry lab reaction! Use transition connectors (First, Then, Next, After that, Finally) to describe the colorful result.",
    "starterPhrase": "In our science laboratory experiment, first we measured the chemical solutions, and then...",
    "powerWords": [
      "First we measured the liquids",
      "Then the solution changed color",
      "Finally the reaction stabilized"
    ],
    "targetGrammar": "Sequential transition connectors (First, Then, Next, After that, Finally)",
    "checklist": [
      "Use \"First\" to state the setup",
      "Use \"Then / Next\" for the chemical reaction",
      "Use \"Finally\" to explain the scientific outcome"
    ],
    "rounds": {
      "remember": [
        "Say 4 sequencing connectors in order."
      ],
      "use": [
        "Make 1 sentence with \"First..., and then...\", and 1 with \"Finally...\"."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a clear, step-by-step scientific presentation of your lab experiment!"
      ]
    }
  },
  "teens:c-teens-basic-4-6": {
    "bossName": "Thrill Planner",
    "bossTitle": "Upcoming Teen Trips with Going To Challenge",
    "bossAvatar": "🎢",
    "mission": "Announce an upcoming spring break trip to a world-famous amusement park! Detail roller coasters you are going to ride and foods you are going to eat.",
    "starterPhrase": "During spring break, our entire group is going to travel to the theme park to...",
    "powerWords": [
      "Going to ride the mega coaster",
      "Going to spend the entire day",
      "Going to take epic photos"
    ],
    "targetGrammar": "Future with Going To (Be + going to + base verb)",
    "checklist": [
      "State 2 planned theme park activities with \"going to\"",
      "Mention who is going with you",
      "Express your excitement for the roller coasters"
    ],
    "rounds": {
      "remember": [
        "Conjugate \"going to\" for I, We, and Our group."
      ],
      "use": [
        "Make 1 affirmative with going to, 1 negative (is not going to), and 1 trip question."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch the ultimate spring break amusement park trip to your friends!"
      ]
    }
  },
  "teens:c-teens-basic-4-7": {
    "bossName": "Gaming Ally",
    "bossTitle": "Spontaneous Promises with Will Challenge",
    "bossAvatar": "⚡",
    "mission": "Make immediate promises to help a teammate in a multiplayer crisis! Promise to join their lobby right away, share health packs, and beat the level.",
    "starterPhrase": "Do not stress about the final level! I will jump on Discord right now and I will...",
    "powerWords": [
      "Will join your lobby",
      "Will share health potions",
      "Will help you beat the boss"
    ],
    "targetGrammar": "Future with Will for immediate decisions and offers of help (I will + base verb)",
    "checklist": [
      "Make 1 immediate offer with \"I will join right now\"",
      "Make 1 promise with \"We will defeat the boss together\"",
      "Reassure your teammate with confidence"
    ],
    "rounds": {
      "remember": [
        "Contrast \"will\" (spontaneous help) vs \"going to\" (pre-planned)."
      ],
      "use": [
        "Make 2 supportive promise sentences with will and 1 question offering help."
      ],
      "speak": [
        "Speak for 30 seconds: Reassure a gaming teammate with decisive promises of immediate backup!"
      ]
    }
  },
  "teens:c-teens-basic-4-8": {
    "bossName": "Project Planner",
    "bossTitle": "Planning School Projects: Will vs Going To Challenge",
    "bossAvatar": "🎨",
    "mission": "Coordinate a massive school festival banner project! Balance scheduled task milestones (going to) with live creative roles (will).",
    "starterPhrase": "For our school festival project, we are going to paint the main banner, and I will...",
    "powerWords": [
      "Are going to design the mural",
      "Will sketch the outlines",
      "Will bring the paint supplies"
    ],
    "targetGrammar": "Coordinated use of Going To (scheduled project) and Will (personal roles/offers)",
    "checklist": [
      "Use \"going to\" for the scheduled group milestone",
      "Use \"will\" for your personal creative task",
      "Link both with clear transition words"
    ],
    "rounds": {
      "remember": [
        "Distinguish planned project goals (going to) from assigned creative tasks (will)."
      ],
      "use": [
        "Make 1 compound sentence containing both \"going to\" and \"will\"."
      ],
      "speak": [
        "Speak for 30 seconds: Present a project execution plan balancing team milestones and individual roles!"
      ]
    }
  },
  "teens:c-teens-basic-4-9": {
    "bossName": "Ethics Debater",
    "bossTitle": "Debating Tech & Social Dilemmas Challenge",
    "bossAvatar": "💭",
    "mission": "Debate screen time and social media algorithms in high school! Express your personal opinion, suggest healthy digital limits, and address counterarguments.",
    "starterPhrase": "In my personal opinion, teenagers should establish healthy boundaries with social media because...",
    "powerWords": [
      "In my view",
      "Limit screen time before bed",
      "Prioritize mental wellness"
    ],
    "targetGrammar": "Opinion formulas (In my opinion, I believe that, We should + verb)",
    "checklist": [
      "Open with \"In my opinion / From my perspective\"",
      "State 1 practical rule with \"we should\"",
      "Acknowledge why algorithms can be distracting"
    ],
    "rounds": {
      "remember": [
        "Say 3 debate opinion phrases: in my view, I strongly believe, on the other hand."
      ],
      "use": [
        "Make 1 opinion statement, 1 recommendation with should, and 1 polite counterpoint."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a persuasive speech on digital balance and mental wellness for teens!"
      ]
    }
  },
  "teens:c-teens-basic-4-10": {
    "bossName": "Student President",
    "bossTitle": "Student Council Leadership Capstone Challenge",
    "bossAvatar": "🗳️",
    "mission": "Deliver your Student Council campaign speech! Reflect on past student challenges, announce upcoming club initiatives, and inspire school spirit.",
    "starterPhrase": "Fellow students, our council has listened to your ideas, and next semester we are going to...",
    "powerWords": [
      "Empower student voice",
      "Launch creative initiatives",
      "Build a stronger campus community"
    ],
    "targetGrammar": "Full Basic 4 synthesis (Past actions + Future Going to/Will + Opinions)",
    "checklist": [
      "Reflect on past improvements made this year",
      "Announce 2 bold future initiatives with \"going to\"",
      "Deliver a stirring concluding call to action"
    ],
    "rounds": {
      "remember": [
        "Say 5 leadership verbs across past, present, and future."
      ],
      "use": [
        "Formulate 2 complex sentences linking past achievements to future council plans."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your triumphant Student Council campaign speech!"
      ]
    }
  },
  "teens:c-teens-inter-1": {
    "bossName": "Esports Champion",
    "bossTitle": "Life Achievements with Present Perfect Challenge",
    "bossAvatar": "🏆",
    "mission": "Share your proudest competitive achievements! Describe tournaments you have played in, trophies you have won, and experiences that shaped you.",
    "starterPhrase": "Throughout my competitive gaming journey, I have participated in three national...",
    "powerWords": [
      "Have participated in tournaments",
      "Have won championships",
      "Have trained with top players"
    ],
    "targetGrammar": "Present Perfect with ever / never / already / yet / for / since",
    "checklist": [
      "State a proud achievement with \"have participated\"",
      "Mention a milestone achieved with \"already\"",
      "State duration of practice with \"for [X] years\""
    ],
    "rounds": {
      "remember": [
        "Conjugate 3 irregular verbs in participle: won, competed, achieved."
      ],
      "use": [
        "Make 1 sentence with \"I have already...\", 1 with \"I have never...\", and 1 experience question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a compelling presentation on your biggest competitive achievements!"
      ]
    }
  },
  "teens:c-teens-inter-2": {
    "bossName": "Street Culture Icon",
    "bossTitle": "Teen Slang & Phrasal Verbs in Daily Talk Challenge",
    "bossAvatar": "🛹",
    "mission": "Describe your crew's weekend routine using natural phrasal verbs and casual fluency! Talk about hanging out, catching up, and winding down.",
    "starterPhrase": "On Friday afternoons, my friends and I usually hang out at the skate park to chill and...",
    "powerWords": [
      "Hang out at the park",
      "Catch up on news",
      "Chill after school"
    ],
    "targetGrammar": "Casual phrasal verbs in conversational fluency (hang out, catch up, chill out, show up)",
    "checklist": [
      "Use \"hang out\" in a natural context",
      "Use \"catch up\" for socializing",
      "Maintain casual, natural teen intonation"
    ],
    "rounds": {
      "remember": [
        "Say 3 common phrasal verbs for socializing: hang out, catch up, meet up."
      ],
      "use": [
        "Make 2 sentences embedding phrasal verbs and 1 casual inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Describe an authentic weekend hangout with your crew using vivid phrasal verbs!"
      ]
    }
  },
  "teens:c-teens-inter-3": {
    "bossName": "Mystery Detective",
    "bossTitle": "Modals of Deduction in Video Game Mystery Challenge",
    "bossAvatar": "🔍",
    "mission": "Solve an intriguing puzzle in a mystery game! Use modals of deduction (must be, can't be, might be) to analyze clues and uncover the secret.",
    "starterPhrase": "Looking at these hidden symbols on the temple wall, the secret passage must be located...",
    "powerWords": [
      "Must be hidden behind",
      "Cannot be accidental",
      "Might lead to the vault"
    ],
    "targetGrammar": "Modals of deduction (Must be / Can't be / Might be + base verb)",
    "checklist": [
      "State 1 strong positive deduction with \"must be\"",
      "State 1 logical impossibility with \"cannot be\"",
      "State 1 hypothesis with \"might be\""
    ],
    "rounds": {
      "remember": [
        "Contrast \"must be\" (99% sure true) vs \"can't be\" (99% sure false) vs \"might be\" (possible)."
      ],
      "use": [
        "Make 1 deduction with must be, 1 with can't be, and 1 puzzle deduction question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a thrilling live mystery breakdown deducing the secret puzzle solution!"
      ]
    }
  },
  "teens:c-teens-inter-4": {
    "bossName": "Multiverse Explorer",
    "bossTitle": "Second Conditional for Superpowers Challenge",
    "bossAvatar": "🦸‍♂️",
    "mission": "Hypothesize having a supreme superpower! If you could teleport anywhere, what global landmarks would you visit and how would you help society?",
    "starterPhrase": "If I possessed the superpower of instant teleportation, I would immediately travel to...",
    "powerWords": [
      "If I had the power to",
      "I would instantly explore",
      "Would help communities"
    ],
    "targetGrammar": "Second Conditional (If + Past Simple, would + base verb)",
    "checklist": [
      "State your superpower condition with \"If I had / If I could\"",
      "State 2 incredible adventures with \"I would visit/explore\"",
      "Explain how you would use your power to do good"
    ],
    "rounds": {
      "remember": [
        "Formulate Second Conditional: If I were... I would..."
      ],
      "use": [
        "Make 2 superpower sentences with \"would\" and 1 hypothetical question."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch your ultimate superhero identity and how you would change the world!"
      ]
    }
  },
  "teens:c-teens-inter-5": {
    "bossName": "Media Ethicist",
    "bossTitle": "Digital Storytelling & Vlogging Ethics Challenge",
    "bossAvatar": "📹",
    "mission": "Advise teen content creators on digital ethics! Recommend what creators should do regarding privacy, sponsored content, and authentic community building.",
    "starterPhrase": "As young digital creators, we ought to prioritize authentic storytelling while respecting...",
    "powerWords": [
      "Ought to respect privacy",
      "Should disclose sponsorships",
      "Must protect community trust"
    ],
    "targetGrammar": "Modal advice (Should / Ought to / Must) in media ethics",
    "checklist": [
      "Give 1 piece of advice with \"ought to\"",
      "Give 1 ethical guideline with \"should\"",
      "Explain why authenticity matters in digital culture"
    ],
    "rounds": {
      "remember": [
        "Say 3 media ethics terms: transparency, privacy, authentic connection."
      ],
      "use": [
        "Make 2 ethical advice sentences and 1 creator guideline question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a masterclass on creator ethics, privacy, and online responsibility!"
      ]
    }
  },
  "teens:c-teens-inter-6": {
    "bossName": "Hardware Geek",
    "bossTitle": "Comparing Gaming Platforms & Consoles Challenge",
    "bossAvatar": "🖥️",
    "mission": "Deliver a hardware comparison between custom gaming PCs and consoles! Compare frame rates, modding capability, portability, and value.",
    "starterPhrase": "When comparing custom gaming PCs with traditional consoles, PCs are significantly more...",
    "powerWords": [
      "Significantly more customizable",
      "Much higher frame rates",
      "By far the most versatile"
    ],
    "targetGrammar": "Modifiers with comparatives (significantly more, far faster than) and superlatives",
    "checklist": [
      "Use \"significantly more [adjective] than\"",
      "Use \"by far the most [adjective]\"",
      "Deliver an objective final recommendation based on budget"
    ],
    "rounds": {
      "remember": [
        "Say 3 hardware benchmarking terms: refresh rate, processing power, graphical fidelity."
      ],
      "use": [
        "Make 1 comparative with \"far more...\", 1 superlative, and 1 hardware inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Present a data-driven hardware shootout between gaming PCs and consoles!"
      ]
    }
  },
  "teens:c-teens-inter-7": {
    "bossName": "Youth Activist",
    "bossTitle": "Teen Environmental Activism & Zero Waste Challenge",
    "bossAvatar": "🌱",
    "mission": "Launch a campus zero-waste initiative! Propose eliminating single-use plastics in the cafeteria and organizing monthly community cleanups.",
    "starterPhrase": "To transform our school into an eco-friendly green campus, youth activists have organized a...",
    "powerWords": [
      "Zero-waste initiative",
      "Eliminate single-use plastics",
      "Empower youth leadership"
    ],
    "targetGrammar": "Passive & Active Present Perfect (Have organized, have been implemented, to reduce)",
    "checklist": [
      "Announce the zero-waste goal",
      "Detail 2 actionable green rules for students",
      "Motivate everyone to participate in the upcoming campus cleanup"
    ],
    "rounds": {
      "remember": [
        "Say 3 sustainability terms: zero waste, single-use plastic, carbon footprint."
      ],
      "use": [
        "Make 2 environmental action sentences and 1 student engagement question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a passionate youth activism speech launching a zero-waste campaign!"
      ]
    }
  },
  "teens:c-teens-inter-8": {
    "bossName": "Admissions Scholar",
    "bossTitle": "College Application Letters & Inquiries Challenge",
    "bossAvatar": "🎓",
    "mission": "Dictate an inquiry for international STEM scholarship programs! Inquire about admission prerequisites, application deadlines, and portfolios.",
    "starterPhrase": "Dear Admissions Committee, I am writing to formally inquire regarding the requirements for the...",
    "powerWords": [
      "Writing to formally inquire",
      "Scholarship eligibility",
      "Look forward to your guidance"
    ],
    "targetGrammar": "Formal correspondence formulas (I am writing to inquire, would you be able to clarify)",
    "checklist": [
      "State your academic interest and purpose",
      "Inquire about 2 specific application requirements",
      "Close with a polite, professional sign-off"
    ],
    "rounds": {
      "remember": [
        "Say 3 academic correspondence phrases: I am writing to inquire, with regard to, thank you for your consideration."
      ],
      "use": [
        "Make 2 formal inquiry sentences and 1 closing sign-off statement."
      ],
      "speak": [
        "Speak for 30 seconds: Dictate a polished, high-register inquiry for an international academic program."
      ]
    }
  },
  "teens:c-teens-inter-9": {
    "bossName": "Band Leader",
    "bossTitle": "Present Perfect Duration in Music Skills Challenge",
    "bossAvatar": "🎸",
    "mission": "Chronicle your musical journey in an indie band! Explain how long you have played bass guitar, rehearsed with your squad, and developed songs.",
    "starterPhrase": "Music has been my greatest creative outlet; in fact, I have played electric bass in our indie band for...",
    "powerWords": [
      "Have played for four years",
      "Have been practicing since 2022",
      "Have composed original songs"
    ],
    "targetGrammar": "Present Perfect with for (duration) and since (starting point)",
    "checklist": [
      "State your instrument duration with \"have played for [X] years\"",
      "State band foundation with \"have been together since [year]\"",
      "Share your dream of releasing an album"
    ],
    "rounds": {
      "remember": [
        "Contrast \"for four years\" (period) vs \"since 2022\" (point in time)."
      ],
      "use": [
        "Make 1 sentence with for, 1 with since, and 1 duration inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an inspiring musical bio detailing your growth in the band!"
      ]
    }
  },
  "teens:c-teens-inter-10": {
    "bossName": "Tournament Analyst",
    "bossTitle": "Past Simple vs Present Perfect in Gaming Tournaments Challenge",
    "bossAvatar": "🏆",
    "mission": "Break down an esports season performance! Contrast cumulative championship victories (Present Perfect) with yesterday's tough semifinal match (Past Simple).",
    "starterPhrase": "Our esports roster has already secured five tournament trophies this season; however, yesterday we...",
    "powerWords": [
      "Has already secured five wins",
      "Yesterday faced a tough rival",
      "Learned from the defeat"
    ],
    "targetGrammar": "Contrasting Present Perfect (cumulative season) with Past Simple (yesterday's match)",
    "checklist": [
      "State total season wins with Present Perfect",
      "Describe yesterday's match with Past Simple",
      "Conclude with a resilient game plan for next week"
    ],
    "rounds": {
      "remember": [
        "Contrast cumulative season record vs specific past match yesterday."
      ],
      "use": [
        "Make 1 compound sentence contrasting \"have won\" with \"yesterday lost\"."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a post-tournament analysis contrasting season victories with yesterday's match!"
      ]
    }
  },
  "teens:c-teens-inter-11": {
    "bossName": "Indie Game Dev",
    "bossTitle": "Gerunds & Infinitives in Passion Projects Challenge",
    "bossAvatar": "🎨",
    "mission": "Pitch your indie video game development project! Explain why you decided to learn 3D modeling, what you avoid doing, and plans to publish on Steam.",
    "starterPhrase": "To bring my creative vision to life, I decided to learn 3D animation and I plan to...",
    "powerWords": [
      "Decided to learn animation",
      "Avoid taking shortcuts",
      "Plan to publish on Steam"
    ],
    "targetGrammar": "Verbs + Infinitives (decide, plan, hope to) vs Verbs + Gerunds (avoid, practice, enjoy + ing)",
    "checklist": [
      "Use \"decided to [verb]\" for your learning choice",
      "Use \"avoid [verb-ing]\" for creative quality control",
      "State your goal with \"plan to publish\""
    ],
    "rounds": {
      "remember": [
        "Classify: decide to build vs enjoy building."
      ],
      "use": [
        "Make 1 sentence with decide to, 1 with avoid + ing, and 1 project inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch your indie video game project and explain your production roadmap!"
      ]
    }
  },
  "teens:c-teens-inter-12": {
    "bossName": "Growth Hacker",
    "bossTitle": "Phrasal Verbs in Social Media Optimization Challenge",
    "bossAvatar": "📱",
    "mission": "Teach a masterclass on growing a social media channel organically! Explain how to look up trending audio, reach out to collaborators, and keep up with trends.",
    "starterPhrase": "To grow your digital audience organically, you must consistently look up trending topics and...",
    "powerWords": [
      "Look up trending audio",
      "Reach out to creators",
      "Keep up with algorithms"
    ],
    "targetGrammar": "Advanced phrasal verbs (look up, reach out to, keep up with, stand out)",
    "checklist": [
      "Use \"look up\" in context of hashtag research",
      "Use \"reach out to\" for creator collaborations",
      "Use \"stand out\" for original content strategy"
    ],
    "rounds": {
      "remember": [
        "Say 3 digital strategy phrasal verbs: look up, reach out, keep up."
      ],
      "use": [
        "Make 2 sentences featuring phrasal verbs and 1 growth strategy question."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a social media growth masterclass packed with actionable phrasal verbs!"
      ]
    }
  },
  "teens:c-teens-advanced-1": {
    "bossName": "Debate Captain",
    "bossTitle": "Debate Opening Statements & Framing Challenge",
    "bossAvatar": "🎤",
    "mission": "Deliver a parliamentary debate opening statement! Frame whether artificial intelligence in high school education empowers or harms student critical thinking.",
    "starterPhrase": "Members of the assembly, today we must rigorously examine whether integrating artificial intelligence into education empowers...",
    "powerWords": [
      "Rigorous empirical debate",
      "Fundamental question of autonomy",
      "Decisive implications for youth"
    ],
    "targetGrammar": "Formal debate framing, rhetorical questions, and embedded clauses",
    "checklist": [
      "Open with formal parliamentary address",
      "State your motion with clear philosophical framing",
      "Present a roadmap of your two primary contentions"
    ],
    "rounds": {
      "remember": [
        "Say 3 formal debate terms: contention, empirical warrant, rebuttal."
      ],
      "use": [
        "Make 2 formal debate thesis statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a powerhouse debate opening statement commanding the assembly."
      ]
    }
  },
  "teens:c-teens-advanced-2": {
    "bossName": "Clean-Tech Pioneer",
    "bossTitle": "Second Conditional in Global Climate Solutions Challenge",
    "bossAvatar": "🌍",
    "mission": "Pitch a global clean-tech initiative! Propose what international youth councils would accomplish if global governments funded youth climate startups directly.",
    "starterPhrase": "If international governments allocated substantial venture capital to youth clean-tech innovators, our generation would...",
    "powerWords": [
      "If governments allocated capital",
      "We would accelerate renewable transitions",
      "Would eliminate ocean plastics"
    ],
    "targetGrammar": "Second Conditional (If + Past Subjunctive, would + base verb) in policy advocacy",
    "checklist": [
      "State the hypothetical policy condition with \"If governments funded...\"",
      "Detail 2 transformative environmental outcomes with \"we would accelerate\"",
      "Call for immediate institutional backing"
    ],
    "rounds": {
      "remember": [
        "Formulate Second Conditional: If we had... we would achieve..."
      ],
      "use": [
        "Make 2 conditional policy statements and 1 rhetorical inquiry."
      ],
      "speak": [
        "Speak for 30 seconds: Pitch a bold global clean-tech proposal using eloquent Second Conditional rhetoric!"
      ]
    }
  },
  "teens:c-teens-advanced-3": {
    "bossName": "Robotics Strategist",
    "bossTitle": "Third Conditional in Robotics Competitions Challenge",
    "bossAvatar": "🤖",
    "mission": "Deliver a rigorous post-mortem on a world robotics championship! Explain what your engineering team would have achieved if sensors had been calibrated sooner.",
    "starterPhrase": "Reflecting on the world championship finals, if our engineering squad had calibrated the optical sensors earlier, we would have...",
    "powerWords": [
      "If we had calibrated the sensors",
      "Would have secured first place",
      "Extracted invaluable engineering wisdom"
    ],
    "targetGrammar": "Third Conditional (If + Past Perfect, would have + past participle)",
    "checklist": [
      "State the past technical condition with \"If we had calibrated\"",
      "State the unrealized championship outcome with \"would have won\"",
      "Articulate the engineering lesson for next season"
    ],
    "rounds": {
      "remember": [
        "Structure Third Conditional: If + had + participle, would have + participle."
      ],
      "use": [
        "Make 2 Third Conditional post-mortem sentences."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a post-mortem on a world robotics finals with technical precision!"
      ]
    }
  },
  "teens:c-teens-advanced-4": {
    "bossName": "Investigative Journalist",
    "bossTitle": "Reported Speech in School Newspaper Interviews Challenge",
    "bossAvatar": "📰",
    "mission": "Report an exclusive interview with the school principal! Relay statements regarding campus innovation labs, budget allocations, and student freedoms.",
    "starterPhrase": "During our exclusive school newspaper interview, the principal confirmed that the administration would construct a modern...",
    "powerWords": [
      "Confirmed that they would construct",
      "Stated that student leadership had achieved",
      "Reiterated dedication to student voice"
    ],
    "targetGrammar": "Reported speech with backshifting in journalistic prose",
    "checklist": [
      "Report a future commitment with \"confirmed that they would\"",
      "Report a past milestone with \"stated that they had achieved\"",
      "Maintain objective journalistic tone"
    ],
    "rounds": {
      "remember": [
        "Backshift quotes: \"We will build a lab\" -> \"She confirmed that they would build a lab.\""
      ],
      "use": [
        "Make 2 reported journalism statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a breaking school newspaper broadcast reporting executive administration decisions."
      ]
    }
  },
  "teens:c-teens-advanced-5": {
    "bossName": "Tech Founder Profiler",
    "bossTitle": "Relative Clauses in Youth Startup Profiles Challenge",
    "bossAvatar": "💡",
    "mission": "Profile an outstanding teenage tech founder! Use defining and non-defining relative clauses to describe their innovative app and impact.",
    "starterPhrase": "The teenage software developer who built the mental health AI platform, which has supported thousands of students, recently received...",
    "powerWords": [
      "The developer who engineered",
      "Our platform, which operates globally",
      "Critical solutions that empower youth"
    ],
    "targetGrammar": "Defining & Non-Defining Relative Clauses (who, which, that, where, whose)",
    "checklist": [
      "Use a defining \"who\" clause identifying the founder",
      "Use a non-defining \"which\" clause adding institutional context",
      "Summarize the platform's global footprint"
    ],
    "rounds": {
      "remember": [
        "Distinguish defining (essential) vs non-defining (extra info with comma)."
      ],
      "use": [
        "Make 2 sentences embedding complex relative clauses."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an inspiring keynote profile of a teenage startup founder using relative clauses!"
      ]
    }
  },
  "teens:c-teens-advanced-6": {
    "bossName": "Model UN Delegate",
    "bossTitle": "Negotiating Project Roles in Model UN Challenge",
    "bossAvatar": "🇺🇳",
    "mission": "Lead Model UN negotiations on climate refugee protections! Propose bilateral compromises on humanitarian funding and sustainable resettlement.",
    "starterPhrase": "Distinguished delegates, to achieve a binding resolution, our delegation proposes reciprocal concessions regarding...",
    "powerWords": [
      "Reciprocal diplomatic concessions",
      "Binding humanitarian framework",
      "Sustainable climate resettlement"
    ],
    "targetGrammar": "High-register diplomatic negotiation vocabulary + Conditional compromises",
    "checklist": [
      "Propose 1 major diplomatic compromise",
      "Request an alignment concession in return",
      "Call for unanimous committee sponsorship"
    ],
    "rounds": {
      "remember": [
        "Say 3 diplomatic terms: bilateral consensus, binding resolution, reciprocal concession."
      ],
      "use": [
        "Make 2 diplomatic negotiation proposals."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a masterclass in Model UN diplomacy and consensus building!"
      ]
    }
  },
  "teens:c-teens-advanced-7": {
    "bossName": "Quantum Theorist",
    "bossTitle": "Passive Reporting Structures in Tech Trends Challenge",
    "bossAvatar": "🤖",
    "mission": "Deliver a tech forecast on quantum computing and cybersecurity! Use impersonal passive reporting structures (It is believed, is expected to).",
    "starterPhrase": "It is widely believed that quantum processors will revolutionize cryptography, and algorithms are expected to...",
    "powerWords": [
      "It is widely believed that",
      "Are expected to transform",
      "It is estimated that"
    ],
    "targetGrammar": "Passive reporting structures (It is believed/claimed/estimated that... / Subject is expected to...)",
    "checklist": [
      "Use \"It is widely believed that...\"",
      "Use \"Quantum algorithms are expected to...\"",
      "Detail the societal implications of this technological leap"
    ],
    "rounds": {
      "remember": [
        "Formulate passive reporting: \"People believe\" -> \"It is believed that...\" / \"X is believed to be...\""
      ],
      "use": [
        "Make 2 sentences with passive reporting frames."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a future tech trends briefing using sophisticated passive reporting!"
      ]
    }
  },
  "teens:c-teens-advanced-8": {
    "bossName": "Academic Essayist",
    "bossTitle": "Academic Idioms & Formal Register in Essays Challenge",
    "bossAvatar": "📝",
    "mission": "Defend a scholarly essay thesis on modern semiotics! Deploy formal academic collocations and idioms (come to a conclusion, shed light on, take into account).",
    "starterPhrase": "After rigorous analysis, our research committee came to a unanimous conclusion that sheds new light on how...",
    "powerWords": [
      "Came to a unanimous conclusion",
      "Shed light on underlying factors",
      "Took into account critical variables"
    ],
    "targetGrammar": "Academic collocations, formal idioms, and advanced register",
    "checklist": [
      "Deploy \"came to a unanimous conclusion\"",
      "Deploy \"sheds light on\"",
      "Synthesize complex findings with academic authority"
    ],
    "rounds": {
      "remember": [
        "Say 3 academic idioms: shed light on, take into account, come to a conclusion."
      ],
      "use": [
        "Make 2 formal academic thesis statements."
      ],
      "speak": [
        "Speak for 30 seconds: Defend an academic research thesis with effortless intellectual eloquence."
      ]
    }
  },
  "teens:c-teens-advanced-9": {
    "bossName": "Youth Summit Envoy",
    "bossTitle": "Crisis Management in Environmental Summits Challenge",
    "bossAvatar": "🌿",
    "mission": "Deliver an urgent address at a global youth climate summit! Demand that world leaders immediately subsidize clean energy transitions.",
    "starterPhrase": "Youth delegates from over fifty nations urge global governments to subsidize clean energy transitions and immediately...",
    "powerWords": [
      "Urge immediate institutional action",
      "Subsidize clean energy transitions",
      "Safeguard planetary ecosystems"
    ],
    "targetGrammar": "Subjunctive and imperative diplomatic urgency (urge that leaders subsidize, demand immediate action)",
    "checklist": [
      "State the environmental crisis urgency",
      "Deliver 2 decisive policy demands",
      "Unite the youth assembly with an unforgettable rallying call"
    ],
    "rounds": {
      "remember": [
        "Say 3 diplomatic urgency phrases: urge immediate action, mobilize resources, demand accountability."
      ],
      "use": [
        "Make 2 passionate diplomatic policy statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a historic address at a global youth environmental summit!"
      ]
    }
  },
  "teens:c-teens-advanced-10": {
    "bossName": "Global NGO Founder",
    "bossTitle": "Global Youth NGO Capstone Pitch Challenge",
    "bossAvatar": "🌍",
    "mission": "Pitch your international youth NGO to venture philanthropists! Explain how your organization empowers underprivileged youth through accessible STEM.",
    "starterPhrase": "Our international foundation empowers underprivileged youth across three continents through accessible STEM education, creating...",
    "powerWords": [
      "Empower underprivileged youth",
      "Accessible STEM education",
      "Scalable social impact"
    ],
    "targetGrammar": "Advanced Level capstone synthesis (All complex tenses + Modals + Diplomacy + Rhetoric)",
    "checklist": [
      "Articulate the NGO's global mission",
      "Demonstrate empirical impact across student communities",
      "Call for strategic funding partnerships to scale globally"
    ],
    "rounds": {
      "remember": [
        "Say 5 executive social impact terms."
      ],
      "use": [
        "Deliver 2 high-impact philanthropic pitch statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Advanced Level Capstone pitch for your global youth NGO!"
      ]
    }
  },
  "teens:c-teens-elite-1": {
    "bossName": "Strategic Founder",
    "bossTitle": "Goal Setting & Strategic Venture Roadmaps Challenge",
    "bossAvatar": "🗺️",
    "mission": "Present a strategic multi-year venture roadmap for your tech startup! Outline quarterly benchmarks, product iterations, and global expansion.",
    "starterPhrase": "Our strategic roadmap outlines rigorous quarterly benchmarks designed to achieve international market penetration by...",
    "powerWords": [
      "Quarterly benchmarks",
      "Market penetration",
      "Sustainable growth metrics"
    ],
    "targetGrammar": "Strategic future forecasting and executive objective framing",
    "checklist": [
      "State Q1 and Q2 product milestones",
      "Detail international market expansion targets",
      "Define defensible key performance indicators (KPIs)"
    ],
    "rounds": {
      "remember": [
        "Say 3 venture roadmap terms: milestone, market penetration, scalability."
      ],
      "use": [
        "Make 2 executive strategic roadmap statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a venture roadmap presentation to strategic angel investors!"
      ]
    }
  },
  "teens:c-teens-elite-2": {
    "bossName": "Startup Post-Mortemist",
    "bossTitle": "Past Decisions & Modal Deductions in Startups Challenge",
    "bossAvatar": "🔍",
    "mission": "Analyze a past product beta launch error! Use modal deductions in the past (should have prioritized, must have misunderstood, could have avoided).",
    "starterPhrase": "In our product post-mortem, the founding team should have prioritized real-time user feedback before launching the beta version, because...",
    "powerWords": [
      "Should have prioritized user feedback",
      "Must have misunderstood user needs",
      "Could have averted technical debt"
    ],
    "targetGrammar": "Past modal deductions (should have, must have, could have + past participle)",
    "checklist": [
      "State a critical mistake with \"should have prioritized\"",
      "Deduce root causes with \"must have misunderstood\"",
      "Extract a transformative organizational rule for future releases"
    ],
    "rounds": {
      "remember": [
        "Structure past modals: should have + participle, must have + participle."
      ],
      "use": [
        "Make 2 past modal deduction sentences."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an unsparing yet constructive startup post-mortem analysis!"
      ]
    }
  },
  "teens:c-teens-elite-3": {
    "bossName": "Research Fellow",
    "bossTitle": "Academic Hedging & Nuanced Scientific Positions Challenge",
    "bossAvatar": "🔬",
    "mission": "Present empirical findings in cognitive neuroscience! Soften claims using academic hedging (seem to suggest, tends to correlate, preliminary data indicate).",
    "starterPhrase": "The preliminary experimental findings seem to suggest a significant correlation between sleep hygiene and cognitive focus, which indicates that...",
    "powerWords": [
      "Preliminary findings seem to suggest",
      "Tends to correlate positively",
      "One could tentatively hypothesize that"
    ],
    "targetGrammar": "Academic hedging devices (seem to, tend to, tentatively, arguably, suggest that)",
    "checklist": [
      "Hedge a scientific finding with \"seem to suggest\"",
      "Use an epistemic adverb (tentatively, significantly)",
      "Propose a controlled follow-up study to confirm causality"
    ],
    "rounds": {
      "remember": [
        "Say 3 academic hedging verbs: suggest, indicate, point toward."
      ],
      "use": [
        "Make 2 hedged scientific claim sentences."
      ],
      "speak": [
        "Speak for 30 seconds: Present nuanced scientific research with intellectual rigor and academic precision."
      ]
    }
  },
  "teens:c-teens-elite-4": {
    "bossName": "Bioethics Scholar",
    "bossTitle": "Academic Argumentation & Thesis Framing Challenge",
    "bossAvatar": "🧬",
    "mission": "Frame an academic paper thesis on CRISPR gene editing and ethics! Defend why ethical regulatory frameworks must precede commercial biotechnology deployments.",
    "starterPhrase": "This research paper contends that robust ethical frameworks must regulate emerging biotechnology to prevent profound societal inequities...",
    "powerWords": [
      "This paper contends that",
      "Ethical regulatory frameworks",
      "Profound societal implications"
    ],
    "targetGrammar": "Formal academic thesis framing and argumentation scaffolding",
    "checklist": [
      "State your core thesis with \"This paper contends that...\"",
      "Support with an ethical and empirical warrant",
      "Anticipate and neutralize potential libertarian objections"
    ],
    "rounds": {
      "remember": [
        "Say 3 thesis framing verbs: contend, postulate, demonstrate."
      ],
      "use": [
        "Make 2 formal academic thesis statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an intellectually formidable thesis defense on bioethics and technology."
      ]
    }
  },
  "teens:c-teens-elite-5": {
    "bossName": "Transformational Leader",
    "bossTitle": "Leadership Dynamics & Team Autonomy Challenge",
    "bossAvatar": "👑",
    "mission": "Deliver a leadership philosophy address! Explain how transformational leaders inspire autonomy while maintaining collective accountability across teams.",
    "starterPhrase": "Transformational leadership transcends micromanagement; it inspires individual autonomy while maintaining collective accountability across all...",
    "powerWords": [
      "Inspire autonomy",
      "Collective accountability",
      "Cultivate psychological safety"
    ],
    "targetGrammar": "Balanced antithesis and leadership collocations",
    "checklist": [
      "Contrast transformational leadership against legacy micromanagement",
      "Explain the balance of autonomy and accountability",
      "Share how empowering team members drives exponential results"
    ],
    "rounds": {
      "remember": [
        "Say 3 leadership collocations: collective accountability, psychological safety, empower autonomy."
      ],
      "use": [
        "Make 2 leadership philosophy statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an inspiring keynote on modern transformational leadership dynamics."
      ]
    }
  },
  "teens:c-teens-elite-6": {
    "bossName": "Futurist Architect",
    "bossTitle": "Future Forecasting & Prototype Milestones Challenge",
    "bossAvatar": "🤖",
    "mission": "Forecast prototype milestones over a multi-year horizon! Detail what the engineering squad will have been testing and what will have been deployed by next December.",
    "starterPhrase": "By next December, our development team will have been testing the prototype for an entire year, and we will have successfully deployed...",
    "powerWords": [
      "Will have been testing for a year",
      "Will have deployed across networks",
      "By the fourth fiscal quarter"
    ],
    "targetGrammar": "Future Perfect Continuous (will have been + verb-ing) & Future Perfect",
    "checklist": [
      "Use Future Perfect Continuous for long-term duration (will have been testing)",
      "Use Future Perfect for finished deployment (will have deployed)",
      "Paint an inspiring vision of the final product launch"
    ],
    "rounds": {
      "remember": [
        "Structure Future Perfect Continuous: will + have + been + verb-ing."
      ],
      "use": [
        "Make 1 Future Perfect Continuous sentence and 1 Future Perfect sentence."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a visionary technological timeline forecast for the next two years!"
      ]
    }
  },
  "teens:c-teens-elite-7": {
    "bossName": "Venture Strategist",
    "bossTitle": "Mixed Conditionals in Strategic Choices Challenge",
    "bossAvatar": "💰",
    "mission": "Analyze past funding decisions and present consequences! Explain: If we had secured seed funding last year, our company would be the market leader today.",
    "starterPhrase": "Analyzing our competitive positioning, if our founding team had secured early seed funding last year, our company would be the market leader today...",
    "powerWords": [
      "If we had secured early funding",
      "Would be the market leader today",
      "Dominant competitive positioning"
    ],
    "targetGrammar": "Mixed Conditionals (If + Past Perfect [past condition], would + base verb [present outcome])",
    "checklist": [
      "State the past condition with \"If we had [participle]\"",
      "State the present resulting state with \"we would be [present state] today\"",
      "Extract a clear strategic takeaway for the current funding round"
    ],
    "rounds": {
      "remember": [
        "Contrast Mixed Conditional (past condition -> present result) vs Standard Third Conditional."
      ],
      "use": [
        "Make 2 mixed conditional strategic statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a sophisticated venture capital post-mortem using mixed conditional logic."
      ]
    }
  },
  "teens:c-teens-elite-8": {
    "bossName": "High Finance Invertor",
    "bossTitle": "Negative Adverb Inversion in High Finance Challenge",
    "bossAvatar": "⚡",
    "mission": "Deliver a high-stakes financial briefing using formal negative inversion! Emphasize: Seldom do young startup founders encounter such favorable regulatory terms.",
    "starterPhrase": "Seldom do early-stage startup founders encounter such favorable regulatory conditions, and under no circumstances should our team...",
    "powerWords": [
      "Seldom do founders encounter",
      "Under no circumstances should we",
      "Rarely has an ecosystem provided"
    ],
    "targetGrammar": "Formal negative adverb inversion (Seldom do..., Under no circumstances should...)",
    "checklist": [
      "Invert with \"Seldom do [subject] [verb]\"",
      "Invert with \"Under no circumstances should we [verb]\"",
      "Maintain authoritative executive gravitas throughout"
    ],
    "rounds": {
      "remember": [
        "Practice inversion: \"We seldom see\" -> \"Seldom do we see.\""
      ],
      "use": [
        "Make 2 formal inverted financial statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a commanding financial keynote using formal negative inversion!"
      ]
    }
  },
  "teens:c-teens-elite-9": {
    "bossName": "Q&A Defender",
    "bossTitle": "Academic Defense & Q&A Bridging Techniques Challenge",
    "bossAvatar": "🛡️",
    "mission": "Field a tough hostile inquiry during a venture pitch! Acknowledge the critic's concern diplomatically, bridge, and pivot to your proprietary risk protocol.",
    "starterPhrase": "While that security concern is entirely valid, our multi-layered risk remediation protocol resolves it completely by...",
    "powerWords": [
      "While that concern is valid",
      "Our protocol resolves it completely",
      "Let me direct attention to our data"
    ],
    "targetGrammar": "Diplomatic acknowledgment + Bridging phrases (While X is valid, the data prove Y)",
    "checklist": [
      "Acknowledge the objection courteously",
      "Bridge seamlessly to your core competitive moat",
      "Provide empirical proof neutralizing the doubt"
    ],
    "rounds": {
      "remember": [
        "Say 3 bridging phrases: while that is a valid point, that allows me to highlight, the evidence demonstrates."
      ],
      "use": [
        "Make 2 diplomatic bridging responses."
      ],
      "speak": [
        "Speak for 30 seconds: Field a tough investor objection with poise, bridging, and authoritative defense."
      ]
    }
  },
  "teens:c-teens-elite-10": {
    "bossName": "Consensus Architect",
    "bossTitle": "Consensus Building & Executive Charters Challenge",
    "bossAvatar": "📜",
    "mission": "Facilitate unanimous endorsement of an international student governance charter! Reconcile opposing factions into a single binding agreement.",
    "starterPhrase": "Through constructive bilateral dialogue, all student delegates have unanimously endorsed the updated governance charter, ensuring...",
    "powerWords": [
      "Unanimously endorsed the charter",
      "Reconciled divergent perspectives",
      "Binding institutional framework"
    ],
    "targetGrammar": "High-level facilitation and unanimous consensus language",
    "checklist": [
      "Acknowledge how diverse interests were balanced",
      "Highlight 2 core pillars of the charter",
      "Call for triumphant ratification by the general assembly"
    ],
    "rounds": {
      "remember": [
        "Say 3 consensus terms: unanimously endorsed, reconciled differences, institutional charter."
      ],
      "use": [
        "Make 2 consensus facilitation statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver the closing ratification address for a historic youth governance charter!"
      ]
    }
  },
  "teens:c-teens-elite-11": {
    "bossName": "Seed Pitch Champion",
    "bossTitle": "Grand Capstone Seed Pitch Defense Challenge",
    "bossAvatar": "🚀",
    "mission": "Deliver your Grand Capstone Venture Seed Pitch! Present your proprietary algorithm, defensible network moats, and vision to transform global technology.",
    "starterPhrase": "Distinguished investors, our proprietary platform delivers exponential efficiency with undeniable network effects, revolutionizing how...",
    "powerWords": [
      "Proprietary algorithm",
      "Exponential efficiency",
      "Undeniable network effects"
    ],
    "targetGrammar": "Elite synthesis (Venture rhetoric + Inversion + Bridging + Mixed conditionals + Vision)",
    "checklist": [
      "Hook with the massive market problem",
      "Demonstrate your defensible technological moat",
      "Close with a compelling investment thesis"
    ],
    "rounds": {
      "remember": [
        "Say 5 venture mastery terms."
      ],
      "use": [
        "Deliver 2 high-impact investor pitch statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your Elite Level Grand Capstone Seed Pitch to a panel of venture capitalists!"
      ]
    }
  },
  "teens:c-teens-masters-1": {
    "bossName": "Union Debater",
    "bossTitle": "Oxford-Union Parliamentary Debate & Dialectics Challenge",
    "bossAvatar": "🏛️",
    "mission": "Demolish an opposing parliamentary argument in an Oxford-Union debate! Expose their false dichotomy and prove that it collapses under empirical scrutiny.",
    "starterPhrase": "Mr. Speaker, the opposition's central contention rests upon a false dichotomy that collapses completely under empirical scrutiny...",
    "powerWords": [
      "False dichotomy",
      "Collapses under empirical scrutiny",
      "Fundamental logical fallacy"
    ],
    "targetGrammar": "Parliamentary dialectics, fallacy refutation, and Oxford-Union oratory",
    "checklist": [
      "Identify the opposition's logical fallacy",
      "Deploy empirical warrants dismantling their claim",
      "Close with a devastating rhetorical indictment"
    ],
    "rounds": {
      "remember": [
        "Say 3 parliamentary debate terms: point of order, false dichotomy, empirical scrutiny."
      ],
      "use": [
        "Make 2 dialectical refutation statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a tour de force Oxford-Union parliamentary debate speech!"
      ]
    }
  },
  "teens:c-teens-masters-2": {
    "bossName": "Semiotics Scholar",
    "bossTitle": "Digital Semiotics & Algorithmic Cognition Challenge",
    "bossAvatar": "📱",
    "mission": "Analyze how recommendation algorithms reshape human attention and semiotic culture! Deconstruct clickbait incentives and cognitive echo chambers.",
    "starterPhrase": "Algorithmic recommendation feeds subtly reshape human cognition by systematically amplifying sensationalist narratives at the expense of...",
    "powerWords": [
      "Reshape human cognition",
      "Amplify sensationalist narratives",
      "Semiotic fragmentation"
    ],
    "targetGrammar": "High-order academic semiotics vocabulary and causal analysis",
    "checklist": [
      "Analyze the algorithmic incentive structure",
      "Expose the cognitive impact on youth attention",
      "Propose an intellectual counter-movement for digital sovereignty"
    ],
    "rounds": {
      "remember": [
        "Say 3 media ecology terms: semiotics, cognitive distortion, algorithmic amplification."
      ],
      "use": [
        "Make 2 critical media analysis statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a profound intellectual critique of algorithmic media ecology."
      ]
    }
  },
  "teens:c-teens-masters-3": {
    "bossName": "Socratic Master",
    "bossTitle": "Socratic Seminars & Scientific Boundary Conditions Challenge",
    "bossAvatar": "🔬",
    "mission": "Lead an Ivy League-level graduate seminar on scientific epistemology! Explain why a theoretical hypothesis remains robust only within strictly defined boundary conditions.",
    "starterPhrase": "As we examine the theoretical paradigm, this hypothesis remains scientifically robust only within strictly defined boundary conditions, beyond which...",
    "powerWords": [
      "Scientifically robust",
      "Strictly defined boundary conditions",
      "Epistemological validity"
    ],
    "targetGrammar": "Academic epistemological discourse and qualifying boundary conditions",
    "checklist": [
      "Define the qualifying boundary conditions of the theory",
      "Expose the breakdown points of the model",
      "Synthesize a higher-order epistemological framework"
    ],
    "rounds": {
      "remember": [
        "Say 3 epistemological terms: boundary condition, falsifiability, paradigm."
      ],
      "use": [
        "Make 2 nuanced academic seminar statements."
      ],
      "speak": [
        "Speak for 30 seconds: Lead a rigorous Socratic seminar deconstructing scientific boundary conditions."
      ]
    }
  },
  "teens:c-teens-masters-4": {
    "bossName": "TED Keynote Speaker",
    "bossTitle": "TED Keynotes & Human Potential Antithesis Challenge",
    "bossAvatar": "🎤",
    "mission": "Deliver an unforgettable TED-style thought leadership opening! Use antithesis to show how human potential expands when curiosity replaces fear.",
    "starterPhrase": "When curiosity replaces fear, human potential expands far beyond conventional boundaries, unlocking unprecedented...",
    "powerWords": [
      "When curiosity replaces fear",
      "Human potential expands",
      "Transcending conventional limits"
    ],
    "targetGrammar": "Rhetorical antithesis, cadence, and visionary inspirational framing",
    "checklist": [
      "Hook with a universal human paradox",
      "Deploy antithesis (fear vs curiosity)",
      "Inspire the global audience with a transformative call to action"
    ],
    "rounds": {
      "remember": [
        "Structure rhetorical antithesis: \"When X replaces Y, Z expands.\""
      ],
      "use": [
        "Make 2 inspirational thought leadership statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a breathtaking TED-level keynote opening on human potential!"
      ]
    }
  },
  "teens:c-teens-masters-5": {
    "bossName": "Treaty Architect",
    "bossTitle": "International Cyber Safeguards & Treaties Challenge",
    "bossAvatar": "🛡️",
    "mission": "Draft and defend an international treaty on autonomous AI cyber defense! Argue why binding multilateral safeguards must govern autonomous cyber warfare.",
    "starterPhrase": "This house would establish binding international safeguards on autonomous cyber warfare to prevent catastrophic systemic collapse of...",
    "powerWords": [
      "Binding international safeguards",
      "Autonomous cyber warfare",
      "Multilateral governance framework"
    ],
    "targetGrammar": "Parliamentary motion framing (This house would...) + Treaty codification",
    "checklist": [
      "Frame the treaty resolution with legal clarity",
      "Demonstrate the catastrophic risk of unconstrained cyber weapons",
      "Propose an international inspection and verification protocol"
    ],
    "rounds": {
      "remember": [
        "Say 3 international law terms: multilateral treaty, binding safeguard, non-proliferation."
      ],
      "use": [
        "Make 2 treaty defense statements."
      ],
      "speak": [
        "Speak for 30 seconds: Defend a historic international treaty on autonomous cyber governance."
      ]
    }
  },
  "teens:c-teens-masters-6": {
    "bossName": "Critical Discourse Critic",
    "bossTitle": "Linguistic Framing in Geopolitical Crises Challenge",
    "bossAvatar": "📰",
    "mission": "Deconstruct how subtle linguistic framing choices in major news media manipulate public perception of international geopolitical events.",
    "starterPhrase": "Subtle linguistic framing choices decisively influence public perception of geopolitical crises by manufacturing consent through...",
    "powerWords": [
      "Subtle linguistic framing",
      "Manufacturing public consent",
      "Ideological distortion"
    ],
    "targetGrammar": "Critical discourse analysis (CDA) vocabulary and structural critique",
    "checklist": [
      "Identify 2 loaded linguistic markers in news coverage",
      "Expose the underlying ideological bias",
      "Advocate for media literacy and independent analytical verification"
    ],
    "rounds": {
      "remember": [
        "Say 3 discourse analysis terms: framing, lexical choice, manufactured consent."
      ],
      "use": [
        "Make 2 critical discourse analysis statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an insightful academic deconstruction of geopolitical media framing."
      ]
    }
  },
  "teens:c-teens-masters-7": {
    "bossName": "Scholarly Synthesizer",
    "bossTitle": "Scholarly Synthesis & Cross-Disciplinary Theory Challenge",
    "bossAvatar": "📚",
    "mission": "Synthesize divergent academic perspectives across neuroscience, sociology, and ethics into a unified grand theory of human decision-making.",
    "starterPhrase": "Synthesizing divergent academic perspectives across cognitive neuroscience and sociology reveals common underlying theoretical foundations that...",
    "powerWords": [
      "Synthesizing divergent perspectives",
      "Underlying theoretical foundations",
      "Unified interdisciplinary paradigm"
    ],
    "targetGrammar": "Fronted gerund synthesis + Interdisciplinary academic collocations",
    "checklist": [
      "Front a gerund phrase (Synthesizing divergent academic perspectives...)",
      "Bridge two seemingly opposed academic disciplines",
      "Articulate a unified interdisciplinary breakthrough"
    ],
    "rounds": {
      "remember": [
        "Formulate a fronted gerund thesis: \"Synthesizing X reveals Y.\""
      ],
      "use": [
        "Make 2 interdisciplinary synthesis statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver an interdisciplinary graduate seminar synthesizing complex academic theories."
      ]
    }
  },
  "teens:c-teens-masters-8": {
    "bossName": "Documentary Auteur",
    "bossTitle": "Investigative Documentary Narratives & Inversion Challenge",
    "bossAvatar": "🎬",
    "mission": "Narrate the opening voiceover of a hard-hitting investigative documentary using locative prepositional inversion to unmask corporate deception.",
    "starterPhrase": "Behind the glossy promotional marketing lies a complex investigative reality of environmental destruction and broken promises...",
    "powerWords": [
      "Behind the glossy marketing lies",
      "Complex investigative reality",
      "Unmasking systemic corruption"
    ],
    "targetGrammar": "Locative and directional prepositional inversion (Behind X lies Y / Into the darkness stepped Z)",
    "checklist": [
      "Invert using a fronted prepositional phrase (Behind the glossy marketing lies...)",
      "Contrast superficial PR against harsh investigative truth",
      "Hook the global audience for a world-changing documentary"
    ],
    "rounds": {
      "remember": [
        "Practice locative inversion: \"A complex reality lies behind the marketing\" -> \"Behind the marketing lies a complex reality.\""
      ],
      "use": [
        "Make 2 dramatic inverted documentary voiceover statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a cinematic, spine-tingling investigative documentary voiceover opening!"
      ]
    }
  },
  "teens:c-teens-masters-9": {
    "bossName": "Superintelligence Ethicist",
    "bossTitle": "Global Governance of Superintelligence Challenge",
    "bossAvatar": "🤖",
    "mission": "Deliver an existential risk address on the global governance of transformative AI superintelligence! Demand unprecedented international scientific alignment.",
    "starterPhrase": "Governing transformative artificial intelligence requires unprecedented international collaboration among nations, scientists, and ethicists to guarantee...",
    "powerWords": [
      "Governing transformative AI",
      "Unprecedented international collaboration",
      "Existential alignment safeguards"
    ],
    "targetGrammar": "Existential risk terminology, ethical mandates, and global summit rhetoric",
    "checklist": [
      "Articulate the civilizational stakes of AGI alignment",
      "Call for an international scientific inspection agency",
      "Inspire humanity to unite in governing transformative technology"
    ],
    "rounds": {
      "remember": [
        "Say 3 AI safety terms: alignment, existential risk, superintelligence governance."
      ],
      "use": [
        "Make 2 urgent global governance statements."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver a historic address on the global governance and alignment of AI!"
      ]
    }
  },
  "teens:c-teens-masters-10": {
    "bossName": "Supreme Orator",
    "bossTitle": "C2 Fluency Summit & Visionary Capstone Challenge",
    "bossAvatar": "👑",
    "mission": "Deliver your C2 Fluency Capstone Oratory Address! Declare how true linguistic mastery transcends grammatical precision to articulate transformative visions for humanity.",
    "starterPhrase": "True linguistic mastery transcends grammatical precision to articulate transformative visions for humanity, empowering our generation to...",
    "powerWords": [
      "Transcends grammatical precision",
      "Transformative vision for humanity",
      "Supreme rhetorical mastery"
    ],
    "targetGrammar": "Complete C2 English Mastery (Transcendental rhetoric, cadence, gravitas, and visionary synthesis)",
    "checklist": [
      "Reflect on the transformative power of language mastery",
      "Articulate your vision for leading positive global change",
      "Deliver an unforgettable, transcendent closing statement"
    ],
    "rounds": {
      "remember": [
        "Say 5 transcendent C2 words that define supreme linguistic artistry."
      ],
      "use": [
        "Deliver two timeless sentences combining ultimate eloquence and ethical purpose."
      ],
      "speak": [
        "Speak for 30 seconds: Deliver your grand C2 Masters Oratory Address and claim supreme English mastery!"
      ]
    }
  }
};

export function getCustomSpeakingBossMission(
  audience: 'kids' | 'teens' | 'adults',
  classId: string
): CustomSpeakingBossMission | null {
  const directKey = `${audience}:${classId}`;
  if (CLASS_SPEAKING_BOSS_MAP[directKey]) return CLASS_SPEAKING_BOSS_MAP[directKey];

  if (CLASS_SPEAKING_BOSS_MAP[`teens:${classId}`]) return CLASS_SPEAKING_BOSS_MAP[`teens:${classId}`];
  if (CLASS_SPEAKING_BOSS_MAP[`adults:${classId}`]) return CLASS_SPEAKING_BOSS_MAP[`adults:${classId}`];
  if (CLASS_SPEAKING_BOSS_MAP[`kids:${classId}`]) return CLASS_SPEAKING_BOSS_MAP[`kids:${classId}`];

  return null;
}
