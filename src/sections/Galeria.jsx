import React from 'react';
import theBeatles from '../assets/img/TheBeatles.png';
import lastDance from '../assets/img/LastDance.webp';
import theFour from '../assets/img/TheFour.jpg';

const FOTOS = [
  { src: theBeatles, alt: 'Beatles na Abbey Road' },
  { src: lastDance, alt: 'Beatles no topo do prédio' },
  { src: theFour, alt: 'Os Quatro Beatles' },
];

export default function Galeria() {
  return (
    <section className="container py-5">
      <div className="row">
        <h2 className="titulo mb-3">Os anos em comum</h2>
        {FOTOS.map(({ src, alt }) => (
          <div className="col-md-4 mb-4 mb-md-0" key={src}>
            <img className="img-fluid hoverzada" src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
}