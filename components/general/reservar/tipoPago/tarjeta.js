import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import useMercadoPago from '../../../../hooks/useMercadoPago'

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
  const [state, setState] = useState({
    cardNumber: '',
    securityCode: '',
    cardholderName: '',
    cardholderEmail: '',
    identificationNumber: ''
  })

  const {
    cardNumber,
    securityCode,
    cardholderName,
    cardholderEmail,
    identificationNumber
  } = state

  const onChange = (name) => {
    return (e) => {
      setState({ ...state, [name]: e.target.value })
    }
  }
  const monto = carrito?.producto.precioBaseTour * arraypasajero.length
  const resultPayment = useMercadoPago({ monto, pagar })
  const isDisable =
    isEmpty(cardNumber) ||
    isEmpty(securityCode) ||
    isEmpty(cardholderName) ||
    isEmpty(cardholderEmail) ||
    isEmpty(identificationNumber)

  // const onload = () => {
  //   const mp = new MercadoPago('APP_USR-b2edd7f8-1b69-4481-ab35-1d612bf1634c')
  //   const cardForm = mp.cardForm({
  //     amount: monto.toString(),
  //     autoMount: true,
  //     form: {
  //       id: 'form-checkout',
  //       cardholderName: {
  //         id: 'form-checkout__cardholderName',
  //         placeholder: 'Titular de la tarjeta'
  //       },
  //       cardholderEmail: {
  //         id: 'form-checkout__cardholderEmail',
  //         placeholder: 'E-mail'
  //       },
  //       cardNumber: {
  //         id: 'form-checkout__cardNumber',
  //         placeholder: 'Número de la tarjeta'
  //       },
  //       cardExpirationDate: {
  //         id: 'form-checkout__cardExpirationDate',
  //         placeholder: 'Data de vencimiento (MM/YY)'
  //       },
  //       securityCode: {
  //         id: 'form-checkout__securityCode',
  //         placeholder: 'Código de seguridad'
  //       },
  //       installments: {
  //         id: 'form-checkout__installments',
  //         placeholder: 'Cuotas'
  //       },
  //       identificationType: {
  //         id: 'form-checkout__identificationType',
  //         placeholder: 'Tipo de documento'
  //       },
  //       identificationNumber: {
  //         id: 'form-checkout__identificationNumber',
  //         placeholder: 'Número de documento'
  //       },
  //       issuer: {
  //         id: 'form-checkout__issuer',
  //         placeholder: 'Banco emisor'
  //       }
  //     },
  //     callbacks: {
  //       onFormMounted: (error) => {
  //         if (error) return console.warn('Form Mounted handling error: ', error)
  //         console.log('Form mounted')
  //       },
  //       onSubmit: (event) => {
  //         event.preventDefault()
  //         const {
  //           paymentMethodId: payment_method_id,
  //           issuerId: issuer_id,
  //           cardholderEmail: email,
  //           amount,
  //           token,
  //           installments,
  //           identificationNumber,
  //           identificationType
  //         } = cardForm.getCardFormData()

  //         fetch('/process_payment', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json'
  //           },
  //           body: JSON.stringify({
  //             token,
  //             issuer_id,
  //             payment_method_id,
  //             transaction_amount: Number(amount),
  //             installments: Number(installments),
  //             description: 'Compra de Pasajes',
  //             payer: {
  //               email,
  //               identification: {
  //                 type: identificationType,
  //                 number: identificationNumber
  //               }
  //             }
  //           })
  //         })
  //         pagar({
  //           token,
  //           payment_method_id,
  //           installments: Number(installments)
  //         })
  //       },
  //       onFetching: (resource) => {
  //         console.log('Fetching resource: ', resource)
  //       }
  //     }
  //   })
  // }

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
      <form id='form-checkout'>
        <div className='form-group'>
          <input
            type='text'
            name='cardNumber'
            id='form-checkout__cardNumber'
            className='form-control'
            onChange={onChange('cardNumber')}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='cardExpirationDate'
            id='form-checkout__cardExpirationDate'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='cardholderName'
            id='form-checkout__cardholderName'
            className='form-control'
            onChange={onChange('cardholderName')}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='cardholderEmail'
            id='form-checkout__cardholderEmail'
            className='form-control'
            onChange={onChange('cardholderEmail')}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='securityCode'
            id='form-checkout__securityCode'
            className='form-control'
            onChange={onChange('securityCode')}
          />
        </div>
        <div className='form-group'>
          <select
            name='issuer'
            id='form-checkout__issuer'
            className='form-control'
            onChange={onChange('issuer')}
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
            onChange={onChange('identificationNumber')}
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
