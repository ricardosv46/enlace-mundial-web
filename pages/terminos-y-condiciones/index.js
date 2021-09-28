import react, { useState } from "react";

import { terminosYCondiciones } from "../../datos-paginas/terminos-y-condiciones";

import styles from "./styles.module.scss";

export default function TerminosYCondiciones() {
  const [info, setInfo] = useState(terminosYCondiciones);

  return (
    <>
      <section className={`${styles.terminos} container mt-5`}>
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h1 className="font-weight-bold">{info.titulo}</h1>
          </div>

          {info.items.map((item, index) => {
            return (
              <article className="col-md-12 item mb-5 px-0" key={index}>
                <h2 className="font-weight-bold">{item.titulo}</h2>

                <p>{item.descripcion}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
