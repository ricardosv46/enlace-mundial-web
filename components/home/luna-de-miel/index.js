import React, { useRef } from "react";
import Swiper from "react-id-swiper";
import GestionLuna from "../../../gestion-de-endpoints/GestionLunaMiel";
import CardLunaMiel from "../../cards/card-luna-miel";
import { TittleCards, Show, SkeletorCard, SkeletorTittle } from "../../common";
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
    swiperRefMobile.current.swiper.slideNext();
    swiperRefDesktop.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
    swiperRefDesktop.current.swiper.slidePrev();
  };

  return (
    <section className="container carousel-app">
      <Show
        Condition={!loadingGetLuna}
        IsDefault={
          <div className="d-flex flex-column container">
            <SkeletorTittle />
            <div className="d-flex flex-column flex-md-row flex-wrap mb-2 mt-4">
              <SkeletorCard Class="col-12 col-md-6 col-lg-4 " />
              <SkeletorCard Class="d-none d-md-block col-md-6 col-lg-4 " />
              <SkeletorCard Class="d-none d-lg-block col-lg-4 " />
            </div>
          </div>
        }
      >
        <div className="row justify-content-center">
          <TittleCards tittle="Luna de Miel" />

          <div className="col-md-12 mt-5 position-relative">
            {/* Carousel mobile */}
            <section className=" d-md-none">
              {!loadingGetLuna && (
                <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
                  {dataLuna.map((item) => {
                    return (
                      <div key={item.lunaMielId}>
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
                      <div key={item.lunaMielId}>
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
      </Show>

    </section>
  );
};

export default LunaDeMiel;
