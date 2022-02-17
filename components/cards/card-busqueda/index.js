import React from "react";

import Link from "next/link";
import styles from "./styles.module.scss";

export default function CardBusqueda({ item }) {
  return (
    <div className={`${styles.cardBusqueda} mb-4`}>
      <div
        className={`${styles.cardBusqueda_imagen} mb-4`}
        style={{ backgroundImage: "url(" + item.imagenPrincipalTour?.url + ")" }}
      ></div>

      <div className="card-busqueda__contenido d-flex flex-column justify-content-between py-3 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <Link href={`/actividades-y-turismo/${item.slugTour}`}>
            <h3 className="card-title font-weight-bold my-0 pointer">
              {item?.tituloTour}
            </h3>
          </Link>

          <span className="text-muted">{item?.Departamento?.DeparNom}</span>
        </div>

        <p className="text-secondary my-0">
          {item?.descripcionLargaTour}
        </p>

        <div className="d-flex justify-content-between align-items-end">
          <p className="text-muted my-0">{item?.nroDias}</p>

          <div className="text-right">
            <span className="text-blue">Desde</span>
            <h3 className="text-blue font-weight-bold my-0">S/. {item?.precioBaseTour}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
