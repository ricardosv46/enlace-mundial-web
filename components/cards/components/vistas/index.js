import react, { useState } from "react";

import styles from "./styles.module.scss";

export default function Vistas() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  function click(e) {
    e.preventDefault();
    mostrarContenido ? setMostrarContenido(false) : setMostrarContenido(true);
  }

  return (
    <>
      <div
        className={`${styles.vistas} position-relative d-flex`}
        onClick={click}
        onMouseEnter={() => setMostrarContenido(true)}
        onMouseLeave={() => setMostrarContenido(false)}
      >
        <button
          type="button"
          className={`${styles.vistas_boton} text-dark d-flex justify-content-center align-items-center border-0`}
        >
          <span className="d-inline-block w-100 h-100">
            <i class="far fa-eye"></i>
          </span>
        </button>

        {mostrarContenido ? (
          <section
            className={`${styles.vistas_contenido} d-flex align-items-center ml-1 mr-3 px-2`}
          >
            100
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
