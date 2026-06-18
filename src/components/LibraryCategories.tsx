import { motion } from 'motion/react';
import { BookOpen, Layers, Clock, Link as LinkIcon, Hash, MapPin, Play } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'verb_to_be',
    title: 'Verb To Be',
    description: 'Am, is, are, was, were - El verbo principal.',
    icon: <Play className="w-6 h-6" />,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'do_does',
    title: 'Auxiliaries: Do / Does',
    description: 'Preguntas y negaciones en presente.',
    icon: <Play className="w-6 h-6" />,
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 'numbers',
    title: 'Cardinal & Ordinal Numbers',
    description: 'Números, fechas y cantidades.',
    icon: <Hash className="w-6 h-6" />,
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'present_tenses',
    title: 'Present Tenses',
    description: 'Simple, Continuous, Perfect, Perfect Continuous.',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 'past_tenses',
    title: 'Past Tenses',
    description: 'Simple, Continuous, Perfect, Perfect Continuous.',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-rose-400 to-red-500'
  },
  {
    id: 'future_tenses',
    title: 'Future Tenses',
    description: 'Will, Going To, Future Continuous & Perfect.',
    icon: <Clock className="w-6 h-6" />,
    color: 'from-fuchsia-400 to-purple-600'
  },
  {
    id: 'connectors',
    title: 'Connectors & Linking Words',
    description: 'Therefore, however, nevertheless, unless, etc.',
    icon: <LinkIcon className="w-6 h-6" />,
    color: 'from-indigo-400 to-violet-600'
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    description: 'In, on, at, under, above, through, etc.',
    icon: <MapPin className="w-6 h-6" />,
    color: 'from-teal-400 to-teal-600'
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    description: 'Zero, First, Second, and Third conditionals.',
    icon: <Layers className="w-6 h-6" />,
    color: 'from-pink-400 to-rose-600'
  },
  {
    id: 'modals',
    title: 'Modal Verbs',
    description: 'Can, could, should, must, might, may, etc.',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'from-yellow-400 to-amber-600'
  }
];

interface LibraryCategoriesProps {
  onSelectCategory: (categoryId: string, title: string) => void;
}

export function LibraryCategories({ onSelectCategory }: LibraryCategoriesProps) {
  return (
    <div className="mt-8">
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-8 text-indigo-900 border-l-4 border-l-indigo-600">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5" /> Plan Estructural de Categorías
        </h3>
        <p className="text-indigo-800/80 mb-4 text-sm font-medium">
          Aquí tenemos el esquema con cada categoría rellenada con sus propias lecciones, teoría y vocabulario exhaustivo. Usa estas opciones para ir directamente a los temas específicos que quieras reforzar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`cursor-pointer overflow-hidden relative rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 bg-gradient-to-br ${category.color}`}
            onClick={() => onSelectCategory(category.id, category.title)}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 shadow-sm">{category.title}</h4>
              <p className="text-white/80 text-sm font-medium leading-snug">{category.description}</p>
              
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold uppercase tracking-wider">Ver temas</span>
                <Layers className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
