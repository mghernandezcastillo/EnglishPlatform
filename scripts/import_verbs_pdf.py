from __future__ import annotations

import os
import re
import sys
import json
from collections import Counter
from pathlib import Path

import psycopg

SOURCE_DOC = "VERBS.pdf"
DEFAULT_PDF_PATH = r"C:\Users\mgher\Documents\VERBS.pdf"


def load_env(path: str = ".env.local") -> None:
    env_path = Path(path)
    if not env_path.exists():
        return
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def item(category: str, term: str, **kwargs):
    return {
        "source_doc": SOURCE_DOC,
        "category": category,
        "term": term,
        "base_verb": kwargs.get("base_verb"),
        "past": kwargs.get("past"),
        "past_participle": kwargs.get("past_participle"),
        "meaning_es": kwargs.get("meaning_es"),
        "definition_en": kwargs.get("definition_en"),
        "example_en": kwargs.get("example_en"),
        "notes": kwargs.get("notes"),
        "source_page": kwargs.get("source_page"),
        "raw_text": kwargs.get("raw_text"),
    }


COMMON_VERBS = [
    ("RIDE", "RODE", "RIDDEN", "MONTAR, ANDAR EN", 3),
    ("GET", "GOT", "GOTTEN", "OBTENER", 3),
    ("GIVE", "GAVE", "GIVEN", "DAR", 3),
    ("SEE", "SAW", "SEEN", "VER", 3),
    ("LOOK", "LOOKED", "LOOKED", "OBSERVAR", 3),
    ("TAKE", "TOOK", "TAKEN", "TOMAR", 3),
    ("THINK", "THOUGHT", "THOUGHT", "PENSAR", 3),
    ("WASH", "WASHED", "WASHED", "LAVAR", 3),
    ("HAVE", "HAD", "HAD", "TENER", 3),
    ("FIND", "FOUND", "FOUND", "ENCONTRAR", 3),
    ("LEARN", "LEARNED", "LEARNED", "APRENDER", 3),
    ("WRITE", "WROTE", "WRITTEN", "ESCRIBIR", 3),
    ("WALK", "WALKED", "WALKED", "CAMINAR", 3),
    ("CAN", "COULD", None, "PODER", 3),
    ("WANT", "WANTED", "WANTED", "QUERER, DESEAR", 3),
    ("NEED", "NEEDED", "NEEDED", "NECESITAR", 3),
    ("LIKE", "LIKED", "LIKED", "GUSTAR", 3),
    ("TALK", "TALKED", "TALKED", "CONVERSAR", 3),
    ("SPEAK", "SPOKE", "SPOKEN", "HABLAR", 3),
    ("REMEMBER", "REMEMBERED", "REMEMBERED", "RECORDAR", 3),
    ("UNDERSTAND", "UNDERSTOOD", "UNDERSTOOD", "ENTENDER", 3),
    ("SPEND", "SPENT", "SPENT", "GASTAR", 3),
    ("TRY", "TRIED", "TRIED", "INTENTAR", 3),
    ("SWIM", "SWAM", "SWUM", "NADAR", 3),
    ("START", "STARTED", "STARTED", "EMPEZAR", 3),
    ("SAY", "SAID", "SAID", "DECIR", 3),
    ("TELL", "TOLD", "TOLD", "NARRAR, CONTAR", 3),
    ("BUY", "BOUGHT", "BOUGHT", "COMPRAR", 4),
    ("BRING", "BROUGHT", "BROUGHT", "TRAER", 4),
    ("CHANGE", "CHANGED", "CHANGED", "CAMBIAR", 4),
    ("CUT", "CUT", "CUT", "CORTAR", 4),
    ("FALL", "FELL", "FALLEN", "CAER", 4),
    ("FIX", "FIXED", "FIXED", "REPARAR", 4),
    ("FORGET", "FORGOT", "FORGOTTEN", "OLVIDAR", 4),
    ("LOSE", "LOST", "LOST", "PERDER", 4),
    ("OPEN", "OPENED", "OPENED", "ABRIR", 4),
    ("CLOSE", "CLOSED", "CLOSED", "CERRAR", 4),
    ("PAY", "PAID", "PAID", "PAGAR", 4),
    ("PUT", "PUT", "PUT", "PONER", 4),
    ("RUN", "RAN", "RUN", "CORRER", 4),
    ("SEND", "SENT", "SENT", "ENVIAR", 4),
    ("FEEL", "FELT", "FELT", "SENTIR", 4),
    ("TEACH", "TAUGHT", "TAUGHT", "ENSEÑAR", 4),
    ("WAIT", "WAITED", "WAITED", "ESPERAR", 4),
    ("FLY", "FLEW", "FLOWN", "VOLAR", 4),
    ("LEAVE", "LEFT", "LEFT", "DEJAR, SALIR", 4),
    ("KNOW", "KNEW", "KNOWN", "SABER", 4),
    ("BELIEVE", "BELIEVED", "BELIEVED", "CREER", 4),
    ("BECOME", "BECAME", "BECOME", "LLEGAR A SER", 4),
    ("ASK", "ASKED", "ASKED", "PEDIR, PREGUNTAR", 4),
    ("HEAR", "HEARD", "HEARD", "ESCUCHAR", 4),
    ("USE", "USED", "USED", "USAR", 4),
    ("SING", "SANG", "SUNG", "CANTAR", 4),
    ("PICK UP", "PICKED UP", "PICKED UP", "RECOGER", 4),
]

