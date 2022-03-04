import React from "react"
import Image from "next/image"
import { formatoAPrecio } from "../../../../utilidades/formato-precio"
const Yape = ({
  subir,
  carrito,
  setTarjeta,
  setPagos,
  comprobante,
  setComprobante,
}) => {
  return (
    <div>
      <p className='d-flex justify-content-center text-center'>
        Escane el código QR o page al siguiente número de celular.
      </p>
      <div className='d-flex justify-content-center py-3'>
        <Image
          width={100}
          height={100}
          layout='fixed'
          src='/imagenes/pagos/Qr.png'
          alt='qr'
        />
      </div>
      <div className='d-flex justify-content-center px-lg-0 px-1 py-3 py-lg-3'>
        <div className='col-lg-6 bg-light rounded px-3 py-3 d-flex justify-content-between align-items-center px-lg-3'>
          <p className=' text-md '>991 615 223</p>
          <button className=' btn-copiar bg-secondary text-white '>
            Copiar
          </button>
        </div>
      </div>
      <h4 className='d-flex justify-content-center text-center text-md '>
        Monto a pagar con YAPE
      </h4>
      <h5 className='d-flex justify-content-center text-md'>
        {formatoAPrecio(carrito?.producto.precioBaseTour)}
      </h5>
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
          onClick={subir}
        >
          Subir Comprobante
        </button>
      </div>
    </div>
  )
}

export default Yape
