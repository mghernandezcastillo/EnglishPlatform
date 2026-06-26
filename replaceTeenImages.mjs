import fs from 'fs';

let content = fs.readFileSync('src/data/curriculumTeens.ts', 'utf-8');

const importBlockRegex = /import imgMagicGreeting[\s\S]*?import imgShowAndTell.*?;/;

const newImports = `import imgTeenSocial from '../assets/images/teens_social_welcome_1782228078865.jpg';
import imgTeenHobbies from '../assets/images/teens_cool_hobbies_1782228092845.jpg';
import imgTeenWarmup from '../assets/images/teens_energy_warmup_1782228109142.jpg';
import imgTeenAssessment from '../assets/images/teens_assessment_welcome_1782228127925.jpg';
import imgTeenGreeting from '../assets/images/teen_greeting_1782228957842.jpg';
import imgTeenLifestyle from '../assets/images/teen_lifestyle_1782228974065.jpg';

const imgMagicGreeting = imgTeenGreeting;
const imgWhale = imgTeenLifestyle;
const imgFrog = imgTeenSocial;
const imgSun = imgTeenWarmup;
const imgMonster = imgTeenAssessment;
const imgColorfulNumbers = imgTeenHobbies;
const imgCutePets = imgTeenLifestyle;
const imgMonsterBody = imgTeenAssessment;
const imgKidsAction = imgTeenWarmup;
const imgCuteFamily = imgTeenSocial;
const imgFeelingsFaces = imgTeenGreeting;
const imgFoodDrinks = imgTeenLifestyle;
const imgClothesWeather = imgTeenHobbies;
const imgWildAnimals = imgTeenSocial;
const imgHouseRooms = imgTeenLifestyle;
const imgVehiclesTown = imgTeenWarmup;
const imgDailyRoutine = imgTeenHobbies;
const imgToysGames = imgTeenHobbies;
const imgNature = imgTeenSocial;
const imgJobs = imgTeenAssessment;
const imgHobbies = imgTeenHobbies;
const imgHolidays = imgTeenSocial;
const imgSpace = imgTeenLifestyle;
const imgWarmUp = imgTeenWarmup;
const imgHighFive = imgTeenWarmup;
const imgShowAndTell = imgTeenGreeting;
`;

content = content.replace(importBlockRegex, newImports);

fs.writeFileSync('src/data/curriculumTeens.ts', content);
console.log("Updated images in teens curriculum");
