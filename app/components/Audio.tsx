'use client';
import React, { useState } from 'react';
import useAudio from '@/hooks/useAudio';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  SpeakerX,
  SpeakerHigh,
  SpeakerLow,
  SpeakerNone,
  SpeakerSlash
} from '@phosphor-icons/react';

export default function Audio() {
  const {
    playing,
    mute,
    volume,
    duration,
    timeElapsed,
    togglePlay,
    toggleMute,
    changeVolume,
    previousSong,
    nextSong,
    currentSong
  } = useAudio();

  return (
    <div className="container flex justify-between items-center p-2">
      <h2 className="text-left font-semi text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased p-2">
        {`Now Playing: ${currentSong().title}`}
      </h2>
      <button type="button" onClick={togglePlay}>
        {playing ? (
          <Pause weight="duotone" size="32" />
        ) : (
          <Play weight="duotone" size="32" />
        )}
      </button>

      <button type="button" onClick={previousSong}>
        <SkipBack weight="duotone" size="32" />
      </button>

      <button type="button" onClick={nextSong}>
        <SkipForward weight="duotone" size="32" />
      </button>

      <button type="button" onClick={toggleMute}>
        {mute ? (
          <SpeakerSlash weight="duotone" size="32" />
        ) : volume < 0.1 ? (
          <SpeakerX weight="duotone" size="32" />
        ) : volume < 0.25 ? (
          <SpeakerNone weight="duotone" size="32" />
        ) : volume < 0.75 ? (
          <SpeakerLow weight="duotone" size="32" />
        ) : volume < 1 ? (
          <SpeakerHigh weight="duotone" size="32" />
        ) : (
          <SpeakerHigh weight="duotone" size="32" />
        )}
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
          onChange={changeVolume}
        />
      </div>
      <div>
        <span>{timeElapsed}</span> / <span>{duration}</span>
      </div>
    </div>
  );
}
