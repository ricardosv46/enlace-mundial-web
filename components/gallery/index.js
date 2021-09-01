import React, { useState } from "react";

import Image from "next/image";

export default function Gallery() {
  const images = [
    "https://i.pinimg.com/736x/ee/96/29/ee9629083c055b90ac4b3a51533671d8.jpg",
    "https://www.boletomachupicchu.com/gutblt/wp-content/images/cusco-compania-plaza-armas.jpg",
    "https://i.pinimg.com/736x/ee/96/29/ee9629083c055b90ac4b3a51533671d8.jpg",
    "https://www.boletomachupicchu.com/gutblt/wp-content/images/cusco-compania-plaza-armas.jpg",
    "https://i.pinimg.com/736x/ee/96/29/ee9629083c055b90ac4b3a51533671d8.jpg",
  ];

  const [mainImage, setStateMainImage] = useState(images[0]);

  // asignarImagenPrincipal(images[0]);

  function asignarImagen(imagen) {
    setStateMainImage(imagen);
  }

  return (
    <div className="gallery">
      <div>
        <Image
          src={mainImage}
          alt="Picture of the author"
          className="gallery__main-image w-100"
        />
      </div>

      <section className="gallery__carousel py-5 px-1">
        <div>
          {images.map((item) => {
            return (
              <Image
                key={item}
                src={item}
                alt="Picture of the author"
                className="gallery__main-image w-100"
                onClick={() => asignarImagen(item)}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
