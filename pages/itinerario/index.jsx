import Head from 'next/head'
import { useEffect } from 'react'
import { useScreenContext } from '../../context/screen'
import { Screen_Data } from '../../context/screen/data'
import { DataItineraio } from '../../datos-paginas/itineario'
import styles from './styles.module.scss'

export const Index = () => {
  const { DispatchScreen } = useScreenContext()

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeMeta',
      payload: {
        SubTittle: 'Políticas de Itinerario',
        keyword: '',
        description: Screen_Data.description,
        url: `${process.env.SITE_URL}/itinerario`,
        img: `${process.env.SITE_URL}/logo.webp`
      }
    })
  }, [])
  return (
    <>
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