IRREGULAR_VERBS = [
    ("ARISE", "AROSE", "ARISEN", "ELEVARSE, SURGIR, ORIGINARSE.", 5),
    ("AWAKE", "AWOKE", "AWOKEN", "DESPERTAR, MOVER, EXCITAR.", 5),
    ("BEAR", "BORE", "BORN", "SOPORTAR, SOSTENER, TOLERAR.", 5),
    ("BEAT", "BEAT", "BEATEN", "BATIR, REVOLVER, GOLPEAR.", 5),
    ("BECOME", "BECAME", "BECOME", "HACERSE, CONVERTIRSE EN.", 5),
    ("BEGIN", "BEGAN", "BEGUN", "EMPEZAR, INICIAR.", 5),
    ("BEND", "BENT", "BENT", "DOBLAR, INCLINAR.", 5),
    ("BET", "BET", "BET", "APOSTAR.", 5),
    ("BIND", "BOUND", "BOUND", "ATAR, UNIR, ENLAZAR.", 5),
    ("BITE", "BIT", "BITTEN", "MORDER.", 5),
    ("BLOW", "BLEW", "BLOWN", "SOPLAR.", 5),
    ("BREAK", "BROKE", "BROKEN", "QUEBRAR, PARTIR, ROMPER.", 5),
    ("BRING", "BROUGHT", "BROUGHT", "TRAER, LLEVAR, CONDUCIR.", 5),
    ("BUILD", "BUILT", "BUILT", "CONSTRUIR, EDIFICAR.", 5),
    ("BURN", "BURNT", "BURNT", "QUEMAR, INCENDIAR", 5),
    ("BURST", "BURST", "BURST", "ROMPER, REVENTAR.", 5),
    ("BUY", "BOUGHT", "BOUGHT", "COMPRAR.", 5),
    ("CATCH", "CAUGHT", "CAUGHT", "COGER, ATRAPAR.", 5),
    ("CHOOSE", "CHOSE", "CHOSEN", "ESCOGER, ELEGIR.", 5),
    ("CLING", "CLUNG", "CLUNG", "ASIRSE, ADHERIRSE, PEGARSE.", 5),
    ("COME", "CAME", "COME", "VENIR.", 6),
    ("COST", "COST", "COST", "COSTAR.", 6),
    ("CREEP", "CREPT", "CREPT", "ARRASTRARSE, PEGARSE.", 6),
    ("CUT", "CUT", "CUT", "CORTAR, DIVIDIR.", 6),
    ("DEAL", "DEALT", "DEALT", "TRATAR, TENER QUE REFERIRSE", 6),
    ("DIG", "DUG", "DUG", "CAVAR, AHONDAR.", 6),
    ("DO", "DID", "DONE", "HACER, EJECUTAR.", 6),
    ("DRAW", "DREW", "DRAWN", "DIBUJAR, ATRAER.", 6),
    ("DRINK", "DRANK", "DRUNK", "BEBER", 6),
    ("DRIVE", "DROVE", "DRIVEN", "CONDUCIR, LLEVAR.", 6),
    ("FALL", "FELL", "FALLEN", "CAER, DISMINUIR", 6),
    ("FEED", "FED", "FED", "ALIMENTAR, NUTRIR.", 6),
    ("FEEL", "FELT", "FELT", "SENTIR", 6),
    ("FIGHT", "FOUGHT", "FOUGHT", "PELEAR, COMBATIR.", 6),
    ("FIND OUT", "FOUND OUT", "FOUND OUT", "ENCONTRAR, DESCUBRIR", 6),
    ("FLEE", "FLED", "FLED", "ESCAPAR, HUIR.", 6),
    ("FLY", "FLEW", "FLOWN", "VOLAR", 6),
    ("FORBID", "FORBADE", "FORBIDDEN", "PROHIBIR.", 6),
    ("FORESEE", "FORESAW", "FORESEEN", "PREVER, PREVENIR", 6),
    ("FORGET", "FORGOT", "FORGOTTEN", "OLVIDAR.", 6),
    ("FREEZE", "FROZE", "FROZEN", "CONGELAR.", 7),
    ("GET", "GOT", "GOTTEN", "LOGRAR, OBTENER, CONSEGUIR", 7),
    ("GIVE", "GAVE", "GIVEN", "DAR, CONCEDER", 7),
    ("GO", "WENT", "GONE", "IR, FUNCIONAR, RESULTAR", 7),
    ("GRIND", "GROUND", "GROUND", "MOLER, TRITURAR", 7),
    ("GROW", "GREW", "GROWN", "CRECER, CULTIVAR.", 7),
    ("HANG", "HUNG", "HUNG", "COLGAR, SUSPENDER.", 7),
    ("HAVE", "HAD", "HAD", "TENER, HABER.", 7),
    ("HEAR", "HEARD", "HEARD", "OIR, ESCUCHAR.", 7),
    ("HIDE", "HID", "HIDDEN", "OCULTAR, ENCUBRIR", 7),
    ("HIT", "HIT", "HIT", "PEGAR, GOLPEAR, ACERTAR", 7),
    ("HOLD", "HELD", "HELD", "SOSTENER, MANTENER.", 7),
    ("HURT", "HURT", "HURT", "PEGAR, GOLPEAR.", 7),
    ("KEEP", "KEPT", "KEPT", "MANTENER, GUARDAR.", 7),
    ("KNOW", "KNEW", "KNOWN", "CONOCER, SABER", 7),
    ("LAY", "LAID", "LAID", "PONER, COLOCAR.", 7),
    ("LEAD", "LED", "LED", "GUIAR, LLEVAR, CONDUCIR", 7),
    ("LEAN", "LEANT", "LEANT", "INCLINAR, APOYARSE.", 7),
    ("LEAVE", "LEFT", "LEFT", "DEJAR, IRSE.", 7),
    ("LEND", "LENT", "LENT", "PRESTAR.", 8),
    ("LET", "LET", "LET", "PERMITIR, CONCEDER.", 8),
    ("LIE", "LIED", "LIED", "MENTIR", 8),
    ("LIGHT", "LIT", "LIT", "ENCENDER, ALUMBRAR, ILUMINAR", 8),
    ("LOSE", "LOST", "LOST", "PERDER, MALGASTAR", 8),
    ("MAKE", "MADE", "MADE", "HACER, PRODUCIR.", 8),
    ("MEAN", "MEANT", "MEANT", "SIGNIFICAR, QUERER DECIR", 8),
    ("MEET", "MET", "MET", "ENCONTRARSE, CONOCER", 8),
    ("MELT", "MELTED", "MOLTEN", "DERRETIR, FUNDIR", 8),
    ("MISTAKE", "MISTOOK", "MISTAKEN", "EQUIVOCARSE, ERRAR.", 8),
    ("MISUNDERSTAND", "MISUNDERSTOOD", "MISUNDERSTOOD", "ENTENDER MAL", 8),
    ("OVERCOME", "OVERCAME", "OVERCOME", "VENCER, SUPERAR.", 8),
    ("PAY", "PAID", "PAID", "PAGAR, RECOMPENSAR", 8),
    ("PUT", "PUT", "PUT", "PONER, COLOCAR", 8),
    ("READ", "READ", "READ", "LEER, MARCAR", 8),
    ("REBUILD", "REBUILT", "REBUILT", "RECONSTRUIR", 8),
    ("RID", "RID", "RID", "LIBERARSE, ZAFARSE", 8),
    ("RIDE", "RODE", "RIDDEN", "RODAR, FUNCIONAR", 8),
    ("RING", "RANG", "RUNG", "TOCAR, SONAR", 8),
    ("RISE", "ROSE", "RISEN", "ASCENDER, LEVANTAR.", 8),
    ("RUN", "RAN", "RUN", "CORRER, FUNCIONAR", 9),
    ("SAW", "SAWED", "SAWN", "ASERRAR, CORTAR CON SIERRA", 9),
    ("SAY", "SAID", "SAID", "DECIR, AFIRMAR", 9),
    ("SEE", "SAW", "SEEN", "VER, OBSERVAR", 9),
    ("SEEK", "SOUGHT", "SOUGHT", "BUSCAR, SOLICITAR", 9),
    ("SELL", "SOLD", "SOLD", "VENDER", 9),
    ("SEND", "SENT", "SENT", "ENVIAR", 9),
    ("SET", "SET", "SET", "INSTALAR, COLOCAR, FIJAR", 9),
    ("SHAKE", "SHOOK", "SHAKEN", "SACUDIR, LANZAR", 9),
    ("SHED", "SHED", "SHED", "DERRAMAR, DEJAR CAER", 9),
    ("SHINE", "SHONE", "SHONE", "BRILLAR, SOBRESALIR", 9),
    ("SHOOT", "SHOT", "SHOT", "DISPARAR, LANZAR", 9),
    ("SHOW", "SHOWED", "SHOWED", "MOSTRAR, PROBAR, DEMOSTRAR", 9),
    ("SHRINK", "SHRANK", "SHRUNK", "ENCOGERSE, DISMINUIR", 9),
    ("SHUT", "SHUT", "SHUT", "CERRAR, IMPEDIR", 9),
    ("SING", "SANG", "SUNG", "CANTAR", 9),
    ("SINK", "SANK", "SUNK", "HUNDIR, SUMERGIR", 9),
    ("SIT", "SAT", "SAT", "SENTARSE, REUNIRSE", 9),
    ("SLEEP", "SLEPT", "SLEPT", "DORMIR", 9),
    ("SLIDE", "SLID", "SLID", "RESBALAR, DESLIZAR.", 9),
]

