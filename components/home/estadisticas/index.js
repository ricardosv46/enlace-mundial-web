import React from "react";

export default function Estadisticas() {
  return (
    <section className="container text-center">
      <div className="row justify-content-center">
        <div className="col-md-8 px-4">
          <section className="estadisticas">
            <div>
              <h4 className="estadisticas__titulo font-weight-bold">+ 150</h4>
              <p className="estadisticas__descripcion text-uppercase">
                Lugares visitados
              </p>
            </div>

            <div>
              <h4 className="estadisticas__titulo font-weight-bold">+ 800</h4>
              <p className="estadisticas__descripcion text-uppercase">
                Turistas felices
              </p>
            </div>

            <div>
              <h4 className="estadisticas__titulo font-weight-bold">+ 850</h4>
              <p className="estadisticas__descripcion text-uppercase">
                Me gusta
              </p>
            </div>

            <div className="border-0">
              <h4 className="estadisticas__titulo font-weight-bold">+ 400</h4>
              <p className="estadisticas__descripcion text-uppercase">
                Consultas
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
