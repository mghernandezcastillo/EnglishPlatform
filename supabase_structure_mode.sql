-- Modo Estructuras: progreso e intentos de evaluación.
-- Ejecutar en Supabase SQL Editor.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS structure_mode_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  local_key TEXT,
  completed_lessons TEXT[] DEFAULT '{}'::TEXT[] NOT NULL,
  last_lesson_id TEXT,
  last_slide_index INTEGER DEFAULT 0 NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT structure_mode_progress_owner CHECK (student_id IS NOT NULL OR local_key IS NOT NULL)
);

CREATE UNIQUE INDEX IF NOT EXISTS structure_mode_progress_student_id_idx
  ON structure_mode_progress(student_id)
  WHERE student_id IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS structure_mode_progress_local_key_idx
  ON structure_mode_progress(local_key)
  WHERE local_key IS NOT NULL;

CREATE TABLE IF NOT EXISTS structure_assessment_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID REFERENCES students(id) ON DELETE SET NULL,
  local_key TEXT,
  student_name TEXT,
  assessment_id TEXT NOT NULL,
  block_id TEXT,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  duration_seconds INTEGER NOT NULL,
  answers JSONB DEFAULT '{}'::JSONB NOT NULL,
  feedback JSONB DEFAULT '{}'::JSONB NOT NULL,
  share_token TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  CONSTRAINT structure_assessment_attempts_owner CHECK (student_id IS NOT NULL OR local_key IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS structure_assessment_attempts_student_id_idx
  ON structure_assessment_attempts(student_id, created_at DESC);

CREATE INDEX IF NOT EXISTS structure_assessment_attempts_local_key_idx
  ON structure_assessment_attempts(local_key, created_at DESC);

CREATE INDEX IF NOT EXISTS structure_assessment_attempts_share_token_idx
  ON structure_assessment_attempts(share_token);

ALTER TABLE structure_mode_progress DISABLE ROW LEVEL SECURITY;
ALTER TABLE structure_assessment_attempts DISABLE ROW LEVEL SECURITY;
