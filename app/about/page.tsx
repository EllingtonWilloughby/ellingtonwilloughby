'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { House } from '@phosphor-icons/react';
import AboutModal from './AboutModal';
import Musicians from './Musicians';
export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (currentOpenState: boolean) => {
    setIsOpen(!currentOpenState);
  };

  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="w-full relative max-h-40">
        <div className="link-container relative flex flex-col justify-center items-center p-2">
          <Link href="/" className="absolute top-4 left-0">
            <House weight="duotone" size={24} />
          </Link>
          <span className="link-label absolute top-2 left-5">Home</span>
        </div>
        <h2 className="font-normal text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          About
        </h2>
      </section>

      <section className="border-2 border-pink-600 w-full flex flex-col justify-evenly items-center flex-auto p-6">
        <p className="text-center leading-7 text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased p-6">
          Ellington Willoughby & the Mythical Squid is a psychedelic-pop band
          from SE Portland, Oregon.
        </p>

        <p className="text-center leading-7 text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased p-6">
          Funky Grooves to accompany you on a journey that is both far out &
          close to home.
        </p>
        <button
          type="button"
          onClick={() => toggleModal(isOpen)}
          aria-label="Find out more about the band"
          className="text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased rounded-lg hover:cursor-pointer"
        >
          Find out more
        </button>
      </section>

      <div className="border-2 border-pink-600 p-8 rounded-lg backdrop-saturate-50 drop-shadow-lg max-w-screen-sm mx-auto backdrop-blur-xl">
        <Musicians />
      </div>
      <div className="border-2 border-pink-600 ">
        <AboutModal isOpen={isOpen} onClose={() => toggleModal(isOpen)} />
      </div>
    </div>
  );
}
