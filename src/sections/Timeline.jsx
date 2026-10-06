import React from 'react';
import aFormacao from '../assets/img/aFormacao.jpg';
import loveMeDo from '../assets/img/LoveMeDoTL.webp';
import sgtPepper from '../assets/img/SgtPepperTL.jpg';
import abbeyRoad from '../assets/img/AbbeyRoadTL.jpg';

const MARCOS = [
  {
    ano: '1960',
    titulo: 'A Formação',
    imagem: aFormacao,
    alt: 'Foto dos Beatles Jovens',
    texto:
      'Durante os anos iniciais tocando exaustivamente em Hamburgo e no Cavern Club em Liverpool, o grupo se consolida e, pouco depois, fecha a formação clássica com a entrada de Ringo Starr na bateria. Para um jovem George Harrison, então com apenas 17 anos, esse período de intensas apresentações ao vivo foi a escola definitiva para forjar sua identidade musical e sua presença de palco.',
  },
  {
    ano: '1962',
    titulo: 'Love Me Do',
    imagem: loveMeDo,
    alt: 'Foto do clipe de Love Me Do',
    texto:
      'O lançamento do primeiro single oficial sob a tutela do produtor George Martin marca o estopim da Beatlemania. A faixa escalou rapidamente as paradas, colocando George e seus companheiros no epicentro de uma revolução cultural sem precedentes.',
  },
  {
    ano: '1967',
    titulo: 'A Revolução no Estúdio',
    imagem: sgtPepper,
    alt: "Bastidores por trás da capa de Sgt. Pepper's Lonely Hearts Club Band",
    texto:
      'Com o lançamento do aclamado álbum "Sgt. Pepper\'s Lonely Hearts Club Band", a banda redefine os limites da música pop. Exaustos das turnês mundiais, George e os companheiros abandonam os palcos e abraçam a experimentação total no estúdio — fase em que George aprofunda ainda mais sua imersão na música indiana, introduzindo instrumentos tradicionais como a cítara no coração do som dos Beatles.',
  },
  {
    ano: '1969',
    titulo: 'Abbey Road e a Despedida',
    imagem: abbeyRoad,
    alt: 'Beatles atravessando a Abbey Road de novo',
    classeImagem: 'preto-e-branco',
    texto:
      'A icônica travessia na faixa de pedestres e o lendário concerto surpresa no telhado marcam os últimos grandes momentos do grupo. Mesmo em meio às crescentes tensões internas e ao seu amadurecimento como compositor solo — que culminaria em seu grandioso repertório próprio —, George entrega contribuições definitivas para fechar com maestria a trajetória coletiva da banda.',
  },
];

export default function Timeline() {
  return (
    <section className="container pt-5">
      {MARCOS.map(({ ano, titulo, imagem, alt, texto, classeImagem }, i) => {
        const invertido = i % 2 === 1;
        return (
          <div
            className={`row align-items-center mb-5${invertido ? ' flex-row-reverse' : ''}`}
            key={ano}
          >
            <div className="col-md-6">
              <img
                className={`img-fluid shadow zoom-imagem${classeImagem ? ` ${classeImagem}` : ''}`}
                src={imagem}
                alt={alt}
              />
            </div>
            <div className={`col-md-6 mt-4 mt-md-0${invertido ? ' text-md-end' : ''}`}>
              <p className="titulo mb-1">{ano}</p>
              <h3 className="display-7 fw-bold mb-3">{titulo}</h3>
              <p className="paragrafo text-justificado">{texto}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}