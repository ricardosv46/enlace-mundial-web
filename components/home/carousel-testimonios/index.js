import React from "react";

// Componentes
import CardTestimonio from "../../cards/card-testimonio";

export default function CarouselBlog(props) {
  const items = [
    {
      imagen: "http://cde.3.elcomercio.pe/ima/0/1/6/9/1/1691349.jpg",
      nombre: "Esmeralda Kathleen",
      comentario:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
    {
      imagen: "http://cde.3.elcomercio.pe/ima/0/1/6/9/1/1691349.jpg",
      nombre: "Esmeralda Kathleen",
      comentario:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
    {
      imagen: "http://cde.3.elcomercio.pe/ima/0/1/6/9/1/1691349.jpg",
      nombre: "Esmeralda Kathleen",
      comentario:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
  ];

  return (
    <section className="carousel-3-columnas mt-5 d-none d-md-block">
      <h2 className="subtitulo-general text-black">
        Nuestra gente hablando de nosotros
      </h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <section className="carousel-3-columnas__items">
              {items.map((item) => (
                <div>
                  <CardTestimonio item={item} />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
