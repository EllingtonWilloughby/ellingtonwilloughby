'use client';
import React from 'react';
import Link from 'next/link';
import { House } from '@phosphor-icons/react';

export default function ShowsPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="relative w-full flex flex-col justify-start items-center flex-1 max-h-40">
        <div className="link-container absolute top-0 left-0 flex flex-col justify-center items-center p-2">
          <Link href="/" className="">
            <House weight="duotone" size={24} />
          </Link>
          <span className="link-label">Home</span>
        </div>
        <h2 className="text-center font-normal text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Shows
        </h2>
      </section>

      <div className="w-full max-w-screen-sm mx-auto m-10 flex justify-center items-center">
        Coming Soon...
      </div>
    </div>
  );
}
