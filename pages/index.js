import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Script from "next/script";

import Header from "../components/header/index";
import Banner from "../components/home/banner/index";
import ToursPopulares from "../components/home/tours-populares/index";
import DestinosDestacados from "../components/home/destinos-destacados/index";
import Carousel3Columnas from "../components/home/carousel-3-columnas/index";
import CarouselBlog from "../components/home/carousel-blog/index";
import Estadisticas from "../components/home/estadisticas/index";
import CarouselTestimonios from "../components/home/carousel-testimonios/index";
import Footer from "../components/footer/index";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enlace mundial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
        />
      </Head>

      <main className={styles.main}>
        <Header />

        <Banner />

        <ToursPopulares />

        <DestinosDestacados />

        <Carousel3Columnas titulo="Luna de miel" />

        <Carousel3Columnas titulo="Cruceros" />

        <Carousel3Columnas titulo="Blog" />

        <CarouselBlog />

        <Estadisticas />

        <CarouselTestimonios />

        <Footer />
      </main>

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}
