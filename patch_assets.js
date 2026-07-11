const fs = require('fs');

const data = fs.readFileSync('src/data/storyAssets.ts', 'utf8');

const additionalData = `
export interface StoryStructure {
  title: string;
  steps: string[];
}

export const storyStructures: StoryStructure[] = [
  {
    title: "El Viaje (The Journey)",
    steps: [
      "1. Inicio: Presenta al protagonista en su situación normal.",
      "2. El Problema: Algo inesperado rompe la rutina.",
      "3. Clímax: El protagonista enfrenta su mayor desafío.",
      "4. Final: Cómo se resuelve todo."
    ]
  },
  {
    title: "El Misterio (The Mystery)",
    steps: [
      "1. Descubrimiento: Alguien encuentra algo muy extraño.",
      "2. Investigación: Buscan pistas para entender qué pasa.",
      "3. Revelación: Descubren la sorprendente verdad.",
      "4. Conclusión: El misterio queda resuelto."
    ]
  },
  {
    title: "Encuentro Inesperado (Unexpected Meeting)",
    steps: [
      "1. Situación: Un día que parecía completamente normal.",
      "2. El Encuentro: Dos personajes o elementos muy distintos se cruzan.",
      "3. Conflicto: Tienen un malentendido o un problema juntos.",
      "4. Desenlace: Logran entenderse o escapar de la situación."
    ]
  },
  {
    title: "Un Día de Locos (A Crazy Day)",
    steps: [
      "1. El Primer Error: Todo empieza con un pequeño accidente.",
      "2. Efecto Dominó: Las cosas se complican cada vez más.",
      "3. Caos Total: La situación parece no tener solución.",
      "4. La Calma: Alguien o algo logra arreglar todo al final."
    ]
  }
];
`;

fs.writeFileSync('src/data/storyAssets.ts', data + '\n' + additionalData);
