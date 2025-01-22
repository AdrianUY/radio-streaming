const fs = require("fs");
const path = require("path");

const musicDir = path.join(__dirname, "radio-frontend/public/music");
const output = path.join(musicDir, "songs.json");

// Leer todos los archivos en la carpeta de música
const files = fs.readdirSync(musicDir);

// Filtrar solo los archivos MP3
const songs = files
  .filter((file) => file.endsWith(".mp3"))
  .map((file, index) => ({
    id: index + 1,
    name: file.replace(".mp3", "").replace(/-/g, " ").toUpperCase(),
    path: `/music/${file}`,
  }));

// Escribir el archivo JSON
fs.writeFileSync(output, JSON.stringify(songs, null, 2));
console.log("Archivo songs.json generado con éxito.");

