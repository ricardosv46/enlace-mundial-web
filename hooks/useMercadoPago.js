import { useEffect, useState } from 'react'
import useScript from './useScript'
import { mercadoPagoFormConfig } from '../data/mercadoPagoformConfig'

const useMercadoPago = ({ monto = 0, pagar }) => {
  const [resultPayment, setResultPayment] = useState({})

  const { MercadoPago } = useScript(
    'https://sdk.mercadopago.com/js/v2',
    'MercadoPago'
  )

  useEffect(() => {
    if (MercadoPago && monto != 0) {
      console.log('INIT_MERCADO_PAGO')

      // const mp = new MercadoPago('APP_USR-b2edd7f8-1b69-4481-ab35-1d612bf1634c')
      const mp = new MercadoPago('TEST-0ff678c6-d074-4dab-8b05-076734e5e8d2')

      const cardForm = mp.cardForm({
        amount: monto.toString(),
        autoMount: true,
        form: mercadoPagoFormConfig,
        callbacks: {
          onFormMounted: (error) => {
            if (error)
              return console.warn('Form Mounted handling error: ', error)
            console.log('Form mounted')
          },
          onSubmit: (event) => {
            event.preventDefault()
            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType
            } = cardForm.getCardFormData()

            // fetch('/process_payment', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify({
            //     token,
            //     issuer_id,
            //     payment_method_id,
            //     transaction_amount: Number(amount),
            //     installments: Number(installments),
            //     description: 'Compra de Pasajes',
            //     payer: {
            //       email,
            //       identification: {
            //         type: identificationType,
            //         number: identificationNumber
            //       }
            //     }
            //   })
            // })
            pagar({
              token,
              payment_method_id,
              installments: Number(installments)
            })
            // console.log({
            //   token,
            //   payment_method_id,
            //   installments: Number(installments), monto
            // })
          },
          onFetching: (resource) => {
            console.log('Fetching resource: ', resource)
          }
        }
      })

      // const mp = new MercadoPago('APP_USR-b2edd7f8-1b69-4481-ab35-1d612bf1634c')
      // const cardForm = mp.cardForm({
      //   amount: monto.toString(),
      //   autoMount: true,
      //   form: mercadoPagoFormConfig,
      //   callbacks: {
      //     onFormMounted: (error) => {
      //       if (error)
      //         return console.warn('Form Mounted handling error: ', error)
      //       console.log('Form mounted')
      //     },
      //     onSubmit: (event) => {
      //       event.preventDefault()

      //       const {
      //         paymentMethodId: payment_method_id,
      //         issuerId: issuer_id,
      //         cardholderEmail: email,
      //         amount,
      //         token,
      //         installments,
      //         identificationNumber,
      //         identificationType
      //       } = cardForm.getCardFormData()

      //       fetch('/process_payment', {
      //         method: 'POST',
      //         headers: { 'Content-Type': 'application/json' },
      //         body: JSON.stringify({
      //           token,
      //           issuer_id,
      //           payment_method_id,
      //           transaction_amount: Number(amount),
      //           installments: Number(installments),
      //           description: 'Compra de Pasajes',
      //           payer: {
      //             email,
      //             identification: {
      //               type: identificationType,
      //               number: identificationNumber
      //             }
      //           }
      //         })
      //       })

      //       pagar({
      //         token,
      //         payment_method_id,
      //         installments: Number(installments)
      //       })
      //     },
      //     onFetching: (resource) => {
      //       console.log('Fetching resource: ', resource)
      //     }
      //   }
      // })
    }
  }, [MercadoPago])

  return resultPayment
}

export default useMercadoPago
