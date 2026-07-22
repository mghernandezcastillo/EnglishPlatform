# Plan Maestro - Modo Estructuras Verbales Inmersivo

## Estado General

Progreso total del proyecto: **18%**

Este plan define un nuevo modo de enseñanza separado del modo normal actual. No reemplaza los niveles existentes ni modifica la estructura oficial de las clases actuales. El nuevo modo estará organizado por estructuras verbales y patrones de comunicación, con clases inmersivas de aproximadamente 20 diapositivas cada una.

## Objetivo Del Nuevo Modo

Crear una ruta alternativa de aprendizaje enfocada en repetición, estructura visual, práctica inmediata y juegos. Cada clase empieza mostrando la fórmula gramatical por colores:

- Sujeto
- Verbo principal o forma base
- Auxiliar
- Verbo en -ing
- Participio
- Complemento
- Marcadores de tiempo

La clase debe explicar cómo se forma la estructura, por qué se usa así, para qué sirve en comunicación real y luego practicar con juegos variados de selección múltiple, retos en vivo y dinámicas similares a Speaking Boss Battle.

## Principios De Diseño

- No usar la misma estructura ni niveles del modo normal actual.
- Mantener este modo como una sección nueva: **Modo Estructuras**.
- Cada clase tendrá aproximadamente 20 diapositivas.
- El estilo visual seguirá la línea del examen de ingreso: fondos intensos, glassmorphism, gradientes vivos, tarjetas grandes, animaciones y sensación inmersiva.
- Usar color como sistema de memoria, no solo como decoración.
- Se prioriza repetición inteligente: muchas preguntas parecidas con variaciones pequeñas para fijar patrones.
- Cada clase termina con tarea para la siguiente clase.
- El tutor debe tener espacios de práctica en vivo.
- El alumno debe sentir que está jugando, no leyendo una explicación larga.

## Estructura Base De Cada Clase

Cada clase del nuevo modo tendrá esta secuencia aproximada:

1. Entrada inmersiva con el nombre de la estructura.
2. Fórmula por colores.
3. Explicación corta: para qué sirve.
4. Explicación corta: cómo se forma.
5. Forma afirmativa.
6. Forma negativa.
7. Forma interrogativa.
8. Mini comparación con otra estructura cercana.
9. Juego 1: elegir auxiliar correcto.
10. Juego 2: elegir verbo correcto.
11. Juego 3: ordenar la oración.
12. Juego 4: detectar error.
13. Juego 5: completar conversación.
14. Juego 6: escoger significado correcto.
15. Reto rápido cronometrado.
16. Boss Battle / live task con tutor.
17. Speaking repetition drill.
18. Reading mini challenge.
19. Resumen visual de fórmula y usos.
20. Homework para la siguiente clase.

## Tipos De Diapositivas Nuevas A Diseñar

- **Structure Formula Slide:** fórmula gramatical grande por colores.
- **Why It Matters Slide:** explica uso comunicativo en 2-3 líneas.
- **Pattern Builder Game:** el estudiante arma la oración por partes.
- **Auxiliary Duel:** selección rápida del auxiliar correcto.
- **Verb Form Arena:** elegir base, -ing, pasado o participio.
- **Error Hunter:** detectar qué parte está mal.
- **Meaning Match:** escoger qué significa la frase.
- **Time Marker Gate:** elegir estructura según marcador temporal.
- **Mini Dialogue Quest:** completar conversación breve.
- **Structure Boss Battle:** reto en vivo con tutor, timer, barra de progreso y golpes al jefe.
- **Homework Portal:** tarea final visual y accionable.
- **Formula Lock:** actividad interactiva donde el estudiante toca los elementos de la fórmula en orden y la estructura se arma con animación.

## Sistema De Progreso Y Evaluaciones

El Modo Estructuras debe tener progreso separado del currículo normal, pero conectado a Supabase cuando haya estudiante identificado.

Estado técnico actual:

