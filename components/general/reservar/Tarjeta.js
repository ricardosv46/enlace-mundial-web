import React, { useState } from "react"
import Image from "next/image"
import { formatoAPrecio } from "../../../utilidades/formato-precio"
import styles from "../styles.module.css"
import Check from "../../../public/imagenes/pagos/Check"

const Tarjeta = ({ tipoPago, setPagos, setTarjeta, carrito }) => {
  const [comprobante, setComprobante] = useState(false)
  const [pagoCompleto, setPagoCompleto] = useState(false)
  const [imagePrevios, setImagePrevios] = useState(null)
  const changeImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e) => {
        e.preventDefault()
        setImagePrevios(e.target.result)
      }
    }
  }

  const subir = () => {
    setComprobante(true)
  }

  const pagar = () => {
    setPagoCompleto(true)
  }

  return (
    <>
      {pagoCompleto ? (
        <div className='d-flex justify-content-center row'>
          <div className='col-12 d-flex justify-content-center text-sm'>
            Secompleto el pago exitosamente
          </div>
          <div className='col-12 d-flex justify-content-center mt-3'>
            <Check width={100} height={100} />
          </div>
        </div>
      ) : (
        <>
          {" "}
          {comprobante ? (
            <div className='px-0'>
              <p className='d-flex justify-content-center text-center text-sm'>
                En este momento puede realizar el pago y adjuntar el comprobante
                para asegurar la reserva de su pedido o si prefiere puede
                adjuntarlo después.
              </p>
              <div className='d-flex justify-content-center row'>
                <div className={`${styles.caja} bg-light rounded `}>
                  {!imagePrevios && <p>Arrastre la imagen o haga click aquí</p>}
                  <p>Archivos permitidos: .jpg, .jpeg, .png</p>
                  <input
                    className={styles.input}
                    type='file'
                    accept='image/*'
                    onChange={(e) => changeImage(e)}
                  />
                </div>
                <div className='d-flex justify-content-center pb-5'>
                  {imagePrevios && (
                    <Image
                      width={200}
                      height={300}
                      layout='fixed'
                      src={imagePrevios}
                      alt='image'
                    />
                  )}
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
                >
                  Subir Archivo
                </button>
              </div>
            </div>
          ) : (
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
                    <h4 className='small font-weight-bold ml-2'>
                      Nro de Tarjeta
                    </h4>
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
                    <div className='col-lg-6'>
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

                    <div className='col-lg-6'>
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
                    >
                      Realizar Pago
                    </button>
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
              )}
              {tipoPago === "transferencia" && (
                <div>
                  <p className='d-flex justify-content-center text-center'>
                    Tranferencia bancaria haga el deposito en la cuenta
                    correspondiente.
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
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Tarjeta
