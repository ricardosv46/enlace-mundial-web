import React, { useRef } from "react";

import Swiper from "react-id-swiper";

// Componentes
import CardDestino from "../../cards/card-destino";

export default function DestinosDestacados() {
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
    swiperRefDesktop.current.swiper.slideNext();
  };
  const goPrev = () => {
    swiperRefMobile.current.swiper.slidePrev();
    swiperRefDesktop.current.swiper.slidePrev();
  };

  return (
    <section className="destinos-destacados mt-5">
      <h2 className="subtitulo-general">Destinos destacados</h2>
    </section>
  );
}
