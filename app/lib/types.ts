export interface INavigationLink {
  href: string;
  title: string;
}

export interface IAboutModal {
  isOpen: boolean;
  onClose: () => void;
}

export interface IMusicians {
  name: string;
  instruments: string;
  link?: string;
}

export interface ISong {
  title: string;
  url: string;
  duration: string;
}

export interface IAlbum {
  id: number;
  link: string;
  src: string;
  alt: string;
  title: string;
  released: string;
}

export interface ISong {
  id: number;
  title: string;
  album: string;
  artist: string;
  url: string;
  duration: string;
}

export interface IAudioContext {
  playlist: ISong[];
  song: ISong;
  currentIndex: number;
  playback: boolean;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMuteChange: () => void;
  handlePlayPause: () => void;
  handleSongChange: (newIndex: number) => void;
  handlePreviousSong: () => void;
  handleNextSong: () => void;
  elapsed: string;
  duration: string;
  error?: string | null;
  volumeSliderRef: React.RefObject<HTMLInputElement>;
}

export type TAudioProviderProps = {
  children: React.ReactNode;
  initialVolume?: number;
  initialIndex: number;
};
