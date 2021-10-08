import react, { useEffect, useState } from "react";
import Head from "next/head";

import styles from "./styles.module.scss";

import { preguntasFrecuentes } from "../../datos-paginas/preguntas-frecuentes";

import { Nav } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

export default function PreguntasFrecuentes() {
  const [info, setInfo] = useState(preguntasFrecuentes);
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  const methods = {
    seleccionar(index) {
      // Si no existe itemSeleccionado se asigna index
      if (!itemSeleccionado) {
        setItemSeleccionado(index + 1);
      }

      // Sin son distintos se debe asignar el nuevo índice de lo contrario se asigna null
      itemSeleccionado != index + 1
        ? setItemSeleccionado(index + 1)
        : setItemSeleccionado(null);
    },
  };

  return (
    <>
      <Head>
        <title>Preguntas frecuentes - Enlace mundial</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="font-weight-bold">{info.titulo}</h1>
            </div>
          </div>
        </div>
      </div>

      <section className={`${styles.preguntasFrecuentes} container mt-3`}>
        <div className="row">
          <div className="col-md-12">
            <section className="mt-5">
              <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                <div className="row mb-3">
                  <div className="col-md-3">
                    <Nav variant="pills" className="flex-column">
                      {info.preguntas
                        ? info.preguntas.map((item, index) => {
                            return (
                              <Nav.Item key={index}>
                                <Nav.Link
                                  eventKey={index + 1}
                                  className="nav-link-tab"
                                >
                                  {item.titulo}
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })
                        : ""}
                    </Nav>
                  </div>

                  <div className="col-md-9">
                    <Tab.Content>
                      {info.preguntas
                        ? info.preguntas.map((item, index) => {
                            return (
                              <Tab.Pane key={index} eventKey={index + 1}>
                                {item.descripcion}
                              </Tab.Pane>
                            );
                          })
                        : ""}
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}