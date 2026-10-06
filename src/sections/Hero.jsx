import React from 'react';
import georgeHero from '../assets/img/George-Harrison-Hero.webp';

// Hero: imagem, único H1 da página e botão de ação
export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-imagem"
        src={georgeHero}
        alt="Foto do George Harrison"
      />
      <div className="hero-conteudo">
        <h1 className="titulo hero-titulo">
          Conheça a História do Beatle: George Harrison
        </h1>
        <p className="hero-texto">
          Do porão do Cavern Club aos maiores palcos do planeta, a jornada do
          "quiet beatle" que encontrou sua própria voz e se tornou uma lenda
          eterna.
        </p>
        <a href="#george" className="btn btn-light btn-lg px-4">
          Ler biografia →
        </a>
      </div>
    </section>
  );
}