PHRASAL_VERBS = [
    ("Break in on", "Interrupt (a conversation).", "I was talking to Mom on the phone when the operator broke in on our call.", 12),
    ("Catch up with", "Keep abreast.", "After our month-long trip, it was time to catch up with the neighbors and the news around town", 12),
    ("Check up on", "Examine, investigate.", "The boys promised to check up on the condition of the summer house from time to time.", 12),
    ("Come up with", "To contribute (suggestion, money).", "After years of giving nothing, the old parishioner was able to come up with a thousand-dollar donation.", 12),
    ("Cut down on", "Curtail (expenses).", "We tried to cut down on the money we were spending on entertainment.", 12),
    ("Drop out of", "Leave school.", "I hope none of my students drop out of school this semester.", 12),
    ("Get along with", "Have a good relationship with.", "I found it very hard to get along with my brother when we were young.", 12),
    ("Get away with", "Escape, blame.", "Janik cheated on the exam and then tried to get away with it.", 12),
    ("Get rid of", "Eliminate.", "The citizens tried to get rid of their corrupt mayor in the recent election.", 13),
    ("Get through with", "Finish.", "When will you ever get through with that program?", 13),
    ("Keep up with", "Maintain pace with.", "It's hard to keep up with the Joneses when you lose your job!", 13),
    ("Look forward to", "Anticipate with pleasure.", "I always look forward to the beginning of a new semester.", 13),
    ("Look down on", "Despise.", "It's typical of a jingoistic country that the citizens look down on their geographical neighbors.", 13),
    ("Look in on", "Visit (somebody).", "We were going to look in on my brother-in-law, but he wasn't home.", 13),
    ("Look out for", "Be careful, anticipate.", "Good instructors will look out for early signs of failure in their students.", 13),
    ("Look up to", "Respect.", "First-graders really look up to their teachers.", 13),
    ("Make sure of", "Verify.", "Make sure of the student's identity before you let him into the classroom.", 13),
    ("Put up with", "Tolerate.", "The teacher had to put up with a great deal of nonsense from the new students.", 14),
    ("Run out of", "Exhaust, supply.", "The runners ran out of energy before the end of the race.", 14),
    ("Take care of", "Be responsible for.", "My oldest sister took care of us, after Mom died.", 14),
    ("Talk back to", "Answer impolitely.", "The star player talked back to the coach and was thrown off the team.", 14),
    ("Think back on", "Recall.", "I often think back on my childhood with great pleasure.", 14),
    ("Walk out on", "Abandon.", "Her husband walked out on her and their three children.", 14),
    ("Pass out", "Lose consciousness, faint.", "He had drunk too much; he passed out on the sidewalk outside the bar.", 14),
    ("Show off", "Demonstrate something proudly.", "Whenever he sat down at the piano, we knew he was going to show off.", 14),
    ("Show up", "Arrive.", "Day after day, Efrain showed up for class twenty minutes late.", 14),
    ("Wake up", "Awake from sleep.", "I woke up when the rooster crowed.", 14),
    ("Break down", "Stop functioning.", "That old Jeep had a tendency to break down just when I needed it the most.", 15),
    ("Catch on", "Become popular.", "Popular songs seem to catch on in California first and then spread eastward.", 15),
    ("Come back", "Return to a place.", "Father promised that we would never come back to this horrible place.", 15),
    ("Come in", "Enter.", "They tried to come in through the back door, but it was locked.", 15),
    ("Come to", "Regain consciousness.", "He was hit on the head very hard, but after several minutes, he started to come to again.", 15),
    ("Come over", "To visit.", "The children promised to come over, but they never do.", 15),
    ("Drop by", "Visit without appointment.", "We used to just drop by, but they were never home, so we stopped doing that.", 15),
    ("Eat out", "Eat in a restaurant.", "When we visited Paris, we loved eating out in the sidewalk cafes.", 15),
    ("Get by", "Survive.", "Uncle Heine didn't have much money, but he always seemed to get by without borrowing money from relatives.", 16),
    ("Get up", "Arise.", "Grandmother tried to get up, but the couch was too low, and she couldn't make it on her own.", 16),
    ("Go back", "Return to a place.", "It's hard to imagine that we will ever go back to Lithuania.", 16),
    ("Go on", "Continue.", "He would finish one Dickens novel and then just go on to the next.", 16),
    ("Go on (2)", "Happen.", "The cops heard all the noise and stopped to see what was going on.", 16),
    ("Grow up", "Get older.", "Charles grew up to be a lot like his father.", 16),
    ("Keep away", "Remain at a distance.", "The judge warned the stalker to keep away from his victim's home.", 16),
    ("Keep on (with gerund)", "Continue with the same.", "He tried to keep on singing long after his voice was ruined.", 16),
]


