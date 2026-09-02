import React, { useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Eraser,
  Sparkles,
  Highlighter,
  Palette,
  ChevronDown,
  Plus,
  Minus,
  Type
} from 'lucide-react';

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  fontSize?: number;
  onFontSizeChange?: (size: number) => void;
  lineSpacing?: 'compact' | 'normal' | 'relaxed';
  theme?: 'light' | 'dark' | 'amber';
  fontFamily?: 'sans' | 'mono' | 'handwriting';
}

const TEXT_COLORS = [
  { name: 'Negro / Estándar', color: '#0f172a', preview: 'bg-slate-900' },
  { name: 'Azul Profesor', color: '#2563eb', preview: 'bg-blue-600' },
  { name: 'Rojo Corrección', color: '#dc2626', preview: 'bg-red-600' },
  { name: 'Verde Éxito', color: '#16a34a', preview: 'bg-green-600' },
  { name: 'Morado Gramática', color: '#9333ea', preview: 'bg-purple-600' },
  { name: 'Naranja Alerta', color: '#ea580c', preview: 'bg-orange-600' },
];

const HIGHLIGHT_COLORS = [
  { name: 'Amarillo Neón', color: '#fef08a', preview: 'bg-yellow-200' },
  { name: 'Cian Brillante', color: '#a5f3fc', preview: 'bg-cyan-200' },
  { name: 'Rosa Neón', color: '#fbcfe8', preview: 'bg-pink-200' },
  { name: 'Verde Lima', color: '#bbf7d0', preview: 'bg-emerald-200' },
  { name: 'Naranja Marcador', color: '#fed7aa', preview: 'bg-orange-200' },
];

const FONT_SIZE_PRESETS = [
  { label: 'S (16px)', size: 16 },
  { label: 'M (22px)', size: 22 },
  { label: 'L - Por Defecto / Celular (28px)', size: 28 },
  { label: 'XL (34px)', size: 34 },
  { label: '2XL (42px)', size: 42 },
  { label: '3XL (56px)', size: 56 },
  { label: '4XL (72px)', size: 72 },
];

