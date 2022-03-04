import React from "react"
import Image from "next/image"

const TipoPago = ({ setTarjeta, tipoPago, setTipoPago, setPagos }) => {
  const pagar = () => {
    setTarjeta(true)
  }

  return (
    <>
      <div className='row mx-lg-5 mx-2'>
        <div className='col-lg-6 px-1 py-1'>
          <div className='bg-light py-2  px-3 d-flex justify-content-start align-items-center rounded '>
            <input
              type='radio'
              name='pago'
              id='yape'
              value='yape'
              onClick={() => setTipoPago("yape")}
            />
            <div className='ml-2 pt-1'>
              <Image
                width={25}
                height={25}
                layout='fixed'
                src='/imagenes/pagos/yape.png'
                alt='yape'
              />
            </div>

            <label className='ml-2 text-sm' htmlFor='yape'>
              YAPE
            </label>
          </div>
        </div>
        <div className='col-lg-6 px-1 py-1'>
          <div className='bg-light py-2 px-3 d-flex justify-content-start align-items-center  rounded '>
            <input
              type='radio'
              name='pago'
              id='transferencia'
              value='transferencia'
              onClick={() => setTipoPago("transferencia")}
            />
            <div className='ml-2 pt-1'>
              <Image
                width={25}
                height={25}
                layout='fixed'
                src='/imagenes/pagos/interbank.png'
                alt='yape'
              />
            </div>
            <label className='ml-2 text-sm' htmlFor='transferencia'>
              TRANSFERENCIA
            </label>
          </div>
        </div>
        <div className='col-lg-6 px-1 py-1'>
          <div className='bg-light py-2 px-3 d-flex justify-content-start align-items-center rounded'>
            <input
              type='radio'
              name='pago'
              id='tarjeta'
              value='tarjeta'
              onClick={() => setTipoPago("tarjeta")}
            />
            <div className='ml-2 pt-1'>
              <Image
                width={25}
                height={25}
                layout='fixed'
                src='/imagenes/pagos/bcp.png'
                alt='yape'
              />
            </div>
            <label className='ml-2 text-sm' htmlFor='tarjeta'>
              TARJETA
            </label>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-between'>
        <button
          type='button'
          className='btn btn-link text-danger '
          onClick={() => {
            setPagos(false)
          }}
        >
          <span className='d-inline-block mr-2 text-danger'>
            <i className='fas fa-chevron-left'></i>
          </span>
          Atrás
        </button>

        <button
          type='button'
          className='btn btn-info text-white px-4 mt-4'
          onClick={pagar}
          disabled={tipoPago === ""}
        >
          Ir a Pagar
        </button>
      </div>
    </>
  )
}

export default TipoPago
