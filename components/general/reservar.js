import React from "react";

import Calendar from "./calendar";

export default function Reservar() {
  return (
    <div className="reservar pb-4">
      <section className="d-flex justify-content-center mt-3">
        <Calendar />
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <span className="text-muted d-inline-block mt-1">
                14 cupos disponibles
              </span>
            </div>
          </div>

          <div className="row justify-content-center mt-3">
            <div className="col-md-5 text-left">
              <span>Adultos</span>
            </div>

            <div className="col-md-5 d-flex justify-content-between align-items-center">
              <button className="sidebar-reservar__btn-reservar" type="button">
                <i className="fas fa-minus"></i>
              </button>

              <span className="font-weight-bold">1</span>

              <button className="sidebar-reservar__btn-reservar" type="button">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="row justify-content-center mt-1">
            <div className="col-md-5 text-left">
              <span>Niños</span>
              <p className="small text-muted">(Hasta 10 años)</p>
            </div>

            <div className="col-md-5 d-flex justify-content-between align-items-center">
              <button className="sidebar-reservar__btn-reservar" type="button">
                <i className="fas fa-minus"></i>
              </button>

              <span className="font-weight-bold">1</span>

              <button className="sidebar-reservar__btn-reservar" type="button">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="row justify-content-center mt-2">
            <div className="col-md-10">
              <section className="text-left">
                <span className="small text-muted">Duración</span>
                <div className="sidebar-reservar__duracion-info py-1 px-3">
                  <span>06:30 a.m. a 07:00 p.m.</span>
                </div>
              </section>

              <button
                type="button"
                className="btn btn-primary btn-block text-uppercase mt-2"
              >
                Reservar ahora
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
