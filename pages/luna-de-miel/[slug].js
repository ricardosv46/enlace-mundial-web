import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Gallery from "components/gallery/index"
import ModalContacto from "components/general/modal-contacto"
import { MiniModalContacto } from "components/general/modal-contacto/mini-modal-contacto"

import { TittleOferta, SubMenuTittle, ItemMap } from '../../components/common'
import { GET_SLUG_LUNA_MIEL, URL } from "../../endpoints y url/endpoints"
import request from "graphql-request"
import { useScreenContext } from '../../context/screen'
import { ItemDetalle } from '../../components/actividades/slug/DetalleItem'
import { OtherItem } from '../../components/actividades/slug/OtherItems'
import LunasRelacionadas from "../../components/luna-de-miel/lunas-relacionadas"
import MenuInteriorLunaMiel from "../../components/servicios/submenu/menuInteriorLunaMiel"
import HeaderInterior from "../../components/general/publicaciones/header-interior"
import { NextSeo } from "next-seo"
import { dataOG } from "../../data/dataOG"
import OpenGraph from "../../components/openGraph"

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
  const { DispatchScreen } = useScreenContext()

  let slug = router.query.slug

  useEffect(() => {
    DispatchScreen({ type: 'ChangeSubTittle', payload: data?.tituloLuna })
  }, [])

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle', payload: data?.tituloLuna
    })
  }, [])

  return (
    <div>

      <OpenGraph {...{
        title: `${data?.tituloLuna} - ${dataOG.tittle}`,
        keyword: data?.keywordsLuna,
        description: data?.descripcionCortaLuna,
        url: `${dataOG.url}/luna-de-miel/${slug}`,
        img: data?.imagenPrincipalLuna?.url,
      }} />

      <main>
        {/* Cabezera, precio por persona */}
        <TittleOferta
          precioBase={data?.precioBaseLuna}
          head='Luna de miel'
          titulo={data?.tituloLuna}
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
            texto: "Lunas de Miel similares",
            url: "#lunas-similares",
          },
        ]} />
        {/* <MenuInteriorLunaMiel /> */}
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-lg-8">
              {/* Info */}
              <Gallery imagenes={data.galeriaLuna} />
              {/* Detalles */}
              <ItemDetalle
                id='detalles'
                style={{ scrollMarginTop: '170px' }}
                titulo={data.tituloLuna}
                descripciontitulo={data?.descripcionLargaLuna}
                partida="Punto de partida"
                PuntoPartida={data.puntoPartidaLuna}
              />

              {/* Itinerario */}
              <OtherItem id='itinerario' tittle="Itinerario" style={{ scrollMarginTop: "250px" }}>
                <ItemMap tittle="Itinerario" data={data.itinerarioLuna.split(",")} />
              </OtherItem>

              {/* Incluye */}
              <OtherItem id="incluye" style={{ scrollMarginTop: '250px' }} tittle="Incluye">
                {/* Sub Item Incluye */}
                <ItemMap tittle="Incluye" data={data.incluyeLuna.split(',')} />
                {/* Sub Item No Incluye */}
                <ItemMap tittle="No incluye" data={data.noIncluyeLuna.split(',')} icon="cancel" color='rojo' />
                {/* Sub Item Actividades */}
                <ItemMap tittle="Actividades" data={data.actividadesLuna.split(',')} />

              </OtherItem>

              {/* Notas */}
              <OtherItem id="notas" style={{ scrollMarginTop: '250px' }} tittle="Notas">
                {/* Sub Item Notas */}
                <ItemMap tittle="Notas" data={data.notasLuna.split(',')} />
                {/* Sub Item Políticas de cancelación */}
                <ItemMap tittle="Políticas de cancelación" data={data.politicasLuna.split(',')} />
              </OtherItem>


              {/* Similares */}
              <section id='lunas-similares' style={{ scrollMarginTop: "250px" }}>
                <div className='bg-light mt-4 py-2'>
                  <div className='container'>
                    <h2 className='subtitulo-general text-uppercase '>
                      Lunas de miel similares
                    </h2>
                  </div>
                </div>

                <div className='container'>
                  <LunasRelacionadas />
                </div>
              </section>
            </div>
            <div className='col-lg-4 d-none d-lg-block border-danger'>
              <ModalContacto />
            </div>
            {/* <MiniModalContacto /> */}

          </div>
        </div>



      </main>
    </div>
  )
}
