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
    <div className="relative min-h-40 w-full">
      <section className="min-h-28 w-full flex justify-evenly items-center">
        <div className=" control-card">
          <button
            className="control-button focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handlePlay}
            aria-label={playback ? 'Pause Song' : 'Play Song'}
          >
            {playback ? (
              <Pause weight="duotone" className="player-icon" />
            ) : (
              <Play weight="duotone" className="player-icon" />
            )}
          </button>
          <label className=" control-label">
            {playback ? 'Pause' : 'Play'}
          </label>
        </div>

        <div className="control-card">
          <button
            className="control-button focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handlePreviousSong}
            aria-label="Play Previous Song"
          >
            <SkipBack weight="duotone" className="player-icon" />
          </button>
          <label className="control-label">Previous</label>
        </div>

        <div className="control-card">
          <button
            className="control-button focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleNextSong}
            aria-label="Play Next Song"
          >
            <SkipForward weight="duotone" className="player-icon" />
          </button>
          <label className="control-label">Next</label>
        </div>

        <div className="control-card">
          <button
            className="control-button focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={handleMuteToggle}
            aria-label={muted ? 'Mute Audio' : 'Unmute Audio'}
          >
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
            aria-label="Adjust Volume"
          />
          <label className="control-label vol-label">Volume</label>
        </div>
      </section>
      <section className="min-h-16 h-full w-full text-center">
        {playback && (
          <div className="now-playing">
            <span className="text-center text-sm md:text-base font-semibold subpixel-antialiased">
              {`Current song: ${song.title}`}
            </span>
            <br />
            <div className="text-center text-sm md:text-base subpixel-antialiased">
              {`${elapsedTime} / ${duration}`}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
