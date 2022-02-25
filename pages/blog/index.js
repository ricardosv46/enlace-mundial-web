import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import styles from "./styles.module.scss"
import GestionBlog from "../../gestion-de-endpoints/GestionBlog"
import GestionCategoriaBlog from "../../gestion-de-endpoints/GestionCategoriaBlog"
import CardBlogLarge from "../../components/cards/card-blog/cardBlogLarge"
import useCounter from "../../hooks/useCounter"

export default function Home() {
  const [arregloSelect, setArregloSelect] = useState(0)
  const { pagina, increment, decrement } = useCounter(arregloSelect)
  const router = useRouter()
  const {
    dataBlog,
    loading: loadingGetData,
    nroTotalItems,
  } = GestionBlog({
    pagina: pagina ? pagina : 1,
  })

  const { dataCategoriaBlog } = GestionCategoriaBlog()

  let slug = router.query.slug

  useEffect(() => {
    if (!loadingGetData) {
      setArregloSelect(Math.ceil(parseFloat(nroTotalItems / 3)))
    }
  }, [loadingGetData])

  return (
    <div>
      <Head>
        <title>Blogs - Enlace mundial</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>

      <main className={styles.blog}>
        <section className='mt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <span className='small text-primary'>Blog</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <section className='container  mt-5'>
            <div className='row'>
              <div className='col'>
                <h2 className={styles.slug_titulo}>Publicaciones recientes</h2>
              </div>
            </div>
            <div className='col mt-5'>
              {dataBlog.map((item) => {
                return <CardBlogLarge key={item.blogId} item={item} />
              })}
            </div>
          </section>
          <div className='d-flex justify-content-center align-items-center'>
            <button
              className='btn btn-primary py-1'
              onClick={decrement}
            >{`<`}</button>

            <h2 className={styles.slug_counter}>{pagina}</h2>
            <button
              className='btn btn-primary py-1'
              onClick={increment}
            >{`>`}</button>
          </div>

          <section className='container mt-4 mt-md-5 px-4 px-md-0'>
            <div className='row'>
              <div className='col-md-9 mt-4 mt-md-0'>
                <h2 className={styles.slug_titulo}>Categorías</h2>
              </div>
            </div>
            <div className='row mt-4'>
              {dataCategoriaBlog.map((item) => {
                return (
                  <div key={item.categoriaBlogId} className='col-md-4 mb-3'>
                    <article>
                      <div
                        style={{
                          backgroundImage: `url("${item?.imagenPrincipalCategoriaBlog?.url}")`,
                          backgroundSize: "cover",
                          height: "200px",
                        }}
                        className={styles.blog_categoria}
                      ></div>
                      <Link
                        href={`/blog/categorias/${item?.slugCategoriaBlog}`}
                        passHref
                      >
                        <a className='lead'>{item?.tituloCategoriaBlog}</a>
                      </Link>
                    </article>
                  </div>
                )
              })}
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}
