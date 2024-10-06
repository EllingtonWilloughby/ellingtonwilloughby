import AudioPlayer from '@/components/audio-player/AudioPlayer';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="page min-h-full w-full max-w-screen-lg mx-auto px-4">
      <section className="w-full h-full flex flex-col justify-between items-center flex-auto">
        <header className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg min-h-12 p-4 mt-4">
          <Navigation />
        </header>
        <Logo />
        <div className="w-full mb-8">
          <AudioPlayer />
        </div>
      </section>
    </div>
  );
}
