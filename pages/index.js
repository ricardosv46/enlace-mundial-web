import React from "react";

import Head from "next/head";
import Script from "next/script";

import Banner from "../components/home/banner/index";
import ToursPopulares from "../components/home/tours-populares/index";
import DestinosDestacados from "../components/home/destinos-destacados/index";
import LunaDeMiel from "../components/home/luna-de-miel/index";
import Cruceros from "../components/home/cruceros/index";
import CarouselBlog from "../components/home/carousel-blog/index";
import Estadisticas from "../components/home/estadisticas/index";
import CarouselTestimonios from "../components/home/carousel-testimonios/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Enlace mundial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
        />
      </Head>

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

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}
