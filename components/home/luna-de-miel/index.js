import React, { useRef } from "react";

// Componentes
import Swiper from "react-id-swiper";
import CardGeneral from "../../cards/card-general";

const LunaDeMiel = (props) => {
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
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    } */

    swiperRefMobile.current.swiper.slideNext();
    swiperRefDesktop.current.swiper.slideNext();
  };
  const goPrev = () => {
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    } */

    swiperRefMobile.current.swiper.slidePrev();
    swiperRefDesktop.current.swiper.slidePrev();
  };

  const items = [
    {
      titulo: "Paquetes turísticos",
      idx: 1,
    },
    {
      titulo: "Paquetes turísticos 2",
      idx: 2,
    },
    {
      titulo: "Paquetes turísticos 3",
      idx: 3,
    },
    {
      titulo: "Paquetes turísticos 4",
      idx: 4,
    },
    {
      titulo: "Paquetes turísticos 5",
      idx: 5,
    },
    {
      titulo: "Paquetes turísticos 6",
      idx: 6,
    },
  ];

  return (
    <section className="container carousel-app">
      <div className="row justify-content-center">
        <div>
          <h2 className="subtitulo-general">Luna de miel</h2>
        </div>

        <div className="col-md-11 mt-5 position-relative">
          {/* Carousel mobile */}
          <section className="d-md-none">
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {items.map((item) => {
                return (
                  <div>
                    <CardGeneral item={item} />
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
                    <CardGeneral item={item} />
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
    </section>
  );
};

export default LunaDeMiel;
