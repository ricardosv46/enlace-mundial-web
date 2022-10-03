import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { TittleOferta, SubMenuTittle, ItemMap } from '../../components/common'
// import {} from '../../components/actividades'
import Script from 'next/script'
import tours from '../../datos-paginas/api/tours'
import Modal from 'react-bootstrap/Modal'
import Gallery from 'components/gallery/index'
import Reservar from '@/components/general/reservar'
import { useScreenContext } from '../../context/screen'
import MenuInterior from '@/components/servicios/submenu'
import HeaderInterior from '@/components/general/publicaciones/header-interior'
import { ItemDetalle } from '../../components/actividades/slug/DetalleItem'
import { OtherItem } from '../../components/actividades/slug/OtherItems'
import request from 'graphql-request'
import { GET_SLUG_TOUR, URL } from '../../endpoints y url/endpoints'
import ToursSimilares from '../../components/tours/similares'
import { NextSeo } from 'next-seo'

export async function getServerSideProps({ params }) {
  const res = await request(URL, GET_SLUG_TOUR, {
    slugTour: params.slug
  })
  const data = res?.GetSlugTour
  return {
    props: {
      data: data
    }
  }
}

export default function Home({ data }) {
  const router = useRouter()
  const { DispatchScreen } = useScreenContext()
  const [mostrarModal, setMostrarModal] = useState(false)

  const [precioReal, setPrecioReal] = useState(null)
  const cerrarModalReserva = () => setMostrarModal(false)
  const mostrarModalReserva = () => setMostrarModal(true)
  let slug = router.query.slug

  // Supervisar scroll
  // const [sidebarFixed, setSidebarFixed] = useState(true)
  // const [scrollTop, setScrollTop] = useState(0)

  // useEffect(() => {
  //   function onScroll() {
  //     let currentPosition = window.pageYOffset

  //     // Calcular scroll para sidebar
  //     currentPosition >= 4000 ? setSidebarFixed(false) : setSidebarFixed(true)
  //   }

  //   window.addEventListener('scroll', onScroll)
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [scrollTop])

  useEffect(() => {
    DispatchScreen({ type: 'ChangeSubTittle', payload: data?.tituloTour })
  }, [])
  return (
    <div>
      {/* <Head>
        <title>{data.tituloTour} - Enlace mundial</title>
        <meta name='description' content={data.descripcionCortaTour} />
        <meta name='keywords' content={data.keywordsTour} />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head> */}
      <NextSeo
        openGraph={{
          type: 'website',
          url: `https://enlace-mundial-peru.vercel.app/actividades-y-turismo/${slug}`,
          title: data?.tituloTour,
          description: data?.descripcionCortaTour,
          images: [
            {
              url: data?.imagenPrincipalTour?.url
            }
          ],
          site_name: data?.tituloTour
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
          <div className='d-flex justify-content-end'>
            {' '}
            <p
              className='font-weight-bold btn  mr-2'
              style={{ fontSize: '2rem', color: '#61be00' }}
              onClick={cerrarModalReserva}
            >
              x
            </p>{' '}
          </div>
          <Reservar
            producto={data}
            tourId={data.tourId}
            setPrecioReal={setPrecioReal}
            precioReal={precioReal}
          />
        </section>
      </Modal>

      <main className='actividades-turismo'>

        {/* subheader Desktop */}
        {/* Cabezera, precio por persona */}
        <TittleOferta
          precioBase={data?.precioBaseTour}
          head="Tour"
          titulo={data?.tituloTour}
        />

        {/* sub cabezera items */}
        <SubMenuTittle data={[
          {
            texto: "Detalles",
            url: "#detalles",
          },
          {
            texto: "Itinerario",
            url: "#itinerario",
          },
          {
            texto: "Incluye ",
            url: "#incluye",
          },
          {
            texto: "Notas",
            url: "#notas",
          },
          {
            texto: "Tours similares",
            url: "#tours-similares",
          },
        ]} />
        {/* <MenuInterior /> */}

        {/* Info */}
        <section className='container mt-5 border-danger'>
          <div className='row'>
            <div className='col-lg-8'>
              <Gallery imagenes={data.galeriaTour} />
              {/* Detalles */}
              <ItemDetalle
                id="detalles"
                style={{ scrollMarginTop: '170px' }}
                titulo={data.tituloTour}
                descripciontitulo={data.descripcionCortaTour}
                partida="Punto de partida"
                PuntoPartida={data.puntoPartidaTour}
              />

              {/* Itinerario */}
              <OtherItem id="itinerario" style={{ scrollMarginTop: '250px' }} tittle="Itinerario"  >
                <ItemMap tittle="Itinerario" data={data.itinerarioTour.split(',')} />
              </OtherItem>

              {/* Incluye */}
              <OtherItem id="incluye" style={{ scrollMarginTop: '250px' }} tittle="Incluye">
                {/* Sub Item Incluye */}
                <ItemMap tittle="Incluye" data={data.IncluyeTour.map((obj) => obj.descripcionIncluye)} />
                {/* Sub Item No Incluye */}
                <ItemMap tittle="No incluye" data={data.noIncluyeTour.split(',')} icon="cancel" color='rojo' />
                {/* Sub Item Actividades */}
                <ItemMap tittle="Actividades" data={data?.ActividadesTour?.map((obj) => obj.descripcion_actividad)} />
              </OtherItem>

              {/* Notas */}
              <OtherItem id="notas" style={{ scrollMarginTop: '250px' }} tittle="Notas">
                {/* Sub Item Notas */}
                <ItemMap tittle="Notas" data={data.notasTour.split(',')} />
                {/* Sub Item Políticas de cancelación */}
                <ItemMap tittle="Políticas de cancelación" data={data.politicasTour.split(',')} />
              </OtherItem>

              {/* Reservar mobile */}
              <div className='container mt-3 d-lg-none'>
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
              </div>

              {/* Te puede interesar */}
              <div className='mt-5 mt-md-0'>
                <div className='bg-light mt-4 py-2'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <h2 className='subtitulo-general text-uppercase text-center my-0'>
                          Te puede interesar
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='container'>
                  <div className='row'>
                    <div
                      className='col-md-'
                      id='tours-similares'
                      style={{ scrollMarginTop: '300px' }}
                    >
                      <ToursSimilares deparCodi={data?.Departamento?.DeparCodi} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 d-none d-lg-block border-danger'>
              {/* reservar un tour con una fecha asignada Solo desktop */}
              <section
                // className={
                //   sidebarFixed
                //     ? 'sidebar-reservar sidebar-reservar--fixed'
                //     : 'sidebar-reservar'
                // }
                className='sidebar-reservar sidebar-reservar--fixed'
              >
                <h3 className='sidebar-reservar__titulo font-weight-bold text-uppercase text-secondary my-0'>
                  Descubre grandes lugares
                </h3>

                <Reservar
                  producto={data}
                  tourId={data.tourId}
                  setPrecioReal={setPrecioReal}
                  precioReal={precioReal}
                />
              </section>
            </div>
          </div>
        </section>
      </main>

      <Script
        src='https://kit.fontawesome.com/3bd84f9f96.js'
        crossorigin='anonymous'
      />
    </div>
  )
}
