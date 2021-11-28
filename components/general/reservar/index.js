import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Calendar from "./calendar";
import GestionHorariosTour from "../../../gestion-de-endpoints/GestionHorariosTour";

export default function Reservar({ producto, tourId }) {
  const router = useRouter();
  const today = new Date();
  const month = today.getMonth();
  const [mes, setMes] = useState(month + 1);
  const [anio, setAnio] = useState(today.getFullYear());
  const [dia, setDia] = useState(today.getDate());
  const [fecha, setFecha] = useState(new Date());
  const [nroAdultos, setNroAdultos] = useState(1);
  const [nroMenores, setNroMenores] = useState(0);
  const [pintarDias, setPintarDias] = useState([]);
  // console.log(anio,mes)
  console.log("data cargada al inicio", tourId, mes, anio);
  const { dataHorario, loading } = GestionHorariosTour({
    tourId,
    mes: mes,
    anio,
  });
  console.log("el valor de data horario es", dataHorario);
  // console.log("el valor del año es", anio);
  function asignarFecha(fecha) {
    setFecha(fecha);
  }
  useEffect(() => {
    setPintarDias([])
    !loading && (
      dataHorario.map((item) => {
        if (item?.estado === "Activado" && new Date(item?.fecha) >= today) {
          setPintarDias((pintar) => [...pintar, item.fecha]);
        }
      }))
  }, [anio, mes, loading]);

  console.log("que fue manito", pintarDias);
  function disminuir(tipo) {
    if (tipo === "adultos") {
      nroAdultos >= 1
        ? setNroAdultos(nroAdultos - 1)
        : setNroAdultos(nroAdultos);
    } else {
      nroMenores >= 1
        ? setNroMenores(nroMenores - 1)
        : setNroMenores(nroMenores);
    }
  }

  function aumentar(tipo) {
    if (tipo === "adultos") {
      setNroAdultos(nroAdultos + 1);
    } else {
      setNroMenores(nroMenores + 1);
    }
  }

  function guardarCarrito() {
    let item = {
      producto,
      fecha,
      hora: fecha,
      nroAdultos,
      nroMenores,
    };

    localStorage.setItem("carrito", JSON.stringify(item));

    console.log(JSON.parse(localStorage.getItem("carrito")));

    router.push("/finalizar-reserva");
  }

  return (
    <div className="reservar pb-4">
      <section className="d-flex justify-content-center mt-3">
        <Calendar
          fechaSeleccionada={asignarFecha}
          mes={mes}
          setMes={setMes}
          anio={anio}
          setAnio={setAnio}
          dataHorario={dataHorario}
          pintarDias={pintarDias}
        />
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
              <button
                className="sidebar-reservar__btn-reservar"
                type="button"
                onClick={() => disminuir("adultos")}
              >
                <i className="fas fa-minus"></i>
              </button>

              <span className="font-weight-bold">{nroAdultos}</span>

              <button
                className="sidebar-reservar__btn-reservar"
                type="button"
                onClick={() => aumentar("adultos")}
              >
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
              <button
                className="sidebar-reservar__btn-reservar"
                type="button"
                onClick={() => disminuir("menores")}
              >
                <i className="fas fa-minus"></i>
              </button>

              <span className="font-weight-bold">{nroMenores}</span>

              <button
                className="sidebar-reservar__btn-reservar"
                type="button"
                onClick={() => aumentar("menores")}
              >
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

              {/* <button
                type="button"
                className="btn btn-primary btn-block text-uppercase mt-2"
              >
                Reservar ahora
              </button> */}

              {/* <Link href="/finalizar-reserva">
                <a className="btn btn-primary btn-block text-uppercase mt-2">
                  Reservar ahora
                </a> */}

              <button
                type="button"
                className="btn btn-primary btn-block text-uppercase mt-2"
                onClick={guardarCarrito}
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
