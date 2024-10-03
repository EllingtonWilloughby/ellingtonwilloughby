'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Howl, Howler } from 'howler';
import { playlist } from '@/data';

export default function useAudio() {
  const [playback, setPlayback] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [muted, setMuted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [duration, setDuration] = useState<string>('00:00');
  const [elapsedTime, setElapsedTime] = useState<string>('00:00');
  const song = playlist[currentIndex];
  const songRef = useRef<Howl | null>(null);

  const handlePlay = useCallback(() => {
    if (songRef.current) {
      if (Howler.ctx.state === 'suspended') {
        Howler.ctx.resume().then(() => {
          if (!songRef.current?.playing()) {
            songRef.current?.play();
          }
        });
      } else {
        if (songRef.current.playing()) {
          songRef.current.pause();
        } else {
          songRef.current.play();
        }
      }
    }
  }, []);

  const handleVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      songRef.current?.volume(newVolume);
    },
    [setVolume]
  );

  const handleMuteToggle = useCallback(() => {
    setMuted((prevMute: boolean) => {
      const newMute = !prevMute;
      songRef.current?.mute(newMute);
      return newMute;
    });
  }, [setMuted]);

  const handleChangeSong = useCallback((newIndex: number) => {
    setCurrentIndex(newIndex);
    setElapsedTime('00:00');
    setPlayback(false);
  }, []);

  const handlePreviousSong = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    handleChangeSong(newIndex);
  }, [currentIndex, handleChangeSong]);

  const handleNextSong = useCallback(() => {
    const newIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
    handleChangeSong(newIndex);
  }, [currentIndex, handleChangeSong]);

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
    if (songRef.current) {
      songRef.current.unload();
    }

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
  }, [currentIndex, handleNextSong]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (playback && songRef.current) {
      intervalId = setInterval(() => {
        const currentSeconds = songRef.current?.seek() as number;
        setElapsedTime(formatTime(currentSeconds));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [playback]);

  return {
    song,
    playback,
    volume,
    muted,
    currentIndex,
    elapsedTime,
    duration,
    songRef,
    handlePlay,
    handleVolumeChange,
    handleMuteToggle,
    handlePreviousSong,
    handleNextSong
  };
}
