import React from "react";

import Head from "next/head";
import Script from "next/script";

import Header from "@/components/header/index";
import Footer from "@/components/footer/index";
import CardBusqueda from "@/components/cards/card-busqueda";

export default function Busqueda() {
  const items = [
    {
      id: 1,
      titulo: "Valle sagrado con Maras Moray - Cusco",
      slug: "valle-sagrado-con-maras-moray-cusco",
    },
    {
      id: 2,
      titulo: "Activiadad 2 - Cusco",
      slug: "actividad-2-cusco",
    },
    {
      id: 3,
      titulo: "Activiadad 3 - Cusco",
      slug: "actividad-3-cusco",
    },
    {
      id: 4,
      titulo: "Activiadad 4 - Cusco",
      slug: "actividad-4-cusco",
    },
    {
      id: 5,
      titulo: "Activiadad 5 - Cusco",
      slug: "actividad-5-cusco",
    },
  ];

  return (
    <div className="busqueda-page">
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
        <Header />

        <section className="container mt-5 px-4 px-md-0">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="subtitulo-slug text-secondary text-left">
                  Tours a Cusco (Región Cusco)
                </h3>

                {/* Solo desktop */}
                <div className="d-none d-md-block">
                  <span className="d-inline-block mr-3">Crucero</span>
                  <span>Inicio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-4 mt-md-5 px-4 px-md-0">
          <div className="row">
            <div className="col-md-3">
              <aside>
                <button
                  type="button"
                  className="btn btn-primary btn-block font-weight-bold"
                >
                  Quitar filtros
                </button>

                <div className="card bg-light border-0 rounded-0 mt-4">
                  <div className="card-body pb-1">
                    <h3 className="card-title stext-secondary font-weight-bold">
                      Disponibilidad de salidas
                    </h3>

                    <div className="form-group">
                      <label htmlFor="fechaInicial" className="text-secondary">
                        Desde
                      </label>
                      <input type="date" className="form-control rounded-0" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="fechaInicial" className="text-secondary">
                        Hasta
                      </label>
                      <input type="date" className="form-control rounded-0" />
                    </div>
                  </div>
                </div>

                {/* Solo desktop */}
                <section className="mt-4 d-none d-md-block">
                  <h4 className="card-subtitle font-weight-bold">
                    Tours de último minuto
                  </h4>

                  <div className="mt-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="disponibles"
                        id="disponible-1"
                        value="option1"
                        checked
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="disponible-1"
                      >
                        Disponibles hoy o mañana
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="disponibles"
                        id="disponible-2"
                        value="option1"
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="disponible-2"
                      >
                        Disponibles hoy o mañana o pasado
                      </label>
                    </div>
                  </div>

                  <div className="mt-3">
                    <h3 className="card-title stext-secondary font-weight-bold">
                      Destinos en Perú
                    </h3>

                    <h3 className="card-title stext-secondary font-weight-bold">
                      Perú
                    </h3>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="destino-padre"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="destino-padre"
                      >
                        Cusco
                      </label>
                    </div>

                    <div className="mt-1 px-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="destino-hijo"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="destino-hijo"
                        >
                          Tours a Cusco
                        </label>
                      </div>
                    </div>

                    {/* Incluye */}
                    <h3 className="card-title stext-secondary font-weight-bold mt-3">
                      Incluye
                    </h3>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="incluye"
                      />
                      <label className="form-check-label" htmlFor="incluye">
                        Solo tours
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        Tour + Hotel 1
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        Tour + Hotel 2
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck2"
                      >
                        Tour + Hotel 3
                      </label>
                    </div>

                    {/* Actividades */}
                    <h3 className="card-title stext-secondary font-weight-bold mt-3">
                      Actividades
                    </h3>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="actividad-1"
                      />
                      <label className="form-check-label" htmlFor="actividad-1">
                        Actividades 1
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="actividad-2"
                      />
                      <label className="form-check-label" htmlFor="actividad-2">
                        Actividades 2
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="actividad-3"
                      />
                      <label className="form-check-label" htmlFor="actividad-3">
                        Actividades 3
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="actividad-4"
                      />
                      <label className="form-check-label" htmlFor="actividad-4">
                        Actividades 4
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="actividad-5"
                      />
                      <label className="form-check-label" htmlFor="actividad-5">
                        Actividades 5
                      </label>
                    </div>
                  </div>
                </section>
              </aside>
            </div>

            <div className="col-md-9 mt-4 mt-md-0">
              {items.map((item) => {
                return <CardBusqueda item={item} key="item.id" />;
              })}
            </div>
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