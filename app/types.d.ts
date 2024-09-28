export interface INavigationLink {
  href: string;
  title: string;
}

export interface IAboutModal {
  isOpen: boolean;
  onClose: () => void;
}
