import React, { useEffect } from "react"
import { request } from "graphql-request"
import Head from "next/head"
import Script from "next/script"
import Banner from "@/components/home/banner/index"
import ToursPopulares from "@/components/tours/populares"
import DestinosDestacados from "../components/home/destinos-destacados/index"
import LunaDeMiel from "../components/home/luna-de-miel/index"
import Cruceros from "../components/home/cruceros/index"
import CarouselBlog from "../components/home/carousel-blog/index"
import Estadisticas from "../components/home/estadisticas/index"
import CarouselTestimonios from "../components/home/carousel-testimonios/index"
import { useGetImagenesQuery } from "../generated/graphql"
import { useScreenContext } from '../context/screen'
import Image from "next/image"
import GestionLuna from "../gestion-de-endpoints/GestionLunaMiel"

// export async function getStaticProps() {

//   const res = await request('https://apienlacemundial.softaki.com/public/graphql', `
//   query GetAllLunaMiel($estadoLuna:String,$page:Int,$numberPaginate:Int){
//     GetAllLunaMiel(estadoLuna:$estadoLuna,page:$page,numberPaginate:$numberPaginate){
//       nroTotalItems
//       data{
//         lunaMielId
//         tituloLuna
//         slugLuna
//         estadoLuna
//         destacadoLuna
//         keywordsLuna
//         regionLuna
//         ciudadLuna
//         descripcionCortaLuna
//         descripcionLargaLuna
//         itinerarioLuna
//         puntoPartidaLuna
//         incluyeLuna
//         noIncluyeLuna
//         actividadesLuna
//         notasLuna
//         politicasLuna
//         videoPresentacionLuna
//         imagenPrincipalLuna {
//           id
//           descripcion
//           url
//         }
//         imagenSecundariaLuna {
//           id
//           descripcion
//           url
//         }
//         galeriaLuna {
//           id
//           descripcion
//           url
//         }
//         slugCategoria
//         categoriaId
//         Categoria {
//           categoriaId
//           slugCategoria
//           tituloCategoria
//           descripcion
//           estadoCategoria
//           keywordsCategoria
//           imagenPrincipalCategoria {
//             id
//             descripcion
//             url
//           }
//           imagenSecundariaCategoria {
//             id
//             descripcion
//             url
//           }
//         }
//       }
//     }
//   }
//   `, {
//     numberPaginate: 10,
//     page: 1,
//     estadoLuna: ''
//   })
//   const data = res?.GetAllLunaMiel?.data
//   return {
//     props: {
//       pepe: data
//     }
//   }
// }

export default function Home() {
  const { DispatchScreen } = useScreenContext()
  
  useEffect(() => {
    DispatchScreen({ type: 'ChangeSubTittle', payload: '' })
  }, [])

  // console.log('los posts es ', pepe)
  // const { data } = useGetImagenesQuery();

  // console.log('valor de pepe es', pepe)

  return (
    <div>
      {/* <Head>
        <title>Enlace mundial</title>
        <meta name='description' content='Enlace mundial' />

        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head> */}

      <main>
        <Banner />
        {/* <Image src="/imagenes/cruceros/banner.jpg" width="500" height="300"/> */}
        <ToursPopulares />

        <DestinosDestacados />

        <LunaDeMiel />

        <Cruceros />

        <CarouselBlog />

        <Estadisticas />

        <CarouselTestimonios />
      </main>
    </div>
  )
}
