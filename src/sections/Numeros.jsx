import React from 'react';

const ESTATISTICAS = [
  { numero: '13', rotulo: 'Álbuns de Estúdio com os Beatles' },
  { numero: '12', rotulo: 'Álbuns Solo' },
  { numero: '+11', rotulo: 'Milhões de Discos vendidos em Carreira solo' },
  { numero: '43', rotulo: 'Anos de Carreira' },
];

export default function Numeros() {
  return (
    <section className="faixa-preta text-white py-5 my-5">
      <div className="container text-center">
        <div className="row g-4 mb-4">
          {ESTATISTICAS.map(({ numero, rotulo }) => (
            <div className="col-md-3 passada" key={rotulo}>
              <p className="num-home text-white">{numero}</p>
              <p className="display-7 fw-bold fs-5">{rotulo}</p>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="paragrafo text-justificado fs-5 mt-3 mb-4">
              Em pouco mais de sete anos de revolução nos estúdios com os
              Beatles, George Harrison testemunhou e ajudou a transformar o som
              da banda: do pop cru dos primeiros singles à experimentação
              psicodélica e à introdução da sonoridade indiana. Cada disco é o
              reflexo de um jovem músico em busca da sua própria identidade
              artística, lapidando o seu gênio criativo no coração do maior
              fenômeno da história.
            </p>
            <a className="btn btn-light px-4 py-2" href="#legado">
              Ver Legado →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}