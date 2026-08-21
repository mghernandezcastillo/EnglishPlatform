import storyDictionary from './storyDecoderDictionary.json';

const dictionary: Record<string, string> = storyDictionary as Record<string, string>;

const phraseTranslations: Record<string, string> = {
  'be able to': 'poder',
  'be allowed to': 'tener permiso de',
  'be getting used to': 'estar acostumbrándose a',
  'be used to': 'estar acostumbrado/a a',
  'be supposed to': 'se supone que / deber',
  'catch up with': 'ponerse al día con',
  'check up on': 'revisar / comprobar',
  'come up with': 'idear / inventar',
  'cut down on': 'reducir / bajar',
  'drop out of': 'abandonar',
  'get along with': 'llevarse bien con',
  'get away with': 'salirse con la suya',
  'get rid of': 'deshacerse de',
  'get used to': 'acostumbrarse a',
  'give up': 'rendirse / dejar de intentar',
  'go on': 'continuar',
  'look after': 'cuidar de',
  'look for': 'buscar',
  'look up': 'buscar / consultar',
  'pick up': 'recoger / aprender',
  'put on': 'ponerse',
  'run out of': 'quedarse sin',
  'set up': 'montar / preparar',
  'stick with': 'seguir con',
  'take advantage of': 'aprovechar',
  'take care of': 'cuidar de / encargarse de',
  'take off': 'quitarse / despegar',
  'take out': 'sacar',
  'take a look at': 'echar un vistazo a',
  'think back on': 'recordar',
  'feel proud of': 'sentirse orgulloso de',
  'turn around': 'dar la vuelta',
  'turn off': 'apagar',
  'turn on': 'encender',
  'work on': 'trabajar en',
  'write down': 'anotar',
  'would rather': 'preferir / preferiría',
  'had better': 'sería mejor que / más vale que',
  'need to': 'necesitar / tener que',
  'have to': 'tener que',
  'get something done': 'hacer que algo se haga / conseguir que algo se haga',
  'have something done': 'hacer que algo se haga / mandar hacer algo',
  'make someone do': 'hacer que alguien haga algo',
  'let someone do': 'dejar que alguien haga algo',
  'used to': 'solía / acostumbraba a',
  'as long as': 'siempre que / mientras que',
  'in case': 'en caso de que / por si acaso',
  'in order to': 'para / con el fin de',
  'as well as': 'así como / además de',
  'due to': 'debido a',
  'because of': 'a causa de / por',
  'instead of': 'en lugar de / en vez de',
  'by means of': 'por medio de',
  'on behalf of': 'en nombre de',
  'in front of': 'frente a / delante de',
  'next to': 'al lado de / junto a',
  'across from': 'enfrente de / al otro lado de',
  'at least': 'al menos / por lo menos',
  'at last': 'por fin / al fin',
  'at all': 'en absoluto / para nada',
  'so that': 'para que / de modo que',
  'even if': 'incluso si / aunque',
  'even though': 'a pesar de que / aunque',
  'no matter': 'no importa / sin importar',
  'right now': 'ahora mismo',
  'all day': 'todo el día',
  'every day': 'todos los días / cada día',
  'once again': 'una vez más',
  'so far': 'hasta ahora'
};

const properNames: Record<string, string> = {
  sara: 'Sara',
  nico: 'Nico',
  sofia: 'Sofía',
  david: 'David',
  lucas: 'Lucas',
  elena: 'Elena',
  carlos: 'Carlos',
  maria: 'María',
  mateo: 'Mateo',
  ana: 'Ana',
  adriana: 'Adriana',
  pedro: 'Pedro',
  laura: 'Laura',
  julian: 'Julián',
  camila: 'Camila',
  valeria: 'Valeria',
  gabriel: 'Gabriel',
  daniel: 'Daniel',
  paula: 'Paula',
  felipe: 'Felipe'
};

const particles: Record<string, string> = {
  a: 'un / una',
  an: 'un / una',
  the: 'el / la',
  to: 'a / para',
  in: 'en',
  on: 'en / sobre',
  at: 'en',
  with: 'con',
  without: 'sin',
  for: 'para / por',
  by: 'por / en',
  from: 'de / desde',
  about: 'sobre / acerca de'
};

const knownPhraseKeys = new Set(Object.keys(phraseTranslations));
const beForms = new Set(['am', 'is', 'are', 'was', 'were', 'be', 'been', 'being']);
const auxiliaryForms = new Set(['will', 'would', 'can', 'could', 'may', 'might', 'must', 'should', 'shall', 'do', 'does', 'did', 'have', 'has', 'had']);

