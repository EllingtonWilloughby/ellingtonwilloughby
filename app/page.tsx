import Navigation from './components/Navigation'
import Logo from './components/Logo'
import AudioPlayer from './components/AudioPlayer'
import { playlist } from '@/lib/data'
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
          <Logo height={550} width={550} />
        </div>

        <div>
          <AudioPlayer playlist={playlist} />
        </div>
    
      </main>
    </BackgroundContainer>
  )
}
