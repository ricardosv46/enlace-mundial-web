import React from 'react'
import HeaderInterior from '../../general/publicaciones/header-interior'
export const TittleOferta = (props) => {
    return (
        <div className='container' >
            <div className='row'>
                <div className='col-md-8'>
                    <HeaderInterior
                        {...props}
                    />
                </div>
            </div>
        </div>
    )
}
