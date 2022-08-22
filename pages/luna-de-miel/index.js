import { useEffect } from 'react'
import Head from "next/head"
import GestionLuna from "../../gestion-de-endpoints/GestionLunaMiel"
import { useScreenContext } from '../../context/screen'
import Banner from "@/components/luna-de-miel/Banner"
import CardLunaDeMiel from "components/cards/card-luna-de-miel"

export default function Home() {
  const { dataLuna, loading } = GestionLuna()
  const { DispatchScreen } = useScreenContext()
  
  useEffect(() => {
    DispatchScreen({ type: 'ChangeSubTittle', payload: 'Luna de Miel' })
  }, [])

  return (
    <div>
      {/* <Head>
        <title>Luna de miel - Enlace mundial</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head> */}

      <main className='l-miel'>
        <Banner />

        <section className='l-miel__items mt-5'>
          <h2 className='subtitulo-general subtitulo-general--border-bottom'>Luna de miel</h2>

          <div className='container mt-5'>
            <div className='row'>
              {loading ? (
                <p>Cargando ...</p>
              ) : (
                dataLuna.map((item) => {
                  return (
                    <div className='col-md-4 mb-5' key={item.lunaMielId}>
                      <CardLunaDeMiel tipo='luna-de-miel' item={item} />
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
