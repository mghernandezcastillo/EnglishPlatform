import fs from 'fs';

const kidsCurriculum = fs.readFileSync('src/data/curriculumKids.ts', 'utf-8');

// Replacements to make it Teen-orientated
let teenCurriculum = kidsCurriculum
  .replace(/curriculumKidsLevels/g, 'curriculumTeensLevels')
  .replace(/niños/g, 'adolescentes')
  .replace(/Niños/g, 'Adolescentes')
  .replace(/niño/g, 'adolescente')
  .replace(/Niño/g, 'Adolescente')
  .replace(/básico para niños/g, 'básico para adolescentes')
  .replace(/Básico para Niños/g, 'Básico para Adolescentes')
  .replace(/divertido/g, 'genial')
  .replace(/divertida/g, 'genial')
  .replace(/juego/g, 'desafío')
  .replace(/Juego/g, 'Desafío')
  .replace(/jugar/g, 'participar')
  .replace(/Jugar/g, 'Participar')
  .replace(/magia/g, 'súper')
  .replace(/mágica/g, 'espectacular')
  .replace(/mágico/g, 'fantástico')
  .replace(/Mágico/g, 'Fantástico')
  .replace(/Mágica/g, 'Espectacular')
  .replace(/monstruo/gi, 'avatar')
  .replace(/peluche/gi, 'gadget')
  .replace(/juguete/gi, 'videojuego')
  .replace(/Juguete/gi, 'Videojuego')
  .replace(/animalitos/gi, 'animales')
  .replace(/amiguitos/gi, 'amigos')
  .replace(/colores mágicos/gi, 'estilo urbano')
  .replace(/Colores Mágicos/gi, 'Colores Neón')
  .replace(/canción/gi, 'canción/rap')
  .replace(/canciones/gi, 'playlists')
  .replace(/Canción/gi, 'Playlist')
  .replace(/Canciones/gi, 'Playlists')
  .replace(/cantar/gi, 'escuchar música')
  .replace(/cantando/gi, 'escuchando música')
  .replace(/cantamos/gi, 'escuchamos música')
  .replace(/muñeca/gi, 'consola')
  .replace(/muñeco/gi, 'mando')
  .replace(/dibujos/gi, 'diseños')
  .replace(/dibujo/gi, 'diseño')
  .replace(/dibujar/gi, 'diseñar')
  .replace(/dibujando/gi, 'diseñando')
  .replace(/dibujamos/gi, 'diseñamos')
  .replace(/Super Grammar Friends/gi, 'Grammar Squad')
  .replace(/Super/g, 'Mega')
  .replace(/super/g, 'mega')
  .replace(/Mundo/g, 'Universo')
  .replace(/mundo/g, 'universo')
  .replace(/Aventura/g, 'Misión')
  .replace(/aventura/g, 'misión')
  ;


fs.writeFileSync('src/data/curriculumTeens.ts', teenCurriculum);
console.log("Done");
