import React from "react";

// swiper component
import Swiper from "react-id-swiper";

import { useRef } from "react";

// Componentes
import CardGeneral from "../../cards/card-general";

const CarouselApp = (props) => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const items = [
    {
      content: "Slide1",
      idx: 1,
    },
    {
      content: "Slide2",
      idx: 2,
    },
    {
      content: "Slide3",
      idx: 3,
    },
    {
      content: "Slide4",
      idx: 4,
    },
    {
      content: "Slide5",
      idx: 5,
    },
    {
      content: "Slide6",
      idx: 6,
    },
  ];

  // Add eventlisteners for swiper after initializing
  const params = {
    slidesPerView: props.slidesPerView,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
  };

  return (
    <section className="container carousel-app">
      <div className="row justify-content-center">
        <div>
          <h2>{props.titulo}</h2>
        </div>

        <div className="col-md-11">
          <Swiper ref={swiperRef} {...params}>
            <div className="border">
              <CardGeneral />
            </div>
            <div className="border">
              <CardGeneral />
            </div>
            <div className="border">
              <CardGeneral />
            </div>
            <div className="border">
              <CardGeneral />
            </div>
            <div className="border">
              <CardGeneral />
            </div>
          </Swiper>

          <button
            type="button"
            className="carousel-app__btn carousel-app__btn--prev"
            onClick={goPrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="carousel-app__btn carousel-app__btn--next"
            onClick={goNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselApp;
