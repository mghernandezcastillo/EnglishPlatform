import https from 'https';

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const queries = ['backpack', 'school-supplies', 'mathematics', 'science-lab', 'history-book', 'english-class', 'physical-education', 'teenager-studying', 'notebook', 'pen', 'eraser', 'classroom', 'school-chat', 'quiz', 'fun-games'];
  for (const q of queries) {
    try {
      const html = await fetchHtml(`https://unsplash.com/s/photos/${q}`);
      const regex = /photo-[a-zA-Z0-9]{10}-[a-zA-Z0-9]{12}/g;
      const matches = [...new Set(html.match(regex))];
      if (matches.length > 0) {
        console.log(`${q} -> https://images.unsplash.com/${matches[0]}?auto=format&fit=crop&q=80&w=800`);
      } else {
        console.log(`${q} -> no match`);
      }
    } catch (e) {
      console.log(`${q} -> error`);
    }
  }
}

run();