function normalizeStoryTerm(term: string) {
  return term
    .toLocaleLowerCase('en-US')
    .replace(/[’']/g, '')
    .replace(/[^\p{L}\p{M}\s]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function candidateLemmas(word: string) {
  const normalized = normalizeStoryTerm(word);
  const candidates = [normalized];

  if (normalized.endsWith('ies') && normalized.length > 4) candidates.push(`${normalized.slice(0, -3)}y`);
  if (normalized.endsWith('ing') && normalized.length > 5) {
    const root = normalized.slice(0, -3);
    candidates.push(root, `${root}e`);
    if (root.at(-1) === root.at(-2)) candidates.push(root.slice(0, -1));
  }
  if (normalized.endsWith('ed') && normalized.length > 4) {
    const root = normalized.slice(0, -2);
    candidates.push(root, `${root}e`);
    if (root.at(-1) === root.at(-2)) candidates.push(root.slice(0, -1));
  }
  if (normalized.endsWith('es') && normalized.length > 4) candidates.push(normalized.slice(0, -1), normalized.slice(0, -2));
  if (normalized.endsWith('s') && normalized.length > 3) candidates.push(normalized.slice(0, -1));

  return Array.from(new Set(candidates));
}

function candidatePhrases(word: string) {
  const normalized = normalizeStoryTerm(word);
  if (!normalized.includes(' ')) return [];
  const [first, ...rest] = normalized.split(/\s+/);
  const tail = rest.join(' ');
  if (!first || !tail) return [normalized];
  return Array.from(new Set([
    normalized,
    ...candidateLemmas(first).map((candidate) => `${candidate} ${tail}`)
  ]));
}

function longestKnownPhrasePrefix(candidate: string) {
  const normalized = normalizeStoryTerm(candidate);
  let best = '';
  for (const phrase of knownPhraseKeys) {
    if (normalized === phrase || normalized.startsWith(`${phrase} `)) {
      if (phrase.length > best.length) best = phrase;
    }
  }
  return best;
}

function canonicalPhraseCandidate(term: string, verbBaseForms: Record<string, string>) {
  const normalized = normalizeStoryTerm(term);
  if (!normalized) return '';

  if (!normalized.includes(' ')) {
    return verbBaseForms[normalized] || '';
  }

  const [first, ...rest] = normalized.split(/\s+/);
  const tail = rest.join(' ');
  if (!first || !tail) return '';

  const variants = new Set<string>([normalized]);
  const firstBase = verbBaseForms[first];
  if (firstBase) variants.add([firstBase, ...rest].join(' '));

  if (auxiliaryForms.has(first) && tail) {
    variants.add(tail);
  }

  if (beForms.has(first) && ['able to', 'supposed to', 'going to'].some((suffix) => tail === suffix || tail.startsWith(`${suffix} `))) {
    variants.add(`be ${tail}`);
  }

  for (const variant of variants) {
    if (knownPhraseKeys.has(variant)) return variant;
    const prefix = longestKnownPhrasePrefix(variant);
    if (prefix) return prefix;
  }

  return '';
}

export function canonicalizeStoryVocabularyTerm(term: string, verbBaseForms: Record<string, string>) {
  const normalized = normalizeStoryTerm(term);
  if (!normalized) return '';
  const canonicalPhrase = canonicalPhraseCandidate(normalized, verbBaseForms);
  if (canonicalPhrase) return canonicalPhrase;

  if (!normalized.includes(' ')) {
    return verbBaseForms[normalized] || normalized;
  }

  return normalized;
}

export function normalizeSavedVocabularyTerm(term: string, verbBaseForms: Record<string, string>) {
  return canonicalizeStoryVocabularyTerm(term, verbBaseForms);
}

export function findStoryWordTranslation(word: string, verbTranslations: Record<string, string> = {}): string {
  const normalized = normalizeStoryTerm(word);
  if (!normalized) return '';

  // 1. Check known names
  if (properNames[normalized]) {
    return properNames[normalized];
  }

  // 2. Check phrase translations
  for (const candidate of candidatePhrases(word)) {
    const translation = phraseTranslations[candidate] || verbTranslations[candidate] || dictionary[candidate];
    if (translation) return translation;
  }

  // 3. Check exact word & lemmas
  for (const candidate of candidateLemmas(word)) {
    const translation = verbTranslations[candidate] || dictionary[candidate];
    if (translation) return translation;
  }

  // 4. Handle particles e.g. "a bike", "in the workshop", "to fix"
  if (normalized.includes(' ')) {
    const tokens = normalized.split(/\s+/);
    if (tokens.length === 2 && particles[tokens[0]]) {
      const mainWord = tokens[1];
      const mainTr = findStoryWordTranslation(mainWord, verbTranslations);
      if (mainTr) {
        if (tokens[0] === 'to') return `a / para ${mainTr}`;
        if (tokens[0] === 'a' || tokens[0] === 'an') return `un/una ${mainTr}`;
        if (tokens[0] === 'the') return `el/la ${mainTr}`;
        if (tokens[0] === 'in') return `en ${mainTr}`;
        return `${particles[tokens[0]]} ${mainTr}`;
      }
    }
    if (tokens.length === 3 && tokens[1] === 'and') {
      const leftTr = findStoryWordTranslation(tokens[0], verbTranslations);
      const rightTr = findStoryWordTranslation(tokens[2], verbTranslations);
      if (leftTr && rightTr) {
        return `${leftTr} y ${rightTr}`;
      }
    }
    if (tokens.length === 3 && (tokens[0] === 'in' || tokens[0] === 'on' || tokens[0] === 'at') && tokens[1] === 'the') {
      const mainTr = findStoryWordTranslation(tokens[2], verbTranslations);
      if (mainTr) {
        return `en el/la ${mainTr}`;
      }
    }
  }

  // 5. Fallback: if it's a capitalized word, treat as proper name
  const originalTrimmed = word.trim();
  if (/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/.test(originalTrimmed)) {
    return originalTrimmed;
  }

  return dictionary[normalized] || '';
}
