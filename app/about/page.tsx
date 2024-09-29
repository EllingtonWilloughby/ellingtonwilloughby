'use client';
import React, { useState } from 'react';
import AboutModal from '@/components/AboutModal';
import { members } from '@/data';
export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (currentOpenState: boolean) => {
    setIsOpen(!currentOpenState);
  };

  return (
    <div className="relative min-h-screen max-w-screen-xl mx-auto p-2 grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
      <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">
        About
      </h2>
      <div className="col-start-1 col-span-3 row-start-2 row-span-1 container flex flex-col justify-center items-center">
        <h3 className="text-center font-semibold subpixel-antialiased p-2">
          Ellington Willoughby & the Mythical Squid is a psychedelic-pop band
          from SE Portland, Oregon.
        </h3>

        <h3 className="text-center font-semibold subpixel-antialiased p-2">
          Funky Grooves to accompany you on a journey that is both far out &
          close to home.
        </h3>
        <button
          type="button"
          onClick={() => toggleModal(isOpen)}
          aria-label="Find out more about the band"
          className=""
        >
          Find out more
        </button>
      </div>
      <div className="col-start-2 col-span-1 row-start-3 row-span-1 container">
        <h2 className="text-center font-semibold subpixel-antialiased p-2">
          Members
        </h2>
        {members.map(
          (musician: { name: string; instruments: string }, index: number) => (
            <div className="card" key={index}>
              <h4 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold subpixel-antialiased">
                {musician.name}
              </h4>
              <h5 className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-normal subpixel-antialiased">
                {musician.instruments}
              </h5>
            </div>
          )
        )}

        <AboutModal isOpen={isOpen} onClose={() => toggleModal(isOpen)} />
      </div>
    </div>
  );
}
