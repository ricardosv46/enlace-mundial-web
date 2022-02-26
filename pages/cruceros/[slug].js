import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"

import Gallery from "components/gallery/index"
import ModalContacto from "components/general/modal-contacto"
import { GET_SLUG_CRUCERO, URL } from "../../endpoints y url/endpoints"
import request from "graphql-request"
import CrucerosRelacionadoss from "../../components/cruceros/cruceros-relacionados"
import MenuInteriorCrucero from "../../components/servicios/submenu/menuInteriorCrucero"
import HeaderInterior from "../../components/general/publicaciones/header-interior"
export async function getServerSideProps({ params }) {
  const res = await request(URL, GET_SLUG_CRUCERO, {
    slugCrucero: params.slug,
  })
  const data = res?.GetSlugCrucero
  return {
    props: {
      data: data,
    },
  }
}

export default function Home({ data }) {
  const router = useRouter()

  let slug = router.query.slug

  return (
    <div>
      <Head>
        <title>{data?.tituloCrucero} - Enlace mundial</title>
        <meta name='description' content={data?.descripcionCortaCrucero} />
        <meta name='keywords' content={data?.keywordsCrucero} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={data?.tituloCrucero} />
        <meta
          property='og:url'
          content={`https://enlace-mundial-peru.vercel.app/cruceros/${slug}`}
        />
        <meta
          property='og:image'
          content={data?.imagenSecundariaCrucero?.url}
        />
        <meta property='og:image' content={data?.imagenPrincipalCrucero?.url} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>

      <main className='l-miel'>
        <section className='l-miel__items mt-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <HeaderInterior
                  precioBase={data?.precioBaseCrucero}
                  head='Viaje en crucero'
                  titulo={data?.tituloCrucero}
                />
              </div>
            </div>
          </div>

          <MenuInteriorCrucero />

          {/* Info */}
          <section className='container mt-5'>
            <div className='row'>
              <div className='col-md-8'>
                <Gallery imagenes={data?.galeriaCrucero} />
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
                        {data.tituloCrucero}
                      </h5>

                      <div className='py-2 px-3'>
                        <p className='card-text'>
                          {data.descripcionCortaCrucero}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='card mt-4'>
                    <div className='card-body'>
                      <h5 className='card-title font-weight-bold'>
                        Punto de partida
                      </h5>

                      <div className='py-2 px-3'>
                        <p className='card-text'>{data.puntoPartidaCrucero}</p>
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
                          {data.itinerarioCrucero.split(",").map((item) => {
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
                          {data.incluyeCrucero.split(",").map((item) => {
                            return (
                              <li
                                className='l-miel-itinerario__list-item d-flex mb-2'
                                key={item}
                              >
                                <span className='text-primary d-inline-block mr-2'>
                                  <i className='far fa-check-circle'></i>
                                </span>
                                {item}
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
                          {data.noIncluyeCrucero.split(",").map((item) => {
                            return (
                              <li
                                className='l-miel-itinerario__list-item d-flex mb-2'
                                key={item}
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
                          {data.actividadesCrucero.split(",").map((item) => {
                            return (
                              <li
                                className='l-miel-itinerario__list-item d-flex mb-2'
                                key={item}
                              >
                                <span className='text-primary d-inline-block mr-2'>
                                  <i className='far fa-check-circle'></i>
                                </span>
                                {item} (Incluida)
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
                          {data.notasCrucero.split(",").map((item) => {
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

                  <div className='card mt-4'>
                    <div className='card-body'>
                      <h5 className='card-title text-secondary font-weight-bold'>
                        Políticas de cancelación
                      </h5>

                      <div className='py-2'>
                        {data?.politicasCrucero.split(",").map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notas */}
          <section id='cruceros-similares' style={{ scrollMarginTop: "250px" }}>
            <div className='bg-light mt-4 py-2'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h2 className='subtitulo-general text-uppercase text-left my-0'>
                      Cruceros similares
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col-md-8'>
                  <CrucerosRelacionadoss />
                </div>
              </div>
            </div>
          </section>

          <ModalContacto />
        </section>
      </main>
    </div>
  )
}
