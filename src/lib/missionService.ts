import { supabase } from './supabase';

export interface Mission {
  id: string;
  studentId: string;
  classId: string;
  status: 'locked' | 'unlocked' | 'in_progress' | 'completed';
  speedCardsScore: number;
  speedCardsTotal: number;
  buildItScore: number;
  buildItTotal: number;
  earCheckScore: number;
  earCheckTotal: number;
  bonusCompleted: boolean;
  bonusType: string | null;
  totalXp: number;
  accuracyPct: number;
  timeSpentSeconds: number;
  unlockedAt: string | null;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
}

export interface MissionStreak {
  id: string;
  studentId: string;
  currentStreak: number;
  longestStreak: number;
  lastMissionDate: string | null;
  totalXp: number;
  totalMissionsCompleted: number;
  updatedAt: string;
}

export interface MissionBadge {
  id: string;
  studentId: string;
  classId: string;
  badgeName: string;
  badgeEmoji: string;
  accuracyPct: number;
  earnedAt: string;
}

export interface SpeedCard {
  id?: string;
  term: string;
  translation: string;
  ipa: string;
  audioText: string;
  example: string;
  type: 'vocab' | 'grammar';
  learned?: boolean;
}

export interface BuildItSentence {
  id?: string;
  spanish?: string;
  english?: string;
  prompt?: string;
  answer?: string;
  tokens: string[];
  hints: string[];
}

export interface EarCheckItem {
  id?: string;
  audioText: string;
  correctAnswer: string;
  options: string[];
}

export interface MissionContent {
  classId: string;
  speedCards: SpeedCard[];
  buildIt: BuildItSentence[];
  earCheck: EarCheckItem[];
  bonusChallenges: any[];
  badgeName: string;
  badgeEmoji: string;
}

export type ThemeMode = 'vibrant' | 'cool';

// Helper for local storage
const getLocal = <T>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

const setLocal = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error saving to localStorage', e);
  }
};

