'use client';
import { useRef, useState, useEffect } from 'react';
import { Howl } from 'howler';
import { playlist } from '@/data';

export default function useAudio() {
  const song = useRef<Howl | null>(null);
  const animationFrame = useRef<number | null>(null);

  const [playing, setPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [mute, setMute] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [seek, setSeek] = useState(0);

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) {
      return '00:00';
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedSeconds = secs < 10 ? `0${secs}` : secs;

    return `${paddedMinutes}:${paddedSeconds}`;
  };

  const updateSeekAndTime = () => {
    if (song.current) {
      const currentSeek = song.current.seek() as number;
      setSeek(currentSeek);
      setCurrentTime(formatTime(currentSeek));
      // keep animation loop running
      animationFrame.current = requestAnimationFrame(updateSeekAndTime);
    }
  };

  const togglePlay = () => {
    if (playing) {
      song.current?.pause();
      // stop animation loop
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    } else {
      song.current?.play();
      // restart animation loop
      updateSeekAndTime();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (mute) {
      song.current?.mute(false);
    } else {
      song.current?.mute(true);
    }
    setMute(!mute);
  };

  const previousSong = () => {
    if (playlist.length === 0) return;

    const newSongIndex =
      currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    setCurrentIndex(newSongIndex);
    const newCurrentSong = playlist[newSongIndex];

    setSeek(0);
    setCurrentTime('00:00');
    setDuration(newCurrentSong?.duration ?? '00:00');
  };

  const nextSong = () => {
    if (playlist.length === 0) return;

    const newSongIndex =
      currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newSongIndex);
    const newCurrentSong = playlist[newSongIndex];

    setSeek(0);
    setCurrentTime('00:00');
    setDuration(newCurrentSong?.duration ?? '00:00');
  };

  useEffect(() => {
    // new howl instance for the current song
    song.current = new Howl({
      src: [playlist[currentIndex].url],
      format: ['mp3'],
      html5: true,
      preload: true,
      autoplay: false,
      loop: false,
      volume: volume,
      onplay: () => {
        // set duration and update seek & time
        const durationSeconds = song.current?.duration() || 0;
        setDuration(formatTime(durationSeconds));
        updateSeekAndTime();
      },
      onend: () => {
        nextSong();
      },
      onpause: () => {
        setPlaying(false);
      }
    });

    return () => {
      song.current?.unload();
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [currentIndex, volume, nextSong, updateSeekAndTime]);

  return {
    playing,
    mute,
    currentIndex,
    currentTime,
    duration,
    seek,
    volume,
    togglePlay,
    toggleMute,
    previousSong,
    nextSong,
    setVolume
  };
}
