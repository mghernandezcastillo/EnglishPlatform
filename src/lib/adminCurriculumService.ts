import { CurriculumLevel, CurriculumClass, ClassSection, ClassSlide } from '../types';
import { curriculumLevels } from '../data/curriculum';
import { curriculumKidsLevels } from '../data/curriculumKids';
import { curriculumTeensLevels } from '../data/curriculumTeens';
import { SLIDE_TYPE_REGISTRY } from '../config/slideTypeRegistry';
import { supabase } from './supabase';

const ADMIN_STORAGE_KEY_PREFIX = 'maven_curriculum_custom_';

export type AudienceTrack = 'adulto' | 'niño' | 'adolescente';

export class AdminCurriculumService {
  /**
   * Load base curriculum for a given audience track with any saved admin overrides
   */
  public static getCurriculum(track: AudienceTrack): CurriculumLevel[] {
    let base: CurriculumLevel[] = [];
    if (track === 'niño') base = curriculumKidsLevels;
    else if (track === 'adolescente') base = curriculumTeensLevels;
    else base = curriculumLevels;

    // Check localStorage overrides
    const saved = localStorage.getItem(`${ADMIN_STORAGE_KEY_PREFIX}${track}`);
    if (saved) {
      try {
        const overrides: Record<string, CurriculumClass> = JSON.parse(saved);
        return base.map(lvl => ({
          ...lvl,
          classes: lvl.classes.map(cls => overrides[cls.id] || cls)
        }));
      } catch (e) {
        console.error('Failed to parse curriculum overrides:', e);
      }
    }

    return base;
  }

  /**
   * Get all classes for a specific level
   */
  public static getLevelClasses(track: AudienceTrack, levelId: string): CurriculumClass[] {
    const levels = this.getCurriculum(track);
    const level = levels.find(l => l.id === levelId);
    return level ? level.classes : [];
  }

  /**
   * Get a specific class
   */
  public static getClass(track: AudienceTrack, levelId: string, classId: string): CurriculumClass | null {
    const classes = this.getLevelClasses(track, levelId);
    return classes.find(c => c.id === classId) || null;
  }

