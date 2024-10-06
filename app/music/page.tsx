'use client';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';
import Albums from '@/music/albums/Albums';

export default function MusicPage() {
  return (
    <div className="min-h-full w-full sm:max-w-96 md:max-w-screen-sm lg:max-w-screen-md mx-auto">
      <section className="relative max-h-40 w-full">
        <Link href="/" className="home-link-container absolute top-4 left-4">
          <House weight="duotone" size={32} />
          <div className="home-link-label">Home</div>
        </Link>
        <h2 className="min-h-20 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-12">
          Music
        </h2>
      </section>

      <section className="w-full max-w-screen-md mx-auto">
        <Albums />
      </section>
    </div>
  );
}
