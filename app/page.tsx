'use client'

import Audio from './components/Audio'
import Container from './components/Container'
import DarkModeButton from './components/DarkModeButton'
import Logo from './components/Logo'
import Navigation from './components/Navigation'

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col justify-around items-center">
      <Container>
        <header className="max-w-screen-md mx-auto">
          <Navigation />
        </header>

        <div className="h-screen w-screen flex flex-col justify-center mx-auto">
          <div className='w-full flex justify-center mx-auto'>
            <Logo height={600} width={600} />
          </div>
          <div>
            <Audio />
          </div>
          <div className="absolute bottom-6 left-6">
            <DarkModeButton />
          </div>
          </div>
      </Container>
    </main>
  )
}
