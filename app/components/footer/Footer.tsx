import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <div className="relative max-w-screen-lg mx-auto">
      <Image
        src="/images/logo_ii_light.png"
        width={100}
        height={100}
        alt="Logo"
        className="foot-logo absolute bottom-0 left-0"
      ></Image>
    </div>
  );
}
