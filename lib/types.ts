import React, { ReactNode } from "react";

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

export interface DarkModeContextProps {
  showText: boolean
  darkMode: boolean
  toggleDarkMode: () => void
}

export interface DarkModeProviderProps {
  children: React.ReactNode
}

export interface NavLinkProps {
  href: string;
  children: ReactNode;
}
