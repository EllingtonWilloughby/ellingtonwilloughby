import AudioPlayer from '@/components/audio-player/AudioPlayer';
import Navigation from '@/components/Navigation';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="relative min-h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col justify-center items-center flex-1 text-center z-10 p-4">
      <section className="w-full h-full flex flex-col justify-between items-center flex-auto">
        <div className="w-full h-full flex flex-col justify-between items-center flex-auto">
          <header className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg min-h-12 p-4 mt-4">
            <Navigation />
          </header>
          <Logo />
          <div className="w-full mb-8">
            <AudioPlayer />
          </div>
        </div>
      </section>
    </div>
  );
}
