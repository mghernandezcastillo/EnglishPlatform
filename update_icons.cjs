const fs = require('fs');

const lessonIcons = {
  'l1': "👋",
  'l2': "🤝",
  'l3': "🌍",
  'l4': "🔤",
  'l5': "🔢",
  'l6': "💻",
  'l7': "🙋‍♂️",
  'l8': "🧍‍♀️",
  'l9': "👨‍👩‍👧‍👦",
  'l10': "⏰",
  'l11': "❤️",
  'l12': "🏆",
  'verb_to_be_1': "⭐",
  'verb_to_be_2': "⏳",
  'do_does_1': "🛠️",
  'numbers_1': "🥇",
  'present_tenses_1': "🎸",
  'present_tenses_2': "✈️",
  'past_tenses_1': "🌧️",
  'future_tenses_1': "🔮",
  'connectors_1': "🧩",
  'prepositions_1': "🗺️",
};

function injectIcons(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  for (const [id, icon] of Object.entries(lessonIcons)) {
    // Busca la posicion de id:
    const regex = new RegExp(`(id: '${id}',\\s*\\n)`);
    if (content.match(regex)) {
      content = content.replace(regex, `$1    icon3D: '${icon}',\n`);
    }
  }

  fs.writeFileSync(filePath, content);
}

injectIcons('src/data/lessons.ts');
injectIcons('src/data/libraryLessons.ts');
