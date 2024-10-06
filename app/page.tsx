import AudioPlayer from '@/components/audio-player/AudioPlayer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="page min-h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
      <section className="h-full flex flex-col justify-between items-center flex-auto">
        <Header />
        <Logo />
        <AudioPlayer />
      </section>
    </div>
  );
}
