import React from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Gallery from "components/gallery/index"
import ModalContacto from "components/general/modal-contacto"

import { GET_SLUG_LUNA_MIEL, URL } from "../../endpoints y url/endpoints"
import request from "graphql-request"
import LunasRelacionadas from "../../components/luna-de-miel/lunas-relacionadas"
import MenuInteriorLunaMiel from "../../components/servicios/submenu/menuInteriorLunaMiel"
import HeaderInterior from "../../components/general/publicaciones/header-interior"
import { NextSeo } from "next-seo"

export async function getServerSideProps({ params }) {
  const res = await request(URL, GET_SLUG_LUNA_MIEL, {
    slugLuna: params.slug,
  })
  const data = res?.GetSlugLunaMiel
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
      <NextSeo
        openGraph={{
          type: "website",
          url: `https://enlace-mundial-peru.vercel.app/luna-de-miel/${slug}`,
          title: data?.tituloLuna,
          description: data?.descripcionCortaLuna,
          images: [
            {
              url: data?.imagenPrincipalLuna?.url,
            },
          ],
          site_name: data?.tituloLuna,
        }}
      />
      <Head>
        <title>{data?.tituloLuna} - Enlace mundial</title>
        <meta name='description' content={data?.descripcionCortaLuna} />
        <meta name='keywords' content={data?.keywordsLuna} />
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
                  precioBase={data?.precioBaseLuna}
                  head='Luna de miel'
                  titulo={data?.tituloLuna}
                />
              </div>
            </div>
          </div>

          <MenuInteriorLunaMiel />

          {/* Info */}
          <section className='container mt-5'>
            <div className='row'>
              <div className='col-md-8 mt-3 mt-md-0'>
                <Gallery imagenes={data.galeriaLuna} />
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
                        {data.tituloLuna}
                      </h5>

                      <div className='py-2 px-3'>
                        <p className='card-text'>{data.descripcionCortaLuna}</p>
                      </div>
                    </div>
                  </div>

                  <div className='card mt-4'>
                    <div className='card-body'>
                      <h5 className='card-title font-weight-bold'>
                        Punto de partida
                      </h5>

                      <div className='py-2 px-3'>
                        <p className='card-text'>{data.puntoPartidaLuna}</p>
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
                          {data.itinerarioLuna.split(",").map((item) => {
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
                          {data.incluyeLuna.split(",").map((item) => {
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
                          {data.noIncluyeLuna.split(",").map((item) => {
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
                          {data.actividadesLuna.split(",").map((item) => {
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
                          {data.notasLuna.split(",").map((item) => {
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
                        {data?.politicasLuna.split(",").map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Similares */}
          <section id='lunas-similares' style={{ scrollMarginTop: "250px" }}>
            <div className='bg-light mt-4 py-2'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h2 className='subtitulo-general text-uppercase text-left my-0'>
                      Lunas de miel similares
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row'>
                <div className='col-md-8'>
                  <LunasRelacionadas />
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
