import React from 'react'
import { TittleSection } from '../../common'
import { WrapperData } from '../../common/WrapperData'
// data ={ scrollMarginTop: '170px' }

export const ItemDetalle = ({ id, data, style }) => {
    return (
        <section id={id || ''} style={style || ''}>
            <TittleSection tittle="Detalles" />
            <WrapperData>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title font-weight-bold'>
                            {data.tituloTour}
                        </h5>

                        <div className='py-2 px-3'>
                            <p className='card-text'>{data.descripcionCortaTour}</p>
                        </div>
                    </div>
                </div>

                <div className='card mt-4'>
                    <div className='card-body'>
                        <h5 className='card-title font-weight-bold'>
                            Punto de partida
                        </h5>

                        <div className='py-2 px-3'>
                            <p className='card-text'>{data.puntoPartidaTour}</p>
                        </div>
                    </div>
                </div>
            </WrapperData>

        </section>
    )
}
