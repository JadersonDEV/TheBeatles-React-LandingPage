import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biografia from './pages/Biografia';
import Legado from './pages/Legado';

export default function App() {
  return (
    <div className="app-container">
      {/* A Navbar controla os links com âncoras (#home, #george, #legado) */}
      <Navbar />

      <main>
        {/* Cada seção principal ganha um id correspondente aos links do menu */}
        <div id="home">
          <Home />
        </div>

        {/* Divisor visual entre as seções */}
        <div className="divisor" aria-hidden="true">
          <span className="divisor-disco"></span>
        </div>

        <div id="george">
          <Biografia />
        </div>

        <div id="legado">
          <Legado />
        </div>
      </main>

      <Footer />
    </div>
  );
}