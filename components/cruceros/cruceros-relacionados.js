import React, { useState, useRef } from "react"

// Componentes
import Swiper from "react-id-swiper"
import CardTour from "@/components/cards/card-tour"

import gestionCrucero from "../../gestion-de-endpoints/gestionCrucero"
import CardCrucero from "../cards/card-crucero"

export default function CrucerosRelacionados() {
  const { dataCrucero: items, loading: loadingGetCrucero } = gestionCrucero()

  const swiperRefMobile = useRef(null)

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  }

  const goNext = () => {
    swiperRefMobile.current.swiper.slideNext()
  }
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev()
  }

  return (
    <section className='tours-populares mt-5 '>
      <div className=' mt-5'>
        {/* Carousel mobile */}
        <div className='row d-md-none'>
          <div className='col-12'>
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {items.length &&
                items.map((item) => {
                  return (
                    <div key={item.cruceroId}>
                      <CardCrucero item={item} />
                    </div>
                  )
                })}
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

        <div className='row d-none d-md-flex '>
          {items.map((item) => {
            return (
              <div className='col-md-6 mt-4' key={item.cruceroId}>
                <CardCrucero item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
