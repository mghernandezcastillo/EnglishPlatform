import { execSync } from 'child_process';

async function main() {
  for (let i = 0; i < 5; i++) {
    console.log(`\n\n--- Run ${i+1} ---`);
    try {
      execSync('npx -y tsx generate-missing-slides.ts', { stdio: 'inherit' });
    } catch (e) {
      console.log('Script failed or timed out. Retrying...');
    }
  }
}
main();
