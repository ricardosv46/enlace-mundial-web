import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import 'react-credit-cards/es/styles-compiled.css'
import useMercadoPago from '../../../../hooks/useMercadoPago'
import Card from 'react-credit-cards'
const INITIAL_STATE = {
  cvc: '',
  cardExpirationMonth: '',
  cardExpirationYear: '',
  focus: 'cardNumber',
  cardholderName: '',
  cardNumber: '',
  issuer: '',
  identificationNumber: '',
  cardholderEmail: ''
}

const isEmpty = (text = '') => {
  return text.trim().length === 0
}

const Tarjeta = ({
  pagar,
  carrito,
  arraypasajero,
  setTarjeta,
  setPagos,
  comprobante,
  setComprobante,
  alerta
}) => {
  const [state, setState] = useState(INITIAL_STATE)

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.dataset.name || e.target.name]: e.target.value
    })
  }

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.dataset.name || e.target.name })
  }
  const monto = carrito?.producto.precioBaseTour * arraypasajero.length
  const resultPayment = useMercadoPago({ monto, pagar })
  const isDisable =
    isEmpty(state.cardNumber) ||
    isEmpty(state.cvc) ||
    isEmpty(state.cardholderName) ||
    isEmpty(state.cardholderEmail) ||
    isEmpty(state.identificationNumber) ||
    isEmpty(state.cardExpirationMonth) ||
    isEmpty(state.cardExpirationYear)

  return (
    <div>
      <div className='d-flex justify-content-center pb-5'>
        <Card
          cvc={state.cvc}
          expiry={state.cardExpirationMonth + state.cardExpirationYear}
          name={state.cardholderName}
          number={state.cardNumber}
          focused={state.focus}
          brand={state.issuer}
        />
      </div>
      <form id='form-checkout'>
        <div className='form-group'>
          <input
            type='text'
            name='cardNumber'
            id='form-checkout__cardNumber'
            className='form-control'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className='form-row'>
          <div className='form-group col-md-4'>
            <input
              className='form-control'
              type='tel'
              name='cardExpirationMonth'
              id='form-checkout__cardExpirationMonth'
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className='form-group col-md-4'>
            <input
              className='form-control'
              type='tel'
              name='cardExpirationYear'
              id='form-checkout__cardExpirationYear'
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className='form-group col-md-4'>
            <input
              type='text'
              name='cvc'
              id='form-checkout__securityCode'
              className='form-control'
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='cardholderName'
            id='form-checkout__cardholderName'
            className='form-control'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='cardholderEmail'
            id='form-checkout__cardholderEmail'
            className='form-control'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>

        <div className='form-group'>
          <select
            name='issuer'
            id='form-checkout__issuer'
            className='form-control'
            on
          ></select>
        </div>
        <div className='form-group'>
          <select
            name='identificationType'
            id='form-checkout__identificationType'
            className='form-control'
          ></select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='identificationNumber'
            id='form-checkout__identificationNumber'
            className='form-control'
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className='form-group'>
          <select
            name='installments'
            id='form-checkout__installments'
            className='form-control'
          ></select>
        </div>

        <div className='d-flex justify-content-center'>
          <h5 className='text-danger fw-bold'>{alerta}</h5>
        </div>

        <div className='d-flex justify-content-between mt-4'>
          <button
            type='button'
            className='btn btn-link text-danger '
            onClick={() => {
              setTarjeta(false)
              setPagos(false)
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
            type='submit'
            id='form-checkout__submit'
            className='btn btn-primary text-white px-4'
            onClick={() => {
              console.log({ resultPayment })
              //   // pagar({
              //   //   token: resultPayment.token,
              //   //   payment_method_id: resultPayment.payment_method_id,
              //   //   installments: Number(resultPayment.installments)
              //   // })
            }}
            disabled={isDisable}
          >
            Realizar Pago
          </button>
        </div>
      </form>
      {/* <Script src='https://sdk.mercadopago.com/js/v2' onLoad={onload} /> */}
    </div>
  )
}

export default Tarjeta
