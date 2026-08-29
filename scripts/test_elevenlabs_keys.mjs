import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const keys = [
  { email: 'mghernandezcastillo@gmail.com', key: process.env.ELEVENLABS_KEY_1 },
  { email: 'michercasmoto@gmail.com', key: process.env.ELEVENLABS_KEY_2 },
  { email: 'marcela.drs2012@gmail.com', key: process.env.ELEVENLABS_KEY_3 },
  { email: 'imperiumintro@gmail.com', key: process.env.ELEVENLABS_KEY_4 },
  { email: 'Englishforworkapp@gmail.com', key: process.env.ELEVENLABS_KEY_5 }
];

async function checkKey(item) {
  if (!item.key) {
    return { email: item.email, valid: false, error: 'No key provided' };
  }
  try {
    const res = await fetch('https://api.elevenlabs.io/v1/user/subscription', {
      headers: { 'xi-api-key': item.key }
    });
    if (!res.ok) {
      const errText = await res.text();
      return { email: item.email, valid: false, error: `HTTP ${res.status}: ${errText}` };
    }
    const data = await res.json();
    return {
      email: item.email,
      key: item.key,
      valid: true,
      tier: data.tier,
      character_count: data.character_count,
      character_limit: data.character_limit,
      available_characters: data.character_limit - data.character_count,
      can_extend_character_limit: data.can_extend_character_limit,
      status: data.status
    };
  } catch (err) {
    return { email: item.email, valid: false, error: err.message };
  }
}

async function main() {
  console.log('Testing ElevenLabs API keys...\n');
  const results = await Promise.all(keys.map(checkKey));
  console.log(JSON.stringify(results, null, 2));
}

main();
