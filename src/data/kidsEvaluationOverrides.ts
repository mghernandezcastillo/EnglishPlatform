import { CurriculumLevel, OralQuestion, VirtualQuestion } from '../types';
import imgMagicGreeting from '../assets/images/cute_greeting_symbols_1781981906141.jpg';
import imgColorfulNumbers from '../assets/images/colorful_numbers_kids_1781982882996.jpg';
import imgCutePets from '../assets/images/cute_pets_kids_1781982896917.jpg';
import imgMonsterBody from '../assets/images/monster_body_parts_1781982909851.jpg';
import imgKidsAction from '../assets/images/kids_action_verbs_1781982923116.jpg';
import imgCuteFamily from '../assets/images/cute_family_kids_1781982934785.jpg';
import imgKidsAssessment from '../assets/images/kids_assessment_welcome_1782139154509.jpg';
import imgKidsWakeup from '../assets/images/kids_q_wakeup_1782139210255.jpg';
import imgFeelingsFaces from '../assets/images/feelings_faces_kids_1781982946141.jpg';
import imgFoodDrinks from '../assets/images/food_drinks_kids_1781983103412.jpg';
import imgClothesWeather from '../assets/images/clothes_weather_kids_1781983117508.jpg';
import imgWildAnimals from '../assets/images/wild_animals_kids_1781983130013.jpg';
import imgHouseRooms from '../assets/images/house_rooms_kids_1781983143054.jpg';
import imgVehiclesTown from '../assets/images/vehicles_town_kids_1781983157009.jpg';
import imgDailyRoutine from '../assets/images/daily_routine_kids_1781983170664.jpg';
import imgToysGames from '../assets/images/toys_games_kids_1781985733126.jpg';
import imgNature from '../assets/images/nature_kids_1781985762002.jpg';
import imgJobs from '../assets/images/jobs_places_kids_1781985788190.jpg';
import imgHobbies from '../assets/images/hobbies_sports_kids_1781985815627.jpg';
import imgHolidays from '../assets/images/holidays_kids_1781985829248.jpg';
import imgSpace from '../assets/images/space_kids_1781985843535.jpg';
import imgShowAndTell from '../assets/images/kids_show_and_tell_1782138903791.jpg';

type KidsEvaluationOverride = {
  oralEvaluation: OralQuestion[];
  virtualEvaluation: VirtualQuestion[];
};

function multipleChoice(
  id: string,
  question: string,
  options: [string, string, string],
  correctAnswer: string,
  imageUrl: string,
): VirtualQuestion {
  return {
    id,
    type: 'multiple-choice',
    question,
    options,
    correctAnswer,
    imageUrl,
  };
}

function listening(
  id: string,
  question: string,
  options: [string, string, string],
  correctAnswer: string,
  audioText: string,
  imageUrl: string,
): VirtualQuestion {
  return {
    id,
    type: 'listening',
    question,
    options,
    correctAnswer,
    audioText,
    imageUrl,
  };
}

