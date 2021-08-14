import React from "react";

import BuscadorPrincipal from "./buscador-principal";

export default function Banner() {
  return (
    <main className="banner">
      <section className="banner__content text-center w-100 h-100 d-flex flex-column justify-content-between align-items-center pt-5 pb-3">
        <h1 className="banner__title text-white font-weight-bold">
          Descubre grandes lugares
        </h1>

        <div className="banner__buscador">
          <BuscadorPrincipal />

          <h2 className="banner__subtitle text-white font-weight-bold mt-3">
            Encuentra el lugar perfecto <br />
            para pasear un rato, en tu <br />
            ciudad
          </h2>
        </div>
      </section>
    </main>
  );
}
