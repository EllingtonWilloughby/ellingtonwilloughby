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
    <div className="max-w-screen-sm mx-auto w-full container relative flex flex-col justify-center items-center p-2">
      <h4 className="text-center text-base md:text-lg font-semibold subpixel-antialiased p-2">
        {`Now Playing: ${currentSong.title}`}
      </h4>
      <div className="w-full flex justify-between items-center p-2">
        <label htmlFor="playpause">{playing ? 'Pause' : 'Play'}</label>
        <button onClick={togglePlay}>
          {playing ? (
            <Pause weight="duotone" size="36" />
          ) : (
            <Play weight="duotone" size="36" />
          )}
        </button>

        <label htmlFor="back">Skip Back</label>
        <button onClick={previousSong}>
          <SkipBack weight="duotone" size="36" />
        </button>

        <label htmlFor="forward">Skip Forward</label>
        <button id="" name="" onClick={nextSong}>
          <SkipForward weight="duotone" size="36" />
        </button>

        <label htmlFor="mute">Click to Mute</label>
        <button id="mute" name="mute" onClick={toggleMute}>
          {mute ? <SpeakerSimpleX /> : <SpeakerSimpleSlash />}
        </button>

        <label htmlFor="volume">Volume: {Math.round(volume * 100)}%</label>
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
      </div>

      <section className="">
        <div className="">{currentTime}</div> / <div className="">{duration}</div>
        
      </section>
    </div>
  );
}
