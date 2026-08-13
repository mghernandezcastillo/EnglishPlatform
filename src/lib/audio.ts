/**
 * Utility for Text-to-Speech using the browser's native speechSynthesis API.
 * Keeping the utterance referenced is important on mobile Safari/Chrome, where
 * a locally scoped utterance can be garbage-collected before playback finishes.
 */

type AudioCallbacks = {
  onEnd?: () => void;
  onError?: () => void;
};

let activeUtterance: SpeechSynthesisUtterance | null = null;

export const prepareAudio = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  // Android Chrome often exposes its voices only after this first read.
  window.speechSynthesis.getVoices();
};

export const stopAudio = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  activeUtterance = null;
};

export const playAudio = (
  text: string,
  lang: string = 'en-US',
  callbacks: AudioCallbacks = {},
): boolean => {
  if (
    typeof window === 'undefined'
    || !('speechSynthesis' in window)
    || typeof SpeechSynthesisUtterance === 'undefined'
  ) {
    console.warn('Text-to-speech no soportado en este navegador.');
    callbacks.onError?.();
    return false;
  }

  const synthesis = window.speechSynthesis;
  synthesis.cancel();

  // Mobile browsers can leave the speech engine paused after changing pages
  // or sending the app to the background.
  if (synthesis.paused) synthesis.resume();

  const utterance = new SpeechSynthesisUtterance(text);
  activeUtterance = utterance;
  utterance.lang = lang;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voices = synthesis.getVoices();
  const languageCode = lang.toLowerCase().split('-')[0];
  const matchingVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith(languageCode));
  const preferredVoice = matchingVoices.find((voice) => voice.localService) || matchingVoices[0];

  if (preferredVoice) utterance.voice = preferredVoice;

  utterance.onend = () => {
    if (activeUtterance === utterance) activeUtterance = null;
    callbacks.onEnd?.();
  };
  utterance.onerror = (event) => {
    if (activeUtterance === utterance) activeUtterance = null;
    // "interrupted" and "canceled" are expected when another audio starts.
    if (event.error !== 'interrupted' && event.error !== 'canceled') {
      console.warn(`No se pudo reproducir el audio: ${event.error}`);
      callbacks.onError?.();
    }
  };

  synthesis.speak(utterance);
  return true;
};
