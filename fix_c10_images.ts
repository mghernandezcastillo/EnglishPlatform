import * as fs from 'fs';

let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

const replacements: Record<string, string> = {
  '"/images/prep_in.jpg"': '"https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&q=80&w=800"',
  '"/images/prep_on.jpg"': '"https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?auto=format&fit=crop&q=80&w=800"',
  '"/images/prep_under.jpg"': '"https://images.unsplash.com/photo-1541781774459-bb2af285cb13?auto=format&fit=crop&q=80&w=800"',
  '"/images/prep_next_to.jpg"': '"https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=800"',
  '"/images/prep_between.jpg"': '"https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=800"',
  '"/images/prep_across.jpg"': '"https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800"',
  '"/images/directions_give.jpg"': '"https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"',
  '"/images/directions_ask.jpg"': '"https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"'
};

for (const [localUrl, unsplashUrl] of Object.entries(replacements)) {
  content = content.split(localUrl).join(unsplashUrl);
}

fs.writeFileSync('src/data/curriculum.ts', content, 'utf8');
console.log('Replaced local images with Unsplash images.');
