import * as fs from 'fs';
import * as path from 'path';

const srcDir = 'src/assets/images';
const destDir = 'public/images';

const files = fs.readdirSync(srcDir);

for (const file of files) {
  if (file.endsWith('.jpg')) {
    // match the base name before _123456789.jpg
    const match = file.match(/^(.*)_\d+\.jpg$/);
    if (match) {
      const baseName = match[1] + '.jpg';
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, baseName);
      
      // Copy the file
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${baseName}`);
    }
  }
}
