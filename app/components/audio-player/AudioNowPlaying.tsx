import React from "react";
import { useAudioContext } from "@/contexts/AudioContext";

export default function AudioNowPlaying() {
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};

  return (
    <section className="flex flex-col items-center justify-center w-full text-center min-h-20 text-base subpixel-antialiased">
      {song ? (
        <>
          <h2 className="text-lg subpixel-antialiased">
            {song.title || "Unknown Title"}
          </h2>
          <p className="text-base subpixel-antialiased">
            {song.artist || "Unknown Artist"}
          </p>
          <p className="text-base subpixel-antialiased">
            Status: {playback ? "Playing" : "Paused"}
          </p>
        </>
      ) : (
        <p>No loaded song.</p>
      )}
      <div className="text-xs sm:text-sm md:text-base lg:text-lg">
        {elapsed} / {duration}
      </div>
    </section>
  );
}
