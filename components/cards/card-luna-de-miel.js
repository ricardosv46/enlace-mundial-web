import React from "react"
import Link from "next/link"

export default function CardLunaDeMiel({ tipo, item }) {
  return (
    <article className='card-l-miel'>
      <div className="card-l-miel_wrapperimagen">
        <Link href={`/luna-de-miel/${item.slugLuna}`} passHref>
          <div
            className='card-l-miel__imagen pointer'
            style={{
              backgroundImage: `url("${item?.imagenPrincipalLuna?.url}")`,
            }}
          ></div>
        </Link>
      </div>

      <div className='text-center pt-2 pb-4 px-4'>
        <h3 className='card-l-miel__titulo font-weight-bold mt-1'>
          {item?.tituloLuna}
        </h3>

        <Link href={`/luna-de-miel/${item.slugLuna}`} passHref>
          <a className='card-l-miel__categoria'>{item.regionLuna}</a>
        </Link>

        <p className='card-l-miel__descripcion mt-3 text-left'>
          {item.descripcionLargaLuna}
        </p>

        <Link href={`/luna-de-miel/${item.slugLuna}`} passHref>
          <a className='btn btn-outline-primary py-2 px-4'>Informes</a>
        </Link>
      </div>
    </article>
  )
}
