'use client';
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import {
  PiPauseBold,
  PiPlayBold,
  PiSkipBackBold,
  PiSkipForwardBold,
  PiStopBold,
} from 'react-icons/pi';

interface AudioPlayerProps {
  playlist: string[];
}

export default function AudioPlayer({ playlist }: AudioPlayerProps) {
  const [howl, setHowl] = useState<Howl | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    function initializeAudio() {
      setHowl(
        new Howl({
          src: [playlist[currentSongIndex]],
          preload: true,
          volume
        })
      );
    }

    initializeAudio();

    return () => {
      if (howl) {
        howl.unload();
      }
    };
  }, [playlist, currentSongIndex, howl, volume]);

  useEffect(() => {
    setVolume(volume);
  }, [volume]);

  function handlePlay() {
    if (howl) {
      howl.play();
    }
    setIsPlaying(true);
  }

  function handlePause() {
    if (howl && howl?.playing()) {
      howl.pause()
    }
    setIsPlaying(false);
  }


  function stopSong() {
    if (howl) {
      howl.stop();
    }
  }

  function playNextSong() {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  }

  function previousSong() {
    setCurrentSongIndex((prevIndex) => ((prevIndex - 1 + playlist.length) % playlist.length));
  }

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (howl) {
      howl.volume(newVolume);
    }
  }

  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-full flex justify-between items-baseline p-8">
      <div className="flex justify-center items-center w-full">
        {isPlaying ? (
          <button onClick={handlePause} className="">
            <PiPauseBold size={32} />
          </button>
        ) : (
          <button onClick={handlePlay} className="">
            <PiPlayBold size={32} />
          </button>
        )}
      </div>
      <div className="flex justify-center items-center w-full">
        <button onClick={stopSong} className="">
          <PiStopBold size={32} />
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <button onClick={previousSong} className="">
          <PiSkipBackBold size={32} />
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <button onClick={playNextSong} className="">
          <PiSkipForwardBold size={32} />
        </button>
      </div>
      <div className="slidercontainer">
        <input
          className="slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </section>
  );
}
