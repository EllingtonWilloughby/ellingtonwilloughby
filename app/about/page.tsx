'use client'
import Link from 'next/link';
import { useState } from 'react'
import About from '../../public/images/about.svg'
import Aboutdk from '../../public/images/about_dk.svg'
import OriginModal from '../components/OriginModal';
import Image from 'next/image';
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
    <div className="relative h-screen w-screen max-w-screen-lg mx-auto flex flex-col items-center justify-start p-10 m-4">
      {darkMode
        ? (<Image src={Aboutdk} height={500} width={500} alt="about heading" className="-mt-20 -mb-20" />)
          : (<Image src={About} height={500} width={500} alt="about heading" className="-mt-20 -mb-20" />)
      }

        <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased mt-8">Ellington Willoughby and the Mythical Squid is a psychedelic-pop six piece band from SE Portland, Oregon.
        </p>

        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased py-2">
          Funky Grooves back singer-songwriter melodies to take you on a genre bending journey that is as far out as it is close to home. The arrival is unexpected.
        </p>

        <p className="text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased py-2">
          Live shows are local to Oregon, and are put on every couple of months with the intention of creating a space for people to let loose and have fun. They occur in a variety of venues, from house shows to festivals, and are always a good time.
        </p>

        <div className="flex flex-col items-center mt-12">
          <p className="text-lg/7 subpixel-antialiased underline">Band Members</p>
          <p className="text-base/6 font-semibold">Tim Gottgetreu</p>
          <p className="text-base/6">vocals, piano, acoustic guitar, percussion</p>
          <p className="text-base/6 font-semibold">Jason Gottgetreu</p>
          <p className="text-base/6">drums, percussion, synthesizer</p>
          <p className="text-base/6 font-semibold">Joshua Cloudt</p>
          <p className="text-base/6">electric guitar, pedal board</p>
          <p className="text-base/6 font-semibold">Jonathan Boyette</p>
          <p className="text-base/6">electric guitar, organ</p>
          <p className="text-base/6 font-semibold">Dan Miller</p>
          <p className="text-base/6">bass</p>
          <p className="text-base/6 font-semibold">Adam Robson</p>
          <p className="text-base/6">drums, trumpet</p>
        </div>
        <button onClick={openModal} className="mt-8 bg-black text-white p-2 rounded-lg">Origin Story</button>

        <div className="w-full h-full">
          <OriginModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
      </div>

  );
}
