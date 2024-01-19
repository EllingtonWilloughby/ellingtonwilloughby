'use client'
import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { playlist } from '../../lib/data'

export function useAudio() {
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(0)
  const [volumeBeforeMute, setVolumeBeforeMute] = useState<number>(0)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  const sound = useRef<Howl | null>(null)

  useEffect(() => {
    function initializeHowler() {
      sound.current = new Howl({
        preload: 'metadata',
        src: [playlist[currentSongIndex].url],
        volume: 0.5,
        onend: () => {
          handleNextSong()
        }
      });

    };

    initializeHowler();

    return () => {
      sound.current?.unload();
    };
  }, [currentSongIndex, volume]);

  function togglePlayPause() {
    if (!isPlaying) {
      sound.current?.play()
      setIsPlaying(true)
    } else {
      sound.current?.pause()
      setIsPlaying(false)
    }
  }

  function handleStop() {
    sound.current?.stop()
    setIsPlaying(false)
  }

  function handleNextSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true)
  }

  function handlePrevSong() {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
    setIsPlaying(true)
  }

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
    sound.current?.volume(newVolume)
  }

  function toggleMute() {
    setIsMuted((prevIsMuted) => !prevIsMuted)
    if (!isMuted) {
      setVolumeBeforeMute(volume)
      setIsMuted(true)
      setVolume(0)
    } else {
      setVolume(volumeBeforeMute)
      setIsMuted(false)
    }
    if (isPlaying){
      sound.current?.volume(volumeBeforeMute)
      sound.current?.play()
    }
  }

  const currentSong = playlist[currentSongIndex]

  return {
    currentSongIndex,
    isPlaying,
    volume,
    togglePlayPause,
    handleStop,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong
  }
}
