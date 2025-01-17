import React, { useEffect, useState } from "react"
import Head from "next/head"
import Script from "next/script"
import { useRouter } from 'next/router'
import { useScreenContext } from '../../context/screen'
import Banner from "@/components/cruceros/banner"
import gestionCrucero from "../../gestion-de-endpoints/gestionCrucero.js"
import request from "graphql-request"
import { GestionCategoriaCrucero } from '../../gestion-de-endpoints/GestionCategoriaCrucero'
import CardGeneralCrucero from "../../components/cards/card-general-crucero"
import { Show, TittleCards, SkeletorCard } from '../../components/common'
import { useGestionGetAllCrucero } from '../../gestion-de-endpoints/useGestionCrucero'
import { NextSeo } from "next-seo"
import { dataOG } from "../../data/dataOG"
import OpenGraph from "../../components/openGraph"

const description = 'Si el tiempo o el dinero no fueran un problema donde te gustaria viajar.'

export default function Home() {
  // const { dataCrucero, loading: loadingGetCrucero } = gestionCrucero()
  const { FuncionGetAllCrucero, loading: loadingGetCrucero } = useGestionGetAllCrucero()
  const { DispatchScreen } = useScreenContext()
  const { FuncionGetCategoriaCrucero } = GestionCategoriaCrucero()
  const [dataCrucero, setDataCrucero] = useState([])
  const router = useRouter()


  {/* lo separe para poner el async await */ }
  const CustomFN = async (slug) => {
    await FuncionGetCategoriaCrucero(slug, setDataCrucero)
  }
  const CustomFN2 = async () => {
    await FuncionGetAllCrucero(setDataCrucero)
  }

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle', payload: 'Cruceros'
    })
  }, [])

  {/*aqui llamo a la api grapql*/ }
  useEffect(() => {
    if (Object.values(router.query).length > 0 && router.query.slug) {
      CustomFN(router.query.slug)
    } else {
      CustomFN2()
    }
  }, [router.query])
  return (
    <div>

      <OpenGraph
        {...{
          title: `Cruceros - ${dataOG.tittle}`,
          keyword: '',
          description,
          url: `${dataOG.url}/cruceros`,
          img: `${dataOG.url}}/imagenes/cruceros/banner.jpg`,
        }}
      />

      <main>
        <Banner />
        <section className='container carousel-app'>
          <TittleCards tittle="Viaje en crucero" />
          {/* <div className='row'>
            <div className='col-md-12'>
              <h2 className='subtitulo-general subtitulo-general--border-bottom'>Viaje en crucero</h2>
            </div>
          </div> */}

          <Show
            Condition={!loadingGetCrucero}
            IsDefault={<div className="d-flex flex-column flex-md-row flex-wrap mb-2 mt-5">
              <SkeletorCard Class="col-md-6 col-lg-4 " />
              <SkeletorCard Class="col-md-6 col-lg-4 " />
              <SkeletorCard Class="col-md-6 col-lg-4 " />
              <SkeletorCard Class="d-lg-none col-md-6 col-lg-4 " />
            </div>}

          >
            <div className="row mt-5">
              {dataCrucero.map((item) => {
                return (
                  <div className='col-md-6 col-lg-4 mb-5' key={item.cruceroId}>
                    <CardGeneralCrucero item={item} />
                  </div>
                )
              })}
            </div>
          </Show>
          {/* <div className='row mt-4'>
            {loadingGetCrucero ? (
              <p>Cargando ...</p>
            ) : (
             
            )}
          </div> */}
        </section>
      </main>

      <Script
        src='https://kit.fontawesome.com/3bd84f9f96.js'
        crossorigin='anonymous'
      />
    </div>
  )
}
