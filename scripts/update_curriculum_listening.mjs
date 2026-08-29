import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild';

async function updateCurriculum() {
  const tsPath = path.resolve('src/data/curriculumTeensStudio.ts');
  let content = fs.readFileSync(tsPath, 'utf8');

  // Let's load the current structure via esbuild
  const result = await esbuild.transform(content, {
    loader: 'ts',
    format: 'cjs',
    target: 'node18'
  });

  const moduleObj = { exports: {} };
  const fn = new Function('module', 'exports', 'require', result.code);
  fn(moduleObj, moduleObj.exports, (mod) => mod === './curriculum' ? {} : require(mod));

  const levels = moduleObj.exports.curriculumTeensStudioLevels || [];
  console.log(`Loaded ${levels.length} levels from curriculumTeensStudio.`);

  // Distractors & Text enhancements map
  const enhancements = {
    // Basic Zero 11
    'c-teens-basic-zero-11': {
      transcription: "My official email address is camilo vargas at gmail dot com. That is C - A - M - I - L - O, underscore, V - A - R - G - A - S.",
      audioTeacherText: "My official email address is camilo vargas at gmail dot com. That is C - A - M - I - L - O, underscore, V - A - R - G - A - S."
    },
    // Basic 3 10
    'c-teens-basic-3-10': {
      transcription: "Yesterday I walked to school, played soccer with my friends, and visited my grandparents. The verb visited ends with the id sound.",
      audioTeacherText: "Yesterday I walked to school, played soccer with my friends, and visited my grandparents. The verb visited ends with the id sound.",
      question: "Which of the three verbs in the teacher's audio has the /ɪd/ ending sound?",
      correct: "Visited (has the /ɪd/ ending sound)",
      distractors: ["Walked (has the /t/ ending sound)", "Played (has the /d/ ending sound)"]
    },
    // Level 4
    'c-teens-basic-4-3': {
      distractors: ["It evaporates quickly into hot steam.", "It stays liquid without changing state."]
    },
    'c-teens-basic-4-4': {
      distractors: ["To download an entirely new game file.", "To buy new headphones at the mall."]
    },
    'c-teens-basic-4-5': {
      distractors: ["They will lose their spot in the regional tournament.", "They will only play friendly practice games."]
    },
    'c-teens-basic-4-6': {
      distractors: ["It has a great camera but very weak battery life.", "It is cheaper but much less durable than the base model."]
    },
    'c-teens-basic-4-7': {
      distractors: ["Because the internet connection was lost completely.", "Because the tablet does not support video playback."]
    },
    'c-teens-basic-4-8': {
      distractors: ["Ignore their friend's messages for several weeks.", "Ask other classmates to take sides in the argument."]
    },
    'c-teens-basic-4-9': {
      distractors: ["Their updated passport and proof of foreign address.", "Their personal essay and payment receipt."]
    },
    'c-teens-basic-4-10': {
      distractors: ["They need to complete additional written exams before graduating.", "They are ready for basic travel phrases only."]
    },
    // Inter
    'c-teens-inter-1': {
      distractors: ["Has explored the Amazon rainforest, but hasn't traveled abroad yet.", "Has lived in three South American countries for five years."]
    },
    'c-teens-inter-2': {
      distractors: ["Go to the library to finish their physics assignment.", "Meet at the skatepark for an outdoor tournament."]
    },
    'c-teens-inter-3': {
      distractors: ["He might have already left for the teacher conference.", "He could be attending a faculty meeting in the main hall."]
    },
    'c-teens-inter-4': {
      distractors: ["Increase taxes on paper and restrict renewable energy.", "Build more highways through national parks."]
    },
    'c-teens-inter-5': {
      distractors: ["The first team dominated completely while the second had no evidence.", "Neither team addressed the central motion of the debate."]
    },
    'c-teens-inter-6': {
      distractors: ["Leave a comment with suggestions for next semester.", "Share the episode on social media to enter a giveaway."]
    },
    'c-teens-inter-7': {
      distractors: ["Guitar for three years, and started writing songs last month.", "Guitar since last year, and formed the band five years ago."]
    },
    'c-teens-inter-8': {
      distractors: ["The special visual effects were impressive despite weak acting.", "The soundtrack was memorable but the ending was predictable."]
    },
    'c-teens-inter-9': {
      distractors: ["The homeowner must have picked it up at the post office.", "A neighbor could have left it by the front door yesterday."]
    },
    'c-teens-inter-10': {
      distractors: ["Only when manual controls are activated by the operator.", "After the battery charges to 100%, regardless of sensors."]
    },
    'c-teens-inter-11': {
      distractors: ["Defending one's national interests without compromising.", "Enforcing strict legal regulations on international trade."]
    },
    'c-teens-inter-12': {
      distractors: ["His perfect academic score in mathematics and sports.", "His prior experience studying abroad in European institutions."]
    },
    // Advanced
    'c-teens-advanced-1': {
      distractors: ["That the sports championship had been postponed until next month.", "That ticket sales for the gala were officially sold out."]
    },
    'c-teens-advanced-2': {
      distractors: ["What her grade point average was and which university she preferred.", "How she planned to fund her living expenses in the foreign city."]
    },
    'c-teens-advanced-3': {
      distractors: ["A satellite imaging system for tracking deforestation in rainforests.", "A geothermal mapping tool presented at an engineering conference."]
    },
    'c-teens-advanced-4': {
      distractors: ["Imported from Germany, equipped with LiDAR sensors, and powered by hydrogen.", "Designed in Medellin, equipped with optical lenses, and tethered to a base station."]
    },
    'c-teens-advanced-5': {
      distractors: ["A commercial lunar spaceport will be constructed by 2035 with private funding.", "Uncrewed rovers will search for ice deposits before crewed landings begin."]
    },
    'c-teens-advanced-6': {
      distractors: ["It was a major setback that caused her to switch to graphic design.", "It prompted her to appeal the judges' decision with new artwork."]
    },
    'c-teens-advanced-7': {
      distractors: ["Migrated all databases to an on-premise data center overnight.", "Notified customers and waited for the cloud vendor to resolve the outage."]
    },
    'c-teens-advanced-8': {
      distractors: ["They utilized superior emotional rhetoric and personal storytelling.", "The opposition exceeded their allocated speaking time limit."]
    },
    'c-teens-advanced-9': {
      distractors: ["If nuclear power had been expanded earlier, fossil fuels would be phased out.", "If energy consumption had decreased, current grid upgrades wouldn't be necessary."]
    },
    'c-teens-advanced-10': {
      distractors: ["Their proprietary hardware patents and venture capital backing.", "Their partnership with international NGOs and academic endorsements."]
    },
    // Elite
    'c-teens-elite-1': {
      distractors: ["Fusion reactors will be commercially viable, and colonies will be founded on Mars.", "Neural interfaces will replace mobile screens, and orbital habitats will be operational."]
    },
    'c-teens-elite-2': {
      distractors: ["If they had secured Series B funding earlier, they would have dominated the domestic market.", "If the founders hadn't merged with an enterprise competitor, profitability would be delayed."]
    },
    'c-teens-elite-3': {
      distractors: ["It was strict corporate hierarchy that drove market share, and what companies need is capital efficiency.", "It was aggressive marketing that captured consumers, and what founders build is brand loyalty."]
    },
    'c-teens-elite-4': {
      distractors: ["Seldom has a debate team adhered so strictly to time limits while delivering analytical clarity.", "Hardly had the opposition begun their refutation before the proposition introduced new arguments."]
    },
    'c-teens-elite-5': {
      distractors: ["It is generally assumed that negotiations will stall, although regional stakeholders remain optimistic.", "Evidence suggests that bilateral concessions are unlikely, but dialogue must continue."]
    },
    'c-teens-elite-6': {
      distractors: ["While AI accelerates content mastery, standardized evaluation must evolve because automated grading is flawed.", "Whereas AI reduces administrative overhead, institutional funding must prioritize research over digital tools."]
    },
    'c-teens-elite-7': {
      distractors: ["The sample size was statistically significant, though observational bias was noted in early trials.", "The experimental framework was innovative, but replication across secondary cohorts was pending."]
    },
    'c-teens-elite-8': {
      distractors: ["The motion was amended, debated extensively, and referred back to the oversight committee.", "The resolution was tabled until the subsequent quarter due to a lack of a voting quorum."]
    },
    'c-teens-elite-9': {
      distractors: ["Dismissed the allegations as unverified rumors and promised a press release by end of week.", "Acknowledged partial vulnerabilities while attributing the incident to third-party vendor failure."]
    },
    'c-teens-elite-10': {
      distractors: ["The company projected a 3:1 payback period with high monthly active user retention.", "The startup demonstrated product-market fit through enterprise contracts and low churn."]
    },
    'c-teens-elite-11': {
      distractors: ["A defensive patent portfolio, rapid international distribution, and experienced advisory board.", "Strong organic growth metrics, positive net revenue retention, and lean operational burn."]
    },
    // Masters
    'c-teens-masters-1': {
      distractors: ["Their framing established a higher threshold of urgency and their cross-examination exposed logical gaps.", "Their closing summation appealed to constitutional precedents while the opposition relied on emotional appeals."]
    },
    'c-teens-masters-2': {
      distractors: ["They act as cultural signifiers reflecting internalized beauty standards in contemporary visual media.", "They function as algorithmic feedback loops designed to maximize platform engagement metrics."]
    },
    'c-teens-masters-3': {
      distractors: ["The research resolved theoretical paradoxes through novel mathematical axioms and robust peer review.", "The methodology synthesized qualitative ethnography with high-dimensional computational models."]
    },
    'c-teens-masters-4': {
      distractors: ["Combined historical case studies with charismatic stage presence and interactive audience polling.", "Delivered an analytical thesis structured around three provocative rhetorical questions."]
    },
    'c-teens-masters-5': {
      distractors: ["Passed with 12 affirmative votes and 3 abstentions from non-permanent member states.", "Was vetoed by a permanent member despite overwhelming support from the general assembly."]
    },
    'c-teens-masters-6': {
      distractors: ["Unconventional non-linear narrative editing, evocative cinematography, and poignant character arcs.", "Masterful naturalistic performances, minimalist set design, and allegorical social commentary."]
    },
    'c-teens-masters-7': {
      distractors: ["Exceptional academic scholarship, multidisciplinary research output, and institutional leadership.", "Demonstrated diplomatic acumen, cross-cultural competence, and dedication to public policy reform."]
    },
    'c-teens-masters-8': {
      distractors: ["Compelling narrative investigative arc, exclusive interviews, and cinematic archival footage.", "Data-driven statistical investigation supported by open-source intelligence and expert testimony."]
    },
    'c-teens-masters-9': {
      distractors: ["Mandated transparency in algorithmic auditing, capped carbon emissions, and funded bio-surveillance.", "Created a multilateral oversight treaty for quantum encryption, synthetic biology, and space exploration."]
    },
    'c-teens-masters-10': {
      distractors: ["Demonstrated academic rigor across disciplines, critical reasoning, and global communicative impact.", "Outstanding philosophical scholarship, rhetorical mastery, and dedication to youth empowerment."]
    }
  };

  let globalIndex = 0;
  for (const lvl of levels) {
    for (const cls of (lvl.classes || [])) {
      const slides = (cls.sections || []).flatMap(s => s.slides || []);
      const lSlide = slides.find(s => s.type === 'listening-audio-teacher' || s.listeningData) || slides[7];
      if (!lSlide || !lSlide.listeningData) continue;

      const enh = enhancements[cls.id];
      if (enh?.transcription) {
        lSlide.listeningData.transcription = enh.transcription;
      }
      if (enh?.audioTeacherText) {
        lSlide.listeningData.audioTeacherText = enh.audioTeacherText;
      }
      if (enh?.question) {
        lSlide.listeningData.question = enh.question;
      }

      // Identify correct answer and distractors
      let correctAnswer = enh?.correct || lSlide.listeningData.options[lSlide.listeningData.correctOptionIndex || 0];
      let distractors = enh?.distractors || lSlide.listeningData.options.filter((_, idx) => idx !== (lSlide.listeningData.correctOptionIndex || 0));

      // Balance target index: 0, 1, 2, 0, 1, 2...
      const targetIndex = globalIndex % 3;
      globalIndex++;

      const newOptions = [];
      let dIdx = 0;
      for (let i = 0; i < 3; i++) {
        if (i === targetIndex) {
          newOptions.push(correctAnswer);
        } else {
          newOptions.push(distractors[dIdx] || `Alternative option ${dIdx + 1}`);
          dIdx++;
        }
      }

      lSlide.listeningData.options = newOptions;
      lSlide.listeningData.correctOptionIndex = targetIndex;
      lSlide.listeningData.audioUrl = `/audio/teens-listening/${cls.id}.mp3`;
    }
  }

  // Serialize back to curriculumTeensStudio.ts
  const newTsContent = `import { CurriculumLevel } from './curriculum';\n\nexport const curriculumTeensStudioLevels: CurriculumLevel[] = ${JSON.stringify(levels, null, 2)};\n`;
  fs.writeFileSync(tsPath, newTsContent, 'utf8');
  console.log(`Successfully updated ${tsPath} with ${globalIndex} classes enhanced and balanced!`);
}

updateCurriculum().catch(err => {
  console.error(err);
  process.exit(1);
});
