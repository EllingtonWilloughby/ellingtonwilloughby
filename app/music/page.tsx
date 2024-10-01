'use client';
import React from 'react';
import { IAlbum } from '../types.d';
import { albums } from '@/data';
import Link from 'next/link';
import Image from 'next/image';
import { House } from '@phosphor-icons/react';

export default function MusicPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <section className="relative w-full flex flex-col justify-start items-center flex-1 max-h-40">
        <div className="home-link absolute top-0 left-0 flex flex-col justify-center items-center p-2">
          <Link href="/" className="">
            <House weight="duotone" size={24} />
          </Link>
          <span className="link-label">Home</span>
        </div>
        <div className="text-center font-normal text-3xl md:text-4xl lg:text-5xl subpixel-antialiased p-16">
          Music
        </div>
      </section>

      <ul className="max-w-xs mx-auto p-2">
        {albums.map((album: IAlbum) => (
          <div
            key={album.src}
            className="album-link w-full flex flex-col justify-center items-center p-2"
          >
            <li className="flex flex-col justify-center items-center p-6">
              <Link href={album.link} className="text-center">
                <Image
                  src={album.src}
                  alt={album.alt}
                  width={500}
                  height={500}
                  priority
                />
                <label className="album-link-label">{album.title}</label>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
