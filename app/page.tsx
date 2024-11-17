import AudioPlayer from "@/components/audio-player/AudioPlayer";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import { AudioProvider } from "./contexts/AudioContext";
export default function Home() {
  return (
    <section className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-start items-center">
        <Navigation />
        <Logo />
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </div>
    </section>
  );
}
