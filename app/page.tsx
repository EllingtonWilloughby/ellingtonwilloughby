'use client';
import AudioPlayer from '@/components/AudioPlayer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="container min-h-screen w-full max-w-screen-xl p-4">
      <Header />
      <Logo />
      <AudioPlayer />
    </div>
  );
}
