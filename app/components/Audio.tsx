'use client'
import { useState } from "react";
import { useAudio } from "../../lib/hooks/useAudio";
import {
  PiPlayFill,
  PiPauseFill,
  PiSkipBackFill,
  PiSkipForwardFill,
  PiSpeakerXFill,
  PiSpeakerHighFill,
  PiSpeakerLowFill,
  PiSpeakerNoneFill,
} from 'react-icons/pi'
import NowPlaying from "./NowPlaying";

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
    <section className="relative max-w-screen-md px-12">
      <div className="w-full flex justify-between">
        <div className="control">
          <span onClick={handlePlayPause}>
            {isPlaying
              ? <PiPauseFill size={32} />
              : <PiPlayFill size={32} />}
          </span>
        </div>

        <div className="control">
          <span onClick={handlePrevSong}>
            <PiSkipBackFill size={32} />
          </span>
        </div>

        <div className="control">
          <span onClick={handleNextSong}>
            <PiSkipForwardFill size={32} />
          </span>
        </div>

        <div
          className="control"
          onMouseEnter={() => setVolumeSlider(true)}
          onMouseLeave={() => setVolumeSlider(false)}
        >
          <span
            onClick={toggleMute}
          >
            {volume === 0
              ? <PiSpeakerXFill size={32} />
              : volume < .25
                ? <PiSpeakerNoneFill size={32} />
                : volume < .75
                  ? <PiSpeakerLowFill size={32} />
                  : <PiSpeakerHighFill size={32} />
            }

            {volumeSlider && (
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={handleVolumeChange}
                  className="absolute"
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
