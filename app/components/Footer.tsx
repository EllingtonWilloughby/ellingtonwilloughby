import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="max-w-screen-lg mx-auto w-full py-4 flex justify-start items-baseline">
      <Image
        src="/images/logo_ii_light.png"
        width={80}
        height={80}
        alt="Ellington Willoughby & the Mythical Squid logo"
        className="w-24 sm:w-28 sm:h-32 md:w-24 md:h-24 lg:w-28 lg:h-28"
      ></Image>
    </footer>
  );
}
