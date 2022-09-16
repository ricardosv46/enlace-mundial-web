import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

// Componentes
import Swiper from "react-id-swiper";
// import CardTour from "@/components/cards/card-tour";
import CardTour from "../../cards/card-tour";
import GestionTours from "../../../gestion-de-endpoints/GestionTours";
import { LayoutCards, TittleCards, SkeletorCard, Show } from "../../common";

const ToursPopulares = () => {
  const { dataTours, loading: loadingGetTour } = GestionTours();
  const [itemsTours, setItemsTours] = useState([]);
  useEffect(() => {
    if (!loadingGetTour) {
      setItemsTours(dataTours);
    }
  }, [loadingGetTour]);

  const swiperRefMobile = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

  const goNext = () => {
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    } */

    swiperRefMobile.current.swiper.slideNext();
  };
  const goPrev = () => {
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    } */

    swiperRefMobile.current.swiper.slidePrev();
  };

  return (
    <LayoutCards>
      <TittleCards tittle="Tour más populares" />

      <div className={`${styles.toursPopulares_container} container`}>
        {/* Carousel mobile cards */}
        <Show
          Condition={!loadingGetTour}
          IsDefault={
            <div className="d-flex flex-column flex-md-row flex-wrap mb-2">
              <SkeletorCard Class="col-md-6 col-lg-4 " />
              <SkeletorCard Class="d-none d-md-block col-md-6 col-lg-4 " />
              <SkeletorCard Class="d-none d-md-block col-md-6 col-lg-4 " />
            </div>
          }
        >
          <div className="d-md-none position-relative">
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {itemsTours &&
                itemsTours
                  .filter((data) => data.destacadoTour === "Activado")
                  .map((item) => (
                    <div key={item.tourId}>
                      <CardTour item={item} />
                    </div>
                  ))}
            </Swiper>

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

          {/* cards dekstop */}
          <div className="row d-none d-md-flex ">
            {itemsTours &&
              itemsTours
                .filter((data) => data.destacadoTour === "Activado")
                .map(
                  (item, k) =>
                    k < 3 && (
                      <div
                        className="col-md-6 col-lg-4 contenedor-card-tour"
                        key={item.tourId}
                      >
                        <CardTour item={item} />
                      </div>
                    )
                )}
          </div>
        </Show>
      </div>

      <div className="text-center">
        <Link href="/actividades-y-turismo">
          <a className="btn btn-primary">Ver más Tours</a>
        </Link>
      </div>
    </LayoutCards>
  );
};

export default ToursPopulares;
