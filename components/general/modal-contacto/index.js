import React, { useState, useEffect } from "react"
import styles from "./styles.module.scss"

export default function ModalContacto() {
  // Supervisar scroll
  const [modalFixed, setModalFixed] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset

      // Calcular scroll para sidebar
      currentPosition >= 4000 ? setModalFixed(false) : setModalFixed(true)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return (
    <section
      // className={`d-md-flex flex-column justify-content-center align-items-center ${styles.modalContacto
      //   } py-2 ${modalFixed ? `${styles.modalContacto__fixed} shadow-bottom` : ""
      //   }`}
      className={`d-md-flex flex-column justify-content-center align-items-center shadow-bottom ${styles.modalContacto}`}
    >
      <div className='text-center'>
        <h3 className={styles.modalContacto_titulo}>¿Necesitas ayuda?</h3>
        <p className="text-muted">Ponte en contacto con uno de nuestros asesores</p>
      </div>

      <div className='container mt-3 d-flex justify-content-center'>
        <div className='row justify-content-lg-between px-md-5 px-lg-2 px-xl-5'>
          <div className='col-lg-5 d-flex flex-column justify-content-center '>
            <div className="mx-auto mb-2">
              <img
                src='https://www.concur.com.mx/sites/default/files/mx/support-customer-service-call_0.jpg'
                alt='Picture of the author'
                className={`${styles.modalContacto_avatar} `}
              />
            </div>
            <div className=''>
              <div className='d-flex flex-column align-items-center'>
                <h4 className='small text-blue font-weight-bold'>
                  User support
                </h4>
                <a
                  href='https://api.whatsapp.com/send?phone=51994945265&app=facebook&entry_point=page_cta&fbclid=IwAR3HYJYUhipLyudKE4dXrpDzXEk0jaevCEoE-S36cn4SMOLFM2T3UKZSF1c'
                  className='btn btn-primary d-flex w-btn justify-content-between py-1'
                >
                  <img
                    src='/imagenes/redes-sociales/whatsapp.svg'
                    alt='Picture of the author'
                    className={styles.modalContacto_icono}
                  />

                  <p>Contactar</p>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-5 d-flex flex-column justify-content-center '>
            <div className="mx-auto mb-2">
              <img
                src='https://www.webnexo.es/wp-content/uploads/2016/04/Call-center-salamanca-705x687.jpg'
                alt='Picture of the author'
                className={`${styles.modalContacto_avatar} `}
              />
            </div>
            <div className=''>
              <div className='d-flex flex-column align-items-center'>
                <h4 className='small text-blue font-weight-bold'>
                  User support
                </h4>
                <a
                  href='http://wa.link/9acpco'
                  className='btn btn-primary d-flex w-btn justify-content-between py-1'
                >
                  <img
                    src='/imagenes/redes-sociales/whatsapp.svg'
                    alt='Picture of the author'
                    className={styles.modalContacto_icono}
                  />

                  <p>Contactar</p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
