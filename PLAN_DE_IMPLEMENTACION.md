# Plan de Implementación de Nuevas Clases

Este documento detalla el plan paso a paso para agregar el nuevo contenido a los niveles de Adultos, Adolescentes y Niños, cumpliendo con la regla estricta de **no modificar ni eliminar las clases existentes**, sino únicamente agregar las nuevas para expandir cada nivel al estándar deseado (8-10 clases para adultos/adolescentes, 12-16 para niños).

## Metodología y Reglas
1. **Preservación:** Las clases existentes se mantienen intactas. Sus IDs y contenido no se modifican para no afectar el progreso de los estudiantes.
2. **Numeración:** Las nuevas clases se agregarán al final de cada nivel continuando la numeración (por ejemplo, si el nivel tiene 4 clases, la nueva será la "Clase 5").
3. **Estructura Estándar:** Cada nueva clase debe replicar la estructura actual:
   - Secciones: Warm-up, Grammar/Vocabulary, Practice, Roleplay/Production, Homework.
   - Cantidad de diapositivas equilibrada (con al menos 1 o 2 imágenes ilustrativas por sección principal donde aplique).
   - Tipos de contenido: `emoji-game`, `roleplay`, `reading`, etc., siguiendo el estilo del currículo.
   - Tarea final y sugerencia de tarea de video.
4. **IDs Únicos:** Se usarán IDs secuenciales que no colisionen con los existentes (ej. `c-adults-basic-zero-10` en adelante).

---

## 1. Plan para Adultos (Curriculum.ts)

### Nivel 1: Basic Zero
*Actualmente tiene 10 clases.*
- [x] Clase 11: Saludos, despedidas...
- [x] Clase 12: Alfabeto, deletreo...
- [x] Clase 13: Profesiones, nacionalidades...
- [x] Clase 14: Rutinas muy básicas...
- [x] Clase 15: Compras:...
- [x] Clase 16: Repaso integral...

### Nivel 2: Basic 1
*Actualmente tiene 4 clases.*
- [x] Clase 5: Sustantivos contables/no contables: some, any, a lot of.
- [x] Clase 6: Gustos y preferencias: like, would like, favorite.
- [x] Clase 7: Imperativos e instrucciones: open, close, turn left, please.
- [x] Clase 8: Pedir y ofrecer ayuda: Can I...?, Can you...?, Could you...?
- [x] Clase 9: Llamadas básicas: saludar, pedir repetir, tomar un mensaje.
- [x] Clase 10: Proyecto: planear una salida, viaje o evento futuro.

### Nivel 3: Basic 2
*Actualmente tiene 4 clases.*
- [x] Clase 5: Can / can’t para habilidades y permisos.
- [x] Clase 6: Have to / don’t have to para obligaciones.
- [x] Clase 7: Describir ropa y apariencia física.
- [x] Clase 8: Lugares, transporte y cómo llegar.
- [x] Clase 9: Clima y actividades según el clima.
- [x] Clase 10: Conversación de servicio básico: pedidos, horarios, disponibilidad.
- [x] Clase 11: Repaso y evaluación oral de presente, futuro y preguntas.

### Nivel 4: Basic 3
*Actualmente tiene 4 clases.*
- [x] Clase 5: Pasado de to be: was/were.
- [x] Clase 6: Biografías y eventos históricos sencillos.
- [x] Clase 7: Viajes y vacaciones en pasado.
- [x] Clase 8: Conectores para contar historias: first, then, after that, finally.
- [x] Clase 9: Expresar opiniones sobre películas, comida y experiencias.
- [x] Clase 10: Llamadas sobre problemas pasados: “My order arrived late.”
- [x] Clase 11: Repaso narrativo y prueba oral de pasado.

### Nivel 5: Basic 4 (Tense Review en la app actual, ajustaremos el nombre)
*Actualmente tiene 4 clases.*
- [x] Clase 5: Primer condicional: If it rains, I will...
- [x] Clase 6: Modales de habilidad, permiso y posibilidad: can, could, may, might.
- [x] Clase 7: Comparativos y superlativos aplicados a productos y servicios.
- [x] Clase 8: Too, enough, very, so, such.
- [x] Clase 9: Quejas y soluciones básicas para customer service.
- [x] Clase 10: Emails y mensajes cortos formales.
- [x] Clase 11: Simulación de atención al cliente nivel básico y Examen de transición.

### Nivel 6: Intermediate
*Actualmente tiene 6 clases.*
- [x] Clase 7: Present Perfect con already, yet, just, ever, never.
- [x] Clase 8: Present Perfect Continuous.
- [x] Clase 9: Primer condicional y futuro probable.
- [x] Clase 10: Modales de posibilidad: may, might, could, must.
- [x] Clase 11: Gerundios e infinitivos: want to, need to, enjoy doing.
- [x] Clase 12: Phrasal verbs frecuentes de conversación.
- [x] Clase 13: Llamadas de soporte: verificar datos, solucionar y cerrar casos.
- [x] Clase 14: Pronunciación: entonación, connected speech y reducción.
- [x] Clase 15: Proyecto: resolver un caso completo de customer service.

