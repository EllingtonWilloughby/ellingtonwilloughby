import { useAudioContext } from "@/contexts/AudioContext";
import { playlist } from "@/data";
import { ISong } from "@/lib/types";
import "@/styles/audio-playlist.css";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  return (
    <div className="flex flex-col justify-start items-center">
      <ul className="list-none p-2">
        {playlist.map((track: ISong, index: number) => (
          <li
            key={track.id}
            className={`${currentIndex === index ? "active" : ""}`}
          >
            <button
              className="text-xs md:text-sm subpixel-antialiased"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} | {track.album} | {track.artist}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
