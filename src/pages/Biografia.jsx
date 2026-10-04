import React from 'react';
import georgePortrait from '../assets/img/George-Harrison-Portrait.jpg';
import georgeSitar from '../assets/img/GeorgeSitar.jpeg';
import georgeSolo from '../assets/img/george-harrison-1987-cloud-nine-era.jpg';
import georgeCitar from '../assets/img/George-Harrison-Citar.jpg';
import georgeColored from '../assets/img/George-Harrison-Colored.jpg';
import georgeAdult from '../assets/img/George-Harrison-Adult.jpg';
import georgeYoung from '../assets/img/George-Garrison-Young.jpg';
import georgeLifetime from '../assets/img/George-Harrison-Lifetime.jpg';
import georgeOld from '../assets/img/George-Harrison-old.jpg';

export default function Biografia() {
  return (
    <>
      <div className="container my-5">
        <div className="mb-5">
          <h1 className="display-4 fw-bold">George Harrison</h1>
          <p className="paragrafo fs-4 text-muted">
            Guitarrista solo, compositor e a alma espiritual dos Beatles.
          </p>
        </div>

        <section className="row align-items-center mb-5 passada">
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={georgePortrait}
              alt="George Harrison jovem"
              className="img-fluid hoverzada rounded-3 shadow-sm w-100"
            />
          </div>
          <div className="col-md-7">
            <h2 className="titulo mb-3 fs-1">Juventude e Entrada na Banda</h2>
            <p className="paragrafo text-justificado fs-5">
              George Harrison nasceu em 25 de fevereiro de 1943, em Liverpool.
              Sendo o membro mais jovem do grupo, conheceu Paul McCartney no
              ônibus escolar, e foi Paul quem o apresentou a John Lennon para
              integrar a primeira versão da banda.
            </p>
            <p className="paragrafo text-justificado fs-5">
              Apesar de ser inicialmente visto apenas como o garoto talentoso na
              guitarra solo, a dedicação técnica e a capacidade de criar arranjos
              de guitarra precisos e marcantes ajudaram a definir a sonoridade
              primária dos Beatles no início da década de 60.
            </p>
          </div>
        </section>

        <section className="row align-items-center mb-5 flex-md-row-reverse passada">
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={georgeSitar}
              alt="George Harrison e Ravi Shankar com uma Sitar"
              className="img-fluid hoverzada rounded-3 shadow-sm w-100"
            />
          </div>
          <div className="col-md-7">
            <h2 className="titulo mb-3 fs-1">A Era Beatles e a Espiritualidade</h2>
            <p className="paragrafo text-justificado fs-5">
              Muitas vezes apelidado de &quot;o Beatle quieto&quot;, George cresceu
              imensamente como compositor nos anos finais da banda. Foi o
              responsável pela introdução da cítara e da música indiana no rock
              ocidental, influenciando o mergulho da banda na psicodelia.
            </p>
            <p className="paragrafo text-justificado fs-5">
              Suas composições ganharam um peso emocional gigantesco. Canções
              atemporais como &quot;Something&quot;, &quot;Here Comes The Sun&quot; e &quot;While My
              Guitar Gently Weeps&quot; figuram entre as músicas mais belas e amadas de
              toda a discografia do grupo.
            </p>
          </div>
        </section>

        <section className="row align-items-center mb-5 passada">
          <div className="col-md-5 mb-4 mb-md-0 preto-e-branco">
            <img
              src={georgeSolo}
              alt="George Harrison carreira solo"
              className="img-fluid hoverzada rounded-3 shadow-sm w-100"
            />
          </div>
          <div className="col-md-7">
            <h2 className="titulo mb-3 fs-1">Carreira Solo e Legado</h2>
            <p className="paragrafo text-justificado fs-5">
              Logo após a dissolução da banda, George lançou o monumental álbum
              triplo &quot;All Things Must Pass&quot; (1970), frequentemente considerado o
              melhor trabalho solo de um ex-Beatle, impulsionado pelo hit &quot;My
              Sweet Lord&quot;.
            </p>
            <p className="paragrafo text-justificado fs-5">
              Harrison também foi pioneiro na filantropia no rock ao organizar o
              &quot;Concert for Bangladesh&quot;. Faleceu em 2001, mas deixou um legado
              marcado pela genialidade musical e por uma profunda busca
              espiritual.
            </p>
          </div>
        </section>
      </div>

      {/* Seção de Carrossel de Fotos Adicionais */}
      <div className="container my-5">
        <h3 className="destaque">Mais Momentos de George Harrison</h3>

        <div id="carrosselGeorge" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carrosselGeorge"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carrosselGeorge"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>

          {/* Itens do Carrossel (3 imagens visíveis por vez usando grid do Bootstrap) */}
          <div className="carousel-inner">
            {/* Grupo 1 (Primeiras 3 fotos) */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 passada">
                  <img
                    src={georgeCitar}
                    className="d-block w-100 img-fluid rounded shadow"
                    alt="George Harrison 1"
                  />
                </div>
                <div className="col-md-4 passada">
                  <img
                    src={georgeColored}
                    className="d-block w-100 img-fluid rounded shadow"
                    alt="George Harrison 2"
                  />
                </div>
                <div className="col-md-4 passada">
                  <img
                    src={georgeAdult}
                    className="d-block w-100 img-fluid rounded shadow"
                    alt="George Harrison 3"
                  />
                </div>
              </div>
            </div>

            {/* Grupo 2 (Próximas 3 fotos - totalizando 6) */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 passada">
                  <img
                    src={georgeYoung}
                    className="d-block w-100 img-fluid rounded shadow"
                    alt="George Harrison 4"
                  />
                </div>
                <div className="col-md-4 passada">
                  <img
                    src={georgeLifetime}
                    className="d-block w-100 img-fluid rounded shadow"
                    alt="George Harrison 5"
                  />
                </div>
                <div className="col-md-4 passada">
                  <img
                    src={georgeOld}
                    className="d-block w-100 img-fluid rounded shadow"
                    alt="George Harrison 6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botões de Navegação (Avançar e Voltar) posicionados corretamente */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carrosselGeorge"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carrosselGeorge"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </>
  );
}