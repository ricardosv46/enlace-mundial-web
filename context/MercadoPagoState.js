// import React, { createContext, useContext, useState } from 'react'
// import useMercadoPago from '../hooks/useMercadoPago'

// const MercadoPagoContext = createContext()

// const MercadoPagoState = ({ children }) => {
//   const [monto, setMonto] = useState(180)
//   const resultPayment = useMercadoPago({ monto })

//   console.log({ resultPayment })

//   return (
//     <MercadoPagoContext.Provider value={{ monto, setMonto }}>
//       {children}
//     </MercadoPagoContext.Provider>
//   )
// }

// export default MercadoPagoState

// export const useMercadoPagoContext = () => useContext(MercadoPagoContext)
