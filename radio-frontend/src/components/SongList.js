const songs = [
    { name: "Song 1", url: "/music/song1.mp3" },
    { name: "Song 2", url: "/music/song2.mp3" },

  ];
  
  const SongList = () => {
    return (
      <div>
        <h2>Playlist</h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              <audio controls>
                <source src={song.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              {song.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SongList;

  