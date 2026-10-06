import React from 'react';

// Chamada final: repete a ação principal do Hero no fim da página
export default function ChamadaFinal() {
  return (
    <section className="chamada-final">
      <h2 className="titulo chamada-titulo">Conheça a história completa</h2>
      <p className="chamada-texto">
        Do Cavern Club aos maiores palcos do mundo: a jornada do "quiet beatle".
      </p>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
        <a href="#george" className="btn btn-light btn-lg px-4">
          Ler biografia →
        </a>
        <a href="#home" className="btn btn-outline-light btn-lg px-4">
          Voltar ao topo ↑
        </a>
      </div>
    </section>
  );
}