import React from "react";
import MusicList from "./MusicList";  // Asegúrate de importar el componente

const App = () => {
  return (
    <div>
      <h1>Radio Streaming</h1>
      <MusicList />  {/* Aquí llamas al componente que muestra la lista */}
    </div>
  );
};

export default App;



