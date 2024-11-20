import { useAudioContext } from "@/contexts/AudioContext";
import { playlist } from "@/lib/playlist";
import { ISong } from "@/lib/types";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <h3 className="text-lg subpixel-antialiased underline">Playlist</h3>
      <p>Select a song to start playing it.</p>
      <ul className="list-none p-2 w-1/2">
        {playlist.map((track: ISong, index: number) => (
          <li
            key={track.id}
            className={`${currentIndex === index ? "active" : ""}`}
          >
            <button
              className="max-w-fit w-full flex justify-between text-sm subpixel-antialiased hover:scale-105"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.id}.{"  "}
              <p className="text-sm underline underline-offset-2 subpixel-antialiased">
                {track.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