- [x] Progreso local con fallback: `maven_structure_mode_progress`.
- [x] Progreso persistente planeado en Supabase: `structure_mode_progress`.
- [x] Intentos de evaluación planeados en Supabase: `structure_assessment_attempts`.
- [x] Migración creada: `supabase_structure_mode.sql`.
- [x] Motor inicial de Super Evaluación creado.
- [x] Evaluación repetible indefinidamente.
- [x] Temporizador incluido.
- [x] Retroalimentación por respuesta/tema.
- [x] Compartir resultado por WhatsApp.
- [x] Copiar/abrir link de resultado compartido.

Regla de avance:

Cada bloque solo puede considerarse completo cuando sus clases y su evaluación específica estén listas. No basta con crear las diapositivas; también debe quedar creado el banco de preguntas del bloque con retroalimentación.

## Blueprint De Evaluación Por Bloque

Cada bloque debe tener una evaluación propia dentro del motor de Super Evaluación.

Requisitos mínimos por bloque:

- Todas las clases/temas del bloque incluidas.
- Ningún tema omitido.
- Todas las variaciones principales enseñadas incluidas.
- Preguntas de reconocimiento de estructura.
- Preguntas de forma afirmativa.
- Preguntas de forma negativa.
- Preguntas de forma interrogativa.
- Preguntas de auxiliar correcto.
- Preguntas de forma verbal correcta: base, `-ing`, pasado, participio, infinitivo o gerundio según aplique.
- Preguntas de marcador de tiempo.
- Preguntas de contraste con estructuras cercanas.
- Preguntas de error correction.
- Preguntas de meaning/function.
- Feedback específico para respuesta correcta e incorrecta.
- Resultado compartible por WhatsApp.
- Resultado compartible por link.
- Intentos ilimitados.
- Tiempo configurable por bloque.

Escala sugerida:

- Bloques cortos: 30-45 preguntas.
- Bloques medianos: 45-75 preguntas.
- Bloques largos: 75-120 preguntas.
- Evaluación global final: mínimo 240 preguntas, cubriendo todo el roadmap.

## Checklist De Evaluación Por Bloque

### Evaluación Bloque 1 - Fundamentos De Oración

- [ ] Cubrir Subject + Verb + Complement.
- [ ] Cubrir To Be como verbo principal.
- [ ] Cubrir To Be negativo.
- [ ] Cubrir To Be interrogativo.
- [ ] Cubrir verbos base y complementos.
- [ ] Cubrir Do / Does como auxiliares.
- [ ] Cubrir Wh- questions.
- [ ] Incluir reconocimiento de sujeto, verbo y complemento.
- [ ] Incluir word order.
- [ ] Incluir error correction.
- [ ] Incluir meaning/function.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 2 - Presente

- [ ] Cubrir Present Simple afirmativo, negativo e interrogativo.
- [ ] Cubrir tercera persona `he/she/it`.
- [ ] Cubrir Present Continuous afirmativo, negativo e interrogativo.
- [ ] Cubrir Present Simple vs Present Continuous.
- [ ] Cubrir Present Perfect.
- [ ] Cubrir Present Perfect Continuous.
- [ ] Incluir marcadores: every day, usually, now, right now, today, this week, already, yet, since, for.
- [ ] Incluir auxiliary choice: do, does, am, is, are, have, has.
- [ ] Incluir verb form: base, `-s`, `-ing`, participle.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 3 - Pasado

- [ ] Cubrir Past Simple afirmativo.
- [ ] Cubrir Past Simple negativo e interrogativo con `did`.
- [ ] Cubrir Past Continuous.
- [ ] Cubrir Past Simple vs Past Continuous.
- [ ] Cubrir Past Perfect.
- [ ] Cubrir Past Perfect Continuous.
- [ ] Incluir marcadores: yesterday, last week, ago, while, when, before, by the time, for.
- [ ] Incluir verb form: past simple, base after did, was/were + ing, had + participle.
- [ ] Incluir contrastes de secuencia temporal.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 4 - Futuro

