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
  const [volumeSlider, setVolumeSlider] = useState<boolean>(false);
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

  return (
    <section className="relative bottom-6 w-full max-w-xl lg:max-w-3xl mx-auto px-8 mb-8">
      <div className="flex justify-between items-center px-8 md:px-6 py-8">
        <div className="control cursor-pointer inline-block flex-1">
          <span onClick={handlePlayPause}>
            {isPlaying ? <PiPauseFill size={32} /> : <PiPlayFill size={32} />}
          </span>
        </div>

        <div className="control cursor-pointer inline-block flex-1">
          <span onClick={handlePrevSong}>
            <PiSkipBackFill size={32} />
          </span>
        </div>

        <div className="control cursor-pointer inline-block flex-1">
          <span onClick={handleNextSong}>
            <PiSkipForwardFill size={32} />
          </span>
        </div>

        <div
          className="control cursor-pointer inline-block"
          onMouseEnter={() => setVolumeSlider(true)}
          onMouseLeave={() => setVolumeSlider(false)}
        >
          <span onClick={toggleMute}>
            {volume === 0 ? (
              <PiSpeakerXFill size={32} />
            ) : volume < 0.25 ? (
              <PiSpeakerNoneFill size={32} />
            ) : volume < 0.75 ? (
              <PiSpeakerLowFill size={32} />
            ) : (
              <PiSpeakerHighFill size={32} />
            )}
          </span>
          <span className="absolute top-1/5 right-0 z-10">
            {volumeSlider && (
              <input
                type="range"
                id="volume"
                name="volume"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="cursor-pointer"
              />
            )}
          </span>
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
