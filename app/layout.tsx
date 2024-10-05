import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from './components/footer/Footer';
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
        className={`${cairoPlaySans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="background-image"></div>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
