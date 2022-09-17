import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function CardCrucero({ item }) {
  const ruta = "/cruceros";

  return (
    <article className={styles.cardGeneral}>
      <div className={styles.cardGeneral_wrapperimagen}>
        <Link href={`${ruta}/${item?.slugCrucero}`}>
          <section
            style={{
              backgroundImage: `url(${item?.imagenPrincipalCrucero?.url})`,
            }}
            className={`${styles.cardGeneral_imagen} pointer`}
          ></section>
        </Link>
      </div>

      <section className={styles.cardGeneral_body}>
        <Link href={`${ruta}/${item?.slugCrucero}`} passHref>
          <a className={`${styles.cardGeneral_titulo} mt-3`}>
            {item?.tituloCrucero}
          </a>
        </Link>

        <p className="text-muted mt-4">{item?.descripcionCortaCrucero}</p>

        <h4 className="card-tour__sub text-secondary text-left mt-3">
          <span
            className={`${styles.cardGeneral_icono} text-muted d-inline-block mr-2`}
          >
            <i className="fas fa-map-marker-alt"></i>
          </span>

          <span className={styles.cardGeneral_ubicacion}>
            {item?.ciudadCrucero} -{" "}
            <span style={{ textTransform: "capitalize" }}>
              {item?.regionCrucero.toLowerCase()}
            </span>{" "}
            , Perú
          </span>
        </h4>
        <div className={styles.cardGeneral_estrella_precio}>
          <p className="d-flex flex-column justify-content-end text-right">
            <span>Desde</span>

            <span
              className={`${styles.cardGeneral_precio2} text-blue font-weight-bold`}
            >
              S/. {item.precioBaseCrucero}
            </span>
          </p>

          <div className="card-tour__stars">
            <p className="text-warning small mt-2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
