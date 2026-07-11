CREATE TABLE IF NOT EXISTS pre_class_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id TEXT NOT NULL,
    target_audience TEXT NOT NULL,
    questions JSONB DEFAULT '[]'::JSONB,
    UNIQUE(class_id, target_audience)
);

ALTER TABLE pre_class_evaluations ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON pre_class_evaluations TO anon;
GRANT ALL ON pre_class_evaluations TO anon;

DROP POLICY IF EXISTS "Public access" ON pre_class_evaluations;
CREATE POLICY "Public access" ON pre_class_evaluations FOR ALL USING (true);
