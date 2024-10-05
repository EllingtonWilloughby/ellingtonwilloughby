'use client';
import useAudio from '@/hooks/useAudio';
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerSimpleSlash,
  SpeakerSimpleX
} from '@phosphor-icons/react';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const {
    song,
    playback,
    volume,
    muted,
    elapsedTime,
    duration,
    handlePlay,
    handleVolumeChange,
    handleMuteToggle,
    handlePreviousSong,
    handleNextSong
  } = useAudio();

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange(event);
  };

  return (
    <div className="relative min-h-60 w-full max-w-screen-md mx-auto p-2">
      <section className="min-h-32 w-full text-center flex flex-col items-center justify-end m-4">
        {playback && (
          <div className="now-playing">
            <span className="text-center text-base md:text-lg subpixel-antialiased">
              {`Current song: ${song.title}`}
            </span>
            <br />
            <div className="text-center text-base md:text-lg font-semibold subpixel-antialiased">
              {`${elapsedTime} / ${duration}`}
            </div>
          </div>
        )}
      </section>

      <section className="min-h-28 w-full flex justify-evenly items-center">
        <div className="link-container">
          <button onClick={handlePlay}>
            {playback ? (
              <Pause weight="duotone" className="player-icon" />
            ) : (
              <Play weight="duotone" className="player-icon" />
            )}
          </button>
          <label className="link-label">{playback ? 'Pause' : 'Play'}</label>
        </div>

        <div className="link-container">
          <button onClick={handlePreviousSong}>
            <SkipBack weight="duotone" className="player-icon" />
          </button>
          <label className="link-label">Previous</label>
        </div>

        <div className="link-container">
          <button onClick={handleNextSong}>
            <SkipForward weight="duotone" className="player-icon" />
          </button>
          <label className="link-label">Next</label>
        </div>

        <div className="link-container">
          <button onClick={handleMuteToggle}>
            {muted ? (
              <SpeakerSimpleX weight="duotone" className="player-icon" />
            ) : (
              <SpeakerSimpleSlash weight="duotone" className="player-icon" />
            )}
          </button>
          <label className="link-label">{muted ? 'Unmute' : 'Mute'}</label>
        </div>

        <div className="link-container vol">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
          />
          <label className="link-label vol-link">Volume</label>
        </div>
      </section>
    </div>
  );
}
