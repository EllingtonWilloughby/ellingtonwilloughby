'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Howl, Howler } from 'howler';
import { playlist } from '@/data';
import { ISong } from '@/types';

export default function useAudio() {
  const [playback, setPlayback] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [muted, setMuted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [duration, setDuration] = useState<string>('00:00');
  const [displayTime, setDisplayTime] = useState<string>('00:00');
  const song = playlist[currentIndex];
  const songRef = useRef<Howl | null>(null);

  useEffect(() => {
    songRef.current = new Howl({
      src: [song.url],
      html5: true,
      preload: 'metadata',
      loop: false,
      autoplay: false,
      volume: 0.5,
      onload: () => {
        setDuration(song.duration);
      },
      // these were just added
      onplay: () => {
        setPlayback(true);
      },
      onpause: () => {
        setPlayback(false);
      },
      onend: () => {
        handleNextSong();
      }
    });

    return () => {
      songRef.current?.unload();
    };
  }, [currentIndex]);

  const handlePlay = useCallback(() => {
    if (songRef.current?.playing()) {
      songRef.current.pause();
      setPlayback(false);
    } else {
      songRef.current?.play();
      setPlayback(true);
    }
  }, [songRef]);

  const handleVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      songRef.current?.volume(newVolume);
    },
    [songRef]
  );

  const handleMuteToggle = useCallback(() => {
    setMuted((prevMute: boolean) => !prevMute);
    songRef.current?.mute(!muted);
  }, [muted]);

  const handleChangeSong = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    setDisplayTime('00:00');
    setPlayback(false);
    // removed currentIndex dep here
  }, []);

  const handlePreviousSong = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    handleChangeSong(newIndex);
  };

  const handleNextSong = () => {
    const newIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
    handleChangeSong(newIndex);
  };

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

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (playback && songRef.current) {
      intervalId = setInterval(() => {
        const currentSeconds = songRef.current?.seek() as number;
        setDisplayTime(formatTime(currentSeconds));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [playback, songRef]);

  return {
    song,
    playback,
    volume,
    muted,
    currentIndex,
    displayTime,
    duration,
    songRef,
    handlePlay,
    handleVolumeChange,
    handleMuteToggle,
    handlePreviousSong,
    handleNextSong
  };
}
