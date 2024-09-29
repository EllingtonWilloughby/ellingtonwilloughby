import React from 'react';
import { IAlbum } from '../types.d';
import { albums } from '@/data';
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported from Next.js

export default function MusicPage() {
  return (
    <div className="relative min-h-screen w-full max-w-screen-xl mx-auto p-2">
      <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl subpixel-antialiased">Music</h2>
      <ul>
        {albums.map((album: IAlbum) => (
          <div key={album.link}>
            <li>
              <Link href={album.link}>
                <Image
                  src={album.src}
                  alt={album.alt}
                  width={600}
                  height={600}
                />
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