- [ ] Cubrir Future Simple con `will`.
- [ ] Cubrir `be going to`.
- [ ] Cubrir Present Continuous para futuro organizado.
- [ ] Cubrir Present Simple para horarios futuros.
- [ ] Cubrir Future Continuous.
- [ ] Cubrir Future Perfect.
- [ ] Cubrir Future Perfect Continuous.
- [ ] Cubrir Future in the Past: would, was going to, was about to.
- [ ] Incluir marcadores: tomorrow, next week, by, by the time, at this time tomorrow.
- [ ] Incluir contraste intención, predicción, plan, horario y acción completada futura.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 5 - Modales Y Semimodales

- [ ] Cubrir Can / Could.
- [ ] Cubrir May / Might.
- [ ] Cubrir Must / Have to / Need to.
- [ ] Cubrir Should / Ought to / Had better.
- [ ] Cubrir Would / Would rather.
- [ ] Cubrir Be able to / Be allowed to / Be supposed to.
- [ ] Cubrir Modal Continuous.
- [ ] Cubrir Modal Perfect.
- [ ] Cubrir Modal Perfect Continuous.
- [ ] Cubrir modales en voz pasiva.
- [ ] Incluir función: ability, permission, possibility, obligation, advice, preference, speculation.
- [ ] Incluir forma: modal + base, modal + be + ing, modal + have + participle, modal + have been + ing.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 6 - Condicionales

- [ ] Cubrir Zero Conditional.
- [ ] Cubrir First Conditional.
- [ ] Cubrir Second Conditional.
- [ ] Cubrir Third Conditional.
- [ ] Cubrir Mixed Conditionals.
- [ ] Cubrir Unless, As long as, Provided that, In case, Even if, Only if.
- [ ] Incluir condición real, posible, hipotética, imposible y mixta.
- [ ] Incluir puntuación y orden de cláusulas.
- [ ] Incluir errores comunes de `will` en if-clause.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 7 - Voz Pasiva

- [ ] Cubrir Passive Present Simple.
- [ ] Cubrir Passive Present Continuous.
- [ ] Cubrir Passive Present Perfect.
- [ ] Cubrir Passive Past Simple.
- [ ] Cubrir Passive Past Continuous.
- [ ] Cubrir Passive Past Perfect.
- [ ] Cubrir Passive Future Simple.
- [ ] Cubrir Passive Future Perfect.
- [ ] Cubrir Passive with Modals.
- [ ] Incluir transformación activa/pasiva.
- [ ] Incluir `be` correcto por tiempo verbal.
- [ ] Incluir participio correcto.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 8 - Estructuras Especiales

- [ ] Cubrir Imperative.
- [ ] Cubrir Subjunctive with verb base.
- [ ] Cubrir Subjunctive with were.
- [ ] Cubrir Wish / If only para deseos presentes.
- [ ] Cubrir Wish / If only para arrepentimientos pasados.
- [ ] Cubrir Wish + would.
- [ ] Cubrir Infinitives with to.
- [ ] Cubrir Bare infinitives.
- [ ] Cubrir Gerunds.
- [ ] Cubrir Present and past participles.
- [ ] Incluir contraste infinitive vs gerund.
- [ ] Incluir función y forma de cada estructura.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 9 - Causativas Y Hábitos Pasados

- [ ] Cubrir Have something done.
- [ ] Cubrir Get something done.
- [ ] Cubrir Make / Let / Have someone do something.
- [ ] Cubrir Get someone to do something.
- [ ] Cubrir Used to.
- [ ] Cubrir Would for past habits.
- [ ] Cubrir Be used to.
- [ ] Cubrir Get used to.
- [ ] Incluir diferencia entre acción realizada por otro y acción propia.
- [ ] Incluir contraste hábito pasado vs adaptación.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 10 - Reported Speech E Indirect Questions

- [ ] Cubrir Reported Speech present to past.
- [ ] Cubrir continuous and perfect shifts.
- [ ] Cubrir will/can/may to would/could/might.
- [ ] Cubrir reported questions.
- [ ] Cubrir indirect questions.
- [ ] Cubrir polite requests and formal questions.
- [ ] Incluir cambios de tiempo, pronombres y marcadores temporales.
- [ ] Incluir word order en preguntas indirectas.
- [ ] Crear feedback específico por pregunta.

