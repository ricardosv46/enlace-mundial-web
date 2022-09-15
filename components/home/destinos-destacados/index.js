import React, { useRef } from "react";
import Swiper from "react-id-swiper";
import { useDepartamentosServices } from "../../../Services/useDepartamentosServices";
import CardDestino from "../../cards/card-destino";
import { TittleCards, Show } from "../../common";
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
    <section className="destinos-destacados mt-5">
      <TittleCards tittle="Destinos destacados" />

      <div className="container mt-5">
        <div className="row justify-content-center">
          <Show Condition={!loadingGetData} IsDefault={<h3>cargando</h3>}>
            <div className="col-md-11">
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
              {/* {dataDestacados.length > 2 && (
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
              )} */}
            </div>
          </Show>
        
        </div>
      </div>
    </section>
  );
}
