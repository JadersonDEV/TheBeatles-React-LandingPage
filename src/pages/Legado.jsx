import React from 'react';
import beatlesGroup2 from '../assets/img/Beatles-group-2.jpg';
import beatlesGroup4 from '../assets/img/Beatles-group-4.webp';
import beatlesGroup6 from '../assets/img/Beatles-group-6.jpg';

export default function LegadoBeatles() {
  return (
    <>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-4 fw-bold">Legado</h1>
          <p className="lead text-muted">
            Entre acordes revolucionários e quebras de barreiras, o legado dos
            Beatles prova que a arte pode mudar os rumos de uma geração.
          </p>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row align-items-center mb-5 passada">
            <div className="col-md-5 mb-4 mb-md-0">
              <img
                src={beatlesGroup2}
                alt="The Beatles"
                className="img-fluid hoverzada rounded-3 shadow-sm w-100"
              />
            </div>
            <div className="col-md-7">
              <h2 className="titulo mb-3 fs-1">Inovação Sonora</h2>
              <p className="paragrafo text-justificado fs-5">
                Mais do que vender bilhões de discos ou lotar estádios, o
                verdadeiro legado dos Beatles reside na transformação da cultura
                popular. Entre 1962 e 1970, o quarteto reescreveu as regras da
                composição e elevou a música pop de mero entretenimento
                adolescente à condição de alta arte.
              </p>
              <p className="paragrafo text-justificado fs-5">
                Ao abandonarem as turnês em 1966, a banda transformou o estúdio da
                EMI em um laboratório de inovação sônica. Ao lado do produtor
                George Martin, utilizaram técnicas pioneiras e provaram que um LP
                comercial poderia ser uma obra temática e coesa, redefinindo o
                conceito de álbum musical.
              </p>
            </div>
          </div>

          <div className="row align-items-center mb-5 flex-md-row-reverse passada">
            <div className="col-md-5 mb-4 mb-md-0">
              <img
                src={beatlesGroup4}
                alt="The Beatles"
                className="img-fluid hoverzada rounded-3 shadow-sm w-100"
              />
            </div>
            <div className="col-md-7">
              <h2 className="titulo mb-3 fs-1">Pioneirismo Visual</h2>
              <p className="paragrafo text-justificado fs-5">
                No aspecto autoral, a parceria entre Lennon, McCartney, Harrison e
                Starr estabeleceu o modelo moderno de grupo de rock que escreve e
                executa o próprio material. Suas experimentações com arranjos
                clássicos e música indiana abriram caminhos para diversos gêneros
                musicais posteriores.
              </p>
              <p className="paragrafo text-justificado fs-5">
                Antecipando a era da difusão artística moderna, os Beatles também
                foram pioneiros no formato de videoclipe. A produção de filmes,
                curtas e clipes para faixas como{" "}
                <em>A Hard Day&apos;s Night</em> e{" "}
                <em>Paperback Writer</em> estabeleceu o padrão visual para a
                indústria musical.
              </p>
            </div>
          </div>

          <div className="row align-items-center mb-5 passada">
            <div className="col-md-5 mb-4 mb-md-0">
              <img
                src={beatlesGroup6}
                alt="The Beatles"
                className="img-fluid hoverzada rounded-3 shadow-sm w-100"
              />
            </div>
            <div className="col-md-7">
              <h2 className="titulo mb-3 fs-1">Legado Eterno</h2>
              <p className="paragrafo text-justificado fs-5">
                O impacto da banda estendeu-se fortemente aos movimentos
                socioculturais dos anos 1960. Como figuras centrais da
                contracultura, utilizaram sua projeção global para defender a paz
                durante a Guerra do Vietnã e apoiar causas de ativismo social,
                espelhando a guinada comportamental do Ocidente.
              </p>
              <p className="paragrafo text-justificado fs-5">
                A relevância do grupo permanece intacta na era digital, atraindo
                fãs de várias gerações por meio do streaming. O mito coletivo
                construído pelo quarteto consolidou-se como um ponto de partida
                fundamental da modernidade global, mostrando o poder duradouro da
                criação artística.
              </p>
            </div>
          </div>
          {/* Video Clipe dos Beatles */}
          <h2 className="destaque text-center bt-legado">
            Quando o Mundo Parou para Ouvir
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 passada">
              <div className="card-video shadow rounded overflow-hidden">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/jInxwU27G30"
                    title="Shea Stadium 1965"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-3 bg-dark text-white">
                  <h5 className="mb-0 fs-6">Shea Stadium 1965</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 passada">
              <div className="card-video shadow rounded overflow-hidden">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/Pbg8T9r1DiQ"
                    title="A Hard Day's Night"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-3 bg-dark text-white">
                  <h5 className="mb-0 fs-6">A Hard Day&apos;s Night</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <div className="card">
          <div className="card-body text-center p-5">
            <figure>
              <blockquote className="blockquote destaque">
                <p>
                  &quot;Os Beatles existem em algum lugar em tempo espacial. Mas,
                  por enquanto, enquanto estamos neste planeta, sou apenas eu.&quot;
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mt-3">
                George Harrison em{" "}
                <cite title="Revista Rolling Stone">Revista Rolling Stone</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}