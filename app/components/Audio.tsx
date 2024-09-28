'use client';
import React, { useState } from 'react';
import useAudio from '@/hooks/useAudio';
import {
  PiPlayBold,
  PiPauseBold,
  PiSkipForwardBold,
  PiSkipBackBold,
  PiSpeakerX,
  PiSpeakerHighBold,
  PiSpeakerLowBold,
  PiSpeakerNoneBold
} from 'react-icons/pi';
import { playlist } from '@/data';

export default function Audio() {
  const [playingState, setPlayingState] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const {
    togglePlay,
    toggleMute,
    nextSong,
    previousSong,
    changeVolume,
    muted,
    currentSong
  } = useAudio();

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    changeVolume(newVolume);
  };

  return (
    <div className="container flex justify-between items-center p-2">
      <h2 className="text-left font-semibold text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased p-2">
        {`Now Playing: ${playlist[currentSong].title}`}
      </h2>
      <label>{playingState ? 'Pause' : 'Play'}</label>
      <button type="button" onClick={togglePlay}>
        {playingState ? <PiPauseBold /> : <PiPlayBold />}
      </button>

      <button type="button" onClick={previousSong}>
        <label>Previous</label>
        <PiSkipBackBold />
      </button>

      <button type="button" onClick={previousSong}>
        <label>Previous</label>
        <PiSkipBackBold />
      </button>

      <button type="button" onClick={previousSong}>
        <label>Previous</label>
        <PiSkipBackBold />
      </button>

      <button type="button" onClick={toggleMute}>
        <label>Mute</label>
        {muted ? 'Unmute' : 'Mute'}
      </button>

      <div>
        <label htmlFor="volume">Volume: {Math.round(volume * 100)}%</label>
        <input
          title="Volume slider"
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}
