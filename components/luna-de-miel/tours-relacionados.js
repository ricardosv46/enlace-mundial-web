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
      titulo: "Valle sagrado con Maras Moray - Cusco",
      slug: "valle-sagrado-con-maras-moray-cusco",
    },
    {
      id: 2,
      titulo: "Activiadad 2 - Cusco",
      slug: "actividad-2-cusco",
    },
    {
      id: 3,
      titulo: "Activiadad 3 - Cusco",
      slug: "actividad-3-cusco",
    },
    {
      id: 4,
      titulo: "Activiadad 4 - Cusco",
      slug: "actividad-4-cusco",
    },
    {
      id: 5,
      titulo: "Activiadad 5 - Cusco",
      slug: "actividad-5-cusco",
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
                  <div key={item.id}>
                    <CardTour item={item} />
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
          {items.map((item) => {
            return (
              <div className="col-md-6" key={item.id}>
                <CardTour item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
