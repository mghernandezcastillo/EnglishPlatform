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
    "instructions": "Put the blocks in order to ask a new classmate their name and how they are.",
    "prompt": "Hello! What is your name and how are you?",
    "learningOpportunity": "Form natural English greetings and introduction questions using What + is + your name + and + how are you.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-indigo-600",
    "parts": [
      {
        "label": "Greeting",
        "text": "Hello!",
        "color": "bg-emerald-300"
      },
      {
        "label": "Question Word & To Be",
        "text": "What is",
        "color": "bg-cyan-300"
      },
      {
        "label": "Identity",
        "text": "your name",
        "color": "bg-indigo-300"
      },
      {
        "label": "Feeling Inquiry",
        "text": "and how are you?",
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
        "label": "Age Question",
        "text": "How old are you,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Birthday Query",
        "text": "when is your birthday?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-3": {
    "patternName": "Family & Squad",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe who you live with and your sibling.",
    "prompt": "I live with my parents and my brother is funny.",
    "learningOpportunity": "Describe family households using I live with + parents + possessive brother.",
    "difficulty": "easy",
    "accentColor": "from-purple-500 to-pink-600",
    "parts": [
      {
        "label": "Subject & Action",
        "text": "I live with",
        "color": "bg-cyan-300"
      },
      {
        "label": "Family Nucleus",
        "text": "my parents",
        "color": "bg-emerald-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Sibling Description",
        "text": "my brother is super funny.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-4": {
    "patternName": "Food, Drinks & Snacks",
    "variant": "question",
    "title": "Build the Polite Order / Arma el Pedido",
    "instructions": "Put the blocks in order to politely order food and drinks at a counter.",
    "prompt": "Can I have one large pizza and cold lemonade, please?",
    "learningOpportunity": "Politely order combos using Can I have + food item + drink + please.",
    "difficulty": "easy",
    "accentColor": "from-amber-500 to-orange-600",
    "parts": [
      {
        "label": "Polite Request",
        "text": "Can I have",
        "color": "bg-emerald-300"
      },
      {
        "label": "Main Dish",
        "text": "one large pizza",
        "color": "bg-cyan-300"
      },
      {
        "label": "Drink",
        "text": "and cold lemonade,",
        "color": "bg-indigo-300"
      },
      {
        "label": "Politeness",
        "text": "please?",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-5": {
    "patternName": "Daily Routine & Time",
    "variant": "affirmative",
    "title": "Build the Routine / Arma la Rutina",
    "instructions": "Put the blocks in order to describe your morning and afternoon routine.",
    "prompt": "I wake up at six thirty and study in the afternoon.",
    "learningOpportunity": "Sequence daily habits with wake up at + time + study in the afternoon.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-indigo-600",
    "parts": [
      {
        "label": "Morning Action",
        "text": "I wake up",
        "color": "bg-cyan-300"
      },
      {
        "label": "Exact Time",
        "text": "at six thirty AM",
        "color": "bg-emerald-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Afternoon Habit",
        "text": "study English in the afternoon.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-6": {
    "patternName": "Clothes & Streetwear",
    "variant": "affirmative",
    "title": "Build the Outfit / Arma el Outfit",
    "instructions": "Put the blocks in order to describe your casual streetwear look.",
    "prompt": "I am wearing an oversized black hoodie and white sneakers.",
    "learningOpportunity": "Apply color adjective before noun + plural kicks (hoodie + sneakers).",
    "difficulty": "easy",
    "accentColor": "from-fuchsia-500 to-purple-600",
    "parts": [
      {
        "label": "Action",
        "text": "I am wearing",
        "color": "bg-cyan-300"
      },
      {
        "label": "Top (Color + Noun)",
        "text": "an oversized black hoodie",
        "color": "bg-violet-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Footwear (Plural)",
        "text": "comfortable white sneakers.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-7": {
    "patternName": "Tech, Social Media & Hobbies",
    "variant": "affirmative",
    "title": "Build the Habit / Arma el Hábito Tech",
    "instructions": "Put the blocks in order to describe your daily digital routine.",
    "prompt": "I always chat on Discord and listen to music on Spotify.",
    "learningOpportunity": "Place frequency adverbs before action verbs with online apps.",
    "difficulty": "easy",
    "accentColor": "from-indigo-500 to-cyan-600",
    "parts": [
      {
        "label": "Frequency & App 1",
        "text": "I always chat on Discord",
        "color": "bg-indigo-300"
      },
      {
        "label": "Connector",
        "text": "and",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Music Action & App 2",
        "text": "listen to music on Spotify.",
        "color": "bg-emerald-300"
      }
    ]
  },
  "teens:c-teens-basic-zero-8": {
    "patternName": "Abilities & Sports (Can / Can't)",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Habilidad",
    "instructions": "Put the blocks in order to contrast what you can do with what you are learning.",
    "prompt": "I can ride a bike fast, but I can't skateboard yet.",
    "learningOpportunity": "Contrast abilities using modal can vs can't with coordinating conjunction but.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-teal-600",
    "parts": [
      {
        "label": "Positive Ability",
        "text": "I can ride a bike fast,",
        "color": "bg-emerald-300"
      },
      {
        "label": "Contrast Word",
        "text": "but",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Negative Ability",
        "text": "I can't skateboard yet.",
        "color": "bg-rose-300"
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
    "patternName": "People in Your Circle & Personality",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your best friend's creative personality.",
    "prompt": "My best friend Leo has a creative personality and great energy.",
    "learningOpportunity": "Use HAS with third-person subjects and combine with personality adjectives.",
    "difficulty": "easy",
    "accentColor": "from-indigo-500 to-purple-700",
    "parts": [
      {
        "label": "Subject",
        "text": "My best friend Leo",
        "color": "bg-cyan-300"
      },
      {
        "label": "Verb HAS",
        "text": "has a creative",
        "color": "bg-emerald-300"
      },
      {
        "label": "Personality",
        "text": "personality",
        "color": "bg-violet-300"
      },
      {
        "label": "Energy Vibe",
        "text": "and great energy.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-1-2": {
    "patternName": "Healthy Choices with Because",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to explain why you choose healthy food for sports.",
    "prompt": "I choose fresh fruit and water because I want high energy.",
    "learningOpportunity": "Connect healthy food choices with personal goals using BECAUSE.",
    "difficulty": "easy",
    "accentColor": "from-teal-500 to-emerald-700",
    "parts": [
      {
        "label": "Action & Food",
        "text": "I choose fresh fruit",
        "color": "bg-emerald-300"
      },
      {
        "label": "Drink",
        "text": "and cold water",
        "color": "bg-cyan-300"
      },
      {
        "label": "Reason Connector",
        "text": "because",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Energy Clause",
        "text": "I want high energy.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-1-3": {
    "patternName": "Feelings & Causal Reasons",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to explain your emotion using BECAUSE.",
    "prompt": "I feel super relieved because we finished our English presentation.",
    "learningOpportunity": "Connect emotions with reasons using I feel + adjective + because + clause.",
    "difficulty": "easy",
    "accentColor": "from-rose-500 to-pink-700",
    "parts": [
      {
        "label": "Emotion state",
        "text": "I feel super relieved",
        "color": "bg-pink-300"
      },
      {
        "label": "Causal connector",
        "text": "because we finished",
        "color": "bg-violet-300"
      },
      {
        "label": "Project detail",
        "text": "our English presentation.",
        "color": "bg-cyan-300"
      }
    ]
  },
  "teens:c-teens-basic-1-4": {
    "patternName": "School Subjects & Likes",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your favorite school class and why you enjoy it.",
    "prompt": "I love Computer Science because we code awesome video games.",
    "learningOpportunity": "Express subject preferences with I love/enjoy + subject + because + reason.",
    "difficulty": "easy",
    "accentColor": "from-blue-500 to-cyan-700",
    "parts": [
      {
        "label": "Subject preference",
        "text": "I love Computer Science",
        "color": "bg-cyan-300"
      },
      {
        "label": "Causal connector",
        "text": "because we code",
        "color": "bg-violet-300"
      },
      {
        "label": "Lab activity",
        "text": "awesome video games.",
        "color": "bg-emerald-300"
      }
    ]
  },
  "teens:c-teens-basic-1-5": {
    "patternName": "Daily Habits & Adverbs of Frequency",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to narrar a morning routine with ALWAYS.",
    "prompt": "First I always wake up early and organize my study schedule.",
    "learningOpportunity": "Use sequence words (First) and adverbs of frequency (always) before the main verb.",
    "difficulty": "easy",
    "accentColor": "from-amber-500 to-orange-700",
    "parts": [
      {
        "label": "Sequence & frequency",
        "text": "First I always wake up",
        "color": "bg-amber-300"
      },
      {
        "label": "Time modifier",
        "text": "early and organize",
        "color": "bg-orange-300"
      },
      {
        "label": "Daily plan",
        "text": "my study schedule.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-1-6": {
    "patternName": "Sports with Play, Go & Do",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your weekend sports activities.",
    "prompt": "On Saturdays I go cycling and play soccer with my squad.",
    "learningOpportunity": "Use GO with -ING activities and PLAY with ball sports and squads.",
    "difficulty": "easy",
    "accentColor": "from-emerald-500 to-teal-700",
    "parts": [
      {
        "label": "Time & GO activity",
        "text": "On Saturdays I go cycling",
        "color": "bg-emerald-300"
      },
      {
        "label": "PLAY sport",
        "text": "and play soccer",
        "color": "bg-teal-300"
      },
      {
        "label": "Squad group",
        "text": "with my squad.",
        "color": "bg-cyan-300"
      }
    ]
  },
  "teens:c-teens-basic-1-7": {
    "patternName": "Weather & Streetwear Matching",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to match your outfit to rainy weather.",
    "prompt": "It is raining heavily outside, so I am wearing my warm hoodie.",
    "learningOpportunity": "Connect weather conditions with present continuous outfit descriptions (I am wearing).",
    "difficulty": "easy",
    "accentColor": "from-sky-500 to-blue-700",
    "parts": [
      {
        "label": "Weather condition",
        "text": "It is raining heavily outside,",
        "color": "bg-sky-300"
      },
      {
        "label": "Connector & wearing",
        "text": "so I am wearing",
        "color": "bg-indigo-300"
      },
      {
        "label": "Clothing item",
        "text": "my warm hoodie.",
        "color": "bg-cyan-300"
      }
    ]
  },
  "teens:c-teens-basic-1-8": {
    "patternName": "City Landmarks & Directions",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to locate a city spot using NEXT TO and ACROSS FROM.",
    "prompt": "The new bubble tea shop is next to the cinema, across from the park.",
    "learningOpportunity": "Combine multiple prepositions of place to give precise urban directions.",
    "difficulty": "easy",
    "accentColor": "from-violet-500 to-purple-700",
    "parts": [
      {
        "label": "Place & next to",
        "text": "The new bubble tea shop is next to the cinema,",
        "color": "bg-violet-300"
      },
      {
        "label": "Across preposition",
        "text": "across from",
        "color": "bg-purple-300"
      },
      {
        "label": "Landmark reference",
        "text": "the park.",
        "color": "bg-emerald-300"
      }
    ]
  },
  "teens:c-teens-basic-1-9": {
    "patternName": "Tech Gadgets & Modals",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to explain how to connect earbuds with CAN.",
    "prompt": "You can connect your wireless earbuds easily through Bluetooth.",
    "learningOpportunity": "Use CAN + base verb + adverb to give clear digital instructions.",
    "difficulty": "easy",
    "accentColor": "from-teal-500 to-cyan-700",
    "parts": [
      {
        "label": "Modal CAN action",
        "text": "You can connect",
        "color": "bg-teal-300"
      },
      {
        "label": "Digital gadget",
        "text": "your wireless earbuds",
        "color": "bg-cyan-300"
      },
      {
        "label": "Connectivity channel",
        "text": "easily through Bluetooth.",
        "color": "bg-blue-300"
      }
    ]
  },
  "teens:c-teens-basic-1-10": {
    "patternName": "Polite Requests for Trip Planning",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to book group tickets with WOULD LIKE TO.",
    "prompt": "We would like to book four tickets for the amusement park this Saturday.",
    "learningOpportunity": "Use polite request formula We would like to book + tickets + for destination + time.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-pink-700",
    "parts": [
      {
        "label": "Polite intention",
        "text": "We would like to book",
        "color": "bg-indigo-300"
      },
      {
        "label": "Tickets quantity",
        "text": "four tickets for the",
        "color": "bg-purple-300"
      },
      {
        "label": "Destination & date",
        "text": "amusement park this Saturday.",
        "color": "bg-pink-300"
      }
    ]
  },
  "teens:c-teens-basic-2-1": {
    "patternName": "Wildlife & Animal Abilities with CAN",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe an animal superpower and habitat.",
    "prompt": "The Andean condor can fly at high altitudes over mountains.",
    "learningOpportunity": "Express animal abilities with modal CAN + base verb.",
    "difficulty": "medium",
    "accentColor": "from-teal-600 to-emerald-700",
    "parts": [
      {
        "label": "Animal Subject",
        "text": "The Andean condor",
        "color": "bg-cyan-300"
      },
      {
        "label": "Ability with CAN",
        "text": "can fly at high",
        "color": "bg-emerald-300"
      },
      {
        "label": "Altitude & habitat",
        "text": "altitudes over mountains.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-2": {
    "patternName": "Room Layout with THERE IS & Prepositions",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe bedroom furniture and spatial location.",
    "prompt": "There is a wide desk next to the window with floating shelves.",
    "learningOpportunity": "Use There is + singular noun + prepositions of place (next to, with).",
    "difficulty": "easy",
    "accentColor": "from-purple-600 to-indigo-700",
    "parts": [
      {
        "label": "Existence phrase",
        "text": "There is a wide desk",
        "color": "bg-cyan-300"
      },
      {
        "label": "Spatial preposition",
        "text": "next to the window",
        "color": "bg-indigo-300"
      },
      {
        "label": "Feature modifier",
        "text": "with floating shelves.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-3": {
    "patternName": "City Commuting with GO BY & Bike Lanes",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe your daily transit route by bicycle.",
    "prompt": "I go to school by bicycle along the bike lane and arrive on time.",
    "learningOpportunity": "Master GO BY + transport mode and arrival expressions.",
    "difficulty": "easy",
    "accentColor": "from-blue-600 to-cyan-700",
    "parts": [
      {
        "label": "Subject & route",
        "text": "I go to school",
        "color": "bg-emerald-300"
      },
      {
        "label": "Transport mode",
        "text": "by bicycle along the bike lane",
        "color": "bg-cyan-300"
      },
      {
        "label": "Punctuality phrase",
        "text": "and arrive on time.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-4": {
    "patternName": "Future Careers with WANT TO BE & BECAUSE",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to express career aspirations and passion.",
    "prompt": "I want to be a software engineer because I love developing video games.",
    "learningOpportunity": "Form career goals with want to be a/an + justification with because.",
    "difficulty": "medium",
    "accentColor": "from-indigo-600 to-purple-700",
    "parts": [
      {
        "label": "Career goal",
        "text": "I want to be a software engineer",
        "color": "bg-cyan-300"
      },
      {
        "label": "Causal connector",
        "text": "because",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Passion reason",
        "text": "I love developing video games.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-5": {
    "patternName": "Talents & Superpowers with Degree Adverbs",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe musical and coding talents.",
    "prompt": "Lucas can play the electric guitar and code reactive lights very well.",
    "learningOpportunity": "Combine multiple CAN abilities with degree adverb very well.",
    "difficulty": "medium",
    "accentColor": "from-fuchsia-600 to-pink-700",
    "parts": [
      {
        "label": "Subject & musical ability",
        "text": "Lucas can play the electric guitar",
        "color": "bg-cyan-300"
      },
      {
        "label": "Digital ability",
        "text": "and code reactive lights",
        "color": "bg-indigo-300"
      },
      {
        "label": "Degree adverb",
        "text": "very well.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-6": {
    "patternName": "Lab Safety Rules with MUST",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to state a mandatory school lab safety rule.",
    "prompt": "Students must wear safety goggles in the robotics laboratory.",
    "learningOpportunity": "Use MUST + base verb for strict institutional safety rules.",
    "difficulty": "easy",
    "accentColor": "from-amber-600 to-orange-700",
    "parts": [
      {
        "label": "Subject & modal",
        "text": "Students must wear",
        "color": "bg-orange-300"
      },
      {
        "label": "Safety equipment",
        "text": "safety goggles",
        "color": "bg-cyan-300"
      },
      {
        "label": "Location",
        "text": "in the robotics laboratory.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-7": {
    "patternName": "Healthy Routines with Adverbs of Frequency",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to describe athletic habits and energy boost.",
    "prompt": "I usually go cycling four times a week because it boosts my energy.",
    "learningOpportunity": "Position frequency adverb (usually) before main verb + benefit clause.",
    "difficulty": "medium",
    "accentColor": "from-teal-600 to-emerald-700",
    "parts": [
      {
        "label": "Frequency & Sport",
        "text": "I usually go cycling",
        "color": "bg-emerald-300"
      },
      {
        "label": "Time expression",
        "text": "four times a week",
        "color": "bg-cyan-300"
      },
      {
        "label": "Benefit clause",
        "text": "because it boosts my energy.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-8": {
    "patternName": "Weekend Squad Plans with LET'S",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to coordinate a meeting point and time with friends.",
    "prompt": "Let's meet in front of the cinema ticket booth at 3:00 PM sharp.",
    "learningOpportunity": "Use LET'S + meet + spatial preposition (in front of) + exact time.",
    "difficulty": "easy",
    "accentColor": "from-purple-600 to-indigo-700",
    "parts": [
      {
        "label": "Invitation proposal",
        "text": "Let's meet in front of",
        "color": "bg-violet-300"
      },
      {
        "label": "Meeting location",
        "text": "the cinema ticket booth",
        "color": "bg-cyan-300"
      },
      {
        "label": "Exact time",
        "text": "at 3:00 PM sharp.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-9": {
    "patternName": "Media Reviews with IN MY OPINION & BECAUSE",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to deliver an impact review of an animated series.",
    "prompt": "In my opinion, this series is a masterpiece because the animation is breathtaking.",
    "learningOpportunity": "Structure critical reviews using In my opinion + noun + masterpiece + because.",
    "difficulty": "medium",
    "accentColor": "from-pink-600 to-purple-700",
    "parts": [
      {
        "label": "Opinion starter",
        "text": "In my opinion,",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Subject & rating",
        "text": "this series is a masterpiece",
        "color": "bg-cyan-300"
      },
      {
        "label": "Justification",
        "text": "because the animation is breathtaking.",
        "color": "bg-yellow-300"
      }
    ]
  },
  "teens:c-teens-basic-2-10": {
    "patternName": "Level 2 Capstone: Fluency & Growth",
    "variant": "affirmative",
    "title": "Build the Sentence / Arma la Oración",
    "instructions": "Put the blocks in order to celebrate your Level 2 communication milestones.",
    "prompt": "We can express our career goals and communicate with fluency.",
    "learningOpportunity": "Celebrate complete Level 2 synthesis with modal CAN + compound predicate.",
    "difficulty": "medium",
    "accentColor": "from-amber-600 to-yellow-700",
    "parts": [
      {
        "label": "Subject & ability",
        "text": "We can express",
        "color": "bg-cyan-300"
      },
      {
        "label": "Goal object",
        "text": "our career goals",
        "color": "bg-indigo-300"
      },
      {
        "label": "Fluency achievement",
        "text": "and communicate with fluency.",
        "color": "bg-yellow-300"
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
    "patternName": "Past Continuous & Interrupted Actions (When/While)",
    "variant": "affirmative",
    "title": "Build Suspense Story / Arma Historia de Suspenso",
    "instructions": "Put the blocks in order to describe an ongoing action interrupted by a sudden event.",
    "prompt": "We were setting up camp when it suddenly started raining.",
    "learningOpportunity": "Use past continuous (was/were + -ing) + when + past simple for narrative interruptions.",
    "difficulty": "medium",
    "accentColor": "from-rose-600 to-amber-800",
    "parts": [
      {
        "label": "Ongoing past action",
        "text": "We were setting up camp",
        "color": "bg-cyan-300"
      },
      {
        "label": "Interruption connector",
        "text": "when",
        "color": "bg-fuchsia-300"
      },
      {
        "label": "Sudden past event",
        "text": "it suddenly started raining.",
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
  },

  // ==================== LEVEL 4 (TEENS BASIC 4) ====================
  "c-teens-basic-4-1": [
    {
      id: "c-teens-basic-4-1-sent-1",
      type: "affirmative",
      en: "In my opinion learning English opens incredible global opportunities.",
      es: "En mi opinión aprender inglés abre increíbles oportunidades globales. (+)",
      parts: ["In my opinion","learning English","opens incredible","global opportunities."],
      audioText: "In my opinion learning English opens incredible global opportunities.",
      structureNotes: "Class 1: My Opinions & Perspectives - Practice 1"
    },
    {
      id: "c-teens-basic-4-1-sent-2",
      type: "negative",
      en: "I do not agree with banning smartphones at school.",
      es: "Yo no estoy de acuerdo con prohibir los celulares en el colegio. (-)",
      parts: ["I do not agree","with banning","smartphones","at school."],
      audioText: "I do not agree with banning smartphones at school.",
      structureNotes: "Class 1: My Opinions & Perspectives - Practice 2"
    },
    {
      id: "c-teens-basic-4-1-sent-3",
      type: "question",
      en: "What is your opinion on the impact of artificial intelligence?",
      es: "¿Cuál es tu opinión sobre el impacto de la inteligencia artificial? (?)",
      parts: ["What is your opinion","on the impact of","artificial","intelligence?"],
      audioText: "What is your opinion on the impact of artificial intelligence?",
      structureNotes: "Class 1: My Opinions & Perspectives - Practice 3"
    }
  ],

  "c-teens-basic-4-2": [
    {
      id: "c-teens-basic-4-2-sent-1",
      type: "affirmative",
      en: "You should turn off screens half an hour before sleeping.",
      es: "Tú deberías apagar las pantallas media hora antes de dormir. (+)",
      parts: ["You should","turn off screens","half an hour","before sleeping."],
      audioText: "You should turn off screens half an hour before sleeping.",
      structureNotes: "Class 2: Giving Good Advice - Practice 1"
    },
    {
      id: "c-teens-basic-4-2-sent-2",
      type: "negative",
      en: "You should not leave all homework for Sunday midnight.",
      es: "Tú no deberías dejar todas las tareas para el domingo a medianoche. (-)",
      parts: ["You should not","leave all homework","for Sunday","midnight."],
      audioText: "You should not leave all homework for Sunday midnight.",
      structureNotes: "Class 2: Giving Good Advice - Practice 2"
    },
    {
      id: "c-teens-basic-4-2-sent-3",
      type: "question",
      en: "What should I do to overcome exam stress?",
      es: "¿Qué debería hacer yo para superar el estrés de los exámenes? (?)",
      parts: ["What should I do","to overcome","exam","stress?"],
      audioText: "What should I do to overcome exam stress?",
      structureNotes: "Class 2: Giving Good Advice - Practice 3"
    }
  ],

  "c-teens-basic-4-3": [
    {
      id: "c-teens-basic-4-3-sent-1",
      type: "affirmative",
      en: "If you heat water to one hundred degrees it boils and evaporates.",
      es: "Si tú calientas agua a cien grados hierve y se evapora. (+)",
      parts: ["If you heat water","to one hundred degrees","it boils and","evaporates."],
      audioText: "If you heat water to one hundred degrees it boils and evaporates.",
      structureNotes: "Class 3: Conditions & Scientific Facts (Zero Conditional) - Practice 1"
    },
    {
      id: "c-teens-basic-4-3-sent-2",
      type: "negative",
      en: "If plants do not receive water they cannot survive.",
      es: "Si las plantas no reciben agua ellas no pueden sobrevivir. (-)",
      parts: ["If plants do not","receive water","they cannot","survive."],
      audioText: "If plants do not receive water they cannot survive.",
      structureNotes: "Class 3: Conditions & Scientific Facts (Zero Conditional) - Practice 2"
    },
    {
      id: "c-teens-basic-4-3-sent-3",
      type: "question",
      en: "What happens if you mix blue paint with yellow?",
      es: "¿Qué pasa si tú mezclas pintura azul con amarillo? (?)",
      parts: ["What happens if","you mix blue","paint with","yellow?"],
      audioText: "What happens if you mix blue paint with yellow?",
      structureNotes: "Class 3: Conditions & Scientific Facts (Zero Conditional) - Practice 3"
    }
  ],

  "c-teens-basic-4-4": [
    {
      id: "c-teens-basic-4-4-sent-1",
      type: "affirmative",
      en: "To be honest that new game update is incredible.",
      es: "Para ser sincero esa nueva actualización del juego es increíble. (+)",
      parts: ["To be honest","that new game","update is","incredible."],
      audioText: "To be honest that new game update is incredible.",
      structureNotes: "Class 4: Messaging, Texting & Online Communication - Practice 1"
    },
    {
      id: "c-teens-basic-4-4-sent-2",
      type: "negative",
      en: "Please do not leave me on read when we organize the project.",
      es: "Por favor no me dejes en visto cuando organicemos el proyecto. (-)",
      parts: ["Please do not","leave me on read","when we organize","the project."],
      audioText: "Please do not leave me on read when we organize the project.",
      structureNotes: "Class 4: Messaging, Texting & Online Communication - Practice 2"
    },
    {
      id: "c-teens-basic-4-4-sent-3",
      type: "question",
      en: "Are you free right now to hop on the Discord call?",
      es: "¿Estás libre justo ahora para entrar a la llamada de Discord? (?)",
      parts: ["Are you free","right now to","hop on the","Discord call?"],
      audioText: "Are you free right now to hop on the Discord call?",
      structureNotes: "Class 4: Messaging, Texting & Online Communication - Practice 3"
    }
  ],

  "c-teens-basic-4-5": [
    {
      id: "c-teens-basic-4-5-sent-1",
      type: "affirmative",
      en: "If I practice every day I will speak English with confidence.",
      es: "Si yo practico todos los días yo hablaré inglés con confianza. (+)",
      parts: ["If I practice","every day","I will speak English","with confidence."],
      audioText: "If I practice every day I will speak English with confidence.",
      structureNotes: "Class 5: Future Possibilities & Consequences (First Conditional) - Practice 1"
    },
    {
      id: "c-teens-basic-4-5-sent-2",
      type: "negative",
      en: "If you do not sleep well you will not have energy for the match.",
      es: "Si tú no duermes bien tú no tendrás energía para el partido. (-)",
      parts: ["If you do not","sleep well you","will not have energy","for the match."],
      audioText: "If you do not sleep well you will not have energy for the match.",
      structureNotes: "Class 5: Future Possibilities & Consequences (First Conditional) - Practice 2"
    },
    {
      id: "c-teens-basic-4-5-sent-3",
      type: "question",
      en: "What will you do if you win the international scholarship?",
      es: "¿Qué harás tú si ganas la beca de estudios internacionales? (?)",
      parts: ["What will you do","if you win the","international","scholarship?"],
      audioText: "What will you do if you win the international scholarship?",
      structureNotes: "Class 5: Future Possibilities & Consequences (First Conditional) - Practice 3"
    }
  ],

  "c-teens-basic-4-6": [
    {
      id: "c-teens-basic-4-6-sent-1",
      type: "affirmative",
      en: "Fiber optic internet is much faster than mobile data.",
      es: "El internet de fibra óptica es mucho más rápido que los datos móviles. (+)",
      parts: ["Fiber optic internet","is much faster","than mobile","data."],
      audioText: "Fiber optic internet is much faster than mobile data.",
      structureNotes: "Class 6: Comparatives & Superlatives (Tech, Movies & Sports) - Practice 1"
    },
    {
      id: "c-teens-basic-4-6-sent-2",
      type: "negative",
      en: "This movie is not as exciting as the first part.",
      es: "Esta película no es tan emocionante como la primera parte. (-)",
      parts: ["This movie is","not as exciting","as the first","part."],
      audioText: "This movie is not as exciting as the first part.",
      structureNotes: "Class 6: Comparatives & Superlatives (Tech, Movies & Sports) - Practice 2"
    },
    {
      id: "c-teens-basic-4-6-sent-3",
      type: "question",
      en: "What is the most popular video game of the year in the whole world?",
      es: "¿Cuál es el videojuego más popular del año en todo el mundo? (?)",
      parts: ["What is the","most popular video game","of the year","in the whole world?"],
      audioText: "What is the most popular video game of the year in the whole world?",
      structureNotes: "Class 6: Comparatives & Superlatives (Tech, Movies & Sports) - Practice 3"
    }
  ],

  "c-teens-basic-4-7": [
    {
      id: "c-teens-basic-4-7-sent-1",
      type: "affirmative",
      en: "Our internet connection is fast enough to stream video.",
      es: "Nuestra conexión de internet es suficientemente rápida para transmitir video. (+)",
      parts: ["Our internet connection","is fast enough","to stream","video."],
      audioText: "Our internet connection is fast enough to stream video.",
      structureNotes: "Class 7: Too & Enough: Problems and Solutions - Practice 1"
    },
    {
      id: "c-teens-basic-4-7-sent-2",
      type: "negative",
      en: "This smartphone is too expensive to buy with my savings.",
      es: "Este celular es demasiado costoso para comprarlo con mis ahorros. (-)",
      parts: ["This smartphone","is too expensive","to buy with","my savings."],
      audioText: "This smartphone is too expensive to buy with my savings.",
      structureNotes: "Class 7: Too & Enough: Problems and Solutions - Practice 2"
    },
    {
      id: "c-teens-basic-4-7-sent-3",
      type: "question",
      en: "Do we have enough time to finish the presentation?",
      es: "¿Tenemos nosotros suficiente tiempo para terminar la presentación? (?)",
      parts: ["Do we have","enough time","to finish the","presentation?"],
      audioText: "Do we have enough time to finish the presentation?",
      structureNotes: "Class 7: Too & Enough: Problems and Solutions - Practice 3"
    }
  ],

  "c-teens-basic-4-8": [
    {
      id: "c-teens-basic-4-8-sent-1",
      type: "affirmative",
      en: "You ought to apologize sincerely to clear the air.",
      es: "Tú deberías disculparte sinceramente para aclarar las cosas. (+)",
      parts: ["You ought to","apologize sincerely","to clear","the air."],
      audioText: "You ought to apologize sincerely to clear the air.",
      structureNotes: "Class 8: Giving Advice to Friends (Should, Shouldn't & Ought to) - Practice 1"
    },
    {
      id: "c-teens-basic-4-8-sent-2",
      type: "negative",
      en: "You had better not spread rumors about your classmates.",
      es: "Más vale que no difundas rumores sobre tus compañeros. (-)",
      parts: ["You had better not","spread rumors","about your","classmates."],
      audioText: "You had better not spread rumors about your classmates.",
      structureNotes: "Class 8: Giving Advice to Friends (Should, Shouldn't & Ought to) - Practice 2"
    },
    {
      id: "c-teens-basic-4-8-sent-3",
      type: "question",
      en: "How can we rebuild trust after a mistake?",
      es: "¿Cómo podemos nosotros reconstruir la confianza después de un error? (?)",
      parts: ["How can we","rebuild trust","after a","mistake?"],
      audioText: "How can we rebuild trust after a mistake?",
      structureNotes: "Class 8: Giving Advice to Friends (Should, Shouldn't & Ought to) - Practice 3"
    }
  ],

  "c-teens-basic-4-9": [
    {
      id: "c-teens-basic-4-9-sent-1",
      type: "affirmative",
      en: "I am writing to inquire about the exchange program requirements.",
      es: "Le escribo para consultar sobre los requisitos del programa de intercambio. (+)",
      parts: ["I am writing to","inquire about","the exchange program","requirements."],
      audioText: "I am writing to inquire about the exchange program requirements.",
      structureNotes: "Class 9: Informal vs Formal Messages, Emails & Digital Tone - Practice 1"
    },
    {
      id: "c-teens-basic-4-9-sent-2",
      type: "negative",
      en: "Please do not forget to attach the signed recommendation letter.",
      es: "Por favor no olvide adjuntar la carta de recomendación firmada. (-)",
      parts: ["Please do not forget","to attach the","signed recommendation","letter."],
      audioText: "Please do not forget to attach the signed recommendation letter.",
      structureNotes: "Class 9: Informal vs Formal Messages, Emails & Digital Tone - Practice 2"
    },
    {
      id: "c-teens-basic-4-9-sent-3",
      type: "question",
      en: "Could you please confirm if you received the attached document?",
      es: "¿Podría por favor confirmar si recibió el documento adjunto? (?)",
      parts: ["Could you please","confirm if you received","the attached","document?"],
      audioText: "Could you please confirm if you received the attached document?",
      structureNotes: "Class 9: Informal vs Formal Messages, Emails & Digital Tone - Practice 3"
    }
  ],

  "c-teens-basic-4-10": [
    {
      id: "c-teens-basic-4-10-sent-1",
      type: "affirmative",
      en: "If we work with discipline we will achieve all our goals.",
      es: "Si nosotros trabajamos con disciplina nosotros alcanzaremos todas nuestras metas. (+)",
      parts: ["If we work with","discipline we will","achieve all","our goals."],
      audioText: "If we work with discipline we will achieve all our goals.",
      structureNotes: "Class 10: Teen Leadership, Customer Service & Capstone Review - Practice 1"
    },
    {
      id: "c-teens-basic-4-10-sent-2",
      type: "negative",
      en: "We should not give up in the face of difficult challenges.",
      es: "Nosotros no deberíamos rendirnos ante los desafíos difíciles. (-)",
      parts: ["We should not","give up in the","face of difficult","challenges."],
      audioText: "We should not give up in the face of difficult challenges.",
      structureNotes: "Class 10: Teen Leadership, Customer Service & Capstone Review - Practice 2"
    },
    {
      id: "c-teens-basic-4-10-sent-3",
      type: "question",
      en: "What is the biggest achievement you reached in this Level Four?",
      es: "¿Cuál es el mayor logro que alcanzaste en este Nivel Cuatro? (?)",
      parts: ["What is the biggest","achievement you reached","in this Level","Four?"],
      audioText: "What is the biggest achievement you reached in this Level Four?",
      structureNotes: "Class 10: Teen Leadership, Customer Service & Capstone Review - Practice 3"
    }
  ],

  // ==================== LEVEL 0 (CLASSES 9-16) ====================
  "c-teens-basic-zero-9": [
    {
      id: "c-teens-basic-zero-9-sent-1",
      type: "affirmative",
      en: "I love playing online video games with my friends.",
      es: "A mí me encanta jugar videojuegos en línea con mis amigos. (+)",
      parts: ["I love playing","online video games","with my","friends."],
      audioText: "I love playing online video games with my friends.",
      structureNotes: "Class 9: My Hobbies & Free Time - Practice 1"
    },
    {
      id: "c-teens-basic-zero-9-sent-2",
      type: "negative",
      en: "I do not like waking up early on Sundays.",
      es: "A mí no me gusta levantarme temprano los domingos. (-)",
      parts: ["I do not like","waking up early","on","Sundays."],
      audioText: "I do not like waking up early on Sundays.",
      structureNotes: "Class 9: My Hobbies & Free Time - Practice 2"
    },
    {
      id: "c-teens-basic-zero-9-sent-3",
      type: "question",
      en: "What do you like doing in your free time?",
      es: "¿Qué te gusta hacer a ti en tus tiempos libres? (?)",
      parts: ["What do you","like doing in","your free","time?"],
      audioText: "What do you like doing in your free time?",
      structureNotes: "Class 9: My Hobbies & Free Time - Practice 3"
    }
  ],

  "c-teens-basic-zero-10": [
    {
      id: "c-teens-basic-zero-10-sent-1",
      type: "affirmative",
      en: "This is my brother and his name is Mateo.",
      es: "Este es mi hermano y su nombre es Mateo. (+)",
      parts: ["This is my brother","and his name","is","Mateo."],
      audioText: "This is my brother and his name is Mateo.",
      structureNotes: "Class 10: Family & Friends - Practice 1"
    },
    {
      id: "c-teens-basic-zero-10-sent-2",
      type: "negative",
      en: "She is not my sister she is my favorite cousin.",
      es: "Ella no es mi hermana ella es mi prima favorita. (-)",
      parts: ["She is not","my sister she","is my favorite","cousin."],
      audioText: "She is not my sister she is my favorite cousin.",
      structureNotes: "Class 10: Family & Friends - Practice 2"
    },
    {
      id: "c-teens-basic-zero-10-sent-3",
      type: "question",
      en: "Is that tall boy with the cap your older brother?",
      es: "¿Es ese chico alto con gorra tu hermano mayor? (?)",
      parts: ["Is that tall boy","with the cap","your older","brother?"],
      audioText: "Is that tall boy with the cap your older brother?",
      structureNotes: "Class 10: Family & Friends - Practice 3"
    }
  ],

  "c-teens-basic-zero-11": [
    {
      id: "c-teens-basic-zero-11-sent-1",
      type: "affirmative",
      en: "My last name is spelled V - A - R - G - A - S.",
      es: "Mi apellido se deletrea V - A - R - G - A - S. (+)",
      parts: ["My last name","is spelled","V - A - R","- G - A - S."],
      audioText: "My last name is spelled V - A - R - G - A - S.",
      structureNotes: "Class 11: Alphabet, Spelling & Social Usernames - Practice 1"
    },
    {
      id: "c-teens-basic-zero-11-sent-2",
      type: "negative",
      en: "My email does not have numbers or hyphens.",
      es: "Mi correo no tiene números ni guiones intermedios. (-)",
      parts: ["My email","does not have","numbers or","hyphens."],
      audioText: "My email does not have numbers or hyphens.",
      structureNotes: "Class 11: Alphabet, Spelling & Social Usernames - Practice 2"
    },
    {
      id: "c-teens-basic-zero-11-sent-3",
      type: "question",
      en: "How do you spell your Discord username?",
      es: "¿Cómo deletreas tú tu nombre de usuario en Discord? (?)",
      parts: ["How do you","spell your Discord","user","name?"],
      audioText: "How do you spell your Discord username?",
      structureNotes: "Class 11: Alphabet, Spelling & Social Usernames - Practice 3"
    }
  ],

  "c-teens-basic-zero-12": [
    {
      id: "c-teens-basic-zero-12-sent-1",
      type: "affirmative",
      en: "My name is Mariana I am fourteen years old and I live in Colombia.",
      es: "Mi nombre es Mariana tengo catorce años y vivo en Colombia. (+)",
      parts: ["My name is Mariana","I am fourteen","years old and","I live in Colombia."],
      audioText: "My name is Mariana I am fourteen years old and I live in Colombia.",
      structureNotes: "Class 12: Full Teen Profile: Age, Grade, City & Passions - Practice 1"
    },
    {
      id: "c-teens-basic-zero-12-sent-2",
      type: "negative",
      en: "I do not like waking up early on cold Mondays.",
      es: "A mí no me gusta levantarme temprano los lunes fríos. (-)",
      parts: ["I do not like","waking up early","on cold","Mondays."],
      audioText: "I do not like waking up early on cold Mondays.",
      structureNotes: "Class 12: Full Teen Profile: Age, Grade, City & Passions - Practice 2"
    },
    {
      id: "c-teens-basic-zero-12-sent-3",
      type: "question",
      en: "What grade are you in and what is your favorite hobby?",
      es: "¿En qué grado estás tú y cuál es tu pasatiempo favorito? (?)",
      parts: ["What grade are you in","and what is","your favorite","hobby?"],
      audioText: "What grade are you in and what is your favorite hobby?",
      structureNotes: "Class 12: Full Teen Profile: Age, Grade, City & Passions - Practice 3"
    }
  ],

  "c-teens-basic-zero-13": [
    {
      id: "c-teens-basic-zero-13-sent-1",
      type: "affirmative",
      en: "I am wearing a black hoodie and comfortable white sneakers.",
      es: "Yo llevo puesto un buzo negro y tenis blancos cómodos. (+)",
      parts: ["I am wearing","a black hoodie and","comfortable","white sneakers."],
      audioText: "I am wearing a black hoodie and comfortable white sneakers.",
      structureNotes: "Class 13: Clothes, Personal Style & Streetwear - Practice 1"
    },
    {
      id: "c-teens-basic-zero-13-sent-2",
      type: "negative",
      en: "I am not wearing a formal school uniform on weekends.",
      es: "Yo no llevo puesto uniforme escolar formal los fines de semana. (-)",
      parts: ["I am not wearing","a formal school","uniform on","weekends."],
      audioText: "I am not wearing a formal school uniform on weekends.",
      structureNotes: "Class 13: Clothes, Personal Style & Streetwear - Practice 2"
    },
    {
      id: "c-teens-basic-zero-13-sent-3",
      type: "question",
      en: "What clothes are you wearing to go to the party today?",
      es: "¿Qué ropa llevas puesta tú para ir a la fiesta hoy? (?)",
      parts: ["What clothes are","you wearing to go","to the party","today?"],
      audioText: "What clothes are you wearing to go to the party today?",
      structureNotes: "Class 13: Clothes, Personal Style & Streetwear - Practice 3"
    }
  ],

  "c-teens-basic-zero-14": [
    {
      id: "c-teens-basic-zero-14-sent-1",
      type: "affirmative",
      en: "This is my new English notebook to take notes.",
      es: "Este es mi cuaderno nuevo de inglés para tomar apuntes. (+)",
      parts: ["This is my new","English notebook","to take","notes."],
      audioText: "This is my new English notebook to take notes.",
      structureNotes: "Class 14: School Subjects & Classroom Life - Practice 1"
    },
    {
      id: "c-teens-basic-zero-14-sent-2",
      type: "negative",
      en: "That is not our classroom that is the teachers room.",
      es: "Esa no es nuestra aula esa es la sala de profesores. (-)",
      parts: ["That is not","our classroom that","is the teachers","room."],
      audioText: "That is not our classroom that is the teachers room.",
      structureNotes: "Class 14: School Subjects & Classroom Life - Practice 2"
    },
    {
      id: "c-teens-basic-zero-14-sent-3",
      type: "question",
      en: "Are these colored markers for the arts class?",
      es: "¿Son estos marcadores de colores para la clase de artes? (?)",
      parts: ["Are these","colored markers","for the","arts class?"],
      audioText: "Are these colored markers for the arts class?",
      structureNotes: "Class 14: School Subjects & Classroom Life - Practice 3"
    }
  ],

  "c-teens-basic-zero-15": [
    {
      id: "c-teens-basic-zero-15-sent-1",
      type: "affirmative",
      en: "I wake up at six thirty and have a delicious breakfast.",
      es: "Yo me despierto a las seis y media y tomo un desayuno delicioso. (+)",
      parts: ["I wake up","at six thirty and","have a delicious","breakfast."],
      audioText: "I wake up at six thirty and have a delicious breakfast.",
      structureNotes: "Class 15: Basic Daily Routine & Clock Time - Practice 1"
    },
    {
      id: "c-teens-basic-zero-15-sent-2",
      type: "negative",
      en: "I do not stay up late on school nights.",
      es: "Yo no me quedo despierto hasta tarde en noches de colegio. (-)",
      parts: ["I do not stay","up late on","school","nights."],
      audioText: "I do not stay up late on school nights.",
      structureNotes: "Class 15: Basic Daily Routine & Clock Time - Practice 2"
    },
    {
      id: "c-teens-basic-zero-15-sent-3",
      type: "question",
      en: "What time do you usually go to sleep on Sundays?",
      es: "¿A qué hora te vas a dormir tú usualmente los domingos? (?)",
      parts: ["What time do you","usually go to sleep","on","Sundays?"],
      audioText: "What time do you usually go to sleep on Sundays?",
      structureNotes: "Class 15: Basic Daily Routine & Clock Time - Practice 3"
    }
  ],

  "c-teens-basic-zero-16": [
    {
      id: "c-teens-basic-zero-16-sent-1",
      type: "affirmative",
      en: "Today we are proud Level Zero graduates in English.",
      es: "Hoy somos orgullosos graduados del Nivel Cero en inglés. (+)",
      parts: ["Today we are","proud Level Zero","graduates in","English."],
      audioText: "Today we are proud Level Zero graduates in English.",
      structureNotes: "Class 16: Level 0 Grand Review & Final Challenge 🏆 - Practice 1"
    },
    {
      id: "c-teens-basic-zero-16-sent-2",
      type: "negative",
      en: "We do not give up on difficult pronunciations.",
      es: "Nosotros no nos rendimos ante las pronunciaciones difíciles. (-)",
      parts: ["We do not give","up on difficult","pronun","ciations."],
      audioText: "We do not give up on difficult pronunciations.",
      structureNotes: "Class 16: Level 0 Grand Review & Final Challenge 🏆 - Practice 2"
    },
    {
      id: "c-teens-basic-zero-16-sent-3",
      type: "question",
      en: "Are you ready to conquer the adventures of Level One?",
      es: "¿Estás listo para conquistar las aventuras del Nivel Uno? (?)",
      parts: ["Are you ready to","conquer the adventures","of Level","One?"],
      audioText: "Are you ready to conquer the adventures of Level One?",
      structureNotes: "Class 16: Level 0 Grand Review & Final Challenge 🏆 - Practice 3"
    }
  ],
  "c-teens-inter-1": {
    classId: "c-teens-inter-1",
    title: "Class 1: My Life Experiences (Present Perfect)",
    description: "Aprende a hablar de tus grandes experiencias de vida, viajes y logros usando el Present Perfect con Have/Has + Participio Pasado y marcadores clave (ever, never, already, yet).",
    sentences: [
      {
            "id": "c-teens-inter-1-d1",
            "mode": "affirmative",
            "spanish": "Yo ya he visitado cinco parques nacionales en Colombia. (+)",
            "english": "I have already visited five national parks in Colombia.",
            "parts": [
                  {
                        "token": "I have already",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "visited five national",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "parks in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "Colombia.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-1-d2",
            "mode": "negative",
            "spanish": "Yo todavía no he probado paracaidismo en mi vida. (-)",
            "english": "I have not tried skydiving in my life yet.",
            "parts": [
                  {
                        "token": "I have not",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "tried skydiving in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "my life",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "yet.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-1-d3",
            "mode": "interrogative",
            "spanish": "¿Alguna vez has viajado tú en avión a otro país? (?)",
            "english": "Have you ever traveled on an airplane to another country?",
            "parts": [
                  {
                        "token": "Have you ever",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "traveled on an airplane",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "to another",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "country?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-2": {
    classId: "c-teens-inter-2",
    title: "Class 2: Teen Slang & Phrasal Verbs in Daily Conversations",
    description: "Domina los phrasal verbs más usados en la vida real de los jóvenes (hang out, chill out, figure out, turn down, catch up, run into) y expresiones auténticas de conversación fluida.",
    sentences: [
      {
            "id": "c-teens-inter-2-d1",
            "mode": "affirmative",
            "spanish": "A nosotros nos gusta parchar en el parque y relajarnos los viernes. (+)",
            "english": "We love to hang out in the park and chill out on Fridays.",
            "parts": [
                  {
                        "token": "We love to",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "hang out in the park",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "and chill out",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "on Fridays.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-2-d2",
            "mode": "negative",
            "spanish": "Yo tuve que rechazar la invitación para estudiar para mi examen. (-)",
            "english": "I had to turn down the invitation to study for my exam.",
            "parts": [
                  {
                        "token": "I had to turn",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "down the invitation",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "to study for",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "my exam.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-2-d3",
            "mode": "interrogative",
            "spanish": "¿Quieres encontrarte con nosotros para ponernos al día esta tarde? (?)",
            "english": "Do you want to meet up with us to catch up this afternoon?",
            "parts": [
                  {
                        "token": "Do you want to",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "meet up with us",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "to catch up",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "this afternoon?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-3": {
    classId: "c-teens-inter-3",
    title: "Class 3: Possibilities & Deductions (Must, Might, Can't)",
    description: "Aprende a deducir y sacar conclusiones lógicas sobre situaciones misteriosas según el nivel de certeza usando Must (99% seguro), Might/Could (50% posible) y Can't (0% imposible).",
    sentences: [
      {
            "id": "c-teens-inter-3-d1",
            "mode": "affirmative",
            "spanish": "Él ha estudiado diez horas seguidas él debe estar agotado. (+)",
            "english": "He has studied ten hours straight he must be exhausted.",
            "parts": [
                  {
                        "token": "He has studied",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "ten hours straight",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "he must be",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "exhausted.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-3-d2",
            "mode": "negative",
            "spanish": "Ese paquete no puede ser para mí porque no tiene mi nombre. (-)",
            "english": "That package can't be for me because it lacks my name.",
            "parts": [
                  {
                        "token": "That package can't",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "be for me because",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "it lacks",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "my name.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-3-d3",
            "mode": "interrogative",
            "spanish": "¿Podría esa luz extraña en el cielo ser un dron meteorológico? (?)",
            "english": "Could that strange light in the sky be a weather drone?",
            "parts": [
                  {
                        "token": "Could that strange",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "light in the sky",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "be a weather",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "drone?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-4": {
    classId: "c-teens-inter-4",
    title: "Class 4: If I Ruled the World (Second Conditional)",
    description: "Aprende a formular hipótesis imaginarias y situaciones irreales usando el Second Conditional (If + Past Simple, would + verbo base) para hablar de superpoderes, cambios mundiales y decisiones éticas.",
    sentences: [
      {
            "id": "c-teens-inter-4-d1",
            "mode": "affirmative",
            "spanish": "Si yo tuviera superpoderes yo protegería los océanos y los bosques. (+)",
            "english": "If I had superpowers I would protect the oceans and forests.",
            "parts": [
                  {
                        "token": "If I had superpowers",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "I would protect",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the oceans",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "and forests.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-4-d2",
            "mode": "negative",
            "spanish": "Si yo estuviera en tu lugar yo no rechazaría esa gran oportunidad. (-)",
            "english": "If I were in your place I wouldn't turn down that opportunity.",
            "parts": [
                  {
                        "token": "If I were in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "your place I wouldn't",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "turn down that",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "opportunity.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-4-d3",
            "mode": "interrogative",
            "spanish": "¿Qué harías tú si pudieras viajar en el tiempo al pasado? (?)",
            "english": "What would you do if you could travel back in time?",
            "parts": [
                  {
                        "token": "What would you do",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "if you could travel",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "back in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "time?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-5": {
    classId: "c-teens-inter-5",
    title: "Class 5: Agreeing & Disagreeing Respectfully",
    description: "Aprende el arte del debate diplomático en inglés: expresar acuerdos parciales, desacuerdos educados (I see your point, but...), contraargumentos sólidos y refutaciones respetuosas.",
    sentences: [
      {
            "id": "c-teens-inter-5-d1",
            "mode": "affirmative",
            "spanish": "Yo entiendo tu punto pero debemos considerar la privacidad de datos. (+)",
            "english": "I see your point but we must consider data privacy.",
            "parts": [
                  {
                        "token": "I see your point",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "but we must",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "consider data",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "privacy.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-5-d2",
            "mode": "negative",
            "spanish": "Yo discrepo respetuosamente porque la práctica en persona es insustituible. (-)",
            "english": "I respectfully disagree because in-person practice cannot be replaced.",
            "parts": [
                  {
                        "token": "I respectfully disagree",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "because in-person practice",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "cannot be",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "replaced.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-5-d3",
            "mode": "interrogative",
            "spanish": "¿Has considerado tú el impacto del tiempo en pantalla en los jóvenes? (?)",
            "english": "Have you considered the impact of screen time on teenagers?",
            "parts": [
                  {
                        "token": "Have you considered",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the impact of",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "screen time on",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "teenagers?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-6": {
    classId: "c-teens-inter-6",
    title: "Class 6: Podcast & Media Hosting Basics",
    description: "Aprende a conducir un podcast en inglés: ganchos de apertura (hooks), entrevistas dinámicas, preguntas de seguimiento, transiciones de locución y cierres profesionales.",
    sentences: [
      {
            "id": "c-teens-inter-6-d1",
            "mode": "affirmative",
            "spanish": "Bienvenidos de nuevo a nuestro show hoy tenemos un invitado muy especial. (+)",
            "english": "Welcome back to our show today we have a very special guest.",
            "parts": [
                  {
                        "token": "Welcome back to",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our show today we",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "have a very",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "special guest.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-6-d2",
            "mode": "negative",
            "spanish": "No olviden suscribirse a nuestro canal y quédense sintonizados para el episodio dos. (-)",
            "english": "Do not forget to subscribe and stay tuned for episode two.",
            "parts": [
                  {
                        "token": "Do not forget to",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "subscribe and stay",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "tuned for",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "episode two.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-6-d3",
            "mode": "interrogative",
            "spanish": "¿Qué consejo compartirías tú con los jóvenes que quieren emprender? (?)",
            "english": "What advice would you share with teens who want to innovate?",
            "parts": [
                  {
                        "token": "What advice would",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "you share with teens",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "who want to",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "innovate?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-7": {
    classId: "c-teens-inter-7",
    title: "Class 7: Present Perfect vs Present Perfect Continuous",
    description: "Aprende a contrastar acciones completadas (Present Perfect: I have painted the room) con acciones continuas en progreso que explican un resultado visible presente (Present Perfect Continuous: I have been painting all morning) usando for y since.",
    sentences: [
      {
            "id": "c-teens-inter-7-d1",
            "mode": "affirmative",
            "spanish": "Yo he estado estudiando inglés en esta academia durante dos años. (+)",
            "english": "I have been studying English at this academy for two years.",
            "parts": [
                  {
                        "token": "I have been studying",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "English at this academy",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "for two",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "years.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-7-d2",
            "mode": "negative",
            "spanish": "Ella no ha estado descansando porque ha estado entrenando sin parar. (-)",
            "english": "She has not been resting because she has been training non-stop.",
            "parts": [
                  {
                        "token": "She has not been",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "resting because she has",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "been training",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "non-stop.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-7-d3",
            "mode": "interrogative",
            "spanish": "¿Cuánto tiempo has estado tú programando videojuegos en tu tiempo libre? (?)",
            "english": "How long have you been programming video games in your free time?",
            "parts": [
                  {
                        "token": "How long have you",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "been programming video",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "games in your",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "free time?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-8": {
    classId: "c-teens-inter-8",
    title: "Class 8: Advanced Phrasal Verbs in Storytelling & Media",
    description: "Aprende phrasal verbs avanzados de alto impacto narrativo (bring about, look up to, end up, come across, stand out, pull off, work out) para contar historias emocionantes, giros de trama y logros en inglés.",
    sentences: [
      {
            "id": "c-teens-inter-8-d1",
            "mode": "affirmative",
            "spanish": "Contra todo pronóstico nuestro equipo logró una victoria increíble. (+)",
            "english": "Against all odds our team pulled off an incredible victory.",
            "parts": [
                  {
                        "token": "Against all odds",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our team pulled off",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "an incredible",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "victory.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-8-d2",
            "mode": "negative",
            "spanish": "Nosotros nos perdimos en el centro pero terminamos encontrando un lugar genial. (-)",
            "english": "We got lost downtown but ended up finding a great spot.",
            "parts": [
                  {
                        "token": "We got lost downtown",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "but ended up",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "finding a",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "great spot.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-8-d3",
            "mode": "interrogative",
            "spanish": "¿A qué figura admirable admiras tú más por su valentía y resiliencia? (?)",
            "english": "Which admirable figure do you look up to the most for courage?",
            "parts": [
                  {
                        "token": "Which admirable figure",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "do you look up to",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the most for",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "courage?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-9": {
    classId: "c-teens-inter-9",
    title: "Class 9: Past Modals of Deduction",
    description: "Aprende a deducir lo que ocurrió en el pasado según la evidencia física disponible usando Must have (99% certeza pasada), Might / Could have (50% posibilidad) y Can't / Couldn't have (0% imposibilidad pasada) + Participio Pasado.",
    sentences: [
      {
            "id": "c-teens-inter-9-d1",
            "mode": "affirmative",
            "spanish": "El suelo está empapado debe haber llovido fuertemente anoche. (+)",
            "english": "The ground is soaked it must have poured heavily last night.",
            "parts": [
                  {
                        "token": "The ground is soaked",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "it must have",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "poured heavily",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "last night.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-9-d2",
            "mode": "negative",
            "spanish": "Ellos no pudieron haber salido por la guerra porque no hay armas. (-)",
            "english": "They can't have left due to war because there are no weapons.",
            "parts": [
                  {
                        "token": "They can't have left",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "due to war because",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "there are",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "no weapons.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-9-d3",
            "mode": "interrogative",
            "spanish": "¿Pudieron los antiguos astrónomos haber predicho los eclipses solares? (?)",
            "english": "Could ancient astronomers have predicted solar eclipses?",
            "parts": [
                  {
                        "token": "Could ancient astronomers",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "have predicted",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "solar",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "eclipses?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-10": {
    classId: "c-teens-inter-10",
    title: "Class 10: Conditionals Synthesis & Time Clauses",
    description: "Domina la matriz completa de condicionales (Zero, First, Second) y conectores temporales avanzados (unless, as soon as, provided that, in case) para construir árboles de decisión estratégica en inglés.",
    sentences: [
      {
            "id": "c-teens-inter-10-d1",
            "mode": "affirmative",
            "spanish": "Nosotros no ganaremos el primer puesto a menos que practiquemos a diario. (+)",
            "english": "We will not win first place unless we practice daily.",
            "parts": [
                  {
                        "token": "We will not win",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "first place unless",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "we practice",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "daily.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-10-d2",
            "mode": "negative",
            "spanish": "Guarda tu código en la nube por si acaso tu computador se apaga. (-)",
            "english": "Save your code in the cloud in case your computer shuts down.",
            "parts": [
                  {
                        "token": "Save your code in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the cloud in case",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "your computer",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "shuts down.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-10-d3",
            "mode": "interrogative",
            "spanish": "¿Qué estrategia ejecutarás tú tan pronto como comience el torneo? (?)",
            "english": "What strategy will you execute as soon as the tournament begins?",
            "parts": [
                  {
                        "token": "What strategy will you",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "execute as soon as",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the tournament",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "begins?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-11": {
    classId: "c-teens-inter-11",
    title: "Class 11: Nuanced Opinions & Diplomacy in Debates",
    description: "Aprende el más alto nivel de oratoria y diplomacia en inglés: expresar opiniones con matices, conceder contraargumentos válidos (While it is true that..., nevertheless...), y alcanzar compromisos constructivos.",
    sentences: [
      {
            "id": "c-teens-inter-11-d1",
            "mode": "affirmative",
            "spanish": "Si bien las herramientas digitales ahorran tiempo debemos cuidar la conexión humana. (+)",
            "english": "While digital tools save time we must care for human connection.",
            "parts": [
                  {
                        "token": "While digital tools",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "save time we must",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "care for human",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "connection.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-11-d2",
            "mode": "negative",
            "spanish": "A pesar de las dificultades iniciales nuestra iniciativa estudiantil triunfó. (-)",
            "english": "Despite initial difficulties our student initiative triumphed.",
            "parts": [
                  {
                        "token": "Despite initial difficulties",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our student initiative",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "triumphed",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "proudly.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-11-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo podemos lograr un equilibrio justo entre la tecnología y la disciplina? (?)",
            "english": "How can we strike a fair balance between tech and discipline?",
            "parts": [
                  {
                        "token": "How can we strike",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "a fair balance between",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "tech and",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "discipline?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-inter-12": {
    classId: "c-teens-inter-12",
    title: "Class 12: Capstone Media Showcase & Scholarship Simulation",
    description: "Gran proyecto final y evaluación integradora de los Niveles 5, 6 y 7 (Intermediate): Present Perfect, Phrasal Verbs, Modales de Deducción, Second Conditional, Debate y Entrevista de Beca con el Método STAR (Situation, Task, Action, Result).",
    sentences: [
      {
            "id": "c-teens-inter-12-d1",
            "mode": "affirmative",
            "spanish": "Como resultado de nuestra dedicación nosotros hemos ganado la beca de liderazgo. (+)",
            "english": "As a result of our dedication we have won the leadership scholarship.",
            "parts": [
                  {
                        "token": "As a result of",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our dedication we have",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "won the leadership",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "scholarship.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-12-d2",
            "mode": "negative",
            "spanish": "Nosotros no nos rendimos a pesar de los desafíos complejos que enfrentamos. (-)",
            "english": "We did not give up despite the complex challenges we faced.",
            "parts": [
                  {
                        "token": "We did not give up",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "despite the complex",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "challenges we",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "faced.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-inter-12-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo aprovecharás tú esta experiencia internacional para transformar tu comunidad? (?)",
            "english": "How will you leverage this global experience to empower your community?",
            "parts": [
                  {
                        "token": "How will you leverage",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "this global experience to",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "empower your",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "community?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-1": {
    classId: "c-teens-advanced-1",
    title: "Class 1: Breaking News & Campus Whispers (Reported Speech)",
    description: "Aprende a reportar lo que otros dijeron con precisión periodística usando Reported Speech: reglas de cambio de tiempos verbales (backshift: presente ➔ pasado, will ➔ would), pronombres, marcadores de tiempo y la diferencia clave entre SAY y TELL.",
    sentences: [
      {
            "id": "c-teens-advanced-1-d1",
            "mode": "affirmative",
            "spanish": "Sofía dijo que ella estaba diseñando una app móvil ecológica. (+)",
            "english": "Sofia said that she was designing an eco-friendly mobile app.",
            "parts": [
                  {
                        "token": "Sofia said that",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "she was designing",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "an eco-friendly",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "mobile app.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-1-d2",
            "mode": "negative",
            "spanish": "El profesor nos dijo a nosotros que el examen se realizaría el lunes. (-)",
            "english": "The teacher told us that the exam would take place on Monday.",
            "parts": [
                  {
                        "token": "The teacher told us",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "that the exam would",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "take place",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "on Monday.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-1-d3",
            "mode": "interrogative",
            "spanish": "¿Qué solución declaró el director de tecnología que implementaría? (?)",
            "english": "What solution did the tech director state he would implement?",
            "parts": [
                  {
                        "token": "What solution did the",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "tech director state he",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "would",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "implement?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-2": {
    classId: "c-teens-advanced-2",
    title: "Class 2: Secret Interviews & Interrogations (Reported Questions)",
    description: "Aprende a reportar preguntas y órdenes con Reported Questions y Reported Commands: uso de 'asked if / whether' para preguntas de sí/no, orden afirmativo en preguntas de Wh- (sujeto antes de verbo) y órdenes con 'told to / warned not to'.",
    sentences: [
      {
            "id": "c-teens-advanced-2-d1",
            "mode": "affirmative",
            "spanish": "El entrevistador me preguntó si yo tenía experiencia liderando proyectos. (+)",
            "english": "The interviewer asked me if I had experience leading projects.",
            "parts": [
                  {
                        "token": "The interviewer asked",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "me if I had",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "experience leading",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "projects.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-2-d2",
            "mode": "negative",
            "spanish": "El profesor nos advirtió a nosotros que no tocáramos los químicos. (-)",
            "english": "The professor warned us not to touch the chemicals.",
            "parts": [
                  {
                        "token": "The professor warned",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "us not to touch",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the dangerous",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "chemicals.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-2-d3",
            "mode": "interrogative",
            "spanish": "¿Qué te preguntó el panel de la beca con respecto a tu liderazgo? (?)",
            "english": "What did the scholarship panel ask you regarding your leadership?",
            "parts": [
                  {
                        "token": "What did the scholarship",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "panel ask you",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "regarding your",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "leadership?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-3": {
    classId: "c-teens-advanced-3",
    title: "Class 3: Mastering Relative Clauses (Defining vs Non-Defining)",
    description: "Aprende a conectar ideas complejas y enriquecer tus descripciones usando Relative Clauses: pronombres relativos (who, which, that, whose, where, when), la diferencia vital entre Defining (esencial, sin comas) y Non-Defining (información extra, entre comas).",
    sentences: [
      {
            "id": "c-teens-advanced-3-d1",
            "mode": "affirmative",
            "spanish": "Sofía quien es nuestra líder organizó un hackathon ambiental inspirador. (+)",
            "english": "Sofia who is our leader organized an inspiring environmental hackathon.",
            "parts": [
                  {
                        "token": "Sofia who is our leader",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "organized an inspiring",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "environmental",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "hackathon.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-3-d2",
            "mode": "negative",
            "spanish": "Nosotros entrevistamos a una científica cuya investigación ganó un premio. (-)",
            "english": "We interviewed a scientist whose research won an international award.",
            "parts": [
                  {
                        "token": "We interviewed a scientist",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "whose research won",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "an international",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "award.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-3-d3",
            "mode": "interrogative",
            "spanish": "¿Quién es el creador pionero cuyo avance tecnológico admiras más? (?)",
            "english": "Who is the pioneering creator whose breakthrough you admire most?",
            "parts": [
                  {
                        "token": "Who is the pioneering",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "creator whose breakthrough",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "you admire",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "most?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-4": {
    classId: "c-teens-advanced-4",
    title: "Class 4: Tech Disruptions & Modern Inventions (Passive Voice)",
    description: "Aprende a transformar oraciones activas a Voz Pasiva (Be + Participio Pasado) para enfatizar inventos, descubrimientos tecnológicos y procesos industriales donde la acción o el objeto importa más que el ejecutor.",
    sentences: [
      {
            "id": "c-teens-advanced-4-d1",
            "mode": "affirmative",
            "spanish": "Este portátil ecológico está diseñado con plásticos reciclados del océano. (+)",
            "english": "This eco laptop is engineered with recycled ocean plastics.",
            "parts": [
                  {
                        "token": "This eco laptop is",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "engineered with recycled",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "ocean",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "plastics.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-4-d2",
            "mode": "negative",
            "spanish": "Las contraseñas de usuarios no son almacenadas en texto plano sin seguridad. (-)",
            "english": "User passwords are not stored in insecure plain text.",
            "parts": [
                  {
                        "token": "User passwords are",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "not stored in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "insecure plain",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "text.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-4-d3",
            "mode": "interrogative",
            "spanish": "¿Fue este sistema de filtración probado en comunidades rurales? (?)",
            "english": "Was this filtration system tested in rural communities?",
            "parts": [
                  {
                        "token": "Was this filtration",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "system tested in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "rural",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "communities?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-5": {
    classId: "c-teens-advanced-5",
    title: "Class 5: Global News Reports & Scientific Discoveries (Advanced Passive)",
    description: "Domina las estructuras complejas de la Voz Pasiva en Present Perfect (has/have been discovered), Futuro Simple (will be launched) y con Verbos Modales (must be protected, can be achieved) para reportes científicos, espaciales y ambientales de escala global.",
    sentences: [
      {
            "id": "c-teens-advanced-5-d1",
            "mode": "affirmative",
            "spanish": "Un observatorio de espacio profundo será desplegado el próximo año. (+)",
            "english": "A deep space observatory will be deployed next year.",
            "parts": [
                  {
                        "token": "A deep space observatory",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "will be deployed",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "next",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "year.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-5-d2",
            "mode": "negative",
            "spanish": "Los ecosistemas de páramo deben ser protegidos de la minería ilegal. (-)",
            "english": "Paramo ecosystems must be protected from illegal mining.",
            "parts": [
                  {
                        "token": "Paramo ecosystems must",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "be protected from",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "illegal",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "mining.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-5-d3",
            "mode": "interrogative",
            "spanish": "¿Ha sido este algoritmo cuántico probado por expertos en ciberseguridad? (?)",
            "english": "Has this quantum algorithm been tested by cybersecurity experts?",
            "parts": [
                  {
                        "token": "Has this quantum algorithm",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "been tested by",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "cybersecurity",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "experts?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-6": {
    classId: "c-teens-advanced-6",
    title: "Class 6: Authentic Teen Idioms & Expressions in Daily Contexts",
    description: "Aprende los modismos e idioms más sofisticados y naturales de la lengua inglesa (bite the bullet, hit the nail on the head, through the grapevine, a blessing in disguise, steal someone's thunder, see eye to eye) para hablar con estilo nativo sin caer en traducciones literales.",
    sentences: [
      {
            "id": "c-teens-advanced-6-d1",
            "mode": "affirmative",
            "spanish": "Ese tropiezo inicial fue verdaderamente una bendición disfrazada para nosotros. (+)",
            "english": "That initial setback was truly a blessing in disguise for us.",
            "parts": [
                  {
                        "token": "That initial setback was",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "truly a blessing",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "in disguise",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "for us.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-6-d2",
            "mode": "negative",
            "spanish": "Tú diste en el clavo cuando dijiste que la constancia supera al talento. (-)",
            "english": "You hit the nail on the head about consistency beating talent.",
            "parts": [
                  {
                        "token": "You hit the nail",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "on the head about",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "consistency beating",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "talent.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-6-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo manejas tú las reuniones cuando no están todos de acuerdo? (?)",
            "english": "How do you handle meetings when peers do not see eye to eye?",
            "parts": [
                  {
                        "token": "How do you handle",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "meetings when peers do",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "not see",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "eye to eye?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-7": {
    classId: "c-teens-advanced-7",
    title: "Class 7: Advanced Phrasal Verbs in High-Stakes Leadership & Problem Solving",
    description: "Domina los phrasal verbs ejecutivos más potentes para liderar equipos en momentos de alta presión (step up, bridge the gap, iron out, look into, back out of, hammer out) y resolver crisis con autoridad comunicativa en inglés.",
    sentences: [
      {
            "id": "c-teens-advanced-7-d1",
            "mode": "affirmative",
            "spanish": "Cuando surgió la crisis Mariana dio un paso al frente y lideró la reunión. (+)",
            "english": "When crisis struck Mariana stepped up and led the meeting.",
            "parts": [
                  {
                        "token": "When crisis struck",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "Mariana stepped up and",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "led the emergency",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "meeting.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-7-d2",
            "mode": "negative",
            "spanish": "Ellos prometieron que no se retirarían del acuerdo de financiamiento. (-)",
            "english": "They promised they would not back out of the agreement.",
            "parts": [
                  {
                        "token": "They promised they would",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "not back out of",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the funding",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "agreement.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-7-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo podemos cerrar la brecha de comunicación entre estudiantes y directivas? (?)",
            "english": "How can we bridge the communication gap between students and staff?",
            "parts": [
                  {
                        "token": "How can we bridge",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the communication gap between",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "students and",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "staff?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-8": {
    classId: "c-teens-advanced-8",
    title: "Class 8: The Great AI & Ethics Student Forum",
    description: "Aprende el arte supremo del debate estilo Oxford: estructurar argumentos dialécticos complejos usando cláusulas concesivas avanzadas (granted that, even though, in spite of the fact that), refutar falacias con datos empíricos y liderar foros sobre ética en inteligencia artificial.",
    sentences: [
      {
            "id": "c-teens-advanced-8-d1",
            "mode": "affirmative",
            "spanish": "Admitiendo que la IA es rápida el razonamiento ético humano es irremplazable. (+)",
            "english": "Granted that AI is fast human ethical reasoning is irreplaceable.",
            "parts": [
                  {
                        "token": "Granted that AI is fast",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "human ethical reasoning",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "is completely",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "irreplaceable.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-8-d2",
            "mode": "negative",
            "spanish": "Debo cuestionar la premisa de que los algoritmos son siempre objetivos. (-)",
            "english": "I must challenge the premise that algorithms are always objective.",
            "parts": [
                  {
                        "token": "I must challenge the premise",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "that algorithms are",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "always completely",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "objective.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-8-d3",
            "mode": "interrogative",
            "spanish": "¿Puede la parte contraria fundamentar su afirmación con pruebas empíricas? (?)",
            "english": "Can the opposing side substantiate their claim with empirical proof?",
            "parts": [
                  {
                        "token": "Can the opposing side",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "substantiate their claim",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "with empirical",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "proof?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-9": {
    classId: "c-teens-advanced-9",
    title: "Class 9: Crisis Management & Global Environmental Summits",
    description: "Domina la estructura más avanzada de los condicionales: los Mixed Conditionals (Past Condition ➔ Present Result: If we had acted sooner, our ecosystems would be safer today / Present Condition ➔ Past Result) para cumbres climáticas de la ONU y protocolos de gestión de crisis.",
    sentences: [
      {
            "id": "c-teens-advanced-9-d1",
            "mode": "affirmative",
            "spanish": "Si hubiéramos actuado hace veinte años nuestro planeta no estaría en crisis hoy. (+)",
            "english": "If we had acted twenty years ago our planet wouldn't be in crisis today.",
            "parts": [
                  {
                        "token": "If we had acted",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "twenty years ago our",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "planet wouldn't be",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "in crisis today.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-9-d2",
            "mode": "negative",
            "spanish": "Si Mateo no hubiera aprendido a programar no estaría desarrollando robótica hoy. (-)",
            "english": "If Mateo hadn't learned to code he wouldn't be building robotics today.",
            "parts": [
                  {
                        "token": "If Mateo hadn't learned",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "to code he wouldn't",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "be building robotics",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "today.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-9-d3",
            "mode": "interrogative",
            "spanish": "¿Estarían los océanos más limpios hoy si hubiéramos prohibido los plásticos antes? (?)",
            "english": "Would oceans be cleaner today if we had banned plastics earlier?",
            "parts": [
                  {
                        "token": "Would oceans be cleaner",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "today if we had",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "banned plastics",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "earlier?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-advanced-10": {
    classId: "c-teens-advanced-10",
    title: "Class 10: Level 8 Capstone: Global Youth NGO Leadership Pitch & Executive Interview",
    description: "Gran proyecto final y evaluación integradora del Nivel 8 (Advanced - Teen Leaders): Reported Speech, Relative Clauses, Voz Pasiva Avanzada, Idioms, Phrasal Verbs Ejecutivos, Mixed Conditionals, y Pitch de Liderazgo de una ONG Juvenil ante una Junta Internacional.",
    sentences: [
      {
            "id": "c-teens-advanced-10-d1",
            "mode": "affirmative",
            "spanish": "Nuestra ONG juvenil fue galardonada con la máxima subvención filantrópica. (+)",
            "english": "Our youth NGO was awarded the maximum philanthropic grant.",
            "parts": [
                  {
                        "token": "Our youth NGO was",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "awarded the maximum",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "philanthropic",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "grant.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-10-d2",
            "mode": "negative",
            "spanish": "Si no hubiéramos actuado los jóvenes rurales no estarían conectados hoy. (-)",
            "english": "If we hadn't acted rural youth wouldn't be connected today.",
            "parts": [
                  {
                        "token": "If we hadn't acted",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "rural youth wouldn't",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "be connected",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "today.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-advanced-10-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo garantizará su equipo la transparencia fiscal y el impacto social? (?)",
            "english": "How will your team guarantee fiscal transparency and social impact?",
            "parts": [
                  {
                        "token": "How will your team",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "guarantee fiscal transparency",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "and social",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "impact?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-1": {
    classId: "c-teens-elite-1",
    title: "Class 1: Future Milestones & Tech Forecasting",
    description: "Aprende a formular visiones futuristas de alta precisión diferenciando el Future Continuous (will be doing: acción en progreso en un momento futuro) y el Future Perfect (will have done: meta concluida antes de una fecha límite como 'by 2035').",
    sentences: [
      {
            "id": "c-teens-elite-1-d1",
            "mode": "affirmative",
            "spanish": "Para 2035 los ingenieros biomédicos habrán sintetizado órganos biónicos. (+)",
            "english": "By 2035 biomedical engineers will have synthesized bionic organs.",
            "parts": [
                  {
                        "token": "By 2035 biomedical",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "engineers will have",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "synthesized bionic",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "organs.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-1-d2",
            "mode": "negative",
            "spanish": "En diez años millones de viajeros estarán desplazándose en taxis aéreos. (-)",
            "english": "In ten years millions of commuters will be traveling in air taxis.",
            "parts": [
                  {
                        "token": "In ten years millions",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "of commuters will be",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "traveling in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "air taxis.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-1-d3",
            "mode": "interrogative",
            "spanish": "¿Habrán los reactores de fusión reemplazado a las plantas fósiles para 2040? (?)",
            "english": "Will clean fusion reactors have replaced fossil plants by 2040?",
            "parts": [
                  {
                        "token": "Will clean fusion reactors",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "have replaced fossil",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "plants by",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "2040?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-2": {
    classId: "c-teens-elite-2",
    title: "Class 2: High-Stakes Dilemmas & Complex Mixed Conditionals",
    description: "Domina el análisis de contrafácticos históricos y post-mortems ejecutivos de crisis usando Mixed Conditionals bidireccionales: Past Cause ➔ Present Consequence y Present Trait ➔ Past Outcome para evaluar decisiones críticas de negocios, ciberseguridad y diplomacia.",
    sentences: [
      {
            "id": "c-teens-elite-2-d1",
            "mode": "affirmative",
            "spanish": "Si no hubiéramos parchado el cortafuegos nuestra base de datos estaría comprometida hoy. (+)",
            "english": "If we hadn't patched the firewall our database would be compromised today.",
            "parts": [
                  {
                        "token": "If we hadn't patched",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the firewall our database",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "would be compromised",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "today.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-2-d2",
            "mode": "negative",
            "spanish": "Si nuestros ingenieros no fueran vigilantes la empresa habría sufrido pérdidas. (-)",
            "english": "If our engineers weren't vigilant the firm would have suffered losses.",
            "parts": [
                  {
                        "token": "If our engineers weren't",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "vigilant the firm",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "would have suffered",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "losses.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-2-d3",
            "mode": "interrogative",
            "spanish": "¿Sería nuestra empresa rentable hoy si hubiéramos rechazado el capital semilla? (?)",
            "english": "Would our firm be profitable today if we had rejected seed capital?",
            "parts": [
                  {
                        "token": "Would our firm be",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "profitable today if we",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "had rejected",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "seed capital?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-3": {
    classId: "c-teens-elite-3",
    title: "Class 3: Cleft Sentences & Emphatic Rhetoric",
    description: "Aprende el recurso retórico supremo de los grandes oradores (Steve Jobs, Barack Obama): las Cleft Sentences (It was X that..., What we truly need is..., All they wanted was...) para poner el reflector del escenario sobre el punto clave de tu discurso.",
    sentences: [
      {
            "id": "c-teens-elite-3-d1",
            "mode": "affirmative",
            "spanish": "Fue la perseverancia inquebrantable de Sofía lo que inspiró a nuestro equipo. (+)",
            "english": "It was Sofia's unwavering persistence that inspired our team.",
            "parts": [
                  {
                        "token": "It was Sofia's unwavering",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "persistence that inspired",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our robotics",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "team.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-3-d2",
            "mode": "negative",
            "spanish": "Lo que motiva a nuestra fundación es el acceso equitativo a la educación. (-)",
            "english": "What motivates our foundation is equitable access to education.",
            "parts": [
                  {
                        "token": "What motivates our foundation",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "is equitable access",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "to coding",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "education.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-3-d3",
            "mode": "interrogative",
            "spanish": "¿Fue el espíritu colaborativo lo que aseguró el primer puesto en el torneo? (?)",
            "english": "Was it collaborative spirit that secured first place in the tournament?",
            "parts": [
                  {
                        "token": "Was it collaborative spirit",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "that secured first place",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "in the",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "tournament?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-4": {
    classId: "c-teens-elite-4",
    title: "Class 4: Rhetorical Inversions & High-Impact Oratory",
    description: "Domina la joya de la corona de la gramática inglesa avanzada: las Inversiones Retóricas tras adverbios negativos y restrictivos (Rarely have I seen, Not only did we build, Under no circumstances should we compromise, Seldom does a leader...) para discursos parlamentarios y oratoria de máximo nivel.",
    sentences: [
      {
            "id": "c-teens-elite-4-d1",
            "mode": "affirmative",
            "spanish": "Rara vez he presenciado a una delegación juvenil presentar tal investigación. (+)",
            "english": "Rarely have I seen a youth delegation present such research.",
            "parts": [
                  {
                        "token": "Rarely have I seen",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "a youth delegation present",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "such rigorous",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "research.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-4-d2",
            "mode": "negative",
            "spanish": "No solo nuestro equipo ganó el torneo sino que rompimos el récord. (-)",
            "english": "Not only did our team win the tournament but we broke the record.",
            "parts": [
                  {
                        "token": "Not only did our team",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "win the tournament but",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "we broke the",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "historic record.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-4-d3",
            "mode": "interrogative",
            "spanish": "¿Bajo ninguna circunstancia debemos transigir en la privacidad digital? (?)",
            "english": "Under no circumstances should we compromise on digital privacy?",
            "parts": [
                  {
                        "token": "Under no circumstances should",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "we compromise on",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "citizen digital",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "privacy?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-5": {
    classId: "c-teens-elite-5",
    title: "Class 5: Diplomatic Softening, Hedging & Nuanced Negotiations",
    description: "Aprende el lenguaje de los embajadores de carrera y negociadores multilaterales: técnicas de Hedging y suavización diplomática (I would venture to suggest, It is widely acknowledged that, It seems somewhat premature to conclude, With all due respect) para negociar acuerdos de paz, tratados de IA y desacuerdos sin generar fricciones.",
    sentences: [
      {
            "id": "c-teens-elite-5-d1",
            "mode": "affirmative",
            "spanish": "Me atrevería a sugerir que nuestro comité considere un despliegue escalonado. (+)",
            "english": "I would venture to suggest our committee consider a phased rollout.",
            "parts": [
                  {
                        "token": "I would venture to suggest",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our committee consider",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "a phased",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "rollout.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-5-d2",
            "mode": "negative",
            "spanish": "Parecería algo prematuro declarar la estabilidad total del sistema ahora. (-)",
            "english": "It would appear somewhat premature to declare full system stability.",
            "parts": [
                  {
                        "token": "It would appear somewhat",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "premature to declare",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "full system",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "stability.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-5-d3",
            "mode": "interrogative",
            "spanish": "¿Podría ser mutuamente ventajoso establecer un consejo asesor conjunto? (?)",
            "english": "Might it be mutually advantageous to establish a joint advisory council?",
            "parts": [
                  {
                        "token": "Might it be mutually",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "advantageous to establish",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "a joint advisory",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "council?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-6": {
    classId: "c-teens-elite-6",
    title: "Class 6: Advanced Discursive & Argumentative Essay Architecture",
    description: "Aprende la arquitectura académica de ensayos de nivel Oxford y Cambridge: diseño de Tesis en 3 Niveles (Gancho de Concesión + Postura Central + Dos Justificaciones de Apoyo), conectores de transición académica de alto nivel (Whereas, In stark contrast to, Compelling empirical data dictates) y defensa de tesis académica ante un panel de revisión por pares.",
    sentences: [
      {
            "id": "c-teens-elite-6-d1",
            "mode": "affirmative",
            "spanish": "Si bien la IA acelera la investigación el juicio humano debe gobernar la ciencia. (+)",
            "english": "While AI accelerates research human judgment must govern science.",
            "parts": [
                  {
                        "token": "While AI accelerates research",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "human ethical judgment",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "must govern modern",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "science.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-6-d2",
            "mode": "negative",
            "spanish": "Nuestra metodología cuantitativa incorpora un riguroso estudio longitudinal. (-)",
            "english": "Our quantitative methodology incorporates a rigorous longitudinal study.",
            "parts": [
                  {
                        "token": "Our quantitative methodology",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "incorporates a rigorous",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "five-year longitudinal",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "study.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-6-d3",
            "mode": "interrogative",
            "spanish": "¿Tiene en cuenta el marco del autor las variables socioeconómicas? (?)",
            "english": "Does the author's framework account for socioeconomic variables?",
            "parts": [
                  {
                        "token": "Does the author's framework",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "account for diverse",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "socioeconomic",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "variables?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-7": {
    classId: "c-teens-elite-7",
    title: "Class 7: Empirical Research Abstracts & Academic Citations",
    description: "Domina el formato estándar internacional IMRAD (Introduction, Methods, Results, And Discussion) para condensar investigaciones complejas en resúmenes científicos (Abstracts) de 150 palabras, citar literatura académica con integridad ética y defender pósteres científicos ante jurados internacionales.",
    sentences: [
      {
            "id": "c-teens-elite-7-d1",
            "mode": "affirmative",
            "spanish": "Un ensayo cuantitativo doble ciego fue conducido en veinte acueductos. (+)",
            "english": "A double-blind quantitative trial was conducted across twenty water systems.",
            "parts": [
                  {
                        "token": "A double-blind quantitative",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "trial was conducted",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "across twenty",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "water systems.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-7-d2",
            "mode": "negative",
            "spanish": "El análisis empírico reveló una reducción del noventa y ocho por ciento. (-)",
            "english": "Empirical analysis revealed a ninety-eight percent reduction in pollutants.",
            "parts": [
                  {
                        "token": "Empirical analysis revealed",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "a ninety-eight percent",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "reduction in",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "pollutants.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-7-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo corroboran sus resultados la literatura académica existente? (?)",
            "english": "How do your results corroborate existing scholarly literature?",
            "parts": [
                  {
                        "token": "How do your results",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "corroborate existing",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "scholarly",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "literature?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-8": {
    classId: "c-teens-elite-8",
    title: "Class 8: Executive Boardrooms, Parliamentary Procedure & Conflict Mediation",
    description: "Domina el protocolo parlamentario oficial internacional (Robert's Rules of Order: I move that..., I second the motion, Point of order, Table the motion) para presidir juntas directivas ejecutivas, arbitrar disputas entre inversionistas y ratificar resoluciones vinculantes en inglés.",
    sentences: [
      {
            "id": "c-teens-elite-8-d1",
            "mode": "affirmative",
            "spanish": "Propongo la moción de que nuestra junta ratifique el protocolo de ciberseguridad. (+)",
            "english": "I move that our board ratify the cybersecurity protocol.",
            "parts": [
                  {
                        "token": "I move that our",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "board ratify the revised",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "cybersecurity",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "protocol.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-8-d2",
            "mode": "negative",
            "spanish": "La moción fue propuesta y secundada; se abre el debate. (-)",
            "english": "The motion has been moved and seconded; debate is open.",
            "parts": [
                  {
                        "token": "The motion has been",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "moved and seconded; debate",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "is now officially",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "open.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-8-d3",
            "mode": "interrogative",
            "spanish": "¿Qué mayoría estatutaria es requerida para aprobar la fusión? (?)",
            "english": "What statutory majority is required to approve the merger?",
            "parts": [
                  {
                        "token": "What statutory majority",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "is required to approve",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the corporate",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "merger?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-9": {
    classId: "c-teens-elite-9",
    title: "Class 9: Crisis Leadership, Hostile Press Conferences & PR Damage Control",
    description: "Domina el arte supremo de la vocería ejecutiva bajo fuego mediático: la Técnica de Bridging (Acknowledge + Pivot Linker + Core Message) para neutralizar preguntas agresivas o capciosas de periodistas de investigación y proyectar autoridad serena en transmisiones mundiales en vivo.",
    sentences: [
      {
            "id": "c-teens-elite-9-d1",
            "mode": "affirmative",
            "spanish": "Si bien entiendo la preocupación lo que la auditoría confirma es que no hubo pérdida de datos. (+)",
            "english": "While I understand the concern what the audit confirms is zero data loss.",
            "parts": [
                  {
                        "token": "While I understand the concern",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "what the audit confirms",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "is zero user",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "data loss.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-9-d2",
            "mode": "negative",
            "spanish": "Nuestra división de ingeniería desplegó clústeres automatizados de respaldo. (-)",
            "english": "Our engineering division deployed automated failover clusters.",
            "parts": [
                  {
                        "token": "Our engineering division",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "deployed automated failover",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "redundancy",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "clusters.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-9-d3",
            "mode": "interrogative",
            "spanish": "¿Qué pasos de remediación instituirá su equipo para restaurar la confianza pública? (?)",
            "english": "What remediation steps will your team institute to restore public trust?",
            "parts": [
                  {
                        "token": "What remediation steps",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "will your team institute",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "to restore",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "public trust?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-10": {
    classId: "c-teens-elite-10",
    title: "Class 10: Designing a Global Venture: Unit Economics & Value Proposition",
    description: "Aprende las finanzas y métricas estratégicas de los mejores fundadores de Silicon Valley: Economía Unitaria (Unit Economics: LTV to CAC ratio > 3:1, Churn rate, Gross margins), Propuesta de Valor Única (UVP) y Fosos de Defensibilidad Competitiva (Network effects, Proprietary algorithms, Moats) para defender la viabilidad financiera de tu startup ante fondos de Venture Capital.",
    sentences: [
      {
            "id": "c-teens-elite-10-d1",
            "mode": "affirmative",
            "spanish": "Nuestro ratio de LTV a CAC se sitúa en un saludable cuatro a uno. (+)",
            "english": "Our LTV to CAC ratio stands at a healthy four to one.",
            "parts": [
                  {
                        "token": "Our LTV to CAC ratio",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "stands at a healthy",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "four point two",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "to one.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-10-d2",
            "mode": "negative",
            "spanish": "Nuestra tasa de cancelación anual se mantiene por debajo del dos por ciento. (-)",
            "english": "Our annual customer churn rate is maintained below two percent.",
            "parts": [
                  {
                        "token": "Our annual customer",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "churn rate is strictly",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "maintained below",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "two percent.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-10-d3",
            "mode": "interrogative",
            "spanish": "¿Genera su empresa márgenes brutos superiores al setenta y cinco por ciento? (?)",
            "english": "Does your enterprise generate gross margins exceeding seventy-five percent?",
            "parts": [
                  {
                        "token": "Does your enterprise",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "generate gross margins",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "exceeding",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "seventy-five percent?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-elite-11": {
    classId: "c-teens-elite-11",
    title: "Class 11: Level 9 Grand Capstone: International Tech Venture Seed Pitch & Global Keynote",
    description: "Gran proyecto final y evaluación de graduación del Nivel 9 (Advanced Elite: Global Tech Founders & Diplomacy): Síntesis de Future Tenses, Mixed Conditionals, Cleft Sentences, Inversiones Retóricas, Suavización Diplomática, Ensayos Académicos, IMRAD Abstracts, Robert's Rules of Order, Media Bridging, Unit Economics, y Pitch de Inversión Semilla ante Inversionistas de Silicon Valley con pase a Level 10 (Masters of Fluency).",
    sentences: [
      {
            "id": "c-teens-elite-11-d1",
            "mode": "affirmative",
            "spanish": "Lo que nuestra tecnología logra es empoderar a miles de estudiantes rurales. (+)",
            "english": "What our technology achieves is empowering thousands of rural students.",
            "parts": [
                  {
                        "token": "What our technology achieves",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "is empowering thousands",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "of rural",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "students.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-11-d2",
            "mode": "negative",
            "spanish": "Rara vez una startup ha alcanzado tales márgenes de rentabilidad. (-)",
            "english": "Rarely has a startup achieved such profit margins.",
            "parts": [
                  {
                        "token": "Rarely has a startup",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "achieved such eighty-two",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "percent profit",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "margins.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-elite-11-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo empoderará su dominio del inglés su trayectoria como fundador? (?)",
            "english": "How will your mastery of English empower your trajectory as founder?",
            "parts": [
                  {
                        "token": "How will your mastery",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "of English empower your",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "trajectory as",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "founder?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-1": {
    classId: "c-teens-masters-1",
    title: "Class 1: Oxford-Union Parliamentary Debate & Dialectical Refutation",
    description: "Domina el debate parlamentario al más alto nivel del mundo: estructura de discursos de 7 minutos (Prime Minister y Leader of Opposition), interpelaciones parlamentarias en vivo (Points of Information), exposición de falacias dialécticas complejas y argumentación estilo Oxford Union.",
    sentences: [
      {
            "id": "c-teens-masters-1-d1",
            "mode": "affirmative",
            "spanish": "Los datos empíricos demuestran que las salvaguardas éticas aceleran la inversión. (+)",
            "english": "Empirical data proves that ethical guardrails accelerate investment.",
            "parts": [
                  {
                        "token": "Empirical data proves that",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "ethical guardrails accelerate",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "sustainable capital",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "investment.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-1-d2",
            "mode": "negative",
            "spanish": "El líder opositor presenta un falso dilema entre privacidad y seguridad. (-)",
            "english": "The opposing leader presents a false dilemma between privacy and security.",
            "parts": [
                  {
                        "token": "The opposing leader presents",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "a false dilemma between",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "privacy and",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "security.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-1-d3",
            "mode": "interrogative",
            "spanish": "¿Qué precedente moral duradero establecerá esta cámara parlamentaria hoy? (?)",
            "english": "What enduring moral precedent will this parliamentary chamber establish today?",
            "parts": [
                  {
                        "token": "What enduring moral precedent",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "will this parliamentary chamber",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "establish",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "today?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-2": {
    classId: "c-teens-masters-2",
    title: "Class 2: Pop Culture Semiotics, Media Ecology & Digital Memetics",
    description: "Aprende el análisis cultural y semiótico de nivel posgrado: la teoría de los signos de Saussure (Signifier vs Signified), los simulacros de Baudrillard, la ecología de medios de Marshall McLuhan ('The medium is the message') y la propagación de memética digital en redes sociales.",
    sentences: [
      {
            "id": "c-teens-masters-2-d1",
            "mode": "affirmative",
            "spanish": "El significante es el auto eléctrico pero el significado encarna prestigio social. (+)",
            "english": "The signifier is the electric car but the signified embodies social prestige.",
            "parts": [
                  {
                        "token": "The signifier is the",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "electric car but the signified",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "embodies elite social",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "prestige.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-2-d2",
            "mode": "negative",
            "spanish": "Los espectáculos digitales curados reemplazan la experiencia física auténtica. (-)",
            "english": "Curated digital spectacles supersede authentic physical experience.",
            "parts": [
                  {
                        "token": "Curated digital spectacles",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "completely supersede",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "authentic physical",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "experience.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-2-d3",
            "mode": "interrogative",
            "spanish": "¿De qué manera condicionan los algoritmos la percepción de autenticidad? (?)",
            "english": "How do algorithms condition the perception of authenticity?",
            "parts": [
                  {
                        "token": "How do recommendation",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "algorithms condition the",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "perception of",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "authenticity?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-3": {
    classId: "c-teens-masters-3",
    title: "Class 3: Ivy League Graduate Seminars & Socratic Cross-Examination",
    description: "Domina la dialéctica de los seminarios de posgrado de Harvard, Yale y Princeton: el Método Socrático de interrogación cruzada, la falsabilidad epistemológica de Karl Popper, la deconstrucción de supuestos ontológicos y la defensa de hipótesis científicas ante un tribunal doctoral.",
    sentences: [
      {
            "id": "c-teens-masters-3-d1",
            "mode": "affirmative",
            "spanish": "Nuestro modelo cuántico satisface el criterio de falsabilidad de Karl Popper. (+)",
            "english": "Our quantum model satisfies Karl Popper's falsifiability criterion.",
            "parts": [
                  {
                        "token": "Our quantum model satisfies",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "Karl Popper's falsifiability",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "demarcation",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "criterion.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-3-d2",
            "mode": "negative",
            "spanish": "Definir inteligencia solo con pruebas computacionales comete una tautología circular. (-)",
            "english": "Defining intelligence purely with tests commits a circular tautology.",
            "parts": [
                  {
                        "token": "Defining intelligence purely",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "with tests commits a",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "circular philosophical",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "tautology.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-3-d3",
            "mode": "interrogative",
            "spanish": "¿Sobre qué premisa epistemológica afirma que la IA comprende de verdad? (?)",
            "english": "Upon what epistemological premise do you claim AI truly understands?",
            "parts": [
                  {
                        "token": "Upon what epistemological",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "premise do you claim",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "AI truly",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "understands?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-4": {
    classId: "c-teens-masters-4",
    title: "Class 4: TED Keynotes, High-Impact Storytelling & Thought Leadership",
    description: "Domina el arte de las conferencias TED de 18 minutos que cambian el mundo: la Tríada Retórica de Aristóteles (Ethos: credibilidad moral, Pathos: resonancia emocional, Logos: evidencia empírica), el arco narrativo del Viaje del Héroe y el diseño de 'Sticky Metaphors' memorables para inspirar a millones de personas.",
    sentences: [
      {
            "id": "c-teens-masters-4-d1",
            "mode": "affirmative",
            "spanish": "Piensen en la IA como un telescopio intelectual que magnifica la curiosidad. (+)",
            "english": "Think of AI as an intellectual telescope that magnifies curiosity.",
            "parts": [
                  {
                        "token": "Think of AI as",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "an intellectual telescope that",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "magnifies our creative",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "curiosity.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-4-d2",
            "mode": "negative",
            "spanish": "Nuestros centros solares demostraron que la alfabetización se acelera con herramientas equitativas. (-)",
            "english": "Our solar hubs proved literacy accelerates with equitable tools.",
            "parts": [
                  {
                        "token": "Our solar hubs proved",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "literacy accelerates when",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "given equitable",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "tools.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-4-d3",
            "mode": "interrogative",
            "spanish": "¿Qué futuro extraordinario creará nuestra generación cuando elijamos el coraje? (?)",
            "english": "What extraordinary future will our generation create when we choose courage?",
            "parts": [
                  {
                        "token": "What extraordinary future will",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our generation create when",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "we choose unwavering",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "courage?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-5": {
    classId: "c-teens-masters-5",
    title: "Class 5: Geopolitical Strategy, Bilateral Treaties & Multilateral Summits",
    description: "Domina el lenguaje oficial de los tratados de Naciones Unidas y el Consejo de Seguridad: cláusulas preambulares (Emphasizing, Reaffirming, Deeply concerned by) y cláusulas operativas (Resolves to, Mandates that, Decides accordingly) para redactar resoluciones de derecho internacional en inglés.",
    sentences: [
      {
            "id": "c-teens-masters-5-d1",
            "mode": "affirmative",
            "spanish": "Reafirmando los principios universales de conservación ecológica y paz mundial. (+)",
            "english": "Reaffirming universal principles of ecological conservation and peace.",
            "parts": [
                  {
                        "token": "Reaffirming universal principles",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "of ecological conservation",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "and world",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "peace,",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-5-d2",
            "mode": "negative",
            "spanish": "1. Resuelve que todas las naciones establecerán corredores protegidos para 2035. (-)",
            "english": "1. Resolves that all nations shall establish protected corridors by 2035.",
            "parts": [
                  {
                        "token": "1. Resolves that all",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "nations shall establish",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "protected biological corridors",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "by 2035;",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-5-d3",
            "mode": "interrogative",
            "spanish": "¿Ejerce alguna delegación permanente el poder de veto contra este acuerdo? (?)",
            "english": "Does any permanent delegation exercise veto power against this accord?",
            "parts": [
                  {
                        "token": "Does any permanent delegation",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "exercise veto power against",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "this historic peace",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "accord?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-6": {
    classId: "c-teens-masters-6",
    title: "Class 6: Literary Critique, Cinematic Deconstruction & Aesthetic Analysis",
    description: "Domina el análisis cinematográfico y literario de nivel Festival de Cannes y Premio Nobel: deconstrucción de puesta en escena (mise-en-scène), cinematografía (chiaroscuro, Dutch angles, color palettes), sonido diegético vs no diegético, narradores no confiables (unreliable narrators) y crítica estética de obras maestras.",
    sentences: [
      {
            "id": "c-teens-masters-6-d1",
            "mode": "affirmative",
            "spanish": "La iluminación de claroscuro tenue exterioriza el aislamiento moral del personaje. (+)",
            "english": "Low-key chiaroscuro lighting externalizes the character's moral isolation.",
            "parts": [
                  {
                        "token": "Low-key chiaroscuro lighting",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "externalizes the character's",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "profound moral",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "isolation.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-6-d2",
            "mode": "negative",
            "spanish": "El silenciamiento repentino del sonido diegético intensifica el clímax dramático. (-)",
            "english": "The sudden silencing of diegetic sound heightens the dramatic climax.",
            "parts": [
                  {
                        "token": "The sudden silencing of",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "diegetic sound heightens",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "the existential dramatic",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "climax.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-6-d3",
            "mode": "interrogative",
            "spanish": "¿Refuerza el encuadre asimétrico la fragmentación psicológica del protagonista? (?)",
            "english": "Does asymmetrical framing reinforce the protagonist's fragmentation?",
            "parts": [
                  {
                        "token": "Does asymmetrical framing",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "meaningfully reinforce the",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "protagonist's psychological",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "fragmentation?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-7": {
    classId: "c-teens-masters-7",
    title: "Class 7: Rhodes & Fulbright International Fellowship Interviews",
    description: "Domina las entrevistas más competitivas y prestigiosas del mundo académico: la Beca Rhodes (Universidad de Oxford) y la Beca Fulbright (EE. UU.): la Metodología STAR Avanzada (Situation, Task, Action, Result + Systemic Transformation), dilemas de liderazgo ético bajo fuego y defensa de proyectos de impacto social ante un tribunal de ex-rectores y embajadores.",
    sentences: [
      {
            "id": "c-teens-masters-7-d1",
            "mode": "affirmative",
            "spanish": "Elegimos renunciar a la financiación antes que comprometer nuestra integridad ética. (+)",
            "english": "We chose to forfeit funding rather than compromise our ethical integrity.",
            "parts": [
                  {
                        "token": "We chose to forfeit",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "funding rather than compromise",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "our foundational ethical",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "integrity.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-7-d2",
            "mode": "negative",
            "spanish": "Un verdadero becario Rhodes combina excelencia académica con liderazgo de servicio. (-)",
            "english": "A true Rhodes scholar combines scholarly excellence with servant leadership.",
            "parts": [
                  {
                        "token": "A true Rhodes scholar",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "combines scholarly excellence",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "with selfless servant",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "leadership.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-7-d3",
            "mode": "interrogative",
            "spanish": "¿Cómo desmantelará su investigación la desigualdad educativa sistémica? (?)",
            "english": "How will your research directly dismantle systemic inequality?",
            "parts": [
                  {
                        "token": "How will your postgraduate",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "research directly dismantle",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "systemic educational",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "inequality?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-8": {
    classId: "c-teens-masters-8",
    title: "Class 8: Investigative Video Essays & Documentary Journalism",
    description: "Domina la producción de videoensayos y periodismo documental al estilo The New York Times y Vox: ganchos de inicio en frío (cold open hooks), diseño de sonido Foley inmersivo, ritmo narrativo cinematográfico (narrative pacing), protección legal de fuentes confidenciales y ética periodística de nivel Pulitzer.",
    sentences: [
      {
            "id": "c-teens-masters-8-d1",
            "mode": "affirmative",
            "spanish": "La auditoría fue falsificada y los sensores fueron silenciados en secreto. (+)",
            "english": "The audit was falsified and the sensors were silenced in secret.",
            "parts": [
                  {
                        "token": "The audit was falsified",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "and the sensors were",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "silenced in secret",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "surveillance.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-8-d2",
            "mode": "negative",
            "spanish": "Para proteger al informante de represalias el audio fue regrabado. (-)",
            "english": "To protect the whistleblower the audio was re-recorded.",
            "parts": [
                  {
                        "token": "To protect the whistleblower",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "from retaliation all audio",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "was forensically",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "re-recorded.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-8-d3",
            "mode": "interrogative",
            "spanish": "¿Corroboró el equipo de investigación los correos con telemetría satelital? (?)",
            "english": "Did the investigative team corroborate emails with telemetry?",
            "parts": [
                  {
                        "token": "Did the investigative team",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "corroborate the leaked emails",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "with satellite",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "telemetry?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-9": {
    classId: "c-teens-masters-9",
    title: "Class 9: Global Mega-Trends: Superintelligence, Bioethics & Climate",
    description: "Aprende los debates interdisciplinarios más trascendentales del siglo XXI: gobernanza de riesgos existenciales de Superinteligencia Artificial (ASI Alignment, Orthogonality Thesis), bioética transhumana de edición genética CRISPR (Germline editing vs Somatic therapies) y geopolítica de geoingeniería solar planetaria.",
    sentences: [
      {
            "id": "c-teens-masters-9-d1",
            "mode": "affirmative",
            "spanish": "Alinear la superinteligencia artificial requiere restricciones matemáticas demostrables. (+)",
            "english": "Aligning artificial superintelligence requires provable mathematical constraints.",
            "parts": [
                  {
                        "token": "Aligning artificial superintelligence",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "requires provable mathematical",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "safety value",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "constraints.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-9-d2",
            "mode": "negative",
            "spanish": "La modificación genética germinal no regulada arriesga crear castas biológicas. (-)",
            "english": "Unregulated germline genetic modification risks creating biological castes.",
            "parts": [
                  {
                        "token": "Unregulated germline genetic",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "modification risks creating",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "permanent biological",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "castes.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-9-d3",
            "mode": "interrogative",
            "spanish": "¿Pueden las instituciones hacer cumplir una moratoria efectiva sobre la IA letal? (?)",
            "english": "Can institutions enforce an effective moratorium on lethal AI?",
            "parts": [
                  {
                        "token": "Can international institutions",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "enforce an effective",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "moratorium on",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "lethal AI?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
  "c-teens-masters-10": {
    classId: "c-teens-masters-10",
    title: "Class 10: Level 10 Grand Masters Capstone: C2 Fluency Mastery & Global Leadership Summit",
    description: "Gran proyecto cumbre y graduación definitiva de todo el programa Teens (Niveles 0 a 10): Síntesis multidisciplinaria instantánea en tiempo real (Oxford Debate, Semiótica Cultural, Filosofía Socrática, Oratoria TED, Tratados de la ONU, Crítica de Cannes, Liderazgo Rhodes, Periodismo Documental, Superinteligencia Artificial y Bioética) y defensa ante el Gran Canciller de la Fluidez Global para obtener la Certificación C2 Master of English.",
    sentences: [
      {
            "id": "c-teens-masters-10-d1",
            "mode": "affirmative",
            "spanish": "Dominar el inglés es desbloquear las llaves universales al pensamiento y la hermandad. (+)",
            "english": "Mastering English is unlocking universal keys to thought and fellowship.",
            "parts": [
                  {
                        "token": "Mastering English is unlocking",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "universal keys to thought",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "and global human",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "fellowship.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-10-d2",
            "mode": "negative",
            "spanish": "El verdadero liderazgo se forja en el crisol de la convicción moral y el servicio. (-)",
            "english": "True leadership is forged in the crucible of moral conviction and service.",
            "parts": [
                  {
                        "token": "True leadership is forged",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "in the crucible of moral",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "conviction and unselfish",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "service.",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      },
      {
            "id": "c-teens-masters-10-d3",
            "mode": "interrogative",
            "spanish": "¿Qué futuro extraordinario te atreverás a construir ahora que dominas el inglés? (?)",
            "english": "What extraordinary future will you dare to build commanding English?",
            "parts": [
                  {
                        "token": "What extraordinary future will",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "you dare to build now that",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "you command English with",
                        "role": "kernel",
                        "es": ""
                  },
                  {
                        "token": "mastery?",
                        "role": "kernel",
                        "es": ""
                  }
            ]
      }
]
  },
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
