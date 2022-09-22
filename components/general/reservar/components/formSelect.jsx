import React from 'react'

export const FormSelect = ({ Tittle, required = false, name, value, onchange, options = [] }) => {
    return (
        <div className='form-group'>
            <label>
                {Tittle || ''} {required && <span className='text-danger'>*</span>}
            </label>
            <select
                name={name}
                className='form-control'
                value={value}
                onChange={onchange}
            >
                {options && options.map((obj, i) => <option key={i} value={obj.name}>{obj?.value || ''}</option>)}
                {/* <option value='DNI'>DNI</option>
                <option value='CE'>Carnet de extranjería</option>
                <option value='PASAPORTE'>Pasaporte</option> */}
            </select>
        </div>
    )
}
