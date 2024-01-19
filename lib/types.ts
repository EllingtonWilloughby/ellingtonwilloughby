import { ReactNode } from "react";

export interface AudioPlayerProps {
  playlist: SongType[];
}
export interface SongType {
  title: string;
  url: string;
  duration: string;
}
 
export interface OriginModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export interface BackgroundContainerProps {
  backgroundImage: string;
  backgroundOpacity: number;
  children: ReactNode;
}

export interface LogoProps {
  height: number;
  width: number;
}

export interface Song {
  title: string;
  url: string;
  duration: number;
}

export interface UseAudioProps {
  playlist: Song[];
}
