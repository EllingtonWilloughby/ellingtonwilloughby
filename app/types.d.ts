import { Ref } from 'react';

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
  link: string;
  src: string;
  alt: string;
  title: string;
  released: string;
}

export interface ITime {
  song: Ref
}