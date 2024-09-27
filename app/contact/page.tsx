'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useColorSchemeContext } from '@/app/lib/context/ColorSchemeContext';
import { PiHouseFill } from 'react-icons/pi';

export default function Contact() {
  const { colorScheme } = useColorSchemeContext();
  const contactImage = colorScheme
    ? '/images/contact_dk.svg'
    : '/images/contact.svg';
  return (
    <div className="relative min-h-screen max-w-screen-md w-full mx-auto flex flex-col justify-start items-center p-6">
      <Image
        src="/images/contact_dk.svg"
        height={500}
        width={500}
        alt="contact heading"
        className="-mt-20 -mb-20"
      />
      <Link href="/">
        <span className="absolute top-8 left-8">
          <PiHouseFill size={24} />
        </span>
      </Link>

      <div className="w-full mx-auto text-center text-base sm:text-lg md:text-xl subpixel-antialiased mt-8">
        <span className="text-center text-base sm:text-lg subpixel-antialiased">
          Reach out to Ellington Willoughby & the Mythical Squid by emailing{' '}
          <Link
            href="mailto:ellingtonwilloughby@gmail.com"
            className="text-base/6 sm:text-lg/7 underline subpixel-antialiased"
          >
            ellingtonwilloughby@gmail.com
          </Link>
          , or by reaching out on our{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/EllingtonWilloughby"
          >
            <span className="text-base/6 sm:text-lg/7 underline subpixel-antialiased">
              Facebook
            </span>
          </Link>
          .
        </span>
        <p className="my-4 text-center text-base/6 sm:text-lg/7 subpixel-antialiased">
          Peace!
        </p>
      </div>
    </div>
  );
}
