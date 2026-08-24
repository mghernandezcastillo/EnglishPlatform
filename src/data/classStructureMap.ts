// Master customized class structure map for all 220 classes across Kids, Adults, and Teens tracks.
// Generated with 100% pedagogical alignment to each individual class syllabus.

export interface CustomClassStructurePart {
  label: string;
  text: string;
  color: string;
}

export interface CustomClassStructure {
  patternName: string;
  variant: 'question' | 'affirmative' | 'negative';
  title: string;
  instructions: string;
  prompt: string;
  learningOpportunity: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'challenge';
  accentColor: string;
  parts: CustomClassStructurePart[];
}

export const CLASS_STRUCTURE_MAP: Record<string, CustomClassStructure> = {
  "kids:c-bz-1": {
    "patternName": "Colors & Greetings",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about color.",
    "prompt": "What color is the sun?",
    "learningOpportunity": "Ask about colors using What color + is.",
    "difficulty": "easy",
    "accentColor": "from-yellow-400 to-orange-500",
    "parts": [
      {
        "label": "Question",
        "text": "What color",
        "color": "bg-emerald-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "the sun?",
        "color": "bg-cyan-300"
      }
    ]
  },
  "kids:c-bz-2": {
    "patternName": "Counting Animals",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to count animal friends.",
    "prompt": "There are three happy dogs.",
    "learningOpportunity": "Use There are + number + plural noun.",
    "difficulty": "easy",
    "accentColor": "from-emerald-400 to-teal-600",
    "parts": [
      {
        "label": "Starter",
        "text": "There are",
        "color": "bg-emerald-300"
      },
      {
        "label": "Number",
        "text": "three",
        "color": "bg-orange-300"
      },
      {
        "label": "Subject",
        "text": "happy dogs.",
        "color": "bg-cyan-300"
      }
    ]
  },
  "kids:c-bz-3": {
    "patternName": "Body Commands & Actions",
    "variant": "affirmative",
    "title": "Build the Action / Arma la Acción",
    "instructions": "Put the blocks in order to give a body command.",
    "prompt": "Touch your nose and jump!",
    "learningOpportunity": "Combine action verbs with body parts.",
    "difficulty": "easy",
    "accentColor": "from-pink-400 to-rose-600",
    "parts": [
      {
        "label": "Verb",
        "text": "Touch",
        "color": "bg-violet-300"
      },
      {
        "label": "Body part",
        "text": "your nose",
        "color": "bg-yellow-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Action",
        "text": "jump!",
        "color": "bg-violet-300"
      }
    ]
  },
  "kids:c-bz-4": {
    "patternName": "My Favorite Toys",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to talk about your toy.",
    "prompt": "I have a red robot.",
    "learningOpportunity": "Express possession of toys using I have.",
    "difficulty": "easy",
    "accentColor": "from-blue-400 to-indigo-600",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "have",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "a red robot.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bz-5": {
    "patternName": "Fruit Preferences",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about fruit likes.",
    "prompt": "Do you like sweet apples?",
    "learningOpportunity": "Ask about food likes with Do you like.",
    "difficulty": "easy",
    "accentColor": "from-red-400 to-pink-600",
    "parts": [
      {
        "label": "Auxiliary",
        "text": "Do",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "like",
        "color": "bg-violet-300"
      },
      {
        "label": "Food",
        "text": "sweet apples?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bz-6": {
    "patternName": "Super Shapes",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe a shape.",
    "prompt": "The blue circle is very big.",
    "learningOpportunity": "Describe shapes with color and size adjectives.",
    "difficulty": "easy",
    "accentColor": "from-teal-400 to-cyan-600",
    "parts": [
      {
        "label": "Shape",
        "text": "The blue circle",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Adjective",
        "text": "very big.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bz-7": {
    "patternName": "School Supplies",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to name your school supply.",
    "prompt": "This is my yellow pencil.",
    "learningOpportunity": "Identify school supplies with This is my.",
    "difficulty": "easy",
    "accentColor": "from-amber-400 to-orange-600",
    "parts": [
      {
        "label": "Pointer",
        "text": "This",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Object",
        "text": "my yellow pencil.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bz-8": {
    "patternName": "Farm Animal Features",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe a farm animal.",
    "prompt": "The cow has black spots.",
    "learningOpportunity": "Describe animal features using has + adjective + noun.",
    "difficulty": "easy",
    "accentColor": "from-lime-400 to-emerald-600",
    "parts": [
      {
        "label": "Animal",
        "text": "The cow",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "has",
        "color": "bg-violet-300"
      },
      {
        "label": "Feature",
        "text": "black spots.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-be-1": {
    "patternName": "Family & Feelings",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to share feelings.",
    "prompt": "My mom is very happy today.",
    "learningOpportunity": "Talk about family members and their emotions.",
    "difficulty": "easy",
    "accentColor": "from-pink-400 to-purple-600",
    "parts": [
      {
        "label": "Family",
        "text": "My mom",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Feeling",
        "text": "very happy",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time",
        "text": "today.",
        "color": "bg-orange-300"
      }
    ]
  },
  "kids:c-be-2": {
    "patternName": "Food Choices",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your meal.",
    "prompt": "I eat healthy food for lunch.",
    "learningOpportunity": "Describe healthy meal choices with I eat.",
    "difficulty": "easy",
    "accentColor": "from-emerald-400 to-teal-600",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "eat",
        "color": "bg-violet-300"
      },
      {
        "label": "Food",
        "text": "healthy food",
        "color": "bg-yellow-300"
      },
      {
        "label": "Meal",
        "text": "for lunch.",
        "color": "bg-orange-300"
      }
    ]
  },
  "kids:c-be-3": {
    "patternName": "Clothes & Weather",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to match clothes with weather.",
    "prompt": "I wear a warm coat in winter.",
    "learningOpportunity": "Connect clothing items with weather seasons.",
    "difficulty": "easy",
    "accentColor": "from-sky-400 to-indigo-600",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "wear",
        "color": "bg-violet-300"
      },
      {
        "label": "Clothing",
        "text": "a warm coat",
        "color": "bg-yellow-300"
      },
      {
        "label": "Season",
        "text": "in winter.",
        "color": "bg-orange-300"
      }
    ]
  },
  "kids:c-be-4": {
    "patternName": "Nature & Plants",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe a plant.",
    "prompt": "The tall tree grows in the park.",
    "learningOpportunity": "Use singular present simple for nature descriptions.",
    "difficulty": "easy",
    "accentColor": "from-green-400 to-emerald-600",
    "parts": [
      {
        "label": "Subject",
        "text": "The tall tree",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "grows",
        "color": "bg-violet-300"
      },
      {
        "label": "Place",
        "text": "in the park.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-be-5": {
    "patternName": "Bugs Up Close",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe insect actions.",
    "prompt": "The little ant carries green leaves.",
    "learningOpportunity": "Describe insect habits with 3rd person verbs.",
    "difficulty": "easy",
    "accentColor": "from-lime-400 to-teal-600",
    "parts": [
      {
        "label": "Subject",
        "text": "The little ant",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "carries",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "green leaves.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-be-6": {
    "patternName": "Under the Sea",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe sea creatures.",
    "prompt": "Dolphins swim fast in the ocean.",
    "learningOpportunity": "Talk about sea animals and their swimming skills.",
    "difficulty": "easy",
    "accentColor": "from-cyan-400 to-blue-600",
    "parts": [
      {
        "label": "Sea animal",
        "text": "Dolphins",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "swim",
        "color": "bg-violet-300"
      },
      {
        "label": "Adverb",
        "text": "fast",
        "color": "bg-orange-300"
      },
      {
        "label": "Habitat",
        "text": "in the ocean.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-be-7": {
    "patternName": "Action Heroes Can & Can’t",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to express superhero abilities.",
    "prompt": "The super hero can fly high.",
    "learningOpportunity": "Use modal can + base verb for super abilities.",
    "difficulty": "easy",
    "accentColor": "from-amber-400 to-red-600",
    "parts": [
      {
        "label": "Hero",
        "text": "The super hero",
        "color": "bg-cyan-300"
      },
      {
        "label": "Modal",
        "text": "can",
        "color": "bg-indigo-300"
      },
      {
        "label": "Verb",
        "text": "fly",
        "color": "bg-violet-300"
      },
      {
        "label": "Direction",
        "text": "high.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-be-8": {
    "patternName": "Numbers 11-20 in Real Life",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to count items in class.",
    "prompt": "There are fifteen books on the table.",
    "learningOpportunity": "Count items from 11 to 20 with There are.",
    "difficulty": "easy",
    "accentColor": "from-violet-400 to-purple-600",
    "parts": [
      {
        "label": "Starter",
        "text": "There are",
        "color": "bg-emerald-300"
      },
      {
        "label": "Number",
        "text": "fifteen books",
        "color": "bg-orange-300"
      },
      {
        "label": "Location",
        "text": "on the table.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-ba-1": {
    "patternName": "Wild Animal Habitats",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe animal habitats.",
    "prompt": "Lions live in the African savanna.",
    "learningOpportunity": "State where wild animals live with subject + live in.",
    "difficulty": "easy",
    "accentColor": "from-orange-400 to-amber-600",
    "parts": [
      {
        "label": "Subject",
        "text": "Lions",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "live",
        "color": "bg-violet-300"
      },
      {
        "label": "Habitat",
        "text": "in the African savanna.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-ba-2": {
    "patternName": "My Awesome House",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your room.",
    "prompt": "My bedroom is next to the living room.",
    "learningOpportunity": "Use prepositions of place to describe home layouts.",
    "difficulty": "easy",
    "accentColor": "from-teal-400 to-emerald-600",
    "parts": [
      {
        "label": "Room",
        "text": "My bedroom",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Preposition",
        "text": "next to",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Location",
        "text": "the living room.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-ba-3": {
    "patternName": "Vehicles in Town",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe city transport.",
    "prompt": "The red bus stops at the station.",
    "learningOpportunity": "Describe vehicle movements in a town.",
    "difficulty": "easy",
    "accentColor": "from-blue-400 to-cyan-600",
    "parts": [
      {
        "label": "Vehicle",
        "text": "The red bus",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "stops",
        "color": "bg-violet-300"
      },
      {
        "label": "Place",
        "text": "at the station.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-ba-4": {
    "patternName": "Dream Jobs When I Grow Up",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to express career aspirations.",
    "prompt": "I want to be a kind doctor.",
    "learningOpportunity": "Express future career desires using I want to be + a/an.",
    "difficulty": "easy",
    "accentColor": "from-purple-400 to-indigo-600",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Want phrase",
        "text": "want to be",
        "color": "bg-violet-300"
      },
      {
        "label": "Profession",
        "text": "a kind doctor.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-ba-5": {
    "patternName": "Make Some Music",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about musical ability.",
    "prompt": "Can you play the electric guitar?",
    "learningOpportunity": "Ask about playing instruments with Can you play + the.",
    "difficulty": "easy",
    "accentColor": "from-rose-400 to-pink-600",
    "parts": [
      {
        "label": "Modal",
        "text": "Can",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "play",
        "color": "bg-violet-300"
      },
      {
        "label": "Instrument",
        "text": "the electric guitar?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-ba-6": {
    "patternName": "Days of the Week",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to schedule school activities.",
    "prompt": "We have art class on Wednesday.",
    "learningOpportunity": "Use on + day of the week for recurring schedules.",
    "difficulty": "easy",
    "accentColor": "from-amber-400 to-yellow-600",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "have",
        "color": "bg-violet-300"
      },
      {
        "label": "Activity",
        "text": "art class",
        "color": "bg-yellow-300"
      },
      {
        "label": "Day",
        "text": "on Wednesday.",
        "color": "bg-orange-300"
      }
    ]
  },
  "kids:c-ba-7": {
    "patternName": "Market Quantities & Prices",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask for a price.",
    "prompt": "How much is this fresh watermelon?",
    "learningOpportunity": "Ask about singular item prices with How much is.",
    "difficulty": "easy",
    "accentColor": "from-emerald-400 to-teal-600",
    "parts": [
      {
        "label": "Price question",
        "text": "How much",
        "color": "bg-emerald-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Item",
        "text": "this fresh watermelon?",
        "color": "bg-cyan-300"
      }
    ]
  },
  "kids:c-ba-8": {
    "patternName": "Playground Fun",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to invite friends to play.",
    "prompt": "Let us play on the big slide!",
    "learningOpportunity": "Form friendly invitations with Let us + verb.",
    "difficulty": "easy",
    "accentColor": "from-cyan-400 to-blue-600",
    "parts": [
      {
        "label": "Invitation",
        "text": "Let us",
        "color": "bg-emerald-300"
      },
      {
        "label": "Verb",
        "text": "play",
        "color": "bg-violet-300"
      },
      {
        "label": "Playground equipment",
        "text": "on the big slide!",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bc-1": {
    "patternName": "My Day in Order",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe daily sequences.",
    "prompt": "I brush my teeth before I sleep.",
    "learningOpportunity": "Sequence daily routines using time connectors like before.",
    "difficulty": "medium",
    "accentColor": "from-blue-500 to-indigo-600",
    "parts": [
      {
        "label": "Routine 1",
        "text": "I brush my teeth",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "before",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Routine 2",
        "text": "I sleep.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bc-2": {
    "patternName": "Hobbies & Frequency",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to talk about sports frequency.",
    "prompt": "I always play soccer on Saturday mornings.",
    "learningOpportunity": "Place frequency adverbs before the main action verb.",
    "difficulty": "medium",
    "accentColor": "from-emerald-500 to-teal-600",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Frequency",
        "text": "always",
        "color": "bg-orange-300"
      },
      {
        "label": "Activity",
        "text": "play soccer",
        "color": "bg-violet-300"
      },
      {
        "label": "Time",
        "text": "on Saturday mornings.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bc-3": {
    "patternName": "Happy Holidays",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to celebrate traditions.",
    "prompt": "Families share special meals at Christmas.",
    "learningOpportunity": "Describe holiday customs and family traditions.",
    "difficulty": "medium",
    "accentColor": "from-red-500 to-rose-600",
    "parts": [
      {
        "label": "Subject",
        "text": "Families",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "share",
        "color": "bg-violet-300"
      },
      {
        "label": "Complement",
        "text": "special meals",
        "color": "bg-yellow-300"
      },
      {
        "label": "Holiday",
        "text": "at Christmas.",
        "color": "bg-orange-300"
      }
    ]
  },
  "kids:c-bc-4": {
    "patternName": "Outer Space Adventure",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe space missions.",
    "prompt": "Astronauts travel to the distant moon.",
    "learningOpportunity": "Describe exploration with subject + travel to + place.",
    "difficulty": "medium",
    "accentColor": "from-indigo-500 to-violet-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Astronauts",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "travel to",
        "color": "bg-violet-300"
      },
      {
        "label": "Destination",
        "text": "the distant moon.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bc-5": {
    "patternName": "Fairy Tales Storytelling",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to tell past fairy tale events.",
    "prompt": "The brave knight rescued the kingdom.",
    "learningOpportunity": "Use past simple regular verbs in narrative storytelling.",
    "difficulty": "medium",
    "accentColor": "from-amber-500 to-orange-600",
    "parts": [
      {
        "label": "Hero",
        "text": "The brave knight",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past verb",
        "text": "rescued",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "the kingdom.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "kids:c-bc-6": {
    "patternName": "Seasons & Future Plans",
    "variant": "affirmative",
    "title": "Build with Going To / Arma con Going To",
    "instructions": "Put the blocks in order to describe summer vacation plans.",
    "prompt": "We are going to swim in the lake this summer.",
    "learningOpportunity": "Express future holiday plans with be + going to + verb.",
    "difficulty": "medium",
    "accentColor": "from-cyan-500 to-blue-600",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Future form",
        "text": "are going to swim",
        "color": "bg-indigo-300"
      },
      {
        "label": "Location",
        "text": "in the lake",
        "color": "bg-yellow-300"
      },
      {
        "label": "Season",
        "text": "this summer.",
        "color": "bg-orange-300"
      }
    ]
  },
  "kids:c-bc-7": {
    "patternName": "Community Helpers",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe community responsibilities.",
    "prompt": "Firefighters protect our city every day.",
    "learningOpportunity": "Connect community jobs with their daily civic impact.",
    "difficulty": "medium",
    "accentColor": "from-rose-500 to-amber-600",
    "parts": [
      {
        "label": "Profession",
        "text": "Firefighters",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "protect",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "our city",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time",
        "text": "every day.",
        "color": "bg-orange-300"
      }
    ]
  },
  "kids:c-bc-8": {
    "patternName": "Culture & World Exploration",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to celebrate global diversity.",
    "prompt": "People speak different languages around the world.",
    "learningOpportunity": "Express global cultural facts with subject + verb + complement.",
    "difficulty": "medium",
    "accentColor": "from-teal-500 to-emerald-600",
    "parts": [
      {
        "label": "Subject",
        "text": "People",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "speak",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "different languages",
        "color": "bg-yellow-300"
      },
      {
        "label": "Global phrase",
        "text": "around the world.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-bz-1": {
    "patternName": "Introduction & Present To Be",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask someone's name.",
    "prompt": "What is your full name?",
    "learningOpportunity": "Form personal introduction questions with What + is + your + noun.",
    "difficulty": "easy",
    "accentColor": "from-blue-600 to-indigo-700",
    "parts": [
      {
        "label": "Question word",
        "text": "What",
        "color": "bg-emerald-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "your full name?",
        "color": "bg-cyan-300"
      }
    ]
  },
  "adults:c-bz-2": {
    "patternName": "Numbers & Time Expressions",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in the correct order to ask for the current time.",
    "prompt": "What time is it right now?",
    "learningOpportunity": "Ask for the time using What time + is + it.",
    "difficulty": "easy",
    "accentColor": "from-cyan-600 to-blue-700",
    "parts": [
      {
        "label": "Question phrase",
        "text": "What time",
        "color": "bg-emerald-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Pronoun",
        "text": "it",
        "color": "bg-cyan-300"
      },
      {
        "label": "Time adverb",
        "text": "right now?",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-bz-3": {
    "patternName": "Colors, Emotions & Descriptions with To Be",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe how you feel at work.",
    "prompt": "I am very happy with my new job.",
    "learningOpportunity": "Connect subject + to be + emotion + prepositional phrase.",
    "difficulty": "easy",
    "accentColor": "from-teal-600 to-emerald-700",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "am",
        "color": "bg-indigo-300"
      },
      {
        "label": "Emotion",
        "text": "very happy",
        "color": "bg-yellow-300"
      },
      {
        "label": "Complement",
        "text": "with my new job.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-bz-4": {
    "patternName": "Family & Possessive Adjectives",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to introduce a family member.",
    "prompt": "My older sister is a talented architect.",
    "learningOpportunity": "Use possessive adjectives (my, your, her) with family nouns.",
    "difficulty": "easy",
    "accentColor": "from-indigo-600 to-purple-700",
    "parts": [
      {
        "label": "Subject",
        "text": "My older sister",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Profession",
        "text": "a talented architect.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-bz-5": {
    "patternName": "There Is / There Are & City Places",
    "variant": "affirmative",
    "title": "Build with There Is / There Are",
    "instructions": "Put the blocks in order to describe a place in the city.",
    "prompt": "There is a modern bank near the station.",
    "learningOpportunity": "Use There is + singular noun + location.",
    "difficulty": "easy",
    "accentColor": "from-emerald-600 to-teal-700",
    "parts": [
      {
        "label": "Starter",
        "text": "There is",
        "color": "bg-emerald-300"
      },
      {
        "label": "Place",
        "text": "a modern bank",
        "color": "bg-cyan-300"
      },
      {
        "label": "Location",
        "text": "near the station.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-bz-6": {
    "patternName": "Months, Days & Ordinal Numbers",
    "variant": "affirmative",
    "title": "Build the Date / Arma la Fecha",
    "instructions": "Put the blocks in order to state a birthday date with ordinal numbers.",
    "prompt": "My birthday is on the fifteenth of August.",
    "learningOpportunity": "Use on + the + ordinal number + of + month for calendar dates.",
    "difficulty": "easy",
    "accentColor": "from-amber-600 to-orange-700",
    "parts": [
      {
        "label": "Subject",
        "text": "My birthday",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is on",
        "color": "bg-indigo-300"
      },
      {
        "label": "Ordinal date",
        "text": "the fifteenth of August.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-bz-7": {
    "patternName": "Articles & Demonstratives (This, That, These, Those)",
    "variant": "affirmative",
    "title": "Build with Demonstratives / Arma con Demostrativos",
    "instructions": "Put the blocks in order to highlight documents on your desk.",
    "prompt": "These documents on my desk are very important.",
    "learningOpportunity": "Use plural demonstrative These with plural noun + prepositional modifier.",
    "difficulty": "easy",
    "accentColor": "from-blue-600 to-cyan-700",
    "parts": [
      {
        "label": "Demonstrative phrase",
        "text": "These documents on my desk",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "are",
        "color": "bg-indigo-300"
      },
      {
        "label": "Adjective",
        "text": "very important.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-bz-8": {
    "patternName": "Body Parts, Health & Pets",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your family pet.",
    "prompt": "I have a friendly golden retriever at home.",
    "learningOpportunity": "Express pet ownership with I have + adjective + noun + location.",
    "difficulty": "easy",
    "accentColor": "from-lime-600 to-emerald-700",
    "parts": [
      {
        "label": "Subject & verb",
        "text": "I have",
        "color": "bg-cyan-300"
      },
      {
        "label": "Pet description",
        "text": "a friendly golden retriever",
        "color": "bg-yellow-300"
      },
      {
        "label": "Location",
        "text": "at home.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-bz-9": {
    "patternName": "Food, Hunger & Expressing Basic Needs",
    "variant": "affirmative",
    "title": "Build Polite Request / Arma Petición Cortés",
    "instructions": "Put the blocks in order to express a polite beverage request.",
    "prompt": "I would like a glass of cold water, please.",
    "learningOpportunity": "Form polite requests using I would like + noun + please.",
    "difficulty": "easy",
    "accentColor": "from-sky-600 to-indigo-700",
    "parts": [
      {
        "label": "Polite starter",
        "text": "I would like",
        "color": "bg-emerald-300"
      },
      {
        "label": "Drink item",
        "text": "a glass of cold water,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Courtesy",
        "text": "please.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-bz-10": {
    "patternName": "Basic Locations & Prepositions of Place",
    "variant": "affirmative",
    "title": "Build the Location / Arma la Ubicación",
    "instructions": "Put the blocks in order to describe an office headquarters location.",
    "prompt": "The company headquarters is located next to the metro station.",
    "learningOpportunity": "Use is located next to + landmark to indicate exact locations.",
    "difficulty": "easy",
    "accentColor": "from-amber-600 to-yellow-700",
    "parts": [
      {
        "label": "Subject",
        "text": "The company headquarters",
        "color": "bg-cyan-300"
      },
      {
        "label": "Passive locative",
        "text": "is located next to",
        "color": "bg-indigo-300"
      },
      {
        "label": "Landmark",
        "text": "the metro station.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-zero-11": {
    "patternName": "Classroom English & Communication Repair",
    "variant": "question",
    "title": "Build Communication Repair / Arma Reparación Comunicativa",
    "instructions": "Put the blocks in order to politely ask the teacher to repeat.",
    "prompt": "Could you please repeat that more slowly?",
    "learningOpportunity": "Use Could you please repeat that + adverb for classroom clarification.",
    "difficulty": "easy",
    "accentColor": "from-violet-600 to-purple-700",
    "parts": [
      {
        "label": "Polite frame",
        "text": "Could you please repeat that",
        "color": "bg-emerald-300"
      },
      {
        "label": "Adverb modifier",
        "text": "more slowly?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-zero-12": {
    "patternName": "Alphabet & Spelling Names and Usernames",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask how to spell a surname.",
    "prompt": "How do you spell your last name?",
    "learningOpportunity": "Ask for spelling using How do you spell + your + noun.",
    "difficulty": "easy",
    "accentColor": "from-cyan-600 to-blue-700",
    "parts": [
      {
        "label": "Question word",
        "text": "How",
        "color": "bg-emerald-300"
      },
      {
        "label": "Auxiliary & subject",
        "text": "do you",
        "color": "bg-indigo-300"
      },
      {
        "label": "Verb",
        "text": "spell",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "your last name?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-zero-13": {
    "patternName": "Countries, Nationalities & Origins",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask where someone is from and their nationality.",
    "prompt": "Where are you from, and what is your nationality?",
    "learningOpportunity": "Combine Where are you from with nationality inquiries using and.",
    "difficulty": "easy",
    "accentColor": "from-emerald-600 to-teal-700",
    "parts": [
      {
        "label": "Origin question",
        "text": "Where are you from,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Nationality question",
        "text": "what is your nationality?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-zero-14": {
    "patternName": "Professions & Common Occupations",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to introduce a professional occupation.",
    "prompt": "She is an experienced software engineer.",
    "learningOpportunity": "Use an + adjective + profession noun (an experienced engineer).",
    "difficulty": "easy",
    "accentColor": "from-rose-600 to-pink-700",
    "parts": [
      {
        "label": "Subject",
        "text": "She",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Profession phrase",
        "text": "an experienced software engineer.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-zero-15": {
    "patternName": "Family Profiles & Emergency Contacts",
    "variant": "affirmative",
    "title": "Build Emergency Contact / Arma Contacto de Emergencia",
    "instructions": "Put the blocks in order to designate a family emergency contact.",
    "prompt": "My emergency contact is my brother in Medellin.",
    "learningOpportunity": "State emergency contacts with My emergency contact is + relation + city.",
    "difficulty": "easy",
    "accentColor": "from-indigo-600 to-blue-700",
    "parts": [
      {
        "label": "Subject",
        "text": "My emergency contact",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Relative & location",
        "text": "my brother in Medellin.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-zero-16": {
    "patternName": "Basic Zero General Review & Capstone",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask a comprehensive introductory question.",
    "prompt": "What is your profession, and where do you live?",
    "learningOpportunity": "Link profession and residence questions into a fluid conversation opener.",
    "difficulty": "easy",
    "accentColor": "from-violet-600 to-indigo-700",
    "parts": [
      {
        "label": "Profession question",
        "text": "What is your profession,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Residence question",
        "text": "where do you live?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-1-1": {
    "patternName": "Present Simple (I, You, We, They)",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to express team routines.",
    "prompt": "We review project deliverables every Monday.",
    "learningOpportunity": "Use base verb with plural subjects in Present Simple.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-teal-700",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "review",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "project deliverables",
        "color": "bg-yellow-300"
      },
      {
        "label": "Frequency",
        "text": "every Monday.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-1-2": {
    "patternName": "Present Simple 3rd Person (He, She, It)",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order using third person singular -s/-es.",
    "prompt": "She manages the international sales department.",
    "learningOpportunity": "Add -s to the verb when the subject is he, she, or it.",
    "difficulty": "easy",
    "accentColor": "from-teal-500 to-cyan-700",
    "parts": [
      {
        "label": "Subject",
        "text": "She",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb (-s)",
        "text": "manages",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "the international sales department.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-1-3": {
    "patternName": "Present Simple Negatives & Questions",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to form a workplace question with Does.",
    "prompt": "Does he work remotely on Mondays?",
    "learningOpportunity": "Use does + subject + base verb for third person singular questions.",
    "difficulty": "easy",
    "accentColor": "from-cyan-500 to-blue-700",
    "parts": [
      {
        "label": "Auxiliary",
        "text": "Does",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "he",
        "color": "bg-cyan-300"
      },
      {
        "label": "Base verb",
        "text": "work remotely",
        "color": "bg-violet-300"
      },
      {
        "label": "Time",
        "text": "on Mondays?",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-1-4": {
    "patternName": "Jobs, Workplaces & Work Routines",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe workplace locations.",
    "prompt": "Engineers design software solutions in modern offices.",
    "learningOpportunity": "Connect professions, action verbs, and workplace environments.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-indigo-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Engineers",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "design",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "software solutions",
        "color": "bg-yellow-300"
      },
      {
        "label": "Workplace",
        "text": "in modern offices.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-1-5": {
    "patternName": "Daily Schedules & Time Management",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to organize your daily workday.",
    "prompt": "I answer client emails before lunch.",
    "learningOpportunity": "Use time prepositions (before/after) to structure daily routines.",
    "difficulty": "easy",
    "accentColor": "from-indigo-500 to-purple-700",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "answer",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "client emails",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time marker",
        "text": "before lunch.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-1-6": {
    "patternName": "Adverbs of Frequency (Always, Usually, Never)",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order placing the frequency adverb correctly.",
    "prompt": "We always double-check reports before submitting them.",
    "learningOpportunity": "Place frequency adverbs directly before the main action verb.",
    "difficulty": "medium",
    "accentColor": "from-purple-500 to-pink-700",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Frequency",
        "text": "always",
        "color": "bg-orange-300"
      },
      {
        "label": "Verb",
        "text": "double-check",
        "color": "bg-violet-300"
      },
      {
        "label": "Object clause",
        "text": "reports before submitting them.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-1-7": {
    "patternName": "Restaurant Orders & Customer Service",
    "variant": "question",
    "title": "Build the Polite Question / Arma la Pregunta Cortés",
    "instructions": "Put the blocks in order to ask for the bill at a restaurant.",
    "prompt": "Could we please have the bill?",
    "learningOpportunity": "Make polite group requests in dining and hospitality settings.",
    "difficulty": "easy",
    "accentColor": "from-rose-500 to-red-700",
    "parts": [
      {
        "label": "Modal",
        "text": "Could",
        "color": "bg-emerald-300"
      },
      {
        "label": "Subject",
        "text": "we",
        "color": "bg-cyan-300"
      },
      {
        "label": "Courtesy & verb",
        "text": "please have",
        "color": "bg-violet-300"
      },
      {
        "label": "Complement",
        "text": "the bill?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-1-8": {
    "patternName": "Groceries, Quantities & Some/Any",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order using any in a question.",
    "prompt": "Do we have any fresh coffee in the kitchen?",
    "learningOpportunity": "Use any in questions for non-count and plural nouns.",
    "difficulty": "easy",
    "accentColor": "from-amber-500 to-orange-700",
    "parts": [
      {
        "label": "Auxiliary",
        "text": "Do",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "we",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "have",
        "color": "bg-violet-300"
      },
      {
        "label": "Quantifier & item",
        "text": "any fresh coffee",
        "color": "bg-yellow-300"
      },
      {
        "label": "Location",
        "text": "in the kitchen?",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-1-9": {
    "patternName": "Hobbies & Preferences with Gerund (-ing)",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to express favorite hobbies.",
    "prompt": "She loves practicing yoga in the evening.",
    "learningOpportunity": "Pair verbs of passion (love/enjoy) with gerund activities.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-green-700",
    "parts": [
      {
        "label": "Subject",
        "text": "She",
        "color": "bg-cyan-300"
      },
      {
        "label": "Preference verb",
        "text": "loves",
        "color": "bg-violet-300"
      },
      {
        "label": "Gerund activity",
        "text": "practicing yoga",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time",
        "text": "in the evening.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-1-10": {
    "patternName": "Basic 1 Comprehensive Review",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to formulate a daily routine question.",
    "prompt": "What time do you usually finish your workday?",
    "learningOpportunity": "Combine question phrase + auxiliary + subject + frequency + base verb.",
    "difficulty": "medium",
    "accentColor": "from-blue-600 to-indigo-800",
    "parts": [
      {
        "label": "Question phrase",
        "text": "What time",
        "color": "bg-emerald-300"
      },
      {
        "label": "Auxiliary",
        "text": "do",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Frequency",
        "text": "usually",
        "color": "bg-orange-300"
      },
      {
        "label": "Verb & complement",
        "text": "finish your workday?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-b2-1": {
    "patternName": "Workweek Habits & Routines",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to express daily planning habits.",
    "prompt": "I usually check my schedule every morning.",
    "learningOpportunity": "Place frequency adverbs between subject and main verb.",
    "difficulty": "easy",
    "accentColor": "from-teal-600 to-emerald-700",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Frequency",
        "text": "usually",
        "color": "bg-orange-300"
      },
      {
        "label": "Verb",
        "text": "check",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "my schedule",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time marker",
        "text": "every morning.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-b2-2": {
    "patternName": "Present Progressive for Actions Now",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe ongoing business tasks.",
    "prompt": "We are preparing the quarterly budget right now.",
    "learningOpportunity": "Use be + verb-ing + time marker for ongoing activities.",
    "difficulty": "easy",
    "accentColor": "from-cyan-600 to-blue-700",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Auxiliary",
        "text": "are",
        "color": "bg-indigo-300"
      },
      {
        "label": "Action (-ing)",
        "text": "preparing",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "the quarterly budget",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time marker",
        "text": "right now.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-b2-3": {
    "patternName": "Invitations & Future Social Plans",
    "variant": "question",
    "title": "Build the Polite Question / Arma la Pregunta Cortés",
    "instructions": "Put the blocks in order to invite a colleague to lunch.",
    "prompt": "Would you like to join us for lunch today?",
    "learningOpportunity": "Form invitations with Would you like to + base verb.",
    "difficulty": "easy",
    "accentColor": "from-indigo-600 to-violet-700",
    "parts": [
      {
        "label": "Modal phrase",
        "text": "Would you like",
        "color": "bg-emerald-300"
      },
      {
        "label": "Infinitive verb",
        "text": "to join",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "us",
        "color": "bg-cyan-300"
      },
      {
        "label": "Purpose & time",
        "text": "for lunch today?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-b2-4": {
    "patternName": "Present Simple vs Present Continuous",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to contrast usual habits with temporary actions.",
    "prompt": "I usually work at the office, but today I am working from home.",
    "learningOpportunity": "Contrast routine with temporary state using but + Present Continuous.",
    "difficulty": "medium",
    "accentColor": "from-purple-600 to-pink-700",
    "parts": [
      {
        "label": "Habit clause",
        "text": "I usually work at the office,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Temporary action",
        "text": "today I am working from home.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-2-5": {
    "patternName": "State Verbs vs Action Verbs",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order using stative verbs in simple form.",
    "prompt": "I understand the proposal, and I agree with your team.",
    "learningOpportunity": "Remember state verbs (understand, agree) do not take continuous -ing.",
    "difficulty": "medium",
    "accentColor": "from-amber-600 to-rose-700",
    "parts": [
      {
        "label": "Clause 1",
        "text": "I understand the proposal,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Clause 2",
        "text": "I agree with your team.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-2-6": {
    "patternName": "Weather & Seasonal Descriptions",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe climate in a season.",
    "prompt": "In summer, the weather is warm and sunny.",
    "learningOpportunity": "Introduce time/season frame before main weather clause.",
    "difficulty": "easy",
    "accentColor": "from-sky-600 to-teal-700",
    "parts": [
      {
        "label": "Time frame",
        "text": "In summer,",
        "color": "bg-orange-300"
      },
      {
        "label": "Subject",
        "text": "the weather",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Weather adjectives",
        "text": "warm and sunny.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-2-7": {
    "patternName": "Imperatives for Business Instructions",
    "variant": "affirmative",
    "title": "Build the Instruction / Arma la Instrucción",
    "instructions": "Put the blocks in order to give a clear professional instruction.",
    "prompt": "Please save the file and send it by email.",
    "learningOpportunity": "Form compound imperatives using base verb + and + base verb.",
    "difficulty": "easy",
    "accentColor": "from-emerald-600 to-green-700",
    "parts": [
      {
        "label": "Courtesy",
        "text": "Please",
        "color": "bg-emerald-300"
      },
      {
        "label": "Action 1",
        "text": "save the file",
        "color": "bg-violet-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Action 2",
        "text": "send it by email.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-2-8": {
    "patternName": "Street Directions & Route Guidance",
    "variant": "affirmative",
    "title": "Build the Direction / Arma la Dirección",
    "instructions": "Put the blocks in order to give sequential street navigation.",
    "prompt": "Turn right at the traffic light and walk two blocks.",
    "learningOpportunity": "Use directional verbs (turn, walk) linked with sequential and.",
    "difficulty": "easy",
    "accentColor": "from-blue-600 to-indigo-700",
    "parts": [
      {
        "label": "Turn instruction",
        "text": "Turn right",
        "color": "bg-violet-300"
      },
      {
        "label": "Landmark",
        "text": "at the traffic light",
        "color": "bg-yellow-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Distance instruction",
        "text": "walk two blocks.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-2-9": {
    "patternName": "Professional Phone Conversations",
    "variant": "question",
    "title": "Build the Polite Question / Arma la Pregunta Cortés",
    "instructions": "Put the blocks in order to request a call transfer professionally.",
    "prompt": "Could I speak to Mr. Davis in accounting, please?",
    "learningOpportunity": "Structure formal phone inquiries with Could I speak to + name + please.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-purple-700",
    "parts": [
      {
        "label": "Modal starter",
        "text": "Could I speak to",
        "color": "bg-emerald-300"
      },
      {
        "label": "Person",
        "text": "Mr. Davis",
        "color": "bg-cyan-300"
      },
      {
        "label": "Department & courtesy",
        "text": "in accounting, please?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-2-10": {
    "patternName": "Present Simple vs Continuous Review",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about current project status.",
    "prompt": "Are you currently working on the client report?",
    "learningOpportunity": "Use continuous question structure for projects in progress.",
    "difficulty": "medium",
    "accentColor": "from-violet-600 to-rose-700",
    "parts": [
      {
        "label": "Auxiliary",
        "text": "Are",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Adverb",
        "text": "currently",
        "color": "bg-orange-300"
      },
      {
        "label": "Action & object",
        "text": "working on the client report?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-2-11": {
    "patternName": "Level 2 Grand Capstone Project",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to present future company plans.",
    "prompt": "Our team is launching a new product next quarter.",
    "learningOpportunity": "Use Present Continuous to express confirmed future arrangements.",
    "difficulty": "medium",
    "accentColor": "from-rose-600 to-amber-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Our team",
        "color": "bg-cyan-300"
      },
      {
        "label": "Future continuous verb",
        "text": "is launching",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "a new product",
        "color": "bg-yellow-300"
      },
      {
        "label": "Future time",
        "text": "next quarter.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-3-1": {
    "patternName": "Can / Can't for Workplace Abilities",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to contrast skills with can and cannot.",
    "prompt": "I can analyze financial reports, but I cannot code software.",
    "learningOpportunity": "Contrast professional abilities using can vs cannot with but.",
    "difficulty": "medium",
    "accentColor": "from-emerald-600 to-teal-800",
    "parts": [
      {
        "label": "Ability clause",
        "text": "I can analyze financial reports,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Limitation clause",
        "text": "I cannot code software.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-3-2": {
    "patternName": "Permissions & Polite Requests (Could you)",
    "variant": "question",
    "title": "Build the Polite Question / Arma la Pregunta Cortés",
    "instructions": "Put the blocks in order to request invoice documents politely.",
    "prompt": "Could you send me the updated invoice, please?",
    "learningOpportunity": "Form polite direct requests with Could you + base verb + indirect object.",
    "difficulty": "easy",
    "accentColor": "from-teal-600 to-cyan-800",
    "parts": [
      {
        "label": "Polite modal",
        "text": "Could you",
        "color": "bg-emerald-300"
      },
      {
        "label": "Verb & recipient",
        "text": "send me",
        "color": "bg-violet-300"
      },
      {
        "label": "Object & courtesy",
        "text": "the updated invoice, please?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-3-3": {
    "patternName": "Obligation Modals: Have to / Don't have to",
    "variant": "affirmative",
    "title": "Build Obligation / Arma Obligaciones",
    "instructions": "Put the blocks in order to express strict deadline obligations.",
    "prompt": "We have to submit the monthly tax report by Friday.",
    "learningOpportunity": "Use have to + base verb to express external business rules.",
    "difficulty": "medium",
    "accentColor": "from-amber-600 to-red-700",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Obligation form",
        "text": "have to submit",
        "color": "bg-indigo-300"
      },
      {
        "label": "Object",
        "text": "the monthly tax report",
        "color": "bg-yellow-300"
      },
      {
        "label": "Deadline",
        "text": "by Friday.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-3-4": {
    "patternName": "Workplace Dress & Identifying People",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to identify a colleague in the room.",
    "prompt": "The woman wearing the dark blazer is our regional director.",
    "learningOpportunity": "Use present participle clauses (wearing...) as noun modifiers.",
    "difficulty": "medium",
    "accentColor": "from-blue-600 to-indigo-800",
    "parts": [
      {
        "label": "Subject phrase",
        "text": "The woman wearing the dark blazer",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Role",
        "text": "our regional director.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-3-5": {
    "patternName": "Commuting & Transport Choices",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to explain your commute choice.",
    "prompt": "I take the express subway to avoid morning traffic.",
    "learningOpportunity": "Use infinitive of purpose (to avoid...) to explain transport decisions.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-purple-800",
    "parts": [
      {
        "label": "Subject & verb",
        "text": "I take",
        "color": "bg-cyan-300"
      },
      {
        "label": "Transport",
        "text": "the express subway",
        "color": "bg-yellow-300"
      },
      {
        "label": "Infinitive purpose",
        "text": "to avoid morning traffic.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-3-6": {
    "patternName": "Past To Be: Was / Were",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about past conference attendance.",
    "prompt": "Were you at the regional conference last Thursday?",
    "learningOpportunity": "Invert Were + you + location + past time expression.",
    "difficulty": "easy",
    "accentColor": "from-purple-600 to-pink-800",
    "parts": [
      {
        "label": "Past to be",
        "text": "Were",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Location",
        "text": "at the regional conference",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time",
        "text": "last Thursday?",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-3-7": {
    "patternName": "Hablando de tu infancia y recuerdos",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe childhood background.",
    "prompt": "I lived in a small coastal town when I was young.",
    "learningOpportunity": "Link past simple main clause with when I was young clause.",
    "difficulty": "medium",
    "accentColor": "from-rose-600 to-amber-800",
    "parts": [
      {
        "label": "Main clause",
        "text": "I lived in a small coastal town",
        "color": "bg-cyan-300"
      },
      {
        "label": "Time connector",
        "text": "when",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Subordinate clause",
        "text": "I was young.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-3-8": {
    "patternName": "Biografias de personas famosas",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe historical milestones.",
    "prompt": "Marie Curie was the first woman to win a Nobel Prize.",
    "learningOpportunity": "Structure biography achievements using was the first + infinitive.",
    "difficulty": "medium",
    "accentColor": "from-amber-600 to-yellow-800",
    "parts": [
      {
        "label": "Person",
        "text": "Marie Curie",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "was",
        "color": "bg-indigo-300"
      },
      {
        "label": "Achievement",
        "text": "the first woman to win a Nobel Prize.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-3-9": {
    "patternName": "Life Milestones & Past Timelines",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to state a past graduation milestone.",
    "prompt": "She graduated from university five years ago.",
    "learningOpportunity": "Position ago at the end of past time milestone phrases.",
    "difficulty": "easy",
    "accentColor": "from-emerald-600 to-cyan-800",
    "parts": [
      {
        "label": "Subject",
        "text": "She",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past verb",
        "text": "graduated from",
        "color": "bg-violet-300"
      },
      {
        "label": "Institution",
        "text": "university",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time with ago",
        "text": "five years ago.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-3-10": {
    "patternName": "Repaso General de Basic 3",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about past work travel obligations.",
    "prompt": "Did you have to travel for work last month?",
    "learningOpportunity": "Combine Did + subject + have to + base verb + time expression.",
    "difficulty": "medium",
    "accentColor": "from-blue-600 to-teal-800",
    "parts": [
      {
        "label": "Past auxiliary",
        "text": "Did",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past obligation",
        "text": "have to travel",
        "color": "bg-violet-300"
      },
      {
        "label": "Purpose & time",
        "text": "for work last month?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-4-1": {
    "patternName": "Past Simple - Verbs Regulares",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe a completed project launch.",
    "prompt": "We launched the marketing campaign last month.",
    "learningOpportunity": "Form past simple with regular verb + -ed + past time marker.",
    "difficulty": "easy",
    "accentColor": "from-amber-500 to-rose-600",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past verb (-ed)",
        "text": "launched",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "the marketing campaign",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time marker",
        "text": "last month.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-4-2": {
    "patternName": "Past Simple - Verbs Irregulares",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order using irregular past verb forms.",
    "prompt": "The director wrote the strategy document yesterday.",
    "learningOpportunity": "Use irregular past verb wrote (write -> wrote) accurately.",
    "difficulty": "easy",
    "accentColor": "from-rose-500 to-red-700",
    "parts": [
      {
        "label": "Subject",
        "text": "The director",
        "color": "bg-cyan-300"
      },
      {
        "label": "Irregular past verb",
        "text": "wrote",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "the strategy document",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time",
        "text": "yesterday.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-4-3": {
    "patternName": "Formando Questions and negaciones en Past",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about contract reception.",
    "prompt": "Did you receive the contract from the legal team?",
    "learningOpportunity": "Keep the main verb in base form after auxiliary Did.",
    "difficulty": "easy",
    "accentColor": "from-red-500 to-indigo-600",
    "parts": [
      {
        "label": "Auxiliary",
        "text": "Did",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Base verb",
        "text": "receive",
        "color": "bg-violet-300"
      },
      {
        "label": "Object clause",
        "text": "the contract from the legal team?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-4-4": {
    "patternName": "Vocabulario of Travel and vacaciones",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to talk about flight reservations.",
    "prompt": "We booked our flight tickets two weeks in advance.",
    "learningOpportunity": "Use in advance with time spans for travel reservations.",
    "difficulty": "easy",
    "accentColor": "from-sky-500 to-blue-700",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past verb",
        "text": "booked",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "our flight tickets",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time phrase",
        "text": "two weeks in advance.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-4-5": {
    "patternName": "Contando anécdotas usando conectores",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to sequence workplace project steps.",
    "prompt": "First we gathered the data, and then we analyzed the results.",
    "learningOpportunity": "Use chronological sequence connectors (first, then) to structure reports.",
    "difficulty": "medium",
    "accentColor": "from-indigo-500 to-violet-700",
    "parts": [
      {
        "label": "Step 1",
        "text": "First we gathered the data,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and then",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Step 2",
        "text": "we analyzed the results.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-4-6": {
    "patternName": "Expresando planes futuros with Going to",
    "variant": "affirmative",
    "title": "Build with Going To / Arma con Going To",
    "instructions": "Put the blocks in order to announce an upcoming company expansion.",
    "prompt": "Our company is going to open a new branch next year.",
    "learningOpportunity": "Form future intentions using be + going to + base verb.",
    "difficulty": "easy",
    "accentColor": "from-violet-500 to-purple-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Our company",
        "color": "bg-cyan-300"
      },
      {
        "label": "Future form",
        "text": "is going to open",
        "color": "bg-indigo-300"
      },
      {
        "label": "Object",
        "text": "a new branch",
        "color": "bg-yellow-300"
      },
      {
        "label": "Future time",
        "text": "next year.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-4-7": {
    "patternName": "Predicciones and decisiones rápidas with Will",
    "variant": "affirmative",
    "title": "Build with Will / Arma con Will",
    "instructions": "Put the blocks in order to make a prompt customer commitment.",
    "prompt": "I will send you the confirmation email right away.",
    "learningOpportunity": "Use will + base verb for immediate business commitments.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-cyan-600",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Modal will",
        "text": "will send",
        "color": "bg-indigo-300"
      },
      {
        "label": "Recipient & object",
        "text": "you the confirmation email",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time phrase",
        "text": "right away.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-basic-4-8": {
    "patternName": "Diferencias entre Will and Going to",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to contrast a planned event with a spontaneous role.",
    "prompt": "We are going to meet the client, and I will present the budget.",
    "learningOpportunity": "Use going to for pre-planned events and will for spontaneous roles.",
    "difficulty": "medium",
    "accentColor": "from-teal-500 to-emerald-700",
    "parts": [
      {
        "label": "Planned action",
        "text": "We are going to meet the client,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Spontaneous role",
        "text": "I will present the budget.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-4-9": {
    "patternName": "Dando opiniones and mostrando acuerdo/desacuerdo",
    "variant": "affirmative",
    "title": "Build the Opinion / Arma la Opinión",
    "instructions": "Put the blocks in order to voice a professional recommendation.",
    "prompt": "In my opinion, we should invest in digital automation.",
    "learningOpportunity": "Introduce strategic advice with In my opinion + we should + verb.",
    "difficulty": "medium",
    "accentColor": "from-emerald-500 to-lime-700",
    "parts": [
      {
        "label": "Opinion starter",
        "text": "In my opinion,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Subject & modal",
        "text": "we should invest",
        "color": "bg-indigo-300"
      },
      {
        "label": "Strategic area",
        "text": "in digital automation.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-basic-4-10": {
    "patternName": "Preparación para Level Intermedio",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about upcoming professional goals.",
    "prompt": "What are the main goals you want to achieve next year?",
    "learningOpportunity": "Form complex relative clause questions for career planning.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-blue-800",
    "parts": [
      {
        "label": "Question phrase",
        "text": "What are the main goals",
        "color": "bg-emerald-300"
      },
      {
        "label": "Subject & verb",
        "text": "you want to achieve",
        "color": "bg-cyan-300"
      },
      {
        "label": "Time",
        "text": "next year?",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-inter-1": {
    "patternName": "Review of tiempos verbales básicos",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to link past continuous with past simple interruption.",
    "prompt": "While we were reviewing the budget, the client approved the contract.",
    "learningOpportunity": "Combine While + past continuous with a past simple interrupting clause.",
    "difficulty": "hard",
    "accentColor": "from-indigo-500 to-blue-700",
    "parts": [
      {
        "label": "Time clause",
        "text": "While we were reviewing the budget,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Interrupted event",
        "text": "the client approved the contract.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-2": {
    "patternName": "Primer Condicional (situaciones reales)",
    "variant": "affirmative",
    "title": "Build the Conditional / Arma el Condicional",
    "instructions": "Put the blocks in order to state a conditional bonus incentive.",
    "prompt": "If we meet our quarterly sales target, the company will offer a bonus.",
    "learningOpportunity": "Structure First Conditional: If + Present Simple, will + base verb.",
    "difficulty": "medium",
    "accentColor": "from-emerald-500 to-teal-700",
    "parts": [
      {
        "label": "Condition clause",
        "text": "If we meet our quarterly sales target,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Result clause",
        "text": "the company will offer a bonus.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-3": {
    "patternName": "Verbos modales de consejo (Should / Ought to)",
    "variant": "affirmative",
    "title": "Build Advice / Arma Consejos",
    "instructions": "Put the blocks in order to offer technical system advice.",
    "prompt": "You should optimize the server settings before going live.",
    "learningOpportunity": "Use should + base verb to give constructive technical recommendations.",
    "difficulty": "medium",
    "accentColor": "from-lime-500 to-teal-700",
    "parts": [
      {
        "label": "Subject & modal",
        "text": "You should optimize",
        "color": "bg-cyan-300"
      },
      {
        "label": "Object",
        "text": "the server settings",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time condition",
        "text": "before going live.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-inter-4": {
    "patternName": "Verbos modales de posibilidad (May / Might / Could)",
    "variant": "affirmative",
    "title": "Build Possibility / Arma Posibilidades",
    "instructions": "Put the blocks in order to express supply chain uncertainty.",
    "prompt": "The delivery might be delayed due to international customs.",
    "learningOpportunity": "Express professional probability using modal might + be + passive.",
    "difficulty": "medium",
    "accentColor": "from-sky-500 to-violet-700",
    "parts": [
      {
        "label": "Subject",
        "text": "The delivery",
        "color": "bg-cyan-300"
      },
      {
        "label": "Possibility modal",
        "text": "might be delayed",
        "color": "bg-indigo-300"
      },
      {
        "label": "Reason phrase",
        "text": "due to international customs.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-5": {
    "patternName": "Comparativos and superlativos",
    "variant": "affirmative",
    "title": "Build the Comparative / Arma el Comparativo",
    "instructions": "Put the blocks in order to compare cloud computing with legacy systems.",
    "prompt": "Cloud computing is much more efficient than traditional servers.",
    "learningOpportunity": "Use modifier much + more + adjective + than for emphatic comparison.",
    "difficulty": "medium",
    "accentColor": "from-pink-500 to-orange-600",
    "parts": [
      {
        "label": "Subject",
        "text": "Cloud computing",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Emphatic comparative",
        "text": "much more efficient than",
        "color": "bg-violet-300"
      },
      {
        "label": "Benchmark",
        "text": "traditional servers.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-6": {
    "patternName": "Describiendo exceso y suficiencia (too / enough)",
    "variant": "negative",
    "title": "Build the Negative / Arma la Negativa",
    "instructions": "Put the blocks in order to identify capacity shortages.",
    "prompt": "We do not have enough server bandwidth for this traffic.",
    "learningOpportunity": "Place enough directly before non-count nouns (enough bandwidth).",
    "difficulty": "medium",
    "accentColor": "from-red-500 to-amber-600",
    "parts": [
      {
        "label": "Subject & negative",
        "text": "We do not have",
        "color": "bg-cyan-300"
      },
      {
        "label": "Sufficiency phrase",
        "text": "enough server bandwidth",
        "color": "bg-yellow-300"
      },
      {
        "label": "Purpose",
        "text": "for this traffic.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-inter-7": {
    "patternName": "Vocabulario of trabajo and oficina",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe HR performance reviews.",
    "prompt": "The human resources manager scheduled the performance appraisals.",
    "learningOpportunity": "Connect executive role nouns with corporate operational verbs.",
    "difficulty": "medium",
    "accentColor": "from-blue-600 to-indigo-700",
    "parts": [
      {
        "label": "Subject",
        "text": "The human resources manager",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past verb",
        "text": "scheduled",
        "color": "bg-violet-300"
      },
      {
        "label": "Corporate event",
        "text": "the performance appraisals.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-8": {
    "patternName": "Redactando correos electrónicos formales",
    "variant": "affirmative",
    "title": "Build Formal Opener / Arma Apertura Formal",
    "instructions": "Put the blocks in order to formulate a formal inquiry opening sentence.",
    "prompt": "I am writing to inquire about the terms of our service agreement.",
    "learningOpportunity": "Use I am writing to inquire about for polished formal correspondence.",
    "difficulty": "hard",
    "accentColor": "from-cyan-600 to-violet-700",
    "parts": [
      {
        "label": "Formal opening frame",
        "text": "I am writing to inquire about",
        "color": "bg-emerald-300"
      },
      {
        "label": "Subject matter",
        "text": "the terms of our service agreement.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-9": {
    "patternName": "Present Perfect para experiencias of vida",
    "variant": "affirmative",
    "title": "Build Present Perfect / Arma el Present Perfect",
    "instructions": "Put the blocks in order to state professional career duration.",
    "prompt": "I have worked with international teams for over five years.",
    "learningOpportunity": "Use have + past participle + for to denote career duration until now.",
    "difficulty": "medium",
    "accentColor": "from-violet-500 to-indigo-700",
    "parts": [
      {
        "label": "Subject & auxiliary",
        "text": "I have worked with",
        "color": "bg-cyan-300"
      },
      {
        "label": "Team type",
        "text": "international teams",
        "color": "bg-yellow-300"
      },
      {
        "label": "Duration phrase",
        "text": "for over five years.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-inter-10": {
    "patternName": "Diferencias entre Past Simple and Present Perfect",
    "variant": "affirmative",
    "title": "Build the Contrast / Arma el Contraste",
    "instructions": "Put the blocks in order to contrast cumulative achievements with a past event.",
    "prompt": "She has already closed three deals, but yesterday she lost one.",
    "learningOpportunity": "Contrast finished past events with unfinished cumulative experiences.",
    "difficulty": "hard",
    "accentColor": "from-purple-500 to-rose-700",
    "parts": [
      {
        "label": "Present perfect clause",
        "text": "She has already closed three deals,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Past simple clause",
        "text": "yesterday she lost one.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-11": {
    "patternName": "Gerundios e infinitivos después of Verbs",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order using infinitive after decide.",
    "prompt": "We decided to postpone the launch to avoid risky errors.",
    "learningOpportunity": "Pair decide with infinitive to postpone and purpose to avoid.",
    "difficulty": "hard",
    "accentColor": "from-teal-500 to-emerald-700",
    "parts": [
      {
        "label": "Subject & main verb",
        "text": "We decided",
        "color": "bg-cyan-300"
      },
      {
        "label": "Infinitive object",
        "text": "to postpone the launch",
        "color": "bg-violet-300"
      },
      {
        "label": "Infinitive purpose",
        "text": "to avoid risky errors.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-inter-12": {
    "patternName": "Introduction a los Phrasal Verbs más usados",
    "variant": "affirmative",
    "title": "Build with Phrasal Verbs / Arma con Phrasal Verbs",
    "instructions": "Put the blocks in order using look up before signing contracts.",
    "prompt": "Please look up the legal regulations before signing the agreement.",
    "learningOpportunity": "Use phrasal verb look up with gerund clause after preposition before.",
    "difficulty": "hard",
    "accentColor": "from-emerald-500 to-blue-700",
    "parts": [
      {
        "label": "Courtesy & phrasal verb",
        "text": "Please look up",
        "color": "bg-emerald-300"
      },
      {
        "label": "Object",
        "text": "the legal regulations",
        "color": "bg-yellow-300"
      },
      {
        "label": "Prepositional gerund",
        "text": "before signing the agreement.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-advanced-1": {
    "patternName": "Pronunciacion: connected speech y entonacion",
    "variant": "question",
    "title": "Build the Polite Question / Arma la Pregunta Cortés",
    "instructions": "Put the blocks in order for a seamless executive query.",
    "prompt": "Could you let me know when the results are available?",
    "learningOpportunity": "Use embedded question clauses (when the results are available).",
    "difficulty": "hard",
    "accentColor": "from-blue-600 to-indigo-800",
    "parts": [
      {
        "label": "Polite frame",
        "text": "Could you let me know",
        "color": "bg-emerald-300"
      },
      {
        "label": "Embedded clause",
        "text": "when the results are available?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-2": {
    "patternName": "Segundo condicional (situaciones hipoteticas)",
    "variant": "affirmative",
    "title": "Build Second Conditional / Arma el Segundo Condicional",
    "instructions": "Put the blocks in order to propose hypothetical market expansion.",
    "prompt": "If we had greater capital, we would expand into Asian markets.",
    "learningOpportunity": "Form hypothetical conditionals with If + past simple, would + base verb.",
    "difficulty": "hard",
    "accentColor": "from-indigo-600 to-purple-800",
    "parts": [
      {
        "label": "Hypothetical condition",
        "text": "If we had greater capital,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Hypothetical result",
        "text": "we would expand into Asian markets.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-3": {
    "patternName": "Tercer condicional (arrepentimientos del pasado)",
    "variant": "affirmative",
    "title": "Build Third Conditional / Arma el Tercer Condicional",
    "instructions": "Put the blocks in order to analyze a past supply chain contingency.",
    "prompt": "If we had foreseen the disruption, we would have diversified our vendors.",
    "learningOpportunity": "Use If + past perfect, would have + past participle for past regrets.",
    "difficulty": "challenge",
    "accentColor": "from-purple-600 to-rose-800",
    "parts": [
      {
        "label": "Past unreal condition",
        "text": "If we had foreseen the disruption,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Past unreal outcome",
        "text": "we would have diversified our vendors.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-4": {
    "patternName": "Reported Speech (estilo indirecto)",
    "variant": "affirmative",
    "title": "Build Reported Speech / Arma el Estilo Indirecto",
    "instructions": "Put the blocks in order to report corporate commitments.",
    "prompt": "The CEO stated that the company would transition to renewable energy.",
    "learningOpportunity": "Shift present future will to past modal would in reported statements.",
    "difficulty": "hard",
    "accentColor": "from-rose-600 to-amber-800",
    "parts": [
      {
        "label": "Reporting subject & verb",
        "text": "The CEO stated",
        "color": "bg-cyan-300"
      },
      {
        "label": "Reported clause",
        "text": "that the company would transition to renewable energy.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-5": {
    "patternName": "Relative Clauses (who, which, that, where)",
    "variant": "affirmative",
    "title": "Build Relative Clauses / Arma Cláusulas Relativas",
    "instructions": "Put the blocks in order to integrate identifying relative clauses.",
    "prompt": "The consultant who audited our security protocols identified critical vulnerabilities.",
    "learningOpportunity": "Embed who + verb clause directly inside the complex subject noun phrase.",
    "difficulty": "hard",
    "accentColor": "from-amber-600 to-emerald-800",
    "parts": [
      {
        "label": "Modified subject",
        "text": "The consultant who audited our security protocols",
        "color": "bg-cyan-300"
      },
      {
        "label": "Predicate & object",
        "text": "identified critical vulnerabilities.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-6": {
    "patternName": "Vocabulario avanzado de negocios y negociacion",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe bilateral negotiation agreements.",
    "prompt": "Both parties agreed on mutual concessions regarding payment terms.",
    "learningOpportunity": "Deploy high-register negotiation vocabulary in complex prepositions.",
    "difficulty": "hard",
    "accentColor": "from-emerald-600 to-teal-800",
    "parts": [
      {
        "label": "Negotiating parties",
        "text": "Both parties agreed on",
        "color": "bg-cyan-300"
      },
      {
        "label": "Concession object",
        "text": "mutual concessions",
        "color": "bg-yellow-300"
      },
      {
        "label": "Prepositional scope",
        "text": "regarding payment terms.",
        "color": "bg-orange-300"
      }
    ]
  },
  "adults:c-adults-advanced-7": {
    "patternName": "Resolviendo problemas y quejas de clientes",
    "variant": "affirmative",
    "title": "Build Corporate Response / Arma Respuesta Corporativa",
    "instructions": "Put the blocks in order to deliver an executive apology and resolution.",
    "prompt": "We apologize for the inconvenience and will issue an immediate refund.",
    "learningOpportunity": "Pair formal apologies with immediate remediation commitments.",
    "difficulty": "hard",
    "accentColor": "from-teal-600 to-cyan-800",
    "parts": [
      {
        "label": "Formal apology",
        "text": "We apologize for the inconvenience",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Remediation",
        "text": "will issue an immediate refund.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-8": {
    "patternName": "Future Continuous y Future Perfect",
    "variant": "affirmative",
    "title": "Build Future Perfect / Arma el Futuro Perfecto",
    "instructions": "Put the blocks in order to express milestones completed before future deadlines.",
    "prompt": "By next December, our engineering team will have completed the migration.",
    "learningOpportunity": "Use By + future time + will have + past participle for deadlines.",
    "difficulty": "challenge",
    "accentColor": "from-violet-600 to-slate-800",
    "parts": [
      {
        "label": "Deadline frame",
        "text": "By next December,",
        "color": "bg-orange-300"
      },
      {
        "label": "Subject",
        "text": "our engineering team",
        "color": "bg-cyan-300"
      },
      {
        "label": "Future perfect predicate",
        "text": "will have completed the migration.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-9": {
    "patternName": "Phrasal verbs avanzados en contexto",
    "variant": "affirmative",
    "title": "Build with Phrasal Verbs / Arma con Phrasal Verbs",
    "instructions": "Put the blocks in order to describe scaling enterprise architecture.",
    "prompt": "We need to figure out how to scale up our infrastructure seamlessly.",
    "learningOpportunity": "Chain multi-part phrasal verbs (figure out, scale up) with infinitive clauses.",
    "difficulty": "hard",
    "accentColor": "from-blue-600 to-violet-800",
    "parts": [
      {
        "label": "Main need phrase",
        "text": "We need to figure out",
        "color": "bg-cyan-300"
      },
      {
        "label": "Infinitive phrase",
        "text": "how to scale up our infrastructure seamlessly.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-advanced-10": {
    "patternName": "Repaso avanzado",
    "variant": "affirmative",
    "title": "Build Participial Clause / Arma Cláusula Participial",
    "instructions": "Put the blocks in order using perfect participle clauses.",
    "prompt": "Having analyzed the economic forecast, we adjusted our annual projections.",
    "learningOpportunity": "Front a perfect participle clause (Having analyzed...) to show prior causation.",
    "difficulty": "challenge",
    "accentColor": "from-slate-600 to-indigo-900",
    "parts": [
      {
        "label": "Participle cause clause",
        "text": "Having analyzed the economic forecast,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Executive action",
        "text": "we adjusted our annual projections.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-1": {
    "patternName": "Idioms y expresiones idiomaticas",
    "variant": "affirmative",
    "title": "Build Executive Idioms / Arma Modismos Ejecutivos",
    "instructions": "Put the blocks in order to align leadership teams idiomatically.",
    "prompt": "Let us touch base next week to ensure we are on the same page.",
    "learningOpportunity": "Deploy professional business idioms (touch base, on the same page).",
    "difficulty": "hard",
    "accentColor": "from-indigo-600 to-slate-800",
    "parts": [
      {
        "label": "Idiomatic invitation",
        "text": "Let us touch base next week",
        "color": "bg-cyan-300"
      },
      {
        "label": "Infinitive purpose",
        "text": "to ensure we are on the same page.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-2": {
    "patternName": "Inversiones para enfasis formal",
    "variant": "affirmative",
    "title": "Build Formal Inversion / Arma Inversión Formal",
    "instructions": "Put the blocks in order to construct emphatic negative adverb inversion.",
    "prompt": "Rarely have we witnessed such exponential market volatility in one quarter.",
    "learningOpportunity": "Invert negative adverb + auxiliary have + subject + past participle.",
    "difficulty": "challenge",
    "accentColor": "from-slate-700 to-indigo-950",
    "parts": [
      {
        "label": "Negative adverb & auxiliary",
        "text": "Rarely have we",
        "color": "bg-emerald-300"
      },
      {
        "label": "Past participle",
        "text": "witnessed",
        "color": "bg-violet-300"
      },
      {
        "label": "Emphatic object & time",
        "text": "such exponential market volatility in one quarter.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-3": {
    "patternName": "Cleft sentences para resaltar informacion",
    "variant": "affirmative",
    "title": "Build Cleft Sentence / Arma Oración Hendida",
    "instructions": "Put the blocks in order to construct a Wh-cleft emphasis structure.",
    "prompt": "What our organization truly values is transparency and relentless innovation.",
    "learningOpportunity": "Use What + clause + is + focus to emphasize core strategic values.",
    "difficulty": "challenge",
    "accentColor": "from-violet-700 to-purple-950",
    "parts": [
      {
        "label": "Wh-cleft clause",
        "text": "What our organization truly values",
        "color": "bg-cyan-300"
      },
      {
        "label": "Copula",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Emphasized values",
        "text": "transparency and relentless innovation.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-4": {
    "patternName": "Lenguaje diplomatico y atenuadores (hedging)",
    "variant": "affirmative",
    "title": "Build Diplomatic Hedging / Arma Atenuación Diplomática",
    "instructions": "Put the blocks in order to deliver softened audit feedback.",
    "prompt": "It appears that there might be a slight discrepancy in the financial statements.",
    "learningOpportunity": "Softens critique using hedging verbs (appears that, might be, slight).",
    "difficulty": "challenge",
    "accentColor": "from-purple-700 to-slate-900",
    "parts": [
      {
        "label": "Hedging frame",
        "text": "It appears that",
        "color": "bg-emerald-300"
      },
      {
        "label": "Softened modal clause",
        "text": "there might be a slight discrepancy",
        "color": "bg-cyan-300"
      },
      {
        "label": "Location",
        "text": "in the financial statements.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-5": {
    "patternName": "Presentaciones de alto impacto",
    "variant": "affirmative",
    "title": "Build Keynote Opener / Arma Apertura de Keynote",
    "instructions": "Put the blocks in order to deliver a compelling keynote thesis statement.",
    "prompt": "Today, I would like to outline three transformative pillars of our industry.",
    "learningOpportunity": "Structure keynote addresses with introductory framing + threefold thesis.",
    "difficulty": "hard",
    "accentColor": "from-blue-700 to-indigo-950",
    "parts": [
      {
        "label": "Keynote frame",
        "text": "Today, I would like to outline",
        "color": "bg-emerald-300"
      },
      {
        "label": "Core thesis",
        "text": "three transformative pillars of our industry.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-6": {
    "patternName": "Discurso persuasivo y argumentacion",
    "variant": "affirmative",
    "title": "Build Persuasive Argument / Arma Argumento Persuasivo",
    "instructions": "Put the blocks in order to establish empirical superiority.",
    "prompt": "The empirical evidence clearly demonstrates a decisive competitive advantage.",
    "learningOpportunity": "Deploy persuasive academic collocations (empirical evidence, decisive advantage).",
    "difficulty": "hard",
    "accentColor": "from-emerald-700 to-slate-900",
    "parts": [
      {
        "label": "Subject",
        "text": "The empirical evidence",
        "color": "bg-cyan-300"
      },
      {
        "label": "Adverb & verb",
        "text": "clearly demonstrates",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "a decisive competitive advantage.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-7": {
    "patternName": "Debates sobre temas complejos",
    "variant": "affirmative",
    "title": "Build Nuanced Argument / Arma Argumento Matizado",
    "instructions": "Put the blocks in order to balance market deregulation with safeguards.",
    "prompt": "While market deregulation stimulates rapid growth, robust consumer safeguards remain indispensable.",
    "learningOpportunity": "Balance opposing economic arguments using concessive While clauses.",
    "difficulty": "challenge",
    "accentColor": "from-amber-700 to-slate-900",
    "parts": [
      {
        "label": "Concessive clause",
        "text": "While market deregulation stimulates rapid growth,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Counterbalance clause",
        "text": "robust consumer safeguards remain indispensable.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-8": {
    "patternName": "Storytelling en entornos profesionales",
    "variant": "affirmative",
    "title": "Build Narrative Arc / Arma Arco Narrativo",
    "instructions": "Put the blocks in order to articulate leadership lessons from failure.",
    "prompt": "Overcoming our initial operational failure taught us how to build resilient organizations.",
    "learningOpportunity": "Use gerund phrase subjects (Overcoming...) to articulate organizational wisdom.",
    "difficulty": "challenge",
    "accentColor": "from-rose-700 to-indigo-950",
    "parts": [
      {
        "label": "Gerund subject phrase",
        "text": "Overcoming our initial operational failure",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & object",
        "text": "taught us",
        "color": "bg-violet-300"
      },
      {
        "label": "Infinitive lesson",
        "text": "how to build resilient organizations.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-9": {
    "patternName": "Analizando articulos de opinion y noticias",
    "variant": "affirmative",
    "title": "Build Critical Critique / Arma Crítica Analítica",
    "instructions": "Put the blocks in order to expose macroeconomic oversights in media.",
    "prompt": "The editorial fails to account for macroeconomic headwinds affecting emerging markets.",
    "learningOpportunity": "Construct rigorous academic critique using fails to account for + noun.",
    "difficulty": "challenge",
    "accentColor": "from-slate-700 to-cyan-950",
    "parts": [
      {
        "label": "Subject & critical verb",
        "text": "The editorial fails to account for",
        "color": "bg-cyan-300"
      },
      {
        "label": "Analytical object",
        "text": "macroeconomic headwinds affecting emerging markets.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "adults:c-adults-masters-10": {
    "patternName": "Proyecto Final Masters",
    "variant": "affirmative",
    "title": "Build Strategic Defense / Arma Defensa Estratégica",
    "instructions": "Put the blocks in order to present your multi-year organizational moat.",
    "prompt": "Our multi-year strategic roadmap establishes sustainable competitive moats across all regional verticals.",
    "learningOpportunity": "Synthesize C2 strategic vocabulary into an executive capstone defense.",
    "difficulty": "challenge",
    "accentColor": "from-indigo-800 to-slate-950",
    "parts": [
      {
        "label": "Subject",
        "text": "Our multi-year strategic roadmap",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "establishes",
        "color": "bg-violet-300"
      },
      {
        "label": "Strategic object & scope",
        "text": "sustainable competitive moats across all regional verticals.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-1": {
    "patternName": "Hello & Introductions",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask a new classmate their name.",
    "prompt": "What is your nickname at school?",
    "learningOpportunity": "Form personal introduction questions with What + is + your + noun.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-indigo-600",
    "parts": [
      {
        "label": "Question word",
        "text": "What",
        "color": "bg-emerald-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Possessive phrase",
        "text": "your nickname",
        "color": "bg-cyan-300"
      },
      {
        "label": "School location",
        "text": "at school?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-2": {
    "patternName": "Numbers, Ages & Birthdays",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about age and birth month.",
    "prompt": "How old are you, and when is your birthday?",
    "learningOpportunity": "Link age question with birthday inquiry using coordinate connector and.",
    "difficulty": "easy",
    "accentColor": "from-cyan-500 to-blue-600",
    "parts": [
      {
        "label": "Question phrase",
        "text": "How old are you,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Birthday question",
        "text": "when is your birthday?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-3": {
    "patternName": "My Body & Actions",
    "variant": "affirmative",
    "title": "Build the Action / Arma la Acción",
    "instructions": "Put the blocks in order to describe high-energy sports moves.",
    "prompt": "I can stretch my arms and kick the soccer ball.",
    "learningOpportunity": "Combine body parts with sports action verbs using modal can.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-teal-600",
    "parts": [
      {
        "label": "Subject & modal",
        "text": "I can stretch",
        "color": "bg-cyan-300"
      },
      {
        "label": "Body part",
        "text": "my arms",
        "color": "bg-yellow-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Action & sports object",
        "text": "kick the soccer ball.",
        "color": "bg-violet-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-4": {
    "patternName": "Favorite Gadgets & Tech",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your favorite gaming device.",
    "prompt": "My gaming console is connected to the high-speed wifi.",
    "learningOpportunity": "Use present passive/stative to be connected to + tech device.",
    "difficulty": "easy",
    "accentColor": "from-indigo-500 to-purple-600",
    "parts": [
      {
        "label": "Tech subject",
        "text": "My gaming console",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be & participle",
        "text": "is connected to",
        "color": "bg-indigo-300"
      },
      {
        "label": "Tech complement",
        "text": "the high-speed wifi.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-5": {
    "patternName": "Food Likes, Dislikes & Flavors",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to express favorite snack flavors.",
    "prompt": "I love spicy tacos, but I dislike bitter drinks.",
    "learningOpportunity": "Contrast taste preferences using love vs dislike with but.",
    "difficulty": "easy",
    "accentColor": "from-pink-500 to-rose-600",
    "parts": [
      {
        "label": "Preference clause",
        "text": "I love spicy tacos,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Dislike clause",
        "text": "I dislike bitter drinks.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-6": {
    "patternName": "My Family & Friends Circle",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your best friend at school.",
    "prompt": "My best friend is a talented graphic artist.",
    "learningOpportunity": "Connect friendship nouns with creative talents and profession adjectives.",
    "difficulty": "easy",
    "accentColor": "from-amber-500 to-orange-600",
    "parts": [
      {
        "label": "Subject",
        "text": "My best friend",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Complement",
        "text": "a talented graphic artist.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-7": {
    "patternName": "Classroom Objects & School Life",
    "variant": "affirmative",
    "title": "Build with There Is / There Are",
    "instructions": "Put the blocks in order to describe items in your backpack.",
    "prompt": "There are two blue notebooks in my backpack.",
    "learningOpportunity": "Use There are + number + adjective + plural noun + location.",
    "difficulty": "easy",
    "accentColor": "from-teal-500 to-cyan-600",
    "parts": [
      {
        "label": "Starter",
        "text": "There are",
        "color": "bg-emerald-300"
      },
      {
        "label": "Items",
        "text": "two blue notebooks",
        "color": "bg-cyan-300"
      },
      {
        "label": "Location",
        "text": "in my backpack.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-8": {
    "patternName": "Daily Routine & School Schedule",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your morning schedule.",
    "prompt": "I wake up at seven and get ready for school.",
    "learningOpportunity": "Sequence morning actions with wake up at + time + and + get ready.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-indigo-600",
    "parts": [
      {
        "label": "Routine 1",
        "text": "I wake up at seven",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Routine 2",
        "text": "get ready for school.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-9": {
    "patternName": "Hobbies, Music & Sports",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to talk about practicing music after class.",
    "prompt": "I practice playing the electric bass after school.",
    "learningOpportunity": "Use practice + gerund (-ing) + musical instrument with the.",
    "difficulty": "easy",
    "accentColor": "from-purple-500 to-pink-600",
    "parts": [
      {
        "label": "Subject & verb",
        "text": "I practice",
        "color": "bg-cyan-300"
      },
      {
        "label": "Music activity",
        "text": "playing the electric bass",
        "color": "bg-violet-300"
      },
      {
        "label": "Time phrase",
        "text": "after school.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-10": {
    "patternName": "Clothes & Streetwear Style",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe streetwear outfits.",
    "prompt": "He is wearing an oversized black hoodie today.",
    "learningOpportunity": "Use be + wearing + adjective + noun to describe trendy streetwear.",
    "difficulty": "easy",
    "accentColor": "from-slate-600 to-indigo-700",
    "parts": [
      {
        "label": "Subject",
        "text": "He",
        "color": "bg-cyan-300"
      },
      {
        "label": "Continuous verb",
        "text": "is wearing",
        "color": "bg-indigo-300"
      },
      {
        "label": "Outfit",
        "text": "an oversized black hoodie",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time",
        "text": "today.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-11": {
    "patternName": "House & My Bedroom Space",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your desk setup.",
    "prompt": "My gaming monitor sits on the study desk.",
    "learningOpportunity": "Use spatial prepositions (on, next to) to organize your room.",
    "difficulty": "easy",
    "accentColor": "from-violet-500 to-indigo-700",
    "parts": [
      {
        "label": "Subject",
        "text": "My gaming monitor",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "sits",
        "color": "bg-violet-300"
      },
      {
        "label": "Location",
        "text": "on the study desk.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-12": {
    "patternName": "Spelling, Usernames & Social Profiles",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask how to spell an online gamer tag.",
    "prompt": "How do you spell your gaming tag?",
    "learningOpportunity": "Ask for spelling with How do you spell + your + noun.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-teal-600",
    "parts": [
      {
        "label": "Question word",
        "text": "How",
        "color": "bg-emerald-300"
      },
      {
        "label": "Auxiliary",
        "text": "do",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "spell",
        "color": "bg-violet-300"
      },
      {
        "label": "Complement",
        "text": "your gaming tag?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-13": {
    "patternName": "My City & Cool Hangout Spots",
    "variant": "affirmative",
    "title": "Build with There Is / There Are",
    "instructions": "Put the blocks in order to recommend a popular skate park.",
    "prompt": "There is a popular skate park downtown.",
    "learningOpportunity": "Express urban places of interest using There is + a + noun + downtown.",
    "difficulty": "easy",
    "accentColor": "from-cyan-500 to-teal-600",
    "parts": [
      {
        "label": "Starter",
        "text": "There is",
        "color": "bg-emerald-300"
      },
      {
        "label": "Place",
        "text": "a popular skate park",
        "color": "bg-cyan-300"
      },
      {
        "label": "City location",
        "text": "downtown.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-14": {
    "patternName": "Feelings, Moods & Emojis",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to explain why you feel excited.",
    "prompt": "I feel super excited because the weekend started.",
    "learningOpportunity": "Link emotional state verbs with causal reason connector because.",
    "difficulty": "easy",
    "accentColor": "from-rose-500 to-pink-600",
    "parts": [
      {
        "label": "Emotion clause",
        "text": "I feel super excited",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "because",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Reason clause",
        "text": "the weekend started.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-15": {
    "patternName": "Basic Zero Integrated Teen Review",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask a friend about weekend gaming plans.",
    "prompt": "What video games do you play with your friends?",
    "learningOpportunity": "Form wh- questions with plural nouns: What + noun + do you + verb.",
    "difficulty": "easy",
    "accentColor": "from-indigo-500 to-blue-600",
    "parts": [
      {
        "label": "Question phrase",
        "text": "What video games",
        "color": "bg-emerald-300"
      },
      {
        "label": "Auxiliary",
        "text": "do",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & complement",
        "text": "play with your friends?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-16": {
    "patternName": "Final Capstone Teen Profile",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to introduce your teen profile and passions.",
    "prompt": "My name is Alex, I am fifteen, and I create digital art.",
    "learningOpportunity": "Coordinate three identity clauses (name, age, hobby) into a fluid intro.",
    "difficulty": "medium",
    "accentColor": "from-purple-600 to-indigo-700",
    "parts": [
      {
        "label": "Name clause",
        "text": "My name is Alex,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Age clause",
        "text": "I am fifteen,",
        "color": "bg-yellow-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Passion clause",
        "text": "I create digital art.",
        "color": "bg-emerald-300"
      }
    ]
  },
  "teens:c-teens-basic-1-1": {
    "patternName": "Present Simple Routines & School Life",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your science homework routine.",
    "prompt": "We finish our science projects before five.",
    "learningOpportunity": "Use base verb with plural subjects in Present Simple + time marker.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-teal-700",
    "parts": [
      {
        "label": "Subject",
        "text": "We",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "finish",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "our science projects",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time marker",
        "text": "before five.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-1-2": {
    "patternName": "Present Simple 3rd Person Habits",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order using third person singular -s.",
    "prompt": "He streams gaming videos on his channel.",
    "learningOpportunity": "Add -s to third person singular verbs (stream -> streams).",
    "difficulty": "easy",
    "accentColor": "from-teal-500 to-cyan-700",
    "parts": [
      {
        "label": "Subject",
        "text": "He",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb (-s)",
        "text": "streams",
        "color": "bg-violet-300"
      },
      {
        "label": "Object",
        "text": "gaming videos",
        "color": "bg-yellow-300"
      },
      {
        "label": "Platform",
        "text": "on his channel.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-1-3": {
    "patternName": "Negative & Interrogative Present Simple",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask about daily extracurricular practice.",
    "prompt": "Does she play basketball after class?",
    "learningOpportunity": "Invert Does + subject + base verb + time expression.",
    "difficulty": "easy",
    "accentColor": "from-cyan-500 to-blue-700",
    "parts": [
      {
        "label": "Auxiliary",
        "text": "Does",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "she",
        "color": "bg-cyan-300"
      },
      {
        "label": "Base verb & sport",
        "text": "play basketball",
        "color": "bg-violet-300"
      },
      {
        "label": "Time",
        "text": "after class?",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-1-4": {
    "patternName": "Sports, Clubs & School Activities",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to talk about robotics club meetings.",
    "prompt": "Our robotics club meets every Thursday afternoon.",
    "learningOpportunity": "Connect club subject nouns with scheduled meeting times.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-indigo-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Our robotics club",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb (-s)",
        "text": "meets",
        "color": "bg-violet-300"
      },
      {
        "label": "Recurring time",
        "text": "every Thursday afternoon.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-1-5": {
    "patternName": "Time, Clocks & Event Scheduling",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to state when the school festival begins.",
    "prompt": "The music festival starts at four sharp.",
    "learningOpportunity": "Use at + hour + sharp for precise schedule announcements.",
    "difficulty": "easy",
    "accentColor": "from-indigo-500 to-purple-700",
    "parts": [
      {
        "label": "Event subject",
        "text": "The music festival",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb (-s)",
        "text": "starts",
        "color": "bg-violet-300"
      },
      {
        "label": "Precise time",
        "text": "at four sharp.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-1-6": {
    "patternName": "Adverbs of Frequency (Always, Usually, Never)",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order placing the frequency adverb correctly.",
    "prompt": "I usually study with my classmates online.",
    "learningOpportunity": "Place usually between the subject and the main action verb.",
    "difficulty": "easy",
    "accentColor": "from-purple-500 to-pink-700",
    "parts": [
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Frequency",
        "text": "usually",
        "color": "bg-orange-300"
      },
      {
        "label": "Verb phrase",
        "text": "study with my classmates",
        "color": "bg-violet-300"
      },
      {
        "label": "Mode",
        "text": "online.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-1-7": {
    "patternName": "Ordering Fast Food & Café Snacks",
    "variant": "question",
    "title": "Build the Polite Question / Arma la Pregunta Cortés",
    "instructions": "Put the blocks in order to order a snack combo at the food court.",
    "prompt": "Can I have a cheese pizza slice, please?",
    "learningOpportunity": "Form polite snack orders with Can I have + item + please.",
    "difficulty": "easy",
    "accentColor": "from-rose-500 to-red-700",
    "parts": [
      {
        "label": "Modal",
        "text": "Can",
        "color": "bg-emerald-300"
      },
      {
        "label": "Subject",
        "text": "I",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb",
        "text": "have",
        "color": "bg-violet-300"
      },
      {
        "label": "Food item & courtesy",
        "text": "a cheese pizza slice, please?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-1-8": {
    "patternName": "Shopping for Tech Accessories & Clothes",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask the price of wireless headphones.",
    "prompt": "How much are these wireless headphones?",
    "learningOpportunity": "Use How much are + plural noun for electronics pricing.",
    "difficulty": "easy",
    "accentColor": "from-amber-500 to-orange-700",
    "parts": [
      {
        "label": "Price phrase",
        "text": "How much",
        "color": "bg-emerald-300"
      },
      {
        "label": "To be",
        "text": "are",
        "color": "bg-indigo-300"
      },
      {
        "label": "Plural product",
        "text": "these wireless headphones?",
        "color": "bg-cyan-300"
      }
    ]
  },
  "teens:c-teens-basic-1-9": {
    "patternName": "Teen Hobbies & Gerund Preferences",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order using love with gerund activities.",
    "prompt": "They love editing short videos for social media.",
    "learningOpportunity": "Pair love with gerund verb (-ing) + purpose phrase.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-green-700",
    "parts": [
      {
        "label": "Subject",
        "text": "They",
        "color": "bg-cyan-300"
      },
      {
        "label": "Preference verb",
        "text": "love",
        "color": "bg-violet-300"
      },
      {
        "label": "Gerund action",
        "text": "editing short videos",
        "color": "bg-yellow-300"
      },
      {
        "label": "Purpose",
        "text": "for social media.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-1-10": {
    "patternName": "Level 1 Review & Campus Showcase",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask a friend about their favorite school club.",
    "prompt": "Which school club do you want to join this term?",
    "learningOpportunity": "Form selective questions with Which + noun + do you want to join.",
    "difficulty": "medium",
    "accentColor": "from-blue-600 to-indigo-800",
    "parts": [
      {
        "label": "Question phrase",
        "text": "Which school club",
        "color": "bg-emerald-300"
      },
      {
        "label": "Auxiliary & subject",
        "text": "do you",
        "color": "bg-indigo-300"
      },
      {
        "label": "Infinitive phrase",
        "text": "want to join",
        "color": "bg-violet-300"
      },
      {
        "label": "Time phrase",
        "text": "this term?",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-2-1": {
    "patternName": "Teen Life Routines vs Now",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to contrast usual habits with current activities.",
    "prompt": "I usually play soccer, but right now I am studying math.",
    "learningOpportunity": "Contrast Present Simple routine with Present Continuous action.",
    "difficulty": "medium",
    "accentColor": "from-teal-600 to-emerald-700",
    "parts": [
      {
        "label": "Habit clause",
        "text": "I usually play soccer,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Current activity",
        "text": "right now I am studying math.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-2": {
    "patternName": "Present Progressive for Actions Happening Now",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe live streaming activities.",
    "prompt": "She is recording a new music video right now.",
    "learningOpportunity": "Use be + verb-ing + right now for immediate activities.",
    "difficulty": "easy",
    "accentColor": "from-cyan-600 to-blue-700",
    "parts": [
      {
        "label": "Subject",
        "text": "She",
        "color": "bg-cyan-300"
      },
      {
        "label": "Auxiliary & verb",
        "text": "is recording",
        "color": "bg-indigo-300"
      },
      {
        "label": "Object",
        "text": "a new music video",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time marker",
        "text": "right now.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-2-3": {
    "patternName": "Hangout Invitations & Weekend Plans",
    "variant": "question",
    "title": "Build the Polite Question / Arma la Pregunta Cortés",
    "instructions": "Put the blocks in order to invite friends to the cinema.",
    "prompt": "Do you want to watch the new superhero movie with us?",
    "learningOpportunity": "Form friendly invitations with Do you want to + base verb.",
    "difficulty": "easy",
    "accentColor": "from-indigo-600 to-violet-700",
    "parts": [
      {
        "label": "Invitation phrase",
        "text": "Do you want to watch",
        "color": "bg-emerald-300"
      },
      {
        "label": "Movie object",
        "text": "the new superhero movie",
        "color": "bg-yellow-300"
      },
      {
        "label": "Group phrase",
        "text": "with us?",
        "color": "bg-cyan-300"
      }
    ]
  },
  "teens:c-teens-basic-2-4": {
    "patternName": "Simple vs Continuous Dynamic Contrast",
    "variant": "question",
    "title": "Build the Question / Arma la Pregunta",
    "instructions": "Put the blocks in order to ask what game a friend is playing right now.",
    "prompt": "What video game are you playing right now?",
    "learningOpportunity": "Invert What + noun + are you + verb-ing + right now.",
    "difficulty": "medium",
    "accentColor": "from-purple-600 to-pink-700",
    "parts": [
      {
        "label": "Question phrase",
        "text": "What video game",
        "color": "bg-emerald-300"
      },
      {
        "label": "Auxiliary",
        "text": "are",
        "color": "bg-indigo-300"
      },
      {
        "label": "Subject",
        "text": "you",
        "color": "bg-cyan-300"
      },
      {
        "label": "Continuous verb",
        "text": "playing",
        "color": "bg-violet-300"
      },
      {
        "label": "Time",
        "text": "right now?",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-2-5": {
    "patternName": "Verbs of State vs Action in Youth Contexts",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order using stative verbs know and believe.",
    "prompt": "I know the secret level, and I believe you can beat it.",
    "learningOpportunity": "Notice that state verbs know and believe stay in simple form.",
    "difficulty": "medium",
    "accentColor": "from-amber-600 to-rose-700",
    "parts": [
      {
        "label": "Clause 1",
        "text": "I know the secret level,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Clause 2",
        "text": "I believe you can beat it.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-6": {
    "patternName": "Weather, Outfits & Outdoor Activities",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe weather and outdoor fun.",
    "prompt": "It is sunny today, so we are skating at the park.",
    "learningOpportunity": "Connect weather condition with consequence using connector so.",
    "difficulty": "medium",
    "accentColor": "from-sky-600 to-teal-700",
    "parts": [
      {
        "label": "Weather condition",
        "text": "It is sunny today,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "so",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Consequence action",
        "text": "we are skating at the park.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-7": {
    "patternName": "Imperatives for Game Rules & Tutorials",
    "variant": "affirmative",
    "title": "Build Game Rule / Arma Regla de Juego",
    "instructions": "Put the blocks in order to give a gaming tutorial step.",
    "prompt": "Press the spacebar to jump over obstacles.",
    "learningOpportunity": "Start tutorial instructions with base verb + infinitive of purpose.",
    "difficulty": "easy",
    "accentColor": "from-emerald-600 to-green-700",
    "parts": [
      {
        "label": "Action verb",
        "text": "Press",
        "color": "bg-violet-300"
      },
      {
        "label": "Control key",
        "text": "the spacebar",
        "color": "bg-cyan-300"
      },
      {
        "label": "Infinitive purpose",
        "text": "to jump over obstacles.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-8": {
    "patternName": "Giving Campus & Mall Directions",
    "variant": "affirmative",
    "title": "Build Campus Direction / Arma Dirección en Campus",
    "instructions": "Put the blocks in order to guide a classmate to the cafeteria.",
    "prompt": "Walk past the library and turn left at the science lab.",
    "learningOpportunity": "Use directional prepositions (past, at) in navigation instructions.",
    "difficulty": "easy",
    "accentColor": "from-blue-600 to-indigo-700",
    "parts": [
      {
        "label": "Direction 1",
        "text": "Walk past the library",
        "color": "bg-violet-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Direction 2",
        "text": "turn left at the science lab.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-9": {
    "patternName": "Phone Calls, Voice Notes & Texting",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to leave a voice message promise.",
    "prompt": "I will send you a voice note when I arrive home.",
    "learningOpportunity": "Link will + send with a time clause introduced by when.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-purple-700",
    "parts": [
      {
        "label": "Main commitment",
        "text": "I will send you a voice note",
        "color": "bg-cyan-300"
      },
      {
        "label": "Time connector",
        "text": "when",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Condition clause",
        "text": "I arrive home.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-10": {
    "patternName": "Level 2 Capstone: Teen Creator Studio",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your creator channel project.",
    "prompt": "Our production team is creating a podcast episode this week.",
    "learningOpportunity": "Use Present Continuous for ongoing creative weekly projects.",
    "difficulty": "medium",
    "accentColor": "from-rose-600 to-amber-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Our production team",
        "color": "bg-cyan-300"
      },
      {
        "label": "Continuous verb",
        "text": "is creating",
        "color": "bg-indigo-300"
      },
      {
        "label": "Media object",
        "text": "a podcast episode",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time phrase",
        "text": "this week.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-3-1": {
    "patternName": "Can / Could for Talents & Abilities",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe creative software talents.",
    "prompt": "I can create 3D animations, but I cannot edit audio yet.",
    "learningOpportunity": "Contrast current capabilities using can vs cannot with yet.",
    "difficulty": "medium",
    "accentColor": "from-emerald-600 to-teal-800",
    "parts": [
      {
        "label": "Capability clause",
        "text": "I can create 3D animations,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Limitation clause",
        "text": "I cannot edit audio yet.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-3-2": {
    "patternName": "Permits, Passwords & Online Safety",
    "variant": "affirmative",
    "title": "Build Security Rule / Arma Regla de Seguridad",
    "instructions": "Put the blocks in order to express online account safety rules.",
    "prompt": "You must never share your private passwords with strangers.",
    "learningOpportunity": "Use modal must never + base verb for strict digital protection.",
    "difficulty": "easy",
    "accentColor": "from-red-600 to-amber-700",
    "parts": [
      {
        "label": "Subject & prohibition",
        "text": "You must never share",
        "color": "bg-rose-300"
      },
      {
        "label": "Sensitive object",
        "text": "your private passwords",
        "color": "bg-yellow-300"
      },
      {
        "label": "Safety target",
        "text": "with strangers.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-3-3": {
    "patternName": "Teen Obligations: Have To & School Rules",
    "variant": "affirmative",
    "title": "Build Obligation / Arma Obligaciones",
    "instructions": "Put the blocks in order to express school lab rules.",
    "prompt": "Students have to wear safety goggles in the chemistry lab.",
    "learningOpportunity": "Use have to + base verb to express formal institutional rules.",
    "difficulty": "medium",
    "accentColor": "from-amber-600 to-orange-800",
    "parts": [
      {
        "label": "Subject",
        "text": "Students",
        "color": "bg-cyan-300"
      },
      {
        "label": "Obligation form",
        "text": "have to wear",
        "color": "bg-indigo-300"
      },
      {
        "label": "Gear",
        "text": "safety goggles",
        "color": "bg-yellow-300"
      },
      {
        "label": "Lab location",
        "text": "in the chemistry lab.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-3-4": {
    "patternName": "Space, Science & Future Technology",
    "variant": "affirmative",
    "title": "Build Future with Will / Arma Futuro con Will",
    "instructions": "Put the blocks in order to predict future Mars missions.",
    "prompt": "Scientists will build autonomous research bases on Mars.",
    "learningOpportunity": "Use will + base verb + location for scientific space predictions.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-violet-800",
    "parts": [
      {
        "label": "Subject",
        "text": "Scientists",
        "color": "bg-cyan-300"
      },
      {
        "label": "Future verb",
        "text": "will build",
        "color": "bg-indigo-300"
      },
      {
        "label": "Object",
        "text": "autonomous research bases",
        "color": "bg-yellow-300"
      },
      {
        "label": "Planet location",
        "text": "on Mars.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-3-5": {
    "patternName": "Past To Be: Was/Were & Childhood Memories",
    "variant": "affirmative",
    "title": "Build Past To Be / Arma To Be en Pasado",
    "instructions": "Put the blocks in order to describe childhood passions.",
    "prompt": "I was very curious about space when I was ten.",
    "learningOpportunity": "Use was + adjective + when I was + age to share childhood memories.",
    "difficulty": "medium",
    "accentColor": "from-purple-600 to-pink-800",
    "parts": [
      {
        "label": "Past memory clause",
        "text": "I was very curious about space",
        "color": "bg-cyan-300"
      },
      {
        "label": "Time connector",
        "text": "when",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Age clause",
        "text": "I was ten.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-3-6": {
    "patternName": "Travel Stories with Key Past Verbs",
    "variant": "affirmative",
    "title": "Build Past Narrative / Arma Narrativa en Pasado",
    "instructions": "Put the blocks in order to recount an exciting school trip.",
    "prompt": "We traveled to the national park and camped under the stars.",
    "learningOpportunity": "Chain regular and irregular past simple verbs with sequential and.",
    "difficulty": "medium",
    "accentColor": "from-teal-600 to-emerald-800",
    "parts": [
      {
        "label": "Past action 1",
        "text": "We traveled to the national park",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Past action 2",
        "text": "camped under the stars.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-3-7": {
    "patternName": "Biographies of Artists, Athletes & Creators",
    "variant": "affirmative",
    "title": "Build Biography / Arma Biografía",
    "instructions": "Put the blocks in order to describe an athlete's early breakthrough.",
    "prompt": "She started training at six and won her first championship.",
    "learningOpportunity": "Structure sports biography highlights using past simple milestones.",
    "difficulty": "medium",
    "accentColor": "from-amber-600 to-yellow-800",
    "parts": [
      {
        "label": "Early milestone",
        "text": "She started training at six",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Trophy milestone",
        "text": "won her first championship.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-3-8": {
    "patternName": "Storytelling Connectors (First, Suddenly, Finally)",
    "variant": "affirmative",
    "title": "Build Story Arc / Arma Arco de Historia",
    "instructions": "Put the blocks in order to create suspense in a narrative.",
    "prompt": "Suddenly, the lights went out and the crowd cheered.",
    "learningOpportunity": "Use dramatic transition connectors (Suddenly) to pace exciting stories.",
    "difficulty": "medium",
    "accentColor": "from-rose-600 to-amber-800",
    "parts": [
      {
        "label": "Dramatic hook",
        "text": "Suddenly,",
        "color": "bg-rose-300"
      },
      {
        "label": "Event 1",
        "text": "the lights went out",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Event 2",
        "text": "the crowd cheered.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-3-9": {
    "patternName": "Everyday Problems & How to Explain Them",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to report a tech glitch to your teacher.",
    "prompt": "My tablet froze while I was uploading the assignment.",
    "learningOpportunity": "Combine past simple problem with past continuous background action.",
    "difficulty": "hard",
    "accentColor": "from-blue-600 to-indigo-800",
    "parts": [
      {
        "label": "Problem clause",
        "text": "My tablet froze",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connector",
        "text": "while",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Background activity",
        "text": "I was uploading the assignment.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-3-10": {
    "patternName": "Irregular Verbs & Video Project Capstone",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe producing your video documentary.",
    "prompt": "We chose the theme, wrote the script, and recorded the interview.",
    "learningOpportunity": "List three irregular past verbs (chose, wrote, recorded) in parallel.",
    "difficulty": "hard",
    "accentColor": "from-violet-600 to-slate-800",
    "parts": [
      {
        "label": "Past step 1",
        "text": "We chose the theme,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past step 2",
        "text": "wrote the script,",
        "color": "bg-violet-300"
      },
      {
        "label": "Connector & step 3",
        "text": "and recorded the interview.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-4-1": {
    "patternName": "My Opinions & Perspectives on Gaming & Tech",
    "variant": "affirmative",
    "title": "Build the Opinion / Arma la Opinión",
    "instructions": "Put the blocks in order to state a balanced perspective on social apps.",
    "prompt": "In my view, video games improve problem-solving and teamwork skills.",
    "learningOpportunity": "Introduce teen opinions with In my view + subject + verb + benefits.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-blue-700",
    "parts": [
      {
        "label": "Opinion frame",
        "text": "In my view,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Subject",
        "text": "video games improve",
        "color": "bg-cyan-300"
      },
      {
        "label": "Benefits",
        "text": "problem-solving and teamwork skills.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-4-2": {
    "patternName": "Giving Good Advice with Should & Ought To",
    "variant": "affirmative",
    "title": "Build Advice / Arma Consejos",
    "instructions": "Put the blocks in order to offer healthy screen time advice.",
    "prompt": "You should take regular screen breaks while studying.",
    "learningOpportunity": "Form supportive peer advice with you should + base verb + time frame.",
    "difficulty": "medium",
    "accentColor": "from-lime-600 to-teal-700",
    "parts": [
      {
        "label": "Subject & modal",
        "text": "You should take",
        "color": "bg-cyan-300"
      },
      {
        "label": "Advice object",
        "text": "regular screen breaks",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time condition",
        "text": "while studying.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-4-3": {
    "patternName": "Facts, Causes & Zero Conditional",
    "variant": "affirmative",
    "title": "Build Zero Conditional / Arma el Condicional Cero",
    "instructions": "Put the blocks in order to state a scientific device fact.",
    "prompt": "If you charge the battery overnight, it lasts all day.",
    "learningOpportunity": "Use Zero Conditional: If + Present Simple, Present Simple for facts.",
    "difficulty": "medium",
    "accentColor": "from-teal-600 to-emerald-700",
    "parts": [
      {
        "label": "Condition clause",
        "text": "If you charge the battery overnight,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Factual result",
        "text": "it lasts all day.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-4-4": {
    "patternName": "Clear Online Messages & Digital Etiquette",
    "variant": "affirmative",
    "title": "Build Digital Rule / Arma Regla Digital",
    "instructions": "Put the blocks in order to formulate respectful chat group rules.",
    "prompt": "Always verify source links before sharing breaking news.",
    "learningOpportunity": "Use imperative adverb Always + verify + before + gerund.",
    "difficulty": "medium",
    "accentColor": "from-blue-600 to-cyan-700",
    "parts": [
      {
        "label": "Imperative rule",
        "text": "Always verify source links",
        "color": "bg-cyan-300"
      },
      {
        "label": "Time preposition",
        "text": "before",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Gerund action",
        "text": "sharing breaking news.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-4-5": {
    "patternName": "Future Possibilities & First Conditional",
    "variant": "affirmative",
    "title": "Build First Conditional / Arma el Primer Condicional",
    "instructions": "Put the blocks in order to predict academic results conditionally.",
    "prompt": "If we win the science fair, we will represent our school.",
    "learningOpportunity": "Form First Conditional: If + Present Simple, will + base verb.",
    "difficulty": "medium",
    "accentColor": "from-purple-600 to-indigo-700",
    "parts": [
      {
        "label": "Condition clause",
        "text": "If we win the science fair,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Future result clause",
        "text": "we will represent our school.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-4-6": {
    "patternName": "Comparatives & Superlatives in Tech & Gaming",
    "variant": "affirmative",
    "title": "Build Comparative / Arma el Comparativo",
    "instructions": "Put the blocks in order to compare gaming graphics processors.",
    "prompt": "This graphics card is much faster than the older model.",
    "learningOpportunity": "Use modifier much + comparative faster than + benchmark.",
    "difficulty": "medium",
    "accentColor": "from-pink-600 to-rose-700",
    "parts": [
      {
        "label": "Subject",
        "text": "This graphics card",
        "color": "bg-cyan-300"
      },
      {
        "label": "To be",
        "text": "is",
        "color": "bg-indigo-300"
      },
      {
        "label": "Comparative phrase",
        "text": "much faster than",
        "color": "bg-violet-300"
      },
      {
        "label": "Benchmark",
        "text": "the older model.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-4-7": {
    "patternName": "Too & Enough: Problems and Solutions",
    "variant": "negative",
    "title": "Build with Enough / Arma con Enough",
    "instructions": "Put the blocks in order to identify game storage limitations.",
    "prompt": "We do not have enough storage space for this huge update.",
    "learningOpportunity": "Place enough before nouns (enough space) to signal sufficiency/lack.",
    "difficulty": "medium",
    "accentColor": "from-red-600 to-amber-700",
    "parts": [
      {
        "label": "Subject & negative",
        "text": "We do not have",
        "color": "bg-cyan-300"
      },
      {
        "label": "Sufficiency object",
        "text": "enough storage space",
        "color": "bg-yellow-300"
      },
      {
        "label": "Purpose",
        "text": "for this huge update.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-basic-4-8": {
    "patternName": "Friendship Boundaries & Polite Requests",
    "variant": "question",
    "title": "Build Polite Request / Arma Petición Cortés",
    "instructions": "Put the blocks in order to ask a friend to lend study notes politely.",
    "prompt": "Could you please share your chemistry notes with me?",
    "learningOpportunity": "Structure polite peer requests with Could you please + verb + object.",
    "difficulty": "easy",
    "accentColor": "from-emerald-600 to-teal-700",
    "parts": [
      {
        "label": "Polite modal frame",
        "text": "Could you please share",
        "color": "bg-emerald-300"
      },
      {
        "label": "Object",
        "text": "your chemistry notes",
        "color": "bg-yellow-300"
      },
      {
        "label": "Recipient",
        "text": "with me?",
        "color": "bg-cyan-300"
      }
    ]
  },
  "teens:c-teens-basic-4-9": {
    "patternName": "Formal vs Informal Messages & Registers",
    "variant": "affirmative",
    "title": "Build Formal Message / Arma Mensaje Formal",
    "instructions": "Put the blocks in order to write a polite message to your school principal.",
    "prompt": "I am writing to request permission for our robotics showcase.",
    "learningOpportunity": "Deploy formal opening formula I am writing to request + noun.",
    "difficulty": "hard",
    "accentColor": "from-indigo-600 to-violet-800",
    "parts": [
      {
        "label": "Formal opening",
        "text": "I am writing to request",
        "color": "bg-emerald-300"
      },
      {
        "label": "Object & event",
        "text": "permission for our robotics showcase.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-4-10": {
    "patternName": "Teen Leadership & Capstone Review",
    "variant": "affirmative",
    "title": "Build Leadership Pitch / Arma Pitch de Liderazgo",
    "instructions": "Put the blocks in order to articulate student council goals.",
    "prompt": "Our student council aims to promote mental wellness on campus.",
    "learningOpportunity": "Use aim to + base verb for institutional vision statements.",
    "difficulty": "hard",
    "accentColor": "from-purple-600 to-slate-800",
    "parts": [
      {
        "label": "Subject",
        "text": "Our student council",
        "color": "bg-cyan-300"
      },
      {
        "label": "Aim verb",
        "text": "aims to promote",
        "color": "bg-violet-300"
      },
      {
        "label": "Goal & scope",
        "text": "mental wellness on campus.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-1": {
    "patternName": "Present Perfect for Life Experiences & Milestones",
    "variant": "affirmative",
    "title": "Build Present Perfect / Arma el Present Perfect",
    "instructions": "Put the blocks in order to share competitive gaming achievements.",
    "prompt": "I have participated in three national e-sports tournaments.",
    "learningOpportunity": "Use have + past participle + in for cumulative life milestones.",
    "difficulty": "medium",
    "accentColor": "from-violet-600 to-indigo-700",
    "parts": [
      {
        "label": "Subject & auxiliary",
        "text": "I have participated in",
        "color": "bg-cyan-300"
      },
      {
        "label": "Experience object",
        "text": "three national e-sports tournaments.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-2": {
    "patternName": "Teen Slang & Phrasal Verbs in Daily Talk",
    "variant": "affirmative",
    "title": "Build Phrasal Verb / Arma con Phrasal Verb",
    "instructions": "Put the blocks in order using hang out and chill.",
    "prompt": "We usually hang out at the skate park to chill after school.",
    "learningOpportunity": "Incorporate authentic conversational phrasal verbs with purpose to chill.",
    "difficulty": "medium",
    "accentColor": "from-emerald-600 to-teal-700",
    "parts": [
      {
        "label": "Subject & phrasal verb",
        "text": "We usually hang out",
        "color": "bg-cyan-300"
      },
      {
        "label": "Location",
        "text": "at the skate park",
        "color": "bg-yellow-300"
      },
      {
        "label": "Infinitive purpose",
        "text": "to chill after school.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-inter-3": {
    "patternName": "Possibilities & Deductions (Must, Might, Can't)",
    "variant": "affirmative",
    "title": "Build Modal Deduction / Arma Deducción con Modales",
    "instructions": "Put the blocks in order to deduce a tournament outcome.",
    "prompt": "Their team must be exhausted after playing three consecutive matches.",
    "learningOpportunity": "Use modal must be + adjective to express strong logical deduction.",
    "difficulty": "hard",
    "accentColor": "from-sky-600 to-violet-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Their team",
        "color": "bg-cyan-300"
      },
      {
        "label": "Deduction modal",
        "text": "must be exhausted",
        "color": "bg-indigo-300"
      },
      {
        "label": "Prepositional reason",
        "text": "after playing three consecutive matches.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-4": {
    "patternName": "Second Conditional (If I Ruled the World)",
    "variant": "affirmative",
    "title": "Build Second Conditional / Arma el Segundo Condicional",
    "instructions": "Put the blocks in order to articulate hypothetical visionary ideas.",
    "prompt": "If I created a social network, I would ban algorithmic manipulation.",
    "learningOpportunity": "Structure Second Conditional: If + past simple, would + base verb.",
    "difficulty": "hard",
    "accentColor": "from-purple-600 to-rose-700",
    "parts": [
      {
        "label": "Hypothetical condition",
        "text": "If I created a social network,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Visionary result",
        "text": "I would ban algorithmic manipulation.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-5": {
    "patternName": "Agreeing & Disagreeing Respectfully in Debates",
    "variant": "affirmative",
    "title": "Build Nuanced Debate / Arma Debate Matizado",
    "instructions": "Put the blocks in order to construct a respectful counter-argument.",
    "prompt": "I see your point, but we must also consider data privacy risks.",
    "learningOpportunity": "Deploy diplomatic debate formula: I see your point + but + modal.",
    "difficulty": "hard",
    "accentColor": "from-amber-600 to-slate-800",
    "parts": [
      {
        "label": "Concession starter",
        "text": "I see your point,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Connector",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Counter-argument",
        "text": "we must also consider data privacy risks.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-6": {
    "patternName": "Podcast & Media Hosting Broadcasting",
    "variant": "affirmative",
    "title": "Build Podcast Opener / Arma Apertura de Podcast",
    "instructions": "Put the blocks in order to formulate a dynamic podcast show intro.",
    "prompt": "Welcome back to Teen Tech Talks, where we unpack viral trends.",
    "learningOpportunity": "Form broadcast hooks using where we + unpack + topic.",
    "difficulty": "hard",
    "accentColor": "from-blue-600 to-indigo-800",
    "parts": [
      {
        "label": "Broadcast greeting",
        "text": "Welcome back to Teen Tech Talks,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Relative show clause",
        "text": "where we unpack viral trends.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-7": {
    "patternName": "Ongoing Goals & Present Perfect Continuous",
    "variant": "affirmative",
    "title": "Build Present Perfect Continuous / Arma Continuous",
    "instructions": "Put the blocks in order to state ongoing software project duration.",
    "prompt": "I have been developing this indie game for six months.",
    "learningOpportunity": "Use have been + verb-ing + for duration to express ongoing effort.",
    "difficulty": "hard",
    "accentColor": "from-fuchsia-600 to-purple-800",
    "parts": [
      {
        "label": "Subject & continuous form",
        "text": "I have been developing",
        "color": "bg-cyan-300"
      },
      {
        "label": "Project object",
        "text": "this indie game",
        "color": "bg-yellow-300"
      },
      {
        "label": "Duration phrase",
        "text": "for six months.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-inter-8": {
    "patternName": "Phrasal Verbs for Story Climax & Solutions",
    "variant": "affirmative",
    "title": "Build with Phrasal Verbs / Arma con Phrasal Verbs",
    "instructions": "Put the blocks in order using come up with innovative solutions.",
    "prompt": "Our robotics team came up with a brilliant fix for the sensor bug.",
    "learningOpportunity": "Use three-part phrasal verb came up with + noun phrase.",
    "difficulty": "hard",
    "accentColor": "from-emerald-600 to-blue-700",
    "parts": [
      {
        "label": "Subject",
        "text": "Our robotics team",
        "color": "bg-cyan-300"
      },
      {
        "label": "Phrasal verb",
        "text": "came up with",
        "color": "bg-violet-300"
      },
      {
        "label": "Solution object",
        "text": "a brilliant fix for the sensor bug.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-9": {
    "patternName": "Evidence-Based Deductions & Critical Thinking",
    "variant": "affirmative",
    "title": "Build Logical Deduction / Arma Deducción Lógica",
    "instructions": "Put the blocks in order to deduce a security breach from evidence.",
    "prompt": "The server log proves that someone hacked the database last night.",
    "learningOpportunity": "Link evidence subject (proves that) with noun clause statement.",
    "difficulty": "hard",
    "accentColor": "from-teal-600 to-slate-800",
    "parts": [
      {
        "label": "Evidence clause",
        "text": "The server log proves that",
        "color": "bg-cyan-300"
      },
      {
        "label": "Deduction clause",
        "text": "someone hacked the database last night.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-10": {
    "patternName": "Conditional Decision Lab & Future Simulations",
    "variant": "affirmative",
    "title": "Build Conditional Choice / Arma Decisión Condicional",
    "instructions": "Put the blocks in order to simulate future career contingencies.",
    "prompt": "If I learn artificial intelligence now, I will create smarter applications.",
    "learningOpportunity": "Connect early tech learning with future creative development.",
    "difficulty": "hard",
    "accentColor": "from-orange-600 to-pink-700",
    "parts": [
      {
        "label": "Conditional action",
        "text": "If I learn artificial intelligence now,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Future innovation",
        "text": "I will create smarter applications.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-11": {
    "patternName": "Debate Responses & Respectful Rebuttals",
    "variant": "affirmative",
    "title": "Build Rebuttal / Arma Refutación Respetuosa",
    "instructions": "Put the blocks in order to deliver an evidence-backed rebuttal.",
    "prompt": "Although your argument seems plausible, official statistics contradict it.",
    "learningOpportunity": "Use concessive Although clause + main rebuttal statement.",
    "difficulty": "hard",
    "accentColor": "from-indigo-600 to-rose-800",
    "parts": [
      {
        "label": "Concession clause",
        "text": "Although your argument seems plausible,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Rebuttal statement",
        "text": "official statistics contradict it.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-inter-12": {
    "patternName": "Capstone Media Showcase & Scholarship Simulation",
    "variant": "affirmative",
    "title": "Build Scholarship Pitch / Arma Pitch de Beca",
    "instructions": "Put the blocks in order to present your community impact profile.",
    "prompt": "I have led youth coding workshops to bridge the digital divide.",
    "learningOpportunity": "Showcase social leadership with present perfect + infinitive of impact.",
    "difficulty": "hard",
    "accentColor": "from-purple-700 to-indigo-900",
    "parts": [
      {
        "label": "Subject & leadership verb",
        "text": "I have led youth coding workshops",
        "color": "bg-cyan-300"
      },
      {
        "label": "Infinitive social purpose",
        "text": "to bridge the digital divide.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-1": {
    "patternName": "Breaking News & Reported Speech",
    "variant": "affirmative",
    "title": "Build Reported Speech / Arma el Estilo Indirecto",
    "instructions": "Put the blocks in order to report campus council announcements.",
    "prompt": "The student council announced that the campus festival had been postponed.",
    "learningOpportunity": "Shift past simple to past perfect passive in formal news reporting.",
    "difficulty": "hard",
    "accentColor": "from-blue-600 to-slate-800",
    "parts": [
      {
        "label": "Reporting subject & verb",
        "text": "The student council announced",
        "color": "bg-cyan-300"
      },
      {
        "label": "Reported passive clause",
        "text": "that the campus festival had been postponed.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-2": {
    "patternName": "Investigative Interviews & Reported Questions",
    "variant": "affirmative",
    "title": "Build Reported Question / Arma Pregunta Reportada",
    "instructions": "Put the blocks in order to report investigative questions with normal word order.",
    "prompt": "The student journalist asked if the school would sponsor the robotics trip.",
    "learningOpportunity": "Use asked if + subject + would (normal statement order, no question mark).",
    "difficulty": "hard",
    "accentColor": "from-indigo-600 to-purple-800",
    "parts": [
      {
        "label": "Journalist subject & verb",
        "text": "The student journalist asked",
        "color": "bg-cyan-300"
      },
      {
        "label": "Reported question clause",
        "text": "if the school would sponsor the robotics trip.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-3": {
    "patternName": "Mastering Defining vs Non-Defining Relative Clauses",
    "variant": "affirmative",
    "title": "Build Relative Clause / Arma Cláusula Relativa",
    "instructions": "Put the blocks in order to embed non-defining relative clauses with commas.",
    "prompt": "Our lead coder, who designed the neural algorithm, won the national hackathon.",
    "learningOpportunity": "Enclose extra descriptive information in non-defining commas (, who...).",
    "difficulty": "hard",
    "accentColor": "from-purple-600 to-rose-800",
    "parts": [
      {
        "label": "Subject",
        "text": "Our lead coder,",
        "color": "bg-cyan-300"
      },
      {
        "label": "Relative clause",
        "text": "who designed the neural algorithm,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Main predicate",
        "text": "won the national hackathon.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-4": {
    "patternName": "Tech Disruptions & Passive Voice",
    "variant": "affirmative",
    "title": "Build Passive Voice / Arma la Voz Pasiva",
    "instructions": "Put the blocks in order to describe technological automation processes.",
    "prompt": "Complex medical surgeries are increasingly assisted by intelligent robotic systems.",
    "learningOpportunity": "Form present passive: are + adverb + assisted by + agent.",
    "difficulty": "hard",
    "accentColor": "from-teal-600 to-blue-800",
    "parts": [
      {
        "label": "Patient subject",
        "text": "Complex medical surgeries",
        "color": "bg-cyan-300"
      },
      {
        "label": "Passive verb with adverb",
        "text": "are increasingly assisted by",
        "color": "bg-indigo-300"
      },
      {
        "label": "Technological agent",
        "text": "intelligent robotic systems.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-5": {
    "patternName": "Reporting Verbs & Source Verification",
    "variant": "affirmative",
    "title": "Build Source Verification / Arma Verificación de Fuentes",
    "instructions": "Put the blocks in order using advanced reporting verb emphasized.",
    "prompt": "The investigative report emphasized that data privacy laws require urgent reform.",
    "learningOpportunity": "Deploy academic reporting verbs (emphasized that) with modal requirements.",
    "difficulty": "hard",
    "accentColor": "from-emerald-600 to-slate-800",
    "parts": [
      {
        "label": "Report subject",
        "text": "The investigative report emphasized",
        "color": "bg-cyan-300"
      },
      {
        "label": "Reported thesis",
        "text": "that data privacy laws require urgent reform.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-6": {
    "patternName": "Reduced Relative Clauses & Participle Modifiers",
    "variant": "affirmative",
    "title": "Build Reduced Clause / Arma Cláusula Reducida",
    "instructions": "Put the blocks in order to construct a reduced participial noun modifier.",
    "prompt": "The application developed by high school students surpassed one million downloads.",
    "learningOpportunity": "Reduce relative clause (which was developed by) to past participle phrase.",
    "difficulty": "challenge",
    "accentColor": "from-amber-600 to-indigo-800",
    "parts": [
      {
        "label": "Reduced subject phrase",
        "text": "The application developed by high school students",
        "color": "bg-cyan-300"
      },
      {
        "label": "Milestone predicate",
        "text": "surpassed one million downloads.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-7": {
    "patternName": "Passive Reporting Structures (It is believed that...)",
    "variant": "affirmative",
    "title": "Build Impersonal Passive / Arma Pasiva Impersonal",
    "instructions": "Put the blocks in order to construct an impersonal journalistic claim.",
    "prompt": "It is widely believed that quantum processors will transform cryptography.",
    "learningOpportunity": "Use It is + adverb + believed that + future prediction clause.",
    "difficulty": "hard",
    "accentColor": "from-cyan-600 to-violet-800",
    "parts": [
      {
        "label": "Impersonal passive frame",
        "text": "It is widely believed that",
        "color": "bg-emerald-300"
      },
      {
        "label": "Future tech prediction",
        "text": "quantum processors will transform cryptography.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-advanced-8": {
    "patternName": "Academic Idioms, Collocations & Formal Register",
    "variant": "affirmative",
    "title": "Build Formal Collocations / Arma Colocaciones Formales",
    "instructions": "Put the blocks in order using advanced academic collocations.",
    "prompt": "The committee came to a unanimous conclusion after rigorous deliberations.",
    "learningOpportunity": "Deploy high-register academic collocations (unanimous conclusion, rigorous deliberations).",
    "difficulty": "hard",
    "accentColor": "from-violet-600 to-slate-900",
    "parts": [
      {
        "label": "Subject & collocation verb",
        "text": "The committee came to",
        "color": "bg-cyan-300"
      },
      {
        "label": "Collocation object",
        "text": "a unanimous conclusion",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time condition",
        "text": "after rigorous deliberations.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-advanced-9": {
    "patternName": "Crisis Management & Environmental Summits",
    "variant": "affirmative",
    "title": "Build Diplomatic Resolution / Arma Resolución Diplomática",
    "instructions": "Put the blocks in order to formulate an international climate accord clause.",
    "prompt": "Youth delegates urged global governments to subsidize clean energy transitions.",
    "learningOpportunity": "Construct diplomatic urgings with urge + object + to infinitive.",
    "difficulty": "hard",
    "accentColor": "from-emerald-700 to-teal-900",
    "parts": [
      {
        "label": "Diplomatic subject & verb",
        "text": "Youth delegates urged",
        "color": "bg-cyan-300"
      },
      {
        "label": "Target entities",
        "text": "global governments",
        "color": "bg-yellow-300"
      },
      {
        "label": "Infinitive mandate",
        "text": "to subsidize clean energy transitions.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-advanced-10": {
    "patternName": "Global Youth NGO Leadership Capstone Pitch",
    "variant": "affirmative",
    "title": "Build NGO Leadership Pitch / Arma Pitch de ONG",
    "instructions": "Put the blocks in order to deliver an executive NGO mission statement.",
    "prompt": "Our international foundation empowers underprivileged youth through accessible STEM education.",
    "learningOpportunity": "Synthesize mission-driven executive terminology for youth leadership pitches.",
    "difficulty": "challenge",
    "accentColor": "from-indigo-800 to-slate-950",
    "parts": [
      {
        "label": "Subject",
        "text": "Our international foundation",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & target",
        "text": "empowers underprivileged youth",
        "color": "bg-violet-300"
      },
      {
        "label": "Operational avenue",
        "text": "through accessible STEM education.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-1": {
    "patternName": "Goal Setting & Strategic Venture Roadmaps",
    "variant": "affirmative",
    "title": "Build Strategic Roadmap / Arma Hoja de Ruta Estratégica",
    "instructions": "Put the blocks in order to articulate scalable venture objectives.",
    "prompt": "Our strategic roadmap outlines quarterly benchmarks for international market penetration.",
    "learningOpportunity": "Deploy corporate strategy vocabulary in clear roadmap statements.",
    "difficulty": "hard",
    "accentColor": "from-blue-700 to-indigo-900",
    "parts": [
      {
        "label": "Subject",
        "text": "Our strategic roadmap",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & object",
        "text": "outlines quarterly benchmarks",
        "color": "bg-violet-300"
      },
      {
        "label": "Purpose",
        "text": "for international market penetration.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-2": {
    "patternName": "Past Decisions & Modal Deductions in Business",
    "variant": "affirmative",
    "title": "Build Past Deduction / Arma Deducción de Pasado",
    "instructions": "Put the blocks in order to analyze a startup pivot with should have.",
    "prompt": "The founding team should have prioritized user feedback before launch.",
    "learningOpportunity": "Use should have + past participle for strategic retrospectives.",
    "difficulty": "hard",
    "accentColor": "from-indigo-700 to-purple-900",
    "parts": [
      {
        "label": "Subject",
        "text": "The founding team",
        "color": "bg-cyan-300"
      },
      {
        "label": "Past modal",
        "text": "should have prioritized",
        "color": "bg-rose-300"
      },
      {
        "label": "Object",
        "text": "user feedback",
        "color": "bg-yellow-300"
      },
      {
        "label": "Time phrase",
        "text": "before launch.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-elite-3": {
    "patternName": "Academic Hedging & Nuanced Positions",
    "variant": "affirmative",
    "title": "Build Academic Hedging / Arma Posición Matizada",
    "instructions": "Put the blocks in order to frame empirical conclusions prudently.",
    "prompt": "The preliminary findings seem to suggest a significant correlation between variables.",
    "learningOpportunity": "Deploy academic hedging verbs (seem to suggest) with statistical terminology.",
    "difficulty": "challenge",
    "accentColor": "from-purple-700 to-slate-900",
    "parts": [
      {
        "label": "Subject",
        "text": "The preliminary findings",
        "color": "bg-cyan-300"
      },
      {
        "label": "Hedging verb",
        "text": "seem to suggest",
        "color": "bg-emerald-300"
      },
      {
        "label": "Nuanced claim",
        "text": "a significant correlation between variables.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-4": {
    "patternName": "Academic Argument Structure & Thesis Framing",
    "variant": "affirmative",
    "title": "Build Academic Thesis / Arma Tesis Académica",
    "instructions": "Put the blocks in order to formulate a thesis sentence.",
    "prompt": "This paper contends that ethical frameworks must regulate emerging biotechnology.",
    "learningOpportunity": "Structure research thesis statements using contends that + modal clause.",
    "difficulty": "hard",
    "accentColor": "from-slate-700 to-indigo-950",
    "parts": [
      {
        "label": "Thesis subject & verb",
        "text": "This paper contends that",
        "color": "bg-cyan-300"
      },
      {
        "label": "Regulative claim",
        "text": "ethical frameworks must regulate emerging biotechnology.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-5": {
    "patternName": "Leadership Styles & Team Strengths Synergies",
    "variant": "affirmative",
    "title": "Build Leadership Synergy / Arma Sinergia de Liderazgo",
    "instructions": "Put the blocks in order to define transformative leadership dynamics.",
    "prompt": "Transformational leaders inspire autonomy while maintaining collective accountability.",
    "learningOpportunity": "Balance autonomy with accountability using concessive while.",
    "difficulty": "hard",
    "accentColor": "from-emerald-700 to-teal-900",
    "parts": [
      {
        "label": "Subject",
        "text": "Transformational leaders",
        "color": "bg-cyan-300"
      },
      {
        "label": "Main action",
        "text": "inspire autonomy",
        "color": "bg-violet-300"
      },
      {
        "label": "Balancing clause",
        "text": "while maintaining collective accountability.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-6": {
    "patternName": "Future Timelines & Milestone Forecasting",
    "variant": "affirmative",
    "title": "Build Future Milestone / Arma Hito Futuro",
    "instructions": "Put the blocks in order using Future Perfect Continuous.",
    "prompt": "By next December, our development team will have been testing the prototype for a year.",
    "learningOpportunity": "Form Future Perfect Continuous: will have been + verb-ing + for duration.",
    "difficulty": "challenge",
    "accentColor": "from-violet-700 to-cyan-900",
    "parts": [
      {
        "label": "Future deadline",
        "text": "By next December,",
        "color": "bg-orange-300"
      },
      {
        "label": "Subject",
        "text": "our development team",
        "color": "bg-cyan-300"
      },
      {
        "label": "Future continuous duration",
        "text": "will have been testing the prototype for a year.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-7": {
    "patternName": "Mixed Conditionals & Strategic Decision Consequences",
    "variant": "affirmative",
    "title": "Build Mixed Conditional / Arma Condicional Mixto",
    "instructions": "Put the blocks in order to link past decisions with present leadership realities.",
    "prompt": "If we had secured early funding, our company would be market leader today.",
    "learningOpportunity": "Construct Mixed Conditional: If + past perfect, would + base verb + today.",
    "difficulty": "challenge",
    "accentColor": "from-rose-700 to-indigo-950",
    "parts": [
      {
        "label": "Past unreal condition",
        "text": "If we had secured early funding,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Present consequence",
        "text": "our company would be market leader today.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-8": {
    "patternName": "Diplomatic Emphasis: Cleft Sentences & Inversion",
    "variant": "affirmative",
    "title": "Build Inversion Emphasis / Arma Énfasis por Inversión",
    "instructions": "Put the blocks in order to construct emphatic negative adverb inversion.",
    "prompt": "Seldom do startup founders encounter such favorable regulatory conditions.",
    "learningOpportunity": "Invert negative adverb (Seldom) + auxiliary do + subject + base verb.",
    "difficulty": "challenge",
    "accentColor": "from-amber-700 to-slate-900",
    "parts": [
      {
        "label": "Negative adverb & auxiliary",
        "text": "Seldom do",
        "color": "bg-emerald-300"
      },
      {
        "label": "Subject",
        "text": "startup founders",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & object",
        "text": "encounter such favorable regulatory conditions.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-9": {
    "patternName": "Academic Defense & Q&A Bridging Techniques",
    "variant": "affirmative",
    "title": "Build Defense Bridge / Arma Puente de Defensa",
    "instructions": "Put the blocks in order to field aggressive investigative inquiries.",
    "prompt": "While that concern is valid, our risk remediation protocol resolves it completely.",
    "learningOpportunity": "Acknowledge valid concerns before pivoting to concrete remediation.",
    "difficulty": "hard",
    "accentColor": "from-teal-700 to-slate-900",
    "parts": [
      {
        "label": "Bridging acknowledgment",
        "text": "While that concern is valid,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Pivot resolution",
        "text": "our risk remediation protocol resolves it completely.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-10": {
    "patternName": "Meeting Facilitation & Consensus Building",
    "variant": "affirmative",
    "title": "Build Executive Consensus / Arma Consenso Ejecutivo",
    "instructions": "Put the blocks in order to summarize stakeholder alignment in meetings.",
    "prompt": "All stakeholders unanimously endorsed the updated governance charter.",
    "learningOpportunity": "Use formal consensus collocations (unanimously endorsed the charter).",
    "difficulty": "hard",
    "accentColor": "from-blue-800 to-slate-950",
    "parts": [
      {
        "label": "Subject",
        "text": "All stakeholders",
        "color": "bg-cyan-300"
      },
      {
        "label": "Adverb & verb",
        "text": "unanimously endorsed",
        "color": "bg-violet-300"
      },
      {
        "label": "Approved object",
        "text": "the updated governance charter.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-elite-11": {
    "patternName": "Grand Capstone Tech Venture Seed Pitch",
    "variant": "affirmative",
    "title": "Build Seed Pitch Thesis / Arma Tesis de Pitch Semilla",
    "instructions": "Put the blocks in order to pitch your tech venture's defensible moat.",
    "prompt": "Our proprietary algorithm delivers exponential efficiency with undeniable network effects.",
    "learningOpportunity": "Synthesize venture capital terminology into an undeniable pitch statement.",
    "difficulty": "challenge",
    "accentColor": "from-indigo-800 to-purple-950",
    "parts": [
      {
        "label": "Subject",
        "text": "Our proprietary algorithm",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & metric",
        "text": "delivers exponential efficiency",
        "color": "bg-violet-300"
      },
      {
        "label": "Defensible moat",
        "text": "with undeniable network effects.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-1": {
    "patternName": "Oxford-Union Parliamentary Debate & Dialectics",
    "variant": "affirmative",
    "title": "Build Parliamentary Refutation / Arma Refutación Parlamentaria",
    "instructions": "Put the blocks in order to expose a logical fallacy in formal debate.",
    "prompt": "The opposition rests upon a false dichotomy that collapses under empirical scrutiny.",
    "learningOpportunity": "Deploy rhetorical dialectic terminology (false dichotomy, empirical scrutiny).",
    "difficulty": "challenge",
    "accentColor": "from-slate-800 to-indigo-950",
    "parts": [
      {
        "label": "Subject & verb",
        "text": "The opposition rests upon",
        "color": "bg-cyan-300"
      },
      {
        "label": "Fallacy object",
        "text": "a false dichotomy",
        "color": "bg-rose-300"
      },
      {
        "label": "Relative refutation",
        "text": "that collapses under empirical scrutiny.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-2": {
    "patternName": "Pop Culture Semiotics & Media Ecology",
    "variant": "affirmative",
    "title": "Build Semiotic Critique / Arma Crítica Semiótica",
    "instructions": "Put the blocks in order to deconstruct viral media ecology.",
    "prompt": "Algorithmic feeds subtly reshape human cognition by amplifying sensationalist narratives.",
    "learningOpportunity": "Form semiotic critiques linking media ecology with cognitive impact.",
    "difficulty": "challenge",
    "accentColor": "from-violet-800 to-slate-950",
    "parts": [
      {
        "label": "Subject & adverb",
        "text": "Algorithmic feeds subtly reshape",
        "color": "bg-cyan-300"
      },
      {
        "label": "Cognitive object",
        "text": "human cognition",
        "color": "bg-yellow-300"
      },
      {
        "label": "Gerund mechanism",
        "text": "by amplifying sensationalist narratives.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-masters-3": {
    "patternName": "Ivy League Graduate Seminars & Socratic Cross-Examination",
    "variant": "affirmative",
    "title": "Build Epistemological Thesis / Arma Tesis Epistemológica",
    "instructions": "Put the blocks in order to defend a doctoral hypothesis boundary.",
    "prompt": "The hypothesis remains scientifically robust only within strictly defined boundary conditions.",
    "learningOpportunity": "Articulate academic falsifiability using precision qualifying phrases.",
    "difficulty": "challenge",
    "accentColor": "from-indigo-800 to-slate-950",
    "parts": [
      {
        "label": "Subject & copula",
        "text": "The hypothesis remains",
        "color": "bg-cyan-300"
      },
      {
        "label": "Academic predicate",
        "text": "scientifically robust",
        "color": "bg-violet-300"
      },
      {
        "label": "Qualifying condition",
        "text": "only within strictly defined boundary conditions.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-4": {
    "patternName": "TED Keynotes & High-Impact Thought Leadership",
    "variant": "affirmative",
    "title": "Build TED Keynote Climax / Arma Clímax de Keynote TED",
    "instructions": "Put the blocks in order to engineer an inspiring keynote transformation statement.",
    "prompt": "When curiosity replaces fear, human potential expands beyond conventional boundaries.",
    "learningOpportunity": "Structure keynote thematic climaxes with memorable antithesis balance.",
    "difficulty": "challenge",
    "accentColor": "from-rose-800 to-indigo-950",
    "parts": [
      {
        "label": "Antithesis condition",
        "text": "When curiosity replaces fear,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Human potential result",
        "text": "human potential expands beyond conventional boundaries.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-5": {
    "patternName": "Competitive Debate Strategy & Operative Treaties",
    "variant": "affirmative",
    "title": "Build Strategic Motion / Arma Moción Estratégica",
    "instructions": "Put the blocks in order to formulate an operative international treaty clause.",
    "prompt": "This house would establish binding international safeguards on autonomous cyber warfare.",
    "learningOpportunity": "Use parliamentary opening This house would + verb + binding safeguards.",
    "difficulty": "challenge",
    "accentColor": "from-blue-800 to-slate-950",
    "parts": [
      {
        "label": "Parliamentary formula",
        "text": "This house would establish",
        "color": "bg-emerald-300"
      },
      {
        "label": "Binding clause",
        "text": "binding international safeguards",
        "color": "bg-yellow-300"
      },
      {
        "label": "Scope",
        "text": "on autonomous cyber warfare.",
        "color": "bg-orange-300"
      }
    ]
  },
  "teens:c-teens-masters-6": {
    "patternName": "Comparative Media Analysis & Ideological Framing",
    "variant": "affirmative",
    "title": "Build Framing Deconstruction / Arma Deconstrucción de Framing",
    "instructions": "Put the blocks in order to analyze subtle ideological bias in journalism.",
    "prompt": "Subtle linguistic framing choices influence public perception of geopolitical crises.",
    "learningOpportunity": "Analyze how media framing subtly manufactures public perception.",
    "difficulty": "challenge",
    "accentColor": "from-slate-800 to-teal-950",
    "parts": [
      {
        "label": "Subject",
        "text": "Subtle linguistic framing choices",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & object",
        "text": "influence public perception",
        "color": "bg-violet-300"
      },
      {
        "label": "Scope",
        "text": "of geopolitical crises.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-7": {
    "patternName": "Research Seminar & Scholarly Synthesis",
    "variant": "affirmative",
    "title": "Build Scholarly Synthesis / Arma Síntesis Académica",
    "instructions": "Put the blocks in order to synthesize divergent scholarly literature.",
    "prompt": "Synthesizing divergent academic perspectives reveals common underlying theoretical foundations.",
    "learningOpportunity": "Use gerund phrase subjects (Synthesizing...) in scholarly literature reviews.",
    "difficulty": "challenge",
    "accentColor": "from-emerald-800 to-slate-950",
    "parts": [
      {
        "label": "Gerund synthesis phrase",
        "text": "Synthesizing divergent academic perspectives",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & theoretical object",
        "text": "reveals common underlying theoretical foundations.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-8": {
    "patternName": "Content Production Studio & Documentary Pacing",
    "variant": "affirmative",
    "title": "Build Documentary Narrative / Arma Narrativa Documental",
    "instructions": "Put the blocks in order to structure an investigative documentary hook.",
    "prompt": "Behind the glossy promotional marketing lies a complex investigative reality.",
    "learningOpportunity": "Employ poetic spatial inversion (Behind... lies...) for investigative hooks.",
    "difficulty": "challenge",
    "accentColor": "from-amber-800 to-indigo-950",
    "parts": [
      {
        "label": "Prepositional inversion",
        "text": "Behind the glossy promotional marketing",
        "color": "bg-emerald-300"
      },
      {
        "label": "Verb",
        "text": "lies",
        "color": "bg-indigo-300"
      },
      {
        "label": "Inverted subject",
        "text": "a complex investigative reality.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-9": {
    "patternName": "Global Mega-Trends: Superintelligence & Bioethics",
    "variant": "affirmative",
    "title": "Build Existential Governance / Arma Gobernanza Existencial",
    "instructions": "Put the blocks in order to articulate existential technology governance.",
    "prompt": "Governing transformative artificial intelligence requires unprecedented international collaboration.",
    "learningOpportunity": "Formulate high-level planetary risk governance statements.",
    "difficulty": "challenge",
    "accentColor": "from-purple-900 to-slate-950",
    "parts": [
      {
        "label": "Gerund governance subject",
        "text": "Governing transformative artificial intelligence",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb & imperative requirement",
        "text": "requires unprecedented international collaboration.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-masters-10": {
    "patternName": "C2 Fluency Mastery & Global Oratory Summit",
    "variant": "affirmative",
    "title": "Build C2 Master Oratory / Arma Oratoria Maestra C2",
    "instructions": "Put the blocks in order to deliver your final C2 Grand Chancellor oration.",
    "prompt": "True linguistic mastery transcends grammatical precision to articulate transformative visions for humanity.",
    "learningOpportunity": "Deliver an inspiring capstone graduation speech synthesizing C2 fluency.",
    "difficulty": "challenge",
    "accentColor": "from-slate-900 to-indigo-950",
    "parts": [
      {
        "label": "Subject & verb",
        "text": "True linguistic mastery transcends",
        "color": "bg-cyan-300"
      },
      {
        "label": "Benchmark object",
        "text": "grammatical precision",
        "color": "bg-yellow-300"
      },
      {
        "label": "Infinitive transformative vision",
        "text": "to articulate transformative visions for humanity.",
        "color": "bg-emerald-300"
      }
    ]
  }
};

export function getCustomClassStructure(
  audience: 'kids' | 'teens' | 'adults',
  classId: string
): CustomClassStructure | null {
  const directKey = `${audience}:${classId}`;
  if (CLASS_STRUCTURE_MAP[directKey]) return CLASS_STRUCTURE_MAP[directKey];

  if (CLASS_STRUCTURE_MAP[`teens:${classId}`]) return CLASS_STRUCTURE_MAP[`teens:${classId}`];
  if (CLASS_STRUCTURE_MAP[`adults:${classId}`]) return CLASS_STRUCTURE_MAP[`adults:${classId}`];
  if (CLASS_STRUCTURE_MAP[`kids:${classId}`]) return CLASS_STRUCTURE_MAP[`kids:${classId}`];

  return null;
}
