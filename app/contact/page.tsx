import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';
import Image from 'next/image';
import ContactHeading from '../../public/images/Contact.svg';

export default function Contact() {
  return (
      <div className="relative h-screen w-screen max-w-screen-lg mx-auto flex flex-col items-center justify-start p-12 m-4">
        <Image src={ContactHeading} height={500} width={500} alt="contact heading" className="-mt-20 -mb-20"/>
          <Link href="/" className="absolute top-8 left-8 text-sm">home</Link>
          
          <Link 
            href="mailto:ellingtonwilloughby@gmail.com" 
            className="text-center font-normal text-xl/8 subpixel-antialiased underline pt-12"
          >
           ellingtonwilloughby@gmail.com
        </Link>
        
      </div>
  );

}
