import react, { useEffect, useState } from "react";
import Link from "next/link";

import { Tabs, Form } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

export default function Formularios({ items }) {
  const [forms, setForms] = useState(items);
  const [pasajeroActual, setPasajeroActual] = useState(1);

  const [datosPasajero, setDatosPasajero] = useState({
    validado: false,
    nombres: null,
    apellidos: null,
    tipoDocumento: null,
    nroDocumento: null,
    comentarios: null,
  });

  const asignarValor = (e, valor) => {
    let datos = datosPasajero;
    datos[valor] = e.target.value;

    setDatosPasajero(datos);
  };

  const siguiente = (index) => {
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

      let form = forms[index];
      console.log(form);
      console.log("Siguiente");
    }
  };

  return (
    <>
      {forms.map((item, index) => {
        return (
          <form key={index}>
            <p className="bg-light small font-weight-bold d-inline-block px-2 mb-3">
              Datos de pasajero {index + 1}
            </p>

            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
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

            <div className="text-right">
              <button
                type="button"
                className="btn btn-info text-white px-4"
                onClick={() => siguiente(index)}
              >
                {forms.length > 1 ? "Siguiente" : "Ir a pagar"}
                <span className="d-inline-block ml-2">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </form>
        );
      })}
    </>
  );
}
