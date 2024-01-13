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
    <div className="min-h-screen p-12">
        <h1>About</h1>
        <Link href="/" className="absolute top-8 left-8">home</Link>
        <p>Ellington Willoughby and the Mythical Squid is a high-energy psychedelic-pop six piece band from SE Portland, Oregon.
        </p>

        <p>
          Funky Grooves back singer-songwriter melodies to take you on a genre bending journey that is both far out and close to home. The arrival is unexpected.
        </p>

        <p>
          Live shows are generally local to Oregon, and are put on with the intention of creating a space for people to let loose and have fun. They occur in a variety of venues, from house shows to festivals, and are always a good time.
        </p>

        <button onClick={openModal}>Origin Story</button>

        <div className="modal-content">
          <OriginModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
      </div>

  );
}
