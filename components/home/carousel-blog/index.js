import React, { useState, useRef } from "react"
import Link from "next/link"

// Componentes
import Swiper from "react-id-swiper"
import GestionBlog from "../../../gestion-de-endpoints/GestionBlog"
import CardBlog from "../../cards/card-blog"

export default function CarouselBlog() {
  const { dataBlog, loading: loadingGetBlog } = GestionBlog()

  const swiperRefMobile = useRef(null)
  const swiperRefDesktop = useRef(null)

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  }

  const carouselParamsDesktop = {
    slidesPerView: 3,
    spaceBetween: 10,
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
    <section className='carousel-3-columnas mt-5'>
      <h2 className='subtitulo-general text-black'>
        <Link href='/blog' passHref>
          <a className='text-dark text-decoration-none'>Blogs</a>
        </Link>
      </h2>

      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-11 position-relative'>
            {/* Carousel mobile */}
            <section className='d-md-none'>
              {!loadingGetBlog && (
                <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
                  {dataBlog.map((item) => {
                    return (
                      <div key={item.blogId}>
                        <CardBlog item={item} />
                      </div>
                    )
                  })}
                </Swiper>
              )}
            </section>

            {/* Carousel desktop */}
            <section className='d-none d-md-block'>
              {!loadingGetBlog && (
                <Swiper ref={swiperRefDesktop} {...carouselParamsDesktop}>
                  {dataBlog.map((item) => {
                    return (
                      <div key={item.blogId}>
                        <CardBlog item={item} />
                      </div>
                    )
                  })}
                </Swiper>
              )}
            </section>

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
      </div>
      <div className='text-center'>
        <Link href='/blog'>
          <a className='btn btn-primary'>Ver más Blogs</a>
        </Link>
      </div>
    </section>
  )
}
