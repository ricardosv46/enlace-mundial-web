import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { TravelBagTsx } from '../../common'
// Componentes
import Swiper from "react-id-swiper";
import GestionBlog from "../../../gestion-de-endpoints/GestionBlog";
import CardBlog from "../../cards/card-blog";
import { Show, TittleCards, SkeletorCard, SkeletorTittle } from "../../common";
export default function CarouselBlog() {
  const { dataBlog, loading: loadingGetBlog } = GestionBlog({ pagina: 1 });
  const Router = useRouter();

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
  return (
    <section className="carousel-3-columnas mt-5 mb-5 position-relative">
      <Show
        Condition={!loadingGetBlog}
        IsDefault={<div className="d-flex flex-column container">
          <SkeletorTittle />
          <div className="d-flex flex-column flex-md-row flex-wrap mb-2 mt-4">
            <SkeletorCard Class="col-12 col-md-6 col-lg-4 " />
            <SkeletorCard Class="d-none d-md-block col-md-6 col-lg-4 " />
            <SkeletorCard Class="d-none d-lg-block col-lg-4 " />
          </div>
        </div>
        }
      >
        <>
          <TittleCards tittle="Blogs" Push={() => Router.push("/blog")} />

          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-12 position-relative">
                {/* Carousel mobile */}
                <section className="d-md-none">
                  {!loadingGetBlog && (
                    <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
                      {dataBlog.map((item) => {
                        return (
                          <div key={item.blogId}>
                            <CardBlog item={item} />
                          </div>
                        );
                      })}
                    </Swiper>
                  )}
                </section>

                {/* Carousel desktop */}
                <section className="d-none d-md-block">
                  {!loadingGetBlog && (
                    <Swiper ref={swiperRefDesktop} {...carouselParamsDesktop}>
                      {dataBlog.map((item) => {
                        return (
                          <div key={item.blogId}>
                            <CardBlog item={item} />
                          </div>
                        );
                      })}
                    </Swiper>
                  )}
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
          </div>
          <TravelBagTsx ClassName={'wrapperTravelBagDestinosDesctacados1'} />
          <TravelBagTsx ClassName={'wrapperTravelBagDestinosDesctacados2'} />

          <div className="text-center">
            <Link href="/blog">
              <a className="btn btn-primary">Ver más Blogs</a>
            </Link>
          </div>
        </>
      </Show>

    </section>
  );
}