### Nivel 7: Advanced
*Actualmente tiene 4 clases.*
- [x] Clase 5: Todos los condicionales: cero, primero, segundo, tercero y mixtos.
- [x] Clase 6: Reported speech para preguntas, órdenes y solicitudes.
- [x] Clase 7: Relative clauses: who, which, that, where.
- [x] Clase 8: Phrasal verbs profesionales y expresiones idiomáticas.
- [x] Clase 9: Negociación, persuasión y manejo de clientes difíciles.
- [x] Clase 10: Correos corporativos: disculpas, seguimiento, escalamiento.
- [x] Clase 11: Pronunciación para llamadas: ritmo, énfasis, claridad y neutralización.
- [x] Clase 12: Simulaciones completas de entrevistas y customer service.

### Nivel 8: Advanced Elite
*Actualmente tiene 5 clases.*
- [x] Clase 6: Future Continuous y Future Perfect Continuous.
- [x] Clase 7: Inversiones para énfasis: Never have I..., Rarely do we...
- [x] Clase 8: Cleft sentences: What I mean is..., It was... who...
- [x] Clase 9: Hedging y lenguaje diplomático: It seems that, I would suggest...
- [x] Clase 10: Discurso persuasivo, presentaciones y reuniones.
- [x] Clase 11: Manejo de crisis, escalamiento y negociación compleja.
- [x] Clase 12: Escritura profesional avanzada: informes, propuestas y emails.
- [x] Clase 13: Pronunciación C1 y Proyecto final (simulación laboral).

### Nivel 9: Masters of Fluency
*Actualmente tiene 4 clases.*
- [x] Clase 5: Debate formal y refutación de argumentos.
- [x] Clase 6: Storytelling avanzado y presentaciones improvisadas.
- [x] Clase 7: Inglés para negocios, liderazgo y reuniones.
- [x] Clase 8: Medios, noticias, cultura y análisis de contenido real.
- [x] Clase 9: Humor, ironía, matices y lenguaje informal natural.
- [x] Clase 10: Acentos del inglés y comprensión auditiva avanzada.
- [x] Clase 11: Preparación para entrevistas C1/C2 y Conversation Club temático.
- [x] Clase 12: Proyecto final: presentación, debate o podcast en inglés.

---

## 2. Plan para Adolescentes (CurriculumTeens.ts)
*(Sigue la misma lógica: añadir al final de cada nivel)*

### Nivel 1: Basic Zero
*Actualmente tiene 10 clases.*
- [x] Clase 11: Alfabeto, deletreo...
- [ ] Clase 12: Presentarse: edad, curso, ciudad, gustos y redes sociales.
- [ ] Clase 13: Ropa, estilo personal y apariencia.
- [ ] Clase 14: Escuela, materias y objetos del salón.
- [ ] Clase 15: Rutina diaria básica.
- [ ] Clase 16: Videojuegos, música y hobbies (Repaso y mini presentación).

### Nivel 2: Basic 1
*Actualmente tiene 4 clases.*
- [ ] Clase 5: Planes de fin de semana con will y going to.
- [ ] Clase 6: Invitaciones, aceptar y rechazar planes.
- [ ] Clase 7: Compras, precios y ropa.
- [ ] Clase 8: Comida, snacks y pedidos.
- [ ] Clase 9: Tecnología, aplicaciones y redes sociales.
- [ ] Clase 10: Chat y llamadas (pedir ayuda) y Proyecto de evento/viaje.

### Nivel 3: Basic 2
*Actualmente tiene 4 clases.*
- [ ] Clase 5: Habilidades con can / can’t.
- [ ] Clase 6: Reglas escolares con must, have to, should.
- [ ] Clase 7: Deportes, salud y hábitos.
- [ ] Clase 8: Ciudad, transporte y lugares para salir.
- [ ] Clase 9: Describir series, películas, juegos y música.
- [ ] Clase 10: Conversación actual, rutinas y Repaso oral por retos.

### Nivel 4: Basic 3
*Actualmente tiene 4 clases.*
- [ ] Clase 5: Was/were y recuerdos de infancia.
- [ ] Clase 6: Vacaciones, viajes y anécdotas.
- [ ] Clase 7: Biografías de artistas, deportistas o creadores.
- [x] Clase 8: Conectores para contar historias.
- [ ] Clase 9: Problemas cotidianos y cómo explicarlos.
- [ ] Clase 10: Verbos irregulares y terminaciones -ed. Proyecto en video.

### Nivel 5: Basic 4
*Actualmente tiene 4 clases.*
- [ ] Clase 5: Primer condicional para planes y consecuencias.
- [ ] Clase 6: Comparativos y superlativos: apps, celulares, películas y deportes.
- [ ] Clase 7: Too / enough para problemas y soluciones.
- [ ] Clase 8: Consejos entre amigos con should.
- [ ] Clase 9: Mensajes, emails y chats informales/formales.
- [ ] Clase 10: Atención al cliente juvenil y evaluación de transición.

