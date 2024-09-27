'use client';
import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { playlist } from '../data';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songIndex, setSongIndex] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<string>('00:00');
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const sound = useRef<Howl | null>(null);

  useEffect(() => {
    try {
      const initializeHowler = () => {
        sound.current = new Howl({
          preload: 'metadata',
          autoplay: isPlaying,
          src: [playlist[songIndex].url],
          volume: 0.5,
          onend: () => handleNextSong()
        });

        if (isPlaying) {
          sound.current?.play();
        }
      };

      initializeHowler();
    } catch (error) {
      if (error instanceof Error)
        console.error(
          `There was an error while initializing Howler: ${error.message}`
        );
    }

    return () => {
      sound.current?.unload();
    };
  }, [songIndex, isPlaying, playlist]);

  useEffect(() => {
    if (!isMuted) {
      sound.current?.volume(volume);
    } else {
      sound.current?.volume(0);
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        const seconds = Math.floor(sound.current?.seek() as number);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        setElapsedTime(
          `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
        );
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setElapsedTime('00:00');
    }
  }, [isPlaying]);

  function handlePlayPause(): void {
    if (!sound.current) return;

    if (!isPlaying) {
      sound.current?.play();
      setIsPlaying(true);
    } else {
      sound.current?.pause();
      setIsPlaying(false);
    }
  }

  function handleNextSong(): void {
    sound.current?.stop();
    setIsPlaying(false);
    setSongIndex((prevIndex: number) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
    sound.current?.play();
    setIsPlaying(true);
  }

  function handlePrevSong(): void {
    sound.current?.stop();
    setIsPlaying(false);
    setSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
    sound.current?.play();
    setIsPlaying(true);
  }

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    sound.current?.volume(newVolume);
  }

  function toggleMute() {
    setIsMuted((prevIsMuted: boolean) => {
      if (!prevIsMuted) {
        sound.current?.volume(0);
      } else {
        sound.current?.volume(volume);
      }
      return !prevIsMuted;
    });
  }

  const currentSong = playlist[songIndex];

  return {
    elapsedTime,
    isPlaying,
    volume,
    handlePlayPause,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong
  };
}
