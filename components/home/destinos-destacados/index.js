import React, { useLayoutEffect, useRef } from "react";

import Swiper from "react-id-swiper";
import { useDepartamentosServices } from "../../../Services/useDepartamentosServices";

import CardDestino from "../../cards/card-destino";

export default function DestinosDestacados() {
  const { loadingGetData, db: dataDestacados } = useDepartamentosServices();
  const destinosDestacados = [
    {
      titulo: "Cusco",
      imagen:
        "https://www.paquetesdeviajesperu.com/wp-content/uploads/2019/03/cusco-peru.jpg",
    },
    {
      titulo: "Arequipa",
      imagen:
        "https://www.paquetesdeviajesperu.com/wp-content/uploads/2019/03/cusco-peru.jpg",
    },
    {
      titulo: "Ica",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Oasis_de_Huacachina%2C_Ica%2C_Per%C3%BA%2C_2015-07-29%2C_DD_23.JPG/1200px-Oasis_de_Huacachina%2C_Ica%2C_Per%C3%BA%2C_2015-07-29%2C_DD_23.JPG",
    },
    {
      titulo: "Piura",
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Oasis_de_Huacachina%2C_Ica%2C_Per%C3%BA%2C_2015-07-29%2C_DD_23.JPG/1200px-Oasis_de_Huacachina%2C_Ica%2C_Per%C3%BA%2C_2015-07-29%2C_DD_23.JPG",
    },
    {
      titulo: "Lima",
      imagen:
        "https://media.vogue.mx/photos/5e19fa7ba3810f0008d96d3e/master/pass/Lima-%20La%20Costa%20Verde.jpg",
    },
    {
      titulo: "La libertad",
      imagen:
        "https://media.vogue.mx/photos/5e19fa7ba3810f0008d96d3e/master/pass/Lima-%20La%20Costa%20Verde.jpg",
    },
    {
      titulo: "Cusco",
      imagen:
        "https://www.paquetesdeviajesperu.com/wp-content/uploads/2019/03/cusco-peru.jpg",
    },
  ];

  let destinosTerceraFila = destinosDestacados.slice(2);

  const swiperRefMobile = useRef(null);
  const swiperRefDesktop = useRef(null);

  const carouselParamsMobile = {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 8,
  };

  const goNext = () => {
    swiperRefMobile.current.swiper.slideNext();
    // swiperRefDesktop.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
    // swiperRefDesktop.current.swiper.slidePrev();
  };

  return (
    <section className="destinos-destacados mt-5">
      <h2 className="subtitulo-general">Destinos destacados</h2>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {loadingGetData ? (
            <div>Cargando ...</div>
          ) : (
            <div className="col-md-11">
              <div className="destinos-destacados__fila-1">
                {dataDestacados.map((destino, contador) => {
                  if (contador < 2) {
                    return (
                      <div>
                        <CardDestino
                          key={destino?.DeparCodi}
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
              
                <section className="d-md-none position-relative">
                  <Swiper ref={swiperRefMobile} {...carouselParamsMobile}>
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
          )}
        </div>
      </div>
    </section>
  );
}
