'use client';

import Audio from './components/Audio';
import Container from './components/Container';
import ColorSchemeControl from './components/ColorSchemeControl';
import Header from './components/Header';
import Logo from './components/Logo';

export default function Home() {
  return (
    <Container>
      <Header />
      <div className="max-w-3xl mx-auto">
        <Logo height={700} width={700} />
      </div>
      <Audio />
      <ColorSchemeControl />
    </Container>
  );
}
