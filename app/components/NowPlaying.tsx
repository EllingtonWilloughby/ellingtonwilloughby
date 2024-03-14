import { NowPlayingPropTypes } from '../../lib/types'

export default function NowPlaying({
  isPlaying,
  currentSong,
  elapsedTime }: NowPlayingPropTypes) {


  return (
    <div className="max-w-screen-sm w-full mt-2 md:mt-6">
      <div className="song h-10 pt-4 text-center text-lg/6 font-light subpixel-antialiased">
        {isPlaying
          ? `${currentSong.title} | ${elapsedTime} of ${currentSong.duration}`
            : elapsedTime !== '00:00'
              ? `${currentSong.title} | ${elapsedTime} of ${currentSong.duration} (Paused)`
                : ''}
        </div>
      </div>
  )
}
