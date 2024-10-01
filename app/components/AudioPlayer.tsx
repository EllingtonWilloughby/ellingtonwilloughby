import useAudio from '../hooks/useAudio';
import { playlist } from '../data';
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerSimpleSlash,
  SpeakerSimpleX
} from '@phosphor-icons/react';
import { ChangeEvent } from 'react';

export default function AudioPlayer() {
  const {
    playing,
    mute,
    currentIndex,
    currentTime,
    duration,
    volume,
    togglePlay,
    toggleMute,
    previousSong,
    nextSong,
    setVolume
  } = useAudio();

  const currentSong = playlist[currentIndex];
  return (
    <section className="max-w-screen-sm mx-auto w-full relative flex flex-col justify-center items-center p-2">
      {playing && (
        <div className="text-center text-base md:text-lg font-semibold subpixel-antialiased p-2">
          {`Now Playing: ${currentSong.title}`}
        </div>
      )}
      <div className="w-full flex justify-between items-center p-2">
        <div className="link-container">
          <button onClick={togglePlay}>
            {playing ? (
              <Pause weight="duotone" size="24" />
            ) : (
              <Play weight="duotone" size="24" />
            )}
          </button>
          <label className="link-label">{playing ? 'Pause' : 'Play'}</label>
        </div>

        <div className="link-container">
          <button onClick={previousSong}>
            <SkipBack weight="duotone" size="24" />
          </button>
          <label className="link-label">Previous</label>
        </div>

        <div className="link-container">
          <button onClick={nextSong}>
            <SkipForward weight="duotone" size="24" />
          </button>
          <label className="link-label">Next</label>
        </div>

        <div className="link-container">
          <button onClick={toggleMute}>
            {mute ? (
              <SpeakerSimpleX weight="duotone" size="24" />
            ) : (
              <SpeakerSimpleSlash weight="duotone" size="24" />
            )}
          </button>
          <label className="link-label">{mute ? 'Unmute' : 'Mute'}</label>
        </div>

        <div className="link-container">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setVolume(parseFloat(e.target.value))
            }
          />
          <label className="link-label">Volume</label>
        </div>
      </div>

      <div className="w-full p-2">
        {playing && (
          <div className="text-center text-base md:text-lg font-semibold subpixel-antialiased p-2">
            {`${currentTime} / ${duration}`}
          </div>
        )}
      </div>
    </section>
  );
}
