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

      <div className='card-l-miel_wrappercontent'>
        <div className="card-l-miel_wrappercontent_head">
          <h3 className='card-l-miel_wrappercontent_head_titulo'>
            {item?.tituloLuna}
          </h3>

          <Link href={`/luna-de-miel/${item.slugLuna}`} passHref>
            <a className='card-l-miel_wrappercontent__categoria'>{item.regionLuna}</a>
          </Link>

        </div>

        <div className="card-l-miel_wrappercontent_body">
          <p className='card-l-miel_wrappercontent_body_descripcion '>
            {item.descripcionLargaLuna}
          </p>

          <Link href={`/luna-de-miel/${item.slugLuna}`} passHref>
            <a className='btn btn-outline-primary card-l-miel_wrappercontent__btn'>Informes</a>
          </Link>
        </div>
      </div>
    </article>
  )
}
