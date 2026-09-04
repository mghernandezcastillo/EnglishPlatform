/**
 * Utility for chunking English sentences into natural pedagogical blocks (chunks),
 * preserving compound words, phrasal verbs, time expressions, and grammar structures.
 */

// Comprehensive list of multi-word compound expressions, phrasal verbs,
// collocations, time expressions, and grammar chunks in order of priority (longer first).
const COMPOUND_EXPRESSIONS: string[] = [
  // 4+ words
  'look forward to', 'looking forward to', 'looked forward to',
  'get along with', 'getting along with', 'got along with',
  'run out of', 'running out of', 'ran out of',
  'take care of', 'taking care of', 'took care of',
  'in the middle of', 'on the corner of', 'at the end of',
  'brush my teeth', 'brush your teeth', 'brush his teeth', 'brush her teeth', 'brush their teeth', 'brush our teeth',
  'wash my hands', 'wash your hands', 'wash his hands', 'wash her hands',
  'take a shower', 'takes a shower', 'taking a shower', 'took a shower',
  'take a bath', 'takes a bath', 'taking a bath', 'took a bath',
  'from time to time', 'once in a while', 'all day long', 'all night long',
  'would like to', 'would love to', 'used to be', 'going to be',
  'what kind of', 'what time is it', 'what time does', 'what time do',

  // 3 words
  'in front of', 'on top of', 'because of', 'due to the', 'instead of',
  'along with', 'as well as', 'according to', 'close to the', 'next to the',
  'in the morning', 'in the afternoon', 'in the evening',
  'at the moment', 'these days', 'every single day',
  'tomorrow morning', 'tomorrow afternoon', 'tomorrow night',
  'last night', 'last week', 'last month', 'last year', 'last weekend',
  'next week', 'next month', 'next year', 'next weekend',
  'once a week', 'twice a week', 'three times a',
  'a lot of', 'lots of', 'a couple of', 'plenty of',
  'each other', 'one another', 'as soon as', 'as much as',
  'fall asleep', 'falls asleep', 'falling asleep', 'fell asleep',
  'go to bed', 'goes to bed', 'going to bed', 'went to bed',
  'have breakfast', 'has breakfast', 'having breakfast', 'had breakfast',
  'have lunch', 'has lunch', 'having lunch', 'had lunch',
  'have dinner', 'has dinner', 'having dinner', 'had dinner',
  'make the bed', 'makes the bed', 'making the bed', 'made the bed',
  'do homework', 'does homework', 'doing homework', 'did homework',
  'play video games', 'play the guitar', 'play the piano', 'play the drums',
  'watch movies', 'watch series', 'watch the news',
  'hang out with', 'hanging out with', 'hung out with',
  'what do you', 'where do you', 'how do you', 'when do you', 'why do you',
  'what does he', 'what does she', 'where does he', 'where does she',
  'how often do', 'how often does', 'how long does', 'how many people',
  'how much is', 'how much are', 'how old are', 'how old is',
  'there will be', 'there is a', 'there are some', 'there was a', 'there were some',
  'am going to', 'is going to', 'are going to', 'was going to', 'were going to',
  'have to do', 'has to do', 'had to do', 'need to do', 'needs to do',
  'would like', 'would love', 'ought to be',

  // 2 words
  'wake up', 'wakes up', 'waking up', 'woke up',
  'get up', 'gets up', 'getting up', 'got up',
  'turn on', 'turns on', 'turning on', 'turned on',
  'turn off', 'turns off', 'turning off', 'turned off',
  'put on', 'puts on', 'putting on',
  'take off', 'takes off', 'taking off', 'took off',
  'look for', 'looks for', 'looking for', 'looked for',
  'look at', 'looks at', 'looking at', 'looked at',
  'look after', 'looks after', 'looking after',
  'listen to', 'listens to', 'listening to', 'listened to',
  'wait for', 'waits for', 'waiting for', 'waited for',
  'talk to', 'talks to', 'talking to', 'talked to',
  'speak with', 'speaks with', 'speaking with',
  'hang out', 'hangs out', 'hanging out', 'hung out',
  'go out', 'goes out', 'going out', 'went out',
  'come back', 'comes back', 'coming back', 'came back',
  'give up', 'gives up', 'giving up', 'gave up',
  'find out', 'finds out', 'finding out', 'found out',
  'check out', 'checks out', 'checking out', 'checked out',
  'pick up', 'picks up', 'picking up', 'picked up',
  'drop off', 'drops off', 'dropping off', 'dropped off',
  'set up', 'sets up', 'setting up',
  'clean up', 'cleans up', 'cleaning up', 'cleaned up',
  'warm up', 'warms up', 'warming up', 'warmed up',
  'grow up', 'grows up', 'growing up', 'grew up',
  'stay up', 'stays up', 'staying up', 'stayed up',
  'stand up', 'stands up', 'standing up', 'stood up',
  'sit down', 'sits down', 'sitting down', 'sat down',
  'lie down', 'lies down', 'lying down', 'lay down',
  'watch tv', 'watching tv', 'watched tv',
  'play soccer', 'play basketball', 'play tennis', 'play football',
  'next to', 'across from', 'out of', 'close to', 'far from',
  'at night', 'at noon', 'at midnight', 'right now',
  'every day', 'every week', 'every month', 'every year', 'every morning', 'every night',
  'on weekends', 'on weekdays', 'on monday', 'on tuesday', 'on wednesday', 'on thursday', 'on friday', 'on saturday', 'on sunday',
  'ice cream', 'hot dog', 'high school', 'bus stop', 'train station', 'subway station',
  'cell phone', 'mobile phone', 'living room', 'dining room', 'swimming pool', 'coffee shop',
  'credit card', 'post office', 'police station', 'fire station', 'grocery store',
  'department store', 'shopping mall', 'amusement park', 'water park', 'roller coaster',
  'alarm clock', 'sunglasses', 'seat belt', 'fast food', 'junk food', 'video game', 'video games',
  'board game', 'board games', 'roller skates', 'tennis shoes', 'sports car', 'traffic light',
  'web site', 'web page', 'pet shop', 'book store', 'shoe store', 'hair salon',
  'gas station', 'convenience store', 'laundry room', 'lunch box',
  'there is', 'there are', 'there was', 'there were', "there's",
  'this is', 'that is', 'these are', 'those are',
  'i am', 'you are', 'he is', 'she is', 'it is', 'we are', 'they are',
  "i'm", "you're", "he's", "she's", "it's", "we're", "they're",
  'i was', 'you were', 'he was', 'she was', 'it was', 'we were', 'they were',
  'i have', 'you have', 'he has', 'she has', 'we have', 'they have',
  "i don't", "you don't", "he doesn't", "she doesn't", "it doesn't", "we don't", "they don't",
  "i didn't", "you didn't", "he didn't", "she didn't", "we didn't", "they didn't",
  'do not', 'does not', 'did not', 'cannot', "can't", "won't", "shouldn't", "couldn't", "wouldn't",
  'used to', 'have to', 'has to', 'had to', 'need to', 'needs to', 'needed to',
  'want to', 'wants to', 'wanted to', 'going to', 'able to', 'supposed to',
  'have been', 'has been', 'had been', 'will be', 'can be', 'could be', 'must be', 'should be',
  'do you', 'does he', 'does she', 'did you', 'did he', 'did she',
  'are you', 'is he', 'is she', 'was he', 'was she', 'were you',
  'can you', 'could you', 'would you', 'may i', 'shall we',
  'what is', 'where is', 'who is', 'how is', 'why is', 'when is',
  'what are', 'where are', 'who are', 'how are', 'why are', 'when are',
  'how many', 'how much', 'how often', 'how long', 'how old', 'what color', 'what time',
  'a few', 'a little', 'kind of', 'sort of'
];

