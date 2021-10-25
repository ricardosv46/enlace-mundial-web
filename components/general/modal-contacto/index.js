import React, { useState, useEffect } from "react";

import styles from "./styles.module.scss";

export default function ModalContacto() {
  // Supervisar scroll
  const [modalFixed, setModalFixed] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;

      // Calcular scroll para sidebar
      currentPosition >= 4000 ? setModalFixed(false) : setModalFixed(true);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <section
      className={`d-md-flex flex-column justify-content-center align-items-center ${
        styles.modalContacto
      } py-2 ${
        modalFixed ? `${styles.modalContacto__fixed} shadow-bottom` : ""
      }`}
    >
      <div className="text-center">
        <h3 className={styles.modalContacto_titulo}>¿Necesitas ayuda?</h3>

        <p>Ponte en contacto con uno de nuestros asesores</p>
      </div>

      <div className="container mt-3">
        <div className="row justify-content-lg-between">
          <div className="col-lg-5 d-flex justify-content-around justify-content-lg-between">
            <img
              src="https://www.concur.com.mx/sites/default/files/mx/support-customer-service-call_0.jpg"
              alt="Picture of the author"
              className={`${styles.modalContacto_avatar} img-fluid`}
            />

            <div className="text-center">
              <h4 className="small text-blue font-weight-bold">User support</h4>
              <button
                type="button"
                className="btn btn-primary py-1 position-relative"
              >
                <img
                  src="/imagenes/redes-sociales/whatsapp.png"
                  alt="Picture of the author"
                  className={styles.modalContacto_icono}
                />
                Contactar
              </button>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-around justify-content-lg-between mt-4 mt-lg-0">
            <img
              src="https://www.concur.com.mx/sites/default/files/mx/support-customer-service-call_0.jpg"
              className={`${styles.modalContacto_avatar} img-fluid`}
            />

            <div className="text-center">
              <h4 className="small text-blue font-weight-bold">User support</h4>
              <button
                type="button"
                className="btn btn-primary py-1 position-relative"
              >
                <img
                  src="/imagenes/redes-sociales/whatsapp.png"
                  className={styles.modalContacto_icono}
                />
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
