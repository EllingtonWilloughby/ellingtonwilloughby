import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-4 text-center">
      <div className="flex justify-start items-center">
        <Image
          src="/images/logo_ii_light.png"
          width={80}
          height={80}
          alt="Ellington Willoughby & the Mythical Squid logo"
          className="sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
        ></Image>
      </div>
    </footer>
  );
}
