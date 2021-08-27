import React, { useRef } from "react";

// Componentes
import Swiper from "react-id-swiper";
import CardTour from "@/components/cards/card-tour";

export default function ToursRelacionadoss() {
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
  ];

  const goNext = () => {
    swiperRefMobile.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
  };

  return (
    <section className="tours-populares mt-5">
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
          {items.map((item, index) => {
            return (
              <div className="col-md-6" key={index}>
                <CardTour />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
