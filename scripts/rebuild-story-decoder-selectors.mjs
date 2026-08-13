import fs from 'node:fs';
import path from 'node:path';

const curriculumPath = path.resolve(process.argv[2] || 'public/data/story-decoder-curriculum.json');
const verbsPath = path.resolve('public/data/verbs-guide.json');
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, 'utf8'));
const verbEntries = JSON.parse(fs.readFileSync(verbsPath, 'utf8'));

const AUXILIARIES = new Set([
  'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'do', 'does', 'did', 'have', 'has', 'had',
  'will', 'would', 'can', 'could', 'may', 'might', 'must', 'should', 'shall',
  'ought', 'need', 'needs', 'needed'
]);
const MODALS = new Set(['will', 'would', 'can', 'could', 'may', 'might', 'must', 'should', 'shall']);
const BE_FORMS = new Set(['am', 'is', 'are', 'was', 'were', 'be', 'been', 'being']);
const HAVE_FORMS = new Set(['have', 'has', 'had']);
const WH_WORDS = new Set(['what', 'where', 'when', 'why', 'who', 'whom', 'whose', 'which', 'how']);
const CLAUSE_CONNECTORS = new Set([
  'if', 'unless', 'when', 'while', 'although', 'because', 'before', 'after', 'since', 'until',
  'and', 'but', 'or', 'so', 'that', 'where', 'whether', 'what', 'why', 'who', 'which', 'how'
]);
const COMPLEMENT_BOUNDARIES = new Set([
  'at', 'on', 'in', 'with', 'without', 'for', 'from', 'by', 'before', 'after', 'since',
  'during', 'until', 'into', 'onto', 'through', 'across', 'around', 'near', 'behind',
  'under', 'over', 'between', 'among', 'about', 'against', 'toward', 'towards',
  'every', 'today', 'tomorrow', 'yesterday', 'now', 'tonight', 'when', 'while', 'if',
  'unless', 'although', 'because', 'but', 'and', 'or', 'so', 'where', 'whether', 'to'
]);
const DETERMINERS = new Set(['a', 'an', 'the', 'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'some', 'any', 'each', 'every']);
const ADVERBS_INSIDE_VERB = new Set(['not', 'never', 'already', 'still', 'just', 'rather']);
const PREDICATE_WORDS = new Set([
  'able', 'afraid', 'allowed', 'available', 'aware', 'busy', 'careful', 'challenging',
  'clear', 'closed', 'correct', 'different', 'discouraged', 'early', 'easy', 'finished',
  'free', 'good', 'happy', 'important', 'incorrect', 'late', 'necessary', 'open',
  'organized', 'possible', 'prepared', 'proud', 'ready', 'responsible', 'safe',
  'similar', 'sorry', 'supposed', 'sure', 'tired', 'used', 'wrong'
]);

function words(value) {
  return value.match(/[\p{L}\p{M}\p{N}]+(?:[\u2019'][\p{L}\p{M}\p{N}]+)*(?:-[\p{L}\p{M}\p{N}]+)*/gu) || [];
}

function lower(value) {
  return String(value || '').toLocaleLowerCase('en-US').replace(/[\u2019]/g, "'");
}

function addRegularForms(lexicon, rawBase) {
  const base = lower(rawBase || '').trim();
  if (!base || base.includes(' ')) return;
  lexicon.add(base);
  if (/[^aeiou]y$/.test(base)) lexicon.add(`${base.slice(0, -1)}ies`);
  else if (/(s|x|z|ch|sh|o)$/.test(base)) lexicon.add(`${base}es`);
  else lexicon.add(`${base}s`);
  if (base.endsWith('ie')) lexicon.add(`${base.slice(0, -2)}ying`);
  else if (base.endsWith('e') && !base.endsWith('ee')) lexicon.add(`${base.slice(0, -1)}ing`);
  else lexicon.add(`${base}ing`);
  if (base.endsWith('e')) lexicon.add(`${base}d`);
  else if (/[^aeiou]y$/.test(base)) lexicon.add(`${base.slice(0, -1)}ied`);
  else lexicon.add(`${base}ed`);
}

const VERBS = new Set(AUXILIARIES);
for (const entry of verbEntries) {
  const forms = [entry.base_verb, entry.past, entry.past_participle];
  if (entry.category === 'common_verb' || entry.category === 'irregular_verb') forms.push(entry.term);
  forms.filter(Boolean).forEach((form) => {
    const firstForm = words(String(form))[0];
    if (firstForm) {
      VERBS.add(lower(firstForm));
      addRegularForms(VERBS, firstForm);
    }
  });
}
[
  'arrive', 'carry', 'check', 'choose', 'continue', 'encourage', 'finish', 'help',
  'leave', 'live', 'organize', 'practice', 'prepare', 'recommend', 'repair',
  'require', 'review', 'start', 'study', 'wish', 'work', 'worry', 'challenge',
  'accept', 'act', 'abandon', 'appreciate', 'bring', 'call', 'celebrate', 'change',
  'discuss', 'divide', 'explain', 'follow', 'forget', 'ignore', 'improve', 'know',
  'learn', 'lift', 'like', 'plan', 'report', 'respect', 'run', 'sit', 'solve',
  'suggest', 'take', 'tell', 'understand', 'use', 'visit', 'want', 'write',
  'avoid', 'cost', 'decide', 'happen', 'hope', 'pass', 'prefer', 'promise', 'propose', 'repeat',
  'return', 'ring', 'share', 'stay', 'thank', 'wonder'
].forEach((form) => addRegularForms(VERBS, form));
['discouraged', 'supposed', 'challenging', 'incorrect', 'allowed', 'able', 'getting', 'running', 'sitting', 'planned', 'accepted'].forEach((form) => VERBS.add(form));

function isVerb(value) {
  const token = lower(value);
  return VERBS.has(token);
}

function findVerbIndex(tokens, startIndex = 1) {
  for (let index = startIndex; index < tokens.length; index += 1) {
    if (!isVerb(tokens[index])) continue;
    if (!AUXILIARIES.has(lower(tokens[index])) && DETERMINERS.has(lower(tokens[index - 1]))) continue;
    if (!AUXILIARIES.has(lower(tokens[index])) && /ing$/.test(lower(tokens[index])) && isVerb(tokens[index + 1])) continue;
    return index;
  }
  return -1;
}

function takeVerbGroup(tokens, verbIndex) {
  const first = lower(tokens[verbIndex]);
  let end = verbIndex + 1;

  if (MODALS.has(first)) {
    while (end < tokens.length && (
      ADVERBS_INSIDE_VERB.has(lower(tokens[end])) ||
      /ly$/.test(lower(tokens[end])) ||
      BE_FORMS.has(lower(tokens[end])) ||
      HAVE_FORMS.has(lower(tokens[end]))
    )) end += 1;
    if (end < tokens.length && !DETERMINERS.has(lower(tokens[end])) && !COMPLEMENT_BOUNDARIES.has(lower(tokens[end]))) end += 1;
    if (lower(tokens[end]) === 'to' && end + 1 < tokens.length && isVerb(tokens[end + 1])) end += 2;
    if (end === tokens.length - 1 && ['away', 'back', 'by', 'down', 'in', 'off', 'on', 'out', 'over', 'up'].includes(lower(tokens[end]))) end += 1;
    return end;
  }

  if (BE_FORMS.has(first)) {
    while (ADVERBS_INSIDE_VERB.has(lower(tokens[end]))) end += 1;
    if (lower(tokens[end]) === 'going' && lower(tokens[end + 1]) === 'to' && tokens[end + 2]) return end + 3;
    if (lower(tokens[end]) === 'getting' && lower(tokens[end + 1]) === 'used' && lower(tokens[end + 2]) === 'to') return end + 3;
    if (lower(tokens[end]) === 'used' && lower(tokens[end + 1]) === 'to') return end + 2;
    if (['able', 'allowed', 'supposed'].includes(lower(tokens[end])) && lower(tokens[end + 1]) === 'to' && tokens[end + 2]) return end + 3;
    if (lower(tokens[end]) === 'being' || lower(tokens[end]) === 'been') {
      end += 1;
      if (tokens[end] && isVerb(tokens[end])) end += 1;
    } else if (tokens[end] && (isVerb(tokens[end]) || lower(tokens[end]) === 'discouraged')) {
      end += 1;
    }
    if (end === tokens.length - 1 && ['away', 'back', 'by', 'down', 'in', 'off', 'on', 'out', 'over', 'up'].includes(lower(tokens[end]))) end += 1;
    return end;
  }

  if (HAVE_FORMS.has(first)) {
    while (ADVERBS_INSIDE_VERB.has(lower(tokens[end]))) end += 1;
    if (lower(tokens[end]) === 'been') {
      end += 1;
      while (ADVERBS_INSIDE_VERB.has(lower(tokens[end]))) end += 1;
      if (tokens[end] && isVerb(tokens[end])) end += 1;
    } else if (tokens[end] && isVerb(tokens[end])) end += 1;
    if (end === tokens.length - 1 && ['away', 'back', 'by', 'down', 'in', 'off', 'on', 'out', 'over', 'up'].includes(lower(tokens[end]))) end += 1;
    return end;
  }

  if (first === 'used' && lower(tokens[end]) === 'to' && tokens[end + 1] && isVerb(tokens[end + 1])) return end + 2;
  if (first === 'get' && lower(tokens[end]) === 'used' && lower(tokens[end + 1]) === 'to') return end + 2;
  if (/^changes?$/.test(first) && lower(tokens[end]) === 'to') return end + 1;
  if (lower(tokens[end]) === 'to' && tokens[end + 1] && isVerb(tokens[end + 1])) return end + 2;
  if (end === tokens.length - 1 && ['away', 'back', 'by', 'down', 'in', 'off', 'on', 'out', 'over', 'up'].includes(lower(tokens[end]))) return end + 1;
  return end;
}

function splitLongChunk(chunk, maximumWords = 5) {
  const tokens = words(chunk);
  if (tokens.length <= maximumWords) return [tokens.join(' ')];
  let splitAt = Math.ceil(tokens.length / 2);
  while (splitAt > 1 && DETERMINERS.has(lower(tokens[splitAt - 1]))) splitAt -= 1;
  return [tokens.slice(0, splitAt).join(' '), ...splitLongChunk(tokens.slice(splitAt).join(' '), maximumWords)].filter(Boolean);
}

function splitComplement(tokens) {
  if (!tokens.length) return [];
  const chunks = [];
  let current = [];

  for (const token of tokens) {
    const normalized = lower(token);
    const joinsIntroducedClause = (
      current.length === 1 &&
      lower(current[0]) === 'to' &&
      WH_WORDS.has(normalized)
    );
    if (current.length && COMPLEMENT_BOUNDARIES.has(normalized) && !joinsIntroducedClause) {
      chunks.push(current.join(' '));
      current = [token];
    } else {
      current.push(token);
    }
  }
  if (current.length) chunks.push(current.join(' '));
  return chunks.flatMap((chunk) => splitLongChunk(chunk));
}

function chunkRemainder(tokens) {
  const infinitiveIndex = tokens.findIndex((token, index) => (
    index > 0 && lower(token) === 'to' && isVerb(tokens[index + 1])
  ));
  if (infinitiveIndex > 0) {
    const infinitiveVerbEnd = takeVerbGroup(tokens, infinitiveIndex + 1);
    return [
      ...splitComplement(tokens.slice(0, infinitiveIndex)),
      tokens.slice(infinitiveIndex, infinitiveVerbEnd).join(' '),
      ...chunkRemainder(tokens.slice(infinitiveVerbEnd))
    ].filter(Boolean);
  }

  const directNestedVerbIndex = findVerbIndex(tokens, 1);
  const startsAsComplement = COMPLEMENT_BOUNDARIES.has(lower(tokens[0]));
  const directAdjectiveAtEnd = (
    directNestedVerbIndex === tokens.length - 1 &&
    PREDICATE_WORDS.has(lower(tokens[directNestedVerbIndex]))
  );
  const verbIntroducedByComplement = COMPLEMENT_BOUNDARIES.has(lower(tokens[directNestedVerbIndex - 1]));
  if (directNestedVerbIndex > 0 && !startsAsComplement && !directAdjectiveAtEnd && !verbIntroducedByComplement) {
    return chunkClause(tokens);
  }

  return splitComplement(tokens).flatMap((chunk) => {
    const chunkTokens = words(chunk);
    if (COMPLEMENT_BOUNDARIES.has(lower(chunkTokens[0]))) return [chunk];
    const nestedVerbIndex = findVerbIndex(chunkTokens, 1);
    const adjectiveAtEnd = (
      nestedVerbIndex === chunkTokens.length - 1 &&
      PREDICATE_WORDS.has(lower(chunkTokens[nestedVerbIndex]))
    );
    if (nestedVerbIndex > 0 && !adjectiveAtEnd) return chunkClause(chunkTokens);
    return [chunk];
  });
}

function splitIntoClauses(tokens) {
  const clauses = [];
  let start = 0;

  for (let index = 1; index < tokens.length - 1; index += 1) {
    if (!CLAUSE_CONNECTORS.has(lower(tokens[index]))) continue;
    const leftHasVerb = tokens.slice(start, index).some(isVerb);
    const rightHasVerb = tokens.slice(index + 1).some(isVerb);
    if (!leftHasVerb || !rightHasVerb) continue;
    clauses.push(tokens.slice(start, index));
    start = index;
  }

  clauses.push(tokens.slice(start));
  return clauses.filter((clause) => clause.length);
}

function chunkQuestion(tokens) {
  const chunks = [];
  let cursor = 0;
  if (WH_WORDS.has(lower(tokens[0]))) {
    if (lower(tokens[0]) === 'how' && ['many', 'much', 'long', 'often'].includes(lower(tokens[1]))) {
      chunks.push(tokens.slice(0, 2).join(' '));
      cursor = 2;
    } else {
      chunks.push(tokens[0]);
      cursor = 1;
    }
  }

  if (!AUXILIARIES.has(lower(tokens[cursor]))) return [];
  chunks.push(tokens[cursor]);
  const subjectStart = cursor + 1;
  let mainVerbIndex = findVerbIndex(tokens, subjectStart + 1);
  const earlyPredicateIndex = tokens.findIndex((token, index) => (
    index >= subjectStart + 1 &&
    (PREDICATE_WORDS.has(lower(token)) || COMPLEMENT_BOUNDARIES.has(lower(token)) || lower(token) === 'not')
  ));
  if (earlyPredicateIndex !== -1 && (mainVerbIndex === -1 || earlyPredicateIndex < mainVerbIndex)) mainVerbIndex = -1;

  if (mainVerbIndex === -1) {
    let predicateIndex = -1;
    for (let index = subjectStart + 1; index < tokens.length; index += 1) {
      if (PREDICATE_WORDS.has(lower(tokens[index])) || COMPLEMENT_BOUNDARIES.has(lower(tokens[index])) || lower(tokens[index]) === 'not') {
        predicateIndex = index;
        break;
      }
    }
    if (predicateIndex === -1) {
      chunks.push(tokens.slice(subjectStart).join(' '));
    } else {
      chunks.push(tokens.slice(subjectStart, predicateIndex).join(' '));
      chunks.push(...splitComplement(tokens.slice(predicateIndex)));
    }
    return chunks.filter(Boolean);
  }

  const subject = tokens.slice(subjectStart, mainVerbIndex);
  if (subject.length) chunks.push(subject.join(' '));
  const verbEnd = takeVerbGroup(tokens, mainVerbIndex);
  chunks.push(tokens.slice(mainVerbIndex, verbEnd).join(' '));
  chunks.push(...chunkRemainder(tokens.slice(verbEnd)));
  return chunks.filter(Boolean);
}

function chunkClause(tokens, isQuestion = false) {
  if (!tokens.length) return [];
  const questionChunks = isQuestion ? chunkQuestion(tokens) : [];
  if (questionChunks.length) return questionChunks;

  const chunks = [];
  let cursor = 0;
  const first = lower(tokens[0]);
  let connector = [];
  if (first === 'as' && lower(tokens[1]) === 'long' && lower(tokens[2]) === 'as') {
    connector = tokens.slice(0, 3);
    cursor = 3;
  } else if (first === 'in' && lower(tokens[1]) === 'case') {
    connector = tokens.slice(0, 2);
    cursor = 2;
  } else if (first === 'if' && lower(tokens[1]) === 'only') {
    connector = tokens.slice(0, 2);
    cursor = 2;
  } else if (CLAUSE_CONNECTORS.has(first)) {
    connector = [tokens[0]];
    cursor = 1;
  }

  const startsWithPredicate = (
    (cursor > 0 && isVerb(tokens[cursor])) ||
    (cursor === 0 && isVerb(tokens[0]) && (!/ing$/.test(lower(tokens[0])) || DETERMINERS.has(lower(tokens[1]))))
  );
  const verbIndex = startsWithPredicate ? cursor : findVerbIndex(tokens, Math.min(cursor + 1, tokens.length));
  if (verbIndex === -1) {
    const remainder = splitComplement(tokens.slice(cursor));
    if (connector.length && remainder.length) remainder[0] = [...connector, remainder[0]].join(' ');
    return [...chunks, ...remainder].filter(Boolean);
  }

  const subject = tokens.slice(cursor, verbIndex);
  if (subject.length) chunks.push([...connector, ...subject].join(' '));
  const verbEnd = takeVerbGroup(tokens, verbIndex);
  const verbGroup = tokens.slice(verbIndex, verbEnd);
  chunks.push((subject.length ? verbGroup : [...connector, ...verbGroup]).join(' '));
  chunks.push(...chunkRemainder(tokens.slice(verbEnd)));
  return chunks.filter(Boolean);
}

function naturalBlocks(sentence) {
  const isQuestion = /\?[\u201d"]?\s*$/.test(sentence);
  const clauseTexts = sentence
    .replace(/[\u201c\u201d"]/g, '')
    .split(/[,;:]+/)
    .map((part) => part.trim())
    .filter(Boolean);
  const chunks = clauseTexts.flatMap((clause) => (
    splitIntoClauses(words(clause)).flatMap((clauseTokens) => chunkClause(clauseTokens, isQuestion))
  ));
  return chunks.filter(Boolean);
}

function mediumBlocks(easyBlocks) {
  return easyBlocks.flatMap((block) => {
    const tokens = words(block);
    if (tokens.length <= 2 || DETERMINERS.has(lower(tokens[0])) || COMPLEMENT_BOUNDARIES.has(lower(tokens[0]))) return [tokens.join(' ')];
    if (tokens.length === 3 && (AUXILIARIES.has(lower(tokens[0])) || isVerb(tokens[0]))) return [tokens[0], tokens.slice(1).join(' ')];
    return splitLongChunk(tokens.join(' '), 3);
  }).filter(Boolean);
}

let lineCount = 0;
for (const block of curriculum.blocks) {
  for (const lesson of block.lessons) {
    for (const story of lesson.stories) {
      for (const line of story.lines) {
        const answerWords = words(line.preferred_answer);
        const easy = naturalBlocks(line.preferred_answer);
        line.puzzle.easy_blocks = easy;
        line.puzzle.medium_blocks = mediumBlocks(easy);
        line.puzzle.hard_word_by_word = answerWords;
        line.puzzle.expert_with_distractors = [...answerWords, ...line.distractors.flatMap(words)];
        lineCount += 1;
      }
    }
  }
}

function counts(values) {
  return values.reduce((map, value) => map.set(value, (map.get(value) || 0) + 1), new Map());
}

function containsAll(available, required) {
  const availableCounts = counts(available.map(lower));
  return [...counts(required.map(lower))].every(([token, amount]) => (availableCounts.get(token) || 0) >= amount);
}

function hasSameWords(first, second) {
  return containsAll(first, second) && containsAll(second, first);
}

const validationErrors = [];
for (const block of curriculum.blocks) {
  for (const lesson of block.lessons) {
    for (const story of lesson.stories) {
      for (const line of story.lines) {
        const required = words(line.preferred_answer);
        const modes = [
          ['easy', line.puzzle.easy_blocks, false],
          ['medium', line.puzzle.medium_blocks, false],
          ['hard', line.puzzle.hard_word_by_word, false],
          ['expert', line.puzzle.expert_with_distractors, true]
        ];
        for (const [mode, options, allowsDistractors] of modes) {
          const available = options.flatMap(words);
          const complete = allowsDistractors ? containsAll(available, required) : hasSameWords(available, required);
          const containsPunctuation = options.some((option) => /[.!?;:,\u201c\u201d"]/.test(option));
          const danglingDeterminer = (mode === 'easy' || mode === 'medium') && options.some((option) => {
            const optionWords = words(option);
            const connectorPlusPronoun = optionWords.length === 2 && CLAUSE_CONNECTORS.has(lower(optionWords[0]));
            return optionWords.length > 1 && !connectorPlusPronoun && DETERMINERS.has(lower(optionWords.at(-1)));
          });
          if (!complete || containsPunctuation || danglingDeterminer) {
            validationErrors.push({ lineId: line.line_id, mode, complete, containsPunctuation, danglingDeterminer, options });
          }
        }
      }
    }
  }
}

if (validationErrors.length) {
  console.error(JSON.stringify({ validationErrors: validationErrors.length, sample: validationErrors.slice(0, 10) }, null, 2));
  process.exit(1);
}

fs.writeFileSync(curriculumPath, `${JSON.stringify(curriculum, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({
  curriculumPath,
  rebuiltLines: lineCount,
  validatedSelectorConfigurations: lineCount * 4,
  punctuationSelectable: false,
  validationErrors: 0
}, null, 2));
