'use client';
import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { playlist } from '@/data';

export default function useAudio() {
  const [sound, setSound] = useState<Howl | null>(null);
  const [currentSong, setCurrentSong] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(false);
  const [vol, setVol] = useState<number>(0.5);

  useEffect(() => {
    const soundInstance = new Howl({
      src: playlist[currentSong].url,
      autoplay: false,
      loop: false,
      volume: vol
    });
    setSound(soundInstance);

    return () => {
      soundInstance.unload();
    };
  }, [currentSong, playlist, vol]);

  const togglePlay = () => {
    if (sound) {
      if (sound.playing()) {
        sound.pause();
      } else {
        sound.play();
      }
    }
  };

  const toggleMute = () => {
    if (sound) {
      const muteStatus = !sound.mute();
      sound.mute(muteStatus);
      setMuted(muteStatus);
    }
  };

  const nextSong = () => {
    if (currentSong < playlist.length - 1) {
      setCurrentSong(currentSong + 1);
    } else {
      setCurrentSong(0);
    }
  };

  const previousSong = () => {
    if (currentSong > 0) {
      setCurrentSong(currentSong - 1);
    } else {
      setCurrentSong(playlist.length - 1);
    }
  };

  const changeVolume = (vol: number) => {
    if (sound) {
      sound.volume(vol);
      setVol(vol);
    }
  };

  return {
    togglePlay,
    toggleMute,
    muted,
    vol,
    changeVolume,
    currentSong,
    nextSong,
    previousSong
  };
}
