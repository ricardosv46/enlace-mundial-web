import React, { useRef } from "react";

// Componentes
import Swiper from "react-id-swiper";
import CardTour from "../../cards/card-tour";

export default function ToursPopulares() {
  const swiperRefMobile = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

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
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];

  const goNext = () => {
    swiperRefMobile.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
  };

  return (
    <section className="tours-populares mt-5">
      <h2 className="subtitulo-general text-black">Tours más populares</h2>

      <div className="container mt-5">
        {/* Carousel mobile */}
        <div className="row d-md-none">
          <div className="col-12">
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {items.map((item) => {
                return (
                  <div>
                    <CardTour />
                  </div>
                );
              })}
            </Swiper>

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

        <div className="row d-none d-md-flex">
          {items.map((item, index) => {
            return (
              <div className="col-md-4 contenedor-card-tour" key={index}>
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
