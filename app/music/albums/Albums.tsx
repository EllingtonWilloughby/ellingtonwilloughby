'use client';
import Link from 'next/link';
import Image from 'next/image';
import './Albums.css';

export default function Albums() {
  return (
    <ul className="w-full flex flex-col justify-center items-center space-y-8">
      {' '}
      <li className="album-link w-full flex flex-col justify-center items-center rounded-lg">
        <Link
          href="https://ellingtonwilloughby.bandcamp.com/album/safari-danger"
          className="relative w-full flex flex-col justify-center items-center"
        >
          <Image
            src="/images/safaridanger.png"
            alt="Album cover for Safari Danger"
            width={300}
            height={300}
            className="rounded-lg shadow-lg h-auto max-w-60 sm:max-w-72 md:max-w-80 lg:max-w-96 z-20"
            priority
          />
          <label className="p-2 font-semibold text-center subpixel-antialiased">
            Safari Danger
          </label>
        </Link>
      </li>
      <li className="album-link w-full flex flex-col justify-center items-center rounded-lg">
        <Link
          href="https://ellingtonwilloughby.bandcamp.com/album/danger-safari"
          className="relative w-full flex flex-col justify-center items-center"
        >
          <Image
            src="/images/dangersafari.png"
            alt="Album cover for Danger Safari"
            width={300}
            height={300}
            className="rounded-lg shadow-lg h-auto max-w-60 sm:max-w-72 md:max-w-80 lg:max-w-96 z-20"
            priority
          />
          <label className="p-2 font-semibold text-center subpixel-antialiased">
            Danger Safari
          </label>
        </Link>
      </li>
      <li className="album-link w-full flex flex-col justify-center items-center rounded-lg">
        <Link
          href="https://ellingtonwilloughby.bandcamp.com/album/moonflower"
          className="relative w-full flex flex-col justify-center items-center"
        >
          <Image
            src="/images/moonflower.png"
            alt="Album cover for Moon Flower"
            width={300}
            height={300}
            className="rounded-lg shadow-lg h-auto max-w-60 sm:max-w-72 md:max-w-80 lg:max-w-96 z-20"
            priority
          />
          <label className="p-2 font-semibold text-center subpixel-antialiased">
            Moon Flower
          </label>
        </Link>
      </li>
    </ul>
  );
}
