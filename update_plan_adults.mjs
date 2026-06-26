import fs from 'fs';

let content = fs.readFileSync('PLAN_DE_IMPLEMENTACION.md', 'utf8');

// Check off all completed items for Adultos
const adultClassesToCheck = [
  "Clase 5: Sustantivos contables/no contables",
  "Clase 6: Gustos y preferencias",
  "Clase 7: Imperativos e instrucciones",
  "Clase 8: Pedir y ofrecer ayuda",
  "Clase 9: Llamadas básicas",
  "Clase 10: Proyecto: planear una salida",
  "Clase 5: Can / can’t",
  "Clase 6: Have to / don’t have to",
  "Clase 7: Describir ropa y apariencia",
  "Clase 8: Lugares, transporte y cómo llegar",
  "Clase 9: Clima y actividades",
  "Clase 10: Conversación de servicio básico",
  "Clase 11: Repaso y evaluación oral de presente",
  "Clase 5: Pasado de to be",
  "Clase 6: Biografías y eventos históricos",
  "Clase 7: Viajes y vacaciones en pasado",
  "Clase 8: Conectores para contar historias",
  "Clase 9: Expresar opiniones sobre películas",
  "Clase 10: Llamadas sobre problemas pasados",
  "Clase 11: Repaso narrativo",
  "Clase 5: Primer condicional: If it rains",
  "Clase 6: Modales de habilidad",
  "Clase 7: Comparativos y superlativos",
  "Clase 8: Too, enough, very, so",
  "Clase 9: Quejas y soluciones básicas",
  "Clase 10: Emails y mensajes cortos",
  "Clase 11: Simulación de atención al cliente nivel básico",
  "Clase 7: Present Perfect con already",
  "Clase 8: Present Perfect Continuous",
  "Clase 9: Primer condicional y futuro",
  "Clase 10: Modales de posibilidad: may, might",
  "Clase 11: Gerundios e infinitivos",
  "Clase 12: Phrasal verbs frecuentes",
  "Clase 13: Llamadas de soporte",
  "Clase 14: Pronunciación: entonación",
  "Clase 15: Proyecto: resolver un caso",
  "Clase 5: Todos los condicionales",
  "Clase 6: Reported speech para preguntas",
  "Clase 7: Relative clauses:",
  "Clase 8: Phrasal verbs profesionales",
  "Clase 9: Negociación, persuasión",
  "Clase 10: Correos corporativos:",
  "Clase 11: Pronunciación para llamadas:",
  "Clase 12: Simulaciones completas",
  "Clase 6: Future Continuous y Future Perfect",
  "Clase 7: Inversiones para énfasis",
  "Clase 8: Cleft sentences:",
  "Clase 9: Hedging y lenguaje diplomático",
  "Clase 10: Discurso persuasivo",
  "Clase 11: Manejo de crisis",
  "Clase 12: Escritura profesional avanzada",
  "Clase 13: Pronunciación C1",
  "Clase 5: Debate formal y refutación",
  "Clase 6: Storytelling avanzado",
  "Clase 7: Inglés para negocios",
  "Clase 8: Medios, noticias",
  "Clase 9: Humor, ironía",
  "Clase 10: Acentos del inglés",
  "Clase 11: Preparación para entrevistas C1",
  "Clase 12: Proyecto final: presentación"
];

for (const name of adultClassesToCheck) {
  const regex = new RegExp(`- \\[ \\] (${name}.*)`, 'g');
  content = content.replace(regex, '- [x] $1');
}

fs.writeFileSync('PLAN_DE_IMPLEMENTACION.md', content);
console.log("Updated PLAN_DE_IMPLEMENTACION.md with adult classes checked");
