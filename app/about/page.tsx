'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { House } from '@phosphor-icons/react';
import AboutModal from './AboutModal';
import Musicians from './Musicians';
import './AboutModal.css';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (currentOpenState: boolean) => {
    setIsOpen(!currentOpenState);
  };

  return (
    <div className="border-2 border-blue-300 relative min-h-screen w-full max-w-screen-lg mx-auto p-6">
      <section className="relative max-h-40 w-full">
        <Link href="/" className="link-container absolute top-4 left-4">
          <House weight="duotone" size={32} />
          <div className="link-label">Home</div>
        </Link>
        <h2 className="min-h-20 w-full text-center text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Music
        </h2>
      </section>
      <section className="w-full max-w-screen-md mx-auto flex flex-col justify-between items-center flex-auto p-2"></section>

      <section className="w-full max-w-screen-md mx-auto flex flex-col justify-start items-center flex-auto py-2 px-4">
        <div className="min-h-60 w-full flex flex-col justify-between items-center">
          <p className="text-center leading-7 text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased p-2">
            Ellington Willoughby & the Mythical Squid is a psychedelic-pop band
            from SE Portland, Oregon.
          </p>

          <p className="text-center leading-7 text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Funky Grooves to accompany you on a journey that is both far out &
            close to home.
          </p>
          <button
            type="button"
            onClick={() => toggleModal(isOpen)}
            aria-label="Find out more about the band"
            className="find-out-more text-base md:text-lg lg:text-xl subpixel-antialiased"
          >
            Find out more
          </button>
        </div>

        <div className="min-h-72 w-full">
          <Musicians />
        </div>
      </section>

      <div className="">
        <AboutModal isOpen={isOpen} onClose={() => toggleModal(isOpen)} />
      </div>
    </div>
  );
}
