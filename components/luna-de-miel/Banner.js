import React from "react";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="l-miel-banner d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="l-miel-banner__content text-center">
              <h1 className="l-miel-banner__titulo text-white font-weight-bold">
                No quiero que me hagas feliz.
                <br />
                Quiero ser feliz contigo.
              </h1>

              <div className="row justify-content-center">
                <div className="col-10 col-md-6">
                  <p className="l-miel-banner__descripcion mt-3">
                    La «luna de miel» es una frase que describe la fase
                    posterior al matrimonio. Es el segundo paso, y a veces el
                    más esperado.
                  </p>

                  <div className="mt-4">
                    <Link href="/contacto" passHref>
                      <a className="btn btn-primary rounded-0 px-5">CONTACTO</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
