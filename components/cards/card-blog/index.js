import React from "react"
import Link from "next/link"

import styles from "./styles.module.scss"

export default function CardBlog({ item }) {
  return (
    <article className={styles.cardBlog}>
      <div
        className={styles.cardBlog_imagen}
        style={{ backgroundImage: `url("${item?.imagenPrincipalBlog?.url}")` }}
      ></div>

      <div className='text-center py-2 px-3'>
        <Link href={`/blog/${item.slugBlog}`} passHref>
          <a className={`${styles.cardBlog_titulo} font-weight-bold`}>
            {item?.tituloBlog}
          </a>
        </Link>

        <p className='cardBlog__descripcion mt-3'>
          {item?.descripcionCortaBlog}
        </p>
      </div>
    </article>
  )
}
