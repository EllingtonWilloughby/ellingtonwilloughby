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
}

export interface ISong {
  title: string;
  url: string;
  duration: string;
}
