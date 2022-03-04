import React, { useState } from "react"
import Image from "next/image"

const isEmpty = (text = "") => {
  return text.trim().length !== 0
}

const Tarjeta = ({
  pagar,
  setTarjeta,
  setPagos,
  comprobante,
  setComprobante,
}) => {
  const [state, setState] = useState({
    tarjeta: "",
    fecha: "",
    cvv: "",
    titular: "",
    correo: "",
    documento: "",
  })
  const { tarjeta, fecha, cvv, titular, correo, documento } = state

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const isDisable =
    isEmpty(tarjeta) &&
    isEmpty(fecha) &&
    isEmpty(cvv) &&
    isEmpty(titular) &&
    isEmpty(correo) &&
    isEmpty(documento)

  return (
    <div>
      <div className='d-flex justify-content-center pb-5'>
        <Image
          width={396}
          height={229}
          layout='fixed'
          src='/imagenes/pagos/CreditCard.png'
          alt='tarjeta'
        />
      </div>

      <div>
        <h4 className='small font-weight-bold ml-2'>Nro de Tarjeta</h4>
        <div className='form-group'>
          <input
            type='number'
            className='form-control'
            placeholder='0000 0000 0000 0000'
            name='tarjeta'
            value={tarjeta}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <h4 className='small font-weight-bold ml-2'>Fecha de expiración</h4>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='MM/YY'
              name='fecha'
              value={fecha}
              onChange={onChange}
            />
          </div>
        </div>

        <div className='col-6'>
          <h4 className='small font-weight-bold ml-2'>CVV</h4>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              placeholder='***'
              name='cvv'
              value={cvv}
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className='small font-weight-bold ml-2'>Titular de la Tarjeta</h4>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Ingresar nombre'
            name='titular'
            value={titular}
            onChange={onChange}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
          <h4 className='small font-weight-bold ml-2'>Correo electrónico</h4>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Ingresar correo'
              name='correo'
              value={correo}
              onChange={onChange}
            />
          </div>
        </div>

        <div className='col-lg-6'>
          <h4 className='small font-weight-bold ml-2'>Número de documento</h4>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              placeholder='Ingresar número de documento'
              name='documento'
              value={documento}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-between mt-4'>
        <button
          type='button'
          className='btn btn-link text-danger '
          onClick={() => {
            setTarjeta(false)
            setPagos(true)
            if (comprobante) {
              setTarjeta(true)
              setComprobante(false)
            }
          }}
        >
          <span className='d-inline-block mr-2 text-danger'>
            <i className='fas fa-chevron-left'></i>
          </span>
          Atrás
        </button>

        <button
          type='button'
          className='btn btn-primary text-white px-4'
          onClick={pagar}
          disabled={!isDisable}
        >
          Realizar Pago
        </button>
      </div>
    </div>
  )
}

export default Tarjeta
