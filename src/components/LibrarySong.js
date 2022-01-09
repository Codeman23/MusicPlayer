import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //Handlers
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`librarySong ${song.active ? "librarySong_active" : ""}`}
    >
      <img alt={song.name} className="librarySong__cover" src={song.cover} />
      <div className="librarySong__desc">
        <h3 className="librarySong__name">{song.name}</h3>
        <h4 className="librarySong__artist">{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
