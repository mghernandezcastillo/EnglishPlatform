ALTER TABLE public.students
  ADD COLUMN IF NOT EXISTS interests text[] DEFAULT '{}'::text[],
  ADD COLUMN IF NOT EXISTS watched_interest_videos text[] DEFAULT '{}'::text[];

CREATE TABLE IF NOT EXISTS public.interest_videos (
  id text PRIMARY KEY,
  interest_id text NOT NULL,
  title text NOT NULL,
  channel text NOT NULL,
  video_id text NOT NULL,
  duration_label text NOT NULL,
  grammar_block text NOT NULL,
  summary_es text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.interest_videos ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'interest_videos' AND policyname = 'interest_videos_select_all'
  ) THEN
    CREATE POLICY interest_videos_select_all ON public.interest_videos FOR SELECT TO anon, authenticated USING (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'interest_videos' AND policyname = 'interest_videos_write_auth'
  ) THEN
    CREATE POLICY interest_videos_write_auth ON public.interest_videos FOR ALL TO authenticated USING (true) WITH CHECK (true);
  END IF;
END $$;
