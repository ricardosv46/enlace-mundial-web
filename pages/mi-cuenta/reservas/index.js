import react, { useState } from "react";
import Link from "next/link";

import tours from "../../../datos-paginas/api/tours";

import styles from "./styles.module.scss";

// Components
import SidebarCuenta from "@/components/mi-cuenta/sidebar";

export default function MiCuenta() {
  const [items, setItems] = useState(tours);

  return (
    <>
      <section className={`${styles.reservas} container mt-4 mt-md-5`}>
        <div className="row justify-content-around">
          <div className="col-md-4">
            <SidebarCuenta />
          </div>

          <div className="col-md-7 mt-4 mt-md-0">
            <div className="p-3 shadow-card">
              <h3 className="subtitulo-general font-weight-bold text-left">
                Mis reservaciones
              </h3>

              <section className="mt-3">
                {items
                  ? items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="card bg-light border-0 mt-3"
                        >
                          <div className="card-body">
                            <h4 className="card-title">{item.titulo}</h4>

                            <div className="row">
                              <div className="col-md-2">
                                <img
                                  src={item.imagenPrincipal}
                                  className={`${styles.reservas_imagen}`}
                                />
                              </div>

                              <div className="col-md-10">
                                <div className="d-flex">
                                  <span className="font-weight-bold">
                                    Estado:
                                  </span>

                                  <span className="d-inline-block ml-3">
                                    Completado
                                  </span>
                                </div>

                                <div className="d-flex mt-2">
                                  <span className="font-weight-bold">
                                    Fecha:
                                  </span>

                                  <span className="d-inline-block ml-3">
                                    10/12/2021
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex justify-content-end">
                              <Link
                                href={`/mi-cuenta/reservas/ejemplo`}
                                passHref
                              >
                                <a className="btn btn-outline-primary d-flex align-items-center mt-2 px-3">
                                  Detalles
                                  <i className="fas fa-chevron-right ml-2"></i>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
