'use client';
import { useState, useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { playlist } from '@/data';

export default function useAudio() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [songIndex, setSongIndex] = useState<number>(0);
  const [mute, setMute] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [seek, setSeek] = useState<number>(0);
  const [duration, setDuration] = useState<string>('00:00');
  const [timeElapsed, setElapsedTime] = useState<string>('00:00');

  const song = useRef<Howl | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // format time mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // initialize audio and prepare for playback
  useEffect(() => {
    song.current = new Howl({
      src: playlist[songIndex].url,
      html5: true,
      format: ['mp3'],
      preload: true,
      autoplay: false,
      loop: false,
      volume: volume,
      onplay: () => {
        song.current?.play();
        song.current?.seek(seek);
        setPlaying(true);
        updateSeek();
      },
      onend: () => {
        setPlaying(false);
        nextSong();
      },
      onpause: () => {
        setPlaying(false);
        // stop animation loop when song is paused
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      },
      onseek: () => {
        setSeek(song.current?.seek() as number);
      }
    });

    if (song.current) {
      song.current.seek(seek);
    }

    return () => {
      song.current?.unload();
      // stop animation loop on unmount
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [songIndex, volume, seek]);

  // update seek and elapsed time every second using animation loop
  const updateSeek = () => {
    if (song.current) {
      const currentSeek = song.current.seek() as number;
      setSeek(currentSeek);
      setElapsedTime(formatTime(currentSeek));
      setDuration(formatTime(song.current.duration()));

      animationFrameRef.current = requestAnimationFrame(updateSeek);
    }
  };

  const togglePlay = () => {
    if (!playing) {
      song.current?.play();
      setPlaying(true);
    } else {
      song.current?.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!mute) {
      song.current?.mute(true);
      setMute(true);
    } else {
      song.current?.mute(false);
      setMute(false);
    }
  };

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newVolume = parseFloat(event.target.value);
    song.current?.volume(newVolume);
    setVolume(newVolume);
  };

  const previousSong = () => {
    if (songIndex > 0) {
      setSongIndex(songIndex - 1);
    } else {
      setSongIndex(playlist.length - 1);
    }
  };

  const nextSong = () => {
    if (songIndex < playlist.length - 1) {
      setSongIndex(songIndex + 1);
    } else {
      setSongIndex(0);
    }
  };

  const currentSong = () => {
    return playlist[songIndex];
  };

  return {
    playing,
    songIndex,
    mute,
    volume,
    duration,
    timeElapsed,
    seek,
    song,
    togglePlay,
    toggleMute,
    changeVolume,
    previousSong,
    nextSong,
    currentSong
  };
}
