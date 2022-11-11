import Head from 'next/head'
import { useEffect } from 'react'
import OpenGraph from '../../components/openGraph'
import { useScreenContext } from '../../context/screen'
import { Screen_Data } from '../../context/screen/data'
import { dataOG } from '../../data/dataOG'
import { DataItineraio } from '../../datos-paginas/itineario'
import styles from './styles.module.scss'

export const Index = () => {
  const { DispatchScreen } = useScreenContext()

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle',
      payload: 'Políticas de Itinerario'
    })
  }, [])
  return (
    <>
      <OpenGraph
        {...{
          title: `Políticas de Itinerario - ${dataOG.tittle}`,
          keyword: '',
          description: dataOG.description,
          url: `${dataOG.url}/itinerario`,
          img: dataOG.logo
        }}
      />

      <section className={`${styles.terminos} container mt-5`}>
        <div className='row'>
          <div className='col-md-12 text-center mb-4'>
            <h1 className='font-weight-bold'>POLÍTICAS DE ITINERARIO</h1>
          </div>
          {DataItineraio &&
            DataItineraio.map((item, index) => (
              <article className='col-md-12 item mb-5 px-0' key={index}>
                <p className='mb-4'>{item}</p>
              </article>
            ))}
        </div>
      </section>
    </>
  )
}
export default Index
