'use client';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';

export default function ShowsPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="relative max-h-40 w-full">
        <Link href="/" className="link-container absolute top-4 left-4">
          <House weight="duotone" size={32} />
          <div className="link-label">Home</div>
        </Link>
        <h2 className="min-h-20 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Shows
        </h2>
      </section>
      <div className="w-full max-w-screen-md mx-auto flex flex-col justify-between items-center flex-auto p-12">
        Coming Soon...
      </div>
    </div>
  );
}
