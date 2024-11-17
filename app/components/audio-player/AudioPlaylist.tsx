import { useAudioContext } from "@/contexts/AudioContext";
import { playlist } from "@/lib/playlist";
import { ISong } from "@/lib/types";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <ul className="list-none p-2 w-1/2">
        {playlist.map((track: ISong, index: number) => (
          <li
            key={track.id}
            className={`${currentIndex === index ? "active" : ""}`}
          >
            <button
              className="max-w-fit w-full flex justify-between text-xs md:text-sm subpixel-antialiased"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.id}. {track.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
