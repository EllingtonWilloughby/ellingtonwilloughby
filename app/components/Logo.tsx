import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/ew_logo.svg"
      height={550}
      width={550}
      alt="ellington willoughby logo"
      className=""
      priority={true}
    />
  )
}
