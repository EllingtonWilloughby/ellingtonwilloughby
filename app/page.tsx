'use client';
import AudioPlayer from '@/components/AudioPlayer';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-screen-xl mx-auto p-4 z-10">
      <Header />
      <Logo />
      <AudioPlayer />
    </div>
  );
}
