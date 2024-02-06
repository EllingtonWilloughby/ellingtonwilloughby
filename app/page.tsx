'use client'

import { useDarkMode } from '@/lib/context/ColorSchemeContext'
import Audio from './components/Audio'
import Container from './components/Container'
import DarkModeButton from './components/DarkModeButton'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import bgi from '../public/images/prim.png'
import bgii from '../public/images/loop.gif'

export default function Home() {
  const { darkMode } = useDarkMode()

  const bg = darkMode ? 'bgii' : 'bgi'

  return (
    <main className="min-h-screen flex flex-col justify-around items-center">
      <Container>
        <header>
          <Navigation />
        </header>

        <div className="w-screen flex justify-center mx-auto">
          <Logo height={600} width={600} />
        </div>
          <div>
            <Audio />
          </div>
          <div className="absolute bottom-6 left-6">
            <DarkModeButton />
          </div>
      </Container>
    </main>
  )
}
