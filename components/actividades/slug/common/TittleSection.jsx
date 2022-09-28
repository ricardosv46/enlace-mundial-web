import React from 'react'

export const TittleSection = ({ tittle }) => {
    return (
        <div className='container-fluid bg-light mt-4 py-2'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='subtitulo-general text-uppercase my-0'>
                        {tittle || ''}
                    </h2>
                </div>
            </div>
        </div>
    )
}
