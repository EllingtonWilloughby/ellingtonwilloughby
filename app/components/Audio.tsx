'use client';
import { useState } from 'react';
import { useAudio } from '../lib/hooks/useAudio';
import {
  PiPlayFill,
  PiPauseFill,
  PiSkipBackFill,
  PiSkipForwardFill,
  PiSpeakerXFill,
  PiSpeakerHighFill,
  PiSpeakerLowFill,
  PiSpeakerNoneFill
} from 'react-icons/pi';
import NowPlaying from './NowPlaying';

export default function Audio() {
  const {
    elapsedTime,
    isPlaying,
    volume,
    handlePlayPause,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong
  } = useAudio();

  const getVolumeIcon = () => {
    if (volume === 0) return <PiSpeakerXFill size={32} />;
    if (volume < 0.25) return <PiSpeakerNoneFill size={32} />;
    if (volume < 0.75) return <PiSpeakerLowFill size={32} />;
    return <PiSpeakerHighFill size={32} />;
  };

  return (
    <section className="relative bottom-6 w-full max-w-xl lg:max-w-3xl mx-auto px-8 mb-8">
      <div className="flex justify-between items-center px-8 md:px-6 py-8">
        <div className="control cursor-pointer inline-block flex-1">
          <button
            type="button"
            onClick={handlePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <PiPauseFill size={32} /> : <PiPlayFill size={32} />}
          </button>
        </div>

        <div className="control cursor-pointer inline-block flex-1">
          <button type="button" onClick={handlePrevSong} aria-label="Previous">
            <PiSkipBackFill size={32} />
          </button>
        </div>

        <div className="control cursor-pointer inline-block flex-1">
          <button type="button" onClick={handleNextSong} aria-label="Next">
            <PiSkipForwardFill size={32} />
          </button>
        </div>

        <div className="control cursor-pointer inline-block">
          <button type="button" onClick={toggleMute} aria-label="Mute/Unmute">
            {getVolumeIcon()}
          </button>

          <label htmlFor="volume">
            <input
              aria-label="volume"
              type="range"
              id="volume"
              name="volume"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              className="cursor-pointer absolute top-0 w-24 h-2 bg-gray-300 rounded-full"
            />
          </label>
        </div>
      </div>

      <NowPlaying
        isPlaying={isPlaying}
        currentSong={currentSong}
        elapsedTime={elapsedTime}
      />
    </section>
  );
}
