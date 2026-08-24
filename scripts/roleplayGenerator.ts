import { resolveSpeakingScene, ResolvedSpeakingScene } from '../src/lib/speakingSceneResolver';

export interface GeneratedSpeakingScene {
  type: 'speaking-scene';
  title: string;
  description: string;
  speakingScene: ResolvedSpeakingScene;
}

export interface GeneratedAlphabetGame {
  type: 'alphabet-game';
  title: string;
  description: string;
  alphabetGame: {
    title: string;
    titleEs: string;
    showAudio: boolean;
    bonusSpelling: {
      enabled: boolean;
      placeholder: string;
      placeholderEs: string;
    };
  };
}

export type GeneratedActivity = GeneratedSpeakingScene | GeneratedAlphabetGame | null;

export function getContextualRoleplay(clsTitle: string, clsObjective: string, audience: 'teens' | 'adults' | 'kids'): GeneratedActivity {
  const lower = (clsTitle + ' ' + (clsObjective || '')).toLowerCase();
  const isKids = audience === 'kids';

  // 1. Alphabet & Spelling -> Alphabet Pronunciation Game
  if (/alfabeto|alphabet|deletreo|spelling|username/i.test(lower)) {
    return {
      type: 'alphabet-game',
      title: 'Alphabet & Spelling Challenge 🔤 / Reto de Alfabeto y Deletreo 🔤',
      description: 'Pronounce letters and spell names/usernames live.',
      alphabetGame: {
        title: 'Alphabet Pronunciation & Spelling Challenge 🔤',
        titleEs: 'Pronuncia cada letra y deletrea nombres en inglés',
        showAudio: true,
        bonusSpelling: {
          enabled: true,
          placeholder: isKids ? 'LEO' : audience === 'teens' ? '@gamer_pro.99' : 'alex_smith@company.com',
          placeholderEs: 'Escribe un nombre o usuario para deletrear letra por letra:'
        }
      }
    };
  }

  // 2. Resolve speaking scene using deep contextual resolver
  const scene = resolveSpeakingScene({
    id: 'speaking-scene-slide',
    title: clsTitle,
    content: [clsObjective],
  }, clsTitle);

  return {
    type: 'speaking-scene',
    title: `Speaking Time: ${scene.topic} / ${scene.topicEs}`,
    description: `Practice real conversation: ${scene.topic}`,
    speakingScene: scene,
  };
}
