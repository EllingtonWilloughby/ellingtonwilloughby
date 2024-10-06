'use client';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';
import Albums from '@/music/albums/Albums';

export default function MusicPage() {
  return (
    <div className="page min-h-full w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto p-4">
      <section className="relative min-h-24 w-full flex justify-center items-center p-4">
        <div className="home-link-container">
          <Link href="/" className="home-link">
            <House weight="duotone" size={32} />
            <div className="home-link-label">Home</div>
          </Link>
        </div>
        <div className="w-full flex justify-around items-center">
          <h2 className="page-title">Music</h2>
        </div>
      </section>

      <section className="w-full">
        <Albums />
      </section>
    </div>
  );
}
