import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"

import posts from "../../datos-paginas/api/blog"

import Swiper from "react-id-swiper"
import RedesSociales from "@/components/general/redes-sociales"
import CardBlog from "@/components/cards/card-blog"

import styles from "./styles.module.scss"
import { GET_SLUG_BLOG, URL } from "../../endpoints y url/endpoints"
import request from "graphql-request"
import GestionCategoriaBlog from "../../gestion-de-endpoints/GestionCategoriaBlog"
import { NextSeo } from "next-seo"
import { useScreenContext } from "../../context/screen"
import { dataOG } from "../../data/dataOG"
import OpenGraph from "../../components/openGraph"

export async function getServerSideProps({ params }) {
  const res = await request(URL, GET_SLUG_BLOG, {
    slugBlog: params.slug,
  })
  const data = res?.GetSlugBlog

  return {
    props: {
      data: data,
    },
  }
}

export default function Home({ data }) {
  const { dataCategoriaBlog: categorias } = GestionCategoriaBlog()
  const router = useRouter()
  let slug = router.query.slug
  const { DispatchScreen } = useScreenContext()
  // console.log(router)

  const [destacados, setDestacados] = useState(posts)

  const tags = [
    {
      id: 1,
      nombre: "Lima",
    },
    {
      id: 2,
      nombre: "Arequipa",
    },
    {
      id: 3,
      nombre: "Cusco",
    },
    {
      id: 4,
      nombre: "La libertad",
    },
  ]

  // Swiper
  const swiperRef = useRef(null)

  const carouselParams = {
    slidesPerView: 1,
    loop: true,
  }

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle', payload: data?.tituloBlog
    })
  }, [])

  return (
    <div>

      <OpenGraph
        {...{
          title: `${data?.tituloBlog} - ${dataOG.tittle}`,
          keyword: data?.keywordsBlog,
          description: data?.descripcionCortaBlog,
          url: `${dataOG.url}/blog/${slug}`,
          img: data?.imagenPrincipalBlog?.url
        }}
      />

      <main className={styles.slug}>
        <section className='l-miel__items mt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <span className='small text-primary'>Blog / {slug}</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <section className='container mt-5'>
            <div className='row justify-content-between'>
              <article className='col-md-9 mt-3 mt-md-0 pr-md-5'>
                <h2 className={styles.slug_titulo}>{data.tituloBlog}</h2>

                <section
                  style={{
                    backgroundImage:
                      "url(" + data?.imagenPrincipalBlog?.url + ")",
                  }}
                  className={`${styles.slug_imagen} mt-4`}
                ></section>

                <section className='mt-3'>
                  <div dangerouslySetInnerHTML={{ __html: data?.descripcionLargaBlog }}></div>
                </section>

                <div className='mt-3'>
                  <RedesSociales />
                </div>
              </article>

              <aside className='col-md-3'>
                {/* Buscador */}
                <section>
                  <form>
                    <label htmlFor='search' className={styles.slug_subtitulo}>
                      Buscar
                    </label>
                    <input
                      type='search'
                      id='search'
                      className='form-control py-4'
                    />
                  </form>

                  {/* Categorías */}
                  <section className='mt-4'>
                    <h3 className={styles.slug_subtitulo}>Categorías</h3>

                    <ul className='list-unstyled mt-3'>
                      {categorias.map((item) => {
                        return (
                          <li key={item.categoriaBlogId} className='mt-1'>
                            <Link
                              href={`/blog/categorias/${item.slugCategoriaBlog}`}
                              passHref
                            >
                              <a className='text-primary text-decoration-none'>
                                <i className='fas fa-chevron-right'></i>
                                <span className='ml-2'>
                                  {item.tituloCategoriaBlog}
                                </span>
                              </a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </section>

                  {/* Tags */}
                  {/* Oculto hasta que haya api */}
                  {/* <section className='mt-4'>
                    <h3 className={styles.slug_subtitulo}>Etiquetas</h3>

                    <ul className='d-flex flex-wrap list-unstyled mt-3'>
                      {tags.map((c) => {
                        return (
                          <li key={c.id} className='mt-2 mr-2'>
                            <Link href={`/blog/etiquetas/${c.nombre}`} passHref>
                              <a className={styles.slug_tag}>{c.nombre}</a>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </section> */}

                  {/* Destacados */}
                  <section className='mt-4'>
                    <h3 className={styles.slug_subtitulo}>
                      Te puede interesar
                    </h3>

                    <div className='mt-3'>
                      <Swiper ref={swiperRef} {...carouselParams}>
                        {destacados.map((item) => {
                          return (
                            <div key={item.id}>
                              <CardBlog item={item} />
                            </div>
                          )
                        })}
                      </Swiper>
                    </div>
                  </section>
                </section>
              </aside>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
