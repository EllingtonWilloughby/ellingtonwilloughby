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
    <div className="w-full flex flex-col justify-center items-center px-24 mb-12 py-12">
      <p className="py-2">Current Song: {currentSong.title}, {currentSong.duration}</p>
      <section  className="max-w-lg w-full flex justify-between py-2">
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
