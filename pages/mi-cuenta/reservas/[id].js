import react, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import tours from "../../../datos-paginas/api/tours";

import styles from "./styles.module.scss";

// Components
import SidebarCuenta from "@/components/mi-cuenta/sidebar";

export default function MiCuenta() {
  const router = useRouter(),
    idPublicacion = parseInt(router.query.id);

  const [publicacions, setpublicacions] = useState(tours);
  const [publicacion, setPublicacion] = useState(
    publicacions.find((publicacion) => publicacion.id === idPublicacion)
  );

  /* useEffect(() => {
    setpublicacions(tours);

    const publicacion = publicacions.find((publicacion) => publicacion.id === idPublicacion);

    setPublicacion(publicacion);
  }, []); */

  return (
    <>
      <section className={`${styles.reservas} container mt-4 mt-md-5`}>
        {/* Navegación */}
        <div className="row">
          <div className="col-12 d-flex align-publicacions-center px-md-1">
            <Link href="/mi-cuenta/reservas" passHref>
              <a className="btn btn-link text-dark">
                Mis reservas
                <span className="d-inline-block ml-2">
                  <i class="fas fa-angle-right"></i>
                </span>
              </a>
            </Link>

            <span className="text-primary font-weight-bold d-flex align-items-center">
              RESERVA N° {publicacion.id}
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <SidebarCuenta />
          </div>

          <div className="col-md-8 mt-4 mt-md-0">
            <div className="shadow-card">
              <section className={`${styles.reservas_banner} p-3 bg-primary`}>
                <h3 className="subtitulo-general text-white font-weight-bold text-left mt-1">
                  {publicacion ? publicacion.titulo : ""}
                </h3>

                <p className="small text-white mt-2">
                  {publicacion.descripcion}
                </p>
              </section>

              <section className="container">
                <div className="row">
                  <div className="col">
                    <div className="card border-0">
                      <div className="card-body pt-0">
                        <div className="d-flex flex-column justify-content-between bg-light py-2 px-1">
                          <p>
                            <span className="text-muted">
                              Fecha de compra:{" "}
                            </span>
                            10/09/2021
                          </p>
                          <p>
                            <span className="text-muted">
                              Fecha de reseva:{" "}
                            </span>
                            15/09/2021
                          </p>
                        </div>

                        <div className="row mt-5">
                          <div className="col-md-3">
                            <img
                              src={publicacion.imagenPrincipal}
                              className={`${styles.reservas_imagenDetalle}`}
                            />
                          </div>

                          <div
                            className={`${styles.reservas_borderItem} col-md-9 py-3`}
                          >
                            <div className="row align-items-center">
                              <div className="col-md-3">
                                <div className="row">
                                  <div className="col-8 col-md-12">
                                    <span className="text-muted d-inline-block mr-3">
                                      Precio
                                    </span>
                                  </div>

                                  <div className="col-4 col-md-12 text-right text-md-left">
                                    <p className="mt-md-2">
                                      S/ {publicacion.precio}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="row">
                                  <div className="col-8 col-md-12">
                                    <span className="text-muted d-inline-block mr-3">
                                      Cantidad de reservas
                                    </span>
                                  </div>

                                  <div className="col-4 col-md-12 text-right text-md-left">
                                    <p className="mt-md-2">2</p>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-3">
                                <div className="row">
                                  <div className="col-8 col-md-12">
                                    <span className="text-muted d-inline-block mr-3">
                                      Subtotal
                                    </span>
                                  </div>

                                  <div className="col-4 col-md-12 text-right text-md-left">
                                    <p className="mt-md-2">
                                      S/ {publicacion.precio * 2}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row justify-content-end text-right mt-3 px-md-5">
                          <div className="col-md-9 px-md-0">
                            <p>
                              <span className="font-weight-bold d-inline-block mr-3">
                                TOTAL:
                              </span>
                              <span className="lead text-right">
                                S/ {publicacion.precio * 2}.00
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-4">
                    <div className="card border-0 shadow-card">
                      <div className="card-body p-2">
                        <h2 className="card-title text-left">
                          Resumen de pedido
                        </h2>

                        <p>
                          <span className="text-muted d-inline-block mr-3">
                            Subtotal
                          </span>
                          <span>S/ {publicacion.precio * 2}</span>
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
