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
      id: 1,
      titulo: "Paquete turístico",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item",
    },
    {
      id: 2,
      titulo: "Paquete turístico 2",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-2",
    },
    {
      id: 3,
      titulo: "Paquete turístico 3",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-3",
    },
    {
      id: 4,
      titulo: "Paquete turístico 4",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-4",
    },
    {
      id: 5,
      titulo: "Paquete turístico 5",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-5",
    },
    {
      id: 6,
      titulo: "Paquete turístico 6",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-6",
    },
    {
      id: 7,
      titulo: "Paquete turístico 7",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-7",
    },
    {
      id: 8,
      titulo: "Paquete turístico 8",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-8",
    },
    {
      id: 9,
      titulo: "Paquete turístico 9",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-9",
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
                  <div key={item.titulo}>
                    <CardGeneral item={item} tipo="luna-de-miel" />
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
                  <div key={item.titulo}>
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
