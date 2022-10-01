import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function CardBlog({ item }) {
  return (
    <article className={styles.cardBlog}>
      <div className={styles.cardBlog_wrapperimagen}>
        <Link href={`/blog/${item.slugBlog}`}>
          <section
            className={`${styles.cardBlog_imagen} pointer`}
            style={{
              backgroundImage: `url("${item?.imagenPrincipalBlog?.url}")`,
            }}
          ></section>
        </Link>
      </div>
      <section className={styles.cardBlog_wrapperContent}>
        <div>
          <Link href={`/blog/${item.slugBlog}`}>
            <a className={`${styles.cardBlog_titulo} font-weight-bold`}>
              {item?.tituloBlog}
            </a>
          </Link>
        </div>
        <p className="cardBlog__descripcion mt-3 block">
          {item?.descripcionCortaBlog}
        </p>
      </section>
    </article>
  );
}
