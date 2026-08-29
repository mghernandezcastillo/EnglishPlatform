import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function checkVoices() {
  const apiKey = 'sk_2041600b70ce08c87e8933008e947cc2515087aff4124ce4';
  const res = await fetch('https://api.elevenlabs.io/v1/voices', {
    headers: { 'xi-api-key': apiKey }
  });
  if (!res.ok) {
    console.log('Error:', res.status, await res.text());
    return;
  }
  const data = await res.json();
  console.log('Total voices:', data.voices?.length);
  data.voices?.forEach(v => {
    console.log(`- ID: ${v.voice_id} | Name: ${v.name} | Category: ${v.category} | Labels:`, v.labels);
  });
}
checkVoices();
