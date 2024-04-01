'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from '@/lib/context/ColorSchemeContext';
import { PiHouseFill } from 'react-icons/pi';

export default function Contact() {
  const { darkMode } = useDarkMode();

  return (
      <div className="relative min-h-screen max-w-screen-md w-full mx-auto flex flex-col justify-start items-center p-6">
      {darkMode
        ? (<Image src="/images/contact_dk.svg" height={500} width={500} alt="contact heading" className="-mt-20 -mb-20" />)
        : (<Image src="/images/conteact.svg" height={500} width={500} alt="contact heading" className="-mt-20 -mb-20" />)}
      <Link href="/" className="absolute top-8 left-8"><PiHouseFill size={24} /></Link>

      <div className="w-full mx-auto text-center text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased mt-8">
        <span className="text-center text-base/6 sm:text-lg/7 subpixel-antialiased">Reach out to Ellington Willoughby & the Mythical Squid by emailing <Link
          href="mailto:ellingtonwilloughby@gmail.com"
          className="text-base/6 sm:text-lg/7 underline subpixel-antialiased">{` ellingtonwilloughby@gmail.com`}</Link>, or by reaching out on our <Link href="https://www.facebook.com/EllingtonWilloughby" className="text-base/6 sm:text-lg/7 underline subpixel-antialiased">Facebook</Link>.</span>
      <p className="my-4 text-center text-base/6 sm:text-lg/7 subpixel-antialiased">Peace!</p>
      </div>
      <Image src="/images/j.jpeg" height={500} width={500} alt="hi j! bye j!" className="px-4" />
      <p className="text-center text-base/6 sm:text-lg/7 mt-2">Say hi Jay!</p>
      </div>
  );

}