export function RichTextEditor({
  value,
  onChange,
  fontSize = 28,
  onFontSizeChange,
  lineSpacing = 'normal',
  theme = 'light',
  fontFamily = 'sans',
}: RichTextEditorProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextStyle,
      Color,
      Underline,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: `teacher-notes-content leading-${lineSpacing} focus:outline-none flex-1 w-full min-h-full p-4 select-text`,
        style: `font-size: ${fontSize}px; color-scheme: ${theme === 'dark' ? 'dark' : 'light'};`,
      },
    },
  });

  // Keep editor content in sync when value changes externally (e.g. tab switch)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      const currentHTML = editor.getHTML();
      if (value !== currentHTML) {
        editor.commands.setContent(value || '', false);
      }
    }
  }, [value, editor]);

  // Update dynamic styles when fontSize, theme, or lineSpacing changes
  useEffect(() => {
    if (editor) {
      editor.setOptions({
        editorProps: {
          attributes: {
            class: `teacher-notes-content leading-${lineSpacing} focus:outline-none flex-1 w-full min-h-full p-4 select-text`,
            style: `font-size: ${fontSize}px; color-scheme: ${theme === 'dark' ? 'dark' : 'light'};`,
          },
        },
      });
    }
  }, [editor, fontSize, lineSpacing, theme]);

  if (!editor) {
    return null;
  }

  const handleDecreaseSize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onFontSizeChange) {
      onFontSizeChange(Math.max(10, fontSize - (fontSize > 32 ? 6 : fontSize > 20 ? 4 : 2)));
    }
  };

  const handleIncreaseSize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onFontSizeChange) {
      onFontSizeChange(Math.min(96, fontSize + (fontSize >= 32 ? 6 : fontSize >= 20 ? 4 : 2)));
    }
  };

  const insertTemplate = (type: 'formula' | 'vocab' | 'correction' | 'speaking' | 'agenda') => {
    setShowTemplates(false);
    let html = '';
    switch (type) {
      case 'formula':
        html = `<blockquote><strong>📐 Regla / Fórmula Gramatical:</strong><br/><code>[ Sujeto ]</code> + <code>[ Verbo / Auxiliar ]</code> + <code>[ Complemento ]</code><br/><em>Ejemplo:</em> <strong>I am studying</strong> English right now.</blockquote><p></p>`;
        break;
      case 'vocab':
        html = `<blockquote><strong>💡 Nuevo Vocabulario:</strong><br/>• <strong>Word / Phrasal Verb:</strong> [Significado en español] ➔ <em>"Example sentence in English."</em></blockquote><p></p>`;
        break;
      case 'correction':
        html = `<blockquote><strong>❌ Error Común ➔ ✅ Forma Correcta:</strong><br/>❌ <s>I have 20 years</s><br/>✅ <mark style="background-color: #bbf7d0">I am 20 years old</mark> (Usa verbo To Be para la edad)</blockquote><p></p>`;
        break;
      case 'speaking':
        html = `<blockquote><strong>🎙️ Pregunta de Speaking:</strong><br/>• <em>"What did you do last weekend?"</em><br/>💡 <strong>Conectores clave:</strong> First, After that, Then, Finally.</blockquote><p></p>`;
        break;
      case 'agenda':
        html = `<h2>📋 Plan de la Clase de Hoy:</h2><ul><li>1. Warm-up & Review</li><li>2. New Grammar Topic</li><li>3. Speaking Practice</li><li>4. Wrap-up & Homework</li></ul><p></p>`;
        break;
    }
    editor.chain().focus().insertContent(html).run();
  };


  const fontClass =
    fontFamily === 'mono'
      ? 'font-mono'
      : fontFamily === 'handwriting'
      ? 'font-serif'
      : 'font-sans';

  const themeClasses = {
    light: 'bg-white text-slate-900',
    dark: 'bg-slate-900 text-slate-100 notes-theme-dark',
    amber: 'bg-[#fef9c3]/50 text-amber-950 notes-theme-amber',
  }[theme];

  const toolbarThemeClass = {
    light: 'bg-slate-50 border-slate-200 text-slate-700',
    dark: 'bg-slate-800/90 border-slate-700 text-slate-200',
    amber: 'bg-amber-100/70 border-amber-200 text-amber-900',
  }[theme];

  const buttonActiveState = (active: boolean) =>
    active
      ? 'bg-indigo-600 text-white shadow-xs'
      : theme === 'dark'
      ? 'hover:bg-slate-700 text-slate-300'
      : 'hover:bg-slate-200/80 text-slate-700';

  return (
    <div className={`teacher-notes-editor-wrapper ${fontClass} ${themeClasses} relative flex-1`}>
      {/* Teacher Enhanced Toolbar */}
      <div
        className={`shrink-0 px-2 py-1.5 border-b flex flex-wrap items-center gap-1 select-none z-20 transition-colors ${toolbarThemeClass}`}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Undo / Redo */}
        <div className="flex items-center gap-0.5 mr-1">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className={`p-1.5 rounded-lg transition-colors disabled:opacity-30 disabled:pointer-events-none ${buttonActiveState(false)}`}
            title="Deshacer (Ctrl+Z)"
          >
            <Undo className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className={`p-1.5 rounded-lg transition-colors disabled:opacity-30 disabled:pointer-events-none ${buttonActiveState(false)}`}
            title="Rehacer (Ctrl+Y)"
          >
            <Redo className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-0.5" />

        {/* Prominent Font Size Controls (A- / [Size] / A+) */}
        <div className="relative flex items-center bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-900 rounded-lg p-0.5 shadow-xs">
          <button
            onClick={handleDecreaseSize}
            className="px-1.5 py-1 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded transition-colors flex items-center gap-0.5"
            title="Reducir tamaño de letra (A-)"
          >
            <Minus className="w-3 h-3" />
            <span className="text-[10px] font-bold">A</span>
          </button>

          <button
            onClick={() => {
              setShowSizeDropdown(!showSizeDropdown);
              setShowColorPicker(false);
              setShowHighlightPicker(false);
              setShowTemplates(false);
            }}
            className="px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs rounded flex items-center gap-1 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors"
            title="Seleccionar tamaño de letra"
          >
            <span>{fontSize}px</span>
            <ChevronDown className="w-2.5 h-2.5 opacity-60" />
          </button>

          <button
            onClick={handleIncreaseSize}
            className="px-1.5 py-1 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-700 rounded transition-colors flex items-center gap-0.5"
            title="Agrandar tamaño de letra (A+)"
          >
            <span className="text-xs font-bold">A</span>
            <Plus className="w-3 h-3" />
          </button>

          {showSizeDropdown && (
            <div className="absolute top-full left-0 mt-1 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-1 z-40 min-w-[190px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 px-2 py-0.5 flex items-center justify-between">
                <span>Tamaño de Letra</span>
                <span className="text-[9px] font-mono">{fontSize}px</span>
              </span>

              {/* Slider for smooth continuous resizing */}
              <div className="px-2 py-1 flex items-center gap-2">
                <input
                  type="range"
                  min="12"
                  max="80"
                  step="2"
                  value={fontSize}
                  onChange={(e) => onFontSizeChange && onFontSizeChange(parseInt(e.target.value, 10))}
                  className="w-full h-1.5 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-1 pt-1 border-t border-slate-100 dark:border-slate-700">
                {FONT_SIZE_PRESETS.map((preset) => (
                  <button
                    key={preset.size}
                    onClick={() => {
                      if (onFontSizeChange) onFontSizeChange(preset.size);
                      setShowSizeDropdown(false);
                    }}
                    className={`px-2 py-1 rounded text-xs text-left font-medium transition-colors ${
                      fontSize === preset.size
                        ? 'bg-indigo-600 text-white'
                        : 'hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-0.5" />

        {/* Headings */}
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${buttonActiveState(editor.isActive('heading', { level: 1 }))}`}
          title="Título Principal"
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${buttonActiveState(editor.isActive('heading', { level: 2 }))}`}
          title="Subtítulo"
        >
          <Heading2 className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-0.5" />

        {/* Formatting Marks */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(editor.isActive('bold'))}`}
          title="Negrita (Ctrl+B)"
        >
          <Bold className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(editor.isActive('italic'))}`}
          title="Cursiva (Ctrl+I)"
        >
          <Italic className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(editor.isActive('underline'))}`}
          title="Subrayado (Ctrl+U)"
        >
          <UnderlineIcon className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(editor.isActive('strike'))}`}
          title="Tachado"
        >
          <Strikethrough className="w-3.5 h-3.5" />
        </button>

        <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-0.5" />

        {/* Lists & Quotes */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(editor.isActive('bulletList'))}`}
          title="Lista con viñetas"
        >
          <List className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(editor.isActive('orderedList'))}`}
          title="Lista numerada"
        >
          <ListOrdered className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(editor.isActive('blockquote'))}`}
          title="Recuadro de Fórmula / Destacado"
        >
          <Quote className="w-3.5 h-3.5" />
        </button>

        <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-0.5" />

        {/* Text Color Picker */}
        <div className="relative">
          <button
            onClick={() => {
              setShowColorPicker(!showColorPicker);
              setShowHighlightPicker(false);
              setShowTemplates(false);
            }}
            className={`p-1.5 rounded-lg flex items-center gap-1 transition-colors ${showColorPicker ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300' : buttonActiveState(false)}`}
            title="Color de texto"
          >
            <Palette className="w-3.5 h-3.5" />
            <ChevronDown className="w-2.5 h-2.5 opacity-60" />
          </button>
          {showColorPicker && (
            <div className="absolute top-full left-0 mt-1 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col gap-1 z-30 min-w-[170px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-0.5">
                Color de Letra
              </span>
              {TEXT_COLORS.map((c) => (
                <button
                  key={c.color}
                  onClick={() => {
                    editor.chain().focus().setColor(c.color).run();
                    setShowColorPicker(false);
                  }}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-700 text-left transition-colors"
                >
                  <span className={`w-3.5 h-3.5 rounded-full ${c.preview} shrink-0 border border-black/10`} />
                  <span className="text-slate-700 dark:text-slate-200">{c.name}</span>
                </button>
              ))}
              <button
                onClick={() => {
                  editor.chain().focus().unsetColor().run();
                  setShowColorPicker(false);
                }}
                className="text-[11px] text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 p-1.5 rounded-lg text-center font-medium mt-1 transition-colors"
              >
                Restablecer color
              </button>
            </div>
          )}
        </div>

        {/* Highlighter Picker */}
        <div className="relative">
          <button
            onClick={() => {
              setShowHighlightPicker(!showHighlightPicker);
              setShowColorPicker(false);
              setShowTemplates(false);
            }}
            className={`p-1.5 rounded-lg flex items-center gap-1 transition-colors ${editor.isActive('highlight') || showHighlightPicker ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300' : buttonActiveState(false)}`}
            title="Resaltador fluorescente"
          >
            <Highlighter className="w-3.5 h-3.5" />
            <ChevronDown className="w-2.5 h-2.5 opacity-60" />
          </button>
          {showHighlightPicker && (
            <div className="absolute top-full left-0 mt-1 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col gap-1 z-30 min-w-[170px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-0.5">
                Resaltador
              </span>
              {HIGHLIGHT_COLORS.map((h) => (
                <button
                  key={h.color}
                  onClick={() => {
                    editor.chain().focus().toggleHighlight({ color: h.color }).run();
                    setShowHighlightPicker(false);
                  }}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-slate-100 dark:hover:bg-slate-700 text-left transition-colors"
                >
                  <span className={`w-3.5 h-3.5 rounded-sm ${h.preview} shrink-0 border border-black/10`} />
                  <span className="text-slate-700 dark:text-slate-200">{h.name}</span>
                </button>
              ))}
              <button
                onClick={() => {
                  editor.chain().focus().unsetHighlight().run();
                  setShowHighlightPicker(false);
                }}
                className="text-[11px] text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 p-1.5 rounded-lg text-center font-medium mt-1 transition-colors"
              >
                Quitar resaltador
              </button>
            </div>
          )}
        </div>

        {/* Clear Format */}
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          className={`p-1.5 rounded-lg transition-colors ${buttonActiveState(false)}`}
          title="Limpiar formato"
        >
          <Eraser className="w-3.5 h-3.5" />
        </button>

        <div className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-0.5" />

        {/* Teacher Fast Templates Menu */}
        <div className="relative ml-auto">
          <button
            onClick={() => {
              setShowTemplates(!showTemplates);
              setShowColorPicker(false);
              setShowHighlightPicker(false);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-all active:scale-95"
            title="Insertar plantilla rápida para la clase"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span className="hidden sm:inline">Plantillas</span>
            <ChevronDown className="w-2.5 h-2.5 opacity-80" />
          </button>
          {showTemplates && (
            <div className="absolute top-full right-0 mt-1 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col gap-1 z-30 min-w-[220px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 px-2 py-0.5">
                ⚡ Plantillas Pedagógicas
              </span>
              <button
                onClick={() => insertTemplate('formula')}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-left transition-colors"
              >
                <span>📐</span>
                <div>
                  <div className="font-semibold">Fórmula Gramatical</div>
                  <div className="text-[10px] text-slate-400">[Sujeto] + [Verbo] + [Obj]</div>
                </div>
              </button>
              <button
                onClick={() => insertTemplate('vocab')}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-left transition-colors"
              >
                <span>💡</span>
                <div>
                  <div className="font-semibold">Nuevo Vocabulario</div>
                  <div className="text-[10px] text-slate-400">Palabra ➔ Significado ➔ Frase</div>
                </div>
              </button>
              <button
                onClick={() => insertTemplate('correction')}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-left transition-colors"
              >
                <span>❌</span>
                <div>
                  <div className="font-semibold">Corrección de Error</div>
                  <div className="text-[10px] text-slate-400">Error ➔ Forma Correcta + Tip</div>
                </div>
              </button>
              <button
                onClick={() => insertTemplate('speaking')}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-left transition-colors"
              >
                <span>🎙️</span>
                <div>
                  <div className="font-semibold">Pregunta de Speaking</div>
                  <div className="text-[10px] text-slate-400">Pregunta oral + Conectores</div>
                </div>
              </button>
              <button
                onClick={() => insertTemplate('agenda')}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs hover:bg-indigo-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-left transition-colors"
              >
                <span>📋</span>
                <div>
                  <div className="font-semibold">Agenda de la Clase</div>
                  <div className="text-[10px] text-slate-400">Plan paso a paso</div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Editor Content Area */}
      <div
        className="flex-1 overflow-y-auto px-1 overscroll-contain relative min-h-0 teacher-notes-canvas"
        onClick={() => {
          if (!editor.isFocused) {
            editor.commands.focus();
          }
          setShowColorPicker(false);
          setShowHighlightPicker(false);
          setShowTemplates(false);
        }}
      >
        <EditorContent editor={editor} className="h-full min-h-full teacher-notes-canvas" />
      </div>
    </div>
  );
}

