'use client'
import { useState } from "react";
import { useAudio } from "../../lib/hooks/useAudio";
import {
  PiPlayBold,
  PiPauseBold,
  PiSkipBackBold,
  PiSkipForwardBold,
  PiSpeakerXBold,
  PiSpeakerHighBold,
  PiSpeakerLowBold,
  PiSpeakerNoneBold,
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
    <section className="relative max-w-screen-md mx-auto w-full flex flex-col justify-center items-center px-24">
      <div className="control-container max-w-screen-sm mx-auto w-full flex justify-between items-center">
        <div className="control">
          <button onClick={handlePlayPause}>
            {isPlaying
              ? <PiPauseBold size={32} />
              : <PiPlayBold size={32} />}
          </button>
        </div>

        <div className="control">
          <button onClick={handlePrevSong}>
            <PiSkipBackBold size={32} />
          </button>
        </div>

        <div className="control">
          <button onClick={handleNextSong}>
            <PiSkipForwardBold size={32} />
          </button>
        </div>

        <div
          className="control"
          onMouseEnter={() => setVolumeSlider(true)}
          onMouseLeave={() => setVolumeSlider(false)}
        >
          <button
            onClick={toggleMute}
          >
            {volume === 0
              ? <PiSpeakerXBold size={32} />
              : volume < .25
                ? <PiSpeakerNoneBold size={32} />
                : volume < .75
                  ? <PiSpeakerLowBold size={32} />
                  : <PiSpeakerHighBold size={32} />
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
          </button>
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
