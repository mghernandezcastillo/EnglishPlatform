import { supabase } from './supabase';
import { VocabItem, VocabMeaning } from '../types';
import { storyDecoderDb } from './storyDecoderDb';

const LOCAL_STORAGE_KEY = 'maven_vocab_vault_items';

// Offline fallback dictionary for common high-yield phrasal verbs & idioms
const FALLBACK_KNOWLEDGE: Record<string, Partial<VocabItem>> = {
  'take off': {
    type: 'phrasal_verb',
    ipa: '/teɪk ɒf/',
    level: 'A2',
    isMultiMeaning: true,
    meanings: [
      {
        meaningNumber: 1,
        meaningLabel: 'Despegar (avión)',
        definitionEs: 'Cuando un avión o aeronave inicia el vuelo y se separa de la pista.',
        definitionEn: 'To leave the ground and begin to fly.',
        usageTip: 'Intransitivo.',
        contextExamples: [
          { en: 'The airplane will take off in ten minutes.', es: 'El avión despegará en diez minutos.', cloze: 'The airplane will [_____] in ten minutes.', highlightWord: 'take off' },
          { en: 'We felt nervous as the jet was taking off.', es: 'Nos sentimos nerviosos mientras el avión despegaba.', cloze: 'We felt nervous as the jet was [_____].', highlightWord: 'taking off' },
          { en: 'Flights cannot take off during severe blizzards.', es: 'Los vuelos no pueden despegar durante ventiscas severas.', cloze: 'Flights cannot [_____] during severe blizzards.', highlightWord: 'take off' }
        ]
      },
      {
        meaningNumber: 2,
        meaningLabel: 'Quitarse (ropa/accesorios)',
        definitionEs: 'Retirar una prenda, calzado o accesorio de tu cuerpo.',
        definitionEn: 'To remove a piece of clothing or accessory from one\'s body.',
        usageTip: 'Separable: take off your shoes / take your shoes off.',
        contextExamples: [
          { en: 'Please take off your coat and make yourself at home.', es: 'Por favor quítate el abrigo y ponte cómodo.', cloze: 'Please [_____] your coat and make yourself at home.', highlightWord: 'take off' },
          { en: 'He took off his wet shoes at the door.', es: 'Se quitó los zapatos mojados en la puerta.', cloze: 'He [_____] his wet shoes at the door.', highlightWord: 'took off' },
          { en: 'You should take your hat off inside the church.', es: 'Deberías quitarte el sombrero dentro de la iglesia.', cloze: 'You should [_____] inside the church.', highlightWord: 'take your hat off' }
        ]
      },
      {
        meaningNumber: 3,
        meaningLabel: 'Tener éxito repentino (negocio/carrera)',
        definitionEs: 'Empezar a ser muy exitoso o popular de forma rápida.',
        definitionEn: 'To suddenly become very successful or popular.',
        usageTip: 'Usado frecuentemente para proyectos, ventas y carreras.',
        contextExamples: [
          { en: 'Her online business really took off last year.', es: 'Su negocio online realmente despegó el año pasado.', cloze: 'Her online business really [_____] last year.', highlightWord: 'took off' },
          { en: 'The new song is taking off on social media.', es: 'La nueva canción está teniendo un éxito rotundo en redes sociales.', cloze: 'The new song is [_____] on social media.', highlightWord: 'taking off' },
          { en: 'Once the marketing began, sales took off immediately.', es: 'Una vez empezó el marketing, las ventas despegaron de inmediato.', cloze: 'Once the marketing began, sales [_____] immediately.', highlightWord: 'took off' }
        ]
      }
    ]
  },
  'break down': {
    type: 'phrasal_verb',
    ipa: '/breɪk daʊn/',
    level: 'B1',
    isMultiMeaning: true,
    meanings: [
      {
        meaningNumber: 1,
        meaningLabel: 'Descomponerse / Averiar (máquina o auto)',
        definitionEs: 'Dejar de funcionar un vehículo o máquina.',
        definitionEn: 'To stop working because of a mechanical or electrical fault.',
        usageTip: 'Intransitivo.',
        contextExamples: [
          { en: 'My car broke down on the highway this morning.', es: 'Mi auto se descompuso en la autopista esta mañana.', cloze: 'My car [_____] on the highway this morning.', highlightWord: 'broke down' },
          { en: 'The elevator often breaks down during peak hours.', es: 'El ascensor a menudo se descompone en horas pico.', cloze: 'The elevator often [_____] during peak hours.', highlightWord: 'breaks down' },
          { en: 'We called a mechanic after the truck broke down.', es: 'Llamamos a un mecánico después de que el camión se averió.', cloze: 'We called a mechanic after the truck [_____].', highlightWord: 'broke down' }
        ]
      },
      {
        meaningNumber: 2,
        meaningLabel: 'Romper en llanto / Colapsar emocionalmente',
        definitionEs: 'Perder el control de las emociones y llorar intensamente.',
        definitionEn: 'To lose control of one\'s emotions and start crying.',
        usageTip: 'Uso reflexivo o personal.',
        contextExamples: [
          { en: 'She broke down in tears when she heard the touching news.', es: 'Ella rompió en llanto cuando escuchó la emotiva noticia.', cloze: 'She [_____] in tears when she heard the touching news.', highlightWord: 'broke down' },
          { en: 'Under intense pressure, he finally broke down.', es: 'Bajo una presión intensa, finalmente se quebró.', cloze: 'Under intense pressure, he finally [_____].', highlightWord: 'broke down' },
          { en: 'It is okay to break down and let your emotions out.', es: 'Está bien desmoronarse y dejar salir las emociones.', cloze: 'It is okay to [_____] and let your emotions out.', highlightWord: 'break down' }
        ]
      },
      {
        meaningNumber: 3,
        meaningLabel: 'Desglosar / Explicar paso a paso',
        definitionEs: 'Dividir información compleja en partes más pequeñas y comprensibles.',
        definitionEn: 'To separate or explain information into smaller, manageable parts.',
        usageTip: 'Transitivo: break down the cost / break it down.',
        contextExamples: [
          { en: 'Can you break down the budget for the team?', es: '¿Puedes desglosar el presupuesto para el equipo?', cloze: 'Can you [_____] the budget for the team?', highlightWord: 'break down' },
          { en: 'The teacher broke down the complex formula easily.', es: 'El profesor desglosó la fórmula compleja con facilidad.', cloze: 'The teacher [_____] the complex formula easily.', highlightWord: 'broke down' },
          { en: 'Let us break this problem down into three steps.', es: 'Vamos a desglosar este problema en tres pasos.', cloze: 'Let us [_____] into three steps.', highlightWord: 'break this problem down' }
        ]
      }
    ]
  },
  'get by': {
    type: 'phrasal_verb',
    ipa: '/ɡɛt baɪ/',
    level: 'B1',
    isMultiMeaning: true,
    meanings: [
      {
        meaningNumber: 1,
        meaningLabel: 'Defenderse / Arreglárselas / Sobrevivir con lo justo',
        definitionEs: 'Lograr salir adelante o manejar una situación con dificultad o recursos limitados.',
        definitionEn: 'To manage to live or do what is needed with difficulty or limited resources.',
        usageTip: 'Intransitivo. Se usa con "on" para dinero o recursos (get by on salary).',
        contextExamples: [
          { en: 'I do not speak fluent French, but I know enough to get by.', es: 'No hablo francés fluido, pero sé lo suficiente para defenderme.', cloze: 'I do not speak fluent French, but I know enough to [_____].', highlightWord: 'get by' },
          { en: 'It is tough, but we can get by on my salary for now.', es: 'Es difícil, pero podemos arreglárnoslas con mi salario por ahora.', cloze: 'It is tough, but we can [_____] on my salary for now.', highlightWord: 'get by' },
          { en: 'How does he get by with so little money?', es: '¿Cómo hace para sobrevivir con tan poco dinero?', cloze: 'How does he [_____] with so little money?', highlightWord: 'get by' }
        ]
      },
      {
        meaningNumber: 2,
        meaningLabel: 'Pasar / Abrirse paso (físicamente)',
        definitionEs: 'Moverse o pasar a través de un lugar estrecho o con mucha gente.',
        definitionEn: 'To pass or move past someone or something in a crowded or narrow space.',
        usageTip: 'Frecuente al pedir permiso: "Excuse me, can I get by?".',
        contextExamples: [
          { en: 'Excuse me, could you please move your cart so I can get by?', es: 'Disculpe, ¿podría mover su carrito para que pueda pasar?', cloze: 'Excuse me, could you please move your cart so I can [_____]?', highlightWord: 'get by' },
          { en: 'The hallway was so crowded that nobody could get by.', es: 'El pasillo estaba tan lleno de gente que nadie podía pasar.', cloze: 'The hallway was so crowded that nobody could [_____].', highlightWord: 'get by' },
          { en: 'Step aside and let the ambulance get by.', es: 'Hazte a un lado y deja que la ambulancia pase.', cloze: 'Step aside and let the ambulance [_____].', highlightWord: 'get by' }
        ]
      }
    ]
  },
  'piece of cake': {
    type: 'idiom',
    ipa: '/piːs əv keɪk/',
    level: 'A2',
    isMultiMeaning: false,
    meanings: [
      {
        meaningNumber: 1,
        meaningLabel: 'Pan comido / Muy fácil',
        definitionEs: 'Expresión idiomática para indicar que una tarea es sumamente sencilla.',
        definitionEn: 'Something that is very easy to do or accomplish.',
        usageTip: 'Muy informal y común en conversaciones cotidianas.',
        contextExamples: [
          { en: 'Don\'t worry about the driving test, it\'s a piece of cake.', es: 'No te preocupes por el examen de conducir, es pan comido.', cloze: 'Don\'t worry about the driving test, it\'s a [_____].', highlightWord: 'piece of cake' },
          { en: 'Fixing this computer issue was a piece of cake.', es: 'Solucionar este problema de la computadora fue muy fácil.', cloze: 'Fixing this computer issue was a [_____].', highlightWord: 'piece of cake' },
          { en: 'With your preparation, this interview will be a piece of cake.', es: 'Con tu preparación, esta entrevista será pan comido.', cloze: 'With your preparation, this interview will be a [_____].', highlightWord: 'piece of cake' }
        ]
      }
    ]
  }
};

