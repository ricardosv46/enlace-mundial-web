import react, { useEffect, useState } from "react";
import Link from "next/link";

import { Tabs, Form } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

const objetoInicial = {
  validado: false,
  nombres: null,
  apellidos: null,
  tipoDocumento: "DNI",
  nroDocumento: null,
  comentarios: null,
};

export default function Formularios({ items }) {
  const [forms, setForms] = useState(items);
  const [pasajeroActual, setPasajeroActual] = useState(1);

  const [datosPasajero, setDatosPasajero] = useState(
    JSON.parse(JSON.stringify(objetoInicial))
  );

  const asignarValor = (e, valor) => {
    let datos = datosPasajero;
    datos[valor] = e.target.value;

    setDatosPasajero(datos);
  };

  const atras = () => {
    setPasajeroActual(pasajeroActual - 1);
  };

  const siguiente = (index) => {
    if (pasajeroActual >= forms.length) {
      alert("Finalizar pago");
    } else {
      let { nombres, apellidos, tipoDocumento, nroDocumento } = datosPasajero;

      if (nombres && apellidos && tipoDocumento && nroDocumento) {
        let datos = {
          validado: true,
          nombres,
          apellidos,
          tipoDocumento,
          nroDocumento,
        };

        forms[index] = datos;

        setPasajeroActual(pasajeroActual + 1);
      }
    }

    // Limpiar campos
    setDatosPasajero(JSON.parse(JSON.stringify(objetoInicial)));
  };

  return (
    <>
      {forms.map((item, index) => {
        return pasajeroActual == index + 1 ? (
          <form key={index}>
            <p className="lead font-weight-bold d-inline-block mb-3">
              Datos de pasajero {index + 1}
            </p>

            {objetoInicial.nombres}

            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  {datosPasajero.nombres}
                  <label>Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => asignarValor(e, "nombres")}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => asignarValor(e, "apellidos")}
                  />
                </div>
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Tipo de documento</label>
                  <select
                    className="form-control"
                    onChange={(e) => asignarValor(e, "tipoDocumento")}
                  >
                    <option value="DNI">DNI</option>
                    <option value="CE">Carnet de extranjería</option>
                    <option value="PASAPORTE">Pasaporte</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Número de documento</label>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    className="form-control"
                    onChange={(e) => asignarValor(e, "nroDocumento")}
                  />
                </div>
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Comentarios adicionales</label>
                  <textarea className="form-control"></textarea>
                </div>
              </div>
            </div>

            {/* Términos y condiciones */}
            {forms.length == pasajeroActual ? (
              <div className="form-group mt-3 px-md-4">
                <Form.Check type="checkbox" />
                Acepto los{" "}
                <Link href="/terminos-y-condiciones">
                  Términos y Condiciones Generales
                </Link>{" "}
                de Enlace Mundial
              </div>
            ) : (
              ""
            )}

            <div
              className={`d-flex ${
                pasajeroActual > 1
                  ? "justify-content-between"
                  : "justify-content-end"
              }`}
            >
              {/* Botón atrás */}
              {pasajeroActual > 1 ? (
                <button
                  type="button"
                  className="btn btn-link text-danger"
                  onClick={() => atras(index)}
                >
                  <span className="d-inline-block mr-2 text-danger">
                    <i className="fas fa-chevron-left"></i>
                  </span>
                  Atrás
                </button>
              ) : (
                ""
              )}

              <button
                type="button"
                className="btn btn-info text-white px-4"
                onClick={() => siguiente(index)}
              >
                {pasajeroActual >= forms.length ? "Ir a pagar" : "Siguiente"}
                <span className="d-inline-block ml-2">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </form>
        ) : (
          ""
        );
      })}
    </>
  );
}
