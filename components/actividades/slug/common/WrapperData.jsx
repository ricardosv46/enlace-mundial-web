import React from 'react'

export const WrapperData = ({ children }) => {
    return (
        <div className='container mt-4 p-4 border rounded'>
            {children}
        </div>
    )
}
