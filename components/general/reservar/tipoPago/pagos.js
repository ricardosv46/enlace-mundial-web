import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles.module.css'
import Check from '../../../../public/imagenes/pagos/Check'
import { useRouter } from 'next/router'
import Tarjeta from './tarjeta'
import Yape from './yape'
import Transferencia from './transferencia'
import { useOrdenServices } from '../../../../gestion-de-endpoints/useOrdenServices'

const Pagos = ({
  pagos,
  tipoPago,
  setPagos,
  setTarjeta,
  carrito,
  arraypasajero,
  tarjeta
}) => {
  const router = useRouter()
  const [comprobante, setComprobante] = useState(false)
  const [pagoCompleto, setPagoCompleto] = useState(false)
  const [alerta, setAlerta] = useState('')
  const [imagePrevios, setImagePrevios] = useState(null)
  const { createOrdenTour } = useOrdenServices()
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
  const datosPasaje = arraypasajero.map((data) => ({
    estadoPasaje: 'NO ASISTIO',
    nombresVisitante: data.nombres,
    apellidosVisitante: data.apellidos,
    edadVisitante: data.edad,
    fechaReserva: carrito.fecha,
    tourId: carrito.tourId
  }))

  const subir = () => {
    setComprobante(true)
  }

  const pagar = async ({ payment_method_id, token, installments }) => {
    console.log('se esta ejecuntando el pago papurri')
    await createOrdenTour({
      input: {
        tipoPago: 3,
        nroOperacion: '',
        estadoOrdenTour: 'PENDIENTE',
        descuento: '0',
        horarioTourId: carrito.duracion.horarioTourId.toString(),
        PasajesInput: datosPasaje
      },
      input1: {
        type_save: 0,
        source_id: token,
        payment_method_id: payment_method_id,
        installments: installments,
        tipo_tarjeta: 0
      }
    }).then((res) => {
      if (res === 'exito') {
        setPagoCompleto(true)
      } else {
        setAlerta('No se genero el pago vuelva a intentarlo')
      }
    })
  }

  return (
    <>
      {pagoCompleto ? (
        <div className='d-flex justify-content-center row'>
          <div className='col-12 d-flex justify-content-center text-sm'>
            Secompleto el pago exitosamente
          </div>
          <div className='col-12 d-flex justify-content-center mt-4'>
            <Check width={100} height={100} />
          </div>
          <button
            className='btn btn-primary mt-4'
            onClick={() => router.push('/')}
          >
            Ir a Inicio
          </button>
        </div>
      ) : (
        <>
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
                </div>{' '}
                <button className='btn btn-danger mt-4'>Reintentar</button>
              </div>
              <div className='d-flex justify-content-between mt-4'>
                <button
                  type='button'
                  className='btn btn-link text-danger '
                  onClick={() => {
                    setTarjeta(false)
                    setPagos(true)
                    setImagePrevios(null)
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
                  disabled={!imagePrevios}
                >
                  Subir Archivo
                </button>
              </div>
            </div>
          ) : (
            <>
              {tipoPago === 'tarjeta' && (
                <Tarjeta
                  pagos={pagos}
                  tarjeta={tarjeta}
                  tipoPago={tipoPago}
                  alerta={alerta}
                  pagar={pagar}
                  setTarjeta={setTarjeta}
                  setPagos={setPagos}
                  carrito={carrito}
                  setComprobante={setComprobante}
                  comprobante={comprobante}
                  arraypasajero={arraypasajero}
                />
              )}
              {/* {tipoPago === "yape" && (
                <Yape
                  subir={subir}
                  setTarjeta={setTarjeta}
                  setPagos={setPagos}
                  setComprobante={setComprobante}
                  carrito={carrito}
                  comprobante={comprobante}
                  imagePrevios={imagePrevios}
                  arraypasajero={arraypasajero}
                />
              )}
              {tipoPago === "transferencia" && (
                <Transferencia
                  subir={subir}
                  setTarjeta={setTarjeta}
                  setPagos={setPagos}
                  setComprobante={setComprobante}
                  carrito={carrito}
                  comprobante={comprobante}
                  imagePrevios={imagePrevios}
                  arraypasajero={arraypasajero}
                />
              )} */}
            </>
          )}
        </>
      )}
    </>
  )
}

export default Pagos
