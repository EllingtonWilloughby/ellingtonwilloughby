'use client'
import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { playlist } from '../../lib/data';

export function useAudio() {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const sound = useRef<Howl | null>(null);

  useEffect(() => {
    function initializeHowler() {
      sound.current = new Howl({
        preload: 'metadata',
        autoplay: true,
        src: [playlist[currentSongIndex].url],
        volume,
        onend: () => {
          handleNextSong();
        }
      });

    };

    initializeHowler();

    return () => {
      sound.current?.unload();
    };
  }, [currentSongIndex, volume]);

  function handlePlay() {
    sound.current?.play();
    setIsPlaying(true);
  };

  function handlePause() {
    sound.current?.pause();
    setIsPlaying(false);
  };

  function handleStop() {
    sound.current?.stop();
    setIsPlaying(false);
  };

  function handleNextSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true);
  };

  function handlePrevSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  function handleVolumeChange(newVolume: number) {
    setVolume(newVolume);
    sound.current?.volume(newVolume);
  };

  function toggleMute() {
    setIsMuted((prevIsMuted) => !prevIsMuted);
    const newVolume = isMuted ? volume : 0;
    setVolume(newVolume);
    sound.current?.volume(newVolume);
  };

  const currentSong = playlist[currentSongIndex];

  return {
    currentSongIndex,
    isPlaying,
    volume,
    handlePlay,
    handlePause,
    handleStop,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong
  };
}
