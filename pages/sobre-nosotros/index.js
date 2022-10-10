import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "./styles.module.scss";

// Componentes externos
import Swiper from "react-id-swiper";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

// Componentes internos
import ToursPopulares from "@/components/tours/populares";

export default function About() {
  const swiperRef = useRef(null);

  const params = {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  const items = [
    {
      id: 1,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
      imagen:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/05/d1/70.jpg",
    },
    {
      id: 2,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
      imagen:
        "https://images.france.fr/zeaejvyq9bhj/1nsdvoFkuscKIEKQkgigCg/3c9eece64c24a3d791b5237f0f4961f1/article_ImP_Tours_1120x490.jpg",
    },
    {
      id: 3,
      titulo: "Antioquía + Cochahuayco Full Day",
      slug: "antioquía-+-Cochahuayco-Full-Day",
      imagen:
        "https://educaspain.com/wp-content/uploads/2020/06/Tours-800x445.jpg",
    },
  ];

  const goNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className={styles.nosotros}>
      <Head>
        <title>About page</title>
        <meta name="description" content="About description" />
      </Head>

      <section
        className={`${styles.nosotros_banner} d-flex justify-content-center align-items-center position-relative`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="nosotros__banner-content text-white text-center position-relative">
                <div className="justify-content-center mt-3">
                  <img
                    src="/logo.png"
                    alt="Picture of the author"
                    className="nosotros__logo"
                  />

                  <h1 className="font-weight-bold mt-4">Sobre nosotros</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-5 mt-md-4">
            <section className="carousel-nosotros">
              <Swiper ref={swiperRef} {...params}>
                {items.map((item) => {
                  return (
                    <div
                      className="carousel-nosotros__item"
                      style={{
                        backgroundImage: "url(" + item.imagen + ")",
                      }}
                      key={item.id}
                    ></div>
                  );
                })}
              </Swiper>
            </section>
          </div>

          <div className="col-md-6 nosotros__col-2 mt-md-5">
            <h2 className={`${styles.nosotros_sub1} text-primary`}>NOSOTROS</h2>

            <h3 className={`${styles.nosotros_sub2} font-weight-bold`}>
              Los mejores tours del Perú
            </h3>

            <div className="separador"></div>

            <p className="nosotros__descripcio mt-4">
              Somos una agencia de viajes con 12 años en el servicio turístico y
              contamos con un excelente staff de profesionales del área.
              Convertimos tu viaje en una experiencia mundial.
            </p>

            <p className="nosotros__descripcio mt-3">
              <span className="font-weight-bold">
                ¡Juntos reactivamos el turismo!
              </span>{" "}
              Ahora tenemos 4 súper destinos para ti:{" "}
              <span className="text-primary">#IcaParacas</span>,{" "}
              <span className="text-primary">#CordilleraLaViuda</span>{" "}
              <span className="text-primary">#Marcapomacocha</span>,{" "}
              <span className="text-primary">#Antioquía</span> y disfruta de los
              bellos paisajes que nos regala nuestro querido Perú.
            </p>

            <p className="nosotros__descripcion mt-3">
              Con todos los PROTOCOLOS de BIOSEGURIDAD 👍🕵️‍♀️ desde tu embarque.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.nosotros_mision} container bg-light`}>
        <div className="row">
          <div className="col-md-3">
            <article className="p-3">
              <h3 className="font-weight-bold">Misión</h3>

              <p className="mt-3">
                Somos una agencia de viajes con 12 años en el servicio turístico
                y contamos con un excelente staff de profesionales del área.
                Convertimos tu viaje en una experiencia mundial.
              </p>
            </article>
          </div>

          <div className="col-md-6 px-0">
            <div className={styles.nosotros_banner2}></div>
          </div>

          <div className="col-md-3">
            <article className="p-3">
              <h3 className="font-weight-bold">Visión</h3>

              <p className="mt-3">
                Somos una agencia de viajes con 12 años en el servicio turístico
                y contamos con un excelente staff de profesionales del área.
                Convertimos tu viaje en una experiencia mundial.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <ToursPopulares />
      </section>
    </div>
  );
}
