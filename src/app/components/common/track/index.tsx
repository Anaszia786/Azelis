"use client";
import React, { useRef, useState, useEffect } from "react";

interface Track {
  cover: string;
  prev: string;
  play: string;
  next: string;
  pause: string;
  track: Array<{ [key: string]: string }>;
}

const TrackPlayer: React.FC<Track> = ({
  cover,
  prev,
  play,
  pause,
  next,
  track,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Autoplay when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= track.length) {
        return 0; // Loop back to the first track
      }
      return nextIndex;
    });
    setIsPlaying(false); // Ensure the new track starts paused
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1;
      if (prevIndexAdjusted < 0) {
        return track.length - 1; // Loop to the last track
      }
      return prevIndexAdjusted;
    });
    setIsPlaying(false); // Ensure the new track starts paused
  };

  const currentTrack = track[currentTrackIndex];

  // next button bg change on click
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(true);
    setTimeout(() => setIsClick(false), 300); // Reset after 300ms for example
  };
  const [isPress, setIsPress] = useState(false);

  const handlePress = () => {
    setIsPress(true);
    setTimeout(() => setIsPress(false), 300); // Reset after 300ms for example
  };

  return (
    <div className="my-10 sm:w-[80%] md:w-[500px] h-[65px] bg-[rgb(38,91,167)] m-auto rounded-xl flex justify-between items-center text-white p-4">
      {/* <!-- Left content (icon, track title, etc.) --> */}
      <div className="flex items-center gap-3">
        <img src={cover} alt="Track cover" className="w-8 h-8" />
        <p className="text-ellipsis overflow-hidden line-clamp-1 max-h-[24px]">
          {track[currentTrackIndex].trackName}
        </p>
      </div>
      {/* <!-- Right content (controls: prev, play/pause, next) --> */}
      <div className="flex items-center gap-2">
        <div
          onClick={handlePrev}
          className="cursor-pointer flex justify-center items-center"
        >
          <img
            className={` ${
              isPress ? "bg-[#448956]" : "hover:bg-[#848b94] hover:scale-110"
            } rounded-full p-[6px] `}
            src={prev}
            onClick={handlePress}
            alt="Previous"
          />
        </div>
        <div className="bg-white rounded-full p-2 cursor-pointer">
          <img
            src={isPlaying ? pause : play}
            onClick={handlePlay}
            alt={isPlaying ? "Pause" : "Play"}
            className="hover:scale-110"
          />
        </div>
        <div onClick={handleNext} className="cursor-pointer">
          <img
            className={` ${
              isClick ? "bg-[#448956]" : "hover:bg-[#848b94] hover:scale-110"
            } rounded-full p-[6px] `}
            src={next}
            onClick={handleClick}
            alt="Next"
          />
        </div>
      </div>
      <audio ref={audioRef} src={currentTrack.audioSrc} />
    </div>
  );
};

export default TrackPlayer;
