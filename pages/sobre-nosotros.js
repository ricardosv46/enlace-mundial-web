import React, { useRef } from "react";

import Head from "next/head";

import Link from "next/link";

import Swiper from "react-id-swiper";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

import ToursPopulares from "../components/home/tours-populares/index";

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
    <div className="nosotros">
      <Head>
        <title>About page</title>
        <meta name="description" content="About description" />
      </Head>

      <section className="nosotros__banner d-flex justify-content-center align-items-center position-relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="nosotros__banner-content text-white text-center position-relative">
                <div className="row justify-content-center mt-3">
                  <div className="col-10 col-md-6">
                    <img
                      src="/logo.png"
                      alt="Picture of the author"
                      className="nosotros__logo"
                    />

                    <p className="nosotros__descripcion mt-3">
                      Somos una empresa que impulsa el turismo nacional.
                    </p>

                    <p className="nosotros__descripcion d-none d-md-block">
                      Tour (galicismo) es una palabra utilizada
                      internacionalmente para referirse a los viajes ofrecidos
                      por empresas, a las giras de cantantes, grupos musicales,
                      etc., o a los viajes ofrecidos por agencias turísticas,
                      cuando incluyen recorridos por una región, un país o
                      varios, etc.
                    </p>

                    <div className="mt-4">
                      <Link href="/" passHref>
                        <a className="btn btn-primary rounded-0 px-5">
                          Tours destacados
                        </a>
                      </Link>
                    </div>
                  </div>
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

          <div className="col-md-6 nosotros__col-2 mt-md-4">
            <h1 className="nosotros__titulo text-primary font-weight-bold">
              NOSOTROS
            </h1>

            <h2 className="nosotros__subtitulo font-weight-bold">
              Los mejores tours del Perú
            </h2>

            <p className="nosotros__descripcio mt-3">
              Tour (galicismo) es una palabra utilizada internacionalmente para
              referirse a los viajes ofrecidos por empresas, a las giras de
              cantantes, grupos musicales, etc., o a los viajes ofrecidos por
              agencias turísticas, cuando incluyen recorridos por una región, un
              país o varios, etc.
            </p>

            <p className="nosotros__descripcio mt-3">
              Tour (galicismo) es una palabra utilizada internacionalmente para
              referirse a los viajes ofrecidos por empresas.
            </p>

            <p className="nosotros__descripcio mt-3">
              Tour (galicismo) es una palabra utilizada internacionalmente para
              referirse a los viajes ofrecidos por empresas, a las giras de
              cantantes, grupos musicales, etc., o a los viajes ofrecidos por
              agencias turísticas, cuando incluyen recorridos por una región, un
              país o varios, etc.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <ToursPopulares />
      </section>
    </div>
  );
}
