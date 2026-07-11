import * as fs from 'fs';

const files = [
  'src/components/Assessment.tsx',
  'src/components/Dashboard.tsx',
  'src/components/Diploma.tsx',
  'src/components/Flashcard.tsx',
  'src/components/LessonPlayer.tsx',
  'src/components/RoleSelection.tsx',
  'src/components/TeacherDashboard.tsx',
  'src/components/VirtualEvaluationView.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/<img /g, '<img referrerPolicy="no-referrer" ');
  fs.writeFileSync(f, content, 'utf8');
});

console.log("Updated images.");
