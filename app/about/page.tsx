'use client'
import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import OriginModal from '../components/OriginModal';
import { useDarkMode } from '@/lib/context/ColorSchemeContext';
import { HomeRounded } from '@mui/icons-material';

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
    <div className="relative h-screen w-screen max-w-screen-lg mx-auto flex flex-col items-center justify-start p-10 m-4">
      {darkMode
        ? (<Image src="/images/about_dk.svg" height={500} width={500} alt="about heading" className="-mt-20 -mb-20" />)
        : (<Image src="/images/about.svg" height={500} width={500} alt="about heading" className="-mt-20 -mb-20" />)
      }

      <Link href="/" className="absolute top-8 left-8 text-sm"><HomeRounded /></Link>

      <p className="text-center text-sm/5 sm:text-base/6 md:text-lg/7 tracking-wide subpixel-antialiased mt-8">
        Ellington Willoughby & the Mythical Squid Portland, Oregon
      </p>


      <button onClick={openModal} className="mt-8 p-2">Origin Story</button>

        <div className="flex flex-col items-center mt-12">
          <p className="text-base/6 subpixel-antialiased mb-6">Members:</p>
          <p className="text-base/6 font-bold subpixel-antialiased">Tim Gottgetreu</p>
          <p className="text-base/6 mb-4 subpixel-antialiased">vocals, piano, acoustic guitar, percussion</p>
          <p className="text-base/6 font-bold subpixel-antialiased">Jason Gottgetreu</p>
          <p className="text-base/6 mb-4 subpixel-antialiased">drums, percussion, synthesizer</p>
          <p className="text-base/6 font-bold subpixel-antialiased">Joshua Cloudt</p>
          <p className="text-base/6 mb-4 subpixel-antialiased">electric guitar, pedal board</p>
          <p className="text-base/6 font-bold subpixel-antialiased">Jonathan Boyette</p>
          <p className="text-base/6 mb-4 subpixel-antialiased">electric guitar, organ, lap steel</p>
          <p className="text-base/6 font-bold subpixel-antialiased">Dan Miller</p>
          <p className="text-base/6 mb-4 subpixel-antialiased">bass</p>
          <p className="text-base/6 font-bold subpixel-antialiased ">Adam Robson</p>
          <p className="text-base/6 mb-4 subpixel-antialiased">drums, trumpet</p>
        </div>

        <div className="w-full h-full">
          <OriginModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
      </div>

  );
}
