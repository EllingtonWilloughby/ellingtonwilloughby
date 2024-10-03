'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OriginStoryModal from '../components/OriginStoryModal';
import { useColorSchemeContext } from '@/app/lib/context/ColorSchemeContext';
import { PiHouseFill } from 'react-icons/pi';

export default function AboutPage() {
  const { colorScheme } = useColorSchemeContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const aboutImage = colorScheme ? '/images/about_dk.svg' : '/images/About.svg';
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const members = [
    {
      name: 'Tim Gottgetreu',
      instruments: 'vocals, piano, acoustic guitar, percussion'
    },
    { name: 'Jason Gottgetreu', instruments: 'drums, percussion, synthesizer' },
    { name: 'Joshua Cloudt', instruments: 'electric guitar, pedal board' },
    { name: 'Jonathan Boyette', instruments: 'electric guitar, organ' },
    { name: 'Dan Miller', instruments: 'bass' },
    { name: 'Adam Robson', instruments: 'drums, trumpet' }
  ];

  return (
    <div className="relative min-h-screen w-full max-w-screen-lg mx-auto flex flex-col items-center justify-start p-6">
      <Image
        src={aboutImage}
        height={500}
        width={500}
        alt="about heading"
        className="-mt-20 -mb-20 pt-6"
      />

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

        <button
          type="button"
          aria-label="find out more about the band"
          onClick={openModal}
          className="text-sm/5 sm:text-base/6 md:text-lg/7 subpixel-antialiased py-2 underline p-2 rounded-lg"
        >
          Find out more
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-xl my-4 subpixel-antialiased">Members:</p>
        {members.map((member: { name: string; instruments: string }, index) => (
          <div className="container" key={index}>
            <p className="text-base font-semibold text-center subpixel-antialiased">
              {member.name}
            </p>
            <p className="text-sm text-center subpixel-antialiased">
              {member.instruments}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-full">
        <OriginStoryModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
}
