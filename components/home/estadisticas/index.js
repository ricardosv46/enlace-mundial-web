import React from "react";

export default function Estadisticas() {
  return (
    <div className="wrapperestadistica">
      <section className="container text-center ">
        <div className="row justify-content-center">
          <div className="col-md-10 ">
            <section className="estadisticas">
              <div>
                <h4 className="estadisticas__titulo font-weight-bold">+ 150</h4>
                <p className="estadisticas__descripcion text-uppercase">
                  Lugares visitados
                </p>
              </div>

              <div>
                <h4 className="estadisticas__titulo font-weight-bold">+ 150.000</h4>
                <p className="estadisticas__descripcion text-uppercase">
                  Turistas felices
                </p>
              </div>

              <div>
                <h4 className="estadisticas__titulo font-weight-bold">+ 280.000</h4>
                <p className="estadisticas__descripcion text-uppercase">
                  Me gusta
                </p>
              </div>

              <div className="border-0">
                <h4 className="estadisticas__titulo font-weight-bold">+ 200.00</h4>
                <p className="estadisticas__descripcion text-uppercase">
                  Consultas
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
