import { useAudio } from "../hooks/useAudio";
import {
  PiPlayBold,
  PiPauseBold,
  PiStopBold,
  PiSkipBackBold,
  PiSkipForwardBold,
  PiSpeakerXBold,
  PiSpeakerHighBold
} from 'react-icons/pi'

export default function Audio() {
  const {
    elapsedTime,
    isPlaying,
    volume,
    togglePlayPause,
    handleStop,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong,
  } = useAudio();

  return (
    <div className="w-full flex flex-col justify-center items-center px-24 mb-12">
      <section className="max-w-md w-full min-h-full h-full flex justify-between items-center">
        <div className="py-2 h-8">{isPlaying ? `Now Playing: ${currentSong.title}` : ''}</div>
        <div className="py-2 h-8">{isPlaying ? `${elapsedTime} of ${currentSong.duration}` : ''}</div>
      </section>
      <section  className="max-w-md w-full flex justify-between py-2">
        <button onClick={togglePlayPause}>
          {isPlaying ? <PiPauseBold size={32} /> : <PiPlayBold size={32} />}
        </button>
        <button onClick={handleStop}><PiStopBold size={32} /></button>
        <button onClick={handlePrevSong}><PiSkipBackBold size={32} /></button>
        <button onClick={handleNextSong}><PiSkipForwardBold size={32} /></button>
        <button onClick={toggleMute}>
        {volume === 0 ? <PiSpeakerXBold size={32} /> : <PiSpeakerHighBold size={32} />}
        </button>
        <label htmlFor="volume"></label>
        <input
          type="range"
          id="volume"
          name="volume"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
        />
      </section>
    </div>
  );
}
