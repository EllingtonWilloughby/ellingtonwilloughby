import Navigation from './components/Navigation'
import Logo from './components/Logo'
import AudioPlayer from './components/AudioPlayer'
import { playlist } from '@/lib/data'

export default function Home() {
  return (
    <main>
      <header>
        <Navigation />
      </header>

      <div>
        <Logo />
      </div>

      <div>
        <AudioPlayer playlist={playlist} />
      </div>
    
    </main>
  )
}
