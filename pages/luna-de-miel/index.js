import { useEffect, useState } from 'react'
import Head from "next/head"
import { useRouter } from 'next/router'
import GestionLuna from "../../gestion-de-endpoints/GestionLunaMiel"
import { useScreenContext } from '../../context/screen'
import Banner from "@/components/luna-de-miel/Banner"
import CardLunaDeMiel from "components/cards/card-luna-de-miel"
import { Show, LayoutCards, TittleCards, SkeletorCard, SkeletorTittle } from '../../components/common'
import { GestionCategoriaLunaMiel } from '../../gestion-de-endpoints/GestionCategoriaLunaMiel'
import { useGestionGetAllLunaMiel } from '../../gestion-de-endpoints/useGestionLunaMiel'
import { NextSeo } from 'next-seo'

const description = 'La «luna de miel» es una frase que describe la fase posterior al matrimonio. Es el segundo paso, y a veces el más esperado.'

export default function Home() {
  // const { dataLuna, loading } = GestionLuna()
  const { DispatchScreen } = useScreenContext()
  const { FuncionGetCategoriaLunaMiel } = GestionCategoriaLunaMiel()
  const { loading, FuncionGetAllLunaMiel } = useGestionGetAllLunaMiel()
  const [dataLunaMiel, setDataLunaMiel] = useState([])
  const router = useRouter()


  useEffect(() => {
    DispatchScreen({
      type: 'ChangeMeta', payload: {
        SubTittle: 'Luna de Miel',
        description,
        keyword: '',
        url: `${process.env.SITE_URL}/luna-de-miel`,
        img: `${process.env.SITE_URL}/imagenes/luna-de-miel/banner.jpg`
      }
    })
  }, [])


  {/* lo separe para poner el async await */ }
  const CustomFN = async (slug) => {
    await FuncionGetCategoriaLunaMiel(slug, setDataLunaMiel)
  }
  const CustomFN2 = async () => {
    await FuncionGetAllLunaMiel(setDataLunaMiel)
  }

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

      <main className='l-miel'>
        <Banner />

        <section className='l-miel__items mt-5'>

          <Show
            Condition={!loading}
            IsDefault={
              <div className='d-flex flex-column container'>
                <div className='mb-4'><SkeletorTittle /></div>
                <div className="d-flex flex-column flex-md-row flex-wrap mb-2">
                  <SkeletorCard Class="col-md-6 col-lg-4 " />
                  <SkeletorCard Class="col-md-6 col-lg-4 " />
                  <SkeletorCard Class="col-md-6 col-lg-4 " />
                  <SkeletorCard Class="d-lg-none col-md-6 col-lg-4 " />
                </div>
              </div>
            }
          ><>
              <TittleCards tittle='Luna de Miel' />
              <div className='container mt-5'>
                <div className='row'>
                  {dataLunaMiel.map((item) => {
                    return (
                      <div className='col-md-6 col-lg-4 mb-5' key={item.lunaMielId}>
                        <CardLunaDeMiel tipo='luna-de-miel' item={item} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          </Show>
          {/* {loading ? (
                <p>Cargando ...</p>
              ) : (
                
              )} */}
        </section>
      </main>
    </div >
  )
}
