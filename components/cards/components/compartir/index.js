import react, { useState } from "react";

import styles from "./styles.module.scss";

export default function Compartir() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  function click(e) {
    e.preventDefault();

    mostrarContenido ? setMostrarContenido(false) : setMostrarContenido(true);
  }

  return (
    <>
      <div
        className="position-relative d-flex"
        onClick={click}
        onMouseEnter={() => setMostrarContenido(true)}
        onMouseLeave={() => setMostrarContenido(false)}
      >
        <button
          type="button"
          className={`${styles.compartir} text-dark d-flex justify-content-center align-items-center border-0`}
        >
          <span className="d-inline-block w-100 h-100">
            <i class="fas fa-share-alt"></i>
          </span>
        </button>

        {mostrarContenido ? (
          <section
            className={`${styles.compartir_contenido} d-flex align-items-center ml-2 px-2`}
          >
            <img
              src="/imagenes/redes-sociales/facebook.png"
              alt="Facebook"
              className={styles.compartir_logo}
            />
            <img
              src="/imagenes/redes-sociales/instagram.png"
              alt="Instagram"
              className={`${styles.compartir_logo} mx-2`}
            />
            <img
              src="/imagenes/redes-sociales/whatsapp.png"
              alt="Whatsapp"
              className={styles.compartir_logo}
            />
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
