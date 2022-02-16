import React, { useRef } from "react";
import Swiper from "react-id-swiper";
import GestionLuna from "../../../gestion-de-endpoints/GestionLunaMiel";
import CardLunaMiel from "../../cards/card-luna-miel";

const LunaDeMiel = () => {
  const { dataLuna, loading: loadingGetLuna } = GestionLuna();

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
  // const lunaDeMiel=dataLuna?dataLuna
  return (
    <section className="container carousel-app">
      <div className="row justify-content-center">
        <div>
          <h2 className="subtitulo-general">Luna de miel</h2>
        </div>

        <div className="col-md-11 mt-5 position-relative">
          {/* Carousel mobile */}
          <section className=" d-md-none">
            {!loadingGetLuna && (
              <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
                {dataLuna.map((item) => {
                  return (
                    <div key={item.lunaId}>
                      <CardLunaMiel item={item} />
                    </div>
                  );
                })}
              </Swiper>
            )}
          </section>

          {/* Carousel desktop */}
          <section className="d-none d-md-block">
            {!loadingGetLuna && (
              <Swiper ref={swiperRefDesktop} {...carouselParamsDesktop}>
                {dataLuna.map((item) => {
                  return (
                    <div key={item.lunaId}>
                      <CardLunaMiel item={item} />
                    </div>
                  );
                })}
              </Swiper>
            )}
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
};

export default LunaDeMiel;
