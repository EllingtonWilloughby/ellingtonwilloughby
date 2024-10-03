import React, { ReactNode } from 'react';

export interface IColorSchemeContext {
  controlText: boolean;
  colorScheme: boolean;
  toggleColorScheme: () => void;
}

export interface IAudioPlayer {
  playlist: SongType[];
}

export interface SongType {
  title: string;
  url: string;
  duration: string;
}

export interface IOriginStoryModal {
  isOpen: boolean;
  closeModal: () => void;
}

export interface IBackgroundContainer {
  backgroundImage: string;
  backgroundOpacity: number;
  children: ReactNode;
}

export interface ILogo {
  height: number;
  width: number;
}

export interface IAudioHook {
  playlist: Song[];
}

export interface INavLink {
  href: string;
  children: ReactNode;
}

export interface INowPlaying {
  isPlaying: boolean;
  currentSong: SongType;
  elapsedTime: string;
}