const createFallbackItem = (term: string, sourceNote?: string): VocabItem => {
  const normalized = term.trim().toLowerCase();
  const found = FALLBACK_KNOWLEDGE[normalized];

  if (found && found.meanings) {
    return {
      id: crypto.randomUUID(),
      term: term.trim(),
      type: found.type || (term.includes(' ') ? 'phrasal_verb' : 'word'),
      ipa: found.ipa || '',
      level: found.level || 'B1',
      isMultiMeaning: found.isMultiMeaning || false,
      meanings: found.meanings as VocabMeaning[],
      sourceNote: sourceNote || 'Añadido libremente',
      masteryScore: 0,
      reviewCount: 0,
      correctStreak: 0,
      createdAt: new Date().toISOString(),
      nextReviewAt: new Date().toISOString()
    };
  }

  // Generic intelligent generator for terms without pre-baked knowledge
  const isMultiWord = normalized.includes(' ');
  const defaultType = isMultiWord ? (normalized.split(' ').length === 2 ? 'phrasal_verb' : 'idiom') : 'word';

  return {
    id: crypto.randomUUID(),
    term: term.trim(),
    type: defaultType,
    ipa: '',
    level: 'B1',
    isMultiMeaning: false,
    meanings: [
      {
        meaningNumber: 1,
        meaningLabel: `Uso principal de "${term.trim()}"`,
        definitionEs: `Expresión o término en inglés: "${term.trim()}".`,
        definitionEn: `English vocabulary item: "${term.trim()}".`,
        usageTip: 'Practica repitiendo las frases de ejemplo.',
        contextExamples: [
          {
            en: `I always try to use "${term.trim()}" in my English conversations.`,
            es: `Siempre intento usar "${term.trim()}" en mis conversaciones en inglés.`,
            cloze: `I always try to use "[_____]" in my English conversations.`,
            highlightWord: term.trim()
          },
          {
            en: `Can you explain what "${term.trim()}" means in this context?`,
            es: `¿Puedes explicar qué significa "${term.trim()}" en este contexto?`,
            cloze: `Can you explain what "[_____]" means in this context?`,
            highlightWord: term.trim()
          },
          {
            en: `Hearing "${term.trim()}" in a movie helped me understand its natural flow.`,
            es: `Escuchar "${term.trim()}" en una película me ayudó a entender su uso natural.`,
            cloze: `Hearing "[_____]" in a movie helped me understand its natural flow.`,
            highlightWord: term.trim()
          }
        ]
      }
    ],
    sourceNote: sourceNote || 'Añadido libremente',
    masteryScore: 0,
    reviewCount: 0,
    correctStreak: 0,
    createdAt: new Date().toISOString(),
    nextReviewAt: new Date().toISOString()
  };
};

