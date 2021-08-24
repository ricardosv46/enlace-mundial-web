import React from "react";

// Componentes
import Like from "./components/like";

export default function CardTour() {
  return (
    <article className="card-tour">
      <section className="card-tour__header position-relative">
        {/* Imagen con información */}
        <div className="card-tour__imagen-info h-100 d-flex flex-column justify-content-between">
          {/* Compartir y like */}
          <div className="d-flex justify-content-between align-items-center py-2 px-3">
            <span>Compartir</span>

            <Like />
          </div>

          {/* Precio y vista */}
          <div className="card-tour__precio-vista d-flex justify-content-between align-items-center py-2 px-3">
            <span className="card-tour__precio bg-light px-2">
              Desde S/. 50
            </span>

            <span>Vista</span>
          </div>
        </div>
      </section>

      <div className="card-tour__body p-3 p-md-4">
        <h3 className="card-tour__titulo text-center">
          <a href="">Antioquía + Cochahuayco Full Day</a>
        </h3>

        <h4 className="card-tour__sub text-secondary text-left">
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

            <span className="card-tour__precio-2 text-blue font-weight-bold">
              S/. 50
            </span>
          </p>
        </section>
      </div>
    </article>
  );
}
