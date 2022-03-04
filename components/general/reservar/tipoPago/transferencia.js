import React from "react"
import Image from "next/image"
import { formatoAPrecio } from "../../../../utilidades/formato-precio"
const Transferencia = ({
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
        Tranferencia bancaria haga el deposito en la cuenta correspondiente.
      </p>
      <div className='d-flex justify-content-center py-3'>
        <div className='m-1'>
          <Image
            width={75}
            height={75}
            layout='fixed'
            src='/imagenes/pagos/bcp.png'
            alt='qr'
            className='rounded-1 '
          />
        </div>
        <div className='m-1'>
          {" "}
          <Image
            width={75}
            height={75}
            layout='fixed'
            src='/imagenes/pagos/interbank.png'
            alt='qr'
            className='rounded-1'
          />
        </div>

        <div className='m-1'>
          <Image
            width={75}
            height={75}
            layout='fixed'
            src='/imagenes/pagos/bbva.png'
            alt='qr'
            className='rounded-1'
          />
        </div>

        <div className='m-1'>
          <Image
            width={75}
            height={75}
            layout='fixed'
            src='/imagenes/pagos/scotia.png'
            alt='qr'
            className='rounded-1'
          />
        </div>
      </div>
      <div className='d-flex justify-content-center px-lg-0 px-1 py-3 py-lg-3 row '>
        <div className='col-lg-7 bg-light rounded px-3 py-0 d-flex justify-content-between align-items-center px-lg-3 my-1'>
          <div className='mt-2'>
            <Image
              width={50}
              height={50}
              layout='fixed'
              src='/imagenes/pagos/bcp.png'
              alt='qr'
              className='rounded-1'
            />
          </div>
          <p className=' text-sm '>4557 2323 4891 6123</p>
          <button className=' btn-copiar bg-secondary text-white'>
            Copiar
          </button>
        </div>
        <div className='col-lg-7 bg-light rounded px-3 py-0 d-flex justify-content-between align-items-center px-lg-3 my-1'>
          <div className='mt-2'>
            <Image
              width={50}
              height={50}
              layout='fixed'
              src='/imagenes/pagos/interbank.png'
              alt='qr'
              className='rounded-1'
            />
          </div>
          <p className='text-sm '>4557 2323 4891 6123</p>
          <button className=' btn-copiar bg-secondary text-white'>
            Copiar
          </button>
        </div>
        <div className='col-lg-7 bg-light rounded px-3 py-0 d-flex justify-content-between align-items-center px-lg-3 my-1'>
          <div className='mt-2'>
            <Image
              width={50}
              height={50}
              layout='fixed'
              src='/imagenes/pagos/bbva.png'
              alt='qr'
              className='rounded-1'
            />
          </div>
          <p className=' text-sm '>4557 2323 4891 6123</p>
          <button className=' btn-copiar bg-secondary text-white'>
            Copiar
          </button>
        </div>
        <div className=' col-lg-7 bg-light rounded px-3 py-0 d-flex justify-content-between align-items-center px-lg-3 my-1'>
          <div className='mt-2'>
            <Image
              width={50}
              height={50}
              layout='fixed'
              src='/imagenes/pagos/scotia.png'
              alt='qr'
              className='rounded-1'
            />
          </div>
          <p className=' text-sm '>4557 2323 4891 6123</p>
          <button className=' btn-copiar bg-secondary text-white'>
            Copiar
          </button>
        </div>
      </div>
      <h4 className='d-flex justify-content-center text-center text-md '>
        Tranferencia Bancaria
      </h4>
      <h5 className='d-flex justify-content-center text-md'>
        {formatoAPrecio(carrito.producto.precioBaseTour)}
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

export default Transferencia
