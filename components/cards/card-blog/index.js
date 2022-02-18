import React from "react"
import Link from "next/link"

import styles from "./styles.module.scss"

export default function CardBlog({ item }) {
  return (
    <article className={styles.cardBlog}>
      <Link href={`/blog/${item.slugBlog}`}>
        <section
          className={`${styles.cardBlog_imagen} pointer`}
          style={{
            backgroundImage: `url("${item?.imagenPrincipalBlog?.url}")`,
          }}
        ></section>
      </Link>
      <section className='text-center py-2 px-3'>
        <Link href={`/blog/${item.slugBlog}`}>
          <a className={`${styles.cardBlog_titulo} font-weight-bold`}>
            {item?.tituloBlog}
          </a>
        </Link>

        <p className='cardBlog__descripcion mt-3'>
          {item?.descripcionCortaBlog}
        </p>
      </section>
    </article>
  )
}
