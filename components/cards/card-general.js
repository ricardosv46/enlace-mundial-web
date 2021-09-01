import React from "react";

export default function CardGeneral({ item }) {
  return (
    <article className="card-general">
      <section className="card-general__image"></section>

      <section className="card-general__body">
        <h3 className="card-general__titulo">{item.titulo}</h3>

        <p className="text-muted mt-4">
          Encuentra experiencias insólitas siempre, tenemos las mejores ofertas.
        </p>

        <h4 className="card-tour__sub text-secondary text-left mt-3">
          <span className="card-general__icono-maps text-muted d-inline-block mr-2">
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
      </section>
    </article>
  );
}
