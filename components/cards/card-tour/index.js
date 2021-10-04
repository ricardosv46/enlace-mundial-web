import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

// Componentes
import Like from "../components/like";

export default function CardTour({ item }) {
  return (
    <article className={styles.cardTour}>
      <Link href={`/actividades-y-turismo/${item.slug}`}>
        <section
          style={{ backgroundImage: `url(${item.imagenPrincipal})` }}
          className={`${styles.cardTour_header} position-relative pointer`}
        >
          {/* Imagen con información */}
          <div
            style={{ backgroundImage: `url(${item.imagenSecundaria})` }}
            className={`${styles.cardTour_imagenInfo} h-100 d-flex flex-column justify-content-between`}
          >
            {/* Compartir y like */}
            <div className="d-flex justify-content-between align-items-center py-2 px-3">
              <span>Compartir</span>

              <Like />
            </div>

            {/* Precio y vista */}
            <div
              className={`${styles.cardTour_precioVista} d-flex justify-content-between align-items-center py-2 px-3`}
            >
              <span className={`${styles.cardTour_precio} bg-light px-2`}>
                Desde S/. {item.precio}
              </span>

              <span>Vista</span>
            </div>
          </div>
        </section>
      </Link>

      <div className="card-tour__body p-3 p-md-4">
        <Link href={`/actividades-y-turismo/${item.slug}`}>
          <h3
            className={`${styles.cardTour_titulo} font-weight-bold my-0 pointer text-center`}
          >
            {item.titulo}
          </h3>
        </Link>

        <h4 className={`${styles.cardTour_sub} text-secondary text-left mt-2`}>
          <span className="card-tour__icono-maps text-muted d-inline-block mr-2">
            <i className="fas fa-map-marker-alt"></i>
          </span>

          <span>Huarochirí - Lima, Perú</span>
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

        {/* Días y precio */}
        <section className="d-flex justify-content-between">
          <span className="text-secondary card-tour__dia"> 1 día</span>

          <p className="d-flex flex-column justify-content-end text-right">
            <span>Desde</span>

            <span
              className={`${styles.cardTour_precio2} text-blue font-weight-bold`}
            >
              S/. {item.precio}
            </span>
          </p>
        </section>
      </div>
    </article>
  );
}
