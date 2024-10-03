'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useColorSchemeContext } from '../lib/context/ColorSchemeContext';
import { PiHouseFill } from 'react-icons/pi';

export default function Shows() {
  const { colorScheme } = useColorSchemeContext();
  const showsImage = colorScheme ? "/images/shows_dk.svg" : "/images/shows.svg"
  return (
    <div className="relative min-h-screen max-w-screen-md w-full mx-auto flex flex-col justify-start items-center p-6">
        <Image
          src={showsImage}
          height={500}
          width={500}
          alt="shows heading"
          className="-mt-20 -mb-20 pt-6"
          priority
        />
      <Link href="/">
        <span className="absolute top-8 left-8 text-sm">
          <PiHouseFill size={24} />
        </span>
      </Link>
      <div className="w-full max-w-screen-sm mx-auto mt-10 flex justify-center">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>Coming Soon...</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
