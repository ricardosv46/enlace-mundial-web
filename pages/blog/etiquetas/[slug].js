import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import posts from "../../../datos-paginas/api/blog";

import CardBlog from "@/components/cards/card-blog";

import styles from "../styles.module.scss";

export default function Home() {
  const router = useRouter();

  const [items, setItems] = useState(posts);

  const categoria = {
    id: 1,
    nombre: "Lugares turísticos en Lima",
  };

  const categorias = [
    {
      id: 1,
      nombre: "Lugares turísticos en Lima",
    },
    {
      id: 2,
      nombre: "Hoteles en Arequipa",
    },
    {
      id: 3,
      nombre: "Lugares turísticos en Cusco",
    },
    {
      id: 4,
      nombre: "Hoteles en La libertad",
    },
  ];

  let slug = router.query.slug;

  // Swiper
  const swiperRef = useRef(null);

  const carouselParams = {
    slidesPerView: 1,
    loop: true,
  };

  return (
    <div>
      <Head>
        <title>{slug} - Enlace mundial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
        />
      </Head>

      <main className={styles.slug}>
        <section className="l-miel__items mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <span className="small text-primary">Blog</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <section className="container mt-5">
            <div className="row">
              <div className="col">
                <h2 className={styles.slug_titulo}>
                  Blog - {categoria.nombre}
                </h2>
              </div>
            </div>
            <div className="row mt-4">
              {items.map((item) => {
                return (
                  <div key={item.id} className="col-md-4">
                    <CardBlog item={item} />
                  </div>
                );
              })}
            </div>
            <div className="row mt-3">
              {items.map((item) => {
                return (
                  <div key={item.id} className="col-md-4">
                    <CardBlog item={item} />
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
