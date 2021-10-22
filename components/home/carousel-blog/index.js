import React, { useState, useRef } from "react";
import Link from "next/link";

// Componentes
import Swiper from "react-id-swiper";
import CardBlog from "../../cards/card-blog";

import posts from "../../../datos-paginas/api/blog";

export default function CarouselBlog(props) {
  const [items, setItems] = useState(posts);

  const swiperRefMobile = useRef(null);
  const swiperRefDesktop = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

  const carouselParamsDesktop = {
    slidesPerView: 3,
    spaceBetween: 20,
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
    <section className="carousel-3-columnas mt-5">
      <h2 className="subtitulo-general text-black">
        <Link href="/blog" passHref>
          <a className="text-dark text-decoration-none">Blog</a>
        </Link>
      </h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11 position-relative">
            {/* Carousel mobile */}
            <section className="d-md-none">
              <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
                {items.map((item) => {
                  return (
                    <div key={item.id}>
                      <CardBlog item={item} />
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
                    <div key={item.id}>
                      <CardBlog item={item} key={item.id} />
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
      </div>
    </section>
  );
}