### Evaluación Bloque 11 - Integración Final

- [ ] Cubrir Time Marker Mastery.
- [ ] Cubrir Auxiliary Mastery.
- [ ] Cubrir Verb Form Mastery.
- [ ] Cubrir Error Correction Arena.
- [ ] Cubrir Final Structure Boss Battle.
- [ ] Incluir preguntas mezcladas de todos los bloques.
- [ ] Incluir diagnóstico de debilidades por bloque.
- [ ] Incluir evaluación global cronometrada.
- [ ] Crear feedback específico por bloque y por tema.

## Paleta Visual Propuesta

- Fondo principal: gradientes oscuros y vivos, tipo `from-slate-950 via-indigo-950 to-cyan-900`.
- Afirmativo: verde/cian.
- Negativo: rojo/rose.
- Pregunta: amarillo/amber.
- Auxiliares: violeta.
- Verbos principales: azul.
- Participios: fuchsia.
- Complementos: slate/blanco.
- Marcadores de tiempo: naranja.

## Código De Color Para Memoria

Este código debe mantenerse en todas las clases del Modo Estructuras:

- **Subject / Sujeto / Who:** cian.
- **Verb / Verbo / Action:** violeta.
- **Complement / Extra information:** amarillo.
- **Auxiliary / Auxiliar:** índigo.
- **Present / Past / Future:** verde.
- **Questions / Answers:** rose.
- **Verb forms:** fuchsia para `-ing`, participle, infinitive, gerund.
- **Time markers:** naranja para every day, now, yesterday, tomorrow, since, for, before, etc.

Regla de implementación:

- Las palabras clave deben resaltarse automáticamente desde el motor visual cuando aparezcan en `title`, `subtitle`, `content`, opciones de quiz y feedback.
- No escribir HTML manual dentro de los datos de clase.
- Las fórmulas deben usar los mismos colores que las tarjetas de contenido para reforzar memoria visual.
- Cada slide debe mostrar o respetar la leyenda de memoria cuando sea pedagógicamente útil.

## Actividades Recurrentes De Memoria

Para que todas las clases se sientan más vivas, cada clase debe incluir o heredar estas micro-dinámicas:

- **Memory reps:** contador visible de repetición/avance dentro de la clase.
- **Tutor drill:** momento corto para que el tutor pida repetir, transformar o corregir una oración.
- **Color callout:** pedir al estudiante identificar el color: "Which part is cyan?", "Where is the auxiliary?".
- **Speed round:** una sección cronometrada de 30-60 segundos.
- **Error pause:** después de errores importantes, mostrar feedback corto con el color de la parte incorrecta.
- **Final lock:** resumen donde el estudiante reconstruye la fórmula sin mirar.
- **Formula Lock celebration:** al completar la fórmula correctamente debe aparecer una felicitación animada con confetti.

Regla para todas las clases:

- Toda clase que tenga `formula` debe poder activar **Formula Lock** en slides de fórmula o resumen.
- El estudiante debe seleccionar los bloques en orden: sujeto, auxiliar/verbo, forma verbal, complemento o marcador según la estructura.
- Si selecciona un bloque incorrecto, el sistema debe mostrar una pista breve indicando cuál elemento sigue.
- Al completar correctamente, debe mostrar una celebración clara antes de avanzar.

## Animaciones Propuestas

- Fórmulas que aparecen bloque por bloque.
- Auxiliares que brillan cuando son necesarios.
- Barra de energía por repetición correcta.
- Transiciones con movimiento lateral entre retos.
- Partículas/confetti al completar secciones.
- Boss Battle con vida, timer, rondas y feedback visual.
- Resumen final con medidores animados por dominio.

## Ruta Completa De Clases

### Bloque 1 - Fundamentos De Oración

