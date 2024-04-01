'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDarkMode } from '@/lib/context/ColorSchemeContext';

export default function Music() {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative min-h-screen max-w-screen-md w-full mx-auto flex flex-col justify-start items-center p-6">
      {darkMode
          ? (<Image src="/images/music_dk.svg" height={500} width={500} alt="music heading" className="-mt-20 -mb-20 pt-6" />)
          : (<Image src="/images/music.svg" height={500} width={500} alt="music heading" className="-mt-20 -mb-20 pt-6" />)}
      <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
      <div className="container flex flex-col justify-start items-center mt-6">
        <table>
          <tbody className="flex flex-col justify-start items-center">
            <tr className="album-container">
              <td>
                <Link href="https://ellingtonwilloughby.bandcamp.com/album/safari-danger">
                  <Image src="/images/safaridanger.jpg" height={240} width={240} className="album-image" alt="safari danger" />
                  <span className="album-name">
                    Safari Danger
                    <p className="caption">released October 20, 2021</p>
                  </span>
                </Link>
              </td>
            </tr>
            <tr className="album-container">
              <td className="flex flex-col justify-start items-center subpixel-antialiased">
                <Link href="https://ellingtonwilloughby.bandcamp.com/album/danger-safari">
                  <Image src="/images/dangersafari.jpg" height={240} width={240} className="album-image" alt="danger safari" />
                  <span className="album-name">
                    Danger Safari
                    <p className="caption">released May 27, 2020</p>
                  </span>
                </Link>
              </td>
            </tr>
            <tr className="album-container">
              <td>
                <Link href="https://ellingtonwilloughby.bandcamp.com/album/moonflower" target="_blank">
                  <Image src="/images/moonflower.jpg" height={240} width={240} className="album-image" alt="moonflower" />
                  <span className="album-name">
                    Moonflower
                    <p className="caption">released September 23, 2016</p>
                  </span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

}
