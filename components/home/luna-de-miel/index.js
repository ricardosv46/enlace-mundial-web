import React, { useState, useRef, useEffect } from "react";
import Swiper from "react-id-swiper";
import GestionLuna from "../../../gestion-de-endpoints/GestionLunaMiel";
import CardLunaMiel from "../../cards/card-luna-miel";

const LunaDeMiel = (props) => {
  const { dataLuna, loading: loadingGetLuna } = GestionLuna();
  const [itemsLuna, setItemsLuna] = useState([]);
  console.log("valor de data luna csmre", itemsLuna.length);
  useEffect(() => {
    if (loadingGetLuna === false) {
      setItemsLuna(dataLuna);
    }
  }, [dataLuna]);
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
    <section className="container carousel-app">
      <div className="row justify-content-center">
        <div>
          <h2 className="subtitulo-general">Luna de miel</h2>
        </div>

        <div className="col-md-11 mt-5 position-relative">
          {/* Carousel mobile */}
          <section className=" d-md-none">
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {itemsLuna.map((item) => {
                return (
                  <div key={item.lunaMielId}>
                    <CardLunaMiel item={item} tipo="luna-de-miel" />
                  </div>
                );
              })}
            </Swiper>
          </section>

          {/* Carousel desktop */}
          <section className="d-none d-md-block">
            <Swiper ref={swiperRefDesktop} {...carouselParamsDesktop}>
              {itemsLuna.map((item) => {
                return (
                  <div key={item.lunaMielId}>
                    <CardLunaMiel item={item} tipo="luna-de-miel" />
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
