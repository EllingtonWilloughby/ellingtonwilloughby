'use client'

import Audio from './components/Audio'
import Container from './components/Container'
import DarkModeButton from './components/DarkModeButton'
import Header from './components/Header'
import Logo from './components/Logo'

export default function Home() {
  return (
      <Container>
        <Header />
         <div className="">
          <div className=''>
            <Logo height={500} width={500} />
          </div>

          <div className="w-full">
            <Audio />
          </div>

          <div className="">
            <DarkModeButton />
          </div>
        </div>
      </Container>
  )
}
