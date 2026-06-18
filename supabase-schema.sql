-- Habilitar extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Tabla de Grupos
CREATE TABLE IF NOT EXISTS groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabla de Estudiantes
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  avatar_id TEXT NOT NULL,
  level TEXT NOT NULL,
  completed_lessons TEXT[] DEFAULT '{}'::TEXT[],
  group_id UUID REFERENCES groups(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabla de Progreso General (opcional)
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email TEXT UNIQUE NOT NULL,
  completed_lessons TEXT[] DEFAULT '{}'::TEXT[],
  current_lesson_id TEXT,
  level TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- DESACTIVAR RLS (Row Level Security) para que la app pueda leer y escribir libremente:
ALTER TABLE groups DISABLE ROW LEVEL SECURITY;
ALTER TABLE students DISABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress DISABLE ROW LEVEL SECURITY;

-- (Alternativa) Si quieres mantener RLS activado pero permitir acceso público total, ejecuta esto en lugar de lo anterior:
/*
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir todo a todos en grupos" ON groups FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir todo a todos en estudiantes" ON students FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Permitir todo a todos en progreso" ON user_progress FOR ALL USING (true) WITH CHECK (true);
*/
