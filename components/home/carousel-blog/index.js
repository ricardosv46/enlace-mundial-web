import React from "react";

// Componentes
import CardBlog from "../../cards/card-blog";

export default function CarouselBlog(props) {
  const items = [
    {
      imagen:
        "https://i1.wp.com/instyle.mx/wp-content/uploads/2019/07/parejas-felices.jpg",
      titulo: "Y tú qué planes? Turismo, ofertas de viaje y tours por el Perú",
      descripcion:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
    {
      imagen:
        "https://i1.wp.com/instyle.mx/wp-content/uploads/2019/07/parejas-felices.jpg",
      titulo: "Y tú qué planes? Turismo, ofertas de viaje y tours por el Perú",
      descripcion:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
    {
      imagen:
        "https://i1.wp.com/instyle.mx/wp-content/uploads/2019/07/parejas-felices.jpg",
      titulo: "Y tú qué planes? Turismo, ofertas de viaje y tours por el Perú",
      descripcion:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
  ];

  return (
    <section className="carousel-3-columnas mt-5">
      <h2 className="subtitulo-general text-black">Blog</h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <section className="carousel-3-columnas__items">
              {items.map((item) => (
                <div>
                  <CardBlog item={item} />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