export const missionService = {
  // Missions CRUD
  async getMissions(studentId: string): Promise<Mission[]> {
    const cacheKey = `maven_missions_${studentId}`;
    const local = getLocal<Mission[]>(cacheKey, []);
    
    // Async sync with Supabase
    supabase.from('missions').select('*').eq('student_id', studentId).then(({ data, error }) => {
      if (!error && data) {
        // Map snake_case to camelCase
        const missions: Mission[] = data.map(m => ({
          id: m.id,
          studentId: m.student_id,
          classId: m.class_id,
          status: m.status,
          speedCardsScore: m.speed_cards_score,
          speedCardsTotal: m.speed_cards_total,
          buildItScore: m.build_it_score,
          buildItTotal: m.build_it_total,
          earCheckScore: m.ear_check_score,
          earCheckTotal: m.ear_check_total,
          bonusCompleted: m.bonus_completed,
          bonusType: m.bonus_type,
          totalXp: m.total_xp,
          accuracyPct: m.accuracy_pct,
          timeSpentSeconds: m.time_spent_seconds,
          unlockedAt: m.unlocked_at,
          startedAt: m.started_at,
          completedAt: m.completed_at,
          createdAt: m.created_at
        }));
        setLocal(cacheKey, missions);
      }
    });

    return local;
  },

  async unlockMission(studentId: string, classId: string): Promise<void> {
    const cacheKey = `maven_missions_${studentId}`;
    const missions = getLocal<Mission[]>(cacheKey, []);
    const existing = missions.find(m => m.classId === classId);
    
    const now = new Date().toISOString();
    
    if (existing) {
      if (existing.status === 'locked') {
        existing.status = 'unlocked';
        existing.unlockedAt = now;
      }
    } else {
      missions.push({
        id: crypto.randomUUID(),
        studentId,
        classId,
        status: 'unlocked',
        speedCardsScore: 0,
        speedCardsTotal: 0,
        buildItScore: 0,
        buildItTotal: 0,
        earCheckScore: 0,
        earCheckTotal: 0,
        bonusCompleted: false,
        bonusType: null,
        totalXp: 0,
        accuracyPct: 0,
        timeSpentSeconds: 0,
        unlockedAt: now,
        startedAt: null,
        completedAt: null,
        createdAt: now
      });
    }
    setLocal(cacheKey, missions);

    // Sync
    try {
      await supabase.from('missions').upsert({
        student_id: studentId,
        class_id: classId,
        status: 'unlocked',
        unlocked_at: now
      }, { onConflict: 'student_id,class_id' });
    } catch (e) {
      console.error('Error syncing unlockMission', e);
    }
  },

  async startMission(studentId: string, classId: string): Promise<void> {
    const cacheKey = `maven_missions_${studentId}`;
    const missions = getLocal<Mission[]>(cacheKey, []);
    const mission = missions.find(m => m.classId === classId);
    
    if (mission && mission.status !== 'completed') {
      mission.status = 'in_progress';
      mission.startedAt = mission.startedAt || new Date().toISOString();
      setLocal(cacheKey, missions);

      try {
        await supabase.from('missions').update({
          status: 'in_progress',
          started_at: mission.startedAt
        }).eq('student_id', studentId).eq('class_id', classId);
      } catch (e) {
        console.error('Error syncing startMission', e);
      }
    }
  },
  
  async updateStationScores(
    studentId: string, 
    classId: string, 
    updates: Partial<Pick<Mission, 'speedCardsScore' | 'speedCardsTotal' | 'buildItScore' | 'buildItTotal' | 'earCheckScore' | 'earCheckTotal' | 'bonusCompleted' | 'timeSpentSeconds'>>
  ): Promise<void> {
    const cacheKey = `maven_missions_${studentId}`;
    const missions = getLocal<Mission[]>(cacheKey, []);
    const mission = missions.find(m => m.classId === classId);
    
    if (mission) {
      Object.assign(mission, updates);
      setLocal(cacheKey, missions);

      // Convert updates to snake_case for Supabase
      const dbUpdates: any = {};
      if (updates.speedCardsScore !== undefined) dbUpdates.speed_cards_score = updates.speedCardsScore;
      if (updates.speedCardsTotal !== undefined) dbUpdates.speed_cards_total = updates.speedCardsTotal;
      if (updates.buildItScore !== undefined) dbUpdates.build_it_score = updates.buildItScore;
      if (updates.buildItTotal !== undefined) dbUpdates.build_it_total = updates.buildItTotal;
      if (updates.earCheckScore !== undefined) dbUpdates.ear_check_score = updates.earCheckScore;
      if (updates.earCheckTotal !== undefined) dbUpdates.ear_check_total = updates.earCheckTotal;
      if (updates.bonusCompleted !== undefined) dbUpdates.bonus_completed = updates.bonusCompleted;
      if (updates.timeSpentSeconds !== undefined) dbUpdates.time_spent_seconds = updates.timeSpentSeconds;

      try {
        await supabase.from('missions').update(dbUpdates).eq('student_id', studentId).eq('class_id', classId);
      } catch (e) {
        console.error('Error syncing updateStationScores', e);
      }
    }
  },

  async completeMission(studentId: string, classId: string, finalXp: number, finalAccuracy: number): Promise<void> {
    const cacheKey = `maven_missions_${studentId}`;
    const missions = getLocal<Mission[]>(cacheKey, []);
    let mission = missions.find(m => m.classId === classId);
    
    const nowIso = new Date().toISOString();
    if (mission) {
      mission.status = 'completed';
      mission.completedAt = nowIso;
      mission.totalXp = finalXp;
      mission.accuracyPct = finalAccuracy;
    } else {
      mission = {
        id: crypto.randomUUID(),
        studentId,
        classId,
        status: 'completed',
        speedCardsScore: 7,
        speedCardsTotal: 7,
        buildItScore: 3,
        buildItTotal: 3,
        earCheckScore: 3,
        earCheckTotal: 3,
        bonusCompleted: true,
        bonusType: null,
        totalXp: finalXp,
        accuracyPct: finalAccuracy,
        timeSpentSeconds: 120,
        unlockedAt: nowIso,
        startedAt: nowIso,
        completedAt: nowIso,
        createdAt: nowIso
      };
      missions.push(mission);
    }
    setLocal(cacheKey, missions);

    try {
      await supabase.from('missions').upsert({
        student_id: studentId,
        class_id: classId,
        status: 'completed',
        completed_at: mission.completedAt,
        total_xp: mission.totalXp,
        accuracy_pct: mission.accuracyPct,
        updated_at: nowIso
      }, { onConflict: 'student_id,class_id' });
    } catch (e) {
      console.error('Error syncing completeMission to Supabase', e);
    }
  },

  // XP calculation
  calculateXp(mission: Mission, multiplier: number): number {
    let xp = 0;
    xp += (mission.speedCardsScore || 0) * 10;
    xp += (mission.buildItScore || 0) * 25;
    xp += (mission.earCheckScore || 0) * 15;
    
    if (mission.bonusCompleted) {
      xp += 50;
    }
    
    if (mission.status === 'completed') {
      xp += 30; // Completion bonus
    }
    
    return Math.floor(xp * multiplier);
  },

  getStreakMultiplier(streakDays: number): number {
    if (streakDays < 3) return 1.0;
    if (streakDays < 7) return 1.2;
    if (streakDays < 30) return 1.5;
    return 2.0;
  },

  // Streaks
  async getStreak(studentId: string): Promise<MissionStreak> {
    const cacheKey = `maven_mission_streak_${studentId}`;
    const defaultStreak: MissionStreak = {
      id: crypto.randomUUID(),
      studentId,
      currentStreak: 0,
      longestStreak: 0,
      lastMissionDate: null,
      totalXp: 0,
      totalMissionsCompleted: 0,
      updatedAt: new Date().toISOString()
    };
    const local = getLocal<MissionStreak>(cacheKey, defaultStreak);

    supabase.from('mission_streaks').select('*').eq('student_id', studentId).single().then(({ data, error }) => {
      if (!error && data) {
        const streak: MissionStreak = {
          id: data.id,
          studentId: data.student_id,
          currentStreak: data.current_streak,
          longestStreak: data.longest_streak,
          lastMissionDate: data.last_mission_date,
          totalXp: data.total_xp,
          totalMissionsCompleted: data.total_missions_completed,
          updatedAt: data.updated_at
        };
        setLocal(cacheKey, streak);
      }
    });

    return local;
  },

  async updateStreak(studentId: string, addedXp: number): Promise<MissionStreak> {
    const cacheKey = `maven_mission_streak_${studentId}`;
    const streak = await this.getStreak(studentId);
    
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // YYYY-MM-DD
    
    if (streak.lastMissionDate) {
      const lastDate = new Date(streak.lastMissionDate);
      lastDate.setHours(0, 0, 0, 0);
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);
      
      const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      if (diffDays === 1) {
        // yesterday -> increment
        streak.currentStreak += 1;
      } else if (diffDays > 1) {
        // older -> reset
        streak.currentStreak = 1;
      }
      // if 0 (today) -> no streak change
    } else {
      streak.currentStreak = 1;
    }

    if (streak.currentStreak > streak.longestStreak) {
      streak.longestStreak = streak.currentStreak;
    }

    streak.lastMissionDate = today;
    streak.totalXp += addedXp;
    streak.totalMissionsCompleted += 1;
    streak.updatedAt = now.toISOString();

    setLocal(cacheKey, streak);

    try {
      await supabase.from('mission_streaks').upsert({
        student_id: studentId,
        current_streak: streak.currentStreak,
        longest_streak: streak.longestStreak,
        last_mission_date: streak.lastMissionDate,
        total_xp: streak.totalXp,
        total_missions_completed: streak.totalMissionsCompleted,
        updated_at: streak.updatedAt
      }, { onConflict: 'student_id' });
    } catch (e) {
      console.error('Error syncing updateStreak', e);
    }

    return streak;
  },

  // Badges
  async getBadges(studentId: string): Promise<MissionBadge[]> {
    const cacheKey = `maven_mission_badges_${studentId}`;
    const local = getLocal<MissionBadge[]>(cacheKey, []);

    supabase.from('mission_badges').select('*').eq('student_id', studentId).then(({ data, error }) => {
      if (!error && data) {
        const badges: MissionBadge[] = data.map(b => ({
          id: b.id,
          studentId: b.student_id,
          classId: b.class_id,
          badgeName: b.badge_name,
          badgeEmoji: b.badge_emoji,
          accuracyPct: b.accuracy_pct,
          earnedAt: b.earned_at
        }));
        setLocal(cacheKey, badges);
      }
    });

    return local;
  },

  async awardBadge(studentId: string, classId: string, badgeName: string, badgeEmoji: string, accuracyPct: number): Promise<void> {
    const cacheKey = `maven_mission_badges_${studentId}`;
    const badges = await this.getBadges(studentId);
    
    if (!badges.find(b => b.classId === classId && b.badgeName === badgeName)) {
      const newBadge: MissionBadge = {
        id: crypto.randomUUID(),
        studentId,
        classId,
        badgeName,
        badgeEmoji,
        accuracyPct,
        earnedAt: new Date().toISOString()
      };
      
      badges.push(newBadge);
      setLocal(cacheKey, badges);

      try {
        await supabase.from('mission_badges').insert({
          student_id: studentId,
          class_id: classId,
          badge_name: badgeName,
          badge_emoji: badgeEmoji,
          accuracy_pct: accuracyPct,
          earned_at: newBadge.earnedAt
        });
      } catch (e) {
        console.error('Error syncing awardBadge', e);
      }
    }
  },

  // Mission Content
  async getMissionContent(classId: string): Promise<MissionContent | null> {
    // In a real app this might fetch from a 'mission_content' table
    // For now we might return null or fetch from Supabase
    try {
      const { data, error } = await supabase
        .from('mission_content')
        .select('*')
        .eq('class_id', classId)
        .single();
        
      if (!error && data) {
        return {
          classId: data.class_id,
          speedCards: data.speed_cards,
          buildIt: data.build_it,
          earCheck: data.ear_check,
          bonusChallenges: data.bonus_challenges,
          badgeName: data.badge_name,
          badgeEmoji: data.badge_emoji
        };
      }
    } catch (e) {
      console.error('Error fetching mission content', e);
    }
    return null;
  },

  // Theme Preferences
  getTheme(studentId: string): ThemeMode {
    return getLocal<ThemeMode>(`maven_mission_theme_${studentId}`, 'vibrant');
  },

  setTheme(studentId: string, theme: ThemeMode): void {
    setLocal(`maven_mission_theme_${studentId}`, theme);
    // Could also sync this to student profile in DB if desired
  },

  // Aliases for compatibility
  async getStudentMissions(studentId: string): Promise<Mission[]> {
    return this.getMissions(studentId);
  },

  async getStudentStreak(studentId: string): Promise<MissionStreak> {
    return this.getStreak(studentId);
  },

  async getStudentBadges(studentId: string): Promise<MissionBadge[]> {
    return this.getBadges(studentId);
  }
};
