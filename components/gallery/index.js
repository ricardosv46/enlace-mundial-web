import React, { useState } from "react";

export default function Gallery() {
  const images = [
    "https://i.pinimg.com/736x/ee/96/29/ee9629083c055b90ac4b3a51533671d8.jpg",
    "https://www.boletomachupicchu.com/gutblt/wp-content/images/cusco-compania-plaza-armas.jpg",
    "https://i.pinimg.com/736x/ee/96/29/ee9629083c055b90ac4b3a51533671d8.jpg",
    "https://www.boletomachupicchu.com/gutblt/wp-content/images/cusco-compania-plaza-armas.jpg",
    "https://i.pinimg.com/736x/ee/96/29/ee9629083c055b90ac4b3a51533671d8.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  // asignarImagenPrincipal(images[0]);

  return (
    <div className="gallery">
      <div>
        <img src={mainImage} className="gallery__main-image w-100" />
      </div>

      <section className="gallery__carousel py-5 px-1">
        <div>
          {images.map((item) => {
            return <img src={item} className="gallery__main-image w-100" />;
          })}
        </div>
      </section>
    </div>
  );
}
