import AudioPlayer from '@/components/audio-player/AudioPlayer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="page min-h-full w-full max-w-screen-lg mx-auto px-4">
      <section className="border-2 border-cyan-700 w-full h-full flex flex-col justify-between items-center flex-auto">
        <header className="border-4 border-cyan-700 w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg min-h-12 p-4">
          <Header />
        </header>
        <Logo />
        <div className="w-full border-2 border-cyan-700 mb-8">
          <AudioPlayer />
        </div>
      </section>
    </div>
  );
}
