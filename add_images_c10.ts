import * as fs from 'fs';

const unsplashImages = [
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1506869640319-fea1a2753c61?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1541781774459-bb2af285cb13?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800"
];

function getRandomImage() {
  return unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
}

let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const class10Start = content.indexOf('"id": "c-bz-10"');
const class10End = class10Start + 12000;

if (class10Start !== -1 && class10End !== -1) {
  let section = content.substring(class10Start, class10End);
  
  let lines = section.split('\n');
  let changed = 0;
  
  lines = lines.map(line => {
    if (line.includes('{') && line.includes('"id": "') && !line.includes('"imageUrl":')) {
      // Find where to insert imageUrl. Let's insert it before bgColor or at the end of the slide
      if (line.includes('"bgColor":')) {
        const img = getRandomImage();
        changed++;
        return line.replace(/"bgColor": "([^"]*)",/, `"bgColor": "$1",\n                "imageUrl": "${img}",`);
      } else {
        const img = getRandomImage();
        changed++;
        return line.replace(/\}$/, `, "imageUrl": "${img}" }`);
      }
    }
    return line;
  });
  
  if (changed > 0) {
    content = content.substring(0, class10Start) + lines.join('\n') + content.substring(class10End);
    fs.writeFileSync('src/data/curriculum.ts', content, 'utf8');
    console.log(`Added imageUrl to ${changed} slides in Class 10.`);
  } else {
    console.log('No slides needed imageUrl update.');
  }
} else {
  console.log('Could not find class bounds.');
}
