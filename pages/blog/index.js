import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import styles from "./styles.module.scss"
import GestionBlog from "../../gestion-de-endpoints/GestionBlog"
import GestionCategoriaBlog from "../../gestion-de-endpoints/GestionCategoriaBlog"
import CardBlogLarge from "../../components/cards/card-blog/cardBlogLarge"
import { CardBlogSmall } from "../../components/cards/card-blog/cardBlogSmall"

import { useScreenContext } from '../../context/screen'
import { BsListUl, BsGrid } from 'react-icons/bs'
import useCounter from "../../hooks/useCounter"
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Show } from '../../components/common'
import { NextSeo } from "next-seo"
import OpenGraph from "../../components/openGraph"
import { dataOG } from "../../data/dataOG"
const TypeViewCard = {
  GRID: 'Grid',
  LIST: 'List'
}
const KeyLocalStorage = 'TypeViewCard'

export default function Home() {
  const [arregloSelect, setArregloSelect] = useState(0)
  const { pagina, increment, decrement } = useCounter(arregloSelect)
  const router = useRouter()
  const { setValueStorage, getValueStorage } = useLocalStorage()
  const { DispatchScreen } = useScreenContext()
  const [ValueLocal, setValueLocal] = useState('')

  const {
    dataBlog,
    loading: loadingGetData,
    nroTotalItems,
  } = GestionBlog({
    pagina: pagina ? pagina : 1,
  })

  const { dataCategoriaBlog } = GestionCategoriaBlog()

  let slug = router.query.slug

  const UpdateValueStorage = (value) => {
    setValueStorage(KeyLocalStorage, value)
    setValueLocal(value)
  }

  const HeadBolg = () => (
    <div className='row'>
      <div className='col-10 col-md-11'>
        <h2 className={styles.slug_titulo}>Publicaciones recientes</h2>
      </div>
      <div className={`col-2 col-md-1 ${styles.wrapperIcons}`}>
        <div
          onClick={() => UpdateValueStorage(TypeViewCard.GRID)}
          className={styles.wrapperIcons_icon}
        >
          <BsGrid />
        </div>
        <div
          onClick={() => UpdateValueStorage(TypeViewCard.LIST)}
          className={styles.wrapperIcons_icon}
        >
          <BsListUl />
        </div>
      </div>
    </div>
  )

  const RenderCardList = () => (
    <div className='col mt-5'>
      {dataBlog.map((item) => {
        return <CardBlogLarge key={item.blogId} item={item} />
      })}
    </div>

  )
  const RenderCardGrid = () => (
    <div className='row mt-5'>
      {dataBlog.map((item) => (
        <div key={item.blogId} className='col-12 col-md-6 col-lg-4 p-2' >
          <CardBlogSmall item={item} />
        </div>))}
    </div>
  )

  useEffect(() => {
    if (!loadingGetData) {
      setArregloSelect(Math.ceil(parseFloat(nroTotalItems / 3)))
    }
  }, [loadingGetData])

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle', payload: 'Blogs'
    })
  }, [])


  {/* sino existe la key lo agregamos por defecto 'List' */ }
  useEffect(() => {
    if (!getValueStorage(KeyLocalStorage)) {
      setValueStorage(KeyLocalStorage, TypeViewCard.LIST)
      setValueLocal(TypeViewCard.LIST)
    } else {
      setValueLocal(getValueStorage(KeyLocalStorage))
    }
  }, [])

  return (
    <div>

      <OpenGraph
        {...{
          title: `Blogs - ${dataOG.tittle}`,
          keyword: '',
          description: 'Publicaciones recientes',
          url: `${dataOG.url}/blog`,
          img: dataOG.logo,
        }}
      />

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
          <section className='container mt-5'>
            {/* Titulo head */}

            <HeadBolg />

            {/*Map Card para List*/}
            <Show
              Condition={ValueLocal === TypeViewCard.LIST}
            >
              <RenderCardList />
            </Show>
            {/*Map Card para Grid*/}

            <Show
              Condition={ValueLocal === TypeViewCard.GRID}
            >
              {/* <RenderCard /> */}
              <RenderCardGrid />
            </Show>


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
