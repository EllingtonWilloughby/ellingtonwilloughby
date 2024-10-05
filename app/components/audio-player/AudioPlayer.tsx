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
    <div className="relative min-h-28 w-full sm:max-w-96 sm:mx-auto md:max-w-screen-sm lg:max-w-screen-md md:mx-auto">
      <section className="min-h-16 h-full w-full text-center">
        {playback && (
          <div className="now-playing">
            <span className="text-center text-sm md:text-base subpixel-antialiased">
              {`Current song: ${song.title}`}
            </span>
            <br />
            <div className="text-center text-sm md:text-base subpixel-antialiased">
              {`${elapsedTime} / ${duration}`}
            </div>
          </div>
        )}
      </section>

      <section className="min-h-28 w-full flex justify-evenly items-center">
        <div className="control-card">
          <button onClick={handlePlay}>
            {playback ? (
              <Pause weight="duotone" className="player-icon" />
            ) : (
              <Play weight="duotone" className="player-icon" />
            )}
          </button>
          <label className="control-label">{playback ? 'Pause' : 'Play'}</label>
        </div>

        <div className="control-card">
          <button onClick={handlePreviousSong}>
            <SkipBack weight="duotone" className="player-icon" />
          </button>
          <label className="control-label">Previous</label>
        </div>

        <div className="control-card">
          <button onClick={handleNextSong}>
            <SkipForward weight="duotone" className="player-icon" />
          </button>
          <label className="control-label">Next</label>
        </div>

        <div className="control-card">
          <button onClick={handleMuteToggle}>
            {muted ? (
              <SpeakerSimpleX weight="duotone" className="player-icon" />
            ) : (
              <SpeakerSimpleSlash weight="duotone" className="player-icon" />
            )}
          </button>
          <label className="control-label">{muted ? 'Unmute' : 'Mute'}</label>
        </div>

        <div className="control-card vol">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
          />
          <label className="control-label vol-label">Volume</label>
        </div>
      </section>
    </div>
  );
}
