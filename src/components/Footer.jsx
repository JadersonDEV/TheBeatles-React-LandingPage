import React from 'react';
import logoGeorge from '../assets/img/George-Harrison-logo.png';

export default function Footer() {
  return (
    <>
      <footer className="footer-beatles">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <img
                className="img-fluid logo-footer"
                src={logoGeorge}
                alt="George Harrison"
              />
            </div>
            <div className="col-md-5">
              <p>
                <b>Trabalho de Front-end 2</b> - Banda<br />Desenvolvido por
                Jaderson Andrade.<br />Todos os direitos reservados © 2026 - The
                Beatles - George Harrison
              </p>
            </div>
            {/* Primeira fileira de links */}
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li className="nav-item">
                      <a className="nav-link" href="#home">Início</a>
                    </li>
                  </ul>
                </div>
                {/* Segunda fileira de links */}
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li className="nav-item">
                      <a className="nav-link" href="#george">Biografia</a>
                    </li>
                  </ul>
                </div>
                {/* Terceira fileira de links */}
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li className="nav-item">
                      <a className="nav-link" href="#legado">Legado</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Fim do Footer --> */}
    </>
  );
}