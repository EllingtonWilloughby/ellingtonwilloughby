'use client';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';
import Albums from '@/music/albums/Albums';

export default function MusicPage() {
  return (
    <div className="relative h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col justify-start items-center text-center z-10 p-4">
      <section className="relative min-h-24 w-full flex justify-center items-center p-4">
        <div className="home-link-container">
          <Link href="/" className="home-link">
            <House weight="duotone" size={32} />
            <div className="home-link-label">Home</div>
          </Link>
        </div>
        <div className="w-full flex justify-around items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl subpixel-antialiased">
            Music
          </h2>
        </div>
      </section>

      <section className="w-full">
        <Albums />
      </section>
    </div>
  );
}
