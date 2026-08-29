import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  CheckCircle2,
  Sparkles,
  Flame,
  Award,
  Layers,
  ChevronRight,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import { WhQuestionItem, StudentWhProgress, WhLevel } from '../../types';
import { WH_QUESTIONS_DATA, WH_LEVEL_COLORS } from '../../data/whQuestionsData';
import { dbAdmin } from '../../lib/db';
import { WhPracticeArena } from './WhPracticeArena';

interface WhNexusDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  studentId?: string | null;
  studentName?: string;
}

export const WhNexusDrawer: React.FC<WhNexusDrawerProps> = ({
  isOpen,
  onClose,
  studentId,
  studentName
}) => {
  const [selectedLevel, setSelectedLevel] = useState<WhLevel | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [progressMap, setProgressMap] = useState<Record<string, StudentWhProgress>>({});
  const [selectedItem, setSelectedItem] = useState<WhQuestionItem | null>(null);
  const [isLoadingProgress, setIsLoadingProgress] = useState(false);

  // Load Progress from Supabase / Local cache
  useEffect(() => {
    if (isOpen) {
      setIsLoadingProgress(true);
      dbAdmin.getStudentWhProgress(studentId || '').then(data => {
        setProgressMap(data || {});
        setIsLoadingProgress(false);
      });
    }
  }, [isOpen, studentId]);

  // Handle Progress Update
  const handleProgressUpdated = (whId: string, updated: StudentWhProgress) => {
    setProgressMap(prev => ({ ...prev, [whId]: updated }));
  };

  // Filter items based on Level and Search
  const filteredItems = useMemo(() => {
    return WH_QUESTIONS_DATA.filter(item => {
      const matchLevel = selectedLevel === 'ALL' || item.level === selectedLevel;
      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        item.expression.toLowerCase().includes(query) ||
        item.translation.toLowerCase().includes(query) ||
        item.use.toLowerCase().includes(query);
      return matchLevel && matchQuery;
    });
  }, [selectedLevel, searchQuery]);

  // Stats calculation
  const totalMastered = useMemo(() => {
    return Object.values(progressMap).filter(p => p.mastery_score >= 100).length;
  }, [progressMap]);

  const globalMasteryPercent = Math.round((totalMastered / WH_QUESTIONS_DATA.length) * 100);

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[10000] bg-slate-950/70 backdrop-blur-md"
        />

        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 26, stiffness: 240 }}
          className="fixed left-0 top-0 bottom-0 z-[10005] w-full sm:w-[480px] md:w-[520px] bg-slate-950/95 backdrop-blur-2xl border-r border-slate-800 shadow-2xl flex flex-col text-white overflow-hidden select-none"
        >
          {/* ================= DRAWER HEADER ================= */}
          <div className="p-4 sm:p-5 border-b border-slate-800/90 flex flex-col gap-3 shrink-0 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    WH Nexus <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">A1 - B2</span>
                  </h1>
                  <p className="text-xs text-slate-400 font-medium">
                    {studentName ? `Alumno: ${studentName}` : 'Matriz de 50 Preguntas en Inglés'}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Global Mastery Stats Card */}
            <div className="bg-slate-900/90 rounded-2xl p-3.5 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                    Dominio Global
                  </span>
                  <div className="text-sm font-extrabold text-slate-100">
                    <span className="text-amber-400">{totalMastered}</span> / {WH_QUESTIONS_DATA.length} dominadas
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-24 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div
                    className="h-full bg-gradient-to-r from-teal-400 via-indigo-500 to-amber-400 transition-all duration-500"
                    style={{ width: `${globalMasteryPercent}%` }}
                  />
                </div>
                <span className="text-sm font-black text-white">{globalMasteryPercent}%</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar WH question o significado..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Level Filters */}
            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {(['ALL', 'A1', 'A2', 'B1', 'B2'] as const).map(lvl => {
                const isActive = selectedLevel === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`py-2 rounded-xl font-extrabold text-xs transition-all border ${
                      isActive
                        ? lvl === 'ALL'
                          ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
                          : lvl === 'A1'
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30'
                          : lvl === 'A2'
                          ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-600/30'
                          : lvl === 'B1'
                          ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/30'
                          : 'bg-rose-600 text-white border-rose-400 shadow-md shadow-rose-600/30'
                        : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= CARDS LIST (Optimized for Remote Viewing) ================= */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12 text-slate-500 font-medium">
                No se encontraron WH questions con ese criterio.
              </div>
            ) : (
              filteredItems.map(item => {
                const colors = WH_LEVEL_COLORS[item.level] || WH_LEVEL_COLORS.A1;
                const rec = progressMap[item.id];
                const score = rec?.mastery_score || 0;
                const isMastered = score >= 100;
                const isPracticing = score > 0 && score < 100;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setSelectedItem(item)}
                    className={`p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-between gap-3 ${
                      isMastered
                        ? 'bg-gradient-to-r from-slate-900/90 to-amber-950/20 border-amber-500/50 shadow-md shadow-amber-500/10'
                        : isPracticing
                        ? 'bg-slate-900/90 border-indigo-500/40 shadow-sm'
                        : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Level Badge */}
                      <span
                        className={`px-2.5 py-1 rounded-xl text-xs font-black shrink-0 border ${colors.badgeBg} ${colors.badgeText} ${colors.borderGlow}`}
                      >
                        {item.level}
                      </span>

                      {/* Content */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight capitalize truncate">
                            {item.expression}
                          </h3>
                          {item.register && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 uppercase font-bold">
                              {item.register}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium truncate">
                          {item.translation}
                        </p>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      {isMastered ? (
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 font-black text-xs border border-amber-500/40">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>100%</span>
                        </div>
                      ) : isPracticing ? (
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-sky-500/20 text-sky-300 font-bold text-xs border border-sky-500/30">
                          <Flame className="w-3.5 h-3.5" />
                          <span>{score}%</span>
                        </div>
                      ) : (
                        <div className="px-2 py-1 rounded-xl bg-slate-800 text-slate-500 font-bold text-xs">
                          0%
                        </div>
                      )}

                      <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ================= INTERACTIVE PRACTICE ARENA MODAL ================= */}
      <AnimatePresence>
        {selectedItem && (
          <WhPracticeArena
            item={selectedItem}
            studentId={studentId}
            studentName={studentName}
            progressRecord={progressMap[selectedItem.id]}
            onClose={() => setSelectedItem(null)}
            onSelectWh={item => setSelectedItem(item)}
            onProgressUpdated={handleProgressUpdated}
          />
        )}
      </AnimatePresence>
    </>
  );
};
