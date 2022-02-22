import React from "react"
import Link from "next/link"

export default function Banner() {
  return (
    <main className='banner-cruceros'>
      <section className='banner-cruceros__content text-center w-100 h-100 d-flex flex-column flex-md-row justify-content-between py-4 px-5'>
        <div className='d-flex'>
          <h1 className='banner-cruceros__titulo text-white font-weight-bold'>
            Si el tiempo o <br />
            el dinero no <br />
            fueran <br />
            problema
          </h1>
        </div>

        <div className='d-flex flex-column justify-content-end align-self-end pb-5'>
          <h2 className='banner-cruceros__subtitulo text-white font-weight-bold mt-3'>
            Donde <br />
            te gustaría <br />
            viajar
          </h2>

          <div className='mt-4'>
            <Link href='/' passHref>
              <a className='btn btn-primary px-5 rounded-0'>Contacto</a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
