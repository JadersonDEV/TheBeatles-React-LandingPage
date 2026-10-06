import React, { useEffect, useRef, useState } from 'react';
import logoGeorge from '../assets/img/George-Harrison-logo.png';
import { LINKS_MENU } from '../data/links';

export default function Navbar() {
  const [ativo, setAtivo] = useState('home');
  const menuRef = useRef(null);
  const togglerRef = useRef(null);

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

    LINKS_MENU.forEach(({ id }) => {
      const elemento = document.getElementById(id);
      if (elemento) observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, []);

  // No celular, fecha o menu hambúrguer depois de clicar em um link
  const fecharMenu = () => {
    if (menuRef.current?.classList.contains('show')) {
      togglerRef.current?.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-beatles sticky-top py-0">
      <div className="container">
        <a className="navbar-brand destaque" href="#home" onClick={fecharMenu}>
          <img src={logoGeorge} alt="George Harrison" height="80" />
          George Harrison
        </a>

        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacao"
          aria-controls="menuNavegacao"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div ref={menuRef} className="collapse navbar-collapse" id="menuNavegacao">
          <ul className="navbar-nav ms-auto">
            {LINKS_MENU.map(({ id, rotulo }) => (
              <li className="nav-item" key={id}>
                <a
                  className={`nav-link${ativo === id ? ' active' : ''}`}
                  href={`#${id}`}
                  onClick={fecharMenu}
                >
                  {rotulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}