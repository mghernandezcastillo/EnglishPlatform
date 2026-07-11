const fs = require('fs');

function fixFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/"title_override"/g, '"title"');
  content = content.replace(/"type": "standard"/g, '"type": "normal"');
  
  // Also we need to make sure `description` is present if TS complains.
  // Actually, we can just make `description` optional in `ClassSlide`!
  return content;
}
