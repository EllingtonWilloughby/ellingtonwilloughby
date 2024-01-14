'use client';
import React, { useEffect, useState } from 'react';
import {  type AudioPlayerProps } from '../../lib/types';
import { Howl } from 'howler';
import {
  PiPauseBold,
  PiPlayBold,
  PiSkipBackBold,
  PiSkipForwardBold,
  PiStopBold,
} from 'react-icons/pi';

export default function AudioPlayer({ playlist }: AudioPlayerProps) {
  const [howl, setHowl] = useState<Howl | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(50);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlist, currentSongIndex]);

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
    event.preventDefault();
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (howl) {
      howl.volume(newVolume);
    }
  }
 
  return (
    <section className="audio-player">
      <div className="flex justify-center items-center w-full">
        {isPlaying ? (
          <button onClick={handlePause}>
            <PiPauseBold size={32} />
          </button>
        ) : (
          <button onClick={handlePlay}>
            <PiPlayBold size={32} />
          </button>
        )}
      </div>
      <div className="flex justify-center items-center w-full">
        <button onClick={stopSong}>
          <PiStopBold size={32} />
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <button onClick={previousSong}>
          <PiSkipBackBold size={32} />
        </button>
      </div>
      <div className="flex justify-center items-center w-full">
        <button onClick={playNextSong}>
          <PiSkipForwardBold size={32} />
        </button>
      </div>
      <div className="volume-container">
        <input
          className="volume-slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </section>
  );
}
