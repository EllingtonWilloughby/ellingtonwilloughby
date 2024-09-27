import { NowPlayingPropTypes } from '@/app/lib/types';

export default function NowPlaying({
  isPlaying,
  currentSong,
  elapsedTime
}: NowPlayingPropTypes) {
  const displayText =
    elapsedTime !== '00:00'
      ? `${currentSong.title} | ${elapsedTime} of ${currentSong.duration}${
          isPlaying ? '' : ' (Paused)'
        }`
      : '';

  return (
    <section>
      {displayText && (
        <div className="bg-black/50 text-white px-6 py-4 rounded-md shadow-lg text-center max-w-80 mx-auto my-4">
          {displayText && (
            <h3 className="text-lg sm:text-xl font-semibold py-4">
              {displayText}
            </h3>
          )}
        </div>
      )}
    </section>
  );
}
