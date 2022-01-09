import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <img
        alt={currentSong.name}
        className="song__cover"
        src={currentSong.cover}
      />
      <div className="song__desc">
        <h2 className="song__name">{currentSong.name}</h2>
        <h3 className="song__artist">{currentSong.artist}</h3>
      </div>
    </div>
  );
};

export default Song;
