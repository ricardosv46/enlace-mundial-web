import React, { useRef } from "react";
import Swiper from "react-id-swiper";
import { useDepartamentosServices } from "../../../Services/useDepartamentosServices";
import CardDestino from "../../cards/card-destino";
import { TravelBagTsx } from '../../common'
import { TittleCards, Show, SkeletorDestinosDestacados, SkeletorTittle } from "../../common";
export default function DestinosDestacados() {
  const { loadingGetData, db: dataDestacados } = useDepartamentosServices();

  // let destinosTerceraFila = destinosDestacados.slice(2);

  const swiperRefMobile = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 1,
    loop: true,
  };

  const goNext = () => {
    swiperRefMobile.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
  };

  return (
    <section className="destinos-destacados mt-5 position-relative">
      <Show
        Condition={!loadingGetData}
        IsDefault={
          <div className="d-flex flex-column container">
            <SkeletorTittle />
            <div className="d-flex flex-md-row flex-wrap mt-4">
              <SkeletorDestinosDestacados Class="col-12 col-md-6" />
              <SkeletorDestinosDestacados Class="d-none d-md-block col-md-6" />
              <SkeletorDestinosDestacados Class="d-none d-md-block col-md-6 mt-2" />
              <SkeletorDestinosDestacados Class="d-none d-md-block col-md-6 mt-2" />
            </div>
          </div>
        }
      >
        <TittleCards tittle="Destinos destacados" />
        <div className="container mt-5">
          <div className="destinos-destacados__fila-1">
            {dataDestacados.map((destino, contador) => {
              if (contador < 4) {
                return (
                  <div key={destino?.DeparCodi}>
                    <CardDestino
                      item={{
                        titulo: destino?.DeparNom,
                        imagen: destino?.imagenPrincipal?.url,
                      }}
                    />
                  </div>
                );
              } else {
                return;
              }
            })}
          </div>

          {/* Fila 2 */}
          {/* Carousel mobile */}

          <section className="d-md-none position-relative  ">
            <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
              {dataDestacados.map((destino, contador) => {
                return (
                  <div key={destino?.DeparCodi}>
                    <CardDestino
                      item={{
                        titulo: destino?.DeparNom,
                        imagen: destino?.imagenPrincipal?.url,
                      }}
                    />
                  </div>
                );
              })}
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
          </section>

          {/* Carousel desktop */}
          {dataDestacados.length > 2 && (
            <div className="destinos-destacados__fila-3">
              {dataDestacados.map((destino, contador) => {
                if (contador > 2) {
                  return (
                    <div key={destino?.DeparCodi}>
                      <CardDestino
                        item={{
                          titulo: destino?.DeparNom,
                          imagen: destino?.imagenPrincipal?.url,
                        }}
                      />
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
        {/*Iconos lotties */}
        <TravelBagTsx ClassName={'wrapperTravelBagDestinosDesctacados1'} />
        <TravelBagTsx ClassName={'wrapperTravelBagDestinosDesctacados2'} />
      </Show>
    </section >
  );
}
