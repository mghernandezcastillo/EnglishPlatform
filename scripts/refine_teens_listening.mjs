import fs from 'fs';
import path from 'path';

// Let's create high quality distractors and clean text for all 99 classes
const enhancedListeningData = {
  // Level 0 corrections
  'c-teens-basic-zero-11': {
    transcription: "My official email address is camilo vargas at gmail dot com. That is C - A - M - I - L - O, underscore, V - A - R - G - A - S.",
    audioTeacherText: "My official email address is camilo vargas at gmail dot com. That is C - A - M - I - L - O, underscore, V - A - R - G - A - S."
  },
  'c-teens-basic-3-10': {
    transcription: "Yesterday I walked to school, played soccer with my friends, and visited my grandparents. The verb visited ends with the id sound.",
    audioTeacherText: "Yesterday I walked to school, played soccer with my friends, and visited my grandparents. The verb visited ends with the id sound.",
    question: "Which of the three verbs in the teacher's audio has the /ɪd/ ending sound?",
    correctAnswer: "Visited (has the /ɪd/ ending sound)",
    distractors: [
      "Walked (has the /t/ ending sound)",
      "Played (has the /d/ ending sound)"
    ]
  }
};

// Let's verify how curriculumTeensStudio.ts can be updated cleanly.
console.log('Ready to build refiner script');
