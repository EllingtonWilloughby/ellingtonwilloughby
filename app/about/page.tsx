'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { House } from '@phosphor-icons/react';
import AboutModal from './AboutModal';
import Musicians from './Musicians';
import './About.css';
import './AboutModal.css';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (currentOpenState: boolean) => {
    setIsOpen(!currentOpenState);
  };

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
          <h2 className="page-title">About</h2>
        </div>
      </section>

      <section className="h-full w-full flex flex-col justify-start items-center flex-auto py-2 px-4 my-8">
        <div className="min-h-60 w-full flex flex-col justify-around items-center">
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased px-4 py-8">
            Ellington Willoughby & the Mythical Squid is a psychedelic-pop band
            from SE Portland, Oregon.
          </p>

          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl subpixel-antialiased p-2">
            Funky Grooves to accompany you on a journey that is both far out &
            close to home.
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            onClick={() => toggleModal(isOpen)}
            aria-label="Find out more about the band"
            className="modal-button text-sm md:text-base lg:text-lg subpixel-antialiased"
          >
            Find out more
          </button>
        </div>

        <div className="min-h-60 w-full">
          <Musicians />
        </div>
      </section>

      <div className="">
        <AboutModal isOpen={isOpen} onClose={() => toggleModal(isOpen)} />
      </div>
    </div>
  );
}
