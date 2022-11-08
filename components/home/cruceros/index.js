import React, { useRef } from "react";
import gestionCrucero from "../../../gestion-de-endpoints/gestionCrucero";
import Swiper from "react-id-swiper";
import CardCrucero from "../../cards/card-crucero";
import { TittleCards, Show, SkeletorTittle, SkeletorCard } from "../../common";

const Cruceros = () => {
  const { dataCrucero, loading: loadingGetCrucero } = gestionCrucero();

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

  return (
    <section className="container carousel-app ">
      <Show
        Condition={!loadingGetCrucero}
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
          <TittleCards tittle="Cruceros" />

          <div className="col-md-12 mt-5 position-relative">
            {/* Carousel mobile */}
            <section className="d-md-none">
              {!loadingGetCrucero && (
                <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
                  {dataCrucero.map((item) => {
                    return (
                      <div key={item.cruceroId}>
                        <CardCrucero item={item} />
                      </div>
                    );
                  })}
                </Swiper>
              )}
            </section>

            {/* Carousel desktop */}
            <section className="d-none d-md-block">
              {!loadingGetCrucero && (
                <Swiper ref={swiperRefDesktop} {...carouselParamsDesktop}>
                  {dataCrucero.map((item) => {
                    return (
                      <div key={item.cruceroId}>
                        <CardCrucero item={item} />
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

export default Cruceros;
