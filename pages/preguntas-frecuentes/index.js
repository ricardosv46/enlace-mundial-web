import react, { useEffect, useState } from "react";

import styles from "./styles.module.scss";

import { preguntasFrecuentes } from "../../datos-paginas/preguntas-frecuentes";

import { Accordion } from "react-bootstrap";

export default function PreguntasFrecuentes() {
  const [info, setInfo] = useState({});
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  const methods = {
    mounted() {
      useEffect(() => {
        setInfo(preguntasFrecuentes);
      }, []);
    },
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

  // Inicializar
  methods.mounted();

  return (
    <>
      <section className={`${styles.preguntasFrecuentes} container mt-5`}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center font-weight-bold">{info.titulo}</h1>

            <section className="mt-5">
              <Accordion>
                <div className="row mb-3">
                  {info.preguntas
                    ? info.preguntas.map((item, index) => {
                        return (
                          <article className="col-md-6 mb-3">
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header
                                onClick={() => methods.seleccionar(index)}
                              >
                                <div className="d-flex justify-content-between">
                                  {item.titulo}

                                  {itemSeleccionado === index + 1 ? (
                                    <i class="fas fa-minus"></i>
                                  ) : (
                                    <i class="fas fa-plus"></i>
                                  )}
                                </div>
                              </Accordion.Header>

                              <Accordion.Body>
                                <div className="p-3">{item.descripcion}</div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </article>
                        );
                      })
                    : ""}
                </div>
              </Accordion>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
