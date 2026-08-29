import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const API_KEYS = [
  process.env.ELEVENLABS_KEY_1 || 'sk_2041600b70ce08c87e8933008e947cc2515087aff4124ce4',
  process.env.ELEVENLABS_KEY_2 || 'sk_1fe7be0b881e1c4cc7b56ec189ce563e8c4829c6b86d77fa',
  process.env.ELEVENLABS_KEY_4 || 'sk_eb339569551f320591c17cc4831949988c75143de789a0d0',
  process.env.ELEVENLABS_KEY_5 || 'sk_52ea5689182e899fcb199e9d5f90e5841e659f67cd861e55'
].filter(Boolean);

const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Sarah - clear, friendly American accent
const MODEL_ID = 'eleven_turbo_v2_5'; // Fast, crisp, low latency

let currentKeyIndex = 0;

function getNextKey() {
  return API_KEYS[currentKeyIndex % API_KEYS.length];
}

function rotateKey() {
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  console.log(`🔄 Rotated to ElevenLabs Key Index ${currentKeyIndex}`);
}

async function synthesizeText(text, levelIndex, classId) {
  // Voice tuning by level
  let stability = 0.55;
  let similarity_boost = 0.75;
  if (levelIndex <= 1) {
    // Beginner: maximum clarity and steady cadence
    stability = 0.65;
    similarity_boost = 0.80;
  } else if (levelIndex >= 7) {
    // Advanced/Elite/Masters: dynamic, expressive
    stability = 0.50;
    similarity_boost = 0.75;
  }

  let attempts = 0;
  while (attempts < API_KEYS.length * 2) {
    const apiKey = getNextKey();
    try {
      const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg'
        },
        body: JSON.stringify({
          text,
          model_id: MODEL_ID,
          voice_settings: {
            stability,
            similarity_boost
          }
        })
      });

      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        return buffer;
      }

      const errBody = await res.text();
      console.warn(`⚠️ [${classId}] Key index ${currentKeyIndex} failed (${res.status}): ${errBody.slice(0, 120)}`);
      rotateKey();
      attempts++;
      await new Promise(r => setTimeout(r, 600));
    } catch (err) {
      console.warn(`⚠️ [${classId}] Network error with key ${currentKeyIndex}: ${err.message}`);
      rotateKey();
      attempts++;
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  throw new Error(`Failed to synthesize audio for ${classId} after multiple key rotations.`);
}

async function main() {
  const tsPath = path.resolve('src/data/curriculumTeensStudio.ts');
  const code = fs.readFileSync(tsPath, 'utf8');
  const result = await esbuild.transform(code, { loader: 'ts', format: 'cjs' });
  const moduleObj = { exports: {} };
  const fn = new Function('module', 'exports', 'require', result.code);
  fn(moduleObj, moduleObj.exports, (m) => m === './curriculum' ? {} : require(m));

  const levels = moduleObj.exports.curriculumTeensStudioLevels || [];
  const targetDir = path.resolve('public/audio/teens-listening');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`🎧 Starting ElevenLabs Studio Audio Generation for ${levels.length} levels...\n`);

  let totalProcessed = 0;
  let skippedCount = 0;
  let generatedCount = 0;

  for (let lIdx = 0; lIdx < levels.length; lIdx++) {
    const lvl = levels[lIdx];
    console.log(`\n======================================================`);
    console.log(`📁 Level ${lIdx}: ${lvl.title} (${lvl.classes.length} classes)`);
    console.log(`======================================================`);

    for (const cls of lvl.classes) {
      totalProcessed++;
      const slides = (cls.sections || []).flatMap(s => s.slides || []);
      const lSlide = slides.find(s => s.listeningData) || slides[7];
      if (!lSlide || !lSlide.listeningData) {
        console.warn(`⚠️ Skipping ${cls.id}: No listeningData`);
        continue;
      }

      const text = lSlide.listeningData.transcription || lSlide.listeningData.audioTeacherText;
      const destPath = path.join(targetDir, `${cls.id}.mp3`);

      // Check if exists and valid
      if (fs.existsSync(destPath)) {
        const stats = fs.statSync(destPath);
        if (stats.size > 2000) {
          skippedCount++;
          console.log(`⏩ [${totalProcessed}/99] ${cls.id} already exists (${stats.size} bytes), skipping.`);
          continue;
        }
      }

      console.log(`🎙️ [${totalProcessed}/99] Generating ${cls.id} (${text.length} chars)...`);
      console.log(`   Text: "${text}"`);
      
      const buffer = await synthesizeText(text, lIdx, cls.id);
      fs.writeFileSync(destPath, buffer);
      generatedCount++;
      console.log(`   ✅ Saved ${destPath} (${buffer.length} bytes)`);

      // 300ms pause between generations
      await new Promise(r => setTimeout(r, 300));
    }
  }

  console.log(`\n======================================================`);
  console.log(`🎉 Audio generation complete!`);
  console.log(`   Total classes: ${totalProcessed}`);
  console.log(`   Generated now: ${generatedCount}`);
  console.log(`   Already cached: ${skippedCount}`);
  console.log(`======================================================`);
}

main().catch(err => {
  console.error('Fatal error during audio generation:', err);
  process.exit(1);
});