const getLocalStorageKey = (studentId?: string | null) =>
  studentId ? `maven_vocab_vault_items_${studentId}` : 'maven_vocab_vault_items_local';

// Helper to merge existing Story Decoder words into VocabItems
const syncStoryDecoderItems = async (
  currentItems: VocabItem[],
  studentId?: string | null
): Promise<{ items: VocabItem[]; hasNewItems: boolean }> => {
  let hasNew = false;
  const itemMap = new Map<string, VocabItem>(
    currentItems.map((i) => [i.term.toLowerCase().trim(), i])
  );

  // 1. Fetch from Supabase story_decoder_vocabulary if studentId present
  let storyWords: any[] = [];
  if (studentId) {
    storyWords = await storyDecoderDb.getVocabulary(studentId);
  }

  // 2. Fetch from LocalStorage keys strictly scoped to studentId
  const storageKeys = studentId
    ? [`maven_story_decoder_vocabulary:v2:${studentId}`]
    : [`maven_story_decoder_vocabulary:v2:local`];

  storageKeys.forEach((key) => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          parsed.forEach((pw) => {
            if (!storyWords.some((sw) => sw.id === pw.id || sw.english?.toLowerCase() === pw.english?.toLowerCase())) {
              storyWords.push(pw);
            }
          });
        }
      }
    } catch (err) {
      console.warn('Error parsing local story decoder words:', err);
    }
  });

  // 3. Convert any missing story decoder word into a VocabItem
  for (const sw of storyWords) {
    const normTerm = (sw.english || '').toLowerCase().trim();
    if (!normTerm) continue;

    if (!itemMap.has(normTerm)) {
      const isMultiWord = normTerm.includes(' ');
      const defaultType = isMultiWord ? (normTerm.split(' ').length > 3 ? 'expression' : 'phrasal_verb') : 'word';

      const newItem: VocabItem = {
        id: sw.id || crypto.randomUUID(),
        studentId: studentId || null,
        term: sw.english,
        type: defaultType,
        ipa: '',
        level: 'B1',
        isMultiMeaning: false,
        sectionSource: 'story_decoder',
        sourceNote: sw.storyTitle ? `📖 Story: ${sw.storyTitle}` : '📖 Story Decoder',
        meanings: [
          {
            meaningNumber: 1,
            meaningLabel: sw.spanish || sw.english,
            definitionEs: sw.spanish || sw.english,
            definitionEn: sw.exampleEn || sw.english,
            usageTip: 'Guardado desde Story Decoder',
            contextExamples: [
              {
                en: sw.exampleEn || sw.english,
                es: sw.exampleEs || sw.spanish || '',
                cloze: sw.exampleEn || sw.english,
                highlightWord: sw.english,
              },
            ],
          },
        ],
        masteryScore: 0,
        reviewCount: 0,
        correctStreak: 0,
        createdAt: sw.addedAt ? new Date(sw.addedAt).toISOString() : new Date().toISOString(),
        nextReviewAt: new Date().toISOString(),
      };

      itemMap.set(normTerm, newItem);
      hasNew = true;
    }
  }

  const result = Array.from(itemMap.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return { items: result, hasNewItems: hasNew };
};

