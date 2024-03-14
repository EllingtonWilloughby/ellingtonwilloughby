'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Contactlt from '../../public/images/contact.svg';
import Contactdk from '../../public/images/contact_dk.svg';
import Horizon from '../../public/images/horizon.gif';
import { useDarkMode } from '@/lib/context/ColorSchemeContext';

export default function Contact() {
  const { darkMode } = useDarkMode();

  return (
      <div className="relative h-screen w-screen max-w-screen-lg mx-auto flex flex-col items-center justify-start p-8 m-4">
      {darkMode
        ? (
         <Image src={Contactdk} height={500} width={500} alt="contact heading" className="-mt-20 -mb-20" />
        ) : (
           <Image src={Contactlt} height={500} width={500} alt="contact heading" className="-mt-20 -mb-20" />
        )
      }
          <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
          <p className="w-full mx-auto text-center text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased mt-8">
            Reach out to Ellington Willoughby & the Mythical Squid by emailing us at
          <Link
            href="mailto:ellingtonwilloughby@gmail.com"
            className="text-center font-normal text-xl/8 subpixel-antialiased underline pt-12"
          >{` ellingtonwilloughby@gmail.com`}</Link>
        , or by reaching out on our <Link href="https://www.facebook.com/EllingtonWilloughby">Facebook</Link>.
      </p>

      <p className="my-12 text-center text-base/5 sm:text-lg/6 md:text-xl/7 subpixel-antialiased">Peace.</p>
      <Image src={Horizon} height={500} width={500} alt="horizon gif" className="mt-6" />
      </div>
  );

}
