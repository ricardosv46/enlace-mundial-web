import react from "react";
import Link from "next/link";

import styles from "../styles.module.scss";

// Components
import SidebarCuenta from "@/components/mi-cuenta/sidebar";

export default function MiCuenta() {
  return (
    <>
      <section className={`${styles.miCuenta} container mt-4 mt-md-5`}>
        {/* Navegación */}
        <div className="row">
          <div className="col-12 px-md-4 d-flex align-items-center">
            <Link href="/mi-cuenta" passHref>
              <a className="btn btn-link text-dark">
                Editar cuenta
                <span className="d-inline-block ml-2">
                  <i className="fas fa-angle-right"></i>
                </span>
              </a>
            </Link>

            <span className="text-primary font-weight-bold">Editar cuenta</span>
          </div>
        </div>

        <div className="row justify-content-around mt-3">
          <div className="col-md-4">
            <SidebarCuenta />
          </div>

          <div className="col-md-7 mt-4 mt-md-0">
            <div className="p-3 shadow-card">
              <h3 className="subtitulo-general font-weight-bold text-left">
                Editar información personal
              </h3>

              <section className="mt-3">
                <div className={`${styles.miCuenta_borderItem} pb-2`}>
                  <h4 className="small font-weight-bold">
                    Nombres y apellidos
                  </h4>

                  <div className="form-group">
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-4`}>
                  <h4 className="small font-weight-bold">
                    Tipo y N° de documento
                  </h4>

                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                  />
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-4`}>
                  <h4 className="small font-weight-bold">
                    Dirección de correo electrónico
                  </h4>

                  <input type="text" className="form-control" />
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-4`}>
                  <h4 className="small font-weight-bold">Número de contacto</h4>

                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                  />
                </div>

                <div className="form-group text-right mt-4">
                  <input
                    type="submit"
                    value="Actualizar"
                    className="btn btn-primary px-4"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
