import React, { CSSProperties } from 'react';
import { type BackgroundContainerProps } from '../../lib/types'

export default function BackgroundContainer({ backgroundImage, backgroundOpacity, children }: BackgroundContainerProps) {

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    opacity: backgroundOpacity
  };

  return (
    <div className="background-container">
      <div style={backgroundStyle} className="background-content"></div>
      <div className="content-container">
      {children}
      </div>
    </div>
  );
}
