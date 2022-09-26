import react, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Tabs, Form } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import { ValidationPassenger } from '../../../utilidades/validate-passenger'
import { FormInput } from './components/formInput'
import { FormSelect } from './components/formSelect'
import { FormTextArea } from './components/formTextArea'

const TypeDocumento = {
  "DNI": 8,
  "CE": 12,
  "PASAPORTE": 12
}
export default function Formularios({
  items,
  onchange,
  setPagos,
  setTarjeta
}) {
  const [pasajeroActual, setPasajeroActual] = useState(0)
  const [errors, setErrors] = useState({})
  const [terminos, setTerminos] = useState(false)

  const nextPassenger = async (index) => {
    setErrors({})
    try {
      await ValidationPassenger.validate((items[index]), { abortEarly: false }).then((res) => {
        {/* Preguntamos si estamos en el utimo pasajero */ }
        if ((index + 1) < items.length) setPasajeroActual(index + 1)
        {/* Preguntamos si estamos en el utimo passjero y el termino es true para mostrar la sgt pantalla */ }
        if (items.length === (index + 1) && terminos) {
          setPagos(true)
          setTarjeta(true)
        }
      }).catch((err) => {
        {/* provocamos el erro con el schema validate y mapeamos el error para mandarlo a los inputs */ }
        let data = JSON.parse(JSON.stringify(err))
        data.inner.map((error) => setErrors((err) => ({ ...err, [error.path]: error.message })))
        setPagos(false)
        setTarjeta(false)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {items.length
        ? items.map((item, index) => {
          return pasajeroActual === index ? (
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
                  <FormInput
                    Tittle='Nombres'
                    required
                    value={item?.nombres || ''}
                    name='nombres'
                    onchange={(e) => onchange(e, index)}
                    error={errors['nombres']}
                  />
                </div>
                <div className='col-md-6'>
                  <FormInput
                    Tittle='Apellidos'
                    required
                    value={item?.apellidos || ''}
                    name='apellidos'
                    onchange={(e) => onchange(e, index)}
                    error={errors['apellidos']}

                  />
                </div>
              </div>

              <div className='form-row mt-3'>
                <div className='col-md-6'>
                  <FormSelect
                    Tittle='Tipo de documento'
                    required
                    name='tipoDocumento'
                    onchange={(e) => onchange(e, index)}
                    value={item?.tipoDocumento || ''}
                    options={[
                      { name: 'DNI', value: 'DNI' },
                      { name: 'CE', value: 'Carnet de extranjería' },
                      { name: 'PASAPORTE', value: 'Pasaporte' }
                    ]}
                    error={errors['tipoDocumento']}

                  />
                </div>

                <div className='col-md-6'>
                  <FormInput
                    Tittle='Número de documento'
                    required
                    type='number'
                    value={item?.nroDocumento || ''}
                    name='nroDocumento'
                    onchange={(e) => onchange(e, index)}
                    error={errors['nroDocumento']}
                    maxLength={TypeDocumento[item?.tipoDocumento]}

                  />
                </div>
              </div>

              <div className='form-row mt-3'>
                <div className='col-md-12'>
                  <FormInput
                    Tittle='Edad'
                    required
                    type='number'
                    value={item?.edad || ''}
                    maxLength={2}
                    name='edad'
                    onchange={(e) => onchange(e, index)}
                    error={errors['edad']}
                  />
                </div>
              </div>

              <div className='form-row mt-3'>
                <div className='col-md-12'>
                  <FormTextArea
                    Tittle='Comentarios adicionales'
                    value={item?.comentarios || ''}
                    name='comentarios'
                    onchange={(e) => onchange(e, index)}
                    error={errors['comentarios']}
                  />
                </div>
              </div>

              {/* Términos y condiciones */}
              {items.length == pasajeroActual + 1 ? (
                <div className='form-group mt-3 px-md-4'>
                  <Form.Check
                    type='checkbox'
                    onChange={(e) => setTerminos(e.target.checked)}
                  />
                  Acepto los{' '}
                  <Link href='/terminos-y-condiciones'>
                    Términos y Condiciones Generales
                  </Link>{' '}
                  de Enlace Mundial Perú
                </div>
              ) : (
                ''
              )}

              <div
                className={`d-flex ${pasajeroActual > 0
                  ? 'justify-content-between'
                  : 'justify-content-end'
                  }`}
              >
                {/* Botón atrás */}
                {pasajeroActual > 0 ? (
                  <button
                    type='button'
                    className='btn btn-link text-danger'
                    // onClick={() => atras(index - 1)}
                    onClick={() => setPasajeroActual(index - 1)}

                  >
                    <span className='d-inline-block mr-2 text-danger'>
                      <i className='fas fa-chevron-left'></i>
                    </span>
                    Atrás
                  </button>
                ) : (
                  ''
                )}

                <button
                  type='button'
                  className='btn btn-info text-white px-4'
                  onClick={() => nextPassenger(index)}
                >
                  {pasajeroActual + 1 === items.length
                    ? 'Ir a pagar'
                    : 'Siguiente'}
                  <span className='d-inline-block ml-2'>
                    <i className='fas fa-chevron-right'></i>
                  </span>
                </button>
              </div>
            </form>
          ) : (
            ''
          )
        })
        : ''}
    </>
  )
}