def read_extracted_text(path: str = "tmp_verbs_fitz.txt") -> str:
    text_path = Path(path)
    if text_path.exists():
        return text_path.read_text(encoding="utf-8", errors="ignore")

    pdf_path = Path(os.environ.get("VERBS_PDF_PATH", DEFAULT_PDF_PATH))
    if not pdf_path.exists():
        return ""

    import fitz

    parts = []
    with fitz.open(pdf_path) as document:
        for page_index, page in enumerate(document, start=1):
            parts.append(f"--- PAGE {page_index} ---")
            parts.append(page.get_text("text"))
    return "\n".join(parts)


def parse_idioms(path: str = "tmp_verbs_fitz.txt"):
    extracted_text = read_extracted_text(path)
    if not extracted_text:
        return []

    lines = [line.strip() for line in extracted_text.splitlines()]
    start = next((i for i, line in enumerate(lines) if line == "IDIOMS"), None)
    if start is None:
        return []

    entries = []
    current = None
    definition_parts = []
    example_parts = []
    in_example = False
    page = None

    header_re = re.compile(r"^[A-Z0-9][A-Z0-9\s()'’/.,!-]+(?: - |$)")
    skip = {
        "",
        "IDIOMS",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "K",
        "L",
        "M",
        "O",
        "P",
        "R",
        "S",
        "T",
        "W",
        "www.english4callcenters.com/student",
    }

    def finish():
        nonlocal current, definition_parts, example_parts, in_example
        if not current:
            return
        definition = " ".join(definition_parts).strip()
        example = " ".join(example_parts).strip()
        entries.append(
            item(
                "idiom",
                current["term"].title(),
                meaning_es=current.get("meaning_es"),
                definition_en=definition or None,
                example_en=example.replace("Example:", "").replace("Examples:", "").strip() or None,
                source_page=current.get("source_page"),
                raw_text=current.get("raw_text"),
            )
        )
        current = None
        definition_parts = []
        example_parts = []
        in_example = False

    for line in lines[start:]:
        page_match = re.match(r"--- PAGE (\d+) ---", line)
        if page_match:
            page = int(page_match.group(1))
            continue
        if line in skip or line.startswith("Recuerda visitar") or line.startswith("lo mejor en videos"):
            continue
        if len(line) == 1 and line.isalpha():
            continue

        is_header = bool(header_re.match(line)) and not line.startswith(("Example:", "Examples:"))
        if is_header:
            if " - " not in line and current:
                # Continuation of a long title line.
                current["term"] = f"{current['term']} {line}".strip()
                current["raw_text"] = f"{current['raw_text']} {line}".strip()
                continue
            finish()
            if " - " in line:
                term, meaning = line.split(" - ", 1)
            else:
                term, meaning = line, None
            current = {
                "term": re.sub(r"\s+", " ", term).strip(),
                "meaning_es": meaning.strip() if meaning else None,
                "source_page": page,
                "raw_text": line,
            }
            continue

        if not current:
            continue
        if line.startswith(("Example:", "Examples:")):
            in_example = True
            example_parts.append(line)
        elif in_example:
            example_parts.append(line)
        else:
            definition_parts.append(line)

    finish()
    return entries


