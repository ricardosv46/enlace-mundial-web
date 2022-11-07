import React, { useRef } from "react";

// Componentes
import Swiper from "react-id-swiper";
import { HiChatAlt2 } from 'react-icons/hi'
import CardTestimonio from "../../cards/card-testimonio";
import { TittleCards } from "../../common";

const defaultimguser = "/imagenes/sobre-nosotros/icon_default_user.jpg"

export default function CarouselBlog(props) {
  const swiperRefMobile = useRef(null);
  const swiperRefDesktop = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

  const carouselParamsDesktop = {
    slidesPerView: 2,
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

  const items = [
    {
      id: 1,
      imagen: defaultimguser,
      nombre: "Noelia Ponce Enciso",
      comentario:
        "Una muy linda experiencia y buen servicio",
    },
    {
      id: 2,
      imagen: defaultimguser,
      nombre: "Henry Saez",
      comentario:
        "Un excelente Full Day San Mateo de Otao. 100% Recomendado. Gracias Enla Mundial Perú",

    },
    {
      id: 3,
      imagen: defaultimguser,
      nombre: "Luz Maria Quintos Alarcon",
      comentario:
        "Lindos momentos con grupo la pasamos excelente mis hijas felices se divirtierón al maximo",
    },
    {
      id: 4,
      imagen: defaultimguser,
      nombre: "Garia EP Comando",
      comentario:
        "Excelenete viaje 👍💯👈 Gracias enlace mundial y guia Jasmin",
    },
    {
      id: 5,
      imagen: defaultimguser,
      nombre: "Alex Maz Naa Sanchez Hinostroza",
      comentario:
        "Súper la experiencia me encanto, quede enamorado de ICA, pero sobre todo de su gente amables y acogedora, súper las atenciones de Aldo especial como guía, gracias a la Agencia Enlace Mundial recomendadisimo si van a pasear a ICA",
    },
  ];

  return (
    <section className="container carousel-app carousel-app--testimonios">
      <div className="row justify-content-center">
        <div className="d-flex flex-row">
          <TittleCards tittle="Nuestra gente hablando de nosotros" />
          <HiChatAlt2 className="my-auto ml-4 icon-text-chat" />
        </div>
        {/* <div>
          <h2 className="subtitulo-general">
            Nuestra gente hablando de nosotros
          </h2>
        </div> */}

        <div className="col-md-11 mt-5 position-relative">
          {/* Carousel mobile */}
          <section className="d-md-none">
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {items.map((item) => {
                return (
                  <div key={item.id}>
                    <CardTestimonio item={item} />
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
                    <CardTestimonio item={item} />
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
}
