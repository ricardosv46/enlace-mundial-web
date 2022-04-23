// import { useEffect, useState } from 'react'
// import useScript from './useScript'
// import { mercadoPagoFormConfig } from '../data/mercadoPagoformConfig'

// const useMercadoPago = ({ monto = 0 }) => {
//   const [resultPayment, setResultPayment] = useState(undefined)

//   const { MercadoPago } = useScript(
//     'https://sdk.mercadopago.com/js/v2',
//     'MercadoPago'
//   )

//   useEffect(() => {
//     if (MercadoPago && monto != 0) {
//       console.log('INIT_MERCADO_PAGO')

//       const mp = new MercadoPago('APP_USR-b2edd7f8-1b69-4481-ab35-1d612bf1634c')
//       const cardForm = mp.cardForm({
//         amount: monto.toString(),
//         autoMount: true,
//         form: mercadoPagoFormConfig,
//         callbacks: {
//           onFormMounted: (error) => {
//             if (error)
//               return console.warn('Form Mounted handling error: ', error)
//             console.log('Form mounted')
//           },
//           onSubmit: (event) => {
//             event.preventDefault()

//             const {
//               paymentMethodId: payment_method_id,
//               issuerId: issuer_id,
//               cardholderEmail: email,
//               amount,
//               token,
//               installments,
//               identificationNumber,
//               identificationType
//             } = cardForm.getCardFormData()

//             fetch('/process_payment', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 token,
//                 issuer_id,
//                 payment_method_id,
//                 transaction_amount: Number(amount),
//                 installments: Number(installments),
//                 description: 'Compra de Pasajes',
//                 payer: {
//                   email,
//                   identification: {
//                     type: identificationType,
//                     number: identificationNumber
//                   }
//                 }
//               })
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 // setResultPayment(data)
//                 setResultPayment({
//                   token,
//                   payment_method_id,
//                   installments: Number(installments)
//                 })
//               })
//               .catch((err) => setResultPayment(err))

//             // pagar({
//             //   token,
//             //   payment_method_id,
//             //   installments: Number(installments)
//             // })
//           },
//           onFetching: (resource) => {
//             console.log('Fetching resource: ', resource)
//           }
//         }
//       })
//     }
//   }, [MercadoPago, monto])

//   return resultPayment
// }

// export default useMercadoPago
