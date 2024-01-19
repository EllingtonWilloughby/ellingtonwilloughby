import Image from 'next/image';
import { LogoProps } from '../../lib/types'

export default function Logo({ height, width }: LogoProps) {
  return (
    <Image
      src="/images/ew.svg"
      alt="ellington willoughby logo"
      height={height}
      width={width}
      className=""
      priority={true}
    />
  )
}
