export interface StoryAsset {
  id: string;
  url: string;
  es: string;
  en: string;
  type: 'character' | 'object' | 'place' | 'animal';
}

export const storyImages: StoryAsset[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400', es: 'un perro beagle', en: 'a beagle dog', type: 'animal' },
  { id: '2', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400', es: 'un gato curioso', en: 'a curious cat', type: 'animal' },
  { id: '3', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400', es: 'un robot antiguo', en: 'an old robot', type: 'object' },
  { id: '4', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400', es: 'el planeta tierra', en: 'planet earth', type: 'place' },
  { id: '5', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400', es: 'un chip de computadora', en: 'a computer chip', type: 'object' },
  { id: '6', url: 'https://images.unsplash.com/photo-1520697830682-8f7d98344697?auto=format&fit=crop&q=80&w=400', es: 'un auto deportivo rojo', en: 'a red sports car', type: 'object' },
  { id: '7', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400', es: 'una playa tropical', en: 'a tropical beach', type: 'place' },
  { id: '8', url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=400', es: 'un bosque oscuro', en: 'a dark forest', type: 'place' },
  { id: '9', url: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=400', es: 'una cámara fotográfica', en: 'a photo camera', type: 'object' },
  { id: '10', url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400', es: 'un cachorro feliz', en: 'a happy puppy', type: 'animal' },
  { id: '11', url: 'https://images.unsplash.com/photo-1506744626753-1fa760472643?auto=format&fit=crop&q=80&w=400', es: 'una montaña nevada', en: 'a snowy mountain', type: 'place' },
  { id: '12', url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=400', es: 'pintura colorida', en: 'colorful paint', type: 'object' },
  { id: '13', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400', es: 'cielo estrellado', en: 'starry sky', type: 'place' },
  { id: '14', url: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=400', es: 'un plátano amarillo', en: 'a yellow banana', type: 'object' },
  { id: '15', url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=400', es: 'un astronauta', en: 'an astronaut', type: 'character' },
  { id: '16', url: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=400', es: 'un cohete', en: 'a rocket', type: 'object' },
  { id: '17', url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=400', es: 'un excursionista', en: 'a hiker', type: 'character' },
  { id: '18', url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=400', es: 'un ciclista', en: 'a cyclist', type: 'character' },
  { id: '19', url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400', es: 'un perro con gafas', en: 'a dog with glasses', type: 'character' },
  { id: '20', url: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=400', es: 'un faro', en: 'a lighthouse', type: 'place' }
];

export const storyPrompts = [
  "Start your story with an unexpected journey where...",
  "It all began on a dark and stormy night when...",
  "A long time ago in a distant place...",
  "Nobody expected that day to be so special, but...",
  "Suddenly, a strange noise was heard coming from...",
  "Once upon a time, there was a legend about...",
  "Everything was normal until...",
  "In a future not too far from now...",
  "Lost in the middle of nowhere, they found...",
  "The secret was finally revealed when..."
];

export const storyVocabWords = [
  "Suddenly",
  "Meanwhile",
  "Unfortunately",
  "Luckily",
  "Eventually",
  "Therefore",
  "However",
  "Although",
  "Because of",
  "Afterwards",
  "Out of nowhere",
  "To my surprise",
  "In the blink of an eye",
  "As a result",
  "To sum up",
  "In addition",
  "Believe it or not",
  "For instance",
  "On the other hand",
  "In conclusion"
];

export interface StoryStructure {
  title: string;
  steps: string[];
}

export const storyStructures: StoryStructure[] = [
  {
    title: "El Viaje (The Journey)",
    steps: [
      "1. Inicio: Presenta al personaje y su situación normal.",
      "2. El Problema: Algo inesperado rompe la rutina.",
      "3. Clímax: El personaje enfrenta su mayor desafío.",
      "4. Final: Cómo se resuelve todo."
    ]
  },
  {
    title: "El Misterio (The Mystery)",
    steps: [
      "1. Descubrimiento: Alguien encuentra algo extraño.",
      "2. Investigación: Buscan pistas para entender qué pasa.",
      "3. Revelación: Descubren la sorprendente verdad.",
      "4. Conclusión: El misterio queda resuelto."
    ]
  },
  {
    title: "Encuentro Inesperado (Unexpected Meeting)",
    steps: [
      "1. Situación: Un día que parecía completamente normal.",
      "2. El Encuentro: Dos cosas o personas muy distintas se cruzan.",
      "3. Conflicto: Tienen un problema juntos.",
      "4. Desenlace: Logran entenderse o escapar de la situación."
    ]
  },
  {
    title: "Un Día de Locos (A Crazy Day)",
    steps: [
      "1. El Primer Error: Todo empieza con un pequeño accidente.",
      "2. Efecto Dominó: Las cosas se complican cada vez más.",
      "3. Caos Total: La situación parece no tener solución.",
      "4. La Calma: Alguien o algo arregla todo al final."
    ]
  }
];
