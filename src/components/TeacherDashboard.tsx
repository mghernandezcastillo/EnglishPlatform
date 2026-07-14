import { useState, useEffect } from 'react';
import { dbAdmin } from '../lib/db';
import { DbStudent, DbGroup } from '../types';
import { Users, UserPlus, BookOpen, ChevronLeft, Save, Target } from 'lucide-react';
import { avatars } from '../config';
import { CurriculumView } from './CurriculumView';
import { getCurriculumForType } from '../data/curriculumSelector';
import { useBrand } from '../hooks/useBrand';

interface TeacherDashboardProps {
  onBack: () => void;
  onEnterAsStudent?: (student: DbStudent) => void;
}

export function TeacherDashboard({ onBack, onEnterAsStudent }: TeacherDashboardProps) {
  const [students, setStudents] = useState<DbStudent[]>([]);
  const [groups, setGroups] = useState<DbGroup[]>([]);
  const [evaluations, setEvaluations] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'students' | 'groups' | 'evaluations' | 'curriculum' | 'settings'>('students');
  const [selectedStudent, setSelectedStudent] = useState<DbStudent | null>(null);
  const [isEditingStudentInfo, setIsEditingStudentInfo] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [isCreatingStudent, setIsCreatingStudent] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', avatar_id: 'female', level: 'Basic Zero', type: 'adulto', group_id: '' });

  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  
  const { brand, saveBrand } = useBrand();
  const [editingBrand, setEditingBrand] = useState(brand);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    setEditingBrand(brand);
  }, [brand]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const s = await dbAdmin.getStudents();
    const g = await dbAdmin.getGroups();
    const e = await dbAdmin.getEvaluations();
    setStudents(s);
    setGroups(g);
    setEvaluations(e);
  };

  const handleCreateStudent = async () => {
    if (!newStudent.name) return;
    await dbAdmin.createStudent({
      name: newStudent.name,
      avatar_id: newStudent.avatar_id,
      level: newStudent.level,
      type: newStudent.type,
      group_id: newStudent.group_id || undefined
    });
    setIsCreatingStudent(false);
    setNewStudent({ name: '', avatar_id: 'female', level: 'Basic Zero', type: 'adulto', group_id: '' });
    loadData();
  };

  const handleCreateGroup = async () => {
    if (!newGroupName) return;
    await dbAdmin.createGroup(newGroupName, '');
    setIsCreatingGroup(false);
    setNewGroupName('');
    loadData();
  };

  if (selectedStudent) {
    const currLevels = getCurriculumForType(selectedStudent.type);
    
    // Find matching curriculum level (approximate match on title)
    // The DbStudent.level is usually strings like "Basic Zero" or "A1"
    const stLevelTokens = (selectedStudent.level || '').toLowerCase().split(' ');
    let currentLevelObj = currLevels.find(l => 
        stLevelTokens.some(tok => l.title.toLowerCase().includes(tok))
    );
    if (!currentLevelObj) {
        currentLevelObj = currLevels[0]; // fallback
    }
    const hasOralEvaluation = Boolean(currentLevelObj?.oralEvaluation?.length);
    const hasVirtualEvaluation = Boolean(currentLevelObj?.virtualEvaluation?.length);

    return (
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
            <button onClick={() => { setSelectedStudent(null); setIsEditingStudentInfo(false); }} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-medium">
                <ChevronLeft className="w-5 h-5" /> Volver a Estudiantes
            </button>
             <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-8 flex flex-col items-start gap-6">
                 {isEditingStudentInfo ? (
                    <div className="w-full flex flex-col gap-4">
                       <h2 className="text-xl font-bold text-gray-800">Editar Estudiante</h2>
                       <div className="flex flex-col md:flex-row gap-4 items-end">
                         <div className="flex-1">
                           <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                           <input type="text" value={selectedStudent.name} onChange={e => setSelectedStudent({...selectedStudent, name: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
                         </div>
                         <div className="w-40">
                           <label className="block text-sm font-medium text-gray-700 mb-1">Nivel</label>
                           <select value={selectedStudent.level} onChange={e => setSelectedStudent({...selectedStudent, level: e.target.value})} className="w-full px-4 py-2 border rounded-xl bg-white">
                             <option>Basic Zero</option>
                             <option>A1</option>
                             <option>A2</option>
                             <option>B1</option>
                             <option>B2</option>
                           </select>
                         </div>
                         <div className="w-40">
                           <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                           <select value={selectedStudent.type || 'adulto'} onChange={e => setSelectedStudent({...selectedStudent, type: e.target.value})} className="w-full px-4 py-2 border rounded-xl bg-white">
                             <option value="adulto">Adulto</option>
                             <option value="adolescente">Adolescente</option>
                             <option value="niño">Niño</option>
                           </select>
                         </div>
                       </div>
                       <div className="w-full">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Avatar</label>
                          <div className="flex gap-2 bg-slate-50 p-2 rounded-xl overflow-x-auto w-full">
                              {Object.entries(avatars).map(([id, url]) => {
                                 const isSelected = selectedStudent.avatar_id === id;
                                 return (
                                    <button 
                                      key={id} 
                                      onClick={() => setSelectedStudent({...selectedStudent, avatar_id: id})}
                                      className={`w-16 h-16 shrink-0 rounded-full border-2 overflow-hidden transition-all ${isSelected ? 'border-indigo-600 scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                    >
                                      <img referrerPolicy="no-referrer" src={url} alt={id} className="w-full h-full object-cover" />
                                    </button>
                                 )
                              })}
                          </div>
                       </div>
                       <div className="flex gap-2 mt-2">
                           <button onClick={async () => {
                               await dbAdmin.updateStudent(selectedStudent.id, {
                                   name: selectedStudent.name,
                                   level: selectedStudent.level,
                                   type: selectedStudent.type,
                                   avatar_id: selectedStudent.avatar_id
                               });
                               setIsEditingStudentInfo(false);
                               loadData();
                           }} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-bold transition-colors">
                             Guardar
                           </button>
                           <button onClick={() => {
                               setIsEditingStudentInfo(false);
                               loadData();
                           }} className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-6 py-2 rounded-xl font-bold transition-colors">
                             Cancelar
                           </button>
                       </div>
                    </div>
                 ) : (
                    <div className="w-full flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <img referrerPolicy="no-referrer" src={avatars[selectedStudent.avatar_id as keyof typeof avatars] || avatars.female} className="w-24 h-24 rounded-full border-4 border-indigo-50" />
                            <div>
                                <div className="flex items-center gap-3">
                                   <h1 className="text-3xl font-extrabold text-gray-900">{selectedStudent.name}</h1>
                                   <button onClick={() => setIsEditingStudentInfo(true)} className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-bold hover:bg-indigo-100">Editar</button>
                                   <button 
                                      onClick={() => setShowDeleteConfirm(true)} 
                                      className="text-sm bg-red-50 text-red-700 px-3 py-1 rounded-full font-bold hover:bg-red-100"
                                   >
                                      Eliminar
                                   </button>
                                </div>
                                {showDeleteConfirm ? (
                                  <div className="flex items-center gap-2 mt-2 bg-red-50 p-2 rounded-lg border border-red-100">
                                    <span className="text-sm text-red-800 font-medium">¿Seguro que deseas eliminarlo?</span>
                                    <button 
                                      onClick={async () => {
                                         await dbAdmin.deleteStudent(selectedStudent.id);
                                         setSelectedStudent(null);
                                         setShowDeleteConfirm(false);
                                         loadData();
                                      }}
                                      className="text-xs font-bold bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors"
                                    >Sí, eliminar</button>
                                    <button 
                                      onClick={() => setShowDeleteConfirm(false)}
                                      className="text-xs font-bold bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-300 transition-colors"
                                    >Cancelar</button>
                                  </div>
                                ) : (
                                <div className="flex gap-3 mt-2">
                                    <span className="text-sm font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">{selectedStudent.level}</span>
                                    {selectedStudent.type && <span className="text-sm font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full capitalize">{selectedStudent.type}</span>}
                                    {selectedStudent.group_id && <span className="text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">En grupo</span>}
                                </div>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full md:w-auto mt-4 md:mt-0">
                            <button 
                               onClick={() => onEnterAsStudent && onEnterAsStudent(selectedStudent)}
                               className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl transition-all shadow-sm"
                            >
                               Dictar a este alumno
                            </button>
                            <button 
                               onClick={() => {
                                  const url = `${window.location.origin}/?studentId=${selectedStudent.id}&type=${encodeURIComponent(selectedStudent.type || 'adulto')}`;
                                  navigator.clipboard.writeText(url);
                                  showToast('¡Enlace de acceso copiado al portapapeles!');
                               }}
                               className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-xl transition-all"
                            >
                               Copiar Link de Acceso
                            </button>
                        </div>
                    </div>
                 )}
             </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Evaluaciones del Nivel Actual</h2>
                <p className="text-gray-500">Comparte los enlaces para los exámenes del estudiante.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
                {currentLevelObj && (hasOralEvaluation || hasVirtualEvaluation) ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Oral Exam Teacher view */}
                        {hasOralEvaluation && (
                            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 flex flex-col">
                                <h3 className="font-bold text-amber-900 text-xl mb-4">Examen Oral</h3>
                                <p className="text-amber-800 mb-6 flex-1">
                                    Preguntas predefinidas para evaluar la fluidez y pronunciación de {selectedStudent.name} en el nivel {currentLevelObj.title}.
                                </p>
                                <button
                                    onClick={() => {
                                        const qText = currentLevelObj?.oralEvaluation?.map(q => `*${q.topic}*: ${q.question}`).join('\n\n');
                                        const msg = `Hola ${selectedStudent.name}, aquí están las preguntas para que prepares tu examen oral del nivel ${currentLevelObj?.title}:\n\n${qText}`;
                                        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                                    }}
                                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl w-full text-center transition-all bg-amber-600"
                                >
                                    Compartir Preguntas a WhatsApp
                                </button>
                            </div>
                        )}
                        {hasVirtualEvaluation && (
                            <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6 flex flex-col">
                                <h3 className="font-bold text-emerald-900 text-xl mb-4">Examen Virtual</h3>
                                <p className="text-emerald-800 mb-6 flex-1">
                                    Examen de opciones múltiples, gramática y dictado en plataforma. La calificación se guardará automáticamente en el panel.
                                </p>
                                <button
                                    onClick={() => {
                                        const url = `${window.location.origin}/?evaluacion=${currentLevelObj?.id}&student=${encodeURIComponent(selectedStudent.name)}&type=${encodeURIComponent(selectedStudent.type || 'adulto')}`;
                                        const msg = `¡Hola ${selectedStudent.name}! Aquí está tu enlace directo para realizar el examen virtual del nivel ${currentLevelObj?.title}. ¡Mucho éxito!\n\n${url}`;
                                        window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
                                    }}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl w-full text-center transition-all"
                                >
                                    Enviar Enlace de Examen
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-gray-500 py-8 text-center text-lg font-medium">No hay evaluaciones configuradas para este nivel aún.</div>
                )}
            </div>
            
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Otro Material</h2>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <CurriculumView />
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      <button onClick={onBack} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-medium">
        <ChevronLeft className="w-5 h-5" /> Volver al Inicio
      </button>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-8 flex flex-col items-start gap-6">
        <div className="flex items-center gap-4 w-full justify-between flex-wrap">
           <div className="flex items-center gap-4">
             {brand.logoUrl && <img referrerPolicy="no-referrer" src={brand.logoUrl} alt={brand.name} className="w-12 h-12 object-contain rounded-xl" />}
             <div>
               <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Panel de Profesor</h1>
               <p className="text-gray-500 mt-1">Gestiona estudiantes, grupos y supervisa su progreso.</p>
             </div>
           </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-6 md:mt-0 w-full md:w-auto">
          <button 
            onClick={() => setActiveTab('students')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'students' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Estudiantes
          </button>
          <button 
            onClick={() => setActiveTab('groups')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'groups' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Grupos
          </button>
          <button 
            onClick={() => setActiveTab('evaluations')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'evaluations' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            Evaluaciones
          </button>
          <button 
            onClick={() => setActiveTab('curriculum')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'curriculum' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
             Material & Exámenes
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'settings' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
             Marca & Config
          </button>
        </div>
      </div>

      {activeTab === 'students' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Estudiantes Inscritos</h2>
            <button 
              onClick={() => setIsCreatingStudent(!isCreatingStudent)}
              className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-100 transition-colors"
            >
              <UserPlus className="w-5 h-5" /> Nuevo Estudiante
            </button>
          </div>

          {isCreatingStudent && (
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 mb-6 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input type="text" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className="w-full px-4 py-2 border rounded-xl" placeholder="Juan Pérez" />
                </div>
                <div className="w-40">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nivel</label>
                  <select value={newStudent.level} onChange={e => setNewStudent({...newStudent, level: e.target.value})} className="w-full px-4 py-2 border rounded-xl bg-white">
                    <option>Basic Zero</option>
                    <option>A1</option>
                    <option>A2</option>
                    <option>B1</option>
                    <option>B2</option>
                  </select>
                </div>
                <div className="w-40">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                  <select value={newStudent.type} onChange={e => setNewStudent({...newStudent, type: e.target.value})} className="w-full px-4 py-2 border rounded-xl bg-white">
                    <option value="adulto">Adulto</option>
                    <option value="adolescente">Adolescente</option>
                    <option value="niño">Niño</option>
                  </select>
                </div>
                <div className="w-48">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grupo (Opcional)</label>
                  <select value={newStudent.group_id} onChange={e => setNewStudent({...newStudent, group_id: e.target.value})} className="w-full px-4 py-2 border rounded-xl bg-white">
                    <option value="">Sin Grupo</option>
                    {groups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                 <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Avatar</label>
                    <div className="flex gap-2 bg-slate-50 p-2 rounded-xl overflow-x-auto w-full">
                        {Object.entries(avatars).map(([id, url]) => {
                           // For kids, only show kids avatars, for adults show adult avatars.
                           // Actually, let's just let the teacher choose any avatar
                           const isSelected = newStudent.avatar_id === id;
                           return (
                              <button 
                                key={id} 
                                onClick={() => setNewStudent({...newStudent, avatar_id: id})}
                                className={`w-12 h-12 shrink-0 rounded-full border-2 overflow-hidden transition-all ${isSelected ? 'border-indigo-600 scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                              >
                                <img referrerPolicy="no-referrer" src={url} alt={id} className="w-full h-full object-cover" />
                              </button>
                           )
                        })}
                    </div>
                 </div>
                 <button onClick={handleCreateStudent} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-bold transition-colors w-full md:w-auto mt-4 md:mt-0 whitespace-nowrap">
                   Guardar
                 </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map(st => (
              <div key={st.id} onClick={() => setSelectedStudent(st)} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <img referrerPolicy="no-referrer" src={avatars[st.avatar_id as keyof typeof avatars] || avatars.female} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{st.name}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded w-max">{st.level}</span>
                      {st.type && <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded w-max capitalize">{st.type}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4 border-t pt-4">
                  <span>Clases completadas: <strong className="text-gray-900">{st.completed_lessons?.length || 0}</strong></span>
                  {st.group_id && <span className="flex items-center gap-1"><Users className="w-4 h-4"/> Grupo</span>}
                </div>
              </div>
            ))}
            {students.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-400 font-medium">No hay estudiantes creados aún.</div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'groups' && (
         <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-bold text-gray-800">Grupos</h2>
             <button 
               onClick={() => setIsCreatingGroup(!isCreatingGroup)}
               className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-100 transition-colors"
             >
               <Users className="w-5 h-5" /> Nuevo Grupo
             </button>
           </div>
           
           {isCreatingGroup && (
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 mb-6 flex flex-col md:flex-row gap-4 items-end">
               <div className="flex-1">
                 <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Grupo</label>
                 <input type="text" value={newGroupName} onChange={e => setNewGroupName(e.target.value)} className="w-full px-4 py-2 border rounded-xl" placeholder="Ej: Kids Básico, Adultos Nocturno" />
               </div>
               <button onClick={handleCreateGroup} className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold transition-colors flex items-center gap-2">
                 <Save className="w-5 h-5" /> Crear
               </button>
             </div>
           )}

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {groups.map(g => {
               const gStudents = students.filter(s => s.group_id === g.id);
               return (
                 <div key={g.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                   <div>
                     <h3 className="text-xl font-bold text-gray-900">{g.name}</h3>
                     <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                       <Users className="w-4 h-4" /> {gStudents.length} Estudiantes
                     </p>
                   </div>
                   <button className="text-indigo-600 font-semibold hover:text-indigo-800">Ver Detalles</button>
                 </div>
               )
             })}
             {groups.length === 0 && (
               <div className="col-span-full py-12 text-center text-gray-400 font-medium">No hay grupos creados aún.</div>
             )}
           </div>
         </div>
      )}

      {activeTab === 'evaluations' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Resultados de Evaluaciones</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             {evaluations.length === 0 ? (
                <div className="py-12 text-center text-gray-400 font-medium">No hay evaluaciones completadas aún.</div>
             ) : (
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="p-4 font-bold text-gray-600">Estudiante</th>
                      <th className="p-4 font-bold text-gray-600">Nivel Evaluado</th>
                      <th className="p-4 font-bold text-gray-600">Puntaje</th>
                      <th className="p-4 font-bold text-gray-600 text-right">Porcentaje</th>
                    </tr>
                  </thead>
                  <tbody>
                     {evaluations.map((ev, i) => {
                       const percentage = Math.round((ev.score / ev.total_questions) * 100);
                       return (
                         <tr key={ev.id || i} className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                           <td className="p-4 font-semibold text-gray-900">{ev.student_name}</td>
                           <td className="p-4">
                             <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                               {ev.level_id}
                             </span>
                           </td>
                           <td className="p-4 font-medium text-gray-700">
                             {ev.score} / {ev.total_questions}
                           </td>
                           <td className="p-4 text-right">
                             <div className={`font-black text-lg ${percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                               {percentage}%
                             </div>
                           </td>
                         </tr>
                       )
                     })}
                  </tbody>
                </table>
             )}
          </div>
        </div>
      )}

      {activeTab === 'curriculum' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
           <CurriculumView />
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Configuración de Marca</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-2xl">
            <div className="mb-6">
               <label className="block text-sm font-bold text-gray-700 mb-2">Nombre de la Academia</label>
               <input 
                 type="text" 
                 value={editingBrand.name} 
                 onChange={e => setEditingBrand({...editingBrand, name: e.target.value})} 
                 className="w-full px-4 py-3 border-2 border-gray-100 focus:border-indigo-500 rounded-xl outline-none"
               />
            </div>
            <div className="mb-6">
               <label className="block text-sm font-bold text-gray-700 mb-2">URL del Logo (Public / HTTP)</label>
               <div className="flex items-center gap-4">
                 {editingBrand.logoUrl && (
                   <img referrerPolicy="no-referrer" src={editingBrand.logoUrl} alt="Logo Preview" className="w-16 h-16 object-contain border border-gray-200 rounded-xl" />
                 )}
                 <input 
                   type="text" 
                   value={editingBrand.logoUrl} 
                   onChange={e => setEditingBrand({...editingBrand, logoUrl: e.target.value})} 
                   className="flex-1 px-4 py-3 border-2 border-gray-100 focus:border-indigo-500 rounded-xl outline-none"
                 />
               </div>
               <p className="text-xs text-gray-400 mt-2">Puedes subir el logo externamente e indicar aquí el link. O usar un logo local como /logo.jpg</p>
            </div>
            <div className="mb-8">
               <label className="block text-sm font-bold text-gray-700 mb-2">PIN de Acceso Profesor (4 dígitos)</label>
               <input 
                 type="text" 
                 maxLength={4}
                 value={editingBrand.teacherPin} 
                 onChange={e => setEditingBrand({...editingBrand, teacherPin: e.target.value.replace(/\D/g, '')})} 
                 className="w-32 text-center text-xl tracking-widest font-mono py-2 border-2 border-gray-100 focus:border-indigo-500 rounded-xl outline-none"
               />
            </div>
            <button 
              onClick={() => {
                saveBrand(editingBrand);
                showToast('Configuración guardada correctamente.');
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-xl flex items-center gap-2 transition-all"
            >
              <Save className="w-5 h-5" />
              Guardar Configuración
            </button>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-xl font-medium animate-in slide-in-from-bottom-5">
          {toast}
        </div>
      )}
    </div>
  );
}
