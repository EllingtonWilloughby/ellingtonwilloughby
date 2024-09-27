import type { Metadata } from 'next';
import { Cairo_Play } from 'next/font/google';
import './globals.css';
import { ColorSchemeProvider } from '@/lib/context/ColorSchemeContext';
import { SpeedInsights } from '@vercel/speed-insights/next';

const cairo = Cairo_Play({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ellington Willoughby',
  description: 'Ellington Willoughby & the Mythical Squid'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ColorSchemeProvider>
        <body className={cairo.className}>
          {children}
          <SpeedInsights />
        </body>
      </ColorSchemeProvider>
    </html>
  );
}
