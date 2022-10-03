import react, { useEffect, useState } from "react"

import styles from "./styles.module.scss"

import SubMenuMobile from "@/components/servicios/submenu/sub-menu-mobile"

export default function HeaderInterior({
  slug,
  precioBase,
  precioReal,
  titulo,
  head,
}) {
  const [headerFixed, setHeaderFixed] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset

      // Calcular scroll para agregar o quitar clase para posicionamiento
      currentPosition >= 600 ? setHeaderFixed(true) : setHeaderFixed(false)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return (
    <div className='container'>
      <section
        // className={`row bg-white ${styles.headerInterior} py-2 ${headerFixed ? `${styles.headerInterior__fixed} shadow-bottom` : ""
        //   }`}
        className={`row bg-white ${styles.headerInterior}  `}
      >
        {/* Datos del viaje o tour */}
        <div className='col-8 pl-md-2 py-2'>
          <span className=' text-primary font-weight-bold'>{head || ''} </span>
          <h2 className='subtitulo-slug text-primary'>{titulo || ''}</h2>
        </div>

        <div className='col-4 col-md-3 d-flex align-items-end pl-0 pl-md-2'>
          <span className='text-danger'>S/.</span>
          <h3 className='text-danger ml-2'>
            {precioReal ? precioReal : precioBase || 0}
          </h3>
          <p className='d-flex flex-column text-muted text-uppercase ml-2'>
            <span>Por</span>
            <span>persona</span>
          </p>
        </div>

        {/* <section className='d-md-none mt-3 pl-3'>
          <SubMenuMobile  />
        </section> */}
      </section>
    </div>
  )
}
