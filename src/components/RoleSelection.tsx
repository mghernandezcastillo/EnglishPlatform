import { Users, GraduationCap, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { dbAdmin } from '../lib/db';
import { DbStudent } from '../types';
import { avatars } from '../config';

interface RoleSelectionProps {
  onSelectTeacher: () => void;
  onSelectStudent: (studentData?: DbStudent) => void;
}

export function RoleSelection({ onSelectTeacher, onSelectStudent }: RoleSelectionProps) {
  const [students, setStudents] = useState<DbStudent[]>([]);
  const [showStudentList, setShowStudentList] = useState(false);

  useEffect(() => {
    dbAdmin.getStudents().then(setStudents);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Inglés Paso a Paso</h1>
        <p className="text-xl text-gray-500 mb-12">¿Quién eres?</p>

        {!showStudentList ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <button 
              onClick={onSelectTeacher}
              className="flex flex-col items-center justify-center p-8 bg-indigo-50 border-2 border-indigo-100 hover:border-indigo-400 rounded-3xl transition-all group hover:bg-indigo-100"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Soy Profesor</h2>
              <p className="text-sm text-gray-500">Gestionar alumnos e impartir clases</p>
            </button>

            <button 
              onClick={() => {
                if (students.length > 0) {
                  setShowStudentList(true);
                } else {
                  onSelectStudent(); // Start as guest
                }
              }}
              className="flex flex-col items-center justify-center p-8 bg-green-50 border-2 border-green-100 hover:border-green-400 rounded-3xl transition-all group hover:bg-green-100"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Soy Estudiante</h2>
              <p className="text-sm text-gray-500">Aprender y ver mi progreso</p>
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 mt-8 text-left">
            <button onClick={() => setShowStudentList(false)} className="mb-4 text-sm font-bold text-gray-500 hover:text-indigo-600 flex items-center">
              Volver
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Selecciona tu perfil</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2 pb-4">
              {students.map(st => (
                <button 
                  key={st.id}
                  onClick={() => onSelectStudent(st)}
                  className="flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-2xl hover:border-indigo-400 hover:shadow-md transition-all text-left"
                >
                  <img src={avatars[st.avatar_id as keyof typeof avatars] || avatars.female} className="w-14 h-14 rounded-full object-cover bg-gray-100 border border-gray-200 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 truncate">{st.name}</h4>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{st.level}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-auto text-gray-400" />
                </button>
              ))}
              {students.length === 0 && (
                <div className="col-span-full py-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <p>No hay estudiantes registrados.</p>
                </div>
              )}
            </div>
            <div className="mt-6 text-center">
              <button 
                onClick={() => onSelectStudent()} 
                className="text-gray-500 hover:text-gray-800 font-medium underline"
              >
                Entrar como invitado (Sin guardar perfil)
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 text-center border-t border-gray-100 pt-8">
          <button 
            onClick={() => {
              localStorage.removeItem('mock_students');
              localStorage.removeItem('mock_groups');
              localStorage.removeItem('english_pathway_progress');
              window.location.reload();
            }}
            className="text-xs font-bold text-red-400 hover:text-red-600 uppercase tracking-widest"
          >
            ⚠️ Limpiar datos locales guardados ⚠️
          </button>
        </div>
      </div>
    </div>
  );
}
