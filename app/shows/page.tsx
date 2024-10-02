'use client';
import React from 'react';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';

export default function ShowsPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="relative max-h-40 w-full">
        <Link href="/" className="link-container absolute top-4 left-4">
          <House weight="duotone" size={24} />
          <span className="link-label absolute top-4 left-6">Home</span>
        </Link>
        <h2 className="min-h-20 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-10">
          Shows
        </h2>
      </section>

      <div className="w-full max-w-screen-sm mx-auto m-10 flex justify-center items-center">
        Coming Soon...
      </div>
    </div>
  );
}
