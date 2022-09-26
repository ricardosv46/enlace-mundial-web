import React from 'react'

export const FormInput = ({ Tittle, required = false, name, type = 'text', value, onchange, error = undefined }) => {
    return (
        <div className='form-group'>
            <label>
                {Tittle || ''} {required && <span className='text-danger'>*</span>}
            </label>
            <input
                type={type}
                name={name}
                className='form-control'
                value={value}
                onChange={onchange}
            />
            <label className='text-danger'>{error || ''}</label>
        </div>
    )
}
