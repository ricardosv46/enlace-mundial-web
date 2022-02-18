import React from "react"

import Link from "next/link"
import styles from "./styles.module.scss"

export default function CardBlogLarge({ item }) {
  console.log(item)
  return (
    <div className={`${styles.cardBusqueda} mb-4`}>
      <div
        className={`${styles.cardBusqueda_imagen} mb-4`}
        style={{
          backgroundImage: "url(" + item.imagenPrincipalBlog?.url + ")",
        }}
      ></div>

      <div className='card-busqueda__contenido d-flex flex-column justify-content-between py-3 px-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h3 className='card-title font-weight-bold my-0 pointer'>
              {item?.tituloBlog}
            </h3>
          </div>
        </div>

        <p className='text-secondary my-0'>
          {item?.descripcionLargaBlog.substring(0, 315)}...
        </p>

        <div className='d-flex justify-content-between align-items-end'>
          <div className='text-muted my-0'>
            <Link href={`/blog/${item.slugBlog}`}>
              <a className='btn btn-primary'>Ver más </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
