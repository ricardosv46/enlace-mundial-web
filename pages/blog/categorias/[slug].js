import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import posts from "../../../datos-paginas/api/blog"
import CardBlog from "@/components/cards/card-blog"
import styles from "../styles.module.scss"
import { GET_ALL_BLOG_CATEGORIA, URL } from "../../../endpoints y url/endpoints"
import request from "graphql-request"
import { useScreenContext } from "../../../context/screen"
import { Screen_Data } from "../../../context/screen/data"
import { dataOG } from "../../../data/dataOG"
import OpenGraph from "../../../components/openGraph"

export async function getServerSideProps({ params }) {
  const res = await request(URL, GET_ALL_BLOG_CATEGORIA, {
    slugCategoriaBlog: params.slug,
    estadoBlog: "1",
    numberPaginate: 10,
    page: 1,
  })
  const data = res?.GetAllBlogCategoria?.data

  return {
    props: {
      data: data,
    },
  }
}

export default function Home({ data }) {
  const router = useRouter()
  const { DispatchScreen } = useScreenContext()
  const [items, setItems] = useState(posts)

  const categoria = {
    id: 1,
    nombre: "Lugares turísticos en Lima",
  }

  let slug = router.query.slug

  const titulo =
    data.length !== 0 ? data[0].CategoriaBlog.tituloCategoriaBlog : slug

  // Swiper
  const swiperRef = useRef(null)

  const carouselParams = {
    slidesPerView: 1,
    loop: true,
  }

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle', payload: `Categoria - ${titulo}`
    })
  }, [])

  return (
    <div>

      <OpenGraph
        {...{
          title: `Categoria - ${titulo} - ${dataOG.tittle}`,
          keyword: '',
          description: dataOG.description,
          url: `${dataOG.url}/blog/categorias/${slug}`,
          img: dataOG.logo
        }}
      />

      <main className={styles.slug}>
        <section className='l-miel__items mt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <span className='small text-primary'>categorias/{slug}</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <section className='container mt-5'>
            <div className='row'>
              <div className='col'>
                <h2 className={styles.slug_titulo}>Categoria - {titulo}</h2>
              </div>
            </div>
            <div className='row  mt-4 '>
              {data.map((item) => {
                return (
                  <div key={item.blogId} className='col-md-4 my-2'>
                    <CardBlog item={item} />
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
