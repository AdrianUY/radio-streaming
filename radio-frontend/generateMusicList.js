const fs = require("fs");
const path = require("path");

const musicDir = path.join(__dirname, "public", "music");
const outputFile = path.join(__dirname, "src", "musicList.json");

// Leer los archivos de la carpeta `music`
const files = fs.readdirSync(musicDir).filter(file => file.endsWith(".mp3"));

// Guardar la lista de archivos como JSON
fs.writeFileSync(outputFile, JSON.stringify(files, null, 2));

console.log(`Lista de canciones generada en: ${outputFile}`);
