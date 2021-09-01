import React, { useRef } from "react";

// Componentes
import Swiper from "react-id-swiper";
import CardTestimonio from "../../cards/card-testimonio";

export default function CarouselBlog(props) {
  const swiperRefMobile = useRef(null);
  const swiperRefDesktop = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

  const carouselParamsDesktop = {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
  };

  const goNext = () => {
    swiperRefMobile.current.swiper.slideNext();
    swiperRefDesktop.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
    swiperRefDesktop.current.swiper.slidePrev();
  };

  const items = [
    {
      id: 1,
      imagen: "http://cde.3.elcomercio.pe/ima/0/1/6/9/1/1691349.jpg",
      nombre: "Esmeralda Kathleen",
      comentario:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
    {
      id: 2,
      imagen: "http://cde.3.elcomercio.pe/ima/0/1/6/9/1/1691349.jpg",
      nombre: "Esmeralda Kathleen",
      comentario:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
    {
      id: 3,
      imagen: "http://cde.3.elcomercio.pe/ima/0/1/6/9/1/1691349.jpg",
      nombre: "Esmeralda Kathleen",
      comentario:
        "Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces.",
    },
  ];

  return (
    <section className="container carousel-app carousel-app--testimonios">
      <div className="row justify-content-center">
        <div>
          <h2 className="subtitulo-general">
            Nuestra gente hablando de nosotros
          </h2>
        </div>

        <div className="col-md-11 mt-5 position-relative">
          {/* Carousel mobile */}
          <section className="d-md-none">
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {items.map((item) => {
                return (
                  <div key={item.id}>
                    <CardTestimonio item={item.id} />
                  </div>
                );
              })}
            </Swiper>
          </section>

          {/* Carousel desktop */}
          <section className="d-none d-md-block">
            <Swiper ref={swiperRefDesktop} {...carouselParamsDesktop}>
              {items.map((item) => {
                return (
                  <div key={item.id}>
                    <CardTestimonio item={item} />
                  </div>
                );
              })}
            </Swiper>
          </section>

          <button
            type="button"
            className="carousel-app-btn carousel-app-btn--prev"
            onClick={goPrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="carousel-app-btn carousel-app-btn--next"
            onClick={goNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
