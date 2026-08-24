import { supabase } from './supabase';
import type { SavedVocabularyWord } from '../components/StoryVocabularyLibrary';

export const storyDecoderDb = {
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
        return data.map((row) => ({
          id: row.id,
          english: row.english,
          spanish: row.spanish,
          exampleEn: row.example_en || '',
          exampleEs: row.example_es || '',
          storyTitle: row.story_title || '',
          storyId: row.story_id || '',
          addedAt: Number(row.added_at) || Date.now()
        }));
      }
    } catch (err) {
      console.warn('Error reading from story_decoder_vocabulary in Supabase:', err);
    }

    return [];
  },

  saveWord: async (studentId: string | null | undefined, word: SavedVocabularyWord) => {
    if (!studentId) return;

    try {
      const payload = {
        id: word.id,
        student_id: studentId,
        english: word.english,
        spanish: word.spanish,
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
  }
};