- [ ] Clase 1: Subject + Verb + Complement
- [ ] Clase 2: To Be como verbo principal
- [ ] Clase 3: To Be en negativo y pregunta
- [ ] Clase 4: Verbos base y complementos
- [ ] Clase 5: Do / Does como auxiliares
- [ ] Clase 6: Preguntas básicas con Wh-

### Bloque 2 - Presente

- [ ] Clase 7: Present Simple - hábitos, rutinas y hechos
- [ ] Clase 8: Present Simple - he/she/it y tercera persona
- [ ] Clase 9: Present Continuous - acciones ahora
- [ ] Clase 10: Present Simple vs Present Continuous
- [ ] Clase 11: Present Perfect - experiencias y resultados
- [ ] Clase 12: Present Perfect Continuous - duración desde el pasado

### Bloque 3 - Pasado

- [ ] Clase 13: Past Simple - acciones terminadas
- [ ] Clase 14: Past Simple - negativos y preguntas con did
- [ ] Clase 15: Past Continuous - acciones en progreso en pasado
- [ ] Clase 16: Past Simple vs Past Continuous
- [ ] Clase 17: Past Perfect - una acción antes de otra
- [ ] Clase 18: Past Perfect Continuous - duración antes de un momento pasado

### Bloque 4 - Futuro

- [ ] Clase 19: Future Simple con will
- [ ] Clase 20: Be Going To - planes y evidencia
- [ ] Clase 21: Present Continuous para futuro organizado
- [ ] Clase 22: Present Simple para horarios futuros
- [ ] Clase 23: Future Continuous
- [ ] Clase 24: Future Perfect
- [ ] Clase 25: Future Perfect Continuous
- [ ] Clase 26: Future in the Past - would / was going to / was about to

### Bloque 5 - Modales Y Semimodales

- [ ] Clase 27: Can / Could
- [ ] Clase 28: May / Might
- [ ] Clase 29: Must / Have to / Need to
- [ ] Clase 30: Should / Ought to / Had better
- [ ] Clase 31: Would / Would rather
- [ ] Clase 32: Be able to / Be allowed to / Be supposed to
- [ ] Clase 33: Modal Continuous
- [ ] Clase 34: Modal Perfect
- [ ] Clase 35: Modal Perfect Continuous
- [ ] Clase 36: Modales en voz pasiva

### Bloque 6 - Condicionales

- [ ] Clase 37: Zero Conditional
- [ ] Clase 38: First Conditional
- [ ] Clase 39: Second Conditional
- [ ] Clase 40: Third Conditional
- [ ] Clase 41: Mixed Conditionals
- [ ] Clase 42: Unless / As long as / Provided that / In case / Even if / Only if

### Bloque 7 - Voz Pasiva

- [ ] Clase 43: Passive Voice - Present Simple
- [ ] Clase 44: Passive Voice - Present Continuous
- [ ] Clase 45: Passive Voice - Present Perfect
- [ ] Clase 46: Passive Voice - Past Simple
- [ ] Clase 47: Passive Voice - Past Continuous
- [ ] Clase 48: Passive Voice - Past Perfect
- [ ] Clase 49: Passive Voice - Future Simple
- [ ] Clase 50: Passive Voice - Future Perfect
- [ ] Clase 51: Passive Voice with Modals

### Bloque 8 - Estructuras Especiales

- [ ] Clase 52: Imperative
- [ ] Clase 53: Subjunctive with verb base
- [ ] Clase 54: Subjunctive with were
- [ ] Clase 55: Wish / If only - present wishes
- [ ] Clase 56: Wish / If only - past regrets
- [ ] Clase 57: Wish + would
- [ ] Clase 58: Infinitives with to
- [ ] Clase 59: Bare infinitives
- [ ] Clase 60: Gerunds
- [ ] Clase 61: Present and past participles

### Bloque 9 - Causativas Y Hábitos Pasados

- [ ] Clase 62: Have something done
- [ ] Clase 63: Get something done
- [ ] Clase 64: Make / Let / Have someone do something
- [ ] Clase 65: Get someone to do something
- [ ] Clase 66: Used to
- [ ] Clase 67: Would for past habits
- [ ] Clase 68: Be used to
- [ ] Clase 69: Get used to

