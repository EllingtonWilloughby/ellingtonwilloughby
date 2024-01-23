'use client'

import { useDarkMode } from '@/lib/context/ColorSchemeContext'
import Audio from './components/Audio'
import Container from './components/Container'
import DarkModeButton from './components/DarkModeButton'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import bgi from '../public/images/prim.png'
import bgii from '../public/images/surt.gif'

export default function Home() {
  const { darkMode } = useDarkMode()

  const bg = darkMode ? 'bgii' : 'bgi'
  
  return (
    <main className="min-h-screen">
      <Container>
        <header>
          <Navigation />
        </header>
        
        <div className="w-screen flex justify-center mx-auto">
          <Logo height={650} width={650} />
        </div>
          <div>
            <Audio />
          </div>
          <div className="fixed bottom-6 left-6">
            <DarkModeButton />
          </div>
      </Container>
    </main>
  )
}
