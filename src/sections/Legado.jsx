import React from "react";
import menteIluminada from "../assets/img/menteIluminada.webp";
import GeorgeSmiling from "../assets/img/GeorgeSmiling.avif";
import beatlesGroup6 from "../assets/img/GeorgeEnd.jpg";

const BLOCOS = [
  {
    titulo: "Mente Iluminada",
    imagem: menteIluminada,
    paragrafos: [
      "Quando George Harrison partiu em novembro de 2001, o mundo despediu-se não apenas de um Beatle silencioso, mas de um verdadeiro alquimista espiritual que transformou a música pop em um portal transcendental.",
      "Enquanto o furacão de Lennon e McCartney dominava o palco, George trouxe a sensibilidade indiana e sua guitarra melancólica, provando que o impacto verdadeiro nasce da quietude e da iluminação interior.",
    ],
  },
  {
    titulo: "Luz Eterna",
    imagem: GeorgeSmiling,
    paragrafos: [
      "O legado de George transcendeu os estúdios ao abrir as portas do Ocidente para as riquezas culturais e espirituais da Índia e ao idealizar o histórico Concert for Bangladesh.",
      " Sua visão única também moldou os bastidores da cultura pop e do cinema britânico, cultivando uma vida pacífica e contemplativa em meio a flores, acordes e profunda generosidade.",
    ],
  },
  {
    titulo: "Lembrança Definitiva",
    imagem: beatlesGroup6,
    paragrafos: [
      "O que restou após sua partida não foi o vazio, mas uma vibração permanente de gentileza e arte que continua a ecoar profundamente em cada nova geração.",
      "George nos deixou a lição definitiva de que a vida material é passageira, mas a beleza gerada pelo amor e pela luz é a única coisa que realmente permanece esculpida no tempo.",
    ],
  },
];

const VIDEOS = [
  { id: "jInxwU27G30", titulo: "Shea Stadium 1965" },
  { id: "Pbg8T9r1DiQ", titulo: "A Hard Day's Night" },
];

export default function Legado() {
  return (
    <section className="container py-5">
      <div className="mb-5">
        <h2 className="display-4 fw-bold">Legado</h2>
        <p className="lead text-muted">
          Entre acordes revolucionários e quebras de barreiras, o legado de
          George Harrison prova que a arte pode mudar os rumos de uma geração.
        </p>
      </div>

      {BLOCOS.map(({ titulo, imagem, paragrafos }, i) => (
        <div
          className={`row align-items-center mb-5 passada${i % 2 === 1 ? " flex-md-row-reverse" : ""}`}
          key={titulo}
        >
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={imagem}
              alt="The Beatles"
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

      <h3 className="destaque text-center mt-5 pt-4 mb-4">
        Quando o Mundo Parou para Ouvir
      </h3>
      <div className="row g-4 justify-content-center">
        {VIDEOS.map(({ id, titulo }) => (
          <div className="col-lg-4 col-md-6 col-12 passada" key={id}>
            <div className="shadow rounded overflow-hidden">
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={titulo}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-3 bg-dark text-white">
                <h4 className="mb-0 fs-6">{titulo}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-5">
        <div className="card-body text-center p-5">
          <figure>
            <blockquote className="blockquote destaque">
              <p>
                &quot;Os Beatles existem em algum lugar em tempo espacial. Mas,
                por enquanto, enquanto estamos neste planeta, sou apenas
                eu.&quot;
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
  );
}
