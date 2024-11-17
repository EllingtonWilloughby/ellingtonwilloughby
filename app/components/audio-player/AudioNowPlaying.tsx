import React from "react";
import { useAudioContext } from "@/contexts/AudioContext";

export default function AudioNowPlaying() {
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};

  return (
    <section className="flex flex-col items-center justify-center w-full text-center min-h-24">
      {playback && (
        <article className="subpixel-antialiased">
          <div className={`text-sm sm:text-base md:text-lg lg:text-xl`}>
            {song?.title}
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg">
            {elapsed} / {duration}
          </div>
        </article>
      )}
    </section>
  );
}
