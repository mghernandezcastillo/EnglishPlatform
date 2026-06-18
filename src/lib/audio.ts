/**
 * Utility for Text-to-Speech using browser's native window.speechSynthesis.
 */

export const playAudio = (text: string, lang: string = 'en-US') => {
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-speech no soportado en este navegador.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9; // Slightly slower for language learners
  utterance.pitch = 1;

  // Try to find a good English voice
  const voices = window.speechSynthesis.getVoices();
  const englishVoice = voices.find(v => v.lang.startsWith('en-') && !v.localService) || 
                       voices.find(v => v.lang.startsWith('en-'));
  
  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
};
