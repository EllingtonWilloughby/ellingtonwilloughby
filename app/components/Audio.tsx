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
    currentSongIndex,
    isPlaying,
    volume,
    handlePlay,
    handlePause,
    handleStop,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong,
  } = useAudio();

  return (
     <div>
      <h2>{currentSong.title}</h2>
      <p>Duration: {currentSong.duration} seconds</p>
      <div>
        <button onClick={handlePrevSong}><PiSkipBackBold /></button>
        <button onClick={isPlaying ? handlePause : handlePlay}>
          {isPlaying ? <PiPauseBold /> : <PiPlayBold />}
        </button>
        <button onClick={handleStop}><PiStopBold /></button>
        <button onClick={handleNextSong}><PiSkipForwardBold /></button>
      </div>
      <div>
        <label htmlFor="volume">Volume:</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <button onClick={toggleMute}>
          {volume === 0 ? <PiSpeakerXBold /> : <PiSpeakerHighBold />}
        </button>
      </div>
    </div>
  );
}