### Nivel 6: Intermediate
*Actualmente tiene 6 clases.*
- [ ] Clase 7: Present Perfect con experiencias personales y Present Perfect Continuous.
- [ ] Clase 8: Phrasal verbs frecuentes en conversaciones adolescentes.
- [ ] Clase 9: Modales de posibilidad y deducción.
- [ ] Clase 10: Primer y segundo condicional.
- [ ] Clase 11: Opiniones, acuerdos y desacuerdos respetuosos.
- [ ] Clase 12: Proyecto podcast/debate y Simulación entrevista beca/empleo.

### Nivel 7: Advanced
*Actualmente tiene 4 clases.*
- [ ] Clase 5: Reported speech en chismes, noticias y conversaciones.
- [ ] Clase 6: Relative clauses y descripción detallada de personas/cosas.
- [ ] Clase 7: Voz pasiva aplicada a noticias y tecnología.
- [ ] Clase 8: Phrasal verbs e idioms de uso real.
- [ ] Clase 9: Debates: IA, redes sociales, medioambiente y educación.
- [ ] Clase 10: Entrevistas (trabajo/voluntariado) y resolución de problemas.

### Nivel 8: Advanced Elite
*Actualmente tiene 5 clases.*
- [ ] Clase 6: Future Continuous, Future Perfect y planificación de metas.
- [ ] Clase 7: Condicionales mixtos y decisiones pasadas.
- [ ] Clase 8: Lenguaje diplomático, cleft sentences e inversiones.
- [ ] Clase 9: Ensayos, opiniones y presentaciones académicas.
- [ ] Clase 10: Reuniones, liderazgo y trabajo en equipo.
- [ ] Clase 11: Proyecto final: pitch de emprendimiento o conferencia.

### Nivel 9: Masters of Fluency
*Actualmente tiene 4 clases.*
- [ ] Clase 5: Debate competitivo y pensamiento crítico.
- [ ] Clase 6: Análisis de películas, música, noticias y cultura digital.
- [ ] Clase 7: Inglés académico para universidad e intercambios.
- [ ] Clase 8: Creación de podcast, videoensayo o presentación TED.
- [ ] Clase 9: Temas globales: tecnología, ética, clima y sociedad.
- [ ] Clase 10: Preparación de entrevistas C1 y Conversation Club.

---

## 3. Plan para Niños (CurriculumKids.ts)
*(Objetivo: llegar a 12-16 clases por nivel. Como todos tienen 8, se agregarán entre 4 y 8 clases)*

### Nivel 1: Kids Explorer
*Actualmente tiene 8 clases.*
- [ ] Clase 9: Greetings & Classroom Commands.
- [ ] Clase 10: My Name, My Age & My Birthday.
- [ ] Clase 11: Numbers 6–10.
- [ ] Clase 12: My Family.
- [ ] Clase 13: Feelings & Emotions.
- [ ] Clase 14: More Pets and Animal Sounds.
- [ ] Clase 15: My Snack Time.
- [ ] Clase 16: Review Party & Mini Show and Tell.

### Nivel 2: Kids Explorador
*Actualmente tiene 8 clases.*
- [ ] Clase 9: My Home & My Room.
- [ ] Clase 10: Daily Routines: wake up, eat, play, sleep.
- [ ] Clase 11: Days of the Week.
- [ ] Clase 12: Toys and Games.
- [ ] Clase 13: Healthy Food & Drinks.
- [ ] Clase 14: Community Helpers.
- [ ] Clase 15: My Birthday Party.
- [ ] Clase 16: Review Mission & Speaking Badge.

### Nivel 3: Kids Aventurero
*Actualmente tiene 8 clases.*
- [ ] Clase 9: Prepositions: in, on, under, next to.
- [ ] Clase 10: Describing People: tall, short, happy, funny.
- [ ] Clase 11: Clothes for Different Seasons.
- [ ] Clase 12: Daily Routines with Time.
- [ ] Clase 13: Hobbies and Sports.
- [ ] Clase 14: Simple Questions: What?, Where?, Who?
- [ ] Clase 15: My City: places and transportation.
- [ ] Clase 16: Review Adventure & Mini Dialogue.

### Nivel 4: Kids Campeón
*Actualmente tiene 8 clases.*
- [ ] Clase 9: Simple Present: I like, I play, I go.
- [ ] Clase 10: Likes and Dislikes.
- [ ] Clase 11: Can / can’t for abilities.
- [ ] Clase 12: Food: I want / I would like.
- [ ] Clase 13: Nature and environmental care.
- [ ] Clase 14: Storytelling: beginning, middle and end.
- [ ] Clase 15: My Dream Job.
- [ ] Clase 16: Review Festival, oral project and level certificate.

---
**Nota:** El proceso consistirá en tomar uno a uno estos checkboxes, generar el objeto de la clase (`Class` en el TS correspondiente) y hacer el append al array de clases del nivel adecuado mediante un script.
