import fs from 'fs';
import https from 'https';

const code = fs.readFileSync('src/data/curriculum.ts', 'utf-8');
const urls = [...code.matchAll(/imageUrl:\s*"([^"]+)"/g)].map(m => m[1]);
const uniqueUrls = [...new Set(urls)];

async function checkUrl(url: string): Promise<number> {
  return new Promise((resolve) => {
    https.get(url, (res) => {
       resolve(res.statusCode || 500);
       res.resume();
    }).on('error', () => resolve(500));
  });
}

async function run() {
  console.log(`Checking ${uniqueUrls.length} urls...`);
  for (const url of uniqueUrls) {
    const status = await checkUrl(url);
    if (status !== 200 && status !== 301 && status !== 302) {
       console.log(`BROKEN: ${url} (Status: ${status})`);
    }
  }
  console.log('Done.');
}
run();
