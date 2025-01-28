import React from "react";
import musicList from "../musicList.json"; // Corrige la ruta para acceder al archivo JSON

const SongList = () => {
  return (
    <div>
      <h1>Music List</h1>
      <ul>
        {musicList.map((file, index) => {
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

export default SongList;

