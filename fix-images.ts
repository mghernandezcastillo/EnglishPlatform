import fs from 'fs';

let code = fs.readFileSync('src/data/curriculum.ts', 'utf-8');

const brokenUrls = [
"https://images.unsplash.com/photo-1545696563-711130d2ded5",
"https://images.unsplash.com/photo-1543269664-56d569ef812a",
"https://images.unsplash.com/photo-1542037104857-ffbb0b915524",
"https://images.unsplash.com/photo-1581954718047-669c5e53ade2",
"https://images.unsplash.com/photo-1529156069898-49953eb1b5ea",
"https://images.unsplash.com/photo-1514924013411-ccefac373274",
"https://images.unsplash.com/photo-1506784951209-506e12e3e9d8",
"https://images.unsplash.com/photo-1522204657746-fccce0824cfd",
"https://images.unsplash.com/photo-1530103862676-de8892bf9830",
"https://images.unsplash.com/photo-1509361715424-6997fecc2aa9",
"https://images.unsplash.com/photo-1478546197368-ffae95eb48ba",
"https://images.unsplash.com/photo-1414235077428-33898dc18059",
"https://images.unsplash.com/photo-1548345680-f5475ea90f14",
"https://images.unsplash.com/photo-1499557008133-1ec949679f22",
"https://images.unsplash.com/photo-1518382455982-f56b509bc628",
"https://images.unsplash.com/photo-1485808191679-5f82958281be",
"https://images.unsplash.com/photo-1510148199876-8a856ce07e44",
"https://images.unsplash.com/photo-1542382257-80da9fb9f5ea",
"https://images.unsplash.com/photo-1541807361-9c60e0eb8ec0",
"https://images.unsplash.com/photo-1581454173872-466d8ba151fb",
"https://images.unsplash.com/photo-1435527173128-9836ae9b626e",
"https://images.unsplash.com/photo-1541887140889-cb6835de5076",
"https://images.unsplash.com/photo-1556740714-a836da812165",
"https://images.unsplash.com/photo-1587391151609-b68a35606d15",
"https://images.unsplash.com/photo-1556761175-5973dc0f32d7",
"https://images.unsplash.com/photo-1506784951209-5e265c84a83b",
"https://images.unsplash.com/photo-1580828369119-2169b15239e2",
"https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
  "https://images.unsplash.com/photo-1552664730-d307ca884978"
];

let fallbackIndex = 0;
brokenUrls.forEach((url) => {
  const replacement = fallbackImages[fallbackIndex % fallbackImages.length];
  code = code.split(url).join(replacement);
  fallbackIndex++;
});

fs.writeFileSync('src/data/curriculum.ts', code);
console.log('Fixed broken images');
