import Link from 'next/link';
import Image from 'next/image';
import { IAlbum } from '@/types';
import { albums } from '@/data';
import './Albums.css';

export default function Albums() {
  return (
    <ul className="min-h-full w-full flex flex-col justify-start items-center border-2 border-purple-400">
      {albums.map((album: IAlbum) => (
        <div key={album.src} className={`w-full`}>
          <li className="{`album-link-container flex flex-col justify-center items-center`}">
            <Link
              href={album.link}
              className="text-center w-full flex flex-col justify-center items-center"
            >
              <Image
                src={album.src}
                alt={album.alt}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
              <label className="album-link-label">{album.title}</label>
            </Link>
          </li>
        </div>
      ))}
    </ul>
  );
}
