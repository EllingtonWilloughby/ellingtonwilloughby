'use client'

import Audio from './components/Audio'
import Container from './components/Container'
import DarkModeButton from './components/DarkModeButton'
import Header from './components/Header'
import Logo from './components/Logo'

export default function Home() {

  return (
    <main className="relative min-h-screen w-full mx-auto flex flex-col justify-start items-center">
      <Container>
        <Header />
         <div className="flex flex-col justify-start">
          <div className='w-full flex justify-center'>
            <Logo height={500} width={500} />
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