export const vocabService = {
  // Load all items for a student or local store
  getItems: async (studentId?: string | null): Promise<VocabItem[]> => {
    const storageKey = getLocalStorageKey(studentId);
    let localItems: VocabItem[] = [];
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) localItems = JSON.parse(raw);
    } catch (e) {
      console.warn('Error reading local vocab items', e);
    }

    let items: VocabItem[] = [...localItems];

    if (studentId) {
      try {
        const { data, error } = await supabase
          .from('vocab_vault')
          .select('*')
          .eq('student_id', studentId)
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          const mapped: VocabItem[] = data.map(row => ({
            id: row.id,
            studentId: row.student_id,
            term: row.term,
            type: row.type || 'word',
            ipa: row.ipa || '',
            level: row.level || 'B1',
            isMultiMeaning: Boolean(row.is_multi_meaning),
            meanings: row.meanings || [],
            sourceNote: row.source_note,
            sectionSource: row.section_source || (
              row.source_note?.toLowerCase().includes('story') ? 'story_decoder' :
              row.source_note?.toLowerCase().includes('diapositiva') || row.source_note?.toLowerCase().includes('clase') ? 'slides' :
              row.source_note?.toLowerCase().includes('reading') ? 'reading' : 'general'
            ),
            masteryScore: row.mastery_score ?? 0,
            reviewCount: row.review_count ?? 0,
            correctStreak: row.correct_streak ?? 0,
            lastTestedAt: row.last_tested_at,
            nextReviewAt: row.next_review_at,
            createdAt: row.created_at || new Date().toISOString()
          }));
          items = mapped;
        }
      } catch (e) {
        console.warn('Supabase vocab fetch error, using local fallback:', e);
      }
    }

    // Merge existing Story Decoder saved words
    const { items: merged, hasNewItems } = await syncStoryDecoderItems(items, studentId);
    if (hasNewItems) {
      localStorage.setItem(storageKey, JSON.stringify(merged));
      if (studentId) {
        try {
          const rows = merged.map(item => ({
            id: item.id,
            student_id: studentId,
            term: item.term,
            type: item.type,
            ipa: item.ipa,
            level: item.level,
            is_multi_meaning: item.isMultiMeaning,
            meanings: item.meanings,
            source_note: item.sourceNote,
            section_source: item.sectionSource,
            mastery_score: item.masteryScore,
            review_count: item.reviewCount,
            correct_streak: item.correctStreak,
            last_tested_at: item.lastTestedAt,
            next_review_at: item.nextReviewAt,
            created_at: item.createdAt
          }));
          await supabase.from('vocab_vault').upsert(rows, { onConflict: 'id' });
        } catch (e) {
          console.warn('Error saving merged story decoder items to Supabase:', e);
        }
      }
    }

    return merged.filter(item => studentId ? item.studentId === studentId : true);
  },

  // Save or batch save items
  saveItems: async (items: VocabItem[], studentId?: string | null): Promise<VocabItem[]> => {
    const storageKey = getLocalStorageKey(studentId);
    // 1. Update local storage first
    let current = await vocabService.getItems(studentId);
    const updatedMap = new Map<string, VocabItem>(current.map(i => [i.id, i]));
    items.forEach(i => {
      if (studentId) i.studentId = studentId;
      updatedMap.set(i.id, i);
    });
    const nextList = Array.from(updatedMap.values()).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    localStorage.setItem(storageKey, JSON.stringify(nextList));

    // 2. Sync to Supabase if connected
    if (studentId) {
      try {
        const rows = items.map(item => ({
          id: item.id,
          student_id: studentId,
          term: item.term,
          type: item.type,
          ipa: item.ipa,
          level: item.level,
          is_multi_meaning: item.isMultiMeaning,
          meanings: item.meanings,
          source_note: item.sourceNote,
          section_source: item.sectionSource,
          mastery_score: item.masteryScore,
          review_count: item.reviewCount,
          correct_streak: item.correctStreak,
          last_tested_at: item.lastTestedAt,
          next_review_at: item.nextReviewAt,
          created_at: item.createdAt
        }));

        await supabase.from('vocab_vault').upsert(rows, { onConflict: 'id' });
      } catch (e) {
        console.warn('Supabase vocab sync error (saved locally):', e);
      }

      // Sync any Story Decoder item edits back to story_decoder_vocabulary
      items.forEach(async (item) => {
        const isStory = item.sectionSource === 'story_decoder' || item.sourceNote?.toLowerCase().includes('story');
        if (isStory) {
          const firstMeaning = item.meanings[0];
          const firstExample = firstMeaning?.contextExamples[0];
          const storyWordPayload = {
            id: item.id,
            english: item.term,
            spanish: firstMeaning?.definitionEs || firstMeaning?.meaningLabel || '',
            exampleEn: firstExample?.en || '',
            exampleEs: firstExample?.es || '',
            storyTitle: item.sourceNote?.replace(/^📖\s*Story:\s*/i, '').replace(/^📖\s*Story Decoder/i, '') || '',
            addedAt: new Date(item.createdAt).getTime() || Date.now()
          };

          if (studentId) {
            await storyDecoderDb.saveWord(studentId, storyWordPayload);
          }

          // Local storage sync for Story Decoder
          const storageKeys = studentId
            ? [`maven_story_decoder_vocabulary:v2:${studentId}`]
            : [`maven_story_decoder_vocabulary:v2:local`];
          storageKeys.forEach((key) => {
            try {
              const raw = localStorage.getItem(key);
              const list = raw ? JSON.parse(raw) : [];
              if (Array.isArray(list)) {
                const idx = list.findIndex((w: any) => w.id === item.id || w.english?.toLowerCase().trim() === item.term.toLowerCase().trim());
                if (idx >= 0) {
                  list[idx] = { ...list[idx], ...storyWordPayload };
                } else {
                  list.push(storyWordPayload);
                }
                localStorage.setItem(key, JSON.stringify(list));
              }
            } catch (err) {
              console.warn('Error syncing edited word to local story decoder storage:', err);
            }
          });
        }
      });
    }

    return nextList;
  },

  // Save quick word or phrase from selection or other sections
  saveQuickTerm: async (
    term: string,
    translationEs?: string,
    sectionSource: 'story_decoder' | 'slides' | 'reading' | 'general' = 'general',
    sourceNote?: string,
    studentId?: string | null
  ): Promise<VocabItem> => {
    const cleanTerm = term.trim();
    if (!cleanTerm) throw new Error('Term required');

    const isMultiWord = cleanTerm.includes(' ');
    const defaultType = isMultiWord ? (cleanTerm.split(' ').length > 3 ? 'expression' : 'phrasal_verb') : 'word';

    const item: VocabItem = {
      id: crypto.randomUUID(),
      studentId: studentId || null,
      term: cleanTerm,
      type: defaultType,
      ipa: '',
      level: 'B1',
      isMultiMeaning: false,
      sectionSource,
      sourceNote: sourceNote || (
        sectionSource === 'story_decoder' ? '📖 Story Decoder' :
        sectionSource === 'slides' ? '🎓 Diapositiva de Clase' :
        sectionSource === 'reading' ? '📚 Reading Practice' : '✍️ General'
      ),
      meanings: [
        {
          meaningNumber: 1,
          meaningLabel: translationEs || `Uso de "${cleanTerm}"`,
          definitionEs: translationEs || `Significado o traducción de "${cleanTerm}"`,
          definitionEn: cleanTerm,
          usageTip: 'Palabra/frase guardada en Mi Vocabulario',
          contextExamples: [
            {
              en: cleanTerm,
              es: translationEs || '',
              cloze: cleanTerm,
              highlightWord: cleanTerm
            }
          ]
        }
      ],
      masteryScore: 0,
      reviewCount: 0,
      correctStreak: 0,
      createdAt: new Date().toISOString(),
      nextReviewAt: new Date().toISOString()
    };

    await vocabService.saveItems([item], studentId);
    return item;
  },

  // Delete item with full synchronization across Supabase and Story Decoder
  deleteItem: async (id: string, studentId?: string | null): Promise<void> => {
    const storageKey = getLocalStorageKey(studentId);
    let current = await vocabService.getItems(studentId);
    const target = current.find(item => item.id === id);

    current = current.filter(item => item.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(current));

    try {
      await supabase.from('vocab_vault').delete().eq('id', id);
    } catch (e) {
      console.warn('Supabase delete error in vocab_vault:', e);
    }

    if (target) {
      const termToDelete = target.term.toLowerCase().trim();

      // Delete from Supabase story_decoder_vocabulary table by id or term
      if (studentId) {
        try {
          await storyDecoderDb.deleteWord(studentId, id);
          await supabase
            .from('story_decoder_vocabulary')
            .delete()
            .eq('student_id', studentId)
            .ilike('english', target.term.trim());
        } catch (e) {
          console.warn('Error deleting from story_decoder_vocabulary table:', e);
        }
      }

      // Delete from LocalStorage story decoder keys
      const storageKeys = studentId
        ? [`maven_story_decoder_vocabulary:v2:${studentId}`]
        : [`maven_story_decoder_vocabulary:v2:local`];
      storageKeys.forEach((key) => {
        try {
          const raw = localStorage.getItem(key);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
              const updated = parsed.filter(
                (w: any) => w.id !== id && (w.english || '').toLowerCase().trim() !== termToDelete
              );
              localStorage.setItem(key, JSON.stringify(updated));
            }
          }
        } catch (err) {
          console.warn('Error updating local story decoder words on delete:', err);
        }
      });
    }
  },

  // Enrich single or multiple words using backend Gemini endpoint with graceful fallback
  enrichVocabulary: async (
    terms: string[],
    sourceNote?: string,
    studentId?: string | null
  ): Promise<VocabItem[]> => {
    const cleanTerms = terms.map(t => t.trim()).filter(Boolean);
    if (cleanTerms.length === 0) return [];

    try {
      const response = await fetch('/api/enrich-vocabulary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ terms: cleanTerms, sourceNote })
      });

      if (response.ok) {
        const payload = await response.json();
        if (payload.success && Array.isArray(payload.items) && payload.items.length > 0) {
          const formatted: VocabItem[] = payload.items.map((raw: any) => ({
            id: crypto.randomUUID(),
            studentId: studentId || null,
            term: raw.term || cleanTerms[0],
            type: raw.type || 'word',
            ipa: raw.ipa || '',
            level: raw.level || 'B1',
            isMultiMeaning: Boolean(raw.isMultiMeaning),
            meanings: (raw.meanings || []).map((m: any, idx: number) => ({
              meaningNumber: m.meaningNumber || idx + 1,
              meaningLabel: m.meaningLabel || `Significado ${idx + 1}`,
              definitionEs: m.definitionEs || '',
              definitionEn: m.definitionEn || '',
              usageTip: m.usageTip || '',
              contextExamples: (m.contextExamples || []).map((ex: any) => ({
                en: ex.en || '',
                es: ex.es || '',
                cloze: ex.cloze || (ex.en ? ex.en.replace(new RegExp(raw.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '[_____]') : ''),
                highlightWord: ex.highlightWord || raw.term
              }))
            })),
            sourceNote: raw.sourceNote || sourceNote || 'Añadido libremente',
            masteryScore: 0,
            reviewCount: 0,
            correctStreak: 0,
            createdAt: new Date().toISOString(),
            nextReviewAt: new Date().toISOString()
          }));

          await vocabService.saveItems(formatted, studentId);
          return formatted;
        }
      }
    } catch (err) {
      console.warn('AI endpoint unavailable, using offline heuristic knowledge base', err);
    }

    // Fallback if AI endpoint failed or offline
    const fallbackList = cleanTerms.map(term => createFallbackItem(term, sourceNote));
    await vocabService.saveItems(fallbackList, studentId);
    return fallbackList;
  },

  // Update mastery using spaced repetition logic
  recordTestResult: async (
    itemId: string,
    quality: 'forgot' | 'hard' | 'good' | 'mastered',
    studentId?: string | null
  ): Promise<VocabItem | null> => {
    const items = await vocabService.getItems(studentId);
    const target = items.find(i => i.id === itemId);
    if (!target) return null;

    let scoreDelta = 0;
    let streak = target.correctStreak || 0;
    let daysUntilNextReview = 1;

    switch (quality) {
      case 'forgot':
        scoreDelta = -20;
        streak = 0;
        daysUntilNextReview = 1;
        break;
      case 'hard':
        scoreDelta = 10;
        streak += 1;
        daysUntilNextReview = 2;
        break;
      case 'good':
        scoreDelta = 25;
        streak += 1;
        daysUntilNextReview = Math.max(3, streak * 3);
        break;
      case 'mastered':
        scoreDelta = 40;
        streak += 2;
        daysUntilNextReview = Math.max(7, streak * 5);
        break;
    }

    const nextScore = Math.max(0, Math.min(100, (target.masteryScore || 0) + scoreDelta));
    const nextReviewDate = new Date(Date.now() + daysUntilNextReview * 24 * 60 * 60 * 1000).toISOString();

    const updated: VocabItem = {
      ...target,
      masteryScore: nextScore,
      reviewCount: (target.reviewCount || 0) + 1,
      correctStreak: streak,
      lastTestedAt: new Date().toISOString(),
      nextReviewAt: nextReviewDate
    };

    await vocabService.saveItems([updated], studentId);
    return updated;
  }
};
