import React from "react";

import Link from "next/link";

import RedesSociales from "@/components/general/redes-sociales";

export default function Banner() {
  return (
    <section>
      <footer className="footer">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center justify-content-md-between align-items-center align-items-lg-start">
                  <img src="/logo.png" className="footer__logo" />

                  <RedesSociales />
                </div>

                <div className="col-md-6 footer__info text-center mt-5 mt-md-0">
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="footer__sub font-weight-bold">Inicio</h3>

                      <ul className="list-unstyled mt-4">
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

                    <div className="col-md-4">
                      <h3 className="footer__sub font-weight-bold">
                        Luna de miel
                      </h3>

                      <ul className="list-unstyled mt-4">
                        <li>
                          <Link href="#">Noticias</Link>
                        </li>
                        <li>
                          <Link href="#">Blog</Link>
                        </li>
                        <li>
                          <Link href="#">Videos</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 text-md-left pl-md-5 pr-md-0">
                      <h3 className="footer__sub font-weight-bold">Cruceros</h3>

                      <ul className="list-unstyled mt-4">
                        <li>
                          <Link href="#">Noticias</Link>
                        </li>
                        <li>
                          <Link href="#">Blog</Link>
                        </li>
                        <li>
                          <Link href="#">Videos</Link>
                        </li>
                        <li>
                          <Link href="#">Preguntas frecuentes</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>

      <div className="copyright bg-primary py-2">
        <div className="container py-0 my-0">
          <div className="row justify-content-center">
            <div className="col-md-11 d-flex flex-column flex-lg-row justify-content-between align-items-center py-3">
              <p className="text-white my-0">
                © 2021 Enlace Mundial Perú. Derechos Reservados.
              </p>

              <div className="mb-2 mb-md-0 copyright__links">
                <Link
                  href="/terminos-y-condiciones"
                  className="copyright__link"
                >
                  Política de privacidad
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
