import react, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import SubMenuMobile from "@/components/servicios/submenu/sub-menu-mobile";

export default function HeaderInterior({ slug, precio, titulo }) {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;

      // Calcular scroll para agregar o quitar clase para posicionamiento
      currentPosition >= 600 ? setHeaderFixed(true) : setHeaderFixed(false);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="container">
      <section
        className={`row bg-white ${styles.headerInterior} py-2 ${
          headerFixed ? `${styles.headerInterior__fixed} shadow-bottom` : ""
        }`}
      >
        <div className="col-8 pl-md-2 pt-2 small ">
          <span className=" text-primary font-weight-bold">TOUR - {titulo}</span>
          <h2 className="subtitulo-slug text-primary my-0">{slug}</h2>
        </div>

        <div className="col-4 col-md-3 d-flex align-items-end pl-0 pl-md-2">
          <span className="text-danger">S/.</span>
          <h3 className="text-danger ml-2">{precio}</h3>
          <p className="d-flex flex-column text-muted text-uppercase ml-2">
            <span>Por</span>
            <span>persona</span>
          </p>
        </div>

        <section className="d-md-none mt-3 pl-3">
          <SubMenuMobile />
        </section>
      </section>
    </div>
  );
}
