'use client'
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import OriginModal from '../components/OriginModal';
import { useDarkMode } from '@/lib/context/ColorSchemeContext';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { darkMode } = useDarkMode();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="relative h-screen w-screen max-w-screen-lg mx-auto flex flex-col items-center justify-start p-12 m-6">
      {darkMode
        ? (<Image src="/images/about_dk.svg" height={500} width={500} alt="about heading" className="-mt-20 -mb-20" />)
          : (<Image src="/images/about.svg" height={500} width={500} alt="about heading" className="-mt-20 -mb-20" />)
      }

      <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>

      <div className="container flex flex-col justify-center items-evenly">
        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased mt-8">Ellington Willoughby and the Mythical Squidis a six-person psychedelic-pop band from SE Portland, Oregon.
        </p>

        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased py-2">
          The Funky Grooves that back singer-songwriter melodies take you on a journey that is as far out as it is close to home.
      </p>

        <button onClick={openModal} className="text-sm/5 sm:text-base/6 md:text-lg/7 subpixel-antialiased py-2 underline p-w rounded-lg">
          Find out more
        </button>
      </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-lg/7 subpixel-antialiased">Members:</p>

          <div className="container">
            <p className="text-base/6 font-semibold text-center subpixel-antialiased">Tim Gottgetreu</p>
            <p className="text-sm/6 text-center subpixel-antialiased">vocals, piano, acoustic guitar, percussion</p>
          </div>

          <div className="container">
            <p className="text-base/6 font-semibold text-center subpixel-antialiased">Jason Gottgetreu</p>
            <p className="text-sm/6 text-center subpixel-antialiased">drums, percussion, synthesizer</p>
          </div>

          <div className="container">
            <p className="text-base/6 font-semibold text-center subpixel-antialiased">Joshua Cloudt</p>
            <p className="text-sm/6 text-center subpixel-antialiased">electric guitar, pedal board</p>
          </div>

          <div className="container">
            <p className="text-base/6 font-semibold text-center subpixel-antialiased">Jonathan Boyette</p>
            <p className="text-sm/6 text-center subpixel-antialiased">electric guitar, organ</p>
          </div>

          <div className="container">
            <p className="text-base/6 font-semibold text-center subpixel-antialiased">Dan Miller</p>
            <p className="text-sm/6 text-center subpixel-antialiased">bass</p>
          </div>

          <div className="container">
            <p className="text-base/6 font-semibold text-center subpixel-antialiased">Adam Robson</p>
            <p className="text-sm/6 text-center subpixel-antialiased">drums, trumpet</p>
          </div>
        </div>

        <div className="w-full h-full">
          <OriginModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
      </div>

  );
}
