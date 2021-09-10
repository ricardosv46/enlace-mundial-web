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
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 2,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 3,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 4,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 5,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 6,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 7,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 8,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
    },
    {
      id: 9,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
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
              <div className="col-md-4 contenedor-card-tour" key={item.id}>
                <CardTour item={item} />
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
