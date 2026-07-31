-- English lexicon imported from VERBS.pdf.
-- Run this in Supabase SQL Editor before importing if the table does not exist.

create extension if not exists pgcrypto;

create table if not exists public.english_lexicon_items (
  id uuid primary key default gen_random_uuid(),
  source_doc text not null,
  category text not null,
  term text not null,
  base_verb text,
  past text,
  past_participle text,
  meaning_es text,
  definition_en text,
  example_en text,
  notes text,
  source_page integer,
  raw_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (source_doc, category, term)
);

alter table public.english_lexicon_items enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'english_lexicon_items'
      and policyname = 'Allow public read english lexicon'
  ) then
    create policy "Allow public read english lexicon"
    on public.english_lexicon_items
    for select
    using (true);
  end if;
end $$;
