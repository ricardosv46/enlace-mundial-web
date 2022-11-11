import react, { useEffect, useState } from "react"
import { terminosYCondiciones } from "../../datos-paginas/terminos-y-condiciones"
import Head from "next/head"
import styles from "./styles.module.scss"
import { useScreenContext } from "../../context/screen"
import { Screen_Data } from "../../context/screen/data"
import OpenGraph from "../../components/openGraph"

export default function TerminosYCondiciones() {
  const [info, setInfo] = useState(terminosYCondiciones)
  const { DispatchScreen } = useScreenContext()

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubtitle',
      payload: 'Terminos y Condiciones',
    })
  }, [])

  return (
    <>

      <OpenGraph {...{
        title: `Terminos y Condiciones - ${dataOG.tittle}`,
        keyword: '',
        description: dataOG.description,
        url: `${dataOG.url}/mi-cuenta`,
        img: dataOG.logo,
      }} />

      <section className={`${styles.terminos} container mt-5`}>
        <div className='row'>
          <div className='col-md-12 text-center mb-4'>
            <h1 className='font-weight-bold'>{info.titulo}</h1>
          </div>

          {info.items.map((item, index) => {
            return (
              <article className='col-md-12 item mb-5 px-0' key={index}>
                <h2 className='font-weight-bold mb-2'>{item.titulo}</h2>

                {Array.isArray(item.descripcion) ? item.descripcion.map((obj, k) => <p key={k} className='mb-4'>{obj}</p>) : <p>{item.descripcion}</p>}
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
