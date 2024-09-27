import { INowPlaying } from '../lib/types';

export default function NowPlaying({
  isPlaying,
  currentSong,
  elapsedTime
}: INowPlaying) {
  return (
    <div className="max-w-screen-sm w-full mt-2 md:mt-6">
      <div
        className="song h-10 pt-4 text-center text-lg leading-6 font-normal subpixel-antialiased"
        aria-live="polite"
      >
        {elapsedTime !== '00:00' && currentSong?.title ? (
          <>
            {currentSong.title} | {elapsedTime} of{' '}
            {currentSong.duration || 'N/A'}
            {!isPlaying && ' (Paused)'}
          </>
        ) : null}
      </div>
    </div>
  );
}
