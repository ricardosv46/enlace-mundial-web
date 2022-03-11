import react, { useEffect, useState } from "react"
import Link from "next/link"

import { Tabs, Form } from "react-bootstrap"
import Tab from "react-bootstrap/Tab"

const datosBase = {
  nombres: "",
  apellidos: "",
  tipoDocumento: "DNI",
  nroDocumento: undefined,
  edad: "",
  comentarios: "",
}

export default function Formularios({
  items,
  setFormularios,
  arraypasajero,
  setArrayPasajero,
  setPagos,
  setTarjeta,
}) {
  const [pasajeroActual, setPasajeroActual] = useState(1)
  const [error, setError] = useState(null)
  const [datosPasajero, setDatosPasajero] = useState({
    ...datosBase,
  })

  const [terminos, setTerminos] = useState(false)

  const actualizarInput = (e) => {
    setDatosPasajero({
      ...datosPasajero,
      [e.target.name]: e.target.value,
    })
  }

  const atras = (index) => {
    if (pasajeroActual > 1) {
      setError(null)

      setPasajeroActual(pasajeroActual - 1)

      let { nombres, apellidos, tipoDocumento, nroDocumento, comentarios } =
        items[index - 1]

      setDatosPasajero({
        nombres,
        apellidos,
        tipoDocumento,
        nroDocumento,
        comentarios,
      })
    }
  }

  const siguiente = (index) => {
    let { nombres, apellidos, tipoDocumento, nroDocumento, comentarios } =
      datosPasajero

    if (nombres && apellidos && tipoDocumento && nroDocumento) {
      let datos = {
        validado: true,
        nombres,
        apellidos,
        tipoDocumento,
        nroDocumento,
        comentarios,
      }

      items[index] = datos

      if (pasajeroActual >= items.length) {
        if (terminos) {
          setError(null)
          setPagos(true)
          setTarjeta(true)
        } else {
          setError("Debe aceptar los téminos y condiciones")
        }
      } else {
        setPasajeroActual(pasajeroActual + 1)

        /* Completar los campos con datos anteriores */
        if (items[pasajeroActual].validado) {
          setDatosPasajero({
            ...items[pasajeroActual],
          })
        } else {
          setDatosPasajero({
            ...datosBase,
          })
        }

        setError(null)
      }
    } else {
      setError("Por favor complete todos los campos requeridos.")
    }
  }

  return (
    <>
      {items.length
        ? items.map((item, index) => {
            return pasajeroActual == index + 1 ? (
              <form key={index}>
                <p className='lead font-weight-bold d-inline-block mb-3'>
                  Datos de pasajero {index + 1}
                </p>

                <p>
                  <span className='small text-danger'>
                    (*) Campos requeridos
                  </span>
                </p>

                <div className='form-row mt-3'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>
                        Nombres <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='text'
                        name='nombres'
                        className='form-control'
                        value={datosPasajero.nombres}
                        onChange={(e) => actualizarInput(e)}
                      />
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>
                        Apellidos <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='text'
                        name='apellidos'
                        className='form-control'
                        value={datosPasajero.apellidos}
                        onChange={(e) => actualizarInput(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className='form-row mt-3'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>
                        Tipo de documento <span className='text-danger'>*</span>
                      </label>
                      <select
                        name='tipoDocumento'
                        className='form-control'
                        value={datosPasajero.tipoDocumento}
                        onChange={(e) => actualizarInput(e)}
                      >
                        <option value='DNI'>DNI</option>
                        <option value='CE'>Carnet de extranjería</option>
                        <option value='PASAPORTE'>Pasaporte</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>
                        Número de documento{" "}
                        <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='number'
                        name='nroDocumento'
                        min='0'
                        step='1'
                        className='form-control'
                        value={datosPasajero.nroDocumento}
                        onChange={(e) => actualizarInput(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className='form-row mt-3'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label>
                        Edad <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='number'
                        name='edad'
                        className='form-control'
                        value={datosPasajero.edad}
                        onChange={(e) => actualizarInput(e)}
                      />
                    </div>
                  </div>
                </div>

                <div className='form-row mt-3'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label>Comentarios adicionales</label>
                      <textarea
                        name='comentarios'
                        className='form-control'
                        value={datosPasajero.comentarios}
                        onChange={(e) => actualizarInput(e)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Términos y condiciones */}
                {items.length == pasajeroActual ? (
                  <div className='form-group mt-3 px-md-4'>
                    <Form.Check
                      type='checkbox'
                      onChange={(e) => setTerminos(e.target.checked)}
                    />
                    Acepto los{" "}
                    <Link href='/terminos-y-condiciones'>
                      Términos y Condiciones Generales
                    </Link>{" "}
                    de Enlace Mundial
                  </div>
                ) : (
                  ""
                )}

                {/* Alerta de error */}
                {error ? (
                  <div className='alert alert-danger'>
                    <p>{error}</p>
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
                      type='button'
                      className='btn btn-link text-danger'
                      onClick={() => atras(index)}
                    >
                      <span className='d-inline-block mr-2 text-danger'>
                        <i className='fas fa-chevron-left'></i>
                      </span>
                      Atrás
                    </button>
                  ) : (
                    ""
                  )}

                  <button
                    type='button'
                    className='btn btn-info text-white px-4'
                    onClick={() => {
                      setArrayPasajero([...arraypasajero, datosPasajero])
                      siguiente(index)
                    }}
                  >
                    {pasajeroActual >= items.length
                      ? "Ir a pagar"
                      : "Siguiente"}
                    <span className='d-inline-block ml-2'>
                      <i className='fas fa-chevron-right'></i>
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              ""
            )
          })
        : ""}
    </>
  )
}