// Sort compounds by word count descending so longer phrases match first
const SORTED_COMPOUNDS = [...COMPOUND_EXPRESSIONS].sort((a, b) => {
  const diff = b.split(' ').length - a.split(' ').length;
  return diff !== 0 ? diff : b.length - a.length;
});

function cleanWordForMatching(word: string): string {
  return word.toLowerCase().replace(/[’‘]/g, "'").replace(/[.,!?;:¿¡"“”()[\]{}]/g, '').trim();
}

/**
 * Identifies compound expressions and preserves them as atomic blocks.
 */
function findCompoundUnits(sentence: string): string[] {
  const words = sentence.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 1) return words;

  const result: string[] = [];
  let i = 0;

  while (i < words.length) {
    let matchedLength = 0;
    let matchedChunk = '';

    // Check against sorted compounds (longest first)
    for (const compound of SORTED_COMPOUNDS) {
      const compoundWords = compound.split(' ');
      const len = compoundWords.length;

      if (i + len <= words.length) {
        const sliceWords = words.slice(i, i + len);
        const sliceClean = sliceWords.map(cleanWordForMatching).join(' ');

        if (sliceClean === compound) {
          matchedLength = len;
          matchedChunk = sliceWords.join(' ');
          break;
        }
      }
    }

    if (matchedLength > 0) {
      result.push(matchedChunk);
      i += matchedLength;
    } else {
      result.push(words[i]);
      i += 1;
    }
  }

  return result;
}

/**
 * Chunks an English sentence into natural, readable pedagogical blocks (2-5 blocks per sentence),
 * preserving compound words, phrasal verbs, collocations, time phrases, and grammar structures.
 */
export function chunkSentenceIntoBlocks(sentence: string, existingTokens?: string[]): string[] {
  if (!sentence || typeof sentence !== 'string') return [];

  const raw = sentence.trim();
  if (!raw) return [];

  // If explicit multi-word blocks were already provided and match the sentence content, use them
  if (existingTokens && existingTokens.length > 0) {
    const hasMultiWordBlock = existingTokens.some(t => t.trim().includes(' '));
    const tokenSentence = existingTokens.join(' ').replace(/\s+/g, ' ').trim().toLowerCase().replace(/[.,!?;:]/g, '');
    const cleanRaw = raw.toLowerCase().replace(/[.,!?;:]/g, '');
    
    if (hasMultiWordBlock && tokenSentence === cleanRaw) {
      return existingTokens.map(t => t.trim()).filter(Boolean);
    }
  }

  const atomicUnits = findCompoundUnits(raw);
  const totalWords = raw.split(/\s+/).filter(Boolean).length;

  // Very short sentences (1-3 words)
  if (totalWords <= 3) {
    // e.g. "I am Alex" -> ["I am", "Alex"] or "What is that?" -> ["What is", "that?"]
    if (atomicUnits.length <= 2) return atomicUnits;
    return atomicUnits;
  }

  // Short sentences (4-6 words) -> Target 2-3 blocks
  if (totalWords <= 6) {
    if (atomicUnits.length <= 3) return atomicUnits;

    // Group into 2 or 3 balanced blocks
    const targetChunks = atomicUnits.length > 4 ? 3 : 2;
    return groupAtomicUnits(atomicUnits, targetChunks);
  }

  // Medium sentences (7-10 words) -> Target 3-4 blocks
  if (totalWords <= 10) {
    if (atomicUnits.length <= 4) return atomicUnits;
    const targetChunks = totalWords >= 9 ? 4 : 3;
    return groupAtomicUnits(atomicUnits, targetChunks);
  }

  // Long sentences (11+ words) -> Target 4-5 blocks
  const targetChunks = Math.min(5, Math.max(4, Math.ceil(totalWords / 3.5)));
  return groupAtomicUnits(atomicUnits, targetChunks);
}

/**
 * Groups atomic units into N balanced, natural chunks.
 */
function groupAtomicUnits(units: string[], targetCount: number): string[] {
  if (units.length <= targetCount) return units;

  const totalWords = units.reduce((acc, u) => acc + u.split(/\s+/).length, 0);
  const wordsPerChunk = Math.ceil(totalWords / targetCount);

  const chunks: string[] = [];
  let currentGroup: string[] = [];
  let currentWordCount = 0;

  for (let i = 0; i < units.length; i++) {
    const unit = units[i];
    const unitWords = unit.split(/\s+/).length;
    const remainingUnits = units.length - i;
    const remainingChunksNeeded = targetCount - chunks.length;

    currentGroup.push(unit);
    currentWordCount += unitWords;

    // Flush if we reached the target word count and have enough units left for remaining chunks,
    // OR if remaining units equals remaining chunks needed (force split).
    const shouldFlush = 
      (currentWordCount >= wordsPerChunk && remainingUnits > remainingChunksNeeded - 1) ||
      (remainingUnits === remainingChunksNeeded - 1);

    if (shouldFlush && chunks.length < targetCount - 1) {
      chunks.push(currentGroup.join(' '));
      currentGroup = [];
      currentWordCount = 0;
    }
  }

  if (currentGroup.length > 0) {
    chunks.push(currentGroup.join(' '));
  }

  return chunks.filter(Boolean);
}
