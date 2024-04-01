import type { Metadata } from 'next'
import { Cairo_Play } from 'next/font/google'
import './globals.css'
import { DarkModeProvider } from '@/lib/context/ColorSchemeContext'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from './components/Header'
const cairo = Cairo_Play({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ellington Willoughby',
  description: 'Ellington Willoughby & the Mythical Squid',
  icons: [
    '/images/ew_logo.svg',
    '/images/ew_logo_dk.svg',
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className={cairo.className}>
          {children}
          <SpeedInsights />
        </body>
      </DarkModeProvider>
    </html>
  )
}
