import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const replacements = {
  'prep_between.jpg': 'prep_between_1782951923220.jpg',
  'directions_ask.jpg': 'directions_ask_1782951949049.jpg',
  'prep_in.jpg': 'prep_in_1782951888044.jpg',
  'prep_on.jpg': 'prep_on_1782951896697.jpg',
  'prep_under.jpg': 'prep_under_1782951906091.jpg',
  'prep_next_to.jpg': 'prep_next_to_1782951915400.jpg',
  'prep_across.jpg': 'prep_across_1782951931375.jpg',
  'directions_give.jpg': 'directions_give_1782951939884.jpg',
  'adults_c10_emoji.jpg': 'adults_c10_emoji_1783000695924.jpg',
  'teens_complete.jpg': 'teens_complete_1782770593439.jpg',
  'adults_c10_homework.jpg': 'adults_c10_homework_1783000709392.jpg',
  'adults_c10_video.jpg': 'adults_c10_video_1783000723654.jpg',
  'teens_welcome.jpg': 'teens_welcome_1782770514921.jpg',
  'teens_social_welcome.jpg': 'teens_social_welcome_1782228078865.jpg',
  'teens_apps.jpg': 'teens_apps_1782770528421.jpg',
};

function isJpeg(filePath) {
  const signature = fs.readFileSync(filePath).subarray(0, 3);
  return signature[0] === 0xff && signature[1] === 0xd8 && signature[2] === 0xff;
}

for (const [publicName, sourceName] of Object.entries(replacements)) {
  const source = path.resolve(root, 'src', 'assets', 'images', sourceName);
  const destination = path.resolve(root, 'public', 'images', publicName);
  if (!source.startsWith(root) || !destination.startsWith(root)) throw new Error('Ruta fuera del workspace.');
  if (!fs.existsSync(source) || !isJpeg(source)) throw new Error(`Original JPEG inválido: ${source}`);
  fs.copyFileSync(source, destination);
  if (!isJpeg(destination)) throw new Error(`La restauración falló: ${destination}`);
  console.log(`Restaurada: public/images/${publicName} ← src/assets/images/${sourceName}`);
}
