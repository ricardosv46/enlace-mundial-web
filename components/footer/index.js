import React from "react";

import Link from "next/link";

import RedesSociales from "@/components/general/redes-sociales";
import { dataFooter } from '../../data/dataFooter'

export default function Banner() {
  return (
    <section>
      <footer className="footer ">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center justify-content-md-between align-items-center align-items-lg-start">
                  <img src="/logo.webp" className="footer__logo" />

                  <RedesSociales />
                </div>

                <div className="col-md-6 footer__info text-center mt-5 mt-md-0">
                  <div className="row">
                    <div className="col-md-4 text-md-left  ">
                      <h3 className="footer__sub font-weight-bold">Inicio</h3>

                      <ul className="list-unstyled mt-4 ">
                        {/* <li>
                          <Link href="">Destinos destacados</Link>
                        </li>
                        <li>
                          <Link href="">Tours más pupulares</Link>
                        </li> */}
                        <li>
                          <Link href="/sobre-nosotros">Sobre nosotros</Link>
                        </li>
                        <li>
                          <Link href="/preguntas-frecuentes">
                            Preguntas frecuentes
                          </Link>
                        </li>
                        <li>
                          <Link href="/terminos-y-condiciones">
                            Términos y condiciones
                          </Link>
                        </li>
                        <li>
                          <Link href="/contacto">Contáctanos</Link>
                        </li>
                      </ul>
                    </div>
                    {dataFooter.map((obj1, k1) =>
                      <div className="col-md-4 text-md-left" key={k1}>
                        <h3 className="footer__sub font-weight-bold">
                          <Link
                            href={obj1.pathname || ''}
                          >
                            {obj1.tittle || ''}
                          </Link>
                        </h3>
                        {obj1.items.map((obj2, k2) =>
                          <ul className="list-unstyled mt-4" key={k2}>
                            <li>
                              <Link href={obj2.pathname || ''}>{obj2.subtittle || ''}</Link>
                            </li>
                          </ul>
                        )}

                      </div>)}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      <div className="copyright bg-primary py-2 border border-dark">
        <div className="container py-0 my-0">
          <div className="row justify-content-center">
            <div className="col-md-11 d-flex flex-column flex-lg-row justify-content-between align-items-center py-3">
              <div className="copyright__direccion ">
                <p>DIRECCION: Los aymaras 132. Salamanca</p>
                <p>TELEFONO: (01) 6828153</p>
              </div>

              <div className="d-flex flex-column">
                <p className="text-white my-0 text-center">
                  © 2021 Enlace Mundial Perú. Derechos Reservados.
                </p>
                <div className="text-center text-white">
                  Desarrollado por <Link href={'https://www.softaki.com/'} passHref><a target="_blank" className="badge badge-success" rel="noopener noreferrer">Softaki</a></Link>
                </div>

              </div>
              <div className="mb-2 mb-md-0 copyright__links">
                <Link
                  href="/itinerario"
                  className="copyright__link"
                >
                  Políticas de Itinerario
                </Link>

                <Link
                  href="/terminos-y-condiciones"
                  className="copyright__link"
                >
                  Términos de servicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
