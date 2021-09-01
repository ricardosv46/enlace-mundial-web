import Head from "next/head";

import Header from "components/header/index";
import Banner from "components/luna-de-miel/Banner";
import CardLunaDeMiel from "components/cards/card-luna-de-miel";
import Footer from "components/footer/index";

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
        <title>Luna de miel - Enlace mundial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"
        />
      </Head>

      <main className="l-miel">
        <Header />

        <Banner />

        <section className="l-miel__items mt-5">
          <h2 className="subtitulo-general">Luna de miel</h2>

          <div className="container mt-5">
            <div className="row">
              {items.map((item) => {
                return (
                  <div className="col-md-4 mb-5" key={item.id}>
                    <CardLunaDeMiel tipo="luna-de-miel" item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
