import React from 'react'
import styles from './styles.module.scss'
export const SubMenuTittle = ({ data }) => {
    return (
        <section>
            <header
                className={`${styles.headerInterior} d-none d-md-flex bg-light mt-3 py-2`}
            >
                {/* Desktop */}
                <nav className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            {data.map((item) => {
                                return (
                                    <a
                                        key={item.texto}
                                        className={`${styles.headerInterior_link} text-dark text-uppercase font-weight-bold`}
                                        href={item.url}
                                    >
                                        {item.texto}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </nav>
            </header>
        </section>

    )
}
