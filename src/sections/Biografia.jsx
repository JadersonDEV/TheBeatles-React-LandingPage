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

const BLOCOS = [
  {
    titulo: 'Juventude e Entrada na Banda',
    imagem: georgePortrait,
    alt: 'George Harrison jovem',
    paragrafos: [
      'George Harrison nasceu em 25 de fevereiro de 1943, em Liverpool. Sendo o membro mais jovem do grupo, conheceu Paul McCartney no ônibus escolar, e foi Paul quem o apresentou a John Lennon para integrar a primeira versão da banda.',
      'Apesar de ser inicialmente visto apenas como o garoto talentoso na guitarra solo, a dedicação técnica e a capacidade de criar arranjos de guitarra precisos e marcantes ajudaram a definir a sonoridade primária dos Beatles no início da década de 60.',
    ],
  },
  {
    titulo: 'A Era Beatles e a Espiritualidade',
    imagem: georgeSitar,
    alt: 'George Harrison e Ravi Shankar com uma Sitar',
    paragrafos: [
      'Muitas vezes apelidado de "o Beatle quieto", George cresceu imensamente como compositor nos anos finais da banda. Foi o responsável pela introdução da cítara e da música indiana no rock ocidental, influenciando o mergulho da banda na psicodelia.',
      'Suas composições ganharam um peso emocional gigantesco. Canções atemporais como "Something", "Here Comes The Sun" e "While My Guitar Gently Weeps" figuram entre as músicas mais belas e amadas de toda a discografia do grupo.',
    ],
  },
  {
    titulo: 'Carreira Solo e Legado',
    imagem: georgeSolo,
    alt: 'George Harrison carreira solo',
    classeColuna: 'preto-e-branco',
    paragrafos: [
      'Logo após a dissolução da banda, George lançou o monumental álbum triplo "All Things Must Pass" (1970), frequentemente considerado o melhor trabalho solo de um ex-Beatle, impulsionado pelo hit "My Sweet Lord".',
      'Harrison também foi pioneiro na filantropia no rock ao organizar o "Concert for Bangladesh". Faleceu em 2001, mas deixou um legado marcado pela genialidade musical e por uma profunda busca espiritual.',
    ],
  },
];

const FOTOS = [
  georgeCitar,
  georgeColored,
  georgeAdult,
  georgeYoung,
  georgeLifetime,
  georgeOld,
];

// Agrupa as fotos de 3 em 3 (cada grupo é um slide do carrossel)
const SLIDES = Array.from({ length: Math.ceil(FOTOS.length / 3) }, (_, i) =>
  FOTOS.slice(i * 3, i * 3 + 3)
);

export default function Biografia() {
  return (
    <section className="container py-5">
      <div className="mb-5">
        <h2 className="display-4 fw-bold">George Harrison</h2>
        <p className="paragrafo fs-4 text-muted">
          Guitarrista solo, compositor e a alma espiritual dos Beatles.
        </p>
      </div>

      {BLOCOS.map(({ titulo, imagem, alt, paragrafos, classeColuna }, i) => (
        <div
          className={`row align-items-center mb-5 passada${i % 2 === 1 ? ' flex-md-row-reverse' : ''}`}
          key={titulo}
        >
          <div className={`col-md-5 mb-4 mb-md-0${classeColuna ? ` ${classeColuna}` : ''}`}>
            <img
              src={imagem}
              alt={alt}
              className="img-fluid hoverzada rounded-3 shadow-sm w-100"
            />
          </div>
          <div className="col-md-7">
            <h3 className="titulo mb-3 fs-1">{titulo}</h3>
            {paragrafos.map((texto, j) => (
              <p className="paragrafo text-justificado fs-5" key={j}>
                {texto}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* Carrossel de fotos adicionais (3 imagens por slide) */}
      <h3 className="destaque">Mais Momentos de George Harrison</h3>

      <div id="carrosselGeorge" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#carrosselGeorge"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : undefined}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {SLIDES.map((grupo, i) => (
            <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={i}>
              <div className="row">
                {grupo.map((foto, j) => (
                  <div className="col-md-4 passada" key={foto}>
                    <img
                      src={foto}
                      className="d-block w-100 img-fluid rounded shadow"
                      alt={`George Harrison ${i * 3 + j + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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
    </section>
  );
}