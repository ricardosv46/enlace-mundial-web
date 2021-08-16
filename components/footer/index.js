import React from "react";

import Link from "next/link";

export default function Banner() {
  return (
    <section>
      <footer className="footer">
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-between">
                  <img src="/logo.png" className="footer__logo" />

                  <div className="footer__redes">
                    <img src="/imagenes/redes-sociales/facebook.png" />
                    <img src="/imagenes/redes-sociales/twitter.png" />
                    <img src="/imagenes/redes-sociales/youtube.png" />
                    <img src="/imagenes/redes-sociales/instagram.png" />
                    <img src="/imagenes/redes-sociales/whatsapp.png" />
                  </div>
                </div>

                <div className="col-md-6 footer__info text-center">
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="footer__sub font-weight-bold">Inicio</h3>

                      <ul className="list-unstyled mt-4">
                        <li>
                          <Link href="">Destinos destacados</Link>
                        </li>
                        <li>
                          <Link href="">Tours más pupulares</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4">
                      <h3 className="footer__sub font-weight-bold">
                        Luna de miel
                      </h3>

                      <ul className="list-unstyled mt-4">
                        <li>
                          <Link href="">Noticias</Link>
                        </li>
                        <li>
                          <Link href="">Blog</Link>
                        </li>
                        <li>
                          <Link href="">Videos</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-md-4 text-left pl-md-5 pr-md-0">
                      <h3 className="footer__sub font-weight-bold">Cruceros</h3>

                      <ul className="list-unstyled mt-4">
                        <li>
                          <Link href="">Noticias</Link>
                        </li>
                        <li>
                          <Link href="">Blog</Link>
                        </li>
                        <li>
                          <Link href="">Videos</Link>
                        </li>
                        <li>
                          <Link href="">Preguntas frecuentes</Link>
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

      <div className="copyright bg-primary">
        <div className="container py-0 my-0">
          <div className="row justify-content-center">
            <div className="col-md-11 d-flex justify-content-between align-items-center py-3">
              <p className="text-white my-0">
                © 2021 Enlace Mundial Perú. Derechos Reservados.
              </p>

              <div>
                <Link href="" className="copyright__link">
                  Política de privacidad
                </Link>

                <Link href="" className="copyright__link">
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
