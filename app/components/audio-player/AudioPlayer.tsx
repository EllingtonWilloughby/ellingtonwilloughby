import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerSimpleSlash,
  SpeakerSimpleX
} from '@phosphor-icons/react';
import useAudio from '@/hooks/useAudio';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const {
    song,
    playback,
    volume,
    muted,
    duration,
    displayTime,
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
    <div className="relative w-full max-w-screen-md mx-auto flex flex-col flex-auto">
      <section className="w-full text-center">
        <div className="min-h-28 w-full text-center">
          {playback && (
            <span className="text-center text-base md:text-lg subpixel-antialiased">
              {`Current song: ${song.title}`}
            </span>
          )}
          <br />
          {playback && (
            <span className="text-center text-base md:text-lg subpixel-antialiased">
              {`${displayTime} / ${duration}`}
            </span>
          )}
        </div>
      </section>

      <section className="w-full flex justify-evenly items-center">
        <div className="link-container">
          <button onClick={handlePlay}>
            {playback ? (
              <Pause weight="duotone" size="24" className="player-icon" />
            ) : (
              <Play weight="duotone" size="24" className="player-icon" />
            )}
          </button>
          <label className="link-label">{playback ? 'Pause' : 'Play'}</label>
        </div>

        <div className="link-container">
          <button onClick={handlePreviousSong}>
            <SkipBack weight="duotone" size="24" className="player-icon" />
          </button>
          <label className="link-label">Previous</label>
        </div>

        <div className="link-container">
          <button onClick={handleNextSong}>
            <SkipForward weight="duotone" size="24" className="player-icon" />
          </button>
          <label className="link-label">Next</label>
        </div>

        <div className="link-container">
          <button onClick={handleMuteToggle}>
            {muted ? (
              <SpeakerSimpleX
                weight="duotone"
                size="24"
                className="player-icon"
              />
            ) : (
              <SpeakerSimpleSlash
                weight="duotone"
                size="24"
                className="player-icon"
              />
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
