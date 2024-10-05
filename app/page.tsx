import AudioPlayer from '@/components/audio-player/AudioPlayer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="min-h-full w-full sm:max-w-96 md:max-w-screen-sm lg:max-w-screen-md mx-auto">
      <section className="h-full max-w-screen-md lg:max-w-screen-md mx-auto flex flex-col justify-between items-center flex-auto">
        <Header />
        <Logo />
        <AudioPlayer />
      </section>
    </div>
  );
}
