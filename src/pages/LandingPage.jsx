import React from 'react';
import Divisor from '../components/Divisor';
import Hero from '../sections/Hero';
import Numeros from '../sections/Numeros';
import Galeria from '../sections/Galeria';
import Timeline from '../sections/Timeline';
import Biografia from '../sections/Biografia';
import Legado from '../sections/Legado';
import ChamadaFinal from '../sections/ChamadaFinal';

// Junta as seções na ordem da landing page.
// Os ids (home, george, legado) são os destinos dos links do menu.
export default function LandingPage() {
  return (
    <main>
      <div id="home">
        <Hero />
        <Numeros />
        <Galeria />
        <Timeline />
      </div>

      <Divisor />

      <div id="george">
        <Biografia />
      </div>

      <Divisor />

      <div id="legado">
        <Legado />
      </div>

      <ChamadaFinal />
    </main>
  );
}