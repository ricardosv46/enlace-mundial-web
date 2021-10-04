import React, { useState, useRef } from "react";

import tours from "../../../../datos-paginas/api/tours";

// Componentes
import Swiper from "react-id-swiper";
import CardTour from "@/components/cards/card-tour";

export default function ToursPopulares() {
  const [items, setItems] = useState(tours);

  const swiperRefMobile = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

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
              {items.length
                ? items.map((item) => {
                    return (
                      <div key={item.id}>
                        <CardTour item={item} />
                      </div>
                    );
                  })
                : "No existen"}
            </Swiper>

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

        <div className="row d-none d-md-flex">
          {items.length
            ? items.map((item) => {
                return (
                  <div className="col-md-4 contenedor-card-tour" key={item.id}>
                    <CardTour item={item} />
                  </div>
                );
              })
            : "No existen"}
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
