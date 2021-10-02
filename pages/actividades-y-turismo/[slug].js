import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import Modal from "react-bootstrap/Modal";

import Gallery from "components/gallery/index";
import ToursRelacionados from "components/luna-de-miel/tours-relacionados";
import Reservar from "@/components/general/reservar";

export default function Home() {
  const router = useRouter();

  const [mostrarModal, setMostrarModal] = useState(false);

  const cerrarModalReserva = () => setMostrarModal(false);
  const mostrarModalReserva = () => setMostrarModal(true);

  let slug = router.query.slug;

  return (
    <div>
      <Head>
        <title>{slug} - Enlace mundial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
        />
      </Head>

      <Modal
        dialogClassName="modal-auth"
        show={mostrarModal}
        onHide={cerrarModalReserva}
        centered
      >
        <section>
          <Reservar />
        </section>
      </Modal>

      <main className="actividades-turismo">
        <section className="l-miel__items mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="small text-primary">Luna de miel</span>
                <h2 className="subtitulo-slug text-primary">{slug}</h2>
              </div>
            </div>
            <div className="row"></div>
          </div>

          {/* Header */}
          <header className="header-interior bg-light mt-3 py-3">
            <nav className="container">
              <div className="row">
                <div className="col-12 d-flex flex-column flex-md-row">
                  <Link href="/" passHref>
                    <a className="header-interior__link text-dark text-uppercase font-weight-bold">
                      Detalles
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a className="header-interior__link text-dark text-uppercase font-weight-bold">
                      Itinerario
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a className="header-interior__link text-dark text-uppercase font-weight-bold">
                      Incluye
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a className="header-interior__link text-dark text-uppercase font-weight-bold">
                      Notas
                    </a>
                  </Link>

                  <Link href="/" passHref>
                    <a className="l-miel__header-link text-dark text-uppercase font-weight-bold">
                      Tours similares
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          {/* Info */}
          <section className="container mt-5">
            <div className="row">
              <div className="col-md-8">
                <Gallery />
              </div>
            </div>
          </section>

          {/* Detalles */}
          <section>
            <div className="container-fluid bg-light mt-4 py-2">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="subtitulo-general text-uppercase my-0">
                    Detalles
                  </h2>
                </div>
              </div>
            </div>

            <div className="container mt-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">{slug}</h5>

                      <div className="py-2 px-3">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-4">
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">
                        Punto de partida
                      </h5>

                      <div className="py-2 px-3">
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Itinerario */}
          <section>
            <div className="container-fluid bg-light mt-4 py-2">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="subtitulo-general text-uppercase my-0">
                    Itinerario
                  </h2>
                </div>
              </div>
            </div>

            <div className="container mt-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-secondary font-weight-bold">
                        Itinerario
                      </h5>

                      <div className="py-2">
                        <ul className="list-unstyled">
                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Cuzco es una ciudad de los Andes peruanos que fue la
                            capital del Imperio Inca y es conocida por sus
                            restos arqueológicos y la arquitectura colonial
                            española.
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Cuzco es una ciudad de los Andes peruanos que fue la
                            capital del Imperio Inca y es conocida por sus
                            restos arqueológicos y la arquitectura colonial
                            española.
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Cuzco es una ciudad de los Andes peruanos que fue la
                            capital del Imperio Inca y es conocida por sus
                            restos arqueológicos y la arquitectura colonial
                            española.
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Cuzco es una ciudad de los Andes peruanos que fue la
                            capital del Imperio Inca y es conocida por sus
                            restos arqueológicos y la arquitectura colonial
                            española.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Incluye */}
          <section>
            <div className="container-fluid bg-light mt-4 py-2">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="subtitulo-general text-uppercase my-0">
                    Itinerario
                  </h2>
                </div>
              </div>
            </div>

            <div className="container mt-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-secondary font-weight-bold">
                        Incluye
                      </h5>

                      <div className="py-2">
                        <ul className="list-unstyled">
                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Transporte turístico
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Guiado profesional
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Almuerzo buffet
                          </li>
                        </ul>
                      </div>

                      <h5 className="card-title text-secondary font-weight-bold">
                        No incluye
                      </h5>

                      <div className="py-2">
                        <ul className="list-unstyled">
                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-danger d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Entradas a los atractivos
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-danger d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Guiado profesional
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-danger d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Almuerzo buffet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-4">
                    <div className="card-body">
                      <h5 className="card-title text-secondary font-weight-bold">
                        Actividades
                      </h5>

                      <div className="py-2">
                        <ul className="list-unstyled">
                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Visitas culturales (Incluida)
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Visitas culturales (Incluida)
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="far fa-check-circle"></i>
                            </span>
                            Visitas culturales (Incluida)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notas */}
          <section>
            <div className="container-fluid bg-light mt-4 py-2">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="subtitulo-general text-uppercase my-0">
                    Notas
                  </h2>
                </div>
              </div>
            </div>

            <div className="container mt-4">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-secondary font-weight-bold">
                        Notas
                      </h5>

                      <div className="py-2">
                        <ul className="list-unstyled">
                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Transporte turístico
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Guiado profesional
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Almuerzo buffet
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Almuerzo buffet
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Almuerzo buffet
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Almuerzo buffet
                          </li>

                          <li className="l-miel-itinerario__list-item d-flex mb-2">
                            <span className="text-primary d-inline-block mr-2">
                              <i className="fas fa-check"></i>
                            </span>
                            Almuerzo buffet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-4">
                    <div className="card-body">
                      <h5 className="card-title text-secondary font-weight-bold">
                        Políticas de cancelación
                      </h5>

                      <div className="py-2">
                        <p>Cancelación GRATIS hasta 24 horas del viaje</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reservar mobile */}
          <section className="container mt-3 d-md-none">
            <div className="row">
              <div className="col-md-12">
                <button
                  type="button"
                  className="btn btn-primary btn-block btn-reservar-mobile"
                  onClick={mostrarModalReserva}
                >
                  Reservar
                </button>
              </div>
            </div>
          </section>

          {/* Te puede interesar */}
          <section className="mt-5 mt-md-0">
            <div className="bg-light mt-4 py-2">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <h2 className="subtitulo-general text-uppercase text-left my-0">
                      Te puede interesar
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <ToursRelacionados />
                </div>
              </div>
            </div>
          </section>

          {/* Solo desktop */}
          <aside class="d-none d-md-block">
            <section className="sidebar-reservar text-center py-3 px-3">
              <h3 className="sidebar-reservar__titulo font-weight-bold text-uppercase text-secondary my-0">
                Descubre grandes lugares
              </h3>

              <Reservar />
            </section>
          </aside>
        </section>
      </main>

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}
