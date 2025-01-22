import React from "react";

// Lista de nombres reales de los archivos en la carpeta "public/music"
const files = [
  "Mi_Cancion_Favorita.mp3",
  "Tema_De_Prueba.mp3",
  "Nombre_Largo_De_Tema.mp3",
  "Cancion_Final.mp3"
];

const MusicList = () => {
  return (
    <div>
      <h1>Music List</h1>
      <ul>
        {files.map((file, index) => {
          // Extraer el nombre sin extensión y formatearlo
          const name = file
            .replace(".mp3", "") // Quita la extensión .mp3
            .replace(/_/g, " ")  // Reemplaza guiones bajos (_) con espacios
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitaliza las palabras

          return (
            <li key={index}>
              <span>{name}</span>
              <audio controls>
                <source src={`/music/${file}`} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MusicList;
