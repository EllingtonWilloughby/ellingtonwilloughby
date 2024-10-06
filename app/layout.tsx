import Image from 'next/image';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const cairoPlaySans = localFont({
  src: './fonts/CairoPlayVF.ttf',
  variable: '--font-cairo-play-sans',
  weight: '100 900'
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Ellington Willoughby & the Mythical Squid',
  description: 'Portland, OR, US'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairoPlaySans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="background-image"></div>
        <main className="page">{children}</main>

        <footer className="">
          <div className="">
            <Image
              src="/images/logo_ii_light.png"
              width={100}
              height={100}
              alt="Logo"
              className="foot-logo"
            ></Image>
          </div>
        </footer>
      </body>
    </html>
  );
}
