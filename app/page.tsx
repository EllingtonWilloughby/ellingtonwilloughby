'use client';
import AudioPlayer from '@/components/audio-player/AudioPlayer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-screen-xl mx-auto z-10">
      <section className="h-full max-w-screen-sm lg:max-w-screen-md mx-auto w-full flex flex-col justify-between items-center flex-auto">
        <Header />
        <Logo />
        <div className="min-h-60 w-full p-2">
          <AudioPlayer />
        </div>
      </section>
    </div>
  );
}
