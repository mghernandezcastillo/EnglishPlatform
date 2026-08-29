import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function testTTS(voiceId, voiceName) {
  const apiKey = 'sk_2041600b70ce08c87e8933008e947cc2515087aff4124ce4';
  const text = 'Good morning class! Welcome to your English lesson. Today we are practicing listening.';
  
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
      'Accept': 'audio/mpeg'
    },
    body: JSON.stringify({
      text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.55,
        similarity_boost: 0.75,
        style: 0.0,
        use_speaker_boost: true
      }
    })
  });
  
  console.log(`Testing ${voiceName} (${voiceId}) -> Status: ${res.status}`);
  if (!res.ok) {
    console.log('Error:', await res.text());
  } else {
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(`scripts/test_${voiceName}.mp3`, buf);
    console.log(`Success! Saved test_${voiceName}.mp3 (${buf.length} bytes)`);
  }
}

async function run() {
  await testTTS('EXAVITQu4vr4xnSDxMaL', 'sarah');
}
run();
