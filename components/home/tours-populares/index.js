import React from "react";

// Componentes
import CardTour from "../../cards/card-tour";

export default function ToursPopulares() {
  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <section className="tours-populares mt-5">
      <h2 className="subtitulo-general text-black">Tours más populares</h2>

      <div className="container mt-5">
        <div className="row">
          {items.map((item) => {
            return (
              <div className="col-md-4 contenedor-card-tour">
                <CardTour />
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <a href="" className="btn btn-primary">
          Ver más Tours
        </a>
      </div>
    </section>
  );
}
