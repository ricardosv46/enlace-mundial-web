import React from 'react'

export const WrapperData = ({ children }) => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8'>
                    {children}
                </div>
            </div>
        </div>
    )
}
