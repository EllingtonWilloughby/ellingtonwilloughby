import { useAudio } from "../../lib/hooks/useAudio";
import {
  PiPlayBold,
  PiPlayPauseBold,
  PiStopBold,
  PiSkipBackBold,
  PiSkipForwardBold,
  PiSpeakerXBold,
  PiSpeakerHighBold,
  PiSpeakerLowBold,
} from 'react-icons/pi'
import { useRef, useState } from "react";

export default function Audio() {
  const [isAdjusting, setIsAdjusting] = useState<boolean>(false);
  const volumeControlRef = useRef<HTMLDivElement>(null);

  const {
    elapsedTime,
    isPlaying,
    volume,
    setVolume,
    handlePlayPause,
    handleStop,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong,
  } = useAudio();

  return (
    <div className="relative right-4 max-w-screen-sm mx-auto w-full flex flex-col justify-center items-center px-24">
      

      <section  className="max-w-screen-sm w-full flex justify-between items-end pt-12">
        <button onClick={handlePlayPause}>
          {isPlaying ? <PiPlayPauseBold size={32} /> : <PiPlayBold size={32} />}
        </button>
        <button onClick={handleStop}><PiStopBold size={32} /></button>
        <button onClick={handlePrevSong}><PiSkipBackBold size={32} /></button>
        <button onClick={handleNextSong}><PiSkipForwardBold size={32} /></button>
        <button onClick={toggleMute}>
        {
          volume === 0 
            ? <PiSpeakerXBold size={32} />
            : volume < .75
              ? <PiSpeakerLowBold size={32} />
              : <PiSpeakerHighBold size={32} />
        }
        </button>
      </section>



      <section className="max-w-screen-sm absolute right-0 sm:right-6 md:right-16 lg:right-40 pb-2">
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

      <section className="max-w-screen-sm w-full mt-2 md:mt-6">
        <div className="h-10 py-4">{
          isPlaying 
            ? `Now Playing: ${currentSong.title}  |  ${elapsedTime} of ${currentSong.duration}`
            : elapsedTime !== '00:00' 
              ? `Current Song: ${currentSong.title} (Paused)  |  ${elapsedTime} of ${currentSong.duration}`
              : ''}</div>
      </section>
    </div>
  );
}
