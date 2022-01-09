import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  songInfo,
  setSongInfo,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setSongs,
}) => {
  //Event Handlers
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
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
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "player__forvardBtn") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "player__backBtn") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }
    //check if playing
    if (isPlaying) audioRef.current.play();
  };

  //Add styles
  const trackAnim = {
    transform: `translateX( ${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="player__timeControl">
        <p className="player__txt">{getTime(songInfo.currentTime)}</p>
        <div
          className="player__rangeWrap"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={songInfo.durationTime || 0}
            value={songInfo.currentTime}
            className="player__range"
            type="range"
            onChange={dragHandler}
          />
          <div style={trackAnim} className="player__rangeAnimate"></div>
        </div>
        <p className="player__txt">
          {songInfo.durationTime ? getTime(songInfo.durationTime) : "0:00"}
        </p>
      </div>

      <div className="player__control">
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("player__backBtn");
          }}
          className="player__backBtn"
          size="2x"
          icon={faAngleLeft}
        />

        <FontAwesomeIcon
          onClick={playSongHandler}
          className="player__playBtn"
          size="2x"
          icon={!isPlaying ? faPlay : faPause}
        />

        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("player__forvardBtn");
          }}
          className="player__forvardBtn"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
