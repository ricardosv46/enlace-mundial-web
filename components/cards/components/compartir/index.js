import react from "react";

import styles from "./styles.module.scss";

export default function Compartir() {
  function mostrarContenido(e) {
    e.stopPropagation();
    alert("w");
  }

  return (
    <>
      <div className="position-relative">
      <button
        type="button"
        className={`${styles.compartir} text-dark d-flex justify-content-center align-items-center border-0`}
        onClick={mostrarContenido}
      >
        <i class="fas fa-share-alt"></i>
      </button>
      
      <section className={`${styles.compartir_contenido}`}>
          Content
      </section>
      </div>
    </>
  );
}
