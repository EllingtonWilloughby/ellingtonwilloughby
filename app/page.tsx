'use client'
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import Audio from './components/Audio'
import BackgroundContainer from './components/BackgroundContainer'

export default function Home() {
  return (
    <BackgroundContainer 
      backgroundImage="/gifs/lavalamp.gif" 
      backgroundOpacity={0.6}
    >
      <main>
        <header>
          <Navigation />
        </header>

        <div className="w-screen flex justify-center">
          <Logo height={650} width={650} />
        </div>

        <div><Audio /></div>
    
      </main>
    </BackgroundContainer>
  )
}
