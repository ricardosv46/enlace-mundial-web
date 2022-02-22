import React from "react"
import Image from "next/image"
import { formatoAPrecio } from "../../../utilidades/formato-precio"

const Tarjeta = ({ tipoPago, setPagos, setTarjeta, carrito }) => {
  console.log()
  return (
    <>
      {tipoPago === "tarjeta" && (
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
                name='tarjeta'
                placeholder='0000 0000 0000 0000'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h4 className='small font-weight-bold ml-2'>
                Fecha de expiración
              </h4>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='fecha'
                  placeholder='MM/YY'
                />
              </div>
            </div>

            <div className='col-6'>
              <h4 className='small font-weight-bold ml-2'>CVV</h4>
              <div className='form-group'>
                <input
                  type='number'
                  className='form-control'
                  name='cvv'
                  placeholder='***'
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className='small font-weight-bold ml-2'>
              Titular de la Tarjeta
            </h4>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='tarjeta'
                placeholder='Ingresar titular'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h4 className='small font-weight-bold ml-2'>
                Correo electrónico
              </h4>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  placeholder='Ingresar correo'
                />
              </div>
            </div>

            <div className='col-6'>
              <h4 className='small font-weight-bold ml-2'>
                Número de documento
              </h4>
              <div className='form-group'>
                <input
                  type='number'
                  className='form-control'
                  name='documento'
                  placeholder='Ingresar número de documento'
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {tipoPago === "yape" && (
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
          <div className='d-flex justify-content-center py-3'>
            <div className='col-lg-6 bg-secondary p-3 d-flex justify-content-between align-items-center px-lg-5'>
              <p className='text-white'>991 615 223</p>
              <button className=' btn-primary text-white '>Copiar</button>
            </div>
          </div>
          <h4 className='d-flex justify-content-center '>
            Monto a pagar con YAPE
          </h4>
          <h5 className='d-flex justify-content-center'>
            {formatoAPrecio(carrito.producto.precioBaseTour)}
          </h5>
        </div>
      )}
      {tipoPago === "transferencia" && <p>Transferencia</p>}

      <div className='d-flex justify-content-between mt-4'>
        <button
          type='button'
          className='btn btn-link text-danger '
          onClick={() => {
            setTarjeta(false)
            setPagos(true)
          }}
        >
          <span className='d-inline-block mr-2 text-danger'>
            <i className='fas fa-chevron-left'></i>
          </span>
          Atrás
        </button>

        <button type='button' className='btn btn-primary text-white px-4'>
          {tipoPago === "tarjeta" ? "Realizar Pago" : "Subir Comprobante"}
        </button>
      </div>
    </>
  )
}

export default Tarjeta
