import React from 'react'

export const WrapperData = ({ children }) => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className="card">
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
