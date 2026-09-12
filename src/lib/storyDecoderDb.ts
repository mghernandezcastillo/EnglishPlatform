import { supabase } from './supabase';
import type { SavedVocabularyWord } from '../components/StoryVocabularyLibrary';
import { vocabService } from './vocabService';

export type DecoderProgress = {
  completedStoryIds: string[];
  lineByStory: Record<string, number>;
};

export const storyDecoderDb = {
  getProgress: async (studentId?: string | null): Promise<DecoderProgress | null> => {
    if (!studentId) return null;

    try {
      const { data, error } = await supabase
        .from('story_decoder_progress')
        .select('completed_story_ids, line_by_story')
        .eq('student_id', studentId)
        .maybeSingle();

      if (error) {
        console.warn('Supabase story_decoder_progress fetch error:', error);
        return null;
      }

      if (data) {
        return {
          completedStoryIds: Array.isArray(data.completed_story_ids) ? data.completed_story_ids : [],
          lineByStory: data.line_by_story && typeof data.line_by_story === 'object' ? data.line_by_story : {}
        };
      }
    } catch (err) {
      console.warn('Error reading from story_decoder_progress in Supabase:', err);
    }

    return null;
  },

  saveProgress: async (studentId: string | null | undefined, progress: DecoderProgress) => {
    if (!studentId) return;

    try {
      const payload = {
        student_id: studentId,
        completed_story_ids: progress.completedStoryIds || [],
        line_by_story: progress.lineByStory || {},
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('story_decoder_progress')
        .upsert([payload], { onConflict: 'student_id' });

      if (error) {
        console.warn('Error saving progress to Supabase story_decoder_progress:', error);
      }
    } catch (err) {
      console.warn('Supabase saveProgress error:', err);
    }
  },

  getVocabulary: async (studentId?: string | null): Promise<SavedVocabularyWord[]> => {
    if (!studentId) return [];

    try {
      const { data, error } = await supabase
        .from('story_decoder_vocabulary')
        .select('*')
        .eq('student_id', studentId)
        .order('added_at', { ascending: false });

      if (error) {
        console.warn('Supabase story_decoder_vocabulary fetch error:', error);
        return [];
      }

      if (data && data.length > 0) {
        const seen = new Set<string>();
        const uniqueWords: SavedVocabularyWord[] = [];
        data.forEach((row) => {
          const norm = (row.english || '').toLowerCase().trim();
          if (norm && !seen.has(norm)) {
            seen.add(norm);
            uniqueWords.push({
              id: row.id,
              english: row.english,
              spanish: row.spanish,
              exampleEn: row.example_en || '',
              exampleEs: row.example_es || '',
              storyTitle: row.story_title || '',
              storyId: row.story_id || '',
              addedAt: Number(row.added_at) || Date.now()
            });
          }
        });
        return uniqueWords;
      }
    } catch (err) {
      console.warn('Error reading from story_decoder_vocabulary in Supabase:', err);
    }

    return [];
  },

  saveWord: async (studentId: string | null | undefined, word: SavedVocabularyWord) => {
    if (!studentId) return;

    try {
      const stableId = word.id || `sd_${(word.english || '').toLowerCase().trim().replace(/[^a-z0-9]/g, '_')}`;
      const payload = {
        id: stableId,
        student_id: studentId,
        english: word.english.trim(),
        spanish: word.spanish.trim(),
        example_en: word.exampleEn || '',
        example_es: word.exampleEs || '',
        story_title: word.storyTitle || '',
        story_id: word.storyId || '',
        added_at: word.addedAt || Date.now()
      };

      const { error } = await supabase
        .from('story_decoder_vocabulary')
        .upsert([payload], { onConflict: 'student_id,id' });

      if (error) {
        console.warn('Error saving word to Supabase story_decoder_vocabulary:', error);
      }
    } catch (err) {
      console.warn('Supabase saveWord error:', err);
    }
  },

  deleteWord: async (studentId: string | null | undefined, id: string) => {
    if (!studentId) return;

    try {
      const { error } = await supabase
        .from('story_decoder_vocabulary')
        .delete()
        .eq('student_id', studentId)
        .eq('id', id);

      if (error) {
        console.warn('Error deleting word from Supabase story_decoder_vocabulary:', error);
      }
    } catch (err) {
      console.warn('Supabase deleteWord error:', err);
    }
  },

  updateWord: async (studentId: string | null | undefined, word: SavedVocabularyWord) => {
    if (!studentId) return;
    await storyDecoderDb.saveWord(studentId, word);
  },

  getItemMasteryMap: (studentId: string | null | undefined, blockId: number): Record<string, 'unseen' | 'practicing' | 'mastered'> => {
    const key = `story_mastery_${studentId || 'local'}_block_${blockId}`;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  },

  saveItemMasteryStatus: (studentId: string | null | undefined, blockId: number, itemId: string, status: 'unseen' | 'practicing' | 'mastered') => {
    const key = `story_mastery_${studentId || 'local'}_block_${blockId}`;
    try {
      const current = storyDecoderDb.getItemMasteryMap(studentId, blockId);
      current[itemId] = status;
      localStorage.setItem(key, JSON.stringify(current));
    } catch (err) {
      console.warn('Error saving item mastery:', err);
    }
  }
};
