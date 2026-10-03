import React from 'react';
import georgeHero from '../assets/img/George-Harrison-Hero.webp';
import aFormacao from '../assets/img/AFormação.jpg';
import loveMeDo from '../assets/img/LoveMeDoTL.webp';
import sgtPepper from '../assets/img/SgtPepperTL.jpg';
import abbeyRoad from '../assets/img/AbbeyRoadTL.jpg';

export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          className="img-fluid w-100"
          src={georgeHero}
          alt="Foto do George Harrison"
        />
      </section>

      <section className="card">
        <section className="card-body">
          <h2 className="card-title display-4 fw-bold">
            Conheça a História do Beatle: George Harrison
          </h2>
          <p className="card-text">
            Do porão abafado do Cavern Club aos maiores palcos do planeta, a
            jornada de George Harrison foi muito além de ser um dos quatro garotos
            de Liverpool. Entre a busca espiritual, o talento silencioso na
            guitarra e composições geniais, esta é a história de como o "quiet
            beatle" encontrou sua própria voz e se tornou uma lenda eterna.
          </p>
          <a href="#george" className="btn btn-dark">Ler biografia →</a>
        </section>
      </section>

      <section className="container-fluid faixa-preta text-white py-5 my-5">
        <div className="container text-center">
          <div className="row g-4 mb-4">
            <div className="col-md-3 passada">
              <h1 className="num-home text-white">13</h1>
              <p className="display-7 fw-bold fs-5">
                Álbuns de Estúdio com os Beatles
              </p>
            </div>
            <div className="col-md-3 passada">
              <h1 className="num-home text-white">12</h1>
              <p className="display-7 fw-bold fs-5">Álbuns Solo</p>
            </div>
            <div className="col-md-3 passada">
              <h1 className="num-home text-white">+11</h1>
              <p className="display-7 fw-bold fs-5">
                Milhões de Discos vendidos em Carreira solo
              </p>
            </div>
            <div className="col-md-3 passada">
              <h1 className="num-home text-white">43</h1>
              <p className="display-7 fw-bold fs-5">Anos de Carreira</p>
            </div>
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
              <a className="btn btn-light px-4 py-2" href="#legado" role="button"
                >Ver Legado →</a
              >
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              className="img-fluid hoverzada"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOfigxk5ZGpOOfKkMVX4hvUt1cVFmffVwwyEugmvKwDLhiQ1Jm_3zlWnr&s=10"
              alt="Beatles na Abbey Road"
            />
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              className="img-fluid hoverzada"
              src="https://pbs.twimg.com/media/EX02_tKXsAI76Qz.jpg"
              alt="Retrato dos Beatles"
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid hoverzada"
              src="https://static01.nyt.com/images/2026/05/12/world/CUL-BEATLES-MUSEUM/CUL-BEATLES-MUSEUM-mediumSquareAt3X.jpg"
              alt="Beatles no topo do prédio"
            />
          </div>
        </div>
      </section>

      <section className="container my-5 previa-timeline">
        <div className="row mb-5">
          <h2 className="titulo">Os anos em comum</h2>
        </div>

        <div className="row align-items-center mb-5 item-timeline">
          <div className="col-md-6">
            <img
              className="img-fluid shadow zoom-imagem"
              src={aFormacao}
              alt="Foto dos Beatles Jovens"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <p className="titulo mb-1">1960</p>
            <h3 className="display-7 fw-bold mb-3">A Formação</h3>
            <p className="paragrafo text-justificado">
              Durante os anos iniciais tocando exaustivamente em Hamburgo e no
              Cavern Club em Liverpool, o grupo se consolida e, pouco depois,
              fecha a formação clássica com a entrada de Ringo Starr na bateria.
              Para um jovem George Harrison, então com apenas 17 anos, esse
              período de intensas apresentações ao vivo foi a escola definitiva
              para forjar sua identidade musical e sua presença de palco.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-row-reverse mb-5 item-timeline">
          <div className="col-md-6">
            <img
              className="img-fluid shadow zoom-imagem"
              src={loveMeDo}
              alt="Foto do clipe de Love Me Do"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0 text-md-end">
            <p className="titulo mb-1">1962</p>
            <h3 className="display-7 fw-bold mb-3">Love Me Do</h3>
            <p className="paragrafo text-justificado">
              O lançamento do primeiro single oficial sob a tutela do produtor
              George Martin marca o estopim da Beatlemania. A faixa escalou
              rapidamente as paradas, colocando George e seus companheiros no
              epicentro de uma revolução cultural sem precedentes.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5 item-timeline">
          <div className="col-md-6">
            <img
              className="img-fluid shadow zoom-imagem"
              src={sgtPepper}
              alt="Bastidores por trás da capa de Sgt. Pepper's Lonely Hearts Club Band"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <p className="titulo mb-1">1967</p>
            <h3 className="display-7 fw-bold mb-3">A Revolução no Estúdio</h3>
            <p className="paragrafo text-justificado">
              Com o lançamento do aclamado álbum "Sgt. Pepper's Lonely Hearts Club
              Band", a banda redefine os limites da música pop. Exaustos das
              turnês mundiais, George e os companheiros abandonam os palcos e
              abraçam a experimentação total no estúdio — fase em que George
              aprofunda ainda mais sua imersão na música indiana, introduzindo
              instrumentos tradicionais como a cítara no coração do som dos
              Beatles.
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-row-reverse mb-5 item-timeline">
          <div className="col-md-6">
            <img
              className="img-fluid shadow zoom-imagem preto-e-branco"
              src={abbeyRoad}
              alt="Beatles atravessando a Abbey Road de novo"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0 text-md-end">
            <p className="titulo mb-1">1969</p>
            <h3 className="display-7 fw-bold mb-3">Abbey Road e a Despedida</h3>
            <p className="paragrafo text-justificado">
              A icônica travessia na faixa de pedestres e o lendário concerto
              surpresa no telhado marcam os últimos grandes momentos do grupo.
              Mesmo em meio às crescentes tensões internas e ao seu amadurecimento
              como compositor solo — que culminaria em seu grandioso repertório
              próprio —, George entrega contribuições definitivas para fechar com
              maestria a trajetória coletiva da banda.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}