def build_rows():
    rows = []
    for verb, past, participle, meaning, page in COMMON_VERBS:
        rows.append(
            item(
                "common_verb",
                verb.title(),
                base_verb=verb,
                past=past,
                past_participle=participle,
                meaning_es=meaning,
                source_page=page,
            )
        )
    for verb, past, participle, meaning, page in IRREGULAR_VERBS:
        rows.append(
            item(
                "irregular_verb",
                verb.title(),
                base_verb=verb,
                past=past,
                past_participle=participle,
                meaning_es=meaning,
                source_page=page,
            )
        )
    for term, definition, example, page in PHRASAL_VERBS:
        rows.append(
            item(
                "phrasal_verb",
                term.title(),
                definition_en=definition,
                example_en=example,
                source_page=page,
            )
        )
    rows.extend(parse_idioms())
    return rows


def main():
    load_env()
    rows = build_rows()
    counts = Counter(row["category"] for row in rows)

    if "--dry-run" in sys.argv:
        print("Prepared:", dict(sorted(counts.items())))
        print("Total:", len(rows))
        return

    if "--export-json" in sys.argv:
        output_index = sys.argv.index("--export-json") + 1
        output_path = Path(sys.argv[output_index]) if output_index < len(sys.argv) else Path("verbs_pdf_import.json")
        output_path.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
        print("Prepared:", dict(sorted(counts.items())))
        print("Exported:", str(output_path), len(rows))
        return

    if "--export-sql" in sys.argv:
        output_index = sys.argv.index("--export-sql") + 1
        output_path = Path(sys.argv[output_index]) if output_index < len(sys.argv) else Path("supabase_english_lexicon_seed.sql")

        def sql_value(value):
            if value is None:
                return "null"
            if isinstance(value, int):
                return str(value)
            return "'" + str(value).replace("'", "''") + "'"

        columns = [
            "source_doc",
            "category",
            "term",
            "base_verb",
            "past",
            "past_participle",
            "meaning_es",
            "definition_en",
            "example_en",
            "notes",
            "source_page",
            "raw_text",
        ]
        values = []
        for row in rows:
            values.append("(" + ", ".join(sql_value(row[column]) for column in columns) + ")")

        schema_sql = Path("supabase_english_lexicon.sql").read_text(encoding="utf-8")
        columns_sql = ", ".join(columns)
        values_sql = ",\n".join(values)
        seed_sql = f"""{schema_sql}

delete from public.english_lexicon_items
where source_doc = 'VERBS.pdf';

insert into public.english_lexicon_items (
  {columns_sql}
)
values
{values_sql}
on conflict (source_doc, category, term) do update set
  base_verb = excluded.base_verb,
  past = excluded.past,
  past_participle = excluded.past_participle,
  meaning_es = excluded.meaning_es,
  definition_en = excluded.definition_en,
  example_en = excluded.example_en,
  notes = excluded.notes,
  source_page = excluded.source_page,
  raw_text = excluded.raw_text,
  updated_at = now();
"""
        output_path.write_text(seed_sql, encoding="utf-8")
        print("Prepared:", dict(sorted(counts.items())))
        print("Exported SQL:", str(output_path), len(rows))
        return

    dsn = (
        os.environ.get("SUPABASE_DIRECT_CONNECTION_STRING")
        or os.environ.get("SUPABASE_SESSION_POOLER")
    )
    if not dsn or "[YOUR-PASSWORD]" in dsn:
        raise SystemExit("Missing usable SUPABASE_DIRECT_CONNECTION_STRING or SUPABASE_SESSION_POOLER.")

    create_sql = """
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
        select 1 from pg_policies
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
    """

    insert_sql = """
    insert into public.english_lexicon_items (
      source_doc, category, term, base_verb, past, past_participle,
      meaning_es, definition_en, example_en, notes, source_page, raw_text, updated_at
    ) values (
      %(source_doc)s, %(category)s, %(term)s, %(base_verb)s, %(past)s, %(past_participle)s,
      %(meaning_es)s, %(definition_en)s, %(example_en)s, %(notes)s, %(source_page)s, %(raw_text)s, now()
    )
    on conflict (source_doc, category, term) do update set
      base_verb = excluded.base_verb,
      past = excluded.past,
      past_participle = excluded.past_participle,
      meaning_es = excluded.meaning_es,
      definition_en = excluded.definition_en,
      example_en = excluded.example_en,
      notes = excluded.notes,
      source_page = excluded.source_page,
      raw_text = excluded.raw_text,
      updated_at = now();
    """

    with psycopg.connect(dsn, autocommit=True) as conn:
        with conn.cursor() as cur:
            cur.execute(create_sql)
            cur.execute("delete from public.english_lexicon_items where source_doc = %s", (SOURCE_DOC,))
            cur.executemany(insert_sql, rows)
            cur.execute(
                """
                select category, count(*)
                from public.english_lexicon_items
                where source_doc = %s
                group by category
                order by category
                """,
                (SOURCE_DOC,),
            )
            summary = cur.fetchall()

    print("Prepared:", dict(sorted(counts.items())))
    print("Imported:", dict(summary))


if __name__ == "__main__":
    main()