### Bloque 10 - Reported Speech E Indirect Questions

- [ ] Clase 70: Reported Speech - present to past
- [ ] Clase 71: Reported Speech - continuous and perfect shifts
- [ ] Clase 72: Reported Speech - will/can/may to would/could/might
- [ ] Clase 73: Reported questions
- [ ] Clase 74: Indirect Questions
- [ ] Clase 75: Polite requests and formal questions

### Bloque 11 - Integración Final

- [ ] Clase 76: Time Marker Mastery
- [ ] Clase 77: Auxiliary Mastery
- [ ] Clase 78: Verb Form Mastery
- [ ] Clase 79: Error Correction Arena
- [ ] Clase 80: Final Structure Boss Battle

## Adaptación Por Tipo De Estudiante

El mapa de estructuras será el mismo, pero con contenido contextual diferente:

- **Niños:** animales, familia, colores, juguetes, escuela, historias cortas, misiones visuales.
- **Adolescentes:** música, gaming, redes, escuela, hobbies, tecnología, retos y debates ligeros.
- **Adultos:** trabajo, viajes, llamadas, entrevistas, customer service, vida diaria, metas y problemas reales.

Cada clase debe generar ejemplos y juegos para los tres perfiles cuando aplique.

## Plantilla De Clase

Cada clase debe tener:

- ID único del nuevo modo.
- Título claro.
- Estructura principal.
- Objetivo comunicativo.
- Lista de componentes de fórmula con color.
- 20 diapositivas aproximadas.
- 12-20 preguntas de selección múltiple repartidas entre las diapositivas.
- 1 reto tipo Boss Battle.
- 1 tarea final.
- Variante contextual para niño, adolescente y adulto.

## Ejemplo De Fórmula Visual

Present Perfect:

- Sujeto: `I / You / We / They`
- Auxiliar: `have`
- Participio: `worked / eaten / seen`
- Complemento: `before / today / this week`

Ejemplo:

`I` + `have` + `seen` + `that movie before.`

Uso:

Sirve para hablar de experiencias, resultados presentes o acciones conectadas con el presente.

## Reglas De Calidad

- [ ] Ninguna clase debe ser plana o solo texto.
- [ ] Toda diapositiva debe tener fondo inmersivo con gradiente.
- [ ] La primera diapositiva de enseñanza debe mostrar fórmula por colores.
- [ ] La explicación debe ser corta y visual.
- [ ] Debe haber práctica repetitiva real.
- [ ] Debe haber selección múltiple con opciones pedagógicas reales.
- [ ] Debe haber reto en vivo tipo Boss Battle.
- [ ] Debe haber homework final.
- [ ] Debe haber versión contextual para niño, adolescente y adulto.
- [ ] No debe mezclarse con los niveles normales actuales.

## Fases De Implementación

### Fase 1 - Arquitectura Del Nuevo Modo

- [x] Crear tipos de datos para el modo estructuras.
- [x] Crear archivo de datos separado para estructuras.
- [x] Crear selector visual del nuevo modo.
- [x] Crear navegación independiente.
- [x] Asegurar que no afecte el currículo normal.
- [x] Crear plataforma separada con temario, clases y progreso propio.
- [x] Crear migración SQL para progreso e intentos de evaluación.
- [x] Crear capa de guardado Supabase + fallback local.

### Fase 2 - Componentes Visuales

- [x] Crear componente de fórmula por colores.
- [x] Crear componente Pattern Builder.
- [x] Crear componente Auxiliary Duel.
- [x] Crear componente Verb Form Arena.
- [x] Crear componente Error Hunter.
- [ ] Crear componente Time Marker Gate.
- [x] Crear componente Structure Boss Battle.
- [x] Crear componente Homework Portal.
- [ ] Crear resumen final animado.

### Fase 3 - Generación De Contenido

