import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <Image
        src="/images/logo_ii_light.png"
        width={200}
        height={200}
        alt="Logo"
        className="logo"
      ></Image>
    </div>
  );
}
