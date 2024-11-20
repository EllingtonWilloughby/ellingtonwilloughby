"use client";
import { useState } from "react";
import AudioControls from "./AudioControls";
import AudioPlaylist from "./AudioPlaylist";
import AudioNowPlaying from "@/components/audio-player/AudioNowPlaying";
import { MusicNotesSimple, X } from "@phosphor-icons/react";
import "@/styles/audio-player.css";

export default function AudioPlayer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleAudioPlayer = () => {
    setIsVisible((prevState: boolean) => !prevState);
  };

  return (
    <>
      <div
        className={`card rounded-xl shadow-lg min-w-60 w-full mx-auto px-2 ${
          isVisible ? "visible" : ""
        }`}
      >
        <AudioNowPlaying />
        <AudioPlaylist />
        <AudioControls />
      </div>
      <div className="toggle-container">
        <button
          onClick={toggleAudioPlayer}
          className="toggle-btn text-xs md:text-sm mb-4 subpixel-antialiased"
        >
          {isVisible ? (
            <X weight="regular" size={40} />
          ) : (
            <MusicNotesSimple weight="regular" size={40} />
          )}
          <label className="toggle-label">
            {isVisible ? "Hide Player" : "Show Audio Player"}
          </label>
        </button>
      </div>
    </>
  );
}
