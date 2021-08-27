import React from "react";

import Head from "next/head";
import Script from "next/script";

import Header from "@/components/header/index";
import Banner from "@/components/cruceros/banner";
import Footer from "@/components/footer/index";
import CardLunaDeMiel from "components/cards/card-luna-de-miel";

export default function Home() {
  const items = [
    {
      id: 1,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item",
    },
    {
      id: 2,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-2",
    },
    {
      id: 3,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-3",
    },
    {
      id: 4,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-4",
    },
    {
      id: 5,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-5",
    },
    {
      id: 6,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-6",
    },
    {
      id: 7,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-7",
    },
    {
      id: 8,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-8",
    },
    {
      id: 9,
      titulo: "Machu Picchu",
      descripcion:
        "La ciudad de Cusco, emplazada en el legendario Valle del Huatanay, a 3.350 metros respecto al nivel del mar, ha sido habitada desde tiempos inmemorables.",
      imagen:
        "https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
      categoria: "Cusco",
      slug: "slug-item-9",
    },
  ];

  return (
    <div>
      <Head>
        <title>Cruceros - Enlace mundial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
        />
      </Head>

      <main>
        <Header />

        <Banner />

        <section className="container carousel-app">
          <div className="row">
            <div className="col-md-12">
              <h2 className="subtitulo-general">Viaje en crucero</h2>
            </div>
          </div>

          <div className="row mt-4">
            {items.map((item) => {
              return (
                <div className="col-md-4 mb-5">
                  <CardLunaDeMiel tipo="cruceros" item={item} />
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}