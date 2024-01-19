import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';

export default function Contact() {
  return (
      <div className="outer-contact-sheet">
        <h2 className="underline text-center w-full">Contact</h2>
          <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
        <div className="flex-1 flex flex-col justify-start items-center max-w-lg p-4 m-4 mx-auto">
          <h3 className="text-center m-10">Feel free to reach out!</h3><br />
          <p className="text-center m-4 text-sm/5 sm:text-base/6 md:text-lg/7 subpixel-antialiased">
            Contact us <em>via</em> email by clicking on the logo below:
          </p>
          <Link 
            href="mailto:ellingtonwilloughby@gmail.com" 
            className="text-base/5 sm:text-lg/6 md:text-xl/7 text-center subpixel-antialiased font-semibold"
          >
            <Logo height={300} width={300} />
          </Link>
        </div>
      </div>
  );

}
