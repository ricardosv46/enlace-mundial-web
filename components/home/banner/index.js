import React from "react"

import BuscadorPrincipal from "./buscador-principal"

export default function Banner() {
  return (
    <main className='banner '>
      <section className='banner__content text-center w-100 h-100 d-flex flex-column justify-content-between align-items-center pt-4 pb-3 py-md-5'>
        <h1 className='banner__title text-white font-weight-bold'>
          Descubre grandes lugares
        </h1>

        {/* Mobile */}
        <h2 className='banner__subtitle text-white font-weight-bold d-md-none'>
          Encuentra el lugar perfecto <br />
          para pasear un rato, en tu <br />
          ciudad
        </h2>
        <div className=''>
          <div className='banner__buscador mt-3 mt-md-0 mb-2 mb-md-0'>
            <BuscadorPrincipal />

            {/* Desktop */}
            <h2 className='banner__subtitle text-white font-weight-bold mt-3 d-none d-md-block'>
              Encuentra el lugar perfecto <br />
              para pasear un rato, en tu <br />
              ciudad
            </h2>
          </div>
        </div>
      </section>
    </main>
  )
}
