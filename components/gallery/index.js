import React, { useState } from "react";

import styles from "./styles.module.scss";

export default function Gallery({ imagenes }) {
  const [mainImage, setStateMainImage] = useState(imagenes[0]);

  function asignarImagen(imagen) {
    setStateMainImage(imagen);
  }

  return (
    <div className={styles.gallery}>
      <div
        className={styles.gallery_principal}
        style={{ backgroundImage: "url(" + mainImage + ")" }}
      ></div>

      <section
        className={`${styles.gallery_carousel} d-flex flex-md-column justify-content-center align-items-center py-4 px-1`}
      >
        {imagenes.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: "url(" + item + ")" }}
              className={`${
                styles.gallery_carousel_item
              } mb-1 py-4 px-1 pointer ${
                item == mainImage ? styles.active : ""
              }`}
              onClick={() => asignarImagen(item)}
            ></div>
          );
        })}
      </section>
    </div>
  );
}
