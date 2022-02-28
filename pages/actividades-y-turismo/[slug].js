import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
// import Link from "next/link";
import Script from "next/script"
import tours from "../../datos-paginas/api/tours"
import Modal from "react-bootstrap/Modal"
import Gallery from "components/gallery/index"
import Reservar from "@/components/general/reservar"
import MenuInterior from "@/components/servicios/submenu"
import HeaderInterior from "@/components/general/publicaciones/header-interior"
import request from "graphql-request"
import { GET_SLUG_TOUR, URL } from "../../endpoints y url/endpoints"
import ToursSimilares from "../../components/tours/similares"
import { NextSeo } from "next-seo"

export async function getServerSideProps({ params }) {
  const res = await request(URL, GET_SLUG_TOUR, {
    slugTour: params.slug,
  })
  const data = res?.GetSlugTour
  return {
    props: {
      data: data,
    },
  }
}

export default function Home({ data }) {
  // console.log("valor de data", data);
  const router = useRouter()

  const [mostrarModal, setMostrarModal] = useState(false)

  const [precioReal, setPrecioReal] = useState(null)
  const cerrarModalReserva = () => setMostrarModal(false)
  const mostrarModalReserva = () => setMostrarModal(true)
  let slug = router.query.slug

  // Supervisar scroll
  const [sidebarFixed, setSidebarFixed] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset

      // Calcular scroll para sidebar
      currentPosition >= 4000 ? setSidebarFixed(false) : setSidebarFixed(true)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollTop])

  return (
    <div>
      <Head>
        <title>{data.tituloTour} - Enlace mundial</title>
        <meta name='description' content={data.descripcionCortaTour} />
        <meta name='keywords' content={data.keywordsTour} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>
      <NextSeo
        openGraph={{
          type: "website",
          url: `https://enlace-mundial-peru.vercel.app/actividades-y-turismo/${slug}`,
          title: data?.tituloTour,
          description: data?.descripcionCortaTour,
          images: [
            {
              url: data?.imagenPrincipalTour?.url,
            },
          ],
          site_name: data?.tituloTour,
        }}
      />

      {/* reservar un tour con una fecha asignada version mobile*/}
      <Modal
        dialogClassName='modal-auth'
        show={mostrarModal}
        onHide={cerrarModalReserva}
        centered
      >
        <section>
          <div className='d-flex justify-content-end  '>
            {" "}
            <p
              className='font-weight-bold btn  mr-2'
              style={{ fontSize: "2rem", color: "#61be00" }}
              onClick={cerrarModalReserva}
            >
              x
            </p>{" "}
          </div>
          <Reservar
            producto={data}
            tourId={data.tourId}
            setPrecioReal={setPrecioReal}
          />
        </section>
      </Modal>

      <main className='actividades-turismo'>
        <section className='mt-2'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <HeaderInterior
                  slug={data.tourTitulo}
                  precioBase={data?.precioBaseTour}
                  precioReal={precioReal}
                  head='TOUR'
                  titulo={data?.tituloTour}
                />
              </div>
            </div>
          </div>

          <MenuInterior />

          {/* Info */}
          <section className='container mt-5'>
            <div className='row'>
              <div className='col-md-8'>
                <Gallery imagenes={data.galeriaTour} />
              </div>

              <div className='col-md-4 d-none d-md-block'>
                {/* Solo desktop */}
                <section
                  className={
                    sidebarFixed
                      ? "sidebar-reservar sidebar-reservar--fixed"
                      : "sidebar-reservar"
                  }
                >
                  <h3 className='sidebar-reservar__titulo font-weight-bold text-uppercase text-secondary my-0'>
                    Descubre grandes lugares
                  </h3>

                  <Reservar
                    producto={data}
                    tourId={data.tourId}
                    setPrecioReal={setPrecioReal}
                  />
                </section>
              </div>
            </div>
          </section>

          {/* Detalles */}
          <section id='detalles' style={{ scrollMarginTop: "170px" }}>
            <div className='container-fluid bg-light mt-4 py-2'>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='subtitulo-general text-uppercase my-0'>
                    Detalles
                  </h2>
                </div>
              </div>
            </div>

            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title font-weight-bold'>
                        {data.tituloTour}
                      </h5>

                      <div className='py-2 px-3'>
                        <p className='card-text'>{data.descripcionCortaTour}</p>
                      </div>
                    </div>
                  </div>

                  <div className='card mt-4'>
                    <div className='card-body'>
                      <h5 className='card-title font-weight-bold'>
                        Punto de partida
                      </h5>

                      <div className='py-2 px-3'>
                        <p className='card-text'>{data.puntoPartidaTour}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Itinerario */}
          <section id='itinerario' style={{ scrollMarginTop: "250px" }}>
            <div className='container-fluid bg-light mt-4 py-2'>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='subtitulo-general text-uppercase my-0'>
                    Itinerario
                  </h2>
                </div>
              </div>
            </div>

            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title text-secondary font-weight-bold'>
                        Itinerario
                      </h5>

                      <div className='py-2'>
                        <ul className='list-unstyled'>
                          {data.itinerarioTour.split(",").map((item) => {
                            return (
                              <li
                                className='l-miel-itinerario__list-item d-flex mb-2'
                                key={item}
                              >
                                <span className='text-primary d-inline-block mr-2'>
                                  <i className='fas fa-check'></i>
                                </span>
                                {item}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Incluye */}
          <section id='incluye' style={{ scrollMarginTop: "250px" }}>
            <div className='container-fluid bg-light mt-4 py-2'>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='subtitulo-general text-uppercase my-0'>
                    Incluye
                  </h2>
                </div>
              </div>
            </div>

            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title text-secondary font-weight-bold'>
                        Incluye
                      </h5>

                      <div className='py-2'>
                        <ul className='list-unstyled'>
                          {data?.IncluyeTour?.map((item) => {
                            return (
                              <li
                                className='l-miel-itinerario__list-item d-flex mb-2'
                                key={item?.incluyeId}
                              >
                                <span className='text-primary d-inline-block mr-2'>
                                  <i className='far fa-check-circle'></i>
                                </span>
                                {item?.descripcionIncluye}
                              </li>
                            )
                          })}
                        </ul>
                      </div>

                      <h5 className='card-title text-secondary font-weight-bold'>
                        No incluye
                      </h5>

                      <div className='py-2'>
                        <ul className='list-unstyled'>
                          {data.noIncluyeTour.split(",").map((item) => {
                            return (
                              <li
                                key={item}
                                className='l-miel-itinerario__list-item d-flex mb-2'
                              >
                                <span className='text-danger d-inline-block mr-2'>
                                  <i className='far fa-check-circle'></i>
                                </span>
                                {item}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='card mt-4'>
                    <div className='card-body'>
                      <h5 className='card-title text-secondary font-weight-bold'>
                        Actividades
                      </h5>

                      <div className='py-2'>
                        <ul className='list-unstyled'>
                          {data?.ActividadesTour?.map((item) => {
                            return (
                              <li
                                key={item.actividadId}
                                className='l-miel-itinerario__list-item d-flex mb-2'
                              >
                                <span className='text-primary d-inline-block mr-2'>
                                  <i className='far fa-check-circle'></i>
                                </span>
                                {item?.descripcion_actividad}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notas */}
          <section id='notas' style={{ scrollMarginTop: "250px" }}>
            <div className='container-fluid bg-light mt-4 py-2'>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='subtitulo-general text-uppercase my-0'>
                    Notas
                  </h2>
                </div>
              </div>
            </div>

            <div className='container mt-4'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title text-secondary font-weight-bold'>
                        Notas
                      </h5>

                      <div className='py-2'>
                        <ul className='list-unstyled'>
                          {data.notasTour.split(",").map((item) => {
                            return (
                              <li
                                key={item}
                                className='l-miel-itinerario__list-item d-flex mb-2'
                              >
                                <span className='text-primary d-inline-block mr-2'>
                                  <i className='fas fa-check'></i>
                                </span>
                                {item}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='card mt-4'>
                    <div className='card-body'>
                      <h5 className='card-title text-secondary font-weight-bold'>
                        Políticas de cancelación
                      </h5>

                      <div className='py-2'>
                        <ul className='list-unstyled'>
                          {data.politicasTour.split(",").map((item) => {
                            return (
                              <li
                                key={item}
                                className='l-miel-itinerario__list-item d-flex mb-2'
                              >
                                <span className='text-primary d-inline-block mr-2'>
                                  <i className='fas fa-check'></i>
                                </span>
                                {item}
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reservar mobile */}
          <section className='container mt-3 d-md-none'>
            <div className='row'>
              <div className='col-md-12'>
                <button
                  type='button'
                  className='btn btn-primary btn-block btn-reservar-mobile'
                  onClick={mostrarModalReserva}
                >
                  Reservar
                </button>
              </div>
            </div>
          </section>

          {/* Te puede interesar */}
          <section className='mt-5 mt-md-0'>
            <div className='bg-light mt-4 py-2'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h2 className='subtitulo-general text-uppercase text-left my-0'>
                      Te puede interesar
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div
                  className='col-md-8'
                  id='tours-similares'
                  style={{ scrollMarginTop: "300px" }}
                >
                  <ToursSimilares deparCodi={data?.Departamento?.DeparCodi} />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>

      <Script
        src='https://kit.fontawesome.com/3bd84f9f96.js'
        crossorigin='anonymous'
      />
    </div>
  )
}
