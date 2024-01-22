'use client'
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import Audio from './components/Audio'
import DarkModeButton from './components/DarkModeButton'

export default function Home() {
  return (
    <main>
      <header>
        <Navigation />
      </header>

      <div className="w-screen flex justify-center items-start">
        <Logo height={650} width={650} />
      </div>

      <div>
        <Audio />
      </div>
      <div className="fixed bottom-8 left-8">
        <DarkModeButton />
      </div>
    </main>
  )
}
