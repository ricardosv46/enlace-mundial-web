import React from "react";

// Componentes
import CardGeneral from "../../cards/card-general";

export default function Carousel3Columnas(props) {
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
    <section className="carousel-3-columnas mt-5">
      <h2 className="subtitulo-general text-black">{props.titulo}</h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <section className="carousel-3-columnas__items">
              <div>
                <CardGeneral />
              </div>

              <div>
                <CardGeneral />
              </div>

              <div>
                <CardGeneral />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
