-- Deduplicar palabras en story_decoder_vocabulary conservando el primer registro
delete from public.story_decoder_vocabulary
where ctid not in (
  select min(ctid)
  from public.story_decoder_vocabulary
  group by student_id, lower(trim(english))
);

-- Indice unico para evitar palabras repetidas en el decodificador de historias por alumno
create unique index if not exists story_decoder_vocabulary_student_english_uidx
on public.story_decoder_vocabulary (student_id, lower(trim(english)));

-- Indice unico para evitar palabras repetidas en VocabVault por alumno
create unique index if not exists vocab_vault_student_term_uidx
on public.vocab_vault (student_id, lower(trim(term)))
where student_id is not null;
