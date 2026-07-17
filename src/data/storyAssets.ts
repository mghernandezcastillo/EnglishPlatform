import imgAstronaut from '../assets/images/kid_astronaut_avatar_1_1781878664181.jpg';
import imgRobot from '../assets/images/friendly_red_monster_1781981932571.jpg';
import imgDog from '../assets/images/cute_pets_kids_1781982896917.jpg';
import imgCat from '../assets/images/kids_q_cat_1782139183676.jpg';
import imgForest from '../assets/images/nature_kids_1781985762002.jpg';
import imgSpace from '../assets/images/space_kids_1781985843535.jpg';
import imgCity from '../assets/images/vehicles_town_kids_1781983157009.jpg';
import imgHouse from '../assets/images/house_rooms_kids_1781983143054.jpg';
import imgFood from '../assets/images/food_drinks_kids_1781983103412.jpg';
import imgSports from '../assets/images/hobbies_sports_kids_1781985815627.jpg';
import imgWeather from '../assets/images/clothes_weather_kids_1781983117508.jpg';
import imgFamily from '../assets/images/cute_family_kids_1781982934785.jpg';
import imgTeensTech from '../assets/images/teens_gadgets_tech_1783000527576.jpg';
import imgTeensApps from '../assets/images/teens_apps_1782770528421.jpg';
import imgTeensParty from '../assets/images/teens_birthday_party_1782771276209.jpg';
import imgTeensMusic from '../assets/images/teen_music_1782229151966.jpg';
import imgTeensCafe from '../assets/images/teens_cafeteria_lunch_1782771555191.jpg';
import imgMystery from '../assets/images/monster_maker_game_1781982011143.jpg';
import imgTreasure from '../assets/images/scavenger_hunt_kids_1781981999036.jpg';
import imgShowTell from '../assets/images/kids_show_and_tell_1782138903791.jpg';

export interface StoryAsset {
  id: string;
  url: string;
  es: string;
  en: string;
  type: 'character' | 'object' | 'place' | 'animal';
  cue: string;
}

export const storyImages: StoryAsset[] = [
  { id: 'astronaut', url: imgAstronaut, es: 'un astronauta valiente', en: 'a brave astronaut', type: 'character', cue: 'wants to discover a new world' },
  { id: 'robot', url: imgRobot, es: 'un amigo robot', en: 'a robot friend', type: 'character', cue: 'knows a secret code' },
  { id: 'dog', url: imgDog, es: 'una mascota perdida', en: 'a lost pet', type: 'animal', cue: 'needs help getting home' },
  { id: 'cat', url: imgCat, es: 'un gato curioso', en: 'a curious cat', type: 'animal', cue: 'follows a strange sound' },
  { id: 'forest', url: imgForest, es: 'un bosque misterioso', en: 'a mysterious forest', type: 'place', cue: 'hides a surprising path' },
  { id: 'space', url: imgSpace, es: 'el espacio exterior', en: 'outer space', type: 'place', cue: 'changes the rules of time' },
  { id: 'city', url: imgCity, es: 'una ciudad ocupada', en: 'a busy city', type: 'place', cue: 'is full of clues' },
  { id: 'house', url: imgHouse, es: 'una casa antigua', en: 'an old house', type: 'place', cue: 'has a locked room' },
  { id: 'food', url: imgFood, es: 'una comida especial', en: 'a special meal', type: 'object', cue: 'starts an unexpected memory' },
  { id: 'sports', url: imgSports, es: 'un reto deportivo', en: 'a sports challenge', type: 'object', cue: 'tests the hero’s courage' },
  { id: 'weather', url: imgWeather, es: 'un cambio de clima', en: 'a weather change', type: 'place', cue: 'creates the main problem' },
  { id: 'family', url: imgFamily, es: 'una familia unida', en: 'a close family', type: 'character', cue: 'must make a difficult decision' },
  { id: 'tech', url: imgTeensTech, es: 'un dispositivo extraño', en: 'a strange device', type: 'object', cue: 'can send one message to the future' },
  { id: 'apps', url: imgTeensApps, es: 'una app misteriosa', en: 'a mysterious app', type: 'object', cue: 'appears on every phone' },
  { id: 'party', url: imgTeensParty, es: 'una fiesta sorpresa', en: 'a surprise party', type: 'place', cue: 'reveals a hidden plan' },
  { id: 'music', url: imgTeensMusic, es: 'una canción importante', en: 'an important song', type: 'object', cue: 'reminds everyone of the truth' },
  { id: 'cafeteria', url: imgTeensCafe, es: 'una cafetería escolar', en: 'a school cafeteria', type: 'place', cue: 'is where the rumor begins' },
  { id: 'mystery', url: imgMystery, es: 'una criatura rara', en: 'a strange creature', type: 'character', cue: 'is not as scary as it looks' },
  { id: 'treasure', url: imgTreasure, es: 'una búsqueda del tesoro', en: 'a treasure hunt', type: 'object', cue: 'requires teamwork' },
  { id: 'showtell', url: imgShowTell, es: 'una presentación especial', en: 'a special presentation', type: 'object', cue: 'changes how people see the hero' }
];

export const storyPrompts = [
  "Start with a normal day that suddenly becomes impossible to explain.",
  "Begin with a message that arrives at exactly the wrong time.",
  "Tell a story about someone who must choose between safety and curiosity.",
  "Create a mystery where the first clue looks ordinary.",
  "Start with a mistake that becomes the best decision of the day.",
  "Tell a story about a secret place that only appears once a year.",
  "Begin when two very different characters need each other.",
  "Create an adventure where the hero has only ten minutes to act.",
  "Start with a sound, a light, or a smell that nobody else notices.",
  "Tell a story where the ending changes the meaning of the beginning."
];

export const storyVocabWords = [
  'Suddenly',
  'Meanwhile',
  'Unfortunately',
  'Luckily',
  'Eventually',
  'Therefore',
  'However',
  'Although',
  'Because of',
  'Afterwards',
  'Out of nowhere',
  'To my surprise',
  'In the blink of an eye',
  'As a result',
  'In addition',
  'Believe it or not',
  'For instance',
  'On the other hand',
  'At that moment',
  'In the end'
];

export interface StoryStructure {
  title: string;
  focus: string;
  steps: string[];
}

export const storyStructures: StoryStructure[] = [
  {
    title: 'The Journey',
    focus: 'Adventure with a clear beginning, problem, and discovery.',
    steps: [
      'Opening: introduce the hero and the normal world.',
      'Trigger: something unusual pushes the hero to move.',
      'Challenge: the hero faces the biggest obstacle.',
      'Ending: show what changed and why it matters.'
    ]
  },
  {
    title: 'The Mystery',
    focus: 'A clue-based story with suspense and a final reveal.',
    steps: [
      'Discovery: someone finds something strange.',
      'Investigation: the hero follows two or three clues.',
      'Reveal: the truth is different from what everyone expected.',
      'Resolution: explain what happens after the mystery is solved.'
    ]
  },
  {
    title: 'Unexpected Team',
    focus: 'Two characters solve a problem by learning to cooperate.',
    steps: [
      'Setup: show why the characters are different.',
      'Problem: force them to work together.',
      'Turning point: one character helps the other.',
      'Ending: show their new relationship.'
    ]
  },
  {
    title: 'A Crazy Day',
    focus: 'Comedy or chaos that gets bigger scene by scene.',
    steps: [
      'First mistake: a small accident starts everything.',
      'Complication: the problem becomes bigger.',
      'Peak chaos: everything seems out of control.',
      'Calm ending: someone fixes it or learns from it.'
    ]
  }
];
