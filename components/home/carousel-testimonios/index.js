import React, { useRef } from "react";

// Componentes
import Swiper from "react-id-swiper";
import { HiChatAlt2 } from 'react-icons/hi'
import CardTestimonio from "../../cards/card-testimonio";
import { TittleCards } from "../../common";

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
      imagen: "https://avatars.githubusercontent.com/u/499550?v=4",
      nombre: "Noelia Ponce Enciso",
      comentario:
        "Una muy linda experiencia y buen servicio",
      datetime: '2 sem'
    },
    {
      id: 2,
      imagen: "https://i.blogs.es/e3def9/torvalds3/840_560.jpg",
      nombre: "Henry Saez",
      comentario:
        "Un excelente Full Day San Mateo de Otao. 100% Recomendado. Gracias Enla Mundial Perú",
      datetime: '2 sem'

    },
    {
      id: 3,
      imagen: "http://cde.3.elcomercio.pe/ima/0/1/6/9/1/1691349.jpg",
      nombre: "Luz Maria Quintos Alarcon",
      comentario:
        "Lindos momentos con grupo la pasamos excelente mis hijas felices se divirtierón al maximo",
      datetime: '3 sem'
    },
    {
      id: 4,
      imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-1/226881649_1259373881162016_7048264828738097890_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SkM1AOK3PAcAX9ZBSEE&_nc_ht=scontent-lim1-1.xx&oh=00_AT8Td8HWaoPUwf5uP3tXeBPm6jDE97O4Yq2gdtLSE8JuHg&oe=632F328F",
      nombre: "Garia EP Comando",
      comentario:
        "Excelenete viaje 👍💯👈 Gracias enlace mundial y guia Jasmin",
      datetime: '4 sem'
    },
    {
      id: 5,
      imagen: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-1/136960823_2860703924164180_3048406233583808379_n.jpg?stp=c0.2.60.60a_cp0_dst-jpg_p60x60&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=C8HkfPo8GUsAX-aD14o&_nc_ht=scontent-lim1-1.xx&oh=00_AT8OKDs9n2rp9kM--8Q3vfQ0CDUYaaLttK4kweFReZEEMA&oe=634F37D5",
      nombre: "Alex Maz Naa Sanchez Hinostroza",
      comentario:
        "Súper la experiencia me encanto, quede enamorado de ICA, pero sobre todo de su gente amables y acogedora, súper las atenciones de Aldo especial como guía, gracias a la Agencia Enlace Mundial recomendadisimo si van a pasear a ICA",
      datetime: '4 sem'
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
