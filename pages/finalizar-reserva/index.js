import react, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Moment from 'react-moment'

import styles from './styles.module.scss'

import { formatoAPrecio } from '../../utilidades/formato-precio'

import { Tabs, Form } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'

import Formularios from '../../components/general/reservar/formularios'
import Pagos from '../../components/general/reservar/tipoPago/pagos'
import TipoPago from '../../components/general/reservar/tipoPago'
import { ContextAuth } from '../../context/ContextAuth'
import { useRouter } from 'next/router'

const datosFormulario = {
  validado: false,
  nombres: '',
  apellidos: '',
  tipoDocumento: 'DNI',
  nroDocumento: undefined,
  comentarios: ''
}

export default function Home() {
  const router = useRouter()
  const contextAuth = useContext(ContextAuth)
  const { auth, setShow } = contextAuth

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      router.back()
      setShow(true)
    } else {
      setLoading(false)
    }
    return () => {
      setLoading(true)
    }
  }, [auth])

  const [arraypasajero, setArrayPasajero] = useState([])

  const [tarjeta, setTarjeta] = useState(false)
  const [tipoPago, setTipoPago] = useState('tarjeta')
  const [pagos, setPagos] = useState(false)
  const [carrito, setCarrito] = useState({})
  const [formularios, setFormularios] = useState([])

  // Asignar formularios
  useEffect(() => {
    setTimeout(() => {
      const carritoLocal = JSON.parse(localStorage.getItem('carrito'))

      setCarrito(carritoLocal)

      // Calcular cuantos formularios se renderizarán
      let forms = []

      for (let i = 0; i < carritoLocal.nroAdultos; i++) {
        let form = {
          ...datosFormulario,
          tipoPersona: 'ADULTO'
        }

        forms.push(form)
      }

      for (let i = 0; i < carritoLocal.nroMenores; i++) {
        let form = {
          ...datosFormulario,
          tipoPersona: 'MENOR'
        }

        forms.push(form)
      }

      setFormularios(forms)
    }, 500)
  }, [])

  if (loading) {
    return <div className={styles.todo}></div>
  }

  return (
    <div>
      <Head>
        <title>Luna de miel - Enlace mundial</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>

      <main className={`${styles.finalizarReserva} mt-5`}>
        <section className='container'>
          <div className='row'>
            <div className='col-md-8 mt-3 mt-md-0'>
              <div className='card shadow-card rounded-0'>
                <div className='card-header bg-primary text-white text-uppercase font-weight-bold rounded-0'>
                  Finalizar Reserva
                </div>

                <div className='card-body'>
                  <Tabs
                    defaultActiveKey='home'
                    id='uncontrolled-tab-example'
                    className='mb-3'
                  >
                    <Tab
                      eventKey='home'
                      title={
                        !pagos
                          ? formularios.length > 1
                            ? 'Datos de los pasajeros'
                            : 'Datos del pasajero'
                          : 'Datos de la Tarjeta'
                      }
                    >
                      <section className='p-1 p-lg-3'>
                        {!pagos ? (
                          formularios.length ? (
                            <Formularios
                              setTarjeta={setTarjeta}
                              items={formularios}
                              setFormularios={setFormularios}
                              setPagos={setPagos}
                              setArrayPasajero={setArrayPasajero}
                              arraypasajero={arraypasajero}
                            />
                          ) : (
                            'Debe agregar un tour a su carrito'
                          )
                        ) : null}

                        {/* {!tarjeta && pagos && (
                          <TipoPago
                            setPagos={setPagos}
                            setTarjeta={setTarjeta}
                            setTipoPago={setTipoPago}
                            tipoPago={tipoPago}
                            arraypasajero={arraypasajero}
                          />
                        )} */}

                        {tarjeta && (
                          <Pagos
                            pagos={pagos}
                            tarjeta={tarjeta}
                            arraypasajero={arraypasajero}
                            carrito={carrito}
                            tipoPago={tipoPago}
                            setPagos={setPagos}
                            setTarjeta={setTarjeta}
                          />
                        )}
                      </section>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className={`${styles.finalizarReserva_col2} col-md-4`}>
              <div className='card shadow-card'>
                <div
                  style={{
                    backgroundImage:
                      'url(' + carrito?.producto?.imagenPrincipalTour?.url + ')'
                  }}
                  className={`${styles.finalizarReserva_imagenTour} bg-info`}
                ></div>
                <div className='card-body'>
                  <h2 className='border-bottom pb-2'>
                    {carrito.producto ? carrito.producto.tituloTour : ''}
                  </h2>
                  <div className='mt-2 border-bottom pb-3'>
                    <span className='text-muted'>Fecha de reserva: </span>

                    <div className='row mt-2'>
                      <div className='col-md-6'>
                        <p>
                          <i className='far fa-calendar-alt'></i>
                          <span className='d-inline-block ml-2'>
                            <Moment format='DD/MM/YYYY'>{carrito.fecha}</Moment>
                          </span>
                        </p>
                      </div>

                      <div className='col-md-6'>
                        <p>
                          <i className='far fa-clock'></i>
                          <span className='d-inline-block ml-2'>
                            <Moment format='LT'>{carrito.hora}</Moment>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2 border-bottom pb-3'>
                    <span className='text-muted'>Pasajeros: </span>

                    <div className='row mt-2'>
                      <div className='col-md-6'>
                        <p>
                          <i className='fas fa-restroom'></i>
                          <span className='d-inline-block ml-2'>
                            {carrito.nroAdultos}
                          </span>
                        </p>
                        <span className='small text-primary'>Adultos</span>
                      </div>

                      <div className='col-md-6'>
                        <p>
                          <i className='fas fa-child'></i>
                          <span className='d-inline-block ml-2'>
                            {carrito.nroMenores}
                          </span>
                        </p>
                        <span className='small text-primary'>Niños</span>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between align-items-center mt-2 pb-3 pr-md-3 border-bottom'>
                    <span className='text-muted'>TOTAL</span>

                    {carrito.producto ? (
                      <div>
                        <span className='small text-muted'>
                          {formatoAPrecio(carrito.producto.precioBaseTour)} c/u
                        </span>
                        <h3>
                          {formatoAPrecio(
                            carrito.producto.precioBaseTour *
                              (carrito.nroAdultos + carrito.nroMenores)
                          )}
                        </h3>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2 pb-3 pr-md-3 border-bottom'>
                  <span className='text-muted'>TOTAL</span>

                  {carrito.producto ? (
                    <div>
                      <span className='small text-muted'>
                        {formatoAPrecio(
                          carrito.precioReal
                            ? carrito.precioReal
                            : carrito.producto.precioBaseTour
                        )}{' '}
                        c/u
                      </span>
                      <h3>
                        {carrito.precioReal
                          ? formatoAPrecio(
                              carrito.precioReal *
                                (carrito.nroAdultos + carrito.nroMenores)
                            )
                          : formatoAPrecio(
                              carrito.producto.precioBaseTour *
                                (carrito.nroAdultos + carrito.nroMenores)
                            )}
                      </h3>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
