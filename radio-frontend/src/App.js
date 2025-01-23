import React from "react";
import SongList from './components/SongList';



const App = () => {
  return (
    <div>
      <h1>Radio Streaming</h1>
      <SongList />  {/* Aquí llamas al componente que muestra la lista */}
    </div>
  );
};

export default App;



