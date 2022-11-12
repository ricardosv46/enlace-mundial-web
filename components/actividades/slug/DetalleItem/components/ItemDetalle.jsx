import React from 'react'
import { TittleSection } from '../../common'
import { WrapperData } from '../../common/WrapperData'
// data ={ scrollMarginTop: '170px' }

export const ItemDetalle = ({ id, style = {}, titulo, descripciontitulo, partida, PuntoPartida }) => {
  return (
    <section id={id || ''} style={style}>
      <TittleSection tittle='Detalles' />
      <WrapperData>
        <h5 className='card-title font-weight-bold'>{titulo}</h5>

        <div className='py-2 px-3'>
          <div className='card-text' dangerouslySetInnerHTML={{ __html: descripciontitulo }}></div>
        </div>

        <h5 className='card-title font-weight-bold'>{partida}</h5>

        <div className='py-2 px-3'>
          <p className='card-text'>{PuntoPartida}</p>
        </div>
      </WrapperData>
    </section>
  )
}
