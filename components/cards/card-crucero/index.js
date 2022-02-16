import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function CardCrucero({ item, }) {

  const ruta = "/cruceros";



  return (
    <article className={styles.cardGeneral}>
      <Link href={`${ruta}/${item?.slugCrucero}`}>
        <section
          style={{ backgroundImage: `url(${item?.imagenPrincipalCrucero?.url})` }}
          className={`${styles.cardGeneral_imagen} pointer`}
        ></section>
      </Link>

      <section className={styles.cardGeneral_body}>
        <Link href={`${ruta}/${item?.slugCrucero}`} passHref>
          <a className={`${styles.cardGeneral_titulo} mt-3`}>{item?.tituloCrucero}</a>
        </Link>

        <p className="text-muted mt-4">
          {item?.descripcionCortaCrucero}
        </p>

        <h4 className="card-tour__sub text-secondary text-left mt-3">
          <span
            className={`${styles.cardGeneral_icono} text-muted d-inline-block mr-2`}
          >
            <i className="fas fa-map-marker-alt"></i>
          </span>

          <span className={styles.cardGeneral_ubicacion}>
            {item?.ciudadCrucero} - <span style={{textTransform:'capitalize'}}>{item?.regionCrucero.toLowerCase()}</span> , Perú
          </span>
        </h4>

        <div className="card-tour__stars">
          <p className="text-warning small mt-2">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
        </div>
      </section>
    </article>
  );
}
