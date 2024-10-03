import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-2 border-black bg-transparent min-h-40 max-h-40">
      <Image
        src="/images/logo_ii_light.png"
        width={160}
        height={160}
        alt="Logo"
        className="bg-transparent min-h-40 max-h-40"
      ></Image>
    </footer>
  );
}
