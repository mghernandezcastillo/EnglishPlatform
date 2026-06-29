CREATE TABLE IF NOT EXISTS curr_levels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    level_id TEXT NOT NULL,
    title TEXT NOT NULL,
    duration TEXT,
    objective TEXT,
    mcfr_equivalent TEXT,
    target_audience TEXT, -- 'adult', 'child', 'teen'
    oral_evaluation JSONB DEFAULT '[]'::JSONB,
    virtual_evaluation JSONB DEFAULT '[]'::JSONB,
    sort_order INTEGER DEFAULT 0,
    UNIQUE(level_id, target_audience)
);

CREATE TABLE IF NOT EXISTS curr_classes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    class_id TEXT NOT NULL,
    level_id UUID REFERENCES curr_levels(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    duration TEXT,
    objective TEXT,
    sort_order INTEGER DEFAULT 0,
    UNIQUE(class_id, level_id)
);

CREATE TABLE IF NOT EXISTS curr_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_id TEXT NOT NULL, -- e.g., 's1', scoped to class
    class_id UUID REFERENCES curr_classes(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    duration TEXT,
    objective TEXT,
    action TEXT,
    sort_order INTEGER DEFAULT 0,
    UNIQUE(section_id, class_id)
);

CREATE TABLE IF NOT EXISTS curr_slides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slide_id TEXT NOT NULL, -- scoped to section
    section_id UUID REFERENCES curr_sections(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    content JSONB DEFAULT '[]'::JSONB,
    image_url TEXT,
    bg_color TEXT,
    options JSONB,
    correct_option_index INTEGER,
    type TEXT,
    video_url TEXT,
    wheel_items JSONB,
    matching_pairs JSONB,
    mystery_puzzle_data JSONB,
    sort_order INTEGER DEFAULT 0,
    UNIQUE(slide_id, section_id)
);

-- Habilitar RLS
ALTER TABLE curr_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE curr_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE curr_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE curr_slides ENABLE ROW LEVEL SECURITY;

-- Otorgar permisos al rol anónimo (público) para leer
GRANT SELECT ON curr_levels TO anon;
GRANT SELECT ON curr_classes TO anon;
GRANT SELECT ON curr_sections TO anon;
GRANT SELECT ON curr_slides TO anon;

-- Permisos temporales de inserción/actualización/borrado para la migración
GRANT ALL ON curr_levels TO anon;
GRANT ALL ON curr_classes TO anon;
GRANT ALL ON curr_sections TO anon;
GRANT ALL ON curr_slides TO anon;

-- Crear políticas que permitan acceso público
DROP POLICY IF EXISTS "Public access" ON curr_levels;
CREATE POLICY "Public access" ON curr_levels FOR ALL USING (true);

DROP POLICY IF EXISTS "Public access" ON curr_classes;
CREATE POLICY "Public access" ON curr_classes FOR ALL USING (true);

DROP POLICY IF EXISTS "Public access" ON curr_sections;
CREATE POLICY "Public access" ON curr_sections FOR ALL USING (true);

DROP POLICY IF EXISTS "Public access" ON curr_slides;
CREATE POLICY "Public access" ON curr_slides FOR ALL USING (true);
