import confetti from 'canvas-confetti';

/**
 * Multi-stage celebratory confetti explosion for class/assessment completion.
 */
export function fireClassCompletionConfetti() {
  // Stage 1: Big center burst
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.58 },
    colors: ['#38bdf8', '#818cf8', '#c084fc', '#f472b6', '#fbbf24', '#34d399'],
  });

  // Stage 2: Dual side cannons
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 75,
      origin: { x: 0.05, y: 0.72 },
      colors: ['#38bdf8', '#fbbf24', '#34d399', '#f472b6'],
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 75,
      origin: { x: 0.95, y: 0.72 },
      colors: ['#38bdf8', '#fbbf24', '#34d399', '#f472b6'],
    });
  }, 220);

  // Stage 3: High golden shimmer
  setTimeout(() => {
    confetti({
      particleCount: 70,
      spread: 120,
      origin: { y: 0.35 },
      shapes: ['star', 'circle'],
      colors: ['#fbbf24', '#f59e0b', '#38bdf8', '#a855f7'],
    });
  }, 450);
}
