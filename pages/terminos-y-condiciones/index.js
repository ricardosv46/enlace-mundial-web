import react, { useState } from "react"
import { terminosYCondiciones } from "../../datos-paginas/terminos-y-condiciones"
import Head from "next/head"
import styles from "./styles.module.scss"

export default function TerminosYCondiciones() {
  const [info, setInfo] = useState(terminosYCondiciones)

  return (
    <>
      <Head>
        <title>Terminos y Condiciones - Enlace mundial</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>
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
