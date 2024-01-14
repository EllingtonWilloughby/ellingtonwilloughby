import { ReactNode } from "react";

export interface AudioPlayerProps {
  playlist: string[];
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
