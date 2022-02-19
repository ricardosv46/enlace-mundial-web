import React, { useState, useRef, useEffect } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

// Componentes
import Swiper from "react-id-swiper"
import CardTour from "@/components/cards/card-tour"
import GestionTours from "../../../gestion-de-endpoints/GestionTours"

const ToursPopulares = () => {
  const { dataTours, loading: loadingGetTour } = GestionTours()
  const [itemsTours, setItemsTours] = useState([])
  useEffect(() => {
    if (!loadingGetTour) {
      setItemsTours(dataTours)
    }
  }, [loadingGetTour])

  const swiperRefMobile = useRef(null)

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  }

  const goNext = () => {
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    } */

    swiperRefMobile.current.swiper.slideNext()
  }
  const goPrev = () => {
    /* if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    } */

    swiperRefMobile.current.swiper.slidePrev()
  }

  return (
    <section className={`${styles.toursPopulares} mt-5`}>
      <h2 className='subtitulo-general subtitulo-general--border-bottom text-black'>
        Tours más populares
      </h2>

      <div className={`${styles.toursPopulares_container} container`}>
        {/* Carousel mobile */}
        <div className='row d-md-none'>
          <div className='col-12'>
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {itemsTours.length
                ? itemsTours.map((item) => {
                    if (item.destacadoTour.includes("Activado")) {
                      return (
                        <div key={item.tourId}>
                          <CardTour item={item} />
                        </div>
                      )
                    }
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
                if (item.destacadoTour.includes("Activado")) {
                  return (
                    <div
                      className='col-md-4 contenedor-card-tour'
                      key={item.tourId}
                    >
                      <CardTour item={item} />
                    </div>
                  )
                }
              })
            : "No existen"}
        </div>
      </div>

      <div className='text-center'>
        <Link href='/actividades-y-turismo'>
          <a className='btn btn-primary'>Ver más Tours</a>
        </Link>
      </div>
    </section>
  )
}

export default ToursPopulares
