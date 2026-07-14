-- Reemplaza las evaluaciones previas de Basic 1 adultos con preguntas alineadas
-- a cada clase. Ejecutar en Supabase SQL Editor.

WITH evals(class_id, questions) AS (
  VALUES
  ('c-adults-basic-1-1', $json$
[
  {"id":"q1","text":"Elige la oración correcta en Present Simple.","options":["I works every day.","I work every day.","I working every day."],"correct_index":1},
  {"id":"q2","text":"Completa: They ___ English at home.","options":["speaks","speak","speaking"],"correct_index":1},
  {"id":"q3","text":"Completa: We ___ soccer on weekends.","options":["play","plays","playing"],"correct_index":0},
  {"id":"q4","text":"Present Simple se usa principalmente para:","options":["rutinas y hábitos","acciones futuras","acciones que pasan ahora mismo"],"correct_index":0},
  {"id":"q5","text":"Completa: You ___ in Colombia.","options":["lives","live","living"],"correct_index":1}
]
$json$::jsonb),
  ('c-adults-basic-1-2', $json$
[
  {"id":"q1","text":"Completa: She ___ English in the afternoon.","options":["study","studies","studys"],"correct_index":1},
  {"id":"q2","text":"Completa: My father ___ TV at night.","options":["watch","watchs","watches"],"correct_index":2},
  {"id":"q3","text":"Completa: He ___ a new computer.","options":["have","has","haves"],"correct_index":1},
  {"id":"q4","text":"Con He/She/It en Present Simple normalmente agregamos:","options":["-ing","-s / -es","will"],"correct_index":1},
  {"id":"q5","text":"Elige la oración correcta.","options":["She plays tennis.","She play tennis.","She playing tennis."],"correct_index":0}
]
$json$::jsonb),
  ('c-adults-basic-1-3', $json$
[
  {"id":"q1","text":"Pregunta con Do: ___ you like pizza?","options":["Do","Does","Will"],"correct_index":0},
  {"id":"q2","text":"Negativa: She ___ work on Sundays.","options":["don't","doesn't","isn't"],"correct_index":1},
  {"id":"q3","text":"Pregunta con Does: ___ he play tennis?","options":["Do","Does","Is"],"correct_index":1},
  {"id":"q4","text":"Respuesta corta: Do they study English? Yes, ___.","options":["they do","they does","they are"],"correct_index":0},
  {"id":"q5","text":"Elige la oración correcta.","options":["She doesn't plays tennis.","She doesn't play tennis.","She don't play tennis."],"correct_index":1}
]
$json$::jsonb),
  ('c-adults-basic-1-4', $json$
[
  {"id":"q1","text":"A doctor usually works in a ___.","options":["hospital","restaurant","school bus"],"correct_index":0},
  {"id":"q2","text":"Completa: A chef ___ food.","options":["cook","cooks","cooking"],"correct_index":1},
  {"id":"q3","text":"Pregunta sobre profesión: ___ do you do?","options":["Where","What","When"],"correct_index":1},
  {"id":"q4","text":"A teacher works in a ___.","options":["school","bank","airport"],"correct_index":0},
  {"id":"q5","text":"Elige la oración correcta.","options":["An engineer designs things.","An engineer design things.","An engineer designing things."],"correct_index":0}
]
$json$::jsonb),
  ('c-adults-basic-1-5', $json$
[
  {"id":"q1","text":"Completa: I wake up ___ 7:00 AM.","options":["in","on","at"],"correct_index":2},
  {"id":"q2","text":"¿Qué frase habla de una rutina diaria?","options":["I have breakfast every morning.","I will travel tomorrow.","I am running now."],"correct_index":0},
  {"id":"q3","text":"Completa: She ___ a shower in the morning.","options":["take","takes","taking"],"correct_index":1},
  {"id":"q4","text":"8:30 se puede decir:","options":["half past eight","quarter to eight","eight o'clock"],"correct_index":0},
  {"id":"q5","text":"Elige la oración correcta.","options":["I goes to bed at ten.","I go to bed at ten.","I going to bed at ten."],"correct_index":1}
]
$json$::jsonb),
  ('c-adults-basic-1-6', $json$
[
  {"id":"q1","text":"¿Qué adverbio significa 'siempre'?","options":["Never","Sometimes","Always"],"correct_index":2},
  {"id":"q2","text":"Completa: I ___ drink coffee in the morning. (100%)","options":["always","never","rarely"],"correct_index":0},
  {"id":"q3","text":"Completa: He is ___ late. (0%)","options":["always","never","usually"],"correct_index":1},
  {"id":"q4","text":"Elige la posición correcta del adverbio.","options":["She always studies.","She studies always.","Always she studies."],"correct_index":0},
  {"id":"q5","text":"Sometimes significa:","options":["nunca","a veces","siempre"],"correct_index":1}
]
$json$::jsonb),
  ('c-adults-basic-1-7', $json$
[
  {"id":"q1","text":"En un restaurante, para pedir algo decimos:","options":["I would like a salad, please.","I will be a salad.","I am salad."],"correct_index":0},
  {"id":"q2","text":"¿Cuál es una bebida?","options":["Chicken","Water","Rice"],"correct_index":1},
  {"id":"q3","text":"Para pedir la cuenta decimos:","options":["Can I have the bill?","Where is my job?","Do you play tennis?"],"correct_index":0},
  {"id":"q4","text":"Completa: I ___ coffee.","options":["would like","am like","does like"],"correct_index":0},
  {"id":"q5","text":"¿Cuál es comida?","options":["Juice","Soup","Table"],"correct_index":1}
]
$json$::jsonb),
  ('c-adults-basic-1-8', $json$
[
  {"id":"q1","text":"Elige el sustantivo contable.","options":["water","rice","apple"],"correct_index":2},
  {"id":"q2","text":"Completa afirmativa: We have ___ apples.","options":["some","any","much"],"correct_index":0},
  {"id":"q3","text":"Completa negativa: We don't have ___ milk.","options":["some","any","many"],"correct_index":1},
  {"id":"q4","text":"Para preguntar usamos normalmente: Do you have ___ questions?","options":["some","any","a"],"correct_index":1},
  {"id":"q5","text":"Elige el sustantivo incontable.","options":["banana","water","egg"],"correct_index":1}
]
$json$::jsonb),
  ('c-adults-basic-1-9', $json$
[
  {"id":"q1","text":"Después de like/love/hate, el verbo normalmente termina en:","options":["-ed","-s","-ing"],"correct_index":2},
  {"id":"q2","text":"Completa: I like ___ tennis.","options":["play","playing","plays"],"correct_index":1},
  {"id":"q3","text":"Completa: She loves ___ coffee.","options":["drink","drinking","drinks"],"correct_index":1},
  {"id":"q4","text":"Completa: My brother ___ cooking.","options":["hate","hates","hating"],"correct_index":1},
  {"id":"q5","text":"Elige la oración correcta.","options":["I love watching movies.","I love watch movies.","I loves watching movies."],"correct_index":0}
]
$json$::jsonb),
  ('c-adults-basic-1-10', $json$
[
  {"id":"q1","text":"Repaso: She ___ a shower at 7 AM.","options":["take","takes","taking"],"correct_index":1},
  {"id":"q2","text":"Repaso: ___ you have any brothers?","options":["Does","Are","Do"],"correct_index":2},
  {"id":"q3","text":"Repaso: He hates ___ early.","options":["waking up","wake up","wakes up"],"correct_index":0},
  {"id":"q4","text":"Repaso: We don't have ___ water.","options":["some","any","a"],"correct_index":1},
  {"id":"q5","text":"Repaso: I ___ study English on Mondays.","options":["always","will always tomorrow","am always to"],"correct_index":0}
]
$json$::jsonb)
),
audiences(target_audience) AS (
  VALUES ('adult'), ('adulto')
)
INSERT INTO pre_class_evaluations (class_id, target_audience, questions)
SELECT evals.class_id, audiences.target_audience, evals.questions
FROM evals
CROSS JOIN audiences
ON CONFLICT (class_id, target_audience)
DO UPDATE SET questions = EXCLUDED.questions;

-- Verificación rápida: deben salir 20 filas si tienes adult y adulto.
SELECT class_id, target_audience, questions
FROM pre_class_evaluations
WHERE class_id LIKE 'c-adults-basic-1-%'
ORDER BY class_id, target_audience;
