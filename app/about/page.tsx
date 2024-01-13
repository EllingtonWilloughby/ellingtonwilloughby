'use client'
import Link from 'next/link';
import { useState } from 'react'
import { PiXBold } from 'react-icons/pi';
import OriginModal from '../components/OriginModal';

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="relative h-screen w-screen max-w-3xl mx-auto flex flex-col items-center justify-start p-12 m-4">
        <h1>About</h1>
        <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
        <p className="text-sm/4 sm:text-base/5 md:text-lg/6 subpixel-antialiased my-4">Ellington Willoughby and the Mythical Squid is a high-energy psychedelic-pop six piece band from SE Portland, Oregon.
        </p>

        <p className="text-sm/4 sm:text-base/5 md:text-lg/6 subpixel-antialiased my-4">
          Funky Grooves back singer-songwriter melodies to take you on a genre bending journey that is both far out and close to home. The arrival is unexpected.
        </p>

        <p className="text-sm/4 sm:text-base/5 md:text-lg/6 subpixel-antialiased my-4">
          Live shows are generally local to Oregon, and are put on with the intention of creating a space for people to let loose and have fun. They occur in a variety of venues, from house shows to festivals, and are always a good time.
        </p>
        
        <div className="text-sm/4 sm:text-base/5 md:text-lg/6 subpixel-antialiased my-4">
          <p className="text-sm/4 sm:text-base/5 md:text-lg/6 subpixel-antialiased my-4">Band Members:</p>
          <ul>
            <li>Tim Gottgetreau</li>
            <li>Jason Gottgetreu</li>
            <li>Joshua Cloudt</li>
            <li>Jonathan Boyette</li>
            <li>Dan Miller</li>
            <li>Adam Robson</li> 
          </ul>
        </div>    
        <button onClick={openModal} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded-lg">Origin Story</button>

        <div className="modal-content">
          <OriginModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
      </div>

  );
}
