import react from "react";

import styles from "./styles.module.scss";

// Components
import SidebarCuenta from "@/components/mi-cuenta/sidebar";

export default function MiCuenta() {
  return (
    <>
      <section className={`${styles.miCuenta} container mt-4 mt-md-5`}>
        <div className="row justify-content-around">
          <div className="col-md-4">
            <SidebarCuenta />
          </div>

          <div className="col-md-7 mt-4 mt-md-0">
            <div className="p-3 shadow-card">
              <h3 className="subtitulo-general font-weight-bold text-left">
                Información personal
              </h3>

              <section className="mt-3">
                <div className="border-bottom pb-2">
                  <h4 className="small font-weight-bold">
                    Nombres y apellidos
                  </h4>

                  <p>Erick HL</p>
                </div>

                <div className="border-bottom mt-4 pb-2">
                  <h4 className="small font-weight-bold">
                    Tipo y N° de documento
                  </h4>

                  <p>12345678</p>
                </div>

                <div className="border-bottom mt-4 pb-2">
                  <h4 className="small font-weight-bold">
                    Dirección de correo electrónico
                  </h4>

                  <p>dev.erick95@gmail.com</p>
                </div>

                <div className="border-bottom mt-4 pb-2">
                  <h4 className="small font-weight-bold">Número de contacto</h4>

                  <p>123456789</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
