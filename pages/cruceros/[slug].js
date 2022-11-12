import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import { NextSeo } from "next-seo"
import Gallery from "components/gallery/index"
import ModalContacto from "components/general/modal-contacto"
import { GET_SLUG_CRUCERO, URL } from "../../endpoints y url/endpoints"
import request from "graphql-request"
import CrucerosRelacionadoss from "../../components/cruceros/cruceros-relacionados"
import { ItemDetalle } from '../../components/actividades/slug/DetalleItem'
import { OtherItem } from '../../components/actividades/slug/OtherItems'
import MenuInteriorCrucero from "../../components/servicios/submenu/menuInteriorCrucero"
import { TittleOferta, SubMenuTittle, ItemMap } from '../../components/common'
import { useScreenContext } from "../../context/screen"
import { dataOG } from "../../data/dataOG"
import OpenGraph from "../../components/openGraph"
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
  const { DispatchScreen } = useScreenContext()
  let slug = router.query.slug

  useEffect(() => {
    DispatchScreen({ type: 'ChangeSubTittle', payload: data?.tituloCrucero })
  }, [])

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle', payload: data?.tituloCrucero
    })
  }, [])

  return (
    <div>

      <OpenGraph {...{
        title: `${data?.tituloCrucero} - ${dataOG.tittle}`,
        keyword: data?.keywordsCrucero,
        description: data?.descripcionCortaCrucero,
        url: `${dataOG.url}/cruceros/${slug}`,
        img: data?.imagenPrincipalCrucero?.url
      }} />

      <main className='l-miel'>
        <section className='l-miel__items '>

          {/* Cabezera, precio por persona */}
          <TittleOferta
            precioBase={data?.precioBaseCrucero}
            head='Viaje en crucero'
            titulo={data?.tituloCrucero}
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
              texto: "Cruceros similares",
              url: "#cruceros-similares",
            },
          ]} />
          {/* <MenuInteriorCrucero /> */}

          {/* Info */}
          <div className='container mt-5'>
            <div className="row">
              <div className="col-lg-8">
                <Gallery imagenes={data?.galeriaCrucero} />

                {/* Detalles */}
                <ItemDetalle
                  id="detalles"
                  style={{ scrollMarginTop: "170px" }}
                  titulo={data.tituloCrucero}
                  descripciontitulo={data?.descripcionLargaCrucero}
                  partida="Punto de partida"
                  PuntoPartida={data.puntoPartidaCrucero}
                />

                {/* Itinerario */}
                <OtherItem id='itinerario' tittle="Itinerario" style={{ scrollMarginTop: "250px" }}>
                  <ItemMap tittle="Itinerario" data={data.itinerarioCrucero.split(",")} />
                </OtherItem>

                {/* Incluye */}

                <OtherItem id='incluye' tittle="Incluye" style={{ scrollMarginTop: "250px" }}>
                  {/* Sub Item Incluye */}
                  <ItemMap tittle="Incluye" data={data.incluyeCrucero.split(',')} />
                  {/* Sub Item No Incluye */}
                  <ItemMap tittle="No incluye" data={data.noIncluyeCrucero.split(',')} icon="cancel" color='rojo' />
                  {/* Sub Item Actividades */}
                  <ItemMap tittle="Actividades" data={data.actividadesCrucero.split(',')} />

                </OtherItem>

                {/* Notas */}
                <OtherItem id="notas" style={{ scrollMarginTop: '250px' }} tittle="Notas">
                  {/* Sub Item Notas */}
                  <ItemMap tittle="Notas" data={data.notasCrucero.split(',')} />
                  {/* Sub Item Políticas de cancelación */}
                  <ItemMap tittle="Políticas de cancelación" data={data.politicasCrucero.split(',')} />
                </OtherItem>

                {/* Notas */}
                <section id='cruceros-similares' style={{ scrollMarginTop: "250px" }}>
                  <div className='bg-light mt-4 py-2 rounded'>
                    <div className='container'>
                      <h2 className='subtitulo-general text-uppercase text-center my-0'>
                        Cruceros similares
                      </h2>
                    </div>
                  </div>

                  <CrucerosRelacionadoss />
                </section>
              </div>
              <div className='col-lg-4 d-none d-lg-block border-danger'>
                <ModalContacto />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
