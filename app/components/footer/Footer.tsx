import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative max-w-screen-lg mx-auto min-h-32 w-full">
      <div className="absolute bottom-0 left-0 w-full h-full">
        <Image
          src="/images/logo_ii_light.png"
          width={100}
          height={100}
          alt="Logo"
          className="foot-logo"
        ></Image>
      </div>
    </footer>
  );
}
