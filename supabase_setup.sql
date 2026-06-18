-- Instrucciones para crear la tabla de progreso en la base de datos
-- Debes ir a la consola de Supabase (SQL Editor) y ejecutar este bloque:

CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT UNIQUE NOT NULL,
  completed_lessons TEXT[] DEFAULT '{}',
  current_lesson_id TEXT,
  level TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Esto deshabilitará RLS para facilitar la interacción inicial y no tener problemas de permisos desde el frontend.
-- Más adelante, se puede habilitar RLS y usar la sesión real de usuario, pero para este paso inicial servirá.
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;

-- Insertar el registro principal de la estudiante si no existe para inicializar:
INSERT INTO user_progress (user_email, completed_lessons, current_lesson_id, level)
VALUES ('nancy@estudiante.com', '{}', NULL, 'Nivel Inicial')
ON CONFLICT (user_email) DO NOTHING;
