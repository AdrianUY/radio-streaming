import React from "react";

const Player = ({ url, name }) => {
  return (
    <div>
      <p>{name}</p>
      <audio controls>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;

