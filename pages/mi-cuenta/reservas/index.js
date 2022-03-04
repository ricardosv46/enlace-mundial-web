import react, { useEffect, useState } from "react"
import Link from "next/link"

import tours from "../../../datos-paginas/api/tours"
import Head from "next/head"
import styles from "./styles.module.scss"

// Components
import SidebarCuenta from "@/components/mi-cuenta/sidebar"
import { useOrdenServices } from "../../../gestion-de-endpoints/useOrdenServices"

export default function MiCuenta() {
  const [items, setItems] = useState([])
  console.log(items)

  const { dataOrden, loadingGetData } = useOrdenServices()

  useEffect(() => {
    !loadingGetData && setItems(dataOrden?.data)
  }, [loadingGetData])

  return (
    <>
      <Head>
        <title> Enlace mundial</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>
      <section className={`${styles.reservas} container mt-4 mt-md-5`}>
        <div className='row justify-content-around'>
          <div className='col-md-4'>
            <SidebarCuenta />
          </div>

          <div className='col-md-7 mt-4 mt-md-0'>
            <div className='p-3 shadow-card'>
              <h3 className='subtitulo-general font-weight-bold text-left'>
                Mis reservaciones
              </h3>

              <section className='mt-3 mx-2'>
                {items
                  ? items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${styles.card_reserva} card bg-light border-0 mt-3 rounded`}
                        >
                          <div className=' py-3 pl-lg-2 pr-4 '>
                            <h4 className='card-title text-md ml-4'>
                              {item.titulo}
                            </h4>
                            <div className='d-flex justify-content-lg-between   '>
                              <div className='d-flex justify-content-between flex-xl-row flex-column '>
                                <div className='col-md-2'>
                                  <img
                                    src={item.imagenPrincipalTour?.url}
                                    className={`${styles.reservas_imagen}`}
                                  />
                                </div>
                                <div className='d-flex align-items-center mt-3 mt-xl-0'>
                                  <div className='col-md-10'>
                                    <div className='d-flex'>
                                      <span className='font-weight-bold '>
                                        Estado:
                                      </span>

                                      <span className='d-inline-block ml-3'>
                                        {item.estadoOrdenTour}
                                      </span>
                                    </div>

                                    <div className='d-flex mt-2'>
                                      <span className='font-weight-bold'>
                                        Fecha:
                                      </span>

                                      <span className='d-inline-block ml-3'>
                                        {item.Pasajes[0].fechaReserva}
                                      </span>
                                    </div>
                                    <div className='d-flex mt-2'>
                                      <span className='font-weight-bold '>
                                        Personas:
                                      </span>

                                      <span className='d-inline-block ml-3'>
                                        {item.Pasajes.length}
                                      </span>
                                    </div>
                                    <div className='d-flex mt-2'>
                                      <span className='font-weight-bold '>
                                        Monto:
                                      </span>

                                      <span className='d-inline-block ml-3'>
                                        s/{" "}
                                        {item.Pasajes.reduce(
                                          (total, precio) =>
                                            total + precio.precioTour,
                                          0
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='d-flex align-items-end '>
                                <div>
                                  <Link
                                    href={`/mi-cuenta/reservas/${item.ordenTourId}`}
                                    passHref
                                  >
                                    <a className='btn btn-outline-primary d-flex align-items-center mt-2 px-3'>
                                      Detalles
                                      <i className='fas fa-chevron-right ml-2'></i>
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  : ""}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
