import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, '..', 'public', 'data', 'story-decoder-curriculum.json');
const rawData = fs.readFileSync(jsonPath, 'utf8');
const data = JSON.parse(rawData);

// Common speech & verb synonym dictionaries
const SPEECH_SYNONYMS = {
  "tells him": ["says to him", "explains to him"],
  "tells her": ["says to her", "explains to her"],
  "says to him": ["tells him", "explains to him"],
  "says to her": ["tells her", "explains to her"],
  "replies to her": ["answers her", "responds to her"],
  "replies to him": ["answers him", "responds to him"],
  "answers her": ["replies to her", "responds to her"],
  "answers him": ["replies to him", "responds to him"],
  "shows her": ["displays to her", "presents to her"],
  "shows him": ["displays to him", "presents to him"],
  "asks her": ["inquires of her", "questions her"],
  "asks him": ["inquires of him", "questions him"],
  "looks at": ["inspects", "checks"],
  "helps": ["assists", "supports"],
  "starts": ["begins", "launches"],
  "opens": ["unlocks", "uncovers"],
  "buys": ["purchases", "gets"]
};

// Generate contraction and synonym variations for accepted_answers
function generateAcceptedVariations(enText) {
  const variations = new Set([enText]);

  // Contraction variations
  let v1 = enText
    .replace(/does not/g, "doesn't")
    .replace(/do not/g, "don't")
    .replace(/is not/g, "isn't")
    .replace(/are not/g, "aren't")
    .replace(/did not/g, "didn't")
    .replace(/will not/g, "won't")
    .replace(/can not/g, "can't")
    .replace(/cannot/g, "can't");
  variations.add(v1);

  let v2 = enText
    .replace(/doesn't/g, "does not")
    .replace(/don't/g, "do not")
    .replace(/isn't/g, "is not")
    .replace(/aren't/g, "are not")
    .replace(/didn't/g, "did not")
    .replace(/won't/g, "will not")
    .replace(/can't/g, "cannot");
  variations.add(v2);

  // Speech verb variations
  for (const [key, synList] of Object.entries(SPEECH_SYNONYMS)) {
    if (enText.includes(key)) {
      synList.forEach(syn => {
        variations.add(enText.replace(key, syn));
        variations.add(v1.replace(key, syn));
        variations.add(v2.replace(key, syn));
      });
    }
  }

  return Array.from(variations);
}

// Build synonym map for a line based on SPEECH_SYNONYMS
function buildSynonymMap(enText) {
  const map = {};
  for (const [key, synList] of Object.entries(SPEECH_SYNONYMS)) {
    if (enText.includes(key)) {
      map[key] = synList;
    }
  }
  return map;
}

let totalLinesProcessed = 0;
let totalStoriesProcessed = 0;

data.blocks.forEach(block => {
  block.lessons.forEach(lesson => {
    lesson.stories.forEach(story => {
      totalStoriesProcessed++;
      story.lines.forEach((line, idx) => {
        totalLinesProcessed++;
        
        // Ensure line_role exists
        if (!line.line_role) {
          line.line_role = (idx === 0 || idx === story.lines.length - 1) ? 'context' : 'target';
        }

        // Upgrade accepted_answers with full variations
        const existingAccepted = line.accepted_answers || [line.en];
        const newVariations = generateAcceptedVariations(line.en);
        line.accepted_answers = Array.from(new Set([...existingAccepted, ...newVariations]));

        // Attach synonym_map
        const synMap = buildSynonymMap(line.en);
        line.synonym_map = { ...(line.synonym_map || {}), ...synMap };

        // Clean tokens for puzzle
        const cleanTokens = line.en.replace(/[’']/g, "'").replace(/[",.!?:]/g, '').split(/\s+/).filter(Boolean);

        // Ensure puzzle structure
        if (!line.puzzle) {
          const half = Math.ceil(cleanTokens.length / 2);
          const easy = [cleanTokens.slice(0, half).join(' '), cleanTokens.slice(half).join(' ')];
          const third = Math.ceil(cleanTokens.length / 3);
          const medium = [
            cleanTokens.slice(0, third).join(' '),
            cleanTokens.slice(third, third * 2).join(' '),
            cleanTokens.slice(third * 2).join(' ')
          ].filter(Boolean);

          line.puzzle = {
            easy_blocks: easy,
            medium_blocks: medium,
            hard_word_by_word: cleanTokens,
            expert_with_distractors: [...cleanTokens, "does", "did", "is", "have", "to", "not"],
            shuffle_on_each_attempt: true,
            avoid_position_hints: true
          };
        } else {
          line.puzzle.shuffle_on_each_attempt = true;
          line.puzzle.avoid_position_hints = true;
        }

        // Ensure vocabulary candidates exist for VocabVault
        if (!line.vocabulary_candidates || line.vocabulary_candidates.length === 0) {
          line.vocabulary_candidates = cleanTokens;
        }
      });
    });
  });
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅ ENTIRE CURRICULUM SUCCESSFULLY ENHANCED!`);
console.log(`📊 Processed ${data.blocks.length} Blocks, ${totalStoriesProcessed} Stories, and ${totalLinesProcessed} Lines.`);
