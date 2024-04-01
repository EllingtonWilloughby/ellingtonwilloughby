'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from '@/lib/context/ColorSchemeContext';
import { PiHouseFill } from 'react-icons/pi';

export default function Shows() {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative min-h-screen max-w-screen-md w-full mx-auto flex flex-col justify-start items-center p-6">
      {darkMode
          ? (<Image src="/images/shows_dk.svg" height={500} width={500} alt="shows heading" className="-mt-20 -mb-20 pt-6" />)
          : (<Image src="/images/shows.svg" height={500} width={500} alt="shows heading" className="-mt-20 -mb-20 pt-6" />)}
      <Link href="/" className="absolute top-8 left-8 text-sm"><PiHouseFill size="24" /></Link>
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
            <tr>
              <td className="text-xs subpixel-antialiased">
                05-18-2024
              </td>
              <td className="text-xs subpixel-antialiased">7 PM</td>
              <td className="text-xs subpixel-antialiased">
                Starday Tavern 6517 SE Foster Rd, Portland, OR 97206
              </td>
            </tr>
            <tr>
              <td className="text-xs subpixel-antialiased">
                TBD
              </td>
              <td className="text-xs subpixel-antialiased">TBD</td>
              <td className="text-xs subpixel-antialiased">
                Buddystock 1997 State Road, Mosier, OR 97040
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       <Image src="/images/live.jpeg" height={500} width={500} alt="image of the wall in the studio" className="my-10 rounded-lg" />
      </div>
  );

}