  /**
   * Save an updated class
   */
  public static saveClass(track: AudienceTrack, updatedClass: CurriculumClass): void {
    const key = `${ADMIN_STORAGE_KEY_PREFIX}${track}`;
    let overrides: Record<string, CurriculumClass> = {};
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        overrides = JSON.parse(saved);
      } catch (e) {
        overrides = {};
      }
    }
    overrides[updatedClass.id] = updatedClass;
    localStorage.setItem(key, JSON.stringify(overrides));

    // Background sync to Supabase
    this.syncClassToSupabase(track, updatedClass).catch(err => {
      console.warn('Supabase sync warning:', err);
    });
  }

  public static async syncClassToSupabase(track: AudienceTrack, cls: CurriculumClass): Promise<void> {
    try {
      // Find class in DB
      const { data: dbClass } = await supabase
        .from('curr_classes')
        .select('id')
        .eq('class_id', cls.id)
        .maybeSingle();

      if (!dbClass) return;

      for (let sIdx = 0; sIdx < cls.sections.length; sIdx++) {
        const sec = cls.sections[sIdx];
        const { data: dbSection } = await supabase
          .from('curr_sections')
          .select('id')
          .eq('section_id', sec.id)
          .eq('class_id', dbClass.id)
          .maybeSingle();

        if (!dbSection) continue;

        for (let slideIdx = 0; slideIdx < sec.slides.length; slideIdx++) {
          const slide = sec.slides[slideIdx];
          await supabase
            .from('curr_slides')
            .upsert({
              slide_id: slide.id,
              section_id: dbSection.id,
              title: slide.title,
              description: slide.description,
              content: slide.content,
              image_url: slide.imageUrl,
              bg_color: slide.bgColor,
              options: slide.options,
              correct_option_index: slide.correctOptionIndex,
              type: slide.type,
              video_url: slide.videoUrl,
              wheel_items: slide.wheelItems,
              matching_pairs: slide.matchingPairs,
              mystery_puzzle_data: slide.mysteryPuzzleData,
              roleplay: slide.roleplay,
              speaking_boss_battle: slide.speakingBossBattle,
              structure_drag: slide.structureDrag,
              speaking_assessment: slide.speakingAssessment,
              hide_ai_assistant: slide.hideAiAssistant || false,
              custom_button_text: slide.customButtonText,
              notes: slide.notes,
              sort_order: slideIdx + 1
            }, { onConflict: 'slide_id,section_id' });
        }
      }
    } catch (e) {
      console.error('Error syncing class to Supabase:', e);
    }
  }

  /**
   * Update a specific slide in a class
   */
  public static updateSlide(
    track: AudienceTrack,
    classId: string,
    sectionId: string,
    updatedSlide: ClassSlide
  ): CurriculumClass | null {
    const levels = this.getCurriculum(track);
    let targetClass: CurriculumClass | null = null;

    for (const lvl of levels) {
      const cls = lvl.classes.find(c => c.id === classId);
      if (cls) {
        targetClass = JSON.parse(JSON.stringify(cls));
        break;
      }
    }

    if (!targetClass) return null;

    const section = targetClass.sections.find(s => s.id === sectionId);
    if (!section) return null;

    const slideIdx = section.slides.findIndex(s => s.id === updatedSlide.id);
    if (slideIdx >= 0) {
      section.slides[slideIdx] = updatedSlide;
    } else {
      section.slides.push(updatedSlide);
    }

    this.saveClass(track, targetClass);
    return targetClass;
  }

  /**
   * Delete a slide from a section
   */
  public static deleteSlide(
    track: AudienceTrack,
    classId: string,
    sectionId: string,
    slideId: string
  ): CurriculumClass | null {
    const levels = this.getCurriculum(track);
    let targetClass: CurriculumClass | null = null;

    for (const lvl of levels) {
      const cls = lvl.classes.find(c => c.id === classId);
      if (cls) {
        targetClass = JSON.parse(JSON.stringify(cls));
        break;
      }
    }

    if (!targetClass) return null;

    const section = targetClass.sections.find(s => s.id === sectionId);
    if (!section) return null;

    section.slides = section.slides.filter(s => s.id !== slideId);
    this.saveClass(track, targetClass);
    return targetClass;
  }

  /**
   * Add a new slide to a section
   */
  public static addSlide(
    track: AudienceTrack,
    classId: string,
    sectionId: string,
    slideType: string = 'standard',
    customTitle?: string
  ): { targetClass: CurriculumClass; newSlide: ClassSlide } | null {
    const levels = this.getCurriculum(track);
    let targetClass: CurriculumClass | null = null;

    for (const lvl of levels) {
      const cls = lvl.classes.find(c => c.id === classId);
      if (cls) {
        targetClass = JSON.parse(JSON.stringify(cls));
        break;
      }
    }

    if (!targetClass) return null;

    const section = targetClass.sections.find(s => s.id === sectionId);
    if (!section) return null;

    const newId = `slide-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 5)}`;
    const typeDef = SLIDE_TYPE_REGISTRY[slideType] || SLIDE_TYPE_REGISTRY.standard;
    const defaultData = typeDef.createDefaultSlide(newId, customTitle || `${typeDef.name}`);

    const newSlide: ClassSlide = {
      id: newId,
      title: customTitle || typeDef.name,
      description: defaultData.description || '',
      content: defaultData.content || ['Nuevo contenido editable.'],
      bgColor: defaultData.bgColor || typeDef.defaultBgColor,
      type: defaultData.type as any,
      options: defaultData.options,
      correctOptionIndex: defaultData.correctOptionIndex,
      roleplay: defaultData.roleplay,
      speakingBossBattle: defaultData.speakingBossBattle,
      wheelItems: defaultData.wheelItems
    };

    section.slides.push(newSlide);
    this.saveClass(track, targetClass);
    return { targetClass, newSlide };
  }

  /**
   * Move a slide up/down within its section
   */
  public static reorderSlide(
    track: AudienceTrack,
    classId: string,
    sectionId: string,
    slideId: string,
    direction: 'up' | 'down'
  ): CurriculumClass | null {
    const levels = this.getCurriculum(track);
    let targetClass: CurriculumClass | null = null;

    for (const lvl of levels) {
      const cls = lvl.classes.find(c => c.id === classId);
      if (cls) {
        targetClass = JSON.parse(JSON.stringify(cls));
        break;
      }
    }

    if (!targetClass) return null;
    const section = targetClass.sections.find(s => s.id === sectionId);
    if (!section) return null;

    const idx = section.slides.findIndex(s => s.id === slideId);
    if (idx === -1) return null;

    if (direction === 'up' && idx > 0) {
      const temp = section.slides[idx];
      section.slides[idx] = section.slides[idx - 1];
      section.slides[idx - 1] = temp;
    } else if (direction === 'down' && idx < section.slides.length - 1) {
      const temp = section.slides[idx];
      section.slides[idx] = section.slides[idx + 1];
      section.slides[idx + 1] = temp;
    }

    this.saveClass(track, targetClass);
    return targetClass;
  }

  /**
   * Reset all customizations back to factory defaults
   */
  public static resetTrack(track: AudienceTrack): void {
    localStorage.removeItem(`${ADMIN_STORAGE_KEY_PREFIX}${track}`);
  }

  /**
   * Export the entire curriculum of a track as clean JSON
   */
  public static exportTrackJson(track: AudienceTrack): string {
    const data = this.getCurriculum(track);
    return JSON.stringify(data, null, 2);
  }
}
