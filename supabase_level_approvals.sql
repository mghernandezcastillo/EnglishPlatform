-- El tutor registra aquí los niveles aprobados después del examen oral.
ALTER TABLE students
ADD COLUMN IF NOT EXISTS approved_levels TEXT[] NOT NULL DEFAULT '{}'::TEXT[];
