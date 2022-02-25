import React, { useState, useRef, useEffect } from "react"
import { ApolloClient, InMemoryCache } from "@apollo/client"
import styles from "./styles.module.scss"

import tours from "../../../datos-paginas/api/tours"

// Componentes
import Swiper from "react-id-swiper"
import CardTour from "@/components/cards/card-tour"
import GestionToursSimilares from "../../../gestion-de-endpoints/GestionToursSimilares"

const ToursSimilares = ({ deparCodi }) => {
  const { dataToursSimilares, loading: loadingGetTourSimilares } =
    GestionToursSimilares({ deparCodi })
  const [itemsTours, setItemsTours] = useState([])
  useEffect(() => {
    if (!loadingGetTourSimilares) {
      setItemsTours(dataToursSimilares)
    }
  }, [loadingGetTourSimilares])

  const swiperRefMobile = useRef(null)
  const swiperRefDesktop = useRef(null)
  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  }

  const goNext = () => {
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    } */

    swiperRefMobile.current.swiper.slideNext()
    swiperRefDesktop.current.swiper.slideNext()
  }
  const goPrev = () => {
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    } */

    swiperRefMobile.current.swiper.slidePrev()
    swiperRefDesktop.current.swiper.slidePrev()
  }

  return (
    <section className={`${styles.toursPopulares} mt-5`}>
      <h2 className='subtitulo-general subtitulo-general--border-bottom text-black'>
        Tours Similares
      </h2>

      <div className={`${styles.toursPopulares_container} container`}>
        {/* Carousel mobile */}
        <div className='row d-md-none'>
          <div className='col-12'>
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {itemsTours.length
                ? itemsTours.map((item) => {
                    return (
                      <div key={item.tourId}>
                        <CardTour item={item} />
                      </div>
                    )
                  })
                : "No existen"}
            </Swiper>

            <button
              type='button'
              className='carousel-app-btn carousel-app-btn--prev'
              onClick={goPrev}
            >
              <i className='fas fa-chevron-left'></i>
            </button>
            <button
              type='button'
              className='carousel-app-btn carousel-app-btn--next'
              onClick={goNext}
            >
              <i className='fas fa-chevron-right'></i>
            </button>
          </div>
        </div>

        <div className='row d-none d-md-flex'>
          {itemsTours.length > 0
            ? itemsTours.map((item) => {
                return (
                  <div
                    className='col-md-6 contenedor-card-tour'
                    key={item.tourId}
                  >
                    <CardTour item={item} />
                  </div>
                )
              })
            : "No existen"}
        </div>
      </div>

      <div className='text-center'>
        <a href='/actividades-y-turismo' className='btn btn-primary'>
          Ver más Tours
        </a>
      </div>
    </section>
  )
}

export default ToursSimilares
