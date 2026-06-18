import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Bold, Italic, Underline as UnderlineIcon, Heading1, Heading2, PaintBucket, Eraser } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  fontSize?: number;
}

export function RichTextEditor({ value, onChange, fontSize = 16 }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none flex-1 w-full max-w-full p-4 text-gray-900 caret-black',
        style: `font-size: ${fontSize}px;`,
      },
    },
  });

  React.useEffect(() => {
    if (editor) {
      editor.setOptions({
        editorProps: {
          attributes: {
            class: 'prose focus:outline-none flex-1 w-full max-w-full p-4 text-gray-900 caret-black',
            style: `font-size: ${fontSize}px;`,
          },
        },
      });
    }
  }, [editor, fontSize]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 p-2 flex flex-wrap gap-1 items-center z-10 shrink-0">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-1.5 rounded text-gray-700 hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-indigo-100 text-indigo-700' : ''}`}
          title="Título Grande"
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 rounded text-gray-700 hover:bg-gray-200 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-indigo-100 text-indigo-700' : ''}`}
          title="Título Mediano"
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded text-gray-700 hover:bg-gray-200 transition-colors ${editor.isActive('bold') ? 'bg-indigo-100 text-indigo-700' : ''}`}
          title="Negrita"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded text-gray-700 hover:bg-gray-200 transition-colors ${editor.isActive('italic') ? 'bg-indigo-100 text-indigo-700' : ''}`}
          title="Cursiva"
        >
          <Italic className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          onClick={() => editor.chain().focus().setColor('#ef4444').run()}
          className={`p-1.5 rounded text-red-500 hover:bg-gray-200 transition-colors ${editor.isActive('textStyle', { color: '#ef4444' }) ? 'bg-red-100' : ''}`}
          title="Color Rojo"
        >
          <PaintBucket className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setColor('#3b82f6').run()}
          className={`p-1.5 rounded text-blue-500 hover:bg-gray-200 transition-colors ${editor.isActive('textStyle', { color: '#3b82f6' }) ? 'bg-blue-100' : ''}`}
          title="Color Azul"
        >
          <PaintBucket className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="p-1.5 rounded text-gray-700 hover:bg-gray-200 transition-colors"
          title="Limpiar Formato"
        >
          <Eraser className="w-4 h-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-2" onClick={() => editor.commands.focus()}>
        <EditorContent editor={editor} className="h-full min-h-[200px]" />
      </div>
    </div>
  );
}
