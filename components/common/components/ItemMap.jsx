import React from 'react'

const colorData = {
    verde: 'primary',
    rojo: 'danger'
}

const iconData = {
    check: 'fas fa-check',
    checkCircle: 'far fa-check-circle',
    sad: 'far fa-sad-tear',
    cancel: 'fas fa-times'
}

export const ItemMap = ({ tittle, data, icon = 'check', color = 'verde' }) => {
    return (
        <>
            <h5 className='card-title text-secondary font-weight-bold'>
                {tittle}
            </h5>

            <div className='py-2'>
                <ul className='list-unstyled'>
                    {/* data.itinerarioTour.split(',').map */}
                    {data.map((item, i) => {
                        return (
                            <li
                                className='l-miel-itinerario__list-item d-flex mb-2'
                                key={i}
                            >
                                <span className={`text-${colorData[color]} d-inline-block mr-2`}>
                                    <i className={`${iconData[icon]}`}></i>
                                </span>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
