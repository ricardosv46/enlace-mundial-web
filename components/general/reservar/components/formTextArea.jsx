import React from 'react'

export const FormTextArea = ({ Tittle, required = false, name, value, onchange }) => {
    return (
        <div className='form-group'>
            <label>
                {Tittle || ''} {required && <span className='text-danger'>*</span>}
            </label>
            <textarea
                name={name}
                className='form-control'
                value={value}
                onChange={onchange}
            />
        </div>
    )
}
