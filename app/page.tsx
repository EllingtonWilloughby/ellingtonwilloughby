import AudioPlayer from "@/components/audio-player/AudioPlayer";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { AudioProvider } from "@/contexts/AudioContext";
import Icon from "./components/Icon";
export default function Home() {
  return (
    <div className="relative w-full h-full flex flex-col justify-start items-center">
      <Navigation />
      <Logo />
      <AudioProvider initialIndex={0} initialVolume={0.5}>
        <AudioPlayer />
      </AudioProvider>
      <div className="w-full max-w-screen-lg mx-auto fixed bottom-4">
        <Icon />
      </div>
    </div>
  );
}