- [ ] Crear plantilla programática de clase.
- [ ] Crear Bloque 1 completo. Progreso interno: 1 / 6 clases.
- [ ] Crear Evaluación Bloque 1 completa.
- [ ] Crear Bloque 2 completo.
- [ ] Crear Evaluación Bloque 2 completa.
- [ ] Crear Bloque 3 completo.
- [ ] Crear Evaluación Bloque 3 completa.
- [ ] Crear Bloque 4 completo.
- [ ] Crear Evaluación Bloque 4 completa.
- [ ] Crear Bloque 5 completo.
- [ ] Crear Evaluación Bloque 5 completa.
- [ ] Crear Bloque 6 completo.
- [ ] Crear Evaluación Bloque 6 completa.
- [ ] Crear Bloque 7 completo.
- [ ] Crear Evaluación Bloque 7 completa.
- [ ] Crear Bloque 8 completo.
- [ ] Crear Evaluación Bloque 8 completa.
- [ ] Crear Bloque 9 completo.
- [ ] Crear Evaluación Bloque 9 completa.
- [ ] Crear Bloque 10 completo.
- [ ] Crear Evaluación Bloque 10 completa.
- [ ] Crear Bloque 11 completo.
- [ ] Crear Evaluación Bloque 11 completa.

### Fase 3.5 - Evaluaciones Cronometradas

- [x] Crear motor base de Super Evaluación.
- [x] Crear banco inicial generado desde roadmap completo.
- [ ] Reemplazar preguntas generadas por preguntas pedagógicas específicas por bloque.
- [ ] Configurar duración individual por bloque.
- [ ] Crear retroalimentación específica por pregunta.
- [ ] Crear reporte por debilidad: bloque, tema, variación y forma verbal.
- [ ] Crear vista histórica de intentos para profesor.
- [ ] Aplicar `supabase_structure_mode.sql` en Supabase.

### Fase 4 - Validación

- [ ] Validar que todas las clases tengan aproximadamente 20 diapositivas.
- [ ] Validar que todas tengan fórmula visual.
- [ ] Validar que todas tengan práctica de selección múltiple.
- [ ] Validar que todas tengan reto tipo Boss Battle.
- [ ] Validar que todas tengan tarea.
- [ ] Validar responsive desktop/mobile.
- [ ] Validar que cada bloque tenga evaluación completa antes de marcarse finalizado.
- [ ] Validar que cada evaluación cubra todos los temas y variaciones enseñadas.
- [ ] Validar guardado de progreso en Supabase.
- [ ] Validar guardado de intentos de evaluación en Supabase.
- [ ] Validar compartir resultado por WhatsApp.
- [ ] Validar link compartible de resultado.
- [ ] Validar build.
- [ ] Validar TypeScript.

## Checklist Global De Avance

- [x] 10% - Arquitectura creada.
- [ ] 20% - Componentes visuales base y guardado Supabase listos.
- [ ] 30% - Bloques 1 y 2 completos con evaluaciones.
- [ ] 40% - Bloques 3 y 4 completos con evaluaciones.
- [ ] 50% - Bloque 5 completo con evaluación.
- [ ] 60% - Bloque 6 completo con evaluación.
- [ ] 70% - Bloque 7 completo con evaluación.
- [ ] 80% - Bloques 8 y 9 completos con evaluaciones.
- [ ] 90% - Bloques 10 y 11 completos con evaluaciones.
- [ ] 100% - Validación completa y modo listo para usar.

## Pendiente De Decisión

- [ ] Definir si cada estructura tendrá una sola clase con variantes por estudiante o tres clases separadas por estudiante.
- [x] Definir si el nuevo modo aparecerá en el dashboard principal o como pestaña independiente. Decisión: botón de entrada desde dashboard hacia plataforma separada.
- [x] Definir si el progreso del nuevo modo se guarda separado del progreso normal. Decisión: progreso separado con Supabase en `structure_mode_progress` y fallback local `maven_structure_mode_progress`.
- [x] Definir si se requiere examen diagnóstico específico para ubicar al estudiante dentro del Modo Estructuras. Decisión: usar Super Evaluación cronometrada repetible como diagnóstico y evaluación por bloques.
