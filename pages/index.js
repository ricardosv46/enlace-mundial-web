import React, { useEffect } from "react";
import { request } from "graphql-request";
import Head from "next/head";
import Script from "next/script";
import Banner from "../components/home/banner";
import ToursPopulares from "../components/tours/populares";
import DestinosDestacados from "../components/home/destinos-destacados/index";
import LunaDeMiel from "../components/home/luna-de-miel/index";
import Cruceros from "../components/home/cruceros/index";
import CarouselBlog from "../components/home/carousel-blog/index";
import Estadisticas from "../components/home/estadisticas/index";
import CarouselTestimonios from "../components/home/carousel-testimonios/index";
import { useGetImagenesQuery } from "../generated/graphql";
import { useScreenContext } from "../context/screen";
import Image from "next/image";
import GestionLuna from "../gestion-de-endpoints/GestionLunaMiel";
import { NextSeo } from "next-seo";

export default function Home() {
  const { DispatchScreen } = useScreenContext();

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeMeta', payload: {
        SubTittle: '',
        keyword: '',
        description: Screen_Data.description,
        url: `${process.env.SITE_URL}`,
        img: `${process.env.SITE_URL}/logo.webp`
      }
    })
  }, [])

  // console.log('los posts es ', pepe)
  // const { data } = useGetImagenesQuery();

  // console.log('valor de pepe es', pepe)

  return (

    <div>

      <main>
        <Banner />

        <ToursPopulares />

        <DestinosDestacados />

        <LunaDeMiel />

        <Cruceros />

        <CarouselBlog />

        <Estadisticas />

        <CarouselTestimonios />
      </main>
    </div>
  );
}
