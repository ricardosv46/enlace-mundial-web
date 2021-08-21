import React, { useRef } from "react";

// Componentes
import Swiper from "react-id-swiper";
import CardBlog from "../../cards/card-blog";

export default function CarouselBlog(props) {
  const swiperRefMobile = useRef(null);
  const swiperRefDesktop = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

  const carouselParamsDesktop = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
  };

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

  const goNext = () => {
    swiperRefMobile.current.swiper.slideNext();
    swiperRefDesktop.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
    swiperRefDesktop.current.swiper.slidePrev();
  };

  return (
    <section className="carousel-3-columnas mt-5">
      <h2 className="subtitulo-general text-black">Blog</h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11 position-relative">
            {/* Carousel mobile */}
            <section className="d-md-none">
              <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
                {items.map((item) => {
                  return (
                    <div>
                      <CardBlog item={item} />
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
                    <div>
                      <CardBlog item={item} />
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
              <i class="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              className="carousel-app-btn carousel-app-btn--next"
              onClick={goNext}
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
