import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testModel(modelId) {
  const apiKey = 'sk_2041600b70ce08c87e8933008e947cc2515087aff4124ce4';
  const voiceId = 'EXAVITQu4vr4xnSDxMaL';
  const text = 'Welcome to class! Today we are practicing our listening skills.';
  
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'audio/mpeg'
    },
    body: JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: {
        stability: 0.55,
        similarity_boost: 0.75
      }
    })
  });
  
  console.log(`Model ${modelId} -> Status: ${res.status}`);
  if (res.ok) {
    const buf = Buffer.from(await res.arrayBuffer());
    console.log(`Success! Size: ${buf.length} bytes`);
  } else {
    console.log('Error:', await res.text());
  }
}

async function run() {
  await testModel('eleven_turbo_v2_5');
  await testModel('eleven_multilingual_v2');
}
run();
