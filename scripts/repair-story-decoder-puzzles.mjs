import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve(process.argv[2] || 'public/data/story-decoder-curriculum.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));

function sentenceTokens(value) {
  return value.match(/[\p{L}\p{M}\p{N}]+(?:[’'][\p{L}\p{M}\p{N}]+)*|[^\s\p{L}\p{M}\p{N}]/gu) || [];
}

function sentenceUnits(value) {
  return value.trim().split(/\s+/).filter(Boolean);
}

function normalizeSentence(value) {
  return value
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function multiset(values) {
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return counts;
}

function containsTokens(available, required) {
  const availableCounts = multiset(available);
  for (const [token, count] of multiset(required)) {
    if ((availableCounts.get(token) || 0) < count) return false;
  }
  return true;
}

function hasSameTokens(first, second) {
  return containsTokens(first, second) && containsTokens(second, first);
}

function canBuildFromBlocks(blocks, answer) {
  if (blocks.length > 8) return false;
  const expected = normalizeSentence(answer);
  const used = new Array(blocks.length).fill(false);

  function search(parts) {
    if (parts.length === blocks.length) return normalizeSentence(parts.join(' ')) === expected;
    for (let index = 0; index < blocks.length; index += 1) {
      if (used[index]) continue;
      used[index] = true;
      if (search([...parts, blocks[index]])) return true;
      used[index] = false;
    }
    return false;
  }

  return search([]);
}

function splitIntoBlocks(units, desiredBlocks) {
  const blockCount = Math.min(desiredBlocks, Math.max(units.length, 1));
  const blocks = [];
  let cursor = 0;

  for (let index = 0; index < blockCount; index += 1) {
    const remainingTokens = units.length - cursor;
    const remainingBlocks = blockCount - index;
    const take = Math.ceil(remainingTokens / remainingBlocks);
    blocks.push(units.slice(cursor, cursor + take).join(' '));
    cursor += take;
  }

  return blocks.filter(Boolean);
}

let repairedLines = 0;
const repairedModes = { easy: 0, medium: 0, hard: 0, expert: 0 };

for (const block of curriculum.blocks) {
  for (const lesson of block.lessons) {
    for (const story of lesson.stories) {
      for (const line of story.lines) {
        const answerTokens = sentenceTokens(line.preferred_answer);
        const answerUnits = sentenceUnits(line.preferred_answer);
        const hardTokens = line.puzzle.hard_word_by_word.flatMap(sentenceTokens);
        const expertTokens = line.puzzle.expert_with_distractors.flatMap(sentenceTokens);
        let repaired = false;

        if (!canBuildFromBlocks(line.puzzle.easy_blocks, line.preferred_answer)) {
          line.puzzle.easy_blocks = splitIntoBlocks(answerUnits, 4);
          repairedModes.easy += 1;
          repaired = true;
        }
        if (!canBuildFromBlocks(line.puzzle.medium_blocks, line.preferred_answer)) {
          line.puzzle.medium_blocks = splitIntoBlocks(answerUnits, 6);
          repairedModes.medium += 1;
          repaired = true;
        }
        if (!hasSameTokens(hardTokens, answerTokens)) {
          line.puzzle.hard_word_by_word = [...answerUnits];
          repairedModes.hard += 1;
          repaired = true;
        }
        if (!containsTokens(expertTokens, answerTokens)) {
          line.puzzle.expert_with_distractors = [...answerUnits, ...line.distractors];
          repairedModes.expert += 1;
          repaired = true;
        }
        if (repaired) repairedLines += 1;
      }
    }
  }
}

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ curriculumPath, repairedLines, repairedModes }, null, 2));
