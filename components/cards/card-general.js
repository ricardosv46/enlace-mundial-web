import React from "react";

import Link from "next/link";

export default function CardGeneral({ item, tipo }) {
  let ruta = "/luna-de-miel";

  if (tipo === "cruceros") {
    ruta = "cruceros";
  }

  return (
    <article className="card-general">
      <Link href={`${ruta}/${item.slug}`}>
        <section className="card-general__image pointer"></section>
      </Link>

      <section className="card-general__body">
        <Link href={`${ruta}/${item.slug}`}>
          <h3 className="card-general__titulo pointer">{item.titulo}</h3>
        </Link>

        <p className="text-muted mt-4">
          Encuentra experiencias insólitas siempre, tenemos las mejores ofertas.
        </p>

        <h4 className="card-tour__sub text-secondary text-left mt-3">
          <span className="card-general__icono-maps text-muted d-inline-block mr-2">
            <i className="fas fa-map-marker-alt"></i>
          </span>

          <span className="small">Huarochirí - Lima, Perú</span>
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
