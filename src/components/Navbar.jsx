import React, { useEffect, useState } from 'react';
import logoGeorge from '../assets/img/George-Harrison-logo.png';

// Ids das seções definidas no App.jsx
const SECOES = ['home', 'george', 'legado'];

export default function Navbar() {
  const [ativo, setAtivo] = useState('home');

  // Marca como ativo o link da seção que está visível na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setAtivo(entrada.target.id);
        });
      },
      // Faixa de detecção no meio da tela (abaixo da navbar)
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    SECOES.forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, []);

  const classeLink = (id) => `nav-link${ativo === id ? ' active' : ''}`;

  return (
    /* <!-- Início da Navbar --> */
    <nav className="navbar navbar-expand-lg navbar-dark navbar-beatles sticky-top py-0">
      <div className="container">
        {/* 1. Logo */}
        <a className="navbar-brand destaque" href="#home">
          <img
            src={logoGeorge}
            alt="George Harrison"
            height="80"
          />
          George Harrison
        </a>

        {/* 2. Menu Hambúrguer celular */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacao"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 3. Lista de Links que encolhem no celular */}
        <div className="collapse navbar-collapse" id="menuNavegacao">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={classeLink('home')} href="#home">Início</a>
            </li>
            <li className="nav-item">
              <a className={classeLink('george')} href="#george">Biografia</a>
            </li>
            <li className="nav-item">
              <a className={classeLink('legado')} href="#legado">Legado</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    /* <!-- Fim da Navbar --> */
  );
}