const evaluationOverrides: Record<string, KidsEvaluationOverride> = {
  'basic-zero': {
    oralEvaluation: [
      { topic: 'HELLO AND COLORS', question: 'Say hello, say your name, and name two colors you like.' },
      { topic: 'NUMBERS AND ANIMALS', question: 'Count from one to five and name two animals.' },
      { topic: 'BODY AND ACTIONS', question: 'Point to two body parts and say one action like jump, run, or clap.' },
      { topic: 'TOYS, FRUITS, AND SHAPES', question: 'Talk about one toy, one fruit, and one shape using simple words.' },
      { topic: 'SCHOOL AND FARM', question: 'Name two school supplies and two farm animals in a short show-and-tell answer.' },
    ],
    virtualEvaluation: [
      multipleChoice('kids-basic-zero-v2-hello-colors', 'Which greeting is correct?', ['Hello!', 'Good pizza!', 'Blue morning!'], 'Hello!', imgMagicGreeting),
      multipleChoice('kids-basic-zero-v2-numbers-animals', 'Which option has a number and an animal?', ['three cats', 'purple jump', 'book table'], 'three cats', imgColorfulNumbers),
      multipleChoice('kids-basic-zero-v2-body-actions', 'Which sentence is correct?', ['I can clap my hands.', 'I can apple my hands.', 'I can yellow my hands.'], 'I can clap my hands.', imgMonsterBody),
      multipleChoice('kids-basic-zero-v2-toys', 'Which word is a toy?', ['ball', 'banana', 'teacher'], 'ball', imgToysGames),
      multipleChoice('kids-basic-zero-v2-fruits', 'Which word is a fruit?', ['strawberry', 'pencil', 'jacket'], 'strawberry', imgFoodDrinks),
      multipleChoice('kids-basic-zero-v2-shapes', 'Which word is a shape?', ['circle', 'tiger', 'schoolbag'], 'circle', imgColorfulNumbers),
      multipleChoice('kids-basic-zero-v2-school-supplies', 'Which item belongs in the classroom?', ['pencil', 'cow', 'grape'], 'pencil', imgKidsAssessment),
      listening('kids-basic-zero-v2-farm-animals', 'Listen. Which animal says moo?', ['cow', 'duck', 'horse'], 'cow', 'The cow is big. It says moo on the farm.', imgCutePets),
    ],
  },

  'basic-explorer': {
    oralEvaluation: [
      { topic: 'FAMILY AND FEELINGS', question: 'Talk about your family and say how two people feel.' },
      { topic: 'FOOD AND WEATHER', question: 'Say what food you like and describe the weather with one clothing item.' },
      { topic: 'NATURE AND ANIMALS', question: 'Name a nature place, one insect, and one sea animal.' },
      { topic: 'ACTIONS', question: 'Say two action verbs and make a short sentence with can.' },
      { topic: 'NUMBERS 11 TO 20', question: 'Count from eleven to twenty and use one number in a simple answer.' },
    ],
    virtualEvaluation: [
      multipleChoice('kids-basic-explorer-v2-family-feelings', 'Which sentence is correct?', ['My mom is happy.', 'My mom happy is a.', 'My mom is a cloud.'], 'My mom is happy.', imgCuteFamily),
      multipleChoice('kids-basic-explorer-v2-fast-food', 'Which food is fast food?', ['pizza', 'whale', 'socks'], 'pizza', imgFoodDrinks),
      multipleChoice('kids-basic-explorer-v2-clothes-weather', 'What do you wear on a rainy day?', ['a raincoat', 'a banana', 'a sofa'], 'a raincoat', imgClothesWeather),
      multipleChoice('kids-basic-explorer-v2-nature', 'Which word is from nature?', ['tree', 'hamburger', 'notebook'], 'tree', imgNature),
      multipleChoice('kids-basic-explorer-v2-bugs-insects', 'Which animal is an insect?', ['butterfly', 'shark', 'horse'], 'butterfly', imgNature),
      multipleChoice('kids-basic-explorer-v2-under-the-sea', 'Which animal lives in the sea?', ['fish', 'chicken', 'rabbit'], 'fish', imgNature),
      multipleChoice('kids-basic-explorer-v2-action-heroes', 'Which sentence uses an action verb?', ['I can run fast.', 'I can pencil fast.', 'I can cloudy fast.'], 'I can run fast.', imgKidsAction),
      listening('kids-basic-explorer-v2-numbers-11-20', 'Listen. What number do you hear?', ['thirteen', 'thirty', 'three'], 'thirteen', 'I have thirteen crayons in my box.', imgColorfulNumbers),
    ],
  },

  'basic-adventurer': {
    oralEvaluation: [
      { topic: 'ANIMALS AND HOME', question: 'Describe one wild animal and say two things in your house.' },
      { topic: 'TOWN AND JOBS', question: 'Name one vehicle, one place in town, and one job you like.' },
      { topic: 'MUSIC AND DAYS', question: 'Name one instrument and say what day of the week you play or listen to music.' },
      { topic: 'SHOPPING', question: 'Say what you want to buy and use numbers or colors in your answer.' },
      { topic: 'PLAYGROUND', question: 'Describe your favorite playground activity with a simple complete sentence.' },
    ],
    virtualEvaluation: [
      multipleChoice('kids-basic-adventurer-v2-wild-animals', 'Which animal is wild?', ['lion', 'goldfish', 'pencil'], 'lion', imgWildAnimals),
      multipleChoice('kids-basic-adventurer-v2-house', 'Which sentence is correct?', ['There is a bed in my room.', 'There is a bed in my lion.', 'There bed is room my.'], 'There is a bed in my room.', imgHouseRooms),
      multipleChoice('kids-basic-adventurer-v2-vehicles-town', 'Which vehicle goes on the road?', ['bus', 'whale', 'apple'], 'bus', imgVehiclesTown),
      multipleChoice('kids-basic-adventurer-v2-jobs', 'Who works in a hospital?', ['doctor', 'pilot', 'chef hat'], 'doctor', imgJobs),
      multipleChoice('kids-basic-adventurer-v2-music', 'Which word is a musical instrument?', ['guitar', 'window', 'tree'], 'guitar', imgHobbies),
      multipleChoice('kids-basic-adventurer-v2-days-of-week', 'Which option is a day of the week?', ['Monday', 'Summer', 'Blue'], 'Monday', imgKidsWakeup),
      multipleChoice('kids-basic-adventurer-v2-shopping', 'Which sentence is correct for shopping?', ['I want two red apples, please.', 'I want two red bus, please.', 'I want apples two red please want.'], 'I want two red apples, please.', imgFoodDrinks),
      listening('kids-basic-adventurer-v2-playground', 'Listen. What does Mia like to do?', ['She likes to slide.', 'She likes to sleep in class.', 'She likes to drive a bus.'], 'She likes to slide.', 'Mia goes to the playground after school. She likes to slide and swing with her friends.', imgToysGames),
    ],
  },

  'basic-champion': {
    oralEvaluation: [
      { topic: 'DAILY ROUTINE', question: 'Describe your daily routine with two or three actions and one time.' },
      { topic: 'HOBBIES AND SPORTS', question: 'Talk about your favorite hobby or sport and say why you like it.' },
      { topic: 'HOLIDAYS AND SEASONS', question: 'Describe one holiday and say what season you like best.' },
      { topic: 'SPACE AND STORIES', question: 'Talk about space or a fairy-tale character using simple details.' },
      { topic: 'HELPERS AND THE WORLD', question: 'Describe one helper job and name one country or place in the world.' },
    ],
    virtualEvaluation: [
      multipleChoice('kids-basic-champion-v2-daily-routine', 'Which sentence is correct?', ['I wake up at seven o\'clock.', 'I wake up in seven o\'clock.', 'I wake seven clock at.'], 'I wake up at seven o\'clock.', imgDailyRoutine),
      multipleChoice('kids-basic-champion-v2-hobbies-sports', 'Which sentence is correct?', ['I like playing soccer.', 'I like play soccering.', 'I am like soccer play.'], 'I like playing soccer.', imgHobbies),
      multipleChoice('kids-basic-champion-v2-holidays', 'Which activity matches a holiday celebration?', ['We decorate the tree.', 'We park the submarine.', 'We brush the elephant.'], 'We decorate the tree.', imgHolidays),
      multipleChoice('kids-basic-champion-v2-space', 'Which word belongs to space?', ['planet', 'sandwich', 'raincoat'], 'planet', imgSpace),
      multipleChoice('kids-basic-champion-v2-fairy-tales', 'Which character belongs to a fairy tale?', ['princess', 'traffic light', 'notebook'], 'princess', imgShowAndTell),
      multipleChoice('kids-basic-champion-v2-seasons', 'Which season is cold?', ['winter', 'pizza', 'Thursday'], 'winter', imgNature),
      multipleChoice('kids-basic-champion-v2-helpers', 'Who helps people in an emergency?', ['firefighter', 'banana', 'blanket'], 'firefighter', imgJobs),
      listening('kids-basic-champion-v2-around-the-world', 'Listen. Where does Leo want to travel?', ['Japan', 'the moon', 'his pencil case'], 'Japan', 'Leo wants to travel around the world. He dreams of visiting Japan and trying new food there.', imgKidsAssessment),
    ],
  },
};

export function applyKidsEvaluationOverrides(levels: CurriculumLevel[]) {
  for (const level of levels) {
    const override = evaluationOverrides[level.id];
    if (!override) continue;
    level.oralEvaluation = override.oralEvaluation;
    level.virtualEvaluation = override.virtualEvaluation;
  }
}
