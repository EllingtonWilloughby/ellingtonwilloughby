'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OriginModal from '../components/OriginModal';
import { useDarkMode } from '@/app/lib/context/ColorSchemeContext';
import { PiHouseFill } from 'react-icons/pi';

export default function AboutPage() {
  const { darkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="relative min-h-screen w-full max-w-screen-lg mx-auto flex flex-col items-center justify-start p-6">
      {darkMode ? (
        <Image
          src="/images/about_dk.svg"
          height={500}
          width={500}
          alt="about heading"
          className="-mt-20 -mb-20 pt-6"
        />
      ) : (
        <Image
          src="/images/about.svg"
          height={500}
          width={500}
          alt="about heading"
          className="-mt-20 -mb-20 pt-6"
        />
      )}

      <Link href="/" className="absolute top-8 left-8 text-sm">
        <PiHouseFill size={24} />
      </Link>

      <div className="container flex flex-col justify-start items-center">
        <p className="text-center text-base/4 sm:text-lg/5 md:text-xl/6 subpixel-antialiased mt-8 px-2">
          Ellington Willoughby and the Mythical Squid is a psychedelic-pop band
          from SE Portland, Oregon.
        </p>
        <p className="text-center text-base/4 sm:text-lg/5 md:text-xl/6 subpixel-antialiased my-8 px-6">
          Funky Grooves to accompany you on a journey that is both far out &
          close to home.
        </p>

        <span
          onClick={openModal}
          className="text-sm/5 sm:text-base/6 md:text-lg/7 subpixel-antialiased py-2 underline p-2 rounded-lg"
        >
          Find out more
        </span>
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-xl/7 my-4 subpixel-antialiased">Members:</p>

        <div className="container">
          <p className="text-base/6 font-semibold text-center subpixel-antialiased">
            Tim Gottgetreu
          </p>
          <p className="text-sm/6 text-center subpixel-antialiased">
            vocals, piano, acoustic guitar, percussion
          </p>
        </div>
        <div className="container">
          <p className="text-base/6 font-semibold text-center subpixel-antialiased">
            Jason Gottgetreu
          </p>
          <p className="text-sm/6 text-center subpixel-antialiased">
            drums, percussion, synthesizer
          </p>
        </div>
        <div className="container">
          <p className="text-base/6 font-semibold text-center subpixel-antialiased">
            Joshua Cloudt
          </p>
          <p className="text-sm/6 text-center subpixel-antialiased">
            electric guitar, pedal board
          </p>
        </div>
        <div className="container">
          <p className="text-base/6 font-semibold text-center subpixel-antialiased">
            Jonathan Boyette
          </p>
          <p className="text-sm/6 text-center subpixel-antialiased">
            electric guitar, organ
          </p>
        </div>
        <div className="container">
          <p className="text-base/6 font-semibold text-center subpixel-antialiased">
            Dan Miller
          </p>
          <p className="text-sm/6 text-center subpixel-antialiased">bass</p>
        </div>
        <div className="container">
          <p className="text-base/6 font-semibold text-center subpixel-antialiased">
            Adam Robson
          </p>
          <p className="text-sm/6 text-center subpixel-antialiased">
            drums, trumpet
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <OriginModